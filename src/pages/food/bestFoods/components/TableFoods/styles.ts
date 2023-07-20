import { styled } from '@/styles'

export const TableFoodsContainer = styled('table', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  div: {
    border: '1px solid $white',
  },

  tr: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
  },

  'th, td': {
    border: '1px solid $white',
    fontSize: '14px',
    padding: '5px',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
