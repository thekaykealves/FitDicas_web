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

export const HeaderContainer = styled('header', {
  height: '2rem',
  backgroundColor: '$bg-color',
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
    transform: 'translate(-50%, -50%)'
  },

  a: {
    color: '$white',

    '&:hover': {
      opacity: 0.8,
    },
  }
})

export const Div = styled('div', {
  marginLeft: 'auto',
})

export const HeaderList = styled(NavigationMenu.List, {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '0.5rem',
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
    backgroundColor: '$bg-color',
    color: '$white',
    fontSize: 16,
    fontWeight: 'bold',
    cursor: 'pointer',

    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,

    transition: '100ms linear',

    '&[data-state="open"]': {
      filter: 'brightness(1.10)',
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
    backgroundColor: '$bg-color',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: '1rem',

    li: {
      width: '100%',
      transition: 'all 200ms ease-in-out',

      '&:hover': {
        paddingInline: '5px',
        borderRadius: 8,
        backgroundColor: '$primary-color',
        cursor: 'pointer',
      },
    },

    a: {
      textDecoration: 'none',
      color: '$white',
    },
  },

  '&[data-state="open"]': {
    animation: `${fadeIn} 200ms ease`,
    filter: 'brightness(1.10)',
  },

  '&[data-state="closed"]': { animation: `${fadeOut} 200ms ease` },
})
