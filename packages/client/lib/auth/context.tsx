import { useToast } from "@chakra-ui/react"
import { useMachine } from "@xstate/react"
import { print } from "graphql"
import gqlUser from "lib/gql/users/query"
import { SWRClient } from "lib/gql/utils/swr"
import { authMachine } from "lib/machines/auth"
import { signOut } from "lib/machines/auth/api/utils/storage"
import { useRouter } from "next/router"
import React, { createContext, useEffect } from "react"
import useSWR from "swr"

export const AuthContext = createContext(null)
export let AuthContextProvider = ({ children, ...props }) => {
  let toast = useToast()
  let router = useRouter()

  const [state, send, service] = useMachine(authMachine({ toast, router }), {
    devTools: true
  })

  let { userCookies } = state.context

  let { data, error, revalidate } = useSWR(
    print(gqlUser),
    (query: string) =>
      SWRClient.request(query, {
        id: userCookies.id
      }),
    {
      revalidateOnFocus: true,
      revalidateOnReconnect: true
    }
  )

  let isAuthenticated = !!userCookies?.id
  let currentUser = data?.user || state.context.currentUser

  useEffect(() => {
    !!revalidate && revalidate()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        error,
        isAuthenticated,
        revalidate,
        send,
        service,
        signOut,
        state,
        userCookies
      }}
      {...props}
    >
      {children}
    </AuthContext.Provider>
  )
}
