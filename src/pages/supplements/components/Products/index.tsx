import { useState } from 'react'
import Image from 'next/image'

import { useShoppingCart } from 'use-shopping-cart'
import * as Toast from '@radix-ui/react-toast'
import { SupplementsProps } from '../../@types/Supplements'

import {
  CardProduct,
  CardsProductContainer,
  ToastRoot,
  ToastViewport,
} from './style'

export function Products({ products }: SupplementsProps) {
  const { addItem } = useShoppingCart()
  const [openToast, setOpenToast] = useState(false)

  function addProductInCart(item: any) {
    setOpenToast(true)
    addItem(item)
  }

  return (
    <CardsProductContainer>
      {products.map((product) => {
        return (
          <Toast.Provider swipeDirection="right" key={product.id}>
            <CardProduct>
              <Image src={product.imageUrl} width={500} height={500} alt="" />
              <span>{product.name}</span>
              <strong>{product.price}</strong>
              <button onClick={() => addProductInCart(product)}>
                Adicionar ao carrinho
              </button>
            </CardProduct>

            <ToastRoot
              open={openToast}
              onOpenChange={setOpenToast}
              duration={2000}
            >
              <Toast.Title>Item adicionado ao carrinho de compras!</Toast.Title>
            </ToastRoot>

            <ToastViewport />
          </Toast.Provider>
        )
      })}
    </CardsProductContainer>
  )
}
