import gql from 'graphql-tag'

export default gql`
  query {
    clients {
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
