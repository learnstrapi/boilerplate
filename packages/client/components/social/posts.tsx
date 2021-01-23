import { Box, Text } from "@chakra-ui/react"
import { colors } from "assets/colors"
import { isLg, isXl } from "assets/media-queries"
import React from "react"

import { TWindowSize } from "../../assets/media-queries"
import { SharingIcons } from "./sharing"

interface IPropsShareToWin {
  size: TWindowSize
  title: string
  onClickAction?: Function
  inverse?: boolean
}

export function SharePost({
  size,
  title,
  onClickAction,
  inverse
}: IPropsShareToWin) {
  return (
    <Box
      d="flex"
      flexDirection="column"
      justifyContent={{ base: 'center', md: 'space-between' }}
      alignItems="center"
      alignContent="center"
      justifyItems="center"
      mt={{ base: '10', md: '0' }}
      py="5"
    >
      <Text
        fontWeight="bold"
        fontSize="xl"
        mt={{ base: '2', md: '5' }}
        textAlign="center"
      >
        Share this post with friends
      </Text>
      <SharingIcons
        title={title}
        color={inverse && colors.white}
        onClickAction={onClickAction}
        size={isLg(size) || isXl(size) ? '4rem' : '3rem'}
      />
    </Box>
  )
}
