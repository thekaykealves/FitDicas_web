import { createStitches } from '@stitches/react'

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  styled,
  theme,
  keyframes,
} = createStitches({
  theme: {
    colors: {
      'bg-color': '#0A4D68',
      'primary-color': '#088395',
      'secondary-color': '#05BFDB',
      'tertiary-color': '#00FFCA',

      white: '#FFFFFF',
      black: '#000000',
    },
  },
})
