import * as Toast from '@radix-ui/react-toast'

import { keyframes, styled } from '@/styles'

export const SupplementsContainer = styled('main', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',

  h1: {
    fontSize: '3rem',
    marginBottom: '100px',
  },

  p: {
    fontSize: '1.5rem',
    width: '100%',
  },

  div: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  '@mobile': {
    height: '100%',

    h1: {
      margin: 0,
    },

    div: {
      gap: '3rem',
    },
  },
})

export const ProductCatalog = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',

  height: '100%',

  h4: {
    fontSize: '30px',
    marginBottom: '50px',
  },
})

export const CardsContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '5rem',
  width: '100%',
  height: '600px',
  borderRadius: 8,

  backgroundColor: '$tertiary-color',

  '@mobile': {
    flexDirection: 'column',
    gap: '3 rem',
    height: '500px',
  },
})

const toFloat = keyframes({
  '0%, 100%': {
    transform: 'translateY(0)',
  },
  '50%': {
    transform: 'translateY(-20px)',
  },
})

export const Card = styled('div', {
  width: '300px',
  height: '400px',
  padding: '1rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-around',
  backgroundColor: '$bg-color',
  borderRadius: 8,
  gap: '1rem',

  strong: {
    fontSize: '25px',
  },

  span: {
    fontSize: '20px',
    fontWeight: 'bold',
    animation: `${toFloat} 2s ease-in-out infinite`,
  },

  '@mobile': {
    height: '200px',

    span: {
      fontSize: '18px',
    },
  },
})

export const ProductsContainer = styled('section', {
  width: '100%',
  backgroundColor: '$tertiary-color',
  paddingInline: '10rem',
  paddingBlock: '1rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  h3: {
    color: '$bg-color',
    textAlign: 'center',
    fontSize: '30px',
    marginBottom: '1rem',
  },

  '@mobile': {
    h3: {
      whiteSpace: 'nowrap',
    },
  },
})

export const CardsProductContainer = styled('div', {
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',
})

export const CardProduct = styled('div', {
  width: '300px',
  height: '400px',
  backgroundColor: '$bg-color',
  borderRadius: 8,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '10px',
  padding: '1rem',

  img: {
    width: '100%',
    height: '50%',
    objectFit: 'contain',
  },

  button: {
    width: '100%',
    textAlign: 'center',
    textDecoration: 'none',
    border: 'none',
    borderRadius: 8,
    backgroundColor: '$secondary-color',
    padding: '1rem',
    color: '$white',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'all 200ms ease-in',

    '&:hover': {
      opacity: 0.8,
      cursor: 'pointer',
    },
  },
})

// Toast
const slideOut = keyframes({
  from: {
    transform: 'translateX(0px)',
  },

  to: {
    transform: 'translateX(300px)',
  },
})

const slideIn = keyframes({
  from: {
    transform: 'translateX(1000px)',
  },

  to: {
    transform: 'translateX(-300px)',
  },
})

export const ToastRoot = styled(Toast.Root, {
  backgroundColor: '$secondary-color',
  paddingInline: '10px',
  paddingBlock: '30px',
  overflow: 'hidden',

  '&[data-state="open"]': {
    animation: `${slideIn} 100ms ease-in`,
  },

  '&[data-state="closed"]': {
    animation: `${slideOut} 100ms ease-in`,
  },
})

export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 30,
  right: 30,
  borderRadius: 8,
  textAlign: 'center',
  gap: 10,
  width: '350px',
  zIndex: 1,
  outline: 'none',
  fontWeight: 800,
  fontFamily: 'Open Sans, sans-serif',
  listStyle: 'none',
  overflow: 'hidden',
})
