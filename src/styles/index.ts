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
      'bg-color': '#150050',
      'primary-color': '#000000',
      'secondary-color': '#3F0071',
      'tertiary-color': '#FB2576',

      white: '#FFFFFF',
    },
  },
  media: {
    mobile: '(max-width: 768px)',
    ultrawide: '(min-width: 1400px)',
  },
})
