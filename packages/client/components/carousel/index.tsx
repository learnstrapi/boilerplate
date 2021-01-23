import { Box, Image } from "@chakra-ui/react"
import { UploadFile } from "lib/gql/utils/types"
import { getOptimisedImage } from "lib/utils/images"
import React from "react"
import { uniqueId } from "xstate/lib/utils"

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1
}

const Carousel = ({ images }: { images: UploadFile[] }) => {
  return (
    <Box d="flex" flexDirection="row" w="full" overflowX="auto">
      {images?.map(image => {
        const cdnImg = getOptimisedImage(image.url, { height: 600 })
        return <Image height="600px" key={uniqueId()} src={cdnImg.url} />
      })}
    </Box>
  )
}

export default Carousel
