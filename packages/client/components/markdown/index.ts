import { Heading, Link, List, ListItem, Text } from "@chakra-ui/react"
import { FormButton } from "components/forms/button"
import { CTABanner } from "components/sections/cta"
import { SocialFollowIcons } from "components/social/follow"

interface IMarkdownOverrides {
  headingColor?: string
  linkColor?: string
  textColor?: string
  h1Size?: string
  withHero?: boolean
}

const defaultOptions = {
  headingColor: 'grey.800',
  textColor: 'grey.800',
  withHero: false
}

export const markdownOverrides = (
  options: IMarkdownOverrides = defaultOptions
) => {
  const { headingColor, textColor, h1Size, linkColor, withHero } = options
  const headerLineHeight = { lineHeight: h1Size ? '1' : '1' }
  const headingProps = withHero
    ? {
        color: 'white',
        ...headerLineHeight
      }
    : {
        lineHeight: 'tall',
        color: headingColor || 'brand.600',
        ...headerLineHeight
      }
  return {
    overrides: {
      a: {
        component: Link,
        props: {
          textDecoration: 'underline',
          color: linkColor || 'brand.600',
          fontWeight: 'bold'
        }
      },
      heading: {
        component: Heading,
        props: { ...headingProps }
      },
      h1: {
        component: Heading,

        props: {
          fontSize: h1Size || '4rem',
          lineHeight: '2',
          bg: withHero ? 'accent1.50' : 'transparent',
          ...headingProps,
          color: 'brand.600',
          w: 'fit-content',
          pb: withHero ? '0' : '8',
          px: withHero ? '2' : '0',
          d: 'inline'
        }
      },
      h2: {
        component: Heading,
        size: 'lg',
        props: {
          color: headingColor,
          fontWeight: 300,
          ...headingProps,
          mb: '6'
        }
      },
      h3: {
        component: Heading,
        size: 'lg',
        props: {
          color: headingColor,
          ...headingProps,
          my: '6'
        }
      },
      h4: {
        component: Heading,
        size: 'lg',
        props: {
          color: headingColor,
          ...headingProps
        }
      },
      h5: {
        component: Heading,
        size: 'lg',
        props: {
          color: headingColor,
          ...headingProps
        }
      },
      p: {
        component: Text,
        props: {
          fontSize: 'lg',
          weight: 'bold',
          pt: '5',
          pb: '2',
          m: '0',
          h: 'auto',
          w: '100%',
          color: textColor
        }
      },
      span: {
        component: Text,
        props: {
          fontSize: 'lg',
          weight: 'bold',
          p: '0',
          m: '0',
          h: 'auto',
          w: '100%',
          color: textColor
        }
      },
      ol: {
        component: List,
        props: {
          as: 'ol',
          styleType: 'decimal',
          spacing: 3
        }
      },
      li: {
        component: ListItem
      },
      SocialFollowIcons: {
        component: SocialFollowIcons
      },
      FormButton: {
        component: FormButton,
        props: {
          width: 'auto',
          d: 'inline-block',
          w: 'content-fit',
          mt: '16'
        }
      }
    }
  }
}
