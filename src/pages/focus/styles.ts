import { styled } from '@/styles'

export const FocusContainer = styled('div', {
  background:
    'linear-gradient(356deg, rgba(46,138,153,1) 0%, rgba(14,41,84,1) 70%)',

  h1: {
    textAlign: 'center',
    fontSize: '3rem',
    marginBottom: '3rem',
  },

  p: {
    fontSize: '1.5rem',
    textAlign: 'center',
  },
})

export const FocusSteps = styled('div', {
  height: '100%',
  background:
    'linear-gradient(356deg, rgba(14,41,84,1) 0%, rgba(46,138,153,1) 70%)',

  h2: {
    fontSize: '2rem',
  },
})

export const FocusStep = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '@breakpoint1': {
    flexDirection: 'column',
  },
})

export const Step = styled('div', {
  marginTop: '3rem',
  width: '50%',

  strong: {
    fontSize: '1.5rem',
  },

  '@breakpoint1': {
    width: '100%',
  },
})
