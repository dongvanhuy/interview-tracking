module.exports = {
    globDirectory: 'build/',
    globPatterns: ['**/*.{json,png,html,js,css,svg,woff2,ttf,eot,woff,otf}'],
    swDest: 'build/service-worker.js',
    navigateFallback: '/index.html',
    clientsClaim: true,
    skipWaiting: true,
    runtimeCaching: [
        {
            // Match any same-origin request that contains 'api'.
            urlPattern: new RegExp('https://dxc-interview-tracking-api-release.azurewebsites.net/api/(.*)',),
            // Apply a network-first strategy.
            handler: 'networkFirst',
        },
        {
            // Match any same-origin request that contains 'api'.
            urlPattern: new RegExp('https://dxc-interview-tracking-api-release.azurewebsites.net/api/(.*)',),
            // Apply a network-first strategy.
            handler: 'staleWhileRevalidate',
            options: {
                cacheableResponse: {
                    statuses: [0, 200],
                },
            },
        },
        {
            // To match cross-origin requests, use a RegExp that matches
            // the start of the origin:
            urlPattern: new RegExp('https://dxc-interview-tracking-api-release.azurewebsites.net/api/(.*)',),
            handler: 'cacheFirst',
            options: {
                cacheName: 'my-api-cache',
                expiration: {
                    maxEntries: 50,
                    maxAgeSeconds: 30 * 24 * 60 * 60,
                },
                cacheableResponse: {
                    statuses: [0, 200],
                },
            },
        },
    ],
};
