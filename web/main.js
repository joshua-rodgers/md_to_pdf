function createMarkdownRenderer() {
  if (!window.markdownit) {
    throw new Error('markdown-it did not load. Check network access to CDN scripts.');
  }

  const renderer = window.markdownit({
    html: true,
    linkify: true,
    typographer: true,
    breaks: false,
  });

  if (window.markdownitFootnote) {
    renderer.use(window.markdownitFootnote);
  }

  if (window.markdownItAttrs) {
    renderer.use(window.markdownItAttrs);
  }

  return renderer;
}

async function loadMarkdown() {
  const inlineSource = document.querySelector('#source-markdown');
  if (inlineSource?.textContent?.trim()) {
    return inlineSource.textContent;
  }

  const params = new URLSearchParams(window.location.search);
  const source = params.get('src') || '../dist/book.md';

  const response = await fetch(source);
  if (!response.ok) {
    throw new Error(`Unable to load markdown from ${source} (${response.status})`);
  }

  return response.text();
}

function renderBook(bookRoot, md, markdownText) {
  const rendered = md.render(markdownText);
  bookRoot.innerHTML = rendered;

  // Ensure top-level content remains semantically grouped into chapter sections.
  if (!bookRoot.querySelector('.chapter')) {
    const chapter = document.createElement('section');
    chapter.className = 'chapter';
    chapter.innerHTML = rendered;
    bookRoot.replaceChildren(chapter);
  }
}

async function initBookPreview() {
  const bookRoot = document.querySelector('#book');
  if (!bookRoot) {
    console.warn('Book preview root not found (#book). Skipping render for this page.');
    return;
  }

  const md = createMarkdownRenderer();

  try {
    const markdownText = await loadMarkdown();
    renderBook(bookRoot, md, markdownText);

    if (window.PagedPolyfill) {
      await window.PagedPolyfill.preview();
    }
  } catch (error) {
    console.error(error);
    bookRoot.innerHTML = `<section class="chapter"><h2>Unable to render book</h2><p>${error.message}</p></section>`;
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    void initBookPreview();
  });
} else {
  void initBookPreview();
}
