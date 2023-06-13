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
      'bg-color': '#0E2954',
      'primary-color': '#1F6E8C',
      'secondary-color': '#2E8A99',
      'tertiary-color': '#73BBC9',

      white: '#FFFFFF',
      black: '#000000',
    },
  },
})
