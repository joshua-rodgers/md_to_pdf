# Book PDF tuning guide

## Page size and margins

Tune print page geometry in the **theme token section** at the top of `web/styles.css`.

- `--book-page-width`
- `--book-page-height`
- `--book-page-margin-top`
- `--book-page-margin-right`
- `--book-page-margin-bottom`
- `--book-page-margin-left`

Those variables are consumed by the `@media print { @page { ... } }` rule.

## Chapter title spacing

Tune heading spacing with these tokens in `web/styles.css`:

- `--chapter-title-margin-top`
- `--chapter-title-margin-bottom`

These values are used by the shared heading margin rule (`h1`–`h6`) and control the spacing around chapter headings.

## Table behavior across page breaks

Use `--table-break-inside` in `web/styles.css` to control table splitting behavior during print pagination:

- `avoid` keeps table rows/blocks together when possible (default).
- `auto` allows splits across pages.

This token is applied to `table`, `tbody`, and `tr` (plus some other block elements) inside the `@media print` section.

## Exact command sequence to regenerate `dist/book.pdf`

From the repository root:

```bash
npm ci
npx playwright install chromium
npm run pdf:book
```

`npm run pdf:book` rebuilds markdown into `dist/book.md` and writes `dist/book.pdf`.
