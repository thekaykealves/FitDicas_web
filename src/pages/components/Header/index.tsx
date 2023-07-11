import { useRouter } from 'next/router'
import Link from 'next/link'

import { ShoppingCartComponent } from '../ShoppingCart'

import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { useShoppingCart } from 'use-shopping-cart'
import { ArrowLeft } from 'phosphor-react'

import {
  HeaderContainer,
  HeaderContent,
  HeaderItem,
  Div,
  HeaderList,
  HeaderWrapper,
} from './styles'

export function Header() {
  const { asPath } = useRouter()
  const { cartCount } = useShoppingCart()

  const isProductInCart = cartCount! > 0

  return (
    <HeaderWrapper>
      <HeaderContainer className="container">
        {asPath !== '/' && asPath !== '/#' ? (
          <Link href="/">
            <ArrowLeft size={32} />
          </Link>
        ) : null}

        <Div>
          <h1>
            <Link href="/">FitDicas 💪</Link>
          </h1>
        </Div>

        <Div>
          <ShoppingCartComponent visible={isProductInCart} />
        </Div>
      </HeaderContainer>

      <NavigationMenu.Root>
        <HeaderList>
          <HeaderItem>
            <NavigationMenu.Trigger>Alimentação</NavigationMenu.Trigger>
            <HeaderContent>
              <ul>
                <li>
                  <Link prefetch={false} href="/food">
                    + Sobre Alimentação
                  </Link>
                </li>
                <li>
                  <Link prefetch={false} href="/food#DefictAndAfictCaloric">
                    Déficit e Superávit
                  </Link>
                </li>
                <li>
                  <Link prefetch={false} href="/food#Diet">
                    Dieta
                  </Link>
                </li>
                <li>
                  <Link prefetch={false} href="/food#bestFoods">
                    Melhores alimentos
                  </Link>
                </li>
              </ul>
            </HeaderContent>
          </HeaderItem>

          <HeaderItem>
            <NavigationMenu.Trigger>Exercícios</NavigationMenu.Trigger>
            <HeaderContent>
              <ul>
                <li>
                  <Link prefetch={false} href="/exercises/biceps">
                    Bíceps
                  </Link>
                </li>
                <li>
                  <Link prefetch={false} href="/exercises/triceps">
                    Tríceps
                  </Link>
                </li>
                <li>
                  <Link prefetch={false} href="/exercises/back">
                    Costas
                  </Link>
                </li>
                <li>
                  <Link prefetch={false} href="/exercises/breastplate">
                    Peitoral
                  </Link>
                </li>
                <li>
                  <Link prefetch={false} href="/exercises/legs">
                    Pernas
                  </Link>
                </li>
                <li>
                  <Link prefetch={false} href="/abdomen">
                    Abdômen
                  </Link>
                </li>
              </ul>
            </HeaderContent>
          </HeaderItem>

          <HeaderItem>
            <NavigationMenu.Trigger>Foco</NavigationMenu.Trigger>
            <HeaderContent>
              <ul>
                <li>
                  <Link prefetch={false} href="/">
                    Como ter + foco
                  </Link>
                </li>
              </ul>
            </HeaderContent>
          </HeaderItem>

          <HeaderItem>
            <NavigationMenu.Trigger>Rotina</NavigationMenu.Trigger>
            <HeaderContent>
              <ul>
                <li>
                  <Link prefetch={false} href="/">
                    Como planejar uma rotina
                  </Link>
                </li>
              </ul>
            </HeaderContent>
          </HeaderItem>

          <HeaderItem>
            <NavigationMenu.Trigger>Suplementação</NavigationMenu.Trigger>
            <HeaderContent>
              <ul>
                <li>
                  <Link prefetch={false} href="/supplements">
                    + Sobre suplementos
                  </Link>
                </li>
                <li>
                  <Link prefetch={false} href="/supplements#aboutSupplements">
                    Whey Protein
                  </Link>
                </li>
                <li>
                  <Link prefetch={false} href="/supplements#aboutSupplements">
                    Creatina
                  </Link>
                </li>
                <li>
                  <Link prefetch={false} href="/supplements#productCatalog">
                    Comprar suplementos
                  </Link>
                </li>
              </ul>
            </HeaderContent>
          </HeaderItem>
        </HeaderList>
      </NavigationMenu.Root>
    </HeaderWrapper>
  )
}
