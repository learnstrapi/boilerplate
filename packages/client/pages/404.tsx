import { Box } from "@chakra-ui/react"
import { isLg } from "assets/media-queries"
import { BannerGroup } from "components/banners"
import { Page } from "components/layouts/page"
import { LoadSpinner } from "components/loader/spinner"
import gqlScreen from "lib/gql/screens/with-service"
import apolloClient from "lib/gql/utils/init-apollo"
import withApollo from "lib/gql/utils/with-apollo"
import { useWindowSize } from "lib/hooks/use-window-size"
import Markdown from "markdown-to-jsx"
import { GetStaticProps } from "next"
import Link from "next/link"
import React from "react"

import { FormButton } from "../components/forms/button"
import { markdownOverrides } from "../components/markdown"

function About({ content }) {
  let screenSize = useWindowSize()
  return (
    <Page>
      <Box
        maxW={{ base: '100%', md: 'md', lg: 'lg' }}
        m="auto"
        my="20"
        p="10"
        textAlign="center"
      >
        <Markdown
          options={markdownOverrides({
            headingColor: 'brand.600',
            textColor: 'grey.700'
          })}
        >
          {content || ''}
        </Markdown>

        <Link href="/">
          <FormButton mt="10">Back to home page</FormButton>
        </Link>
      </Box>

      {!content && <LoadSpinner />}

      <Box w={{ base: '100%', lg: '2xl' }} margin="auto" p="md">
        <BannerGroup
          adLocation="home_header"
          size="leaderboard"
          limit={isLg(screenSize) ? 2 : 1}
        />
      </Box>

      <Box w={{ base: '100%', lg: '2xl' }} margin="auto">
        <BannerGroup
          adLocation="home_header"
          size="leaderboard"
          limit={isLg(screenSize) ? 2 : 1}
        />
      </Box>
    </Page>
  )
}

export default withApollo({ ssr: true })(About)

export const getStaticProps: GetStaticProps = async () => {
  const response = await apolloClient()?.['query']({
    query: gqlScreen,
    variables: {
      slug: '404'
    }
  })

  const data = response.data.screens[0]
  return { props: { ...data } }
}
