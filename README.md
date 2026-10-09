# Mitchelverse

A small, free, spoiler-safe fan site. It maps the people, places and ideas that come back across David Mitchell's novels. Readers mark the books they have read, and the site shows only those. Notes about endings stay covered until the reader taps them.

## Folders

- `site/` – the website. `site/index.html` contains all data, drawings, styles and code.
- `site/portraits/` – optional AI portraits (WebP).
- `site/vendor/` – Cytoscape (MIT), used by the "As a web" view. It loads only when a reader opens that view.
- `portraits-src/` – put Gemini images here before you convert them (not saved in git).
- `tools/generate-portraits.mjs` – converts portraits.
- `scripts/tmux.sh` – tmux session with dev server, portraits and shell.
- `netlify.toml` – Netlify publishes `site/`.

## Commands

```sh
npm install
npm run dev              # local preview with live reload
npm run tmux             # tmux session with three panes
node tools/generate-portraits.mjs --convert --site marinus.png
npm run preview:draft    # draft deploy on Netlify
npm run deploy           # production deploy
```

After you convert a portrait, add its id to `PORTRAITS` near the top of the script in `site/index.html`.

## Rules for content

- Every entry needs a book (and for The Bone Clocks, a part 1 to 6).
- Endings and big reveals go in the covered `x` note.
- Write all book text in our own words. No quotes from the books.
- Only original assets. No cover art and no book illustrations.
