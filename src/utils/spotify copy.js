import querystring from 'querystring';

// Environment variables for Spotify API credentials
const client_id = import.meta.env.SPOTIFY_CLIENT_ID;
const client_secret = import.meta.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = import.meta.env.SPOTIFY_REFRESH_TOKEN;

// Create a base64 encoded string of client_id:client_secret for authentication
const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

// Spotify API endpoints
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

/**
 * Function to get a new access token using the refresh token
 * @returns {Promise<Object>} A promise that resolves to the access token data
 */
const getAccessToken = async () => {
  try {
    console.log('Fetching access token from Spotify');
    
    // Make a POST request to the Spotify token endpoint
    const response = await fetch(TOKEN_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      // Set the request body with the required parameters
      body: querystring.stringify({
        grant_type: 'refresh_token',
        refresh_token,
      }),
    });

    // Check if the response is successful
    if (!response.ok) {
      console.error('Error response from Spotify token endpoint:', response.status, response.statusText);
      const errorBody = await response.text();
      console.error('Error body:', errorBody);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse the JSON response
    const data = await response.json();
    console.log('Access token obtained successfully');
    return data;
  } catch (error) {
    console.error('Error getting access token:', error);
    throw error;
  }
};

/**
 * Function to get the currently playing track from Spotify
 * @returns {Promise<Response>} A promise that resolves to the Spotify API response
 */
const getNowPlaying = async () => {
  try {
    // Get a new access token
    const { access_token } = await getAccessToken();
    console.log('Access token obtained, fetching now playing');

    // Make a GET request to the Spotify API to get the currently playing track
    const response = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    // Check if the response is successful
    if (!response.ok) {
      console.error('Error response from Spotify now playing endpoint:', response.status, response.statusText);
      const errorBody = await response.text();
      console.error('Error body:', errorBody);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response;
  } catch (error) {
    console.error('Error getting now playing:', error);
    throw error;
  }
};

// Export the functions for use in other parts of the application
export { getAccessToken, getNowPlaying };
