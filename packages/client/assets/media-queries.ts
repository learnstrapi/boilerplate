import { customTheme } from './theme'

let breakpoints = customTheme.breakpoints

export type TWindowSize = {
  width: number
  height: number
  size?: string
}

function parseBreakpoint(size: string) {
  let breakpointValue = breakpoints[size]

  return Number.parseFloat(breakpointValue.split('px')?.[0])
}

export let isSm = (size: TWindowSize) => {
  return (
    size.width < parseBreakpoint('sm') && size.width < parseBreakpoint('md')
  )
}

export let isMd = (size: TWindowSize) => {
  return (
    size.width > parseBreakpoint('sm') && size.width < parseBreakpoint('lg')
  )
}

export let isLg = (size: TWindowSize) => {
  return (
    size.width > parseBreakpoint('lg') && size.width < parseBreakpoint('xl')
  )
}

export let isXl = (size: TWindowSize) => {
  return size.width > parseBreakpoint('xl')
}
