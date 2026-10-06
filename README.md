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

The production build uses Nitro's `cloudflare-module` preset. Deploy the generated
`.output` directory with the Cloudflare Workers tooling for your deployment.

## Checks

```sh
npm test
npx tsc --noEmit
npm run lint
```

Portfolio content is maintained in `src/data/portfolio.ts`.
