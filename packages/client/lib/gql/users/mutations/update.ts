import gql from 'graphql-tag'

export default gql`
  mutation($input: updateUserInput) {
    updateUser(input: $input) {
      user {
        username
      }
    }
  }
`
