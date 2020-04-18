'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "789ea9b4f2bd2646fdf3426d20cc4059",
"assets/assets/fayaz.png": "0b31982833b9cda8ceef3aebd0508971",
"assets/assets/github.png": "dab7b8f26b077a8f61c7f08cab1875fc",
"assets/assets/linkedin.png": "df285ee6f00565573a71c1a2bdcca5a1",
"assets/assets/macpro.png": "2ad360b79fcdcffe5c3dee016436a89c",
"assets/assets/medium.png": "df58c6811d1f83eec103863d57f625a6",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "9b704d3f77dadb539309f9391adf23d0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "8024bfa643e142c519d216b5d5b40dd1",
"/": "8024bfa643e142c519d216b5d5b40dd1",
"main.dart.js": "8a28e3f94f5c08f6ef7c5f448f263b96",
"manifest.json": "e3bb6878d33e8073fd8c3348d06d36fc"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
