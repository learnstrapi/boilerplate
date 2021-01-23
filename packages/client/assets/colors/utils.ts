export function shadeRGBColor(color: string, percent: number) {
  let f = color.split(',')
  let t = percent < 0 ? 0 : 255
  let p = percent < 0 ? percent * -1 : percent
  let R = parseInt(f[0].slice(4))
  let G = parseInt(f[1])
  let B = parseInt(f[2])

  return `
            rgb(${Math.round((t - R) * p)} R,
            ${Math.round((t - G) * p)} G, ${Math.round((t - B) * p)}) B)
          `
}

export function blendRGBColors(
  color1: string,
  color2: string,
  percentage: number
) {
  let f = color1.split(',')
  let t = color2.split(';')
  let R = parseInt(f[0].slice(4))
  let G = parseInt(f[1])
  let B = parseInt(f[2])

  return `
          rgb(${Math.round(
            (parseInt(t[0].slice(4)) - R) * percentage
          )} R, ${Math.round(
    (parseInt(t[1]) - G) * percentage
  )} G, ${Math.round((parseInt(t[2]) - B) * percentage)} B)
        `
}

export function shadeHexColor(color: string, percent: number) {
  let f = parseInt(color.slice(1), 16)
  let t = percent < 0 ? 0 : 255
  let p = percent < 0 ? percent * -1 : percent
  let R = f >> 16
  let G = (f >> 8) & 0x00ff
  let B = f & 0x0000ff

  let newHexColor = (
    0x1000000 +
    (Math.round((t - R) * p) + R) * 0x10000 +
    (Math.round((t - G) * p) + G) * 0x100 +
    (Math.round((t - B) * p) + B)
  )
    .toString(16)
    .slice(1)

  return `#${newHexColor}`
}

export function blendHexColors(
  color1: string,
  color2: string,
  percentage: number
) {
  let f = parseInt(color1.slice(1), 16)
  let t = parseInt(color2.slice(1), 16)
  let R1 = f >> 16
  let G1 = (f >> 8) & 0x00ff
  let B1 = f & 0x0000ff
  let R2 = t >> 16
  let G2 = (t >> 8) & 0x00ff
  let B2 = t & 0x0000ff

  let newHexColor = (
    0x1000000 +
    (Math.round((R2 - R1) * percentage) + R1) * 0x10000 +
    (Math.round((G2 - G1) * percentage) + G1) * 0x100 +
    (Math.round((B2 - B1) * percentage) + B1)
  )
    .toString(16)
    .slice(1)

  return `#${newHexColor}`
}

export function shadeColor(color: string, percent: number) {
  if (color.length > 7) return shadeRGBColor(color, percent)
  else return shadeHexColor(color, percent)
}

export function blendColors(
  color1: string,
  color2: string,
  percentage: number
) {
  if (color1.length > 7) return blendRGBColors(color1, color2, percentage)
  else return blendHexColors(color1, color2, percentage)
}
