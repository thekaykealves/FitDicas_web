import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { stripe } from '@/lib/stripe'
import { PurchasedProducts } from './@types/PurchasedProducts'

import { SuccessContainer, SuccessProduct, SuccessProducts } from './style'
import { ShoppingCart } from 'phosphor-react'

export default function Success({ customerName, products }: PurchasedProducts) {
  return (
    <>
      <Head>
        <title>Compra efetuada | FitDicas</title>
      </Head>

      <SuccessContainer className="container">
        <h1>
          Compra efetuada com sucesso! <ShoppingCart size={32} />
        </h1>
        <span>Obrigado por comprar através da gente {customerName} !</span>

        <h4>Produtos comprados 👇</h4>
        <SuccessProducts>
          {products.map((product) => {
            return (
              <SuccessProduct key={product.name}>
                <span>{product.name}</span>
                <Image
                  src={product.images[0]}
                  alt=""
                  width={100}
                  height={100}
                />
              </SuccessProduct>
            )
          })}
        </SuccessProducts>

        <Link href="/">Voltar a página inicial !</Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const sessionId = String(query.session_id)

  const response = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const arrayProducts = response.line_items!.data

  const products = arrayProducts.map((product) => {
    return product.price!.product
  })

  const customerName = response.customer_details!.name

  return {
    props: {
      customerName,
      products,
    },
  }
}
