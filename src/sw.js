const STATIC_CACHE_NAME = 'static-assets-4'
const DYNAMIC_CACHE_NAME = 'dynamic-4'

self.addEventListener('install', function (event) {
  console.log('[SERVICE WORKER] Installing...', event);
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME)
    .then(function (cache) {
      console.log('[SERVICE WORKER] caching app shell');
      cache.addAll([
        '/',
        'https://fonts.googleapis.com/icon?family=Material+Icons'
        // aqui vão tbm fonts externas fonts, grids etc
      ]);
    })
  );
});

self.addEventListener('activate', function (event) {
  console.log('[SERVICE WORKER] Activating...', event);
  event.waitUntil(
    caches.keys().then(function (keyList) {
      return Promise.all(keyList.map(function (key) {
        if (key !== STATIC_CACHE_NAME && key !== DYNAMIC_CACHE_NAME) {
          console.log('[SERVICE WORKER] deleting cache', key)
          caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    // verifica se existe algum cache
    caches.match(event.request).then(function (response) {
      if (response) {
        return response;
      } else {
        return fetch(event.request)
          .then(function (res) {
            return caches.open(DYNAMIC_CACHE_NAME)
              .then(function (cache) {
                cache.put(event.request.url, res.clone());
                return res;
              })
          })
          // .catch(function (err) {
          //   return caches.open(STATIC_CACHE_NAME).then(function (cache) {
          //     return cache.match('/offile.html');
          //   })
          // });
      }
    })
  );
});
