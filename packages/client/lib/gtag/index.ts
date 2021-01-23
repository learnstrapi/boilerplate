import { isBrowser } from 'lib/utils/env'

export let GA_TRACKING_ID = process.env.GTM_ID

export let pageView = url => {
  isBrowser &&
    window?.['gtag']('config', GA_TRACKING_ID, {
      page_path: url
    })
}

export let event = ({ action, category, label, value }) => {
  isBrowser &&
    window?.['gtag']('event', action, {
      event_category: category,
      event_label: label,
      value: value
    })
}
