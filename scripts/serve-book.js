#!/usr/bin/env node

const http = require('http');
const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const defaultPort = Number(process.env.BOOK_PORT || 4173);

const contentTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
};

function resolvePath(urlPathname) {
  const safePath = decodeURIComponent(urlPathname.split('?')[0]);
  const relativePath = safePath === '/' ? '/web/index.html' : safePath;
  const candidate = path.resolve(rootDir, `.${relativePath}`);

  if (!candidate.startsWith(rootDir)) {
    return null;
  }

  return candidate;
}

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

server.listen(defaultPort, '127.0.0.1', () => {
  console.log(`Serving book preview at http://127.0.0.1:${defaultPort}/web/index.html`);
});
