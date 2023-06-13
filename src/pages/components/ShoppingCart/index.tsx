import { useShoppingCart } from "use-shopping-cart";

import { ShoppingCart } from 'phosphor-react'
import { QuantityOfProducts, ShoppingCartContainer } from "./style";
import { useState } from "react";
import { SideBar } from "../Sidebar";

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
      {visible && (
        <ShoppingCartContainer 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <ShoppingCart size={32} />
          {cartCount! === 0 ? (
            <QuantityOfProducts>
              <span>1</span>
            </QuantityOfProducts>
          ) : ''}
        </ShoppingCartContainer>
      )}

      {isSidebarOpen && (
        <SideBar handleOpenAndCloseSidebar={handleOpenAndCloseSidebar} />
      )}
    </>
  )
}