!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{};e.SENTRY_RELEASE={id:"bb3ba3970cd8d37b8e215972f27dee3762bdf01e"};}catch(e){}}();;{try{(function(){var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="6089428a-577a-4a10-9bb3-3b88fc1d051d",e._sentryDebugIdIdentifier="sentry-dbid-6089428a-577a-4a10-9bb3-3b88fc1d051d");})();}catch(e){}};const CLIENT_ID = "415978a1c6b944a19d190f86f36f518e";
const REFRESH_TOKEN = "AQB2jmGL7LNC3Z5io4zdpyeMXbrtvZZ8ujUnq1DURL6MclQFT8MphUMmHmPGVvwYI0UJB8wt51aG7bmPOQkzXLJYm3BwUB1KxrOm-TlTkdgtG9Uv5xYIa9aBi9svF3GJ55cvrCTMOAxFHn5U1zq3RElDGs_BZ5BO2UTE0G6QaSNzkiT86UZTxQ43rw61g2S8aPdj4RfP--xJUr4Jm3rYHy8mWV455LGQ0zNO4eVITNCk_cYXfcB6DZAqb8quYMdZKwIS5794C9MSkYGrhjVSNHbXX-O5OXP3vbkx70NsJu_6GNQtLtpTM3SW0Vg";
const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const NOW_PLAYING_ENDPOINT = "https://api.spotify.com/v1/me/player/currently-playing";
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

export { getNowPlaying as g };
