export default `
  {
    query getBanners (
      $adLocation: String!
      $limit: Int!
      $size: String!
      $expiry: String!
    ) {
      adlocations(where: { slug: $adLocation }) {
        banners(
          where: { size: $size, expiry_gte: $expiry }
          sort: "created_at:DESC"
          limit: $limit
        ) {
          title
          url
          expiry
          image {
            name
            url
          }
        }
      }
    }
  }
`
