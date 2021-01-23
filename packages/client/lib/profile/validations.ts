import { subYears } from 'date-fns'
import { object, string } from 'yup'

export let youngestAge = subYears(new Date(), 16)
export let oldestAge = subYears(new Date(), 60)

export let profileSchema = object().shape({
  username: string().min(2).max(15).required('Please a username'),
  email: string()
    .email('Please enter a valid email')
    .required('Please enter a valid email')
})
