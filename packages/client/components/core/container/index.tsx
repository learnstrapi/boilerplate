import { Box, BoxProps } from "@chakra-ui/react"
import React from "react"

const Container = ({ children, ...BoxProps }: BoxProps) => {
  return (
    <Box
      w={{ base: 'full', md: '2xl', xl: '5xl' }}
      margin="auto"
      fontSize={{ base: 'lg', lg: 'xl' }}
      py="12"
      px={{ base: '12', md: '0' }}
      {...BoxProps}
    >
      {children}
    </Box>
  )
}

export default Container
