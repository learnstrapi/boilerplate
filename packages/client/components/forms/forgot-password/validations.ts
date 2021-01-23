import { object, string } from 'yup'

let errorMsg = 'Enter the email address you registered with'

export let forgotPasswordSchema = object().shape({
  email: string().required(errorMsg).email(errorMsg)
})
