import gql from 'graphql-tag'

export default gql`
  query {
    blogs(where: { published: true }) {
      title
      content
      data
      slug
      excerpt

      image {
        url
      }

      seo {
        title
        image {
          url
        }
        type
        description
        locale
      }

      hero {
        content
        url
        media {
          url
        }
      }

      comments {
        user {
          username
        }

        message
        likes
      }
    }
  }
`
