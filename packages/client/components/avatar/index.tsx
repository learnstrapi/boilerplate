import {
  Avatar,
  AvatarBadge,
  Box,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react"
import { UploadFileField } from "components/forms/upload"
import { getImageName, imgClient } from "lib/utils/images"
import React from "react"

export let AvatarEdit = ({ currentUser }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  let imageUrl = getImageName(currentUser?.profile?.avatar?.url)

  let image = imgClient.url(imageUrl, {
    transformation: [{ height: 300, crop: 'scale' }]
  })

  return (
    <Box w={{ base: '100%', md: 'auto' }}>
      <Avatar
        size="2xl"
        w={{ base: '100%', md: '56' }}
        h={{ base: '100%', md: '56' }}
        name={currentUser?.username}
        src={image}
      >
        <AvatarBadge w="auto">
          <IconButton
            aria-label="Edit profile pic"
            rounded="full"
            size="lg"
            onClick={onOpen}
            icon="link"
            w="auto"
            variantColor="brand"
          />
        </AvatarBadge>
      </Avatar>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay bg="grey.900" opacity={0.9} />
        <ModalContent>
          <ModalHeader>Update display pic</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <UploadFileField
              uploadRef="data.profile"
              refId={currentUser?.profile?.id}
              field="avatar"
              successMsg="Your profile has been updated!"
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
}
