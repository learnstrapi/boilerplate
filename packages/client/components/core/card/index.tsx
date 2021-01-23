import { Box, BoxProps } from "@chakra-ui/react"
import { Heading } from "components/core/heading"
import React from "react"

const Card = ({ title, children, ...props }: BoxProps) => {
  return (
    <Box
      bg="accent2.300"
      rounded="lg"
      color="grey.800"
      fontWeight="normal"
      mb="10"
      p="10"
      {...props}
    >
      <Heading mb="4">{title}</Heading>
      {children}
    </Box>
  )
}

export default Card
