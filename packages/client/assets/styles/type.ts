let base = (size: number = 1) => {
  let fontSize = size * 0.825

  return {
    fontSize,
    lineHeight: fontSize + 0.25
  }
}

export let headingScale = (level: number) => {
  let fontSizeRem: { fontSize: string; lineHeight: string }

  switch (level) {
    case 1:
      fontSizeRem = {
        fontSize: toRem(base(4.5).fontSize),
        lineHeight: toRem(base(4.5).lineHeight)
      }
      break
    case 2:
      fontSizeRem = {
        fontSize: toRem(base(3.5).fontSize),
        lineHeight: toRem(base(3.5).lineHeight)
      }
      break
    case 3:
      fontSizeRem = {
        fontSize: toRem(base(3).fontSize),
        lineHeight: toRem(base(3).lineHeight)
      }
      break
    case 4:
      fontSizeRem = {
        fontSize: toRem(base(1.5).fontSize),
        lineHeight: toRem(base(1.5).lineHeight)
      }
      break
    case 5:
      fontSizeRem = {
        fontSize: toRem(base(1.25).fontSize),
        lineHeight: toRem(base(1.25).lineHeight)
      }
      break
    default:
      fontSizeRem = {
        fontSize: toRem(base(1).fontSize),
        lineHeight: toRem(base(1).lineHeight)
      }
      break
  }

  return fontSizeRem
}

export let toRem = (scaledFontSize: number) => {
  return `${scaledFontSize}rem`
}
