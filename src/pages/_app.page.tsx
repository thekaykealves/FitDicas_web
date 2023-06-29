import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import { CartProvider } from 'use-shopping-cart'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const stripeKey = process.env.STRIPE_PUBLIC_KEY as string

  return (
    <CartProvider
      shouldPersist
      stripe={stripeKey}
      cartMode="checkout-session"
      currency="BRL"
    >
      <Component {...pageProps} />
    </CartProvider>
  )
}
