import type { APIRoute } from "astro";

// ⬇️ MUST match named export exactly
import { getNowPlaying } from "../../../utils/spotify";

export const prerender = false;

function json(data: any) {
  return new Response(JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
  });
}

export const GET: APIRoute = async () => {
  console.log("🔥 /api/spotify/now-playing HIT");

  try {
    const response = await getNowPlaying();

    if (!response) {
      return json({ isPlaying: false, debug: "no-response" });
    }

    if (response.status === 204) {
      return json({ isPlaying: false, debug: "204" });
    }

    if (!response.ok) {
      return json({ isPlaying: false, debug: "not-ok" });
    }

    const data = await response.json();

    if (!data?.item) {
      return json({ isPlaying: false, debug: "no-item" });
    }

    return json({
      isPlaying: Boolean(data.is_playing),
      title: data.item.name,
      artist: data.item.artists.map((a: any) => a.name).join(", "),
      albumImageUrl: data.item.album.images[0]?.url ?? "",
      songUrl: data.item.external_urls.spotify,
      debug: "ok",
    });
  } catch (err) {
    console.error("💥 Unhandled API error:", err);
    return json({ isPlaying: false, debug: "exception" });
  }
};
