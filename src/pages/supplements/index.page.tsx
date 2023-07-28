import Head from 'next/head'
import { GetServerSideProps } from 'next'

import Stripe from 'stripe'
import { stripe } from '@/lib/stripe'

import { SupplementsProps } from './@types/Supplements'

import { Products } from './Products'
import { Layout } from '../components/layout'

import {
  Card,
  CardsContainer,
  ProductCatalog,
  ProductsContainer,
  SupplementsContainer,
} from './styles'
import { Separator } from '@/styles/global'

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
              Os suplementos funcionam como um complemento da alimentação. Na
              maioria dos casos, são indicados para pessoas que apresentam uma
              carência muito grande de determinado nutriente
            </p>
          </div>
        </SupplementsContainer>

        <Separator />

        <ProductCatalog className="container" id="aboutSupplements">
          <CardsContainer>
            <Card>
              <strong>Whey Protein</strong>
              <p>
                O whey protein é rico em proteína, substância responsável pela
                reconstrução das nossas fibras musculares. Seu papel é auxiliar
                na regeneração do corpo após a prática de um exercício físico.
              </p>

              <span>+ Massa muscular 💪</span>
            </Card>
            <Card>
              <strong>Creatina</strong>

              <p>
                A creatina melhora na recuperação dos músculos, aumenta o volume
                muscular e potencializa o ganho de força. Considerado um dos
                melhores suplementos do mundo.
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
