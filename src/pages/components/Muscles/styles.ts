import { styled } from '@/styles'

export const Container = styled('div', {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '3rem',

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

  ul: {
    listStyle: 'none',
  },
})