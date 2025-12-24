// src/utils/spotify.ts
import querystring from "querystring";

const client_id = import.meta.env.SPOTIFY_CLIENT_ID;
const client_secret = import.meta.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = import.meta.env.SPOTIFY_REFRESH_TOKEN;

if (!client_id || !client_secret || !refresh_token) {
  // This throws on the server only, which is what we want.
  throw new Error(
    "Missing Spotify env vars. Need SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN",
  );
}

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

const NOW_PLAYING_ENDPOINT = "https://api.spotify.com/v1/me/player/currently-playing";
const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";

export async function getAccessToken(): Promise<{ access_token: string }> {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: querystring.stringify({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });

  if (!response.ok) {
    const body = await response.text().catch(() => "");
    throw new Error(`Spotify token error ${response.status}: ${body}`);
  }

  return response.json();
}

export async function getNowPlaying(): Promise<Response> {
  const { access_token } = await getAccessToken();

  // IMPORTANT: Spotify returns 204 when nothing is playing.
  // Do NOT throw for 204. Just pass the response through.
  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
}
