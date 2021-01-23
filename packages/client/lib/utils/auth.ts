import Router from 'next/router'
import { isBrowser } from './env'

export function authRedirect(
  isAuthenticated: boolean,
  redirectRoute: string = '/signup'
) {
  isBrowser && isAuthenticated === false && Router.push(redirectRoute)
}
