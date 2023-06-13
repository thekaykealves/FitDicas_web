import { styled } from "@/styles";

export const ShoppingCartContainer = styled('div', {
  cursor: 'pointer',
  position: 'relative',
})

export const QuantityOfProducts= styled('div', {
  width: '15px',
  height: '15px',
  fontSize: '14px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$secondary-color',
  borderRadius: '50%',
  color: '$white',
  position: 'absolute',
  top: 0,
  right: -5,
})