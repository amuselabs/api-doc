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

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
