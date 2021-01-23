import { isBefore, set } from 'date-fns'

export let isBeforeExpiry = (expiryDate: string | Date) => {
  return isBefore(new Date(), new Date(expiryDate))
}

export let setCutoff = (date: Date) =>
  set(date, { hours: 13, minutes: 0, seconds: 0, milliseconds: 0 })
