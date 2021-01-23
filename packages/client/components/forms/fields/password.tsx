import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react"
import { IInputProps } from "components/forms/types"
import { useField } from "formik"
import React, { useState } from "react"

export let FieldPassword = ({ ...props }: IInputProps) => {
  let [reveal, setReveal] = useState(false)

  let [field, meta, helpers] = useField(props.name)

  let { value, error, touched } = meta
  let { setValue } = helpers

  return (
    <Box w="auto" d="flex" flexDirection="column" textAlign="left" rounded="md">
      <FormControl isInvalid={touched && !!error} mb="5" {...props}>
        <FormLabel fontSize="lg" fontWeight="bold">
          {props.label}
        </FormLabel>

        <InputGroup size="lg">
          <Input
            {...field}
            value={value}
            focusBorderColor="accent2.400"
            borderColor="grey.200"
            borderWidth="2px"
            size="lg"
            id={field.name}
            isInvalid={touched && !!error}
            placeholder={props.placeholder}
            onChange={event => setValue(event.target.value)}
            type={
              props.type === 'password'
                ? reveal
                  ? 'text'
                  : 'password'
                : props.type
            }
          />
          <InputRightElement
            children={
              <IconButton
                icon={reveal ? 'view' : 'view-off'}
                color="grey.500"
                aria-label="Show password"
                size="lg"
                onClick={() => setReveal(!reveal)}
                variant="link"
              />
            }
          />
        </InputGroup>

        <FormErrorMessage>{touched && error}</FormErrorMessage>
      </FormControl>
    </Box>
  )
}
