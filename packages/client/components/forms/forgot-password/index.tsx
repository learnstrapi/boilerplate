import { Text, useToast } from "@chakra-ui/react"
import axios from "axios"
import { Form, Formik } from "formik"
import { apiUrl } from "lib/config/root-url"
import { wrapPromise } from "lib/utils/async"
import React, { useState } from "react"

import { AuthFormWrapper } from "../auth/wrapper"
import { FormButton } from "../button"
import { FieldInput } from "../fields/input"
import { forgotPasswordSchema } from "./validations"

export let ForgotPasswordForm = () => {
  let toast = useToast()
  const [submitted, setSubmitted] = useState(false)

  let initialValues = {
    email: ''
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={forgotPasswordSchema}
      validateOnChange
      validateOnBlur
      enableReinitialize
      onSubmit={async (values, actions) => {
        let { setSubmitting } = actions
        let { email } = values

        setSubmitting(true)

        let [, error] = await wrapPromise(
          axios.post(`${apiUrl}/auth/forgot-password`, {
            email
          })
        )

        if (error) {
          console.log('handleForgotPassword -> error', error)
        }

        setSubmitted(true)

        return toast({
          position: 'bottom-right',
          title: 'Check your email',
          description: 'We will send an email to reset your password.',
          status: 'success',
          duration: 9000,
          isClosable: true
        })
      }}
    >
      {({ isSubmitting, isValidating, errors }) => {
        let hasErrors = Object.keys(errors).length > 0

        return (
          <AuthFormWrapper headingText="Forgot your password?">
            <Text pb="4">
              {!submitted
                ? 'Enter the email address for your account. We will send an email to reset your password.'
                : 'If you have an account with us, an email should be on the way to you.'}
            </Text>
            <Form>
              {!submitted && (
                <>
                  <FieldInput
                    type="email"
                    label="Email"
                    name="email"
                    placeholder="Enter your email address"
                  />

                  <FormButton
                    type="submit"
                    my="5"
                    isSubmitting={isSubmitting}
                    isValidating={isValidating}
                    hasErrors={hasErrors}
                  >
                    Reset password
                  </FormButton>
                </>
              )}
            </Form>
          </AuthFormWrapper>
        )
      }}
    </Formik>
  )
}
