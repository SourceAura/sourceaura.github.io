import type { APIRoute } from "astro";

const GITHUB_TOKEN = import.meta.env.GITHUB_TOKEN;

// This endpoint reads Vercel KV and calls the GitHub GraphQL API, so it must
// run on demand: it cannot be baked into the static build.
export const prerender = false;

// Vercel KV needs KV_REST_API_URL / KV_REST_API_TOKEN, which Vercel injects in
// production. They are absent in local dev, and the client is a Proxy that
// throws the moment a method is accessed without them, which paints Vercel's
// error overlay over the whole page. The cache is an enhancement, not a
// dependency, so every KV call is best-effort: if it is unavailable the
// endpoint still works, just uncached.
async function kvGet<T>(key: string): Promise<T | null> {
  try {
    const mod = await import("@vercel/kv");
    return await mod.kv.get<T>(key);
  } catch {
    return null;
  }
}

async function kvSet(key: string, value: unknown): Promise<void> {
  try {
    const mod = await import("@vercel/kv");
    await mod.kv.set(key, value, { ex: 300 });
  } catch {
    // best-effort
  }
}

export const GET: APIRoute = async ({ url }) => {
  const id = url.searchParams.get("id");
  if (!id) {
    return new Response("Missing discussion id", { status: 400 });
  }

  const key = `reactions:${id}`;

  // Try cache first
  const cached = await kvGet<number>(key);
  if (typeof cached === "number") {
    return new Response(JSON.stringify({ total: cached }), {
      headers: { "Content-Type": "application/json" },
    });
  }

  // Fetch from GitHub
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query ($id: ID!) {
          node(id: $id) {
            ... on Discussion {
              reactions(first: 1) {
                totalCount
              }
            }
          }
        }
      `,
      variables: { id },
    }),
  });

  const json = await res.json();
  const total = json?.data?.node?.reactions?.totalCount ?? 0;

  // Cache for 5 minutes
  await kvSet(key, total);

  return new Response(JSON.stringify({ total }), {
    headers: { "Content-Type": "application/json" },
  });
};
