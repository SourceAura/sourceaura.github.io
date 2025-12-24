// spotify-pkce.js
import crypto from "crypto";
import http from "http";
import { exec } from "child_process";

const CLIENT_ID = "6256da189f664c77b9e0f815e3557365";
const PORT = 8000;
const REDIRECT_URI = `http://127.0.0.1:${PORT}/callback`;
const SCOPES = [
  "user-read-currently-playing",
  "user-read-playback-state",
].join(" ");

function base64url(buffer) {
  return buffer
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

// Generate PKCE values
const codeVerifier = base64url(crypto.randomBytes(32));
const codeChallenge = base64url(
  crypto.createHash("sha256").update(codeVerifier).digest(),
);

// Step 1: open Spotify authorize page
const authUrl =
  "https://accounts.spotify.com/authorize?" +
  new URLSearchParams({
    client_id: CLIENT_ID,
    response_type: "code",
    redirect_uri: REDIRECT_URI,
    scope: SCOPES,
    code_challenge_method: "S256",
    code_challenge: codeChallenge,
  }).toString();

console.log("Opening browser for Spotify auth...");
exec(`open "${authUrl}" || xdg-open "${authUrl}"`);

// Step 2: local callback server
http
  .createServer(async (req, res) => {
    if (!req.url.startsWith("/callback")) return;

    const url = new URL(req.url, REDIRECT_URI);
    const code = url.searchParams.get("code");

    if (!code) {
      res.end("No code received");
      return;
    }

    // Step 3: exchange code for tokens
    const tokenRes = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: CLIENT_ID,
        grant_type: "authorization_code",
        code,
        redirect_uri: REDIRECT_URI,
        code_verifier: codeVerifier,
      }),
    });

    const data = await tokenRes.json();

    console.log("\n🎉 SUCCESS");
    console.log("Refresh Token:\n");
    console.log(data.refresh_token);

    res.end("Spotify authorized. You can close this tab.");
    process.exit(0);
  })
  .listen(PORT, () => {
    console.log(`Listening on ${REDIRECT_URI}`);
  });
