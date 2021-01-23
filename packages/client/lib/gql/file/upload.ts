import gql from 'graphql-tag'

export default gql`
  mutation(
    $refId: ID
    $ref: String
    $field: String
    $source: String
    $file: Upload!
  ) {
    upload(
      refId: $refId
      ref: $ref
      field: $field
      source: $source
      file: $file
    ) {
      id
      name
      url
      size
    }
  }
`
