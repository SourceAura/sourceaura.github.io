!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{};e.SENTRY_RELEASE={id:"2293b9c4aecf68822257eaa0eac3fea9b1c0e931"};}catch(e){}}();;{try{(function(){var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="5a0aa502-7f6c-4627-b593-76046d5ca358",e._sentryDebugIdIdentifier="sentry-dbid-5a0aa502-7f6c-4627-b593-76046d5ca358");})();}catch(e){}};import { g as getNowPlaying } from '../../../chunks/spotify_OrMRdv0A.mjs';
export { renderers } from '../../../renderers.mjs';

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
