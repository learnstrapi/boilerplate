# LearnStrapi Boilerplate

Full stack boilerplate for Strapi + Next.js + Chakra UI projects

## Generate Admin JWT Secret Token

node -e "console.log(require('crypto').randomBytes(64).toString('base64'))" | pbcopy

## Getting Started

### Setup `gomplate` and copy files

```bash
  sh $PWD/scripts/init
```

### Customize your project

1. Setup your repos (or you can add the links later)
2. Add your project settings to `customize.json`
3. Run `sh $PWD/scripts/customize` to generate your project

### Local dev

#### `lerna bootstrap` Install dependencies

#### `lerna run build` Build Admin UI & Frontend

#### `lerna run start` Start frontend and backend with `lerna`

API: <<<[ .cus.packages.cms.config.url.dev ]>>/admin>
Client: <<<[ .cus.packages.client.url.dev ]>>>
