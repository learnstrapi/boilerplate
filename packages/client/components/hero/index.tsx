import { Box, BoxProps, Icon } from "@chakra-ui/react"
import { colors } from "assets/colors"
import { variableHeadingSize } from "assets/typography"
import { Container } from "components/core"
import { markdownOverrides } from "components/markdown"
import { ComponentDataHero } from "lib/gql/utils/types"
import { getOptimisedImage } from "lib/utils/images"
import Markdown from "markdown-to-jsx"

interface HeroProps extends BoxProps {
  hero: ComponentDataHero
}

export const Hero = ({ hero, ...props }: HeroProps) => {
  const { content, media } = hero
  const cdnImg = getOptimisedImage(media?.[0]?.url, {
    eColorize: 30,
    color: colors.brand[600]
  })

  return (
    <Box
      backgroundColor="brand.600"
      backgroundImage={cdnImg.cssUrl}
      backgroundPosition="center"
      backgroundSize="cover"
      d="flex"
      alignItems="center"
      h="70vh"
      overflow="hidden"
      style={{ backgroundBlendMode: 'lighten' }}
      {...props}
    >
      <Container
        textAlign="left"
        m="auto"
        d="flex"
        flexDirection={{ base: 'column', lg: 'row' }}
        alignItems="center"
      >
        <Box>
          <Markdown
            options={markdownOverrides({
              headingColor: 'white',
              linkColor: 'white',
              textColor: 'white',
              h1Size: variableHeadingSize,
              withHero: true
            })}
          >
            {content || ''}
          </Markdown>
        </Box>
        <Icon
          name="brandMark"
          position="relative"
          bottom="0"
          color="white"
          height={{ base: '60vw', lg: '40vw' }}
          overflow="hidden"
          opacity={0.5}
          minW={{ base: '60vw', lg: '40vw' }}
          maxW="80vw"
          mt="6"
          zIndex={0}
          style={{ backgroundBlendMode: 'overlay' }}
        />
      </Container>
    </Box>
  )
}
