export let isBrowser = ![typeof window, typeof document].includes('undefined')
export let isProduction = process.env.NODE_ENV === 'production'
export let globalTyped = global as any
export let mediaUrl = (url: string) =>
  isProduction ? url : `http://localhost:1337/${url}`
