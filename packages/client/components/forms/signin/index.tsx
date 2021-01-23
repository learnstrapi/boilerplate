import { Box, Button } from "@chakra-ui/react"
import { FieldInput } from "components/forms/fields/input"
import { FieldPassword } from "components/forms/fields/password"
import { Form, Formik } from "formik"
import { AuthContext } from "lib/auth/context"
import { AuthFormWrapper } from "lib/auth/forms/wrapper"
import { signInSchema } from "lib/auth/validations"
import { handleTransitionError } from "lib/machines/auth/api/utils/error"
import React, { useContext } from "react"

import { FormButton } from "../button"

let initialValues = { identifier: '', password: '' }

export let SignInForm = props => {
  let { isAuthenticated, send, service } = useContext(AuthContext)

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signInSchema}
      validateOnChange
      validateOnBlur
      enableReinitialize
      onSubmit={(values, actions) => {
        send({ type: 'SIGN_IN', payload: { values, actions } })
        handleTransitionError(service, () => actions.setSubmitting(false))
      }}
    >
      {({ isSubmitting, isValidating, errors }) => {
        let hasErrors = Object.keys(errors).length > 0

        return (
          <AuthFormWrapper
            headingText="Sign up to play"
            linkURL="/signup"
            linkText={
              isAuthenticated ? 'Already have an account?' : 'Need to register?'
            }
            {...props}
          >
            <Form>
              <FieldInput
                label="Username or Email"
                name="identifier"
                type="text"
                placeholder="Username or email"
                isRequired
              />
              <FieldPassword
                label="Password"
                name="password"
                type="password"
                placeholder="you'll need this to sign in"
                isRequired
              />
              <FormButton
                isSubmitting={isSubmitting}
                isValidating={isValidating}
                hasErrors={hasErrors}
              >
                Sign in
              </FormButton>

              {!isAuthenticated && (
                <Box pt="5">
                  <Button
                    onClick={() =>
                      (window.location.pathname = '/forgot-password')
                    }
                    variant="link"
                    color="brand.500"
                    size="lg"
                  >
                    Forgot your password?
                  </Button>
                </Box>
              )}
            </Form>
          </AuthFormWrapper>
        )
      }}
    </Formik>
  )
}
