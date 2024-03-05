const { warmStrategyCache } = require('workbox-recipes');
const { CacheFirst, StaleWhileRevalidate } = require('workbox-strategies');
const { registerRoute } = require('workbox-routing');
const { CacheableResponsePlugin } = require('workbox-cacheable-response');
const { ExpirationPlugin } = require('workbox-expiration');
const { precacheAndRoute } = require('workbox-precaching/precacheAndRoute');

precacheAndRoute(self.__WB_MANIFEST);

// Set up page cache
// This creates a caching strategy for pages using CacheFirst strategy, 
// which means it will serve the response from cache first if available, 
// falling back to the network if not.
const pageCache = new CacheFirst({
  cacheName: 'page-cache',
  plugins: [
    new CacheableResponsePlugin({
      statuses: [0, 200],
    }),
    new ExpirationPlugin({
      maxAgeSeconds: 30 * 24 * 60 * 60, // Set the max age of the cached responses to 30 days.
    }),
  ],
});
// Pre-cache pages
// This function pre-caches the specified URLs using the defined pageCache strategy, ensuring they are available offline.
warmStrategyCache({
  urls: ['/index.html', '/'],
  strategy: pageCache,
});

// Navigation route caching
// This registers a route for navigation requests (i.e., page navigations) to use the pageCache strategy.
registerRoute(({ request }) => request.mode === 'navigate', pageCache);

// Define the array of paths
// This array specifies the types of requests to cache using the StaleWhileRevalidate strategy below.
const paths = ['style', 'script', 'worker'];

// Asset caching
// This registers a route for caching assets like styles, scripts, and worker scripts using a StaleWhileRevalidate strategy.
// It serves from cache first (if available) and updates the cache in the background if there's an update.
registerRoute( ({ request }) => paths.includes(request.destination),
  new StaleWhileRevalidate({
    cacheName: 'asset-cache', // Name of the cache storage for assets.
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);