import { styled } from '@/styles'

export const TableFoodsContainer = styled('table', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  div: {
    border: '1px solid $white',
  },

  'th, td': {
    border: '1px solid $white',
    fontSize: '14px',
    padding: '5px',
  },
})
