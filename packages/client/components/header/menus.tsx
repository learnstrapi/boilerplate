import {
  Box,
  Button,
  CloseButton,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react"
import { isSm } from "assets/media-queries"
import { MenuLink } from "components/core"
import { Heading } from "components/core/heading"
import { IPropsLink } from "components/sections/types"
import { AuthContext } from "lib/auth/context"
import { useWindowSize } from "lib/hooks/use-window-size"
import React, { useContext } from "react"
import uuid from "uuid"

import { MenuItem } from "../core/menu-link/types"

export let StandardMenu = ({ screens }) =>
  screens?.length > 0
    ? screens?.map(({ href, label }: MenuItem | IPropsLink) => (
        <Box key={uuid()} color="white" fontWeight="bold" fontSize="xl" mr="4">
          <MenuLink href={href} label={label} />
        </Box>
      ))
    : null

export let MobileMenu = ({ screens }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  let { isAuthenticated } = useContext(AuthContext)
  let screenSize = useWindowSize()

  return (
    <Box
      d="flex"
      justifyContent="flex-end"
      alignContent="space-between"
      flexDirection="row"
    >
      <Button
        rightIcon="triangle-down"
        onClick={onOpen}
        variant="outline"
        _hover={{
          borderColor: 'white',
          bg: 'color.50',
          color: 'brand.600'
        }}
      >
        Menu
      </Button>

      <Drawer
        onClose={onClose}
        isOpen={isOpen}
        size={isSm(screenSize) ? 'xs' : 'lg'}
      >
        <DrawerOverlay />
        <DrawerContent bg="brand.600" color="white">
          <DrawerHeader
            p="10"
            color="white"
            d="flex"
            justifyContent="space-between"
          >
            Menu <CloseButton size="lg" onClick={onClose} />
          </DrawerHeader>
          <DrawerBody>
            <Box p="3" d="flex" flexDirection="column">
              {screens?.map((screen: MenuItem) => (
                <Box key={uuid()}>
                  {screen.title && <Heading size="xl">{screen.title}</Heading>}
                  {screen.links ? (
                    screens.links?.map((subPage: MenuItem) => (
                      <MenuLink
                        key={uuid()}
                        href={subPage.href}
                        label={subPage.label}
                      />
                    ))
                  ) : (
                    <MenuLink href={screen.href} label={screen.label} />
                  )}
                </Box>
              ))}
              {isAuthenticated && (
                <>
                  <MenuLink href="/profile" label="Profile" />
                </>
              )}
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}
