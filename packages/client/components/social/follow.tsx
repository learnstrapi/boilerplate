import { Box, Link, SimpleGrid } from "@chakra-ui/react"
import { AppConfig } from "assets/config"
import { Heading } from "components/core/heading"
import { useWindowSize } from "lib/hooks/use-window-size"
import React from "react"

import { isSm } from "../../assets/media-queries"
import { StyledIcon } from "./styles"
import { IPropsSocialSharingLinks } from "./types"

export const SocialFollowIcons = ({
  title,
  color
}: IPropsSocialSharingLinks) => {
  const screenSize = useWindowSize()

  return (
    <Box
      flexDirection="row"
      justifyContent="flex-start"
      alignContent="center"
      d="inline-block"
      pt="10"
    >
      <Heading size="md">{title || 'Follow us:'}</Heading>
      <SimpleGrid columns={3} spacing={{ base: 10 }} p="4" fontSize="xl">
        <Link href={AppConfig.socials.twitter} target="_blank">
          <StyledIcon
            name="twitter"
            size={isSm(screenSize) ? '24px' : '48px'}
            color={color}
          />
        </Link>
        <Link href={AppConfig.socials.instagram} target="_blank">
          <StyledIcon
            name="instagram"
            size={isSm(screenSize) ? '24px' : '48px'}
            color={color}
          />
        </Link>
        <Link href={AppConfig.socials.linkedin} target="_blank">
          <StyledIcon
            name="linkedin"
            size={isSm(screenSize) ? '24px' : '48px'}
            color={color}
          />
        </Link>
      </SimpleGrid>
    </Box>
  )
}
