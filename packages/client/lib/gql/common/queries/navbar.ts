import gql from 'graphql-tag'

export default gql`
  query {
    screens {
      id
      slug
      url
      title
    }
  }
`
