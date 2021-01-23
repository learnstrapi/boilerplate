import { Cloudinary, Transformation } from 'cloudinary-core'

export let imgClient = new Cloudinary({
  cloud_name: process.env.PROVIDER_CLOUD_NAME,
  secure: true
})

export let getImageId = (url: string) => {
  return url.split('/')[7].split('.')[0]
}

export let getImageName = (url: string) => {
  return url?.split('/')[7]
}

let cloudinaryOptions = { crop: 'scale', fetchFormat: 'auto' }

export let getOptimisedImage = (
  imageUrl: string,
  imgOptions?: Transformation.Options
) => {
  let image = getImageName(imageUrl)

  let cdnImage = imgClient.url(image, {
    transformation: [{ ...imgOptions, ...cloudinaryOptions }]
  })

  return { url: cdnImage, cssUrl: `url(${cdnImage})` }
}
