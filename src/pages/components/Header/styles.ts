import { keyframes, styled } from '@/styles'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
})

const fadeOut = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
})

export const HeaderWrapper = styled('header', {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: '100',

  transition: 'backgroundColor 0.5s ease-in-out',

  backgroundColor: 'rgba(21, 0, 80, 0.9)',
  backdropFilter: 'blur(10px)',
})

export const HeaderContainer = styled('div', {
  height: '2rem',
  padding: '3rem',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',

  h1: {
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 800,
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },

  a: {
    color: '$white',

    '&:hover': {
      opacity: 0.8,
    },
  },

  '@mobile': {
    paddingInline: '1rem',
  },

  '@ultrawide': {
    paddingInline: '20rem',
  },
})

export const Div = styled('div', {
  marginLeft: 'auto',

  a: {
    textDecoration: 'none',

    '@mobile': {
      fontSize: '1.5rem',
    },
  },
})

export const HeaderList = styled(NavigationMenu.List, {
  display: 'flex',
  listStyle: 'none',
})

export const HeaderItem = styled(NavigationMenu.Item, {
  width: '100%',
  transition: '400ms linear',
  position: 'relative',

  button: {
    padding: '0.3rem',
    width: '100%',
    border: 0,
    backgroundColor: 'transparent',
    color: '$white',
    fontSize: 16,
    fontWeight: 'bold',
    cursor: 'pointer',

    transition: '100ms linear',

    '&[data-state="open"]': {
      filter: 'brightness(1.10)',
    },

    '@mobile': {
      padding: '0.1rem',
      fontSize: 12,
    },
  },
})

export const HeaderContent = styled(NavigationMenu.Content, {
  position: 'absolute',
  left: 0,
  right: 0,
  zIndex: 5,

  ul: {
    width: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gap: '0.3rem',
    flexDirection: 'column',
    listStyle: 'none',
    backgroundColor: 'rgba(21, 0, 80, 0.9)',
    backdropFilter: 'blur(150px)',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: '1rem',

    li: {
      transition: 'all 200ms ease-in-out',

      '&:hover': {
        paddingInline: '5px',
        borderRadius: 8,
        backgroundColor: '$primary-color',
        cursor: 'pointer',
      },
    },

    a: {
      width: '100%',
      textDecoration: 'none',
      color: '$white',
    },
  },

  '&[data-state="open"]': {
    animation: `${fadeIn} 200ms ease`,
    filter: 'brightness(1.10)',
  },

  '&[data-state="closed"]': { animation: `${fadeOut} 200ms ease` },

  '@mobile': {
    fontSize: '14px',

    ul: {
      padding: '0.5rem',
      gap: '1rem',
    },
  },
})
