!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{};e.SENTRY_RELEASE={id:"9a980cb74d4f445116bcbf1db83f74d0bd525ea8"};}catch(e){}}();;{try{(function(){var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="8a30735f-4a59-496b-9fd3-a002bcf9d2f0",e._sentryDebugIdIdentifier="sentry-dbid-8a30735f-4a59-496b-9fd3-a002bcf9d2f0");})();}catch(e){}};export { renderers } from '../../../renderers.mjs';

const CLIENT_ID = undefined                                 ;
const REFRESH_TOKEN = undefined                                     ;
const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const NOW_PLAYING_ENDPOINT = "https://api.spotify.com/v1/me/player/currently-playing";
{
  console.error("❌ Missing Spotify env vars");
}
async function getAccessToken() {
  console.log("🔐 Attempting to refresh Spotify access token");
  const res = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      client_id: CLIENT_ID,
      grant_type: "refresh_token",
      refresh_token: REFRESH_TOKEN
    })
  });
  const raw = await res.text();
  console.log("📨 Spotify token raw response:", raw);
  let data;
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
async function getNowPlaying() {
  console.log("🎵 getNowPlaying() called");
  const accessToken = await getAccessToken();
  if (!accessToken) {
    console.warn("⚠ No access token, skipping Spotify request");
    return null;
  }
  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });
}

const prerender = false;
function json(data) {
  return new Response(JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store"
    }
  });
}
const GET = async () => {
  console.log("🔥 /api/spotify/now-playing HIT");
  try {
    const response = await getNowPlaying();
    if (!response) {
      return json({
        isPlaying: false,
        debug: "no-response"
      });
    }
    if (response.status === 204) {
      return json({
        isPlaying: false,
        debug: "204"
      });
    }
    if (!response.ok) {
      return json({
        isPlaying: false,
        debug: "not-ok"
      });
    }
    const data = await response.json();
    if (!data?.item) {
      return json({
        isPlaying: false,
        debug: "no-item"
      });
    }
    return json({
      isPlaying: Boolean(data.is_playing),
      title: data.item.name,
      artist: data.item.artists.map((a) => a.name).join(", "),
      albumImageUrl: data.item.album.images[0]?.url ?? "",
      songUrl: data.item.external_urls.spotify,
      debug: "ok"
    });
  } catch (err) {
    console.error("💥 Unhandled API error:", err);
    return json({
      isPlaying: false,
      debug: "exception"
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
