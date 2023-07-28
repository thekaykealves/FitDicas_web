import { styled } from '@/styles'

export const Container = styled('div', {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '3rem',

  h1: {
    fontSize: '3rem',
  },

  img: {
    width: '400px',
    height: '400px',
    borderRadius: 8,
  },
})

export const Exercises = styled('div', {
  height: '100%,',

  h4: {
    fontSize: '30px',
    marginBottom: '3rem',
  },
})

export const ListExercises = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',

  ul: {
    listStyle: 'none',
  },

  li: {
    fontSize: '1.5rem',
    position: 'relative',
    borderBottom: '1px solid $tertiary-color',
    borderRadius: 8,
  },

  'li:hover': {
    backgroundColor: '$tertiary-color',
  },

  'li::before': {
    content: '',
    width: '1px',
    height: '1px',
    clipPath: 'circle()',
    backgroundColor: '$tertiary-color',
    padding: '5px',
    position: 'absolute',
    left: -20,
    bottom: 0,
    top: '50%',

    transform: 'translateY(-50%)',
  },
})
