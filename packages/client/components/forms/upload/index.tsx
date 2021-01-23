import { Box, Input, useToast } from "@chakra-ui/react"
import { apiUrl } from "lib/config/root-url"
import React, { useRef } from "react"

import { FormButton } from "../button"

interface IPropsUploadFileField {
  uploadRef: string
  refId: number
  field: string
  successMsg?: string
}

export let UploadFileField = ({
  uploadRef,
  refId,
  field,
  successMsg
}: IPropsUploadFileField) => {
  let fileUploadField = useRef()
  let toast = useToast()

  return (
    <form
      ref={fileUploadField}
      onSubmit={() => {
        try {
          let request = new XMLHttpRequest()
          request.open('POST', `${apiUrl}/upload`)
          request.send(new FormData(fileUploadField.current))

          toast({
            position: 'bottom-right',
            title: 'Success',
            description: successMsg || 'Your file was uploaded.',
            status: 'success',
            duration: 9000,
            isClosable: true
          })
        } catch (error) {
          toast({
            position: 'bottom-right',
            title: 'Something went wrong',
            description: error,
            status: 'error',
            duration: 9000,
            isClosable: true
          })
        }
      }}
    >
      <Input type="file" name="files" />
      <Box d="none">
        <input type="text" name="ref" value={uploadRef} readOnly />
        <input type="text" name="refId" value={refId} readOnly />
        <input type="text" name="field" value={field} readOnly />
      </Box>

      <Box py="5">
        <FormButton type="submit" mt="5">
          Upload
        </FormButton>
      </Box>
    </form>
  )
}
