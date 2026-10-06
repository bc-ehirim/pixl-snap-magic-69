# Benjamin Ehirim Portfolio

A React portfolio built with Vite, TanStack Start, Tailwind CSS, and TypeScript.

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

The production build emits a generic static bundle to `dist` for hosting providers
that expect a publish directory, while Nitro also generates the Cloudflare Worker
bundle in `.output`. Deploy `.output` with the Cloudflare tooling when using the
`cloudflare-module` preset, or publish `dist` on a static host.

## Checks

```sh
npm test
npx tsc --noEmit
npm run lint
```

Portfolio content is maintained in `src/data/portfolio.ts`.
