import { useShoppingCart } from 'use-shopping-cart'

import { ShoppingCart } from 'phosphor-react'
import { QuantityOfProducts, ShoppingCartContainer } from './style'
import { useState } from 'react'
import { SideBar } from '../Sidebar'

interface ShoppingCartComponentProps {
  visible: boolean
}

export function ShoppingCartComponent({ visible }: ShoppingCartComponentProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  function handleOpenAndCloseSidebar() {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const { cartCount } = useShoppingCart()

  return (
    <>
      <ShoppingCartContainer onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        <ShoppingCart size={32} />
        {cartCount! !== 0 ? (
          <QuantityOfProducts>
            <span>{cartCount}</span>
          </QuantityOfProducts>
        ) : null}
      </ShoppingCartContainer>

      {isSidebarOpen && (
        <SideBar handleOpenAndCloseSidebar={handleOpenAndCloseSidebar} />
      )}
    </>
  )
}
