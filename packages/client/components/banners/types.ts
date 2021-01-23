export interface IBannerGroupProps {
  isTabletAndUp?: (size: string) => boolean
  screenSize?: string
  bannerSize?: string
  adLocation?: string
  size: string
  limit?: number
  expiry?: string
  screenSlug?: string
}

export interface IBannerProps {
  url: string
  title: string
  image: { name: string; url: string }[]
  size: string
  expiry?: string
}
