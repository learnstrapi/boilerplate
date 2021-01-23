import gql from 'graphql-tag'

export default gql`
  query {
    screens(where: { slug: "portfolio" }) {
      data {
        __typename
        ... on ComponentDataClient {
          logo {
            url
          }
          name
          slug
        }
      }
    }
  }
`
