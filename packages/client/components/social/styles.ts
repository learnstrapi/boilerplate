import { Icon } from "@chakra-ui/react"
import styled from "@emotion/styled"
import { colors } from "assets/colors"

export const StyledIcon = styled(Icon)`
  transition: all 200ms;

  path {
    fill: ${colors.brand[600]};
  }

  &:hover {
    transform: scale(1.2);
    path {
      fill: ${colors.accent1[400]};
    }
  }
`
