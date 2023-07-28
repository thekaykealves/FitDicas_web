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
              Hoje em dia sabemos que para ter uma alimentação saudável, não
              basta apenas evitar os alimentos de má qualidade nutricional, como
              os ultraprocessados, precisamos incluir alimentos que possuem
              nutrientes capazes de promover a saúde.
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
                superávit calórico é o consumo de uma quantidade de calorias
                superior as que você utiliza ao final de todas as suas
                atribuições diárias. Ou seja, é consumir mais do que gasta.
              </p>

              <span>+ Massa muscular 💪</span>
            </CardDiet>
            <CardDiet>
              <strong>Déficit</strong>

              <p>
                Déficit calórico é o gasto de calorias superior ao consumo de
                calorias que você ingere durante o seu dia. Ou seja, é gastar
                mais do que consome.
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
            Dieta é o conjunto de alimentos e bebidas ingeridos usualmente por
            uma pessoa. A palavra "dieta" tem origem no latim diaeta, que vem do
            grego “díaita”, que significa "modo de vida". A dieta é portanto um
            hábito e representa uma forma de viver. Por vezes, o termo é usado
            para fazer referência aos regimes alimentares especiais para perder
            peso ou para combater determinadas doenças, ainda que estes casos
            representem alterações da dieta e não propriamente a dieta em si.
          </p>
        </DietContainer>

        <BestFoods />
      </Layout>
    </>
  )
}
