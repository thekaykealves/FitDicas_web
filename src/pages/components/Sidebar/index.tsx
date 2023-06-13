import { useShoppingCart } from "use-shopping-cart";
import { SidebarContainer, Product, SidebarProducts, SidebarWrapper } from "./style";
import Image from "next/image";

import suplemetoImg from '../../../assets/sulementos.avif'
import { X } from "phosphor-react";

interface SidebarProps {
  handleOpenAndCloseSidebar: () => void
}

export function SideBar({handleOpenAndCloseSidebar}: SidebarProps) {
  const { cartDetails, redirectToCheckout } = useShoppingCart()

  return (
    <SidebarContainer>
      <SidebarWrapper>
        <span>Seu carrinho de compras</span>
        <div onClick={() => handleOpenAndCloseSidebar()}>
          <X size={32} />
        </div>

        <SidebarProducts>
          <Product>
            <Image src={suplemetoImg} alt='' width={50} height={50} />
            <div>
              <span>Nome do produto</span>
              <strong>R$ 199,00</strong>
            </div>
          </Product>
        </SidebarProducts>

        <button
          onClick={() => redirectToCheckout()}
        >
          Finalizar compra
        </button>
      </SidebarWrapper>
    </SidebarContainer>
  )
}