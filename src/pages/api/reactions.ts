import { kv } from "@vercel/kv";
import type { APIRoute } from "astro";

const GITHUB_TOKEN = import.meta.env.GITHUB_TOKEN;

export const GET: APIRoute = async ({ url }) => {
  const id = url.searchParams.get("id");
  if (!id) {
    return new Response("Missing discussion id", { status: 400 });
  }

  const key = `reactions:${id}`;

  // 1️⃣ Try cache first
  const cached = await kv.get<number>(key);
  if (typeof cached === "number") {
    return new Response(JSON.stringify({ total: cached }), {
      headers: { "Content-Type": "application/json" },
    });
  }

  // 2️⃣ Fetch from GitHub
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

  // 3️⃣ Cache for 5 minutes
  await kv.set(key, total, { ex: 300 });

  return new Response(JSON.stringify({ total }), {
    headers: { "Content-Type": "application/json" },
  });
};
