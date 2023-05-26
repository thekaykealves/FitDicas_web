import { keyframes, styled } from '@/styles'

import * as Accordion from '@radix-ui/react-accordion'

// const slideDown = keyframes({
//   from: {
//     height: 0,
//   },

//   to: {
//     height: '100%',
//   },
// })

// const slideUp = keyframes({
//   from: {
//     height: '100%',
//   },

//   to: {
//     height: 0,
//   },
// })

export const BestFoodsContainer = styled('div', {
  backgroundColor: '$primary-color',
  paddingBlock: '2rem',
  borderBottom: '5px solid $bg-color',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '32px',
  height: '100%',

  h3: {
    textAlign: 'center',
    fontSize: '32px',
  },
})

export const AccordionContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',

  transition: 'all 1s linear',
})

export const AccordionTrigger = styled(Accordion.Trigger, {
  width: '250px',
  height: '250px',
  border: 'none',
  borderRadius: 8,
  backgroundColor: '$bg-color',
  position: 'relative',

  img: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    objectFit: 'cover',
    opacity: 0.5,
  },

  span: {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    bottom: 50,
    fontSize: '22px',
    fontWeight: 'bold',
    color: '$white',
  },

  '&:hover': {
    cursor: 'pointer',
    boxShadow: '2px 10px 10px 5px rgba(5, 191, 219, 0.5)',
  },
})

const opacityDown = keyframes({
  from: {
    opacity: 0,
  },

  to: {
    opacity: 1,
  },
})

const opacityUp = keyframes({
  from: {
    opacity: 1,
  },

  to: {
    opacity: 0,
  },
})

export const AccordionContent = styled(Accordion.Content, {
  backgroundColor: '$secondary-color',
  borderRadius: 8,
  padding: 10,
  overflow: 'hidden',
  transition: 'all 200ms ease',

  '&[data-state="open"]': {
    animation: `${opacityDown} 500ms forwards`,
  },

  '&[data-state="closed"]': {
    animation: `${opacityUp} 500ms forwards`,
  },
})
