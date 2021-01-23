import { BoxProps } from "@chakra-ui/react"

export interface SVGProps extends BoxProps {
  fill?: string
  title?: string
  width?: number | string
  height?: number | string
  href?: string
}
