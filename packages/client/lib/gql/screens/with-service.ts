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
        ... on ComponentDataService {
          name
          description
          image {
            url
            size
            name
          }
          website
        }
      }
    }
  }
`
