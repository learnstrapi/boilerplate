import { Box, Icon } from "@chakra-ui/react"
import { AuthContext } from "lib/auth/context"
import queryPageSection from "lib/gql/content"
import { useWindowSize } from "lib/hooks/use-window-size"
import NextLink from "next/link"
import React, { useContext } from "react"
import { useQuery } from "react-apollo"

import Container from "../core/container"
import { LoadSpinner } from "../loader/spinner"
import { AvatarStack } from "./avatar"
import { MobileMenu, StandardMenu } from "./menus"

export const Header = ({ ...props }) => {
  let {
    loading: loadingHeaderData,
    error: errorHeaderData,
    data: dataHeader
  } = useQuery(queryPageSection, { variables: { slug: 'header' } })

  let screenSize = useWindowSize()
  let { isAuthenticated, currentUser } = useContext(AuthContext)
  let generalLinks =
    !errorHeaderData && dataHeader?.contents[0]?.links[0]?.links

  return (
    <>
      <Box
        p="2"
        d="flex"
        color="white"
        {...props}
        position="absolute"
        top={0}
        zIndex={9000}
      >
        <Container
          d="flex"
          justifyContent="space-between"
          flexDirection="row"
          margin="auto"
          py="inherit"
          alignItems="center"
        >
          <NextLink href="/">
            <Icon
              name="brand"
              size="sm"
              height={50}
              w="auto"
              color="grey.50"
              cursor="pointer"
            />
          </NextLink>

          {loadingHeaderData ? (
            <LoadSpinner />
          ) : errorHeaderData ? (
            'error'
          ) : (
            <Box
              d="flex"
              justifyContent="space-between"
              flexDirection="row"
              alignItems="center"
            >
              {['isSm', 'isMd'].includes(screenSize.size) ? (
                <MobileMenu screens={generalLinks} />
              ) : (
                <Box d="flex" justifyContent="start">
                  <StandardMenu screens={generalLinks} />
                </Box>
              )}
              {isAuthenticated &&
                ['isMd', 'isLg', 'isXl'].includes(screenSize.size) && (
                  <AvatarStack
                    user={currentUser}
                    text="Manage account"
                    mr={{ base: '5', lg: '0' }}
                  />
                )}
            </Box>
          )}
        </Container>
      </Box>
    </>
  )
}
