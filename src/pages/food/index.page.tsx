import Head from 'next/head'

import {
  CardDiet,
  CardsContainer,
  DefictAndAfictCaloricContainer,
  DietContainer,
  FoodContainer,
} from './styles'

import { ArrowRight } from 'phosphor-react'

import { BestFoods } from './bestFoods'
import { Layout } from '../components/layout'

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
              nostrum eum vitae placeat?Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quasi ullam, officiis voluptates minus, nam
              tempora qui omnis quae, reiciendis voluptatibus similique!
              Repellendus sed sit ipsa temporibus, aut tenetur. Amet, libero!
            </p>
          </div>
        </FoodContainer>

        <DefictAndAfictCaloricContainer
          className="container"
          id="DefictAndAfictCaloric"
        >
          <CardsContainer>
            <CardDiet>
              <strong>Superávit</strong>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                velit impedit doloremque. Eveniet quod, eius tempore rem odit
                alias blanditiis? Nisi, minus eveniet accusamus harum commodi
                voluptatem quod praesentium dolorum!
              </p>

              <span>+ Massa muscular 💪</span>
            </CardDiet>
            <CardDiet>
              <strong>Déficit</strong>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus ex corporis magnam possimus labore fugit nihil
                asperiores atque ipsum libero aliquid praesentium dolorum, iste
                ea quo placeat, rerum facilis veniam?
              </p>

              <span>- Gordura ♨️</span>
            </CardDiet>
          </CardsContainer>
        </DefictAndAfictCaloricContainer>

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
