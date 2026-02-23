# md_to_pdf

This project compiles the book markdown into a single source file, previews it with markdown-it + Paged.js, and exports a deterministic PDF using Playwright.

## Scripts

- `npm run build:book` — assembles all chapter markdown into `dist/book.md` and `dist/book-content.html`.
- `npm run serve:book` — starts a local preview server and serves `web/index.html`.
- `npm run pdf:book` — builds the book, opens the preview in headless Chromium, waits for markdown rendering + Paged.js pagination, and writes `dist/book.pdf`.

## Why this is more consistent than manual browser print

Using `scripts/export-pdf.js` removes most machine-to-machine variability from export:

- the same headless browser automation flow is used every run,
- PDF page format and margins are explicitly configured,
- print backgrounds are always enabled,
- export happens only after markdown render and Paged.js pagination complete.

Compared with manual **Print to PDF** in a local browser profile, this avoids inconsistent per-user print dialog settings and timing differences during pagination.
