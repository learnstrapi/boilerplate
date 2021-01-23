import React from 'react'

export interface IAuthValues {
  email?: string
  username?: string
  password: string
  identifier?: string
}

export interface IAuthSubmit {
  toast?: any
  type: string
  values?: IAuthValues
  actions?: {
    setSubmitting?: {
      (arg0: boolean): void
      (arg0: boolean): void
      (arg0: boolean): void
    }
    setErrors?: (arg0: any) => void
    setStatus?: (arg0: string) => void
  }
  setErrors?: React.Dispatch<any>
}
