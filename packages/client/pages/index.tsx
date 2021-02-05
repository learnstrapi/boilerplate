import { Box, Container, Heading, Link, Text } from "@chakra-ui/react"
import { LogoBrand } from "assets/logos"
import withApollo from "lib/gql/utils/with-apollo"
import React from "react"

function Home() {
  return (
    <Box
      d="flex"
      justifyContent="center"
      alignItems="center"
      h="100vh"
      w="100vw"
      bg="brand.50"
    >
      <Container
        d="flex"
        justifyContent="center"
        alignItems="start"
        flexDirection="column"
      >
        <LogoBrand h="40" />
        <Text
          textAlign="left"
          my="10"
          fontSize="xl"
          pr="20"
          bg="brand.900"
          rounded="xl"
          boxShadow="md"
          color="white"
          p="6"
        >
          Replace this page to start building your full stack project with{' '}
          <Link
            href="https://strapi.io/documentation"
            target="_blank"
            color="brand.300"
            fontWeight="bold"
          >
            Strapi
          </Link>{' '}
          +{' '}
          <Link
            href="https://nextjs.org/docs"
            target="_blank"
            color="white"
            fontWeight="bold"
          >
            Next.js
          </Link>{' '}
          +{' '}
          <Link
            href="https://chakra-ui.com/"
            target="_blank"
            color="#319795"
            fontWeight="bold"
          >
            Chakra UI (React)
          </Link>
        </Text>
        <Heading color="brand.900" fontSize="6xl">
          🙌
        </Heading>
      </Container>
    </Box>
  )
}

export default withApollo({ ssr: true })(Home)
