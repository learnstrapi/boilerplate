import { Box, ModalCloseButton } from "@chakra-ui/react"
import React, { useState } from "react"

export let FlashBanner = ({ show, text, action, ...props }) => {
  const [showFlash, setShowFlash] = useState(show)

  return (
    <Box>
      {showFlash && (
        <Box
          p="2"
          bg="brand.300"
          d="flex"
          color="brand.900"
          {...props}
          cursor="pointer"
        >
          <Box
            d="flex"
            justifyContent="space-between"
            flexDirection="row"
            width={{ base: '100%', lg: '4xl', xl: '6xl' }}
            margin="auto"
            p={{ base: '0', sm: '1' }}
            alignItems="center"
          >
            <Box
              d="flex"
              justifyContent={{ base: 'flex-start', lg: 'space-between' }}
              flexDirection="row"
              alignItems="center"
              onClick={action}
              flexGrow={1}
            >
              {text}
            </Box>
            <ModalCloseButton onClick={() => setShowFlash(false)} />
          </Box>
        </Box>
      )}
    </Box>
  )
}
