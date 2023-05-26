import { keyframes, styled } from '@/styles'

export const SupplementsContainer = styled('main', {
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
    top: '100px',
    position: 'absolute',
    left: '10rem',
    border: 'none',
    cursor: 'pointer',

    '&:hover': {
      opacity: 0.7,
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
  height: '700px',
  borderRadius: 8,

  backgroundColor: '$tertiary-color',
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
  height: '500px',
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

export const Products = styled('section', {
  marginTop: '50px',
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
})

export const CardsProductContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '2rem',
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

  a: {
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
