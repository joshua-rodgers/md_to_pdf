#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const manifestPath = path.join(rootDir, 'book-manifest.json');
const bookDir = path.join(rootDir, 'book');
const distDir = path.join(rootDir, 'dist');
const markdownOutPath = path.join(distDir, 'book.md');
const htmlOutPath = path.join(distDir, 'book-content.html');

function slugify(value) {
  return value
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-') || 'section';
}

function addStableHeadingIds(markdown) {
  const slugCounts = new Map();
  let inCodeFence = false;

  const lines = markdown.split(/\r?\n/).map((line) => {
    if (/^```/.test(line.trim())) {
      inCodeFence = !inCodeFence;
      return line;
    }

    if (inCodeFence) {
      return line;
    }

    const match = line.match(/^(#{1,6})\s+(.+?)\s*$/);
    if (!match) {
      return line;
    }

    const headingText = match[2]
      .replace(/\s+\{#[-\w]+\}\s*$/, '')
      .replace(/`/g, '')
      .trim();

    const baseSlug = slugify(headingText);
    const count = slugCounts.get(baseSlug) || 0;
    slugCounts.set(baseSlug, count + 1);

    const id = count === 0 ? baseSlug : `${baseSlug}-${count}`;
    return `${match[1]} ${headingText} {#${id}}`;
  });

  return lines.join('\n');
}

function buildBook() {
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  if (!Array.isArray(manifest) || manifest.length === 0) {
    throw new Error('book-manifest.json must contain a non-empty array of markdown filenames.');
  }

  fs.mkdirSync(distDir, { recursive: true });

  const combinedMarkdown = [];
  const combinedHtmlReady = [];

  manifest.forEach((file, index) => {
    const sourcePath = path.join(bookDir, file);
    if (!fs.existsSync(sourcePath)) {
      throw new Error(`Missing source file: ${sourcePath}`);
    }

    const rawMarkdown = fs.readFileSync(sourcePath, 'utf8').trim();
    const chapterMarkdown = addStableHeadingIds(rawMarkdown);

    if (index > 0) {
      combinedMarkdown.push('<!-- pagebreak -->');
      combinedHtmlReady.push('<div class="page-break" aria-hidden="true"></div>');
    }

    // Determine section class based on filename or content
    let sectionClass = 'chapter';
    if (file.includes('front-matter') || file.includes('00-')) {
      sectionClass = 'front-matter';
    } else if (file.includes('appendix')) {
      sectionClass = 'appendix';
    }

    combinedMarkdown.push(`<section class="${sectionClass}" data-source="${file}">`);
    combinedMarkdown.push(chapterMarkdown);
    combinedMarkdown.push('</section>');

    combinedHtmlReady.push(`<section class="${sectionClass}" data-source="${file}">`);
    combinedHtmlReady.push(chapterMarkdown);
    combinedHtmlReady.push('</section>');
  });

  fs.writeFileSync(markdownOutPath, `${combinedMarkdown.join('\n\n')}\n`, 'utf8');
  fs.writeFileSync(htmlOutPath, `${combinedHtmlReady.join('\n\n')}\n`, 'utf8');

  console.log(`Wrote ${markdownOutPath}`);
  console.log(`Wrote ${htmlOutPath}`);
}

buildBook();
