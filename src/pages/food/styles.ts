import { keyframes, styled } from '@/styles'

export const FoodContainer = styled('main', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  h1: {
    fontSize: '40px',
    marginBottom: '100px',
  },

  p: {
    fontSize: '20px',
    width: '75%',
  },

  a: {
    top: '50px',
    position: 'absolute',
    left: '10rem',
    border: 'none',
    cursor: 'pointer',

    '&:hover': {
      opacity: 0.7,
    },
  },

  div: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export const DefictAndAfictCaloricContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  height: '100%',
})

export const CardsContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '5rem',
  width: '100%',
  height: '600px',
  borderRadius: 8,

  backgroundColor: '$primary-color',
})

const toFloat = keyframes({
  '0%, 100%': {
    transform: 'translateY(0)',
  },
  '50%': {
    transform: 'translateY(-20px)',
  },
})

export const CardDiet = styled('div', {
  width: '300px',
  height: '400px',
  padding: '1rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-around',
  backgroundColor: '$bg-color',
  borderRadius: 8,

  strong: {
    fontSize: '25px',
  },

  span: {
    fontSize: '20px',
    fontWeight: 'bold',
    animation: `${toFloat} 2s ease-in-out infinite`,
  },
})

export const DietContainer = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  h2: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
    fontSize: '40px',
  },

  p: {
    fontSize: '18px',
    width: '50%',
  },
})
