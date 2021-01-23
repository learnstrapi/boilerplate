import { Box, BoxProps, Icon } from "@chakra-ui/react"
import { toRem } from "assets/styles/type"
import { Container, MenuLink } from "components/core"
import { Heading } from "components/core/heading"
import gqlQueryContent from "lib/gql/content"
import React from "react"
import { useQuery } from "react-apollo"
import uuid from "uuid"

import { IPropsLinkGroup } from "./types"

const Footer = ({ ...props }: BoxProps) => {
  let { error, data } = useQuery(gqlQueryContent, {
    variables: { slug: 'footer' }
  })

  return (
    <Box className="footer" bg="white" pt="10" pb="20" {...props}>
      <Container
        d="flex"
        justifyContent="space-between"
        flexDirection="row"
        margin="auto"
        py="inherit"
        alignItems="flex-start"
      >
        <Icon
          name="brand"
          size="sm"
          height={toRem(4)}
          maxW={{ base: '200px', md: '300px' }}
          mb={{ base: '10', md: '0' }}
          color="brand.600"
        />

        <Box
          d="flex"
          flexDirection={{ base: 'column', md: 'row' }}
          alignContent="center"
          flex="1 0 auto"
        >
          {!error &&
            data?.contents[0]?.links?.map((linkGroup: IPropsLinkGroup) => {
              return (
                <Box d="flex" key={uuid()} flexDirection="column">
                  <Heading fontSize="md" mb="2" color="brand.600">
                    {linkGroup?.title}
                  </Heading>

                  <Box d="flex" flexDirection="column">
                    {linkGroup?.links?.map(
                      link =>
                        link.published && (
                          <MenuLink
                            key={uuid()}
                            href={link.href}
                            label={link.label}
                            fontSize="lg"
                            color="brand.600"
                          />
                        )
                    )}
                  </Box>
                </Box>
              )
            })}
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
