import { Box, Icon, Link, SimpleGrid } from "@chakra-ui/react"
import { AppConfig } from "assets/config"
import { useWindowSize } from "lib/hooks/use-window-size"
import { isBrowser } from "lib/utils/env"
import React from "react"

import { isSm } from "../../assets/media-queries"
import { IPropsSocialSharingLinks } from "./types"

export const SharingIcons = ({ title, color }: IPropsSocialSharingLinks) => {
  const screenSize = useWindowSize()

  return (
    isBrowser && (
      <Box
        flexDirection="row"
        justifyContent="flex-start"
        alignContent="center"
      >
        <SimpleGrid
          columns={3}
          spacing={{ base: 4, lg: 10 }}
          p="10"
          fontSize="xl"
        >
          <Link
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURI(
              window?.location.href
            )}`}
            target="_blank"
          >
            <Icon
              name="facebook"
              color={color || '#3b5998'}
              size={isSm(screenSize) ? '24px' : '48px'}
            />
          </Link>
          <Link
            href={`https://twitter.com/intent/tweet?text=${`${title} - ${
              AppConfig.companyName
            } ${encodeURI(window?.location.href)}`}`}
            target="_blank"
          >
            <Icon
              name="twitter"
              color={color || '#1da1f2'}
              size={isSm(screenSize) ? '24px' : '48px'}
            />
          </Link>
          <Link
            href={`whatsapp://send?text=${`${title} - ${
              AppConfig.companyName
            } ${encodeURI(window?.location.href)}`}`}
            target="_blank"
          >
            <Icon
              name="whatsApp"
              color={color || '#25d366'}
              size={isSm(screenSize) ? '24px' : '48px'}
            />
          </Link>
        </SimpleGrid>
      </Box>
    )
  )
}
