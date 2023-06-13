import {
  Div,
  HeaderContainer,
  HeaderContent,
  HeaderItem,
  HeaderList,
} from './styles'

import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import Link from 'next/link'

import { ShoppingCartComponent } from '../ShoppingCart'
import { useShoppingCart } from 'use-shopping-cart'
import { ArrowLeft } from 'phosphor-react'
import { useRouter } from 'next/router'

export function Header() {
  const { asPath } = useRouter()
  const { cartCount } = useShoppingCart()

  const quantity  = cartCount! === 0
  const isVisible = quantity ? true : false

  return (
    <div>
      <HeaderContainer className='container'>
        {asPath !== '/' ? (
          <Link href="/">
            <ArrowLeft size={32} />
          </Link>
        ) : null}

        <Div>
          <h1>FitDicas 💪</h1>
        </Div>

        <Div>
          <ShoppingCartComponent visible={isVisible} />
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
                  <Link prefetch={false} href="/">
                    Bíceps
                  </Link>
                </li>
                <li>
                  <Link prefetch={false} href="/">
                    Tríceps
                  </Link>
                </li>
                <li>
                  <Link prefetch={false} href="/">
                    Costas
                  </Link>
                </li>
                <li>
                  <Link prefetch={false} href="/">
                    Peitoral
                  </Link>
                </li>
                <li>
                  <Link prefetch={false} href="/">
                    Pernas
                  </Link>
                </li>
                <li>
                  <Link prefetch={false} href="/">
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
    </div>
  )
}
