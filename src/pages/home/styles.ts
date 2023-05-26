import { keyframes, styled } from '../../styles'

// Home
export const HomeContainer = styled('main', {
  width: '100%',
  backgroundColor: '$primary-color',
  borderRadius: '48% 52% 49% 51% / 0% 0% 0% 50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '3rem',
  position: 'relative',
  overflow: 'hidden',
})

const toWrite = keyframes({
  from: {
    width: 0,
  },

  to: {
    width: '100%',
  },
})

export const HomeTextContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  width: '50%',

  h1: {
    fontSize: '40px',
    animation: `${toWrite} 4s steps(25, end) forwards infinite`,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    display: 'inline-block',
    verticalAlign: 'bottom',
  },

  span: {
    fontSize: '22px',
  },
})

export const HomeImages = styled('div', {
  width: '40%',
  height: '100%',
  overflow: 'hidden',
  position: 'absolute',
  right: 0,

  img: {
    height: '100%',
    borderTopLeftRadius: '30%',
    borderBottomLeftRadius: '30%',
    objectFit: 'cover',
  },
})

export const Circle = styled('div', {
  backgroundColor: '$primary-color',
  borderRadius: '50%',
  width: 300,
  height: 300,
  position: 'absolute',
})

// botão de voltar para o topo
export const BackToTopButton = styled('a', {
  backgroundColor: '$tertiary-color',
  color: '$bg-color',
  position: 'fixed',
  right: '4rem',
  bottom: '4rem',
  fontSize: '1.3rem',
  lineHeight: 0,
  padding: '0.7rem',
  clipPath: 'circle()',
  transition: '0.3s',
  cursor: 'auto',
})
