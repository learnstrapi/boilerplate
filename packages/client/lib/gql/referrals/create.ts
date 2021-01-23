import gql from 'graphql-tag'

export default gql`
  mutation($input: createReferralInput!) {
    createReferral(input: $input) {
      referral {
        id
      }
    }
  }
`
