import { Box, Button, Heading, Text } from "@chakra-ui/react"
import { LogoBrand } from "assets/logos"
import Link from "next/link"
import React from "react"

export let AuthFormWrapper = ({ headingText, linkText, linkURL, children }) => {
  return (
    <Box
      p="10"
      w={{ base: '100%', md: '400px' }}
      bg="white"
      boxShadow="sm"
      rounded="lg"
    >
      <LogoBrand fill="brand.500" height={80} />
      <Heading
        color="brand.500"
        textAlign="left"
        my="5"
        fontSize={{ base: 'xl', lg: '2xl' }}
      >
        {headingText}
      </Heading>
      {children}

      <Link href={linkURL}>
        <Button variant="link" color="brand.500">
          <Text textAlign="left" fontSize="lg" fontWeight="bold">
            {linkText}
          </Text>
        </Button>
      </Link>
    </Box>
  )
}
