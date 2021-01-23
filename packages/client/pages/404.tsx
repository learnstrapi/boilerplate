import { Box, Button, Heading, Text } from "@chakra-ui/react"
import { Page } from "components/layouts/page"
import withApollo from "lib/gql/utils/with-apollo"
import { getScreenData } from "lib/utils/get-screen-data"
import Markdown from "markdown-to-jsx"
import { GetStaticProps } from "next"
import Link from "next/link"
import React from "react"


function NotfoundPage({ content, headerLinks, footerData }) {
  return (
    <Page headerLinks={headerLinks} footerData={footerData} withHero>
      <Box
        maxW={{ base: '100%', md: 'md', lg: 'lg' }}
        m="auto"
        my="20"
        p="10"
        textAlign="center"
      >
        <Heading as={Markdown}>
          {content || 'Oooops…'}
        </Heading>

        <Text>Content not found.</Text>

        <Link href="/">
          <Button mt="10">Back to home page</Button>
        </Link>
      </Box>
    </Page>
  )
}

export default withApollo({ ssr: true })(NotfoundPage)
