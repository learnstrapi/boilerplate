import { css } from '@emotion/core'
import styled from '@emotion/styled'

export let StyledIcon = styled.i<{
  size?: string
  color?: string
}>`
  font-size: 24px;
  text-align: center;
  text-decoration: none;

  ${props =>
    props?.size &&
    css`
      font-size: ${props.size};
    `}
  ${props =>
    props?.color &&
    css`
      color: ${props.color};
    `}
`

export let StyledSVGIcon = styled.div<{
  size?: string
}>`
  svg {
    width: 24px;
    height: 24px;

    ${props =>
      props.size &&
      css`
        width: ${props.size};
        height: ${props.size};
      `}
  }
`
