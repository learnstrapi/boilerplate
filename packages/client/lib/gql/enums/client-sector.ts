import gql from 'graphql-tag'

export const gqlClientSectors = gql`
  {
    __type(name: "ENUM_CLIENT_SECTOR") {
      enumValues {
        name
      }
    }
  }
`
