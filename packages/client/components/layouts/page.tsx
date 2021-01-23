import { Box, BoxProps } from "@chakra-ui/react"
import { Headroom } from "components"
import { Header } from "components/header"
import { Footer } from "components/sections"
import React from "react"

interface IPage {
  children: unknown
  withHero?: boolean
}
export let Page: React.FC<IPage & BoxProps> = ({
  children,
  withHero,
  ...props
}) => {
  return (
    <Box
      d="flex"
      justifyContent="space-between"
      flexDirection="column"
      h={withHero ? '100vh' : 'auto'}
    >
      <Headroom>
        <Header
          className="header"
          bg="brand.600"
          w="100%"
          {...props}
          zIndex={9000}
        />
      </Headroom>

      <Box {...props}>{children}</Box>
      <Footer className="footer" {...props} />
    </Box>
  )
}
