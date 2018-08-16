module.exports = {
    globDirectory: 'build/',
    globPatterns: ['**/*.{json,png,html,js,css,woff2,svg,ttf,eot,woff,otf}'],
    swDest: 'build\\service-worker.js',
    runtimeCaching: [{
    // Match any same-origin request that contains 'api'.
        urlPattern: 'https://dxc-intervieweetracking-api.azurewebsites.net/api/(.*)',
        // Apply a network-first strategy.
        handler: 'networkFirst',
    }],
};
