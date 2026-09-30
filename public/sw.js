importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.2/workbox-sw.js');

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
  // js（harumi 本体はページの JS に同梱しているため事前キャッシュしない。存在しない unpkg の URL が残ると install 全体が失敗していた）
  'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js',
  // css
  'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css',
  // font
  'fonts/genkai-sub.woff',
  'fonts/genkai-sub.woff2',
  // other
  'manifest.json'
]);