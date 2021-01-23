import { ITheme, theme } from "@chakra-ui/react"

import { colors } from "./colors"
import { customIcons } from "./icons"

export let breakpoints = ['480px', '768px', '992px', '1280px']

breakpoints['sm'] = breakpoints[0]
breakpoints['md'] = breakpoints[1]
breakpoints['lg'] = breakpoints[2]
breakpoints['xl'] = breakpoints[3]

export let customTheme: ITheme = {
  ...theme,
  breakpoints,
  colors: {
    ...theme.colors,
    ...colors
  },
  fonts: {
    heading:
      'niveau-grotesk, museo-sans-rounded, Montserrat, "Avenir Next", sans-serif',
    body: 'niveau-grotesk, Montserrat, Lato, system-ui, sans-serif',
    mono: 'Menlo, monospace'
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.75rem',
    '2xl': '2rem',
    '3xl': '2.25rem',
    '4xl': '2.50rem',
    '5xl': '3.5rem',
    '6xl': '3.50rem'
  },
  icons: {
    ...theme.icons,
    ...customIcons
  },

  sizes: {
    ...theme.space,
    containers: {
      sm: '95vw',
      md: '80vw',
      lg: '80vw',
      xl: '80vw'
    },
    full: '100%',
    '3xs': '14rem',
    '2xs': '16rem',
    xs: '20rem',
    sm: '24rem',
    md: '28rem',
    lg: '32rem',
    xl: '36rem',
    '2xl': '42rem',
    '3xl': '48rem',
    '4xl': '56rem',
    '5xl': '64rem',
    '6xl': '95rem'
  }
}
