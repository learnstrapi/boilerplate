import gql from 'graphql-tag'

export default gql`
  query($slug: String!) {
    clients(where: { slug: $slug }) {
      name
      description
      location
      slug
      services
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
`
