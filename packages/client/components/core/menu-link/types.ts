import { BoxProps } from "@chakra-ui/react"
import { IPropsLink } from "components/sections/types"

export interface MenuItem extends BoxProps {
  url?: string
  label?: string
  title?: string
  href?: string
  links?: MenuItem[] | IPropsLink[]
}
