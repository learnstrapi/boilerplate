# 🚀 LearnStrapi Boilerplate

Full stack boilerplate for Strapi + Next.js + Chakra UI projects

Features:

- A monorepo to run Strapi and your Next.js client from a single command `yarn dev` (uses `lerna` under the hood)
- Options to run just the frontend - once you've deployed your project and setup the `CMS_URL_PRODUCTION` in the `client`
package
- A basic Next.js app with Chakra UI ready to customise with your own branding (also includes some basic components
and Strapi authentication)

## Getting Started

### Initial setup

Setup [gomplate](https://docs.gomplate.ca/) and copy env and customization files.

```bash
  sh $PWD/scripts/init
```

### Customize your project

1. Setup your repos (or you can add the links later)
2. Add your project settings to `customize.json`.

---

NOTE: If you need to generate an admin JWT secret token for Strapi

```bash
  node -e "console.log(require('crypto').randomBytes(64).toString('base64'))" | pbcopy
```

---

### Generate your project

```bash
  sh $PWD/scripts/customize
```

### Running your project locally

##### `lerna bootstrap` Install dependencies

##### `lerna run build` Build Admin UI & Frontend

##### `lerna run start` Start frontend and backend with `lerna`


### Recommendations

We recommend using a submodule for the `packages/cms` package so you can freely deploy this on Heroku, Digital Ocean,
AWS or anywhere you can host a node server.
