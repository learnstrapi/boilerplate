import { Box, Heading, Image, Link } from "@chakra-ui/react"
import { ComponentDataClient } from "lib/gql/utils/types"
import { getOptimisedImage } from "lib/utils/images"
import React from "react"
import { uniqueId } from "xstate/lib/utils"

interface ClientSliderProps {
  clients: ComponentDataClient[]
}

const ClientSlider = ({ clients }: ClientSliderProps) => {
  return (
    <Box textAlign="center" py="10">
      <Heading color="brand.600" fontSize="xl">
        Some brands we work with
      </Heading>
      <Box
        d="flex"
        alignItems="center"
        maxW={{ base: '80%', lg: '4xl' }}
        mx="auto"
        pt="10"
        overflowX="scroll"
        justifyContent="center"
      >
        {clients?.map(client => {
          const { logo, name, slug } = client
          const logoUrl = getOptimisedImage(logo?.url, { height: 50 })?.url
          const clientSlug = `/portfolio/${slug}`

          if (logoUrl) {
            return (
              <Link href={clientSlug} key={uniqueId()} px="4">
                <Image src={logoUrl} aria-label={name} alt={name} />
              </Link>
            )
          }
        })}
      </Box>
    </Box>
  )
}

export default ClientSlider
