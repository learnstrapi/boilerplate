import { FormControl, FormErrorMessage, FormLabel, Textarea } from "@chakra-ui/react"
import { IInputProps } from "components/forms/types"
import { useField } from "formik"
import React from "react"

export let FieldInputTextarea = ({ ...props }: IInputProps) => {
  let [field, meta, helpers] = useField(props.name)

  let { error, touched } = meta

  let { setValue } = helpers

  return (
    <FormControl isInvalid={touched && !!error} mb="5" {...props}>
      <FormLabel fontSize="lg" fontWeight="bold">
        {props.label}
      </FormLabel>
      <Textarea
        {...field}
        id={field.name}
        focusBorderColor="accent2.400"
        borderColor="grey.200"
        borderWidth="2px"
        size="lg"
        isInvalid={touched && !!error}
        placeholder={props.placeholder}
        onChange={event => setValue(event.target.value)}
        type={props.type}
      />
      <FormErrorMessage>{touched && error}</FormErrorMessage>
    </FormControl>
  )
}
