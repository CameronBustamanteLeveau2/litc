## Repo snapshot

- Small static frontend (root files: `index.html`, `style.css`, `shine.js`) that uses `assets/` for images.
- Simple Node/Express API in `server.js` exposing `/api/personajes` (CORS enabled) listening on port 3002.
- Dependencies are listed in `package.json` (`express`, `cors`). Note: `package.json`'s `main` is `script.js` (not present) and `test` is a placeholder.

## What an AI agent should know first

- The API is implemented in `server.js`. Key route: `GET /api/personajes` — returns the `personajes` array. Example usage from the frontend:

  fetch('http://localhost:3002/api/personajes')
    .then(r => r.json())

- Static frontend files live in the repo root and reference images in `assets/` (examples: `assets/avatar1.png`, `assets/dog-image.png`). When editing image paths, update both `image_src` and `avatar_src` in the `personajes` objects.

## How to run & debug locally

1. Install deps:

   npm install

2. Start the API server (no `start` script defined):

   node server.js

   - The server logs: `🚀 API de Personajes corriendo en http://localhost:3002`.
   - CORS middleware is enabled, so a browser page served from the filesystem or another origin can fetch `/api/personajes`.

3. Recommended dev tweak: add a `start`/`dev` script and optionally `nodemon` for auto-reload.

## Project-specific conventions & gotchas

- CommonJS modules: package.json sets "type": "commonjs" — prefer require/module.exports patterns.
- API data is embedded in `server.js` as an in-memory array. Changing data schema means editing the `personajes` objects directly.
- `index.html` is empty in this snapshot — frontend integration is file-based and simple; add a local HTTP server or open `index.html` directly for quick testing.
- `package.json` has missing/placeholder entries (`main`: `script.js`, `test` placeholder). Don't assume an `npm start` script exists — run `node server.js` or add scripts.

## Useful examples (copy-paste-ready)

- Server route example (in repo): `server.js` — `app.get('/api/personajes', (req, res) => res.json(personajes));`
- Frontend fetch example:

  const resp = await fetch('http://localhost:3002/api/personajes');
  const personajes = await resp.json();

## When editing code — rules for AI edits

- Preserve file style: project uses CommonJS and simple ES5/ES6 browser JS. Keep consistent `require` usage in Node files.
- If adding endpoints, mirror existing patterns: simple route handlers that respond with JSON and don't rely on external DBs.
- When adding images or renaming assets, update both references in `server.js` and usages in frontend files.

## Integration points to be careful about

- `assets/` — static images used by both server responses and frontend markup. Avoid breaking relative paths.
- Port 3002 is hard-coded in `server.js`. If you change it, update any local tests or README references.

## If you need more context

- There are no tests or CI config in the current snapshot. Ask the maintainer for preferred test framework and deploy steps before adding tests or CI.
- If you plan significant changes (introducing a DB, build tools, or ES modules), confirm with the maintainer because the repo currently expects minimal, static-serving behavior.

---
If anything above is unclear or you'd like the file to include a short `npm` script suggestion and a VS Code debug snippet, tell me which you'd prefer and I will add it.
