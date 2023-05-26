import Head from 'next/head'
import Link from 'next/link'
import { GetServerSideProps } from 'next'
import Image from 'next/image'

import { ArrowLeft } from 'phosphor-react'

import {
  Card,
  CardProduct,
  CardsContainer,
  CardsProductContainer,
  ProductCatalog,
  Products,
  SupplementsContainer,
} from './styles'

import { stripe } from '@/lib/stripe'
import Stripe from 'stripe'

interface SupplementsProps {
  products: {
    id: string
    name: string
    price: string
    imageUrl: string
    description: string
  }[]
}

export default function Supplements({ products }: SupplementsProps) {
  return (
    <>
      <Head>
        <title>Suplementos | FitDicas</title>
      </Head>

      <SupplementsContainer className="container">
        <Link href="/">
          <ArrowLeft size={32} color="white" />
        </Link>

        <h1>Suplementação</h1>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro quos
          nemo cumque adipisci laudantium unde error tempora, omnis quas aut
          voluptatibus asperiores non et, in, at sed ducimus amet ex! Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem,
          officiis dolorum. Ducimus nulla accusantium libero debitis! Voluptatum
          pariatur minus, non sapiente, adipisci facilis maiores quidem neque
          omnis, praesentium similique iure!
        </p>
      </SupplementsContainer>

      <ProductCatalog className="container" id="aboutSupplements">
        <h4>Suplementos</h4>

        <CardsContainer>
          <Card>
            <strong>Whey Protein</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              velit impedit doloremque. Eveniet quod, eius tempore rem odit
              alias blanditiis? Nisi, minus eveniet accusamus harum commodi
              voluptatem quod praesentium dolorum!
            </p>

            <span>+ Massa muscular 💪</span>
          </Card>
          <Card>
            <strong>Creatina</strong>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus ex corporis magnam possimus labore fugit nihil
              asperiores atque ipsum libero aliquid praesentium dolorum, iste ea
              quo placeat, rerum facilis veniam?
            </p>

            <span>+ Força 💪</span>
          </Card>
        </CardsContainer>
      </ProductCatalog>

      <Products id="productCatalog">
        <h3>Catálogo de produtos 👇</h3>

        <CardsProductContainer>
          {products.map((product) => {
            return (
              <CardProduct key={product.id}>
                <Image src={product.imageUrl} width={500} height={500} alt="" />
                <span>{product.name}</span>
                <strong>{product.price}</strong>
                <a href="/">Comprar agora</a>
              </CardProduct>
            )
          })}
        </CardsProductContainer>
      </Products>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount! / 100),
      imageUrl: product.images[0],
      description: product.description,
    }
  })

  return {
    props: {
      products,
    },
  }
}
