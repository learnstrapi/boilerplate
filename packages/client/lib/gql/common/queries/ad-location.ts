import gql from 'graphql-tag'

export default gql`
  query($adLocation: String, $size: String, $limit: Int) {
    adlocations(where: { slug: $adLocation }) {
      banners(limit: $limit, sort: "expiry:DESC", where: { size: $size }) {
        title
        url
        size
        expiry
        image {
          name
          url
        }
      }
    }
  }
`
