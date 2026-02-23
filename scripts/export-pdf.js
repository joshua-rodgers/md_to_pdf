#!/usr/bin/env node

const http = require('http');
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const outputPath = path.join(distDir, 'book.pdf');
const port = Number(process.env.BOOK_PORT || 4173);

const contentTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
};

function resolvePath(urlPathname) {
  const safePath = decodeURIComponent(urlPathname.split('?')[0]);
  const relativePath = safePath === '/' ? '/web/index.html' : safePath;
  const candidate = path.resolve(rootDir, `.${relativePath}`);
  return candidate.startsWith(rootDir) ? candidate : null;
}

function createBookServer() {
  const server = http.createServer((req, res) => {
    const filePath = resolvePath(req.url || '/');

    if (!filePath) {
      res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Forbidden');
      return;
    }

    fs.readFile(filePath, (err, data) => {
      if (err) {
        const status = err.code === 'ENOENT' ? 404 : 500;
        res.writeHead(status, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end(status === 404 ? 'Not found' : 'Internal server error');
        return;
      }

      const ext = path.extname(filePath).toLowerCase();
      const contentType = contentTypes[ext] || 'application/octet-stream';
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    });
  });

  return new Promise((resolve, reject) => {
    server.once('error', reject);
    server.listen(port, '127.0.0.1', () => {
      resolve(server);
    });
  });
}

async function waitForRenderAndPagination(page) {
  await page.waitForSelector('.chapter', { timeout: 30000 });

  await page.waitForFunction(
    () => {
      const chapter = document.querySelector('.chapter');
      return chapter && chapter.textContent && chapter.textContent.trim().length > 0;
    },
    { timeout: 30000 }
  );

  await page.evaluate(() => {
    return new Promise((resolve) => {
      let settled = false;

      const done = () => {
        if (settled) return;
        settled = true;
        resolve();
      };

      const pagesReady = () => document.querySelectorAll('.pagedjs_page').length > 0;

      if (pagesReady()) {
        done();
        return;
      }

      const timer = setTimeout(done, 5000);
      document.addEventListener(
        'pagedjs:rendered',
        () => {
          clearTimeout(timer);
          done();
        },
        { once: true }
      );
    });
  });
}

async function exportPdf() {
  fs.mkdirSync(distDir, { recursive: true });

  const server = await createBookServer();
  const browser = await chromium.launch({ headless: true });

  try {
    const page = await browser.newPage();
    await page.goto(`http://127.0.0.1:${port}/web/index.html?src=/dist/book.md`, {
      waitUntil: 'networkidle',
      timeout: 45000,
    });

    await waitForRenderAndPagination(page);

    await page.pdf({
      path: outputPath,
      format: 'A4',
      margin: {
        top: '16mm',
        right: '14mm',
        bottom: '18mm',
        left: '14mm',
      },
      printBackground: true,
      preferCSSPageSize: false,
    });

    console.log(`Wrote ${outputPath}`);
  } finally {
    await browser.close();
    await new Promise((resolve, reject) => {
      server.close((err) => (err ? reject(err) : resolve()));
    });
  }
}

exportPdf().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
