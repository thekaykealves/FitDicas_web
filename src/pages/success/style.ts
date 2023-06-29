import { styled } from '@/styles'

export const SuccessContainer = styled('div', {
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',

  gap: '30px',

  background:
    'linear-gradient(356deg, rgba(46,138,153,1) 0%, rgba(14,41,84,1) 50%)',

  h1: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },

  span: {
    fontSize: 18,
  },

  h4: {
    fontSize: 20,
  },

  a: {
    textDecoration: 'none',
    color: '$white',
    backgroundColor: '$secondary-color',
    padding: '12px',
    borderRadius: 8,
    transition: 'background 300ms linear',

    '&:hover': {
      backgroundColor: '$tertiary-color',
    },
  },
})

export const SuccessProducts = styled('div', {
  display: 'flex',
  gap: '1rem',
})

export const SuccessProduct = styled('div', {
  width: '300px',
  height: '100%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  backgroundColor: '$primary-color',
  borderRadius: 8,
  textAlign: 'center',
  padding: '10px',
})
