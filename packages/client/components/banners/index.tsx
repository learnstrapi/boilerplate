import { Box, Image } from "@chakra-ui/react"
import { isLg } from "assets/media-queries"
import { LoadSpinner } from "components/loader/spinner"
import { print } from "graphql"
import bannerQuery from "lib/gql/common/queries/ad-location"
import { SWRClient } from "lib/gql/utils/swr"
import { useWindowSize } from "lib/hooks/use-window-size"
import { mediaUrl } from "lib/utils/env"
import { isBeforeExpiry } from "lib/utils/time"
import React from "react"
import useSWR from "swr"

import { iABSizes } from "./sizes"
import { StyledBanner } from "./styles"
import { IBannerGroupProps, IBannerProps } from "./types"

let Wrapper = ({ children, screenSize }) => {
  return (
    <Box
      py="10"
      fill="horizontal"
      flexDirection={isLg(screenSize) ? 'row' : 'column'}
      justifyContent="space-around"
    >
      {children}
    </Box>
  )
}

let Banner = ({ url, title, image, size }) => {
  let [width, height] = iABSizes[size].dimensions

  return (
    <StyledBanner href={url} target="_blank">
      <Image
        objectFit="cover"
        src={mediaUrl(image[0]?.url)}
        alt={title}
        width={width}
        height={height}
        fallbackSrc={`http://placehold.it/${width}x${height}`}
      />
    </StyledBanner>
  )
}

export let BannerGroup = ({ adLocation, size, limit }: IBannerGroupProps) => {
  let { data, error } = useSWR(print(bannerQuery), (query: string) =>
    SWRClient.request(query, {
      adLocation,
      size,
      limit
    })
  )

  let screenSize = useWindowSize()

  if (error) return <Box></Box>
  if (!data) return <LoadSpinner />

  return (
    <Box
      justifyContent="space-around"
      flexDirection={isLg(screenSize) ? 'row' : 'column'}
    >
      <Wrapper screenSize={screenSize}>
        {data?.['adlocations'][0]?.banners?.map(
          (banner: IBannerProps, i: number) =>
            isBeforeExpiry(banner.expiry) && (
              <Banner
                key={i}
                url={banner.url}
                title={banner.title}
                image={banner.image}
                size={banner.size}
              />
            )
        )}
      </Wrapper>
    </Box>
  )
}
