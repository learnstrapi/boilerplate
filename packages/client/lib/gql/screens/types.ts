import { ILinks } from 'lib/gql/content/types'

import { IContent } from '../content/types'
import { UploadFile } from '../utils/types'

export interface IHero {
  content: string
  media?: UploadFile
  url: string
  ctaText: string
  meta: string
}

export interface IFaq {
  question: string
  answer: string
  published: boolean
}

export interface IClient {
  __typename?: string
  name?: string
  location?: string
  description?: string
  sector: string
  slug: string
  logo?: UploadFile
  images?: UploadFile[]
  services?: string
  website?: string
}

export interface IService {
  __typename?: string
  name?: string
  description?: string
  location?: string
  image?: UploadFile
  website?: string
}

export interface IScreen {
  content: string
  contents: IContent[]
  data?: IClient[]
  faqs?: IFaq[]
  hero: IHero
  links: ILinks
  id: number
  meta: string
  slug: string
  title: string
  url: string
}
