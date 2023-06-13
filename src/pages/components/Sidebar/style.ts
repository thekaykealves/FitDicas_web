import { keyframes, styled } from "@/styles";

const slideIn = keyframes({
  from: {
    transform: 'translateX(2000px)',
  },

  to: {
    transform: 'translateX(0px)',
  }
})

export const SidebarContainer = styled('div', {
  position: 'fixed',
  right: 0,
  bottom: 0,
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
  gap: '50px',
  alignItems: 'center',

  span: {
    fontSize: '20px',
  },

  button: {
    width: '100%',
    color: '$white',
    backgroundColor: '$primary-color',
    padding: '20px',
    border: 0,
    borderRadius: 8,
    fontSize: '18px',

    transition: 'all 200ms linear',

    '&:hover': {
      filter: 'brightness(2)',
      cursor: 'pointer',
    },
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

export const SidebarProducts = styled('div', {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
})

export const Product = styled('div', {
  width: '100%',
  height: '150px',
  backgroundColor: '$primary-color',
  borderRadius: 8,
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  marginLeft: 0,

  img: {
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
  },

  div: {
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    whiteSpace: 'nowrap',

    span: {
      fontSize: '16px',
    }
  }
})