import { Box, Button, Text } from "@chakra-ui/react"
import { LogoBrand } from "assets/logos"
import { Heading } from "components/core/heading"
import Link from "next/link"
import React from "react"

interface IAuthFormWrapper {
  headingText: string
  linkText?: string
  linkURL?: string
  children
}
export let AuthFormWrapper = ({
  headingText,
  linkText,
  linkURL,
  children
}: IAuthFormWrapper) => {
  let hasLink = linkURL && linkText
  return (
    <Box
      p="10"
      w={{ base: '95vw', md: 'sm' }}
      bg="color.50"
      boxShadow="lg"
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

      {hasLink && (
        <Box pt="5">
          <Link href={linkURL}>
            <Button variant="link" color="brand.500">
              <Text textAlign="left" fontSize="lg" fontWeight="bold">
                {linkText}
              </Text>
            </Button>
          </Link>
        </Box>
      )}
    </Box>
  )
}
