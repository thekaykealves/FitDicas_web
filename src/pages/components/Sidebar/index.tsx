import { useState } from 'react'

import Image from 'next/image'

import axios from 'axios'

import { useShoppingCart } from 'use-shopping-cart'
import { CartEntry } from 'use-shopping-cart/core'
import { X } from 'phosphor-react'

import {
  SidebarContainer,
  Product,
  SidebarProducts,
  SidebarWrapper,
  ProductPrice,
  SidebarButton,
} from './style'

interface SidebarProps {
  handleOpenAndCloseSidebar: () => void
}

export function SideBar({ handleOpenAndCloseSidebar }: SidebarProps) {
  const { cartDetails, removeItem, clearCart, cartCount } = useShoppingCart()

  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  const products: CartEntry[] = []

  for (const id in cartDetails) {
    const product = cartDetails[id]

    products.push(product)
  }

  async function handleBuyProducts() {
    try {
      setIsCreatingCheckoutSession(true)

      const response = await axios.post('/api/checkout', {
        products,
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
      clearCart()
    } catch (error) {
      setIsCreatingCheckoutSession(false)
      alert('Falha ao redirecionar o checkout!')
    }
  }

  return (
    <SidebarContainer>
      <SidebarWrapper>
        <strong>Seu carrinho de compras</strong>
        <div onClick={() => handleOpenAndCloseSidebar()}>
          <X size={32} />
        </div>

        {products.length > 0 ? (
          <SidebarProducts>
            <div>
              {products.map((product) => {
                return (
                  <Product key={product.id}>
                    <Image
                      src={product.imageUrl}
                      alt=""
                      width={500}
                      height={500}
                    />
                    <div>
                      <span>{product.name}</span>
                      <ProductPrice>
                        <strong>{product.price}</strong>
                        <div>
                          <button onClick={() => removeItem(product.id)}>
                            -
                          </button>
                        </div>
                      </ProductPrice>
                    </div>
                  </Product>
                )
              })}
            </div>

            <div>
              <SidebarButton onClick={() => clearCart()} color="red">
                Limpar carrinho
              </SidebarButton>
              <SidebarButton
                disabled={cartCount === 0 && isCreatingCheckoutSession}
                onClick={handleBuyProducts}
              >
                Finalizar compra
              </SidebarButton>
            </div>
          </SidebarProducts>
        ) : (
          <span>Carrinho de compras vazio :(</span>
        )}
      </SidebarWrapper>
    </SidebarContainer>
  )
}
