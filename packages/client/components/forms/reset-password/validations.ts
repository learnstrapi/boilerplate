import { mixed, object, string } from 'yup'

let errorMsg = 'Please enter a passsword'

export let resetPasswordSchema = object().shape({
  password: string().required(errorMsg),
  passwordConfirmation: mixed().test(
    'match',
    'Passwords do not match',
    function () {
      return this.parent.password === this.parent.passwordConfirmation
    }
  )
})
