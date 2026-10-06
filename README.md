# Benjamin Ehirim Portfolio

A client-rendered React portfolio built with Vite, TanStack Router, Tailwind CSS,
and TypeScript.

## Requirements

- Node.js 22.12 or newer
- npm

## Development

```sh
npm install
npm run dev
```

## Production

```sh
npm run build
npm run preview
```

The production build creates a static site in `dist`. Vercel is configured to
publish that directory and rewrite application routes to `index.html`, so direct
visits to nested routes work with client-side routing.

## Checks

```sh
npm test
npx tsc --noEmit
npm run lint
```

Portfolio content is maintained in `src/data/portfolio.ts`.
