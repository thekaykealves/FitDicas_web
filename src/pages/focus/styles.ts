import { styled } from '@/styles'

export const FocusContainer = styled('div', {
  background:
    'linear-gradient(356deg, rgba(0, 0, 0, 1) 0%, rgba(21, 0, 80, 1) 70%)',

  h1: {
    textAlign: 'center',
    fontSize: '3rem',
    marginBottom: '3rem',
  },

  p: {
    fontSize: '1.5rem',
    textAlign: 'center',
  },

  '@mobile': {
    height: '100%',
  },
})

export const FocusSteps = styled('div', {
  height: '100%',
  background:
    'linear-gradient(356deg, rgba(21, 0, 80, 1) 0%, rgba(0, 0, 0, 1) 70%)',

  h2: {
    fontSize: '2rem',
  },
})

export const FocusStep = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '@mobile': {
    flexDirection: 'column',
  },
})

export const Step = styled('div', {
  marginTop: '3rem',
  width: '50%',

  strong: {
    fontSize: '1.5rem',
  },

  '@mobile': {
    width: '100%',
  },
})

export const Hero = styled('div', {
  img: {
    width: '100%',
    height: '500px',
    objectFit: 'contain',
  },
})
