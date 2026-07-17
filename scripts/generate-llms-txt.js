// Generates static/llms.txt — a plaintext index of every doc page in the site,
// with title and short description per entry. Follows the llmstxt.org convention
// so LLM scrapers/crawlers can discover the API surface in a single fetch.
//
// Reuses docusaurus-plugin-openapi-docs' own OpenAPI processing so slugs, ref
// resolution, and item ordering stay in lock-step with the generated .mdx files.
// Imports from the plugin's lib/ (not a documented public entry point) — revisit
// on major-version upgrades of the plugin.
const fs = require('fs');
const path = require('path');
const {
  readOpenapiFiles,
  processOpenapiFile,
} = require('docusaurus-plugin-openapi-docs/lib/openapi/openapi');

const ROOT = path.join(__dirname, '..');
const OPENAPI_PATH = path.join(ROOT, 'combined-openapi.yml');
const OUT_DIR = path.join(ROOT, 'static');
const OUT_PATH = path.join(OUT_DIR, 'llms.txt');

const SITE_URL = process.env.SITE_URL || 'https://amuselabs.github.io';
const BASE_URL = (process.env.DOCS_BASE_URL || '/api-doc').replace(/\/$/, '');
const ROOT_URL = SITE_URL + BASE_URL;

// Takes the first paragraph of a description, capped at 2 lines, joined with a space.
function shortDescription(desc) {
  if (!desc) return '';
  const collected = [];
  for (const raw of desc.split('\n')) {
    const line = raw.trim();
    if (line === '') {
      if (collected.length > 0) break;
      continue;
    }
    collected.push(line);
    if (collected.length === 2) break;
  }
  return collected.join(' ');
}

function entryLine(title, url, description) {
  return description
    ? `- [${title}](${url}): ${description}`
    : `- [${title}](${url})`;
}

(async () => {
  const files = await readOpenapiFiles(OPENAPI_PATH);
  const [items, , ] = await processOpenapiFile(
    files[0].data,
    {},
    { groupPathsBy: 'tag' },
  );

  const spec = files[0].data;
  const tagOrder = (spec.tags || []).map(t => t.name);
  const grouped = new Map();
  const ensureGroup = (name) => {
    if (!grouped.has(name)) grouped.set(name, []);
    return grouped.get(name);
  };
  tagOrder.forEach(ensureGroup);

  let infoItem = null;
  for (const item of items) {
    if (item.type === 'info') {
      infoItem = item;
      continue;
    }
    if (item.type !== 'api') continue;
    const tag = (item.api && item.api.tags && item.api.tags[0]) || 'Other';
    ensureGroup(tag).push({
      title: item.title,
      url: `${ROOT_URL}/${item.id}`,
      description: shortDescription(item.description),
    });
  }

  const lines = [];
  const title = (infoItem && infoItem.title) || spec.info.title;
  const introSummary = shortDescription(
    (infoItem && infoItem.description) || spec.info.description,
  );

  lines.push(`# ${title}`);
  lines.push('');
  if (introSummary) {
    lines.push(`> ${introSummary}`);
    lines.push('');
  }
  lines.push('## Introduction');
  lines.push('');
  lines.push(entryLine(title, `${ROOT_URL}/`, introSummary));
  lines.push('');

  for (const [tag, entries] of grouped) {
    if (entries.length === 0) continue;
    lines.push(`## ${tag}`);
    lines.push('');
    for (const e of entries) lines.push(entryLine(e.title, e.url, e.description));
    lines.push('');
  }

  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(OUT_PATH, lines.join('\n'));
  const totalEntries = [...grouped.values()].reduce((n, g) => n + g.length, 0) + 1;
  console.log(`Wrote ${totalEntries} entries to ${path.relative(ROOT, OUT_PATH)}`);
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
