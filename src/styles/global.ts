import { globalCss, styled } from '../styles/index'

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
  },

  html: {
    scrollBehavior: 'smooth',
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    backgroundColor: '$bg-color',
    color: '$white',
  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
  },

  '.container': {
    paddingInline: '10rem',
    paddingBlock: '6rem',
    height: 'calc(100vh - 13rem)',

    '@breakpoint1': {
      paddingBlock: '3rem',
      paddingInline: '2rem',
    },
  },

  '.margin-top': {
    marginTop: '7.813rem',
  },
})

// botão de voltar para o topo
export const BackToTopButton = styled('a', {
  backgroundColor: '$tertiary-color',
  color: '$bg-color',
  position: 'fixed',
  right: '4rem',
  bottom: '4rem',
  fontSize: '1.3rem',
  lineHeight: 0,
  padding: '0.7rem',
  clipPath: 'circle()',
  transition: '0.3s',
  cursor: 'auto',
})

export const Separator = styled('div', {
  height: '1px',
  background: `linear-gradient(
    270deg,
      $primary-color 0%,
      $bg-color 100%
  )`,
})
