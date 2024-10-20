;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="46cb20bf-6de9-440f-b23e-4cb9a6d44fac",e._sentryDebugIdIdentifier="sentry-dbid-46cb20bf-6de9-440f-b23e-4cb9a6d44fac")}catch(e){}}();import { g as getNowPlaying } from '../../../chunks/spotify_DKpWw9cv.mjs';
import '../../../chunks/_sentry-release-injection-file_CLoV_fbS.mjs';
export { renderers } from '../../../renderers.mjs';

async function GET() {
  try {
    console.log('Fetching now playing data from Spotify API');
    const response = await getNowPlaying();
    console.log('Spotify API response status:', response.status);

    if (response.status === 204 || response.status > 400) {
      console.log('No song currently playing or error from Spotify API');
      return new Response(JSON.stringify({ isPlaying: false }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const song = await response.json();
    console.log('Spotify API response data:', song);

    if (song.item === null) {
      return new Response(JSON.stringify({ isPlaying: false }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    const isPlaying = song.is_playing;
    const title = song.item.name;
    const artist = song.item.artists.map((_artist) => _artist.name).join(', ');
    const album = song.item.album.name;
    const albumImageUrl = song.item.album.images[0].url;
    const songUrl = song.item.external_urls.spotify;

    return new Response(
      JSON.stringify({
        isPlaying,
        title,
        artist,
        album,
        albumImageUrl,
        songUrl,
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  } catch (error) {
    console.error('Error in now-playing API route:', error);
    return new Response(JSON.stringify({ isPlaying: false, error: error.message, stack: error.stack }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
//# sourceMappingURL=now-playing copy.astro.mjs.map
