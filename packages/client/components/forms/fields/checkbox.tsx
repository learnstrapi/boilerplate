import { Box, Checkbox, FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/react"
import { IInputProps } from "components/forms/types"
import { useField } from "formik"
import React from "react"

export let FieldCheckBox = ({ ...props }: IInputProps) => {
  let [, meta, helpers] = useField(props.name)
  let { value, error, touched } = meta
  let { setValue } = helpers

  return (
    <Box w="auto" d="flex" flexDirection="column" textAlign="left" rounded="md">
      <FormControl isInvalid={touched && !!error} mb="5">
        <FormLabel fontSize="lg" fontWeight="bold">
          {props.label}
        </FormLabel>
        <Checkbox
          isChecked={!!value}
          size="lg"
          variantColor="brand"
          onChange={event => {
            setValue(event.target.checked)
          }}
        >
          {props.placeholder}
        </Checkbox>

        <FormErrorMessage>{touched && error}</FormErrorMessage>
      </FormControl>
    </Box>
  )
}
