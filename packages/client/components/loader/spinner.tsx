import { colors } from 'assets/colors'
import React from 'react'
import Loader from 'react-loader'

let loaderOptions = {
  lines: 13,
  length: 20,
  width: 3,
  radius: 30,
  scale: 0.8,
  corners: 1,
  color: colors.grey[400],
  opacity: 0.15,
  rotate: 0,
  direction: 1,
  speed: 2,
  trail: 60,
  fps: 29,
  zIndex: 1000,
  top: '50%',
  left: '50%',
  shadow: false,
  hwaccel: true,
  position: 'absolute'
}

export let LoadSpinner = ({
  loaded,
  style
}: {
  loaded?: boolean
  style?: any
}) => {
  return <Loader loaded={loaded} options={loaderOptions} style={style} />
}
