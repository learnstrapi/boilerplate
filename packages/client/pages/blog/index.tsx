import { Box, Button, PseudoBox, SimpleGrid, Text } from "@chakra-ui/react"
import { isLg } from "assets/media-queries"
import { BannerGroup } from "components/banners"
import { Heading } from "components/core/heading"
import { Header } from "components/header"
import { LoadSpinner } from "components/loader/spinner"
import { Footer } from "components/sections"
import { BlogTags } from "components/tags"
import gqlAllBlogData from "lib/gql/blog"
import apolloClient from "lib/gql/utils/init-apollo"
import withApollo from "lib/gql/utils/with-apollo"
import { useWindowSize } from "lib/hooks/use-window-size"
import { getImageName, imgClient } from "lib/utils/images"
import { GetStaticProps } from "next"
import Link from "next/link"
import React from "react"
import uuid from "uuid"

function BlogIndex({ data }) {
  let screenSize = useWindowSize()

  return (
    <>
      <Header />
      {!data && <LoadSpinner />}

      <Box
        width={{ base: '100%', xl: '6xl' }}
        justifyContent={{ base: 'center', md: 'flex-start' }}
        alignItems={{ base: 'center', md: 'start' }}
        d="flex"
        flexDirection="column"
        pr={{ base: '8', md: '5' }}
        pl={{ base: '8', xl: '0' }}
        m="auto"
        p="10"
      >
        <Heading fontSize="6xl" fontWeight="bold" mb="10">
          Read our blog.
        </Heading>

        {data?.length < 0 ? (
          'No posts found'
        ) : (
          <SimpleGrid
            columns={{ base: 1, md: 3, lg: 4 }}
            spacing={{ base: 2, md: 10 }}
          >
            {data?.map(blogPost => {
              let { title, excerpt, taxonomies, slug, image } = blogPost
              let newImage = imgClient.url(getImageName(image?.[0]?.url), {
                transformation: [{ width: 400, height: 400, crop: 'scale' }]
              })

              let truncatedExcerpt = () => {
                let expertArray = excerpt.split
                console.log('truncatedExcert -> expertArray', expertArray)
              }

              return (
                <>
                  {slug && (
                    <Link
                      key={uuid()}
                      href="/blog/[...slug]"
                      as={`/blog/${slug}`}
                    >
                      <PseudoBox
                        key={uuid()}
                        d="flex"
                        alignItems="start"
                        flexDirection="column"
                        cursor="pointer"
                        bg="accent1.50"
                        rounded="lg"
                        mb="10"
                        boxShadow="sm"
                        _hover={{
                          boxShadow: 'md'
                        }}
                      >
                        <Box
                          d="flex"
                          flexDirection="column"
                          alignItems="start"
                          justifyContent="start"
                          flex="1 0 auto"
                          backgroundPosition="center"
                          backgroundSize="cover"
                          backgroundImage={`url(${newImage})`}
                          py="40"
                          w="100%"
                          px="5"
                          rounded="lg"
                          borderBottomLeftRadius="none"
                          borderBottomRightRadius="none"
                        />
                        <Box
                          d="flex"
                          flexDirection="column"
                          alignItems="start"
                          justifyContent="start"
                          flex="1 0 auto"
                          py="2"
                        >
                          <Box
                            d="flex"
                            height="100%"
                            alignItems="flex-start"
                            flexDirection="column"
                            justifyContent="space-between"
                            p="4"
                          >
                            <Heading
                              mb="4"
                              fontSize={{ base: '4xl', lg: '2xl' }}
                              color="brand.900"
                            >
                              {title}
                            </Heading>

                            <BlogTags tags={taxonomies} />

                            <Text
                              color="grey.600"
                              fontSize="lg"
                              maxWidth={10}
                              whiteSpace="normal"
                            >
                              {truncatedExcerpt}
                            </Text>
                            <Button
                              mt="4"
                              mb="2"
                              variant="link"
                              color="brand.600"
                              size="lg"
                              fontSize="lg"
                            >
                              Read more
                            </Button>
                          </Box>
                        </Box>
                        brand.
                      </PseudoBox>
                    </Link>
                  )}
                </>
              )
            })}
          </SimpleGrid>
        )}
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

      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await apolloClient()?.['query']({
    query: gqlAllBlogData
  })

  const data = response.data.blogs
  return { props: { data } }
}

export default withApollo({ ssr: true })(BlogIndex)
