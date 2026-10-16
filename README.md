# F1 cards

![CI DEPLOY](https://github.com/lexcast/f1/workflows/CI%20DEPLOY/badge.svg)

See in action [here](https://lexcast.github.io/f1/).

**NOTE: I DO NOT OWN ANY IMAGE ON THIS REPOSITORY**

## Stack

React 19, Vite, Tailwind CSS 4, Vitest + Testing Library. Requires Node 22+.

## Scripts

| Command           | What it does                                  |
| ----------------- | --------------------------------------------- |
| `npm install`     | Install dependencies                          |
| `npm run dev`     | Dev server at http://localhost:5173/f1/       |
| `npm run build`   | Production build into `dist/`                 |
| `npm run preview` | Serve the production build                    |
| `npm test`        | Tests in watch mode (`npm run test:run` once) |
| `npm run lint`    | ESLint                                        |
| `npm run format`  | Prettier                                      |

## Adding a driver

1. Add the driver to `src/data/drivers.json` (and any new team to `src/data/teams.json`,
   with its flag in `src/data/flags.json`). Set `last` when the driver's final season
   wasn't with the last team in the list.
2. Add one photo per team in `public/images/drivers/<id>/<team>.png`, plus `signature.png`
   (or set `"signature": false`), and the team logo in `public/images/logos/<team>.png`.
3. Run `npm run test:run`: the data tests list any missing team, flag, logo, photo or signature.
