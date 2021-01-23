import { customTheme } from "./theme"

const breakpoints = customTheme.breakpoints

export type TWindowSize = {
  width: number
  height: number
  size?: string
}

function parseBreakpoint(size: string) {
  const breakpointValue = breakpoints[size]

  return Number.parseFloat(breakpointValue.split('em')?.[0]) * 16
}

export const isSm = (size: TWindowSize) => {
  return size.width < parseBreakpoint('sm')
}

export const isMd = (size: TWindowSize) => {
  return (
    size.width > parseBreakpoint('sm') && size.width < parseBreakpoint('lg')
  )
}

export const isLg = (size: TWindowSize) => {
  return (
    size.width > parseBreakpoint('lg') && size.width < parseBreakpoint('xl')
  )
}

export const isXl = (size: TWindowSize) => {
  return size.width > parseBreakpoint('xl')
}
