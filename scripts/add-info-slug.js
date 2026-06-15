// Re-adds `slug: /` to the generated info page front matter.
// docusaurus-plugin-openapi-docs does not emit a slug, but without it
// no doc is served at the site root (/api-doc/) and it 404s, which also
// turns the navbar/footer links to "/" into broken links on every page.
const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '..', 'docs', 'puzzleme-api.info.mdx');
const content = fs.readFileSync(file, 'utf8');

if (/^slug:\s*\/\s*$/m.test(content)) {
  console.log('slug: / already present in puzzleme-api.info.mdx');
  process.exit(0);
}

const updated = content.replace(/^sidebar_position: 0$/m, 'sidebar_position: 0\nslug: /');
if (updated === content) {
  console.error('Could not find front matter anchor to insert slug in puzzleme-api.info.mdx');
  process.exit(1);
}

fs.writeFileSync(file, updated);
console.log('Added slug: / to puzzleme-api.info.mdx');
