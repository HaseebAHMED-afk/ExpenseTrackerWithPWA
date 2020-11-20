const CACHE_NAME = "version1";

const urlsToCache = ['index.html' , 'offline.html']

const self = this;

//Intsall SW

self.addEventListener('install' ,(event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then((cache) => {
            console.log('Opened Cache');

            return cache.addAll(urlsToCache)
        })
    )
});

//Listen For Request

self.addEventListener('fetch' ,(event) => {
    event.respondWith(
        caches.match(event.request)
        .then(() => {
            return fetch(event.request)
                .catch(() => caches.match('offline.html'))
        })
    )
});

//Activates

self.addEventListener('activate' ,(event) => {
    const cacheWhiteList = [];

    cacheWhiteList.push(CACHE_NAME);

    event.waitUntil(
        caches.keys().then((cachenames) => Promise.all(
            // eslint-disable-next-line array-callback-return
            cachenames.map((cachename) => {
                if(!cacheWhiteList.includes(cachename)){
                    return caches.delete(cachename);
                }
            })
        ))
    )
});