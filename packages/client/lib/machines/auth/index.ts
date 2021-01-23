import Cookies from "js-cookie"
import queryString from "query-string"
import { pluck } from "ramda"
import { assign, Machine } from "xstate"

import { AuthForgotPassword, AuthResetPassword, AuthSendEmailConfirmation, AuthSignIn, AuthSignUp } from "./api"
import {
  AuthEmailProps,
  AuthFormProps,
  AuthMachineContextProps,
  AuthResetPasswordProps,
  AuthSignInProps,
  AuthSignUpProps,
  EventPayload,
} from "./api/types"
import { setToken, signOut, userCookies } from "./api/utils/storage"

export const initialAuthContext: AuthMachineContextProps = {
  currentUser: undefined,
  userCookies,
  profileCompleted: undefined
}

export const authMachine = ({ toast, router }: AuthFormProps) => {
  return Machine(
    {
      id: 'auth',
      initial: 'entry',
      context: initialAuthContext,
      states: {
        entry: {
          on: {
            '': [
              { target: 'success', cond: 'hasSignedIn' },
              { target: 'public' }
            ]
          }
        },
        public: {
          on: {
            SIGN_IN: {
              target: 'signIn',
              cond: 'notSignedIn',
              actions: ['submitForm']
            },
            SIGN_UP: {
              target: 'signUp',
              cond: 'notSignedIn',
              actions: ['submitForm']
            },
            FORGOT_PASSWORD: [{ target: 'forgotPassword', actions: [] }],
            RESET_PASSWORD: [{ target: 'resetPassword', actions: [] }]
          }
        },
        signIn: {
          invoke: {
            id: 'signIn',
            src: (_, event: EventPayload) => {
              const { identifier, password } = event.payload
                .values as AuthSignInProps
              return AuthSignIn({ identifier, password })
            },
            onDone: {
              target: 'success',
              actions: [
                'setToken',
                'handleFormSuccess',
                'setCurrentUser',
                'redirectToDashboard'
              ]
            },
            onError: {
              target: 'public',
              actions: ['handleFormError']
            }
          }
        },
        signUp: {
          invoke: {
            id: 'signUp',
            src: (_, event: EventPayload) => {
              const { email, username, password } = event.payload
                .values as AuthSignUpProps
              return AuthSignUp({ email, username, password })
            },
            onDone: {
              target: '#auth.success',
              actions: [
                'setToken',
                'setCurrentUser',
                'handleFormSuccess',
                'redirectToDashboard'
              ]
            },
            onError: {
              target: 'public',
              actions: ['handleFormError']
            }
          }
        },
        forgotPassword: {
          invoke: {
            id: 'forgotPassword',
            src: (_, event: EventPayload) => {
              const { email } = event.payload.values as AuthEmailProps
              return AuthForgotPassword({ email })
            },
            onDone: {
              target: 'success'
            },
            onError: {
              target: 'public',
              actions: ['handleFormError']
            }
          }
        },
        resetPassword: {
          invoke: {
            id: 'resetPassword',
            src: (_, event: EventPayload) => {
              const { code } = queryString.parse(window.location.search)
              const { password, passwordConfirmation } = event.payload
                .values as AuthResetPasswordProps
              return AuthResetPassword({
                code,
                password,
                passwordConfirmation
              })
            },
            onDone: {
              target: 'success'
            },
            onError: {
              target: 'success',
              actions: ['resetFormError']
            }
          }
        },
        success: {
          initial: 'checkEmailConfirmation',
          states: {
            checkEmailConfirmation: {
              initial: 'entry',
              states: {
                entry: {
                  on: {
                    '': [
                      {
                        target: '#auth.success.fullAccess',
                        cond: 'hasConfirmedEmail'
                      },
                      {
                        target: 'confirm'
                      }
                    ]
                  }
                },
                confirm: {
                  on: {
                    CONFIRM_EMAIL: '#auth.success.emailConfirmation'
                  }
                }
              }
            },

            emailConfirmation: {
              invoke: {
                id: 'emailConfirmation',
                src: (_, event: EventPayload) => {
                  const { email } = event.payload.values as AuthEmailProps
                  return AuthSendEmailConfirmation({ email })
                },
                onDone: {
                  target: '#auth.success'
                },
                onError: {
                  target: '#auth.success',
                  actions: ['handleFormError']
                }
              }
            },
            fullAccess: {}
          },
          on: {
            SIGN_OUT: {
              target: '#auth.public',
              actions: ['signOut']
            }
          }
        }
      }
    },
    {
      guards: {
        hasSignedIn: context => !!context.userCookies.token,
        notSignedIn: context => !context.userCookies.token,
        hasConfirmedEmail: context => {
          return !!context.currentUser?.confirmed
        }
      },
      actions: {
        handleFormSuccess: (_, event: EventPayload) => {
          const { user } = event.data.data

          switch (event.type) {
            case 'done.invoke.signIn': {
              return toast({
                position: 'bottom-right',
                title: `Welcome back ${user.username}`,
                // description: "",
                status: 'success',
                duration: 9000,
                isClosable: true
              })
            }
            case 'done.invoke.signUp': {
              return toast({
                position: 'bottom-right',
                title: `Welcome to <<[ .cus.branding.name ]>> ${user.username}`,
                // description: "",
                status: 'success',
                duration: 9000,
                isClosable: true
              })
            }
            default:
              break
          }
        },

        submitForm: (_, event: EventPayload) => {
          const { actions } = event.payload

          actions.setSubmitting(false)
        },

        setToken: (_, event) => {
          setToken(event.data.data)
        },
        setCurrentUser: assign({
          currentUser: (_, event) => event.data?.data?.user
        }),
        handleFormError: (_, event) => {
          const title = pluck('message')(
            event.data.response.data.data[0]?.messages
          )

          return toast({
            position: 'bottom-right',
            title,
            // description: "",
            status: 'warning',
            duration: 9000,
            isClosable: true
          })
        },

        storeRefCode: () => {
          let { refCode } = queryString.parse(window.location.search)
          !userCookies.refCode && Cookies.set('refCode', refCode)
        },

        signOut: () => signOut,
        redirectToDashboard: () => {
          window.location.href = '/'
        }
      },
      activities: {},
      services: {}
    }
  )
}
