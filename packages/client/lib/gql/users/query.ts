import gql from 'graphql-tag'

export default gql`
  query($id: ID!) {
    user(id: $id) {
      id
      username
      email
      confirmed
      referral {
        name
        dateOfBirth
        niNumber
        education {
          name
          startDate
          endDate
          notes
        }
        programmes
        referrer {
          name
          email
          position
          content
          media {
            name
            url
          }
        }
      }
    }
  }
`
