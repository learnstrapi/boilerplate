import { isProduction } from "lib/utils/env"

export const apiUrl =
  isProduction || process.env.WITH_CMS === 'false'
    ? process.env.CMS_URL_PRODUCTION
    : process.env.CMS_URL

export const graphQlAPIUrl = `${apiUrl}/graphql`

export const clientRootUrl = isProduction
  ? process.env.CLIENT_URL_PRODUCTION
  : process.env.CLIENT_URL
