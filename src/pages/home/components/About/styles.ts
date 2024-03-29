import { styled } from '@/styles'

export const AboutContainer = styled('div', {
  overflow: 'hidden',
  marginBlock: '5rem',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',

  'div#right-circle': {
    bottom: 0,
    right: -150,
  },

  'div#left-circle': {
    top: 0,
    left: -150,
  },

  '@mobile': {
    height: '100%',
    marginBlock: '3rem',
    overflow: 'visible',

    'div#left-circle': {
      left: -120,
    },

    'div#right-circle': {
      right: -120,
    },
  },
})

export const AboutWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '100%',

  '@mobile': {
    flexDirection: 'column-reverse',
  },
})

export const AboutIconsWrapper = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: '1rem',
  border: '5px solid $primary-color',
  width: '40%',
  padding: '3rem',
  borderRadius: 8,

  div: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
  },

  '@mobile': {
    width: '100%',
    padding: '1rem',
  },
})

export const AboutIcon = styled('div', {
  width: '80px',
  height: '80px',
  padding: 8,
  borderRadius: 8,
  border: '5px solid $primary-color',

  svg: {
    fontSize: '40px',
  },
})

export const AboutText = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end',
  flexDirection: 'column',
  width: '50%',
  textAlign: 'end',

  h3: {
    fontSize: '30px',
    marginBlock: '1rem',
  },

  p: {
    fontSize: '22px',
  },

  '@mobile': {
    width: '100%',
    textAlign: 'center',
    marginBottom: '3rem',

    p: {
      fontSize: '1.5rem',
    },
  },
})
