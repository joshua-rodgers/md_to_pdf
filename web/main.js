const bookRoot = document.querySelector('#book');

if (!bookRoot) {
  throw new Error('Missing required root container: #book');
}

const md = window.markdownit({
  html: true,
  linkify: true,
  typographer: true,
  breaks: false,
});

if (window.markdownitFootnote) {
  md.use(window.markdownitFootnote);
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

function renderBook(markdownText) {
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

loadMarkdown()
  .then(renderBook)
  .catch((error) => {
    console.error(error);
    bookRoot.innerHTML = `<section class="chapter"><h2>Unable to render book</h2><p>${error.message}</p></section>`;
  });
