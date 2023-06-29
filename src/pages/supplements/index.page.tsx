import Head from 'next/head'
import { GetServerSideProps } from 'next'

import Stripe from 'stripe'
import { stripe } from '@/lib/stripe'

import { SupplementsProps } from './@types/Supplements'

import {
  Card,
  CardsContainer,
  ProductCatalog,
  ProductsContainer,
  SupplementsContainer,
} from './styles'

import { Products } from './components/Products'
import { Layout } from '../components/layout'

export default function Supplements({ products }: SupplementsProps) {
  return (
    <>
      <Head>
        <title>Suplementos | FitDicas</title>
      </Head>

      <Layout>
        <SupplementsContainer className="container margin-top">
          <div>
            <h1>Suplementação</h1>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
              quos nemo cumque adipisci laudantium unde error tempora, omnis
              quas aut voluptatibus asperiores non et, in, at sed ducimus amet
              ex! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatem, officiis dolorum. Ducimus nulla accusantium libero
              debitis! Voluptatum pariatur minus, non sapiente, adipisci facilis
              maiores quidem neque omnis, praesentium similique iure!
            </p>
          </div>
        </SupplementsContainer>

        <ProductCatalog className="container" id="aboutSupplements">
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
                asperiores atque ipsum libero aliquid praesentium dolorum, iste
                ea quo placeat, rerum facilis veniam?
              </p>

              <span>+ Força 💪</span>
            </Card>
          </CardsContainer>
        </ProductCatalog>

        <ProductsContainer id="productCatalog">
          <h3>Catálogo de produtos 👇</h3>

          <Products products={products} />
        </ProductsContainer>
      </Layout>
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
      defaultPriceId: price.id,
    }
  })

  return {
    props: {
      products,
    },
  }
}
