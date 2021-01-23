export type ILink = {
  label: string
  href: string
  external?: string
}
export interface ILinks {
  title: string
  links: ILink[]
}

export interface IContent {
  id: number
  content: string
  links: ILinks[]
  media: {
    name: string
    mime: string
    size: string
    url: string
  }
  meta: string
  name: string
}
