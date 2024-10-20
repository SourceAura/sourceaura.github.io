;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="1d9b0ba4-c5dd-452e-a444-63b6b5141211",e._sentryDebugIdIdentifier="sentry-dbid-1d9b0ba4-c5dd-452e-a444-63b6b5141211")}catch(e){}}();import querystring from 'querystring';
import './_sentry-release-injection-file_CLoV_fbS.mjs';

const client_id = "80f1d405a5844e74b0c9687ac879935e";
const client_secret = "73e0fea4fd474b9baf0442aa78900f1e";
const refresh_token = "AQAMVDus5sZa-G5XZk-LVOA9boFthl1Zu8bIMnyyU5OEVjk8d7UGhHBXoWa0i-F6bM4BqU-71YhAaiok4bBdRqVlvLtZNz_Z09cg6M93wcrfHkYa4ziWDffiPLFrqpaHjs0";
const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const getAccessToken = async () => {
  try {
    console.log("Fetching access token from Spotify");
    const response = await fetch(TOKEN_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      // Set the request body with the required parameters
      body: querystring.stringify({
        grant_type: "refresh_token",
        refresh_token
      })
    });
    if (!response.ok) {
      console.error("Error response from Spotify token endpoint:", response.status, response.statusText);
      const errorBody = await response.text();
      console.error("Error body:", errorBody);
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Access token obtained successfully");
    return data;
  } catch (error) {
    console.error("Error getting access token:", error);
    throw error;
  }
};
const getNowPlaying = async () => {
  try {
    const { access_token } = await getAccessToken();
    console.log("Access token obtained, fetching now playing");
    const response = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    });
    if (!response.ok) {
      console.error("Error response from Spotify now playing endpoint:", response.status, response.statusText);
      const errorBody = await response.text();
      console.error("Error body:", errorBody);
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response;
  } catch (error) {
    console.error("Error getting now playing:", error);
    throw error;
  }
};

export { getNowPlaying as g };
//# sourceMappingURL=spotify_DKpWw9cv.mjs.map
