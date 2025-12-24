// src/pages/api/spotify/now-playing.ts
import type { APIRoute } from "astro";
import { getNowPlaying } from "../../../utils/spotify";

export const prerender = false;

type NowPlayingPayload =
  | {
      isPlaying: true;
      title: string;
      artist: string;
      albumImageUrl: string;
      songUrl: string;
    }
  | {
      isPlaying: false;
      title?: string;
      artist?: string;
      albumImageUrl?: string;
      songUrl?: string;
    };

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store, max-age=0",
    },
  });
}

export const GET: APIRoute = async () => {
  try {
    const response = await getNowPlaying();

    // Nothing playing (or Spotify says "no content")
    if (response.status === 204) {
      const payload: NowPlayingPayload = { isPlaying: false };
      return json(payload, 200);
    }

    // If Spotify returns an error, surface a safe "not playing" payload
    if (!response.ok) {
      const payload: NowPlayingPayload = { isPlaying: false };
      return json(payload, 200);
    }

    const song = await response.json();

    // Spotify can return item: null
    if (!song?.item) {
      const payload: NowPlayingPayload = { isPlaying: false };
      return json(payload, 200);
    }

    const isPlaying = Boolean(song.is_playing);
    const title = song.item.name as string;
    const artist = (song.item.artists ?? []).map((a: any) => a.name).join(", ");
    const albumImageUrl = song.item.album?.images?.[0]?.url ?? "";
    const songUrl = song.item.external_urls?.spotify ?? "";

    const payload: NowPlayingPayload = isPlaying
      ? { isPlaying: true, title, artist, albumImageUrl, songUrl }
      : { isPlaying: false, title, artist, albumImageUrl, songUrl };

    return json(payload, 200);
  } catch (err: any) {
    // Don’t leak details to the client. Keep UI stable.
    const payload: NowPlayingPayload = { isPlaying: false };
    return json(payload, 200);
  }
};
