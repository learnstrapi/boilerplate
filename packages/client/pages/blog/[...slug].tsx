import { Box, Image } from "@chakra-ui/react"
import { isLg } from "assets/media-queries"
import { BannerGroup } from "components/banners"
import { Heading } from "components/core/heading"
import { Page } from "components/layouts/page"
import { LoadSpinner } from "components/loader/spinner"
import { markdownOverrides } from "components/markdown"
import { SharePost } from "components/social/posts"
import { BlogTags } from "components/tags"
import gqlAllBlogData from "lib/gql/blog"
import gqlBlogData from "lib/gql/blog/post"
import apolloClient from "lib/gql/utils/init-apollo"
import withApollo from "lib/gql/utils/with-apollo"
import { useWindowSize } from "lib/hooks/use-window-size"
import { getImageName, imgClient } from "lib/utils/images"
import Markdown from "markdown-to-jsx"
import { GetStaticPaths, GetStaticProps } from "next"
import React from "react"
import uuid from "uuid"

function BlogSlug({ data }) {
  let screenSize = useWindowSize()
  let blogData = data?.[0]
  let imageUrl = getImageName(blogData?.image?.[0]?.url)

  let image = imgClient.url(imageUrl, {
    transformation: [{ height: 600, crop: 'scale' }]
  })

  return (
    <Page>
      {!data && <LoadSpinner />}

      <Box
        key={uuid()}
        p={{ base: '10', md: '20', lg: '16' }}
        d="flex"
        flexDirection="row"
        justifyContent="center"
        m="auto"
        textAlign="center"
      >
        <Box>
          <Heading
            fontSize="6xl"
            display="inline"
            color="brand.900"
            textDecoration="underline"
            textAlign="center"
          >
            {blogData?.title}
          </Heading>

          <Box w="40" m="auto" mt="10" d="flex" justifyContent="center">
            <BlogTags tags={blogData?.taxonomies} />
          </Box>
        </Box>
      </Box>

      <Box
        width={{ base: '100%', md: '2xl', lg: '4xl' }}
        justifyContent={{ base: 'center', md: 'flex-start' }}
        alignItems={{ base: 'center', md: 'start' }}
        d="flex"
        flexDirection="column"
        pr={{ base: '8', md: '5' }}
        pl={{ base: '8', md: '0' }}
        m="auto"
        py="10"
      >
        <Box key={uuid()}>
          <Image src={image} m="auto" mb="32" />

          <Box textAlign="center">
            {blogData?.content && (
              <Markdown
                options={markdownOverrides({
                  headingColor: 'grey.800',
                  textColor: 'grey.700'
                })}
              >
                {blogData?.content}
              </Markdown>
            )}
            <SharePost size={screenSize} title={blogData?.title} />
          </Box>
        </Box>
      </Box>
      <Box
        w={{ base: '100%', lg: '2xl' }}
        margin="auto"
        p={{ base: '0', lg: 'md' }}
      >
        <BannerGroup
          adLocation="home_header"
          size="leaderboard"
          limit={isLg(screenSize) ? 2 : 1}
        />
      </Box>
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

export const getStaticPaths: GetStaticPaths = async () => {
  const query = await apolloClient()?.['query']({
    query: gqlAllBlogData
  })

  if (query?.data?.blogs?.length) {
    return {
      paths: query?.data?.blogs?.map(({ slug }) => ({
        params: { slug: [slug] }
      })),
      fallback: false
    }
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = await apolloClient()?.['query']({
    query: gqlBlogData,
    variables: {
      slug: params.slug?.[0]
    }
  })

  const data = query?.data?.blogs
  return { props: { data } }
}

export default withApollo({ ssr: true })(BlogSlug)
