importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js');


workbox.routing.registerRoute(
    'https://dxc-interview-tracking-api-release.azurewebsites.net/*',
    workbox.strategies.cacheFirst({
        cacheName: 'api',
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 50,
                maxAgeSeconds: 5 * 60, // 5 minutes
            }),
            new workbox.cacheableResponse.Plugin({
                statuses: [0, 200],
            }),
        ],
    }),
);

workbox.precaching.precacheAndRoute([]);
