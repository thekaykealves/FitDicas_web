import Head from 'next/head'

import { ArrowRight } from 'phosphor-react'

import { BestFoods } from './bestFoods'
import { Layout } from '../components/layout'

import {
  CardDiet,
  CardsContainer,
  DefictAndAfictCaloricContainer,
  DietContainer,
  FoodContainer,
} from './styles'
import { Separator } from '@/styles/global'

export default function Food() {
  return (
    <>
      <Head>
        <title>Alimentação | FitDicas</title>
      </Head>

      <Layout>
        <FoodContainer className="container margin-top">
          <div>
            <h1>Alimentação + saudável</h1>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              illo ipsum quaerat quis quas recusandae fuga id maiores cum,
              sapiente voluptate voluptatem repudiandae hic expedita, blanditiis
            </p>
          </div>
        </FoodContainer>

        <Separator />

        <DefictAndAfictCaloricContainer
          className="container"
          id="DefictAndAfictCaloric"
        >
          <CardsContainer>
            <CardDiet>
              <strong>Superávit</strong>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                velit impedit doloremque.
              </p>

              <span>+ Massa muscular 💪</span>
            </CardDiet>
            <CardDiet>
              <strong>Déficit</strong>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur eos laboriosam
              </p>

              <span>- Gordura ♨️</span>
            </CardDiet>
          </CardsContainer>
        </DefictAndAfictCaloricContainer>

        <Separator />

        <DietContainer className="container" id="Diet">
          <h2>
            Sobre Dieta
            <ArrowRight weight="bold" />
          </h2>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
            doloremque neque facere, illum voluptatem a quidem atque cupiditate
            nulla officia, voluptatum nisi soluta impedit, perferendis commodi
            obcaecati. Eligendi, ea amet. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Ad voluptatibus, totam voluptatum
            dolorem est eos rerum modi earum, reiciendis nobis doloribus?
            Provident praesentium voluptas nemo rem aspernatur itaque culpa!
            Unde.
          </p>
        </DietContainer>

        <BestFoods />
      </Layout>
    </>
  )
}
