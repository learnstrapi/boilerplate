import gql from 'graphql-tag'

export default gql`
  query($slug: String!) {
    screens(where: { slug: $slug }) {
      id
      title
      slug
      url
      content
      meta
      hero {
        content
        ctaText
        media {
          name
          mime
          size
          url
        }
        meta
        url
      }
      contents {
        id
        name
        media {
          name
          mime
          size
          url
        }
        meta
        content
      }
      data {
        __typename
        ... on ComponentDataClient {
          name
          description
          location
          services
          slug
          sector
          logo {
            url
            size
            name
          }
          images {
            name
            mime
            size
            url
          }
          website
        }
      }
    }
  }
`
