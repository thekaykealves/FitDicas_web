import { styled } from '@/styles'

export const FooterContainer = styled('footer', {
  width: '100%',
  height: '200px',
  backgroundColor: '$primary-color',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  'div:first-child': {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',

    a: {
      color: '$white',
      textDecoration: 'none',
      fontSize: '32px',
    },
  },

  '@breakpoint1': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '1rem',

    'div:first-child': {
      a: {
        fontSize: '30px',
      },

      p: {
        display: 'none',
      },
    },
  },
})
