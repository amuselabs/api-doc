# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
yarn
```

## OpenAPI Doc generation

`reference - https://hackernoon.com/an-openapi-plugin-is-all-you-need-to-create-your-own-api-documentation`

```bash
yarn docusaurus gen-api-docs all
```
in `docusaurus.config.js` we have configured the `docs` as output directory in api-docs plugin and the path to the openapi spec yml file. If the spec changes then `combined-openapi.yml` file is updated and the above command is run to generate the files in the docs folder again. 

## `llms.txt` (scraper/crawler index)

Every doc generation run also emits `static/llms.txt` — a plaintext index following the [llmstxt.org](https://llmstxt.org) convention. It lists every endpoint page grouped by tag, with the title and a short description (first paragraph, capped at 2 lines) pulled from `combined-openapi.yml`. After `yarn build`, it's served at [amuselabs.github.io/api-doc/llms.txt](https://amuselabs.github.io/api-doc/llms.txt) and gives LLM/site scrapers the full page surface in one fetch.

- Generator: `scripts/generate-llms-txt.js`, wired into the `gen-api-docs` npm script — no separate command to remember. Add an operation to the spec, rerun `yarn gen-api-docs` (or `yarn start`), and the new entry appears automatically.
- Slugs and description text are sourced through `docusaurus-plugin-openapi-docs`' own OpenAPI processing, so URLs in `llms.txt` stay in lock-step with the generated `.mdx` filenames.

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment
[Userful resource](https://docusaurus.io/docs/deployment#deploy)

### Need to follow the steps after changing yml file

1. rm docs/*
2. npm run docusaurus gen-api-docs all
3. git checkout docs/_intro.md
4. git add docs
5. git add static/llms.txt
6. git commit -m "message"
7. git push

### GitHub Pages 

The documentation is automatically deployed to GitHub Pages when changes are pushed to the `main` branch. The `deploy-doc.yml` GitHub Action will:

1. Build the documentation site
2. Deploy it to GitHub Pages
3. Make it accessible at [amuselabs.github.io/api-doc](https://amuselabs.github.io/api-doc)

Simply push your changes to the `main` branch and the deployment will be triggered automatically.

