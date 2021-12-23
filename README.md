# Frontend Reverse Proxy PoC

✅ Reroutes Micro Frontend assets

✅ Uses Service Worker

✅ Works in modern browsers

✅ Works w/o backend proxy

✅ Declarative config

✅ Supports ng prod build

✅ Supports ng serve

## Update asset mapping

- `resource-proxy.config.js` defines the mapping between the asset requested at the window object's (Shell) origin to the target where the asset is deployed (Micro Frontend).
- `sw-main.js` holds the main implementation including source code that determines the Shell's origin.
- It is not possible to find out which Micro Frontend requested a certain asset, but based on the runtime attempt to access this asset rerouting the request to a different path resp. origin works declaratively.

## Developer experience

- Be aware that the first browser access is necessary to install the Service Worker.
- Beginning with the second browser access the rerouting should work.
- `Update on reload` can be activated in `Chrome DevTools | Application | Service Workers` to reflect changes in `resource-proxy.config.js` on reload.

## PoC implementation

A HTML `<img>` tag requests an asset (Angular icon size 152x152). As soon as the Service Worker runs the request to this icon gets rerouted to a larger version of this asset (Angular icon size 512x512).
