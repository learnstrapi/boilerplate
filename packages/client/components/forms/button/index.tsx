import { Button, ButtonProps } from "@chakra-ui/react"
import React from "react"

interface IPropsFormButton extends ButtonProps {
  isSubmitting?: boolean
  isValidating?: boolean
  hasErrors?: boolean
  props?: any
  label?: string
  children: any
}

export let FormButton = ({
  isSubmitting,
  isValidating,
  hasErrors,
  children,
  ...props
}: IPropsFormButton) => {
  return (
    <Button
      type="submit"
      loadingText={isValidating ? 'Validating' : 'Submitting'}
      isLoading={isValidating || isSubmitting}
      isDisabled={isSubmitting || isValidating || hasErrors}
      bg={props.variant === 'outline' ? 'transparent' : 'brand.500'}
      color={props.variant === 'outline' ? 'brand.500' : 'white'}
      size="lg"
      borderColor="brand.500"
      fontSize="xl"
      _hover={{
        bg: 'brand.500',
        color: 'white'
      }}
      {...props}
    >
      {children}
    </Button>
  )
}
