## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Build
```bash
npm run build
```
The static site is generated in `out/`.

## Preview the static export
```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages
```bash
npm run deploy
```
The deploy script builds with `NEXT_PUBLIC_BASE_PATH=/itzfizz-hero` so the exported CSS and JavaScript paths work under the repository URL.
