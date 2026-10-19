# Emmanuel Global Consulting

React / Vite site for https://emmanuel.tr, deployed by the existing Cloudflare
Pages project `emmanuel` from the `main` branch of `AdriaMartHQ/emmanuel`.

## Local development and checks

```sh
npm ci
npm run dev
npx tsc --noEmit
npm run build
npm run preview
```

The build output is `dist/`. `public/_redirects` preserves client-side routes.
This site does not need an AI API key or a map API key.

## Website content

Business descriptions, responsibilities and service terms retain their original
wording. The WeChat contact ID is `BalkanChina`, shared between its display and
the copy action through `constants/content.tsx`.

## Contact map

The contact page uses Leaflet 1.9.4 and locally bundled Natural Earth physical
land outlines (`data/service-land.json`). It does not fetch third-party map
tiles. This is a city-level service network illustration, not street navigation.
The contact page and map are loaded separately so other pages do not download
the map data. Source and licensing notices are in `public/maps/`.
