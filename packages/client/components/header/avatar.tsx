import { Avatar, AvatarBadge, Box, Text } from "@chakra-ui/react"
import { AuthContext } from "lib/auth/context"
import { getImageName, imgClient } from "lib/utils/images"
import Link from "next/link"
import React, { useContext, useEffect } from "react"

export let AvatarStack = ({ user, text, ...props }) => {
  let { revalidate, currentUser } = useContext(AuthContext)

  let imageUrl = getImageName(user?.profile?.avatar?.url)

  let image = imgClient.url(imageUrl, {
    transformation: [{ height: 300, crop: 'scale' }]
  })

  useEffect(() => {
    revalidate()
  }, [currentUser])

  return (
    <>
      {currentUser && (
        <Box cursor="pointer" {...props}>
          <Link href="/profile">
            <Box d="flex" flexDirection="row" p="0" alignContent="center">
              <Avatar src={image} size="md" mr="4">
                <AvatarBadge
                  borderColor="brand.400"
                  bg="brand.400"
                  size="0.5em"
                />
              </Avatar>
              <Box>
                <Text
                  fontSize="md"
                  fontWeight="bold"
                  color="white"
                  mb="0"
                  p="0"
                >
                  {user?.username}
                </Text>
                <Text fontSize="sm" color="light-2" mt="0" p="0">
                  {text}
                </Text>
              </Box>
            </Box>
          </Link>
        </Box>
      )}
    </>
  )
}
