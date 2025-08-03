const CACHE_NAME = 'barrio-cache-v2';
const urlsToCache = [
  '/',
  '/index.html',
  '/login.html',
  '/register.html',
  '/home.html',

  '/components/intro.html',
  '/assets/animated.svg',

  '/css/global.css',
  '/css/index.css',
  '/css/intro.css',
  '/css/styles.css',

  '/js/index.js',
  '/js/intro.js',
  '/js/utils.js',
  '/js/main.js',

  '/images/logo.png',
  '/favicon.ico',
  '/manifest.json',
  '/site.webmanifest',
  '/apple-touch-icon.png'
];

// Instalación del Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .then(() => self.skipWaiting()) // Activa SW inmediatamente
  );
});

// Activación del Service Worker
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames
          .filter(name => name !== CACHE_NAME)
          .map(name => caches.delete(name))
      )
    ).then(() => self.clients.claim()) // Toma control inmediato de las pestañas abiertas
  );
});

// Interceptar peticiones y responder desde cache o red
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      // Si está en cache, devuelve cache
      if (cachedResponse) {
        return cachedResponse;
      }

      // Si no, hace fetch normal y agrega a cache para futuro
      return fetch(event.request).then(networkResponse => {
        // Solo cachea respuestas válidas
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
          return networkResponse;
        }

        // Clona la respuesta para ponerla en cache
        const responseToCache = networkResponse.clone();

        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseToCache);
        });

        return networkResponse;
      }).catch(() => {
        // Opcional: fallback offline (ej: página offline o imagen placeholder)
        // return caches.match('/offline.html');
      });
    })
  );
});