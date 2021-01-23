import gql from 'graphql-tag'

export default gql`
  query($slug: String!) {
    contents(where: { slug: $slug }) {
      name
      content

      media {
        url
        size
        name
      }

      meta
      ctaLink
      ctaText
      slug

      links {
        title
        links {
          label
          href
          published
        }
      }
    }
  }
`
