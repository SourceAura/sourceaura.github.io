;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="8d161f89-fe03-4125-85ac-f9b6cce7a06f",e._sentryDebugIdIdentifier="sentry-dbid-8d161f89-fe03-4125-85ac-f9b6cce7a06f")}catch(e){}}();import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_DS-A_QIZ.mjs';
import { g as decodeKey } from './chunks/astro/server_Bkp0-z4m.mjs';
import 'clsx';

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
    middleware(_, next) {
      return next();
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

const manifest = deserializeManifest({"hrefRoot":"file:///home/source/GitHub/sourceaura.github.io/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"euthymia/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/euthymia","isIndex":false,"type":"page","pattern":"^\\/euthymia\\/?$","segments":[[{"content":"euthymia","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/euthymia.astro","pathname":"/euthymia","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"petals/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/petals","isIndex":true,"type":"page","pattern":"^\\/petals\\/?$","segments":[[{"content":"petals","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/petals/index.astro","pathname":"/petals","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"rss.xml","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BfFjY_ts.js"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://sourceaura.vercel.app","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/home/source/GitHub/sourceaura.github.io/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/home/source/GitHub/sourceaura.github.io/src/pages/petals/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/petals/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/source/GitHub/sourceaura.github.io/src/pages/petals/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/petals/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/source/GitHub/sourceaura.github.io/src/pages/rss.xml.js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@js",{"propagation":"in-tree","containsHead":false}],["/home/source/GitHub/sourceaura.github.io/src/components/Header.astro",{"propagation":"in-tree","containsHead":false}],["/home/source/GitHub/sourceaura.github.io/src/layouts/Layout.astro",{"propagation":"in-tree","containsHead":false}],["/home/source/GitHub/sourceaura.github.io/src/pages/404.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/404@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/source/GitHub/sourceaura.github.io/src/pages/about.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/about@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/source/GitHub/sourceaura.github.io/src/pages/euthymia.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/euthymia@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/source/GitHub/sourceaura.github.io/src/components/PageFind.astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/euthymia@_@astro":"pages/euthymia.astro.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"pages/rss.xml.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/petals/index@_@astro":"pages/petals.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/petals/[...slug]@_@astro":"pages/petals/_---slug_.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-renderers":"renderers.mjs","/home/source/GitHub/sourceaura.github.io/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_x7FlrDD-.mjs","/home/source/GitHub/sourceaura.github.io/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BHb8tR0K.mjs","/home/source/GitHub/sourceaura.github.io/src/content/petals/00-nemo/index.mdx?astroContentCollectionEntry=true":"chunks/index_BSUuwYdp.mjs","/home/source/GitHub/sourceaura.github.io/src/content/petals/01-spot-eye-see/index.md?astroContentCollectionEntry=true":"chunks/index_Bl4Pj-Vy.mjs","/home/source/GitHub/sourceaura.github.io/src/content/petals/05-web-dev/index.mdx?astroContentCollectionEntry=true":"chunks/index_DJOzBuWa.mjs","/home/source/GitHub/sourceaura.github.io/src/content/petals/07-axols/index.md?astroContentCollectionEntry=true":"chunks/index_DMufjfY3.mjs","/home/source/GitHub/sourceaura.github.io/src/content/petals/08-project-1/index.md?astroContentCollectionEntry=true":"chunks/index_D7AcweF_.mjs","/home/source/GitHub/sourceaura.github.io/src/content/petals/99-draft/index.md?astroContentCollectionEntry=true":"chunks/index_BywYpHM9.mjs","/home/source/GitHub/sourceaura.github.io/src/content/petals/00-nemo/index.mdx?astroPropagatedAssets":"chunks/index_DvlPUqXM.mjs","/home/source/GitHub/sourceaura.github.io/src/content/petals/01-spot-eye-see/index.md?astroPropagatedAssets":"chunks/index_C-Ug6p52.mjs","/home/source/GitHub/sourceaura.github.io/src/content/petals/05-web-dev/index.mdx?astroPropagatedAssets":"chunks/index_BJAO4WcR.mjs","/home/source/GitHub/sourceaura.github.io/src/content/petals/07-axols/index.md?astroPropagatedAssets":"chunks/index_DpchOi1M.mjs","/home/source/GitHub/sourceaura.github.io/src/content/petals/08-project-1/index.md?astroPropagatedAssets":"chunks/index_74NS0gNP.mjs","/home/source/GitHub/sourceaura.github.io/src/content/petals/99-draft/index.md?astroPropagatedAssets":"chunks/index_CP2KOrog.mjs","\u0000astro:asset-imports":"chunks/_astro_asset-imports_C4jkHq1J.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_CdytXPM_.mjs","/home/source/GitHub/sourceaura.github.io/src/content/petals/00-nemo/index.mdx":"chunks/index_CSZw3D22.mjs","/home/source/GitHub/sourceaura.github.io/src/content/petals/01-spot-eye-see/index.md":"chunks/index_BsjLW_24.mjs","/home/source/GitHub/sourceaura.github.io/src/content/petals/05-web-dev/index.mdx":"chunks/index_GPdNnx6I.mjs","/home/source/GitHub/sourceaura.github.io/src/content/petals/07-axols/index.md":"chunks/index_BGLk-PN3.mjs","/home/source/GitHub/sourceaura.github.io/src/content/petals/08-project-1/index.md":"chunks/index_B5R0GQRQ.mjs","/home/source/GitHub/sourceaura.github.io/src/content/petals/99-draft/index.md":"chunks/index_CY52P0Ei.mjs","/home/source/GitHub/sourceaura.github.io/node_modules/@astrojs/vercel/dist/image/build-service.js":"chunks/build-service_D2z5vTAf.mjs","\u0000@astrojs-manifest":"manifest_CqBuXmeM.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.BfG6WK8s.js","@astrojs/vue/client.js":"_astro/client.UTKMEhLQ.js","@astrojs/react/client.js":"_astro/client.9uZvJXt6.js","astro:scripts/page.js":"_astro/page.BfFjY_ts.js","/astro/hoisted.js?q=1":"_astro/hoisted.DFT1MG1E.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/may-be.DFdu3FIy.png","/_astro/about.BHgejzYD.css","/chunks/astro_CxW_MBnE.mjs.map","/chunks/astro/assets-service_DVRMftj1.mjs.map","/chunks/astro/env-setup_x7FlrDD-.mjs.map","/chunks/astro/server_Bkp0-z4m.mjs.map","/chunks/BackToPrevious_CQjI74g3.mjs.map","/chunks/FormattedDate_DfUVYG8H.mjs.map","/chunks/utils_DaMc5IgF.mjs.map","/chunks/vnode-children_BHb8tR0K.mjs.map","/chunks/index_BSUuwYdp.mjs.map","/chunks/index_Bl4Pj-Vy.mjs.map","/chunks/index_DJOzBuWa.mjs.map","/chunks/index_DMufjfY3.mjs.map","/chunks/index_D7AcweF_.mjs.map","/chunks/index_BywYpHM9.mjs.map","/chunks/index_DvlPUqXM.mjs.map","/chunks/index_C-Ug6p52.mjs.map","/chunks/index_BJAO4WcR.mjs.map","/chunks/index_DpchOi1M.mjs.map","/chunks/index_74NS0gNP.mjs.map","/chunks/index_CP2KOrog.mjs.map","/chunks/_astro_asset-imports_C4jkHq1J.mjs.map","/chunks/_astro_data-layer-content_CdytXPM_.mjs.map","/chunks/index_CSZw3D22.mjs.map","/chunks/index_BsjLW_24.mjs.map","/chunks/index_GPdNnx6I.mjs.map","/chunks/index_BGLk-PN3.mjs.map","/chunks/index_B5R0GQRQ.mjs.map","/chunks/index_CY52P0Ei.mjs.map","/chunks/consts_Cz7b8feT.mjs.map","/chunks/build-service_D2z5vTAf.mjs.map","/manifest_CqBuXmeM.mjs.map","/chunks/astro-designed-error-pages_DS-A_QIZ.mjs.map","/chunks/_astro_content_moAVZzeT.mjs.map","/chunks/Layout_CjQuuQTj.mjs.map","/chunks/index_BP-OoINi.mjs.map","/chunks/entrypoint_D1P6-Zw-.mjs.map","/chunks/_astro_assets_CcS1kKrT.mjs.map","/_@astrojs-ssr-adapter.mjs.map","/entry.mjs.map","/_astro-internal_middleware.mjs.map","/pages/404.astro.mjs.map","/pages/euthymia.astro.mjs.map","/pages/rss.xml.astro.mjs.map","/pages/_image.astro.mjs.map","/pages/petals.astro.mjs.map","/pages/index.astro.mjs.map","/pages/petals/_---slug_.astro.mjs.map","/pages/about.astro.mjs.map","/renderers.mjs.map","/middleware.mjs.map","/a-mans-mission.png","/favicon.ico","/favicon.svg","/_astro/_sentry-release-injection-file.Cvu5Jw3O.js","/_astro/_sentry-release-injection-file.Cvu5Jw3O.js.map","/_astro/client.9uZvJXt6.js","/_astro/client.9uZvJXt6.js.map","/_astro/client.UTKMEhLQ.js","/_astro/client.UTKMEhLQ.js.map","/_astro/hoisted.BfG6WK8s.js","/_astro/hoisted.BfG6WK8s.js.map","/_astro/hoisted.DFT1MG1E.js","/_astro/hoisted.DFT1MG1E.js.map","/_astro/page.BfFjY_ts.js","/_astro/page.BfFjY_ts.js.map","/_astro/page.BfFjY_ts.js","/404.html","/about/index.html","/euthymia/index.html","/petals/index.html","/rss.xml","/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"fWwWqBYV7BN8gGBvtXfLDZw192BF+6jULzTv7Z4gfDc=","experimentalEnvGetSecretEnabled":false});

export { manifest };
//# sourceMappingURL=manifest_CqBuXmeM.mjs.map
