import React from 'react'

export interface IPropsCTABanner {
  heading: string
  subHeading: string
  customContent?: boolean
  children?: React.ReactNode
}

export interface IPropsLink {
  id?: number
  label?: string
  href?: string
  published?: boolean
}

export interface IPropsLinkGroup {
  id: number
  title: string
  links?: IPropsLink[]
}
