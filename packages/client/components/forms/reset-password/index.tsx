import { Text, useToast } from "@chakra-ui/react"
import axios from "axios"
import { Form, Formik } from "formik"
import { apiUrl } from "lib/config/root-url"
import { wrapPromise } from "lib/utils/async"
import { isBrowser } from "lib/utils/env"
import queryString from "query-string"
import React, { useState } from "react"

import { AuthFormWrapper } from "../auth/wrapper"
import { FormButton } from "../button"
import { FieldPassword } from "../fields/password"
import { resetPasswordSchema } from "./validations"

export let ResetPasswordForm = () => {
  let toast = useToast()
  const [submitted, setSubmitted] = useState(false)
  let { code } = isBrowser && queryString.parse(window?.location?.search)

  let initialValues = {
    code,
    password: '',
    passwordConfirmation: ''
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={resetPasswordSchema}
      validateOnChange
      validateOnBlur
      enableReinitialize
      onSubmit={async (values, actions) => {
        let { setSubmitting } = actions
        let { password, passwordConfirmation } = values

        setSubmitting(true)

        let [, error] = await wrapPromise(
          axios.post(`${apiUrl}/auth/reset-password`, {
            code,
            password,
            passwordConfirmation
          })
        )

        if (error) {
          return toast({
            position: 'bottom-right',
            title: 'Something went wrong',
            description: error.message,
            status: 'error',
            duration: 9000,
            isClosable: true
          })
        }

        setSubmitted(true)

        return toast({
          position: 'bottom-right',
          title: 'Check your password',
          description: 'Your password has been changed.',
          status: 'success',
          duration: 9000,
          isClosable: true
        })
      }}
    >
      {({ isSubmitting, isValidating, errors }) => {
        let hasErrors = Object.keys(errors).length > 0

        return (
          <AuthFormWrapper headingText="Change password">
            <Text pb="4">
              {!submitted
                ? ''
                : 'Your password has now been updated, redirecting you to your profile page.'}
            </Text>
            <Form>
              {!submitted && (
                <>
                  <FieldPassword
                    type="password"
                    label="Password"
                    name="password"
                    placeholder="Enter new password"
                  />
                  <FieldPassword
                    type="password"
                    label="Confirm password"
                    name="passwordConfirmation"
                    placeholder="Confirm new password"
                  />

                  <FormButton
                    type="submit"
                    my="5"
                    isSubmitting={isSubmitting}
                    isValidating={isValidating}
                    hasErrors={hasErrors}
                  >
                    Change password
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
