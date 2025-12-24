;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="df49537d-73b4-471d-9a39-7fb5d6d506c0",e._sentryDebugIdIdentifier="sentry-dbid-df49537d-73b4-471d-9a39-7fb5d6d506c0")}catch(e){}}();import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import { N as NOOP_MIDDLEWARE_HEADER, o as decodeKey } from './chunks/astro/server_CiN3CFiE.mjs';
import 'clsx';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/sourceaura/Documents/GitHub/sourceaura.github.io/","adapterName":"@astrojs/vercel/static","routes":[{"file":"file:///home/sourceaura/Documents/GitHub/sourceaura.github.io/.vercel/output/static/404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/sourceaura/Documents/GitHub/sourceaura.github.io/.vercel/output/static/about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/sourceaura/Documents/GitHub/sourceaura.github.io/.vercel/output/static/api/spotify/now-playing","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/spotify/now-playing","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/spotify\\/now-playing\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"spotify","dynamic":false,"spread":false}],[{"content":"now-playing","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/spotify/now-playing.ts","pathname":"/api/spotify/now-playing","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/sourceaura/Documents/GitHub/sourceaura.github.io/.vercel/output/static/api/spotify/now-playingV1","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/spotify/now-playingv1","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/spotify\\/now-playingV1\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"spotify","dynamic":false,"spread":false}],[{"content":"now-playingV1","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/spotify/now-playingV1.js","pathname":"/api/spotify/now-playingV1","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/sourceaura/Documents/GitHub/sourceaura.github.io/.vercel/output/static/euthymia/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/euthymia","isIndex":false,"type":"page","pattern":"^\\/euthymia\\/?$","segments":[[{"content":"euthymia","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/euthymia.astro","pathname":"/euthymia","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/sourceaura/Documents/GitHub/sourceaura.github.io/.vercel/output/static/petals/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/petals","isIndex":true,"type":"page","pattern":"^\\/petals\\/?$","segments":[[{"content":"petals","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/petals/index.astro","pathname":"/petals","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/sourceaura/Documents/GitHub/sourceaura.github.io/.vercel/output/static/rss.xml","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/sourceaura/Documents/GitHub/sourceaura.github.io/.vercel/output/static/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://sourceaura.vercel.app","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/home/sourceaura/Documents/GitHub/sourceaura.github.io/src/pages/petals/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/petals/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/sourceaura/Documents/GitHub/sourceaura.github.io/src/pages/petals/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/petals/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/sourceaura/Documents/GitHub/sourceaura.github.io/src/pages/rss.xml.js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@js",{"propagation":"in-tree","containsHead":false}],["/home/sourceaura/Documents/GitHub/sourceaura.github.io/src/components/Header.astro",{"propagation":"in-tree","containsHead":false}],["/home/sourceaura/Documents/GitHub/sourceaura.github.io/src/layouts/Layout.astro",{"propagation":"in-tree","containsHead":false}],["/home/sourceaura/Documents/GitHub/sourceaura.github.io/src/pages/404.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/404@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/sourceaura/Documents/GitHub/sourceaura.github.io/src/pages/about.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/about@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/sourceaura/Documents/GitHub/sourceaura.github.io/src/pages/euthymia.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/euthymia@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/sourceaura/Documents/GitHub/sourceaura.github.io/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/sourceaura/Documents/GitHub/sourceaura.github.io/src/components/PageFind.astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/api/spotify/now-playing@_@ts":"pages/api/spotify/now-playing.astro.mjs","\u0000@astro-page:src/pages/api/spotify/now-playingV1@_@js":"pages/api/spotify/now-playingv1.astro.mjs","\u0000@astro-page:src/pages/euthymia@_@astro":"pages/euthymia.astro.mjs","\u0000@astro-page:src/pages/petals/index@_@astro":"pages/petals.astro.mjs","\u0000@astro-page:src/pages/petals/[...slug]@_@astro":"pages/petals/_---slug_.astro.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"pages/rss.xml.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_B8d3tulB.mjs","/home/sourceaura/Documents/GitHub/sourceaura.github.io/src/content/petals/00-nemo/index.mdx?astroContentCollectionEntry=true":"chunks/index_DrO-y4uX.mjs","/home/sourceaura/Documents/GitHub/sourceaura.github.io/src/content/petals/01-spot-eye-see/index.mdx?astroContentCollectionEntry=true":"chunks/index_CVKpHt4K.mjs","/home/sourceaura/Documents/GitHub/sourceaura.github.io/src/content/petals/05-web-dev/index.mdx?astroContentCollectionEntry=true":"chunks/index_DuCRma-y.mjs","/home/sourceaura/Documents/GitHub/sourceaura.github.io/src/content/petals/07-axols/index.mdx?astroContentCollectionEntry=true":"chunks/index_CseMtWeC.mjs","/home/sourceaura/Documents/GitHub/sourceaura.github.io/src/content/petals/08-project-1/index.md?astroContentCollectionEntry=true":"chunks/index_D5Vhvto9.mjs","/home/sourceaura/Documents/GitHub/sourceaura.github.io/src/content/petals/99-draft/index.md?astroContentCollectionEntry=true":"chunks/index_DHdF4_sx.mjs","/home/sourceaura/Documents/GitHub/sourceaura.github.io/src/content/petals/00-nemo/index.mdx?astroPropagatedAssets":"chunks/index_buTFAZBc.mjs","/home/sourceaura/Documents/GitHub/sourceaura.github.io/src/content/petals/01-spot-eye-see/index.mdx?astroPropagatedAssets":"chunks/index_CVVzYbXV.mjs","/home/sourceaura/Documents/GitHub/sourceaura.github.io/src/content/petals/05-web-dev/index.mdx?astroPropagatedAssets":"chunks/index_CZrCbrwm.mjs","/home/sourceaura/Documents/GitHub/sourceaura.github.io/src/content/petals/07-axols/index.mdx?astroPropagatedAssets":"chunks/index_DqeEku_W.mjs","/home/sourceaura/Documents/GitHub/sourceaura.github.io/src/content/petals/08-project-1/index.md?astroPropagatedAssets":"chunks/index_D20DbwKv.mjs","/home/sourceaura/Documents/GitHub/sourceaura.github.io/src/content/petals/99-draft/index.md?astroPropagatedAssets":"chunks/index_DOVSMhDp.mjs","\u0000astro:asset-imports":"chunks/_astro_asset-imports_DixfAs6v.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_Bn6sF24B.mjs","/home/sourceaura/Documents/GitHub/sourceaura.github.io/src/content/petals/00-nemo/index.mdx":"chunks/index_xoW2YUP6.mjs","/home/sourceaura/Documents/GitHub/sourceaura.github.io/src/content/petals/01-spot-eye-see/index.mdx":"chunks/index_Co25DiQA.mjs","/home/sourceaura/Documents/GitHub/sourceaura.github.io/src/content/petals/05-web-dev/index.mdx":"chunks/index_CUKnThKx.mjs","/home/sourceaura/Documents/GitHub/sourceaura.github.io/src/content/petals/07-axols/index.mdx":"chunks/index_C0wiCSyD.mjs","/home/sourceaura/Documents/GitHub/sourceaura.github.io/src/content/petals/08-project-1/index.md":"chunks/index_d3M5w2HO.mjs","/home/sourceaura/Documents/GitHub/sourceaura.github.io/src/content/petals/99-draft/index.md":"chunks/index_D3ghZSmA.mjs","astro-pagefind/components/Search":"_astro/Search.Dt5Wg_1g.js","@astrojs/vue/client.js":"_astro/client.BrURGyhS.js","@astrojs/react/client.js":"_astro/client.DKeo5XOF.js","/astro/hoisted.js?q=0":"_astro/hoisted.CBH_x_Dx.js","astro:scripts/page.js":"_astro/page.BgO0juom.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/page.BgO0juom.js","/file:///home/sourceaura/Documents/GitHub/sourceaura.github.io/.vercel/output/static/404.html","/file:///home/sourceaura/Documents/GitHub/sourceaura.github.io/.vercel/output/static/about/index.html","/file:///home/sourceaura/Documents/GitHub/sourceaura.github.io/.vercel/output/static/api/spotify/now-playing","/file:///home/sourceaura/Documents/GitHub/sourceaura.github.io/.vercel/output/static/api/spotify/now-playingV1","/file:///home/sourceaura/Documents/GitHub/sourceaura.github.io/.vercel/output/static/euthymia/index.html","/file:///home/sourceaura/Documents/GitHub/sourceaura.github.io/.vercel/output/static/petals/index.html","/file:///home/sourceaura/Documents/GitHub/sourceaura.github.io/.vercel/output/static/rss.xml","/file:///home/sourceaura/Documents/GitHub/sourceaura.github.io/.vercel/output/static/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"s5LaTFNNqFZjFtGiEObQMl6c4u0BKQH0H8cZtkWRLlU=","experimentalEnvGetSecretEnabled":false});

export { manifest };
//# sourceMappingURL=manifest_B8d3tulB.mjs.map
