const CACHE_NAME = 'vidal-detective-v1.1';
const OFFLINE_URL = '/mobile.html';

// Resources to cache
const urlsToCache = [
  '/mobile.html',
  '/src/mobile.tsx',
  '/src/main.tsx',
  '/styles/globals.css',
  '/icon-192x192.png',
  '/icon-512x512.png',
  '/apple-touch-icon.png',
  // Add other critical resources
];

// Install event - cache resources
self.addEventListener('install', event => {
  console.log('[SW] Installing...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[SW] Caching app shell');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('[SW] All resources cached');
        return self.skipWaiting();
      })
  );
});

// Activate event - clean old caches
self.addEventListener('activate', event => {
  console.log('[SW] Activating...');
  
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('[SW] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('[SW] Activated');
      return self.clients.claim();
    })
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Skip external requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached version
        if (response) {
          console.log('[SW] Serving from cache:', event.request.url);
          return response;
        }

        // Fetch from network
        console.log('[SW] Fetching from network:', event.request.url);
        return fetch(event.request)
          .then(response => {
            // Don't cache if not a valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response
            const responseToCache = response.clone();

            // Add to cache
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });

            return response;
          })
          .catch(() => {
            // Network failed, try to serve offline page
            if (event.request.destination === 'document') {
              return caches.match(OFFLINE_URL);
            }
            
            // For other resources, return a generic offline response
            return new Response('Offline', {
              status: 503,
              statusText: 'Service Unavailable'
            });
          });
      })
  );
});

// Push event for notifications (optional)
self.addEventListener('push', event => {
  if (event.data) {
    const options = {
      body: event.data.text(),
      icon: '/icon-192x192.png',
      badge: '/badge-72x72.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: '2'
      },
      actions: [
        {
          action: 'explore',
          title: 'Открыть сайт',
          icon: '/action-explore.png'
        },
        {
          action: 'call',
          title: 'Позвонить',
          icon: '/action-call.png'
        }
      ]
    };

    event.waitUntil(
      self.registration.showNotification('Детективное агентство ВИДАЛЬ', options)
    );
  }
});

// Notification click event
self.addEventListener('notificationclick', event => {
  console.log('[SW] Notification click received.');

  event.notification.close();

  if (event.action === 'call') {
    // Open phone dialer
    event.waitUntil(
      clients.openWindow('tel:+79999999999')
    );
  } else {
    // Open the app
    event.waitUntil(
      clients.openWindow('/mobile.html')
    );
  }
});

// Background sync for form submissions
self.addEventListener('sync', event => {
  if (event.tag === 'contact-form') {
    event.waitUntil(syncContactForm());
  }
});

// Sync contact form data when back online
async function syncContactForm() {
  try {
    const cache = await caches.open('form-data');
    const requests = await cache.keys();
    
    for (const request of requests) {
      if (request.url.includes('contact-form')) {
        const formData = await cache.match(request);
        if (formData) {
          // Attempt to send the form data
          try {
            const response = await fetch('/api/contact', {
              method: 'POST',
              body: await formData.formData()
            });
            
            if (response.ok) {
              await cache.delete(request);
              console.log('[SW] Form data synced successfully');
            }
          } catch (error) {
            console.log('[SW] Failed to sync form data:', error);
          }
        }
      }
    }
  } catch (error) {
    console.error('[SW] Error syncing form data:', error);
  }
}

// Performance monitoring
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

console.log('[SW] Service Worker loaded for Vidal Detective Agency'); 