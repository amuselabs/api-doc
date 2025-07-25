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

### GitHub Pages 

The documentation is automatically deployed to GitHub Pages when changes are pushed to the `main` branch. The `deploy-doc.yml` GitHub Action will:

1. Build the documentation site
2. Deploy it to GitHub Pages
3. Make it accessible at [amuselabs.github.io/api-doc](https://amuselabs.github.io/api-doc)

Simply push your changes to the `main` branch and the deployment will be triggered automatically.

