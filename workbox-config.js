module.exports = {
    globDirectory: 'build/',
    globPatterns: [
        '**/*.{json,png,html,js,css,svg,woff2,ttf,eot,woff,otf}',
    ],
    swDest: 'build\\sw.js',
    swSrc: 'src-sw.js',
};
