import { InputProps } from "@chakra-ui/react"

export interface IInputProps extends InputProps {
  label?: React.ReactNode
  minYear?: number
  maxYear?: number
  field?: {
    name?: string
    value?: string
  }
  placeholder?: string
  form?: any | IForm
  className?: string
  help?: string
  name?: string
  type?: string
  onChange?: any
  onSelect?: any
  suggestions?: any
  disabled?: boolean
  options?: string[]
  isSelect?: boolean
  size?: any
  inputmode?: string
  pattern?: string
}

interface IForm {
  dirty?: any
  status?: any
  touched?: any
  errors?: any
  setFieldValue?: any
}
