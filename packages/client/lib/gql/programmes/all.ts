import gql from 'graphql-tag'

export default gql`
  query {
    programmes {
      id
      name
      description
      image {
        url
        alternativeText
        name
      }
    }
  }
`
