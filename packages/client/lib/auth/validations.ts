import { object, string } from 'yup'
export let signInSchema = object().shape({
  password: string().required('required'),
  identifier: string().required('required')
})
export let signUpSchema = object().shape({
  username: string().min(2).max(15).required('required'),
  password: string().min(6).max(12).required('required'),
  email: string().email('Must be a valid email').required('required')
})
