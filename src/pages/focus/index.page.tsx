import Head from 'next/head'
import Image from 'next/image'

import { Layout } from '../components/layout'

import { FocusContainer, FocusStep, FocusSteps, Hero, Step } from './styles'
import { Separator } from '@/styles/global'

import fisiculturistaImg from '../../assets/fisiculturista.png'

export default function Focus() {
  return (
    <>
      <Head>
        <title>Foco | FitDicas</title>
      </Head>

      <Layout>
        <FocusContainer className="container margin-top">
          <h1>Como ser uma pessoa mais focada?</h1>

          <div>
            <p>
              O erro de muitas pessoas ao tentarem ter uma vida mais saudável
              através de exercícios físicos, é a falta de disciplina e foco em
              honrar seus compromissos de responsabilidades nos treinos.
              Construir bons hábitos para melhorar o foco é essencial até mesmo
              para quem deseja usar bem o tempo para ter uma vida mais saudável.
            </p>
          </div>
        </FocusContainer>

        <Separator />

        <FocusSteps className="container">
          <h2>Alguns passos para ser uma pessoa com mais foco!</h2>

          <FocusStep>
            <div>
              <Step>
                <strong>1. Definir horários</strong>
                <p>
                  Sempre tente, adaptar um horário ideal e que se encaixe em sua
                  rotina para ir para a academia ou até mesmo fazer exercícios
                  em casa.
                </p>
              </Step>

              <Step>
                <strong>2. Definir metas diárias</strong>
                <p>
                  Defina pequenas metas durante o seu dia para realiza-las antes
                  de tal horário que você mesmo definir. Isso te ajudará a ter
                  um dia + produtivo e no fim do dia, ter a sensação que cumpriu
                  suas metas.
                </p>
              </Step>

              <Step>
                <strong>3. Ter disciplina</strong>
                <p>
                  Nunca deixe de ter disciplina, a falta de motivação é muito
                  comum e todos vão acordar algum dia desmotivado. Mas, não
                  deixe que essa "falta de motivação" atrapalhe você a alcançar
                  seus objetivos.
                </p>
              </Step>
            </div>

            <Hero>
              <Image src={fisiculturistaImg} alt="" />
            </Hero>
          </FocusStep>
        </FocusSteps>
      </Layout>
    </>
  )
}
