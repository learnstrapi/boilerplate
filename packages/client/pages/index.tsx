import { Box } from "@chakra-ui/react"
import { LogoBrand } from "assets/logos"
import withApollo from "lib/gql/utils/with-apollo"
import React from "react"

function Home() {

  return (
    <Box>
      <LogoBrand />
    </Box>
  )
}

export default withApollo({ ssr: true })(Home)
