import { Cloudinary, Transformation } from "cloudinary-core"

import { isProduction, mediaUrl } from "./env"

export const imgClient = new Cloudinary({
  cloud_name: process.env.PROVIDER_CLOUD_NAME,
  secure: true
})

export const getImageId = (url: string) => {
  return url.split('/')[7].split('.')[0]
}

export const getImageName = (url: string) => {
  return url?.split('/')[7]
}

const cloudinaryOptions = { crop: 'fill', fetchFormat: 'auto' }

type Format = 'png' | 'jpg' | 'jpeg' | 'gif' | 'auto'

export const getOptimisedImage = (
  imageUrl: string,
  imgOptions?: Transformation.Options,
  format?: Format
) => {
  const imageName = getImageName(imageUrl)
  const localImg = mediaUrl(imageUrl)
  const cdnImage = imgClient.url(imageName, {
    transformation: [
      { ...imgOptions, ...cloudinaryOptions, fetchFormat: format }
    ]
  })

  const useCdnImg = isProduction || imageUrl?.includes('https://')

  const imageSrc = useCdnImg ? cdnImage : localImg

  return imageSrc ? { url: imageSrc, cssUrl: `url(${imageSrc})` } : null
}
