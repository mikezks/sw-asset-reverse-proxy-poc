const baseUrl = location.href.split('/').slice(0, -1).join('/');

const dynBaseUrl = {
  mfe1: baseUrl
};

importScripts('./assets/resource-proxy/resource-proxy.config.js');

const mapRequestUrl = (url, mappings) => {
  const sourcePath = url.replace(baseUrl, '');
  const mapping = mappings[sourcePath];

  if (mapping) {
    const targetBaseUrl = dynBaseUrl[mapping.targetBaseUrl];
    if (targetBaseUrl) {
      return targetBaseUrl + mapping.targetResourcePath;
    }
  }

  return url;
};

self.addEventListener('fetch', event =>
  event.respondWith(fetch(mapRequestUrl(
    event.request.url,
    resourceMappings
  )))
);

importScripts('./ngsw-worker.js');
