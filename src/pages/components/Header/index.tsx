import { useRouter } from 'next/router'
import Link from 'next/link'

import { ShoppingCartComponent } from '../ShoppingCart'

import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { useShoppingCart } from 'use-shopping-cart'
import { House } from 'phosphor-react'

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
            <House size={32} />
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
                <Link prefetch={false} href="/food">
                  <li>+ Sobre Alimentação</li>
                </Link>
                <Link prefetch={false} href="/food#DefictAndAfictCaloric">
                  <li>Déficit e Superávit</li>
                </Link>
                <Link prefetch={false} href="/food#Diet">
                  <li>Dieta</li>
                </Link>
                <Link prefetch={false} href="/food#bestFoods">
                  <li>Melhores alimentos</li>
                </Link>
              </ul>
            </HeaderContent>
          </HeaderItem>

          <HeaderItem>
            <NavigationMenu.Trigger>Exercícios</NavigationMenu.Trigger>
            <HeaderContent>
              <ul>
                <Link prefetch={false} href="/exercises/biceps">
                  <li>Bíceps</li>
                </Link>
                <Link prefetch={false} href="/exercises/triceps">
                  <li>Tríceps</li>
                </Link>
                <Link prefetch={false} href="/exercises/back">
                  <li>Costas</li>
                </Link>
                <Link prefetch={false} href="/exercises/breastplate">
                  <li>Peitoral</li>
                </Link>
                <Link prefetch={false} href="/exercises/legs">
                  <li>Pernas</li>
                </Link>
                <Link prefetch={false} href="/exercises/abdomen">
                  <li>Abdômen</li>
                </Link>
              </ul>
            </HeaderContent>
          </HeaderItem>

          <HeaderItem>
            <NavigationMenu.Trigger>Foco</NavigationMenu.Trigger>
            <HeaderContent>
              <ul>
                <Link prefetch={false} href="/focus">
                  <li>Como ter + foco</li>
                </Link>
              </ul>
            </HeaderContent>
          </HeaderItem>

          <HeaderItem>
            <NavigationMenu.Trigger>Rotina</NavigationMenu.Trigger>
            <HeaderContent>
              <ul>
                <Link prefetch={false} href="/routine">
                  <li>Como planejar uma rotina</li>
                </Link>
              </ul>
            </HeaderContent>
          </HeaderItem>

          <HeaderItem>
            <NavigationMenu.Trigger>Suplementação</NavigationMenu.Trigger>
            <HeaderContent>
              <ul>
                <Link prefetch={false} href="/supplements">
                  <li>+ Sobre suplementos</li>
                </Link>
                <Link prefetch={false} href="/supplements#aboutSupplements">
                  <li>Whey Protein</li>
                </Link>
                <Link prefetch={false} href="/supplements#aboutSupplements">
                  <li>Creatina</li>
                </Link>
                <Link prefetch={false} href="/supplements#productCatalog">
                  <li>Comprar suplementos</li>
                </Link>
              </ul>
            </HeaderContent>
          </HeaderItem>
        </HeaderList>
      </NavigationMenu.Root>
    </HeaderWrapper>
  )
}
