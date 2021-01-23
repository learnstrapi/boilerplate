import gql from 'graphql-tag'

export default gql`
  query($slug: String!) {
    blogs(where: { slug: $slug, published: true }) {
      title
      content
      data
      slug

      image {
        url
      }

      taxonomies {
        name
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
