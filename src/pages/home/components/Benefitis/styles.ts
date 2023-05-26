import { styled } from '@/styles'

export const BenefitsContainer = styled('div', {
  width: '100%',
  paddingBlock: '1rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  span: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '90px',
  },

  '&:hover': {
    transition: '300ms linear',
  },
})

export const BenefitsWrapper = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const BenefitBox = styled('div', {
  width: '200px',
  height: '300px',
  padding: '1rem',
  backgroundColor: '$primary-color',
  border: '2px solid $white',
  borderRadius: 8,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  transition: '200ms linear',

  div: {
    padding: '1rem',
    border: '3px solid $white',
    borderRadius: 8,

    svg: {
      width: 32,
      height: 32,
    },
  },

  p: {
    textAlign: 'center',
  },

  '&:hover': {
    transform: 'scale(1.1)',
  },
})
