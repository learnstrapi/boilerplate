import { Link, PseudoBox } from "@chakra-ui/react"
import NextLink from "next/link"
import React from "react"
import uuid from "uuid"

import { MenuItem } from "./types"

const MenuLink = ({ label, href, ...props }: MenuItem) => {
  return (
    <PseudoBox
      key={uuid()}
      color="white"
      cursor="pointer"
      _hover={{
        textDecoration: 'underline'
      }}
      {...props}
    >
      <NextLink href={href}>
        <Link fontSize={props.fontSize || 'xl'} fontWeight="bold">
          {label}
        </Link>
      </NextLink>
    </PseudoBox>
  )
}

export default MenuLink
