import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { setContext } from 'apollo-link-context'
import { createUploadLink } from 'apollo-upload-client'
import fetch from 'isomorphic-unfetch'
import { graphQlAPIUrl } from 'lib/config/root-url'
import { globalTyped, isBrowser } from 'lib/utils/env'

let apolloClient = null
// Polyfill fetch() on the server (used by apollo-client)
if (!isBrowser) {
  globalTyped.fetch = fetch
}

let authLink = setContext((_, { headers }) => {
  let jwt = isBrowser && window?.localStorage?.getItem('jwt')
  let token = jwt ? jwt.replace(/"/g, '') : ''
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : ''
    }
  }
})

let uploadLink = createUploadLink({
  uri: graphQlAPIUrl,
  credentials: 'same-origin'
})

function create(initialState?: any) {
  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  return new ApolloClient({
    connectToDevTools: isBrowser,
    ssrMode: !isBrowser, // Disables forceFetch on the server (so queries are only run once)
    link: authLink?.concat(uploadLink),
    cache: new InMemoryCache().restore(initialState || {})
  })
}

export default function createApolloClient(
  initialState?: any
): ApolloClient<any> | null {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!isBrowser) {
    return create(initialState)
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState)
  }

  return apolloClient
}
