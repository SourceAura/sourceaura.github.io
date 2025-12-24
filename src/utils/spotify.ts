// src/utils/spotify.ts

const CLIENT_ID = import.meta.env.SPOTIFY_CLIENT_ID;
const REFRESH_TOKEN = import.meta.env.SPOTIFY_REFRESH_TOKEN;

const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const NOW_PLAYING_ENDPOINT =
  "https://api.spotify.com/v1/me/player/currently-playing";

if (!CLIENT_ID || !REFRESH_TOKEN) {
  console.error("❌ Missing Spotify env vars");
}

// ⬇️ EXPLICIT NAMED EXPORT
export async function getAccessToken(): Promise<string | null> {
  console.log("🔐 Attempting to refresh Spotify access token");

  const res = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: CLIENT_ID,
      grant_type: "refresh_token",
      refresh_token: REFRESH_TOKEN,
    }),
  });

  const raw = await res.text();
  console.log("📨 Spotify token raw response:", raw);

  let data: any;
  try {
    data = JSON.parse(raw);
  } catch {
    console.error("❌ Token response not JSON");
    return null;
  }

  if (!res.ok || data.error || !data.access_token) {
    console.error("❌ Token refresh failed:", data);
    return null;
  }

  console.log("✅ Spotify access token refreshed");
  return data.access_token;
}

// ⬇️ EXPLICIT NAMED EXPORT
export async function getNowPlaying(): Promise<Response | null> {
  console.log("🎵 getNowPlaying() called");

  const accessToken = await getAccessToken();
  if (!accessToken) {
    console.warn("⚠ No access token, skipping Spotify request");
    return null;
  }

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
}
