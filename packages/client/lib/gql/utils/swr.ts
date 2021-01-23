import { GraphQLClient } from 'graphql-request'
import { graphQlAPIUrl } from 'lib/config/root-url'
import { isBrowser } from 'lib/utils/env'

export let token =
  isBrowser && window?.localStorage?.getItem('jwt')?.replace(/"/g, '')

export let SWRClient = new GraphQLClient(
  graphQlAPIUrl,
  token
    ? {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    : null
)
