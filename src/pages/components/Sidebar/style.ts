import { keyframes, styled } from '@/styles'

const slideIn = keyframes({
  from: {
    transform: 'translateX(2000px)',
  },

  to: {
    transform: 'translateX(0px)',
  },
})

export const SidebarContainer = styled('div', {
  position: 'fixed',
  right: 0,
  bottom: 0,
  top: 0,
  width: '30%',
  height: '100vh',
  zIndex: '5',
  backgroundColor: '$secondary-color',
  color: '$white',
  borderRadius: 8,

  animation: `${slideIn} 500ms linear`,
})

export const SidebarWrapper = styled('div', {
  height: '100%',
  padding: '40px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '10px',
  alignItems: 'center',

  strong: {
    fontSize: '20px',
  },

  svg: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    cursor: 'pointer',

    '&:hover': {
      opacity: 0.8,
    },
  },
})

export const SidebarButton = styled('button', {
  variants: {
    color: {
      red: {
        backgroundColor: 'red',

        '&:hover': {
          opacity: 0.8,
        },
      },
    },
  },

  color: '$white',
  width: '100%',
  padding: '20px',
  border: 0,
  borderRadius: 8,
  fontSize: '18px',
  backgroundColor: '$primary-color',
  marginTop: '10px',

  transition: 'all 200ms linear',

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  '&:not(:disabled):hover': {
    filter: 'brightness(2)',
    cursor: 'pointer',
  },
})

export const SidebarProducts = styled('div', {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  justifyContent: 'space-between',
})

export const Product = styled('div', {
  width: '100%',
  height: '150px',
  backgroundColor: '$primary-color',
  borderRadius: 8,
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  padding: '10px',

  img: {
    width: '150px',
    height: '150px',
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
  },

  '> div': {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateAreas: '1fr 1fr',

    strong: {
      fontSize: '16px',
      overflow: 'hidden',
    },
  },
})

export const ProductPrice = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  button: {
    all: 'unset',
    fontSize: '20px',
    backgroundColor: '$tertiary-color',
    borderRadius: 8,
    padding: '0 10px',
    color: '$white',
    fontWeight: 'bold',

    '&:hover': {
      opacity: 0.8,
    },
  },
})
