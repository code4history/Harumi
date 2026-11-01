importScripts('./workbox/workbox-sw.js');
workbox.setConfig({ modulePathPrefix: './workbox/' });

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.navigationPreload.enable();

// ------------------  runtime caching starts ---------------------

// splash icon images
workbox.routing.registerRoute(
  new RegExp('icons/.*'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'icons',
    maxEntries: 50
  })
);

// manifest
workbox.routing.registerRoute(
  new RegExp('manifest.json'),
  new workbox.strategies.StaleWhileRevalidate()
);

// ------------------  precaching the assets ---------------------
workbox.precaching.precacheAndRoute([
  // html
  'index.html',
  // harumi 本体はページの JS に同梱しているため事前キャッシュしない。存在しない unpkg の URL が残ると install 全体が失敗していた
  // bootstrap はページが integrity 付きで CDN から読む。Service Worker には第三者の URL を持たせない
  // font
  'fonts/genkai-sub.woff',
  'fonts/genkai-sub.woff2',
  // other
  'manifest.json'
]);