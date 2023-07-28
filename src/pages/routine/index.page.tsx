import Head from 'next/head'
import Image from 'next/image'

import { Layout } from '../components/layout'

import {
  Hero,
  RoutineContainer,
  RoutineStep,
  RoutineSteps,
  Step,
} from './styles'
import { Separator } from '@/styles/global'

import fisiculturistaImg from '../../assets/fisiculturista-2.png'

export default function Routine() {
  return (
    <>
      <Head>
        <title>Rotina | FitDicas</title>
      </Head>

      <Layout>
        <RoutineContainer className="container margin-top">
          <h1>Como planejar uma rotina para não perder treinos?</h1>

          <div>
            <p>
              Você tem dificuldade de manter a rotina na academia? <br></br>
              Sabemos que manter uma rotina de treino regular não é uma tarefa
              fácil, porém é fator fundamental para melhorar a saúde de forma
              geral, além de minimizar a possibilidade de as pessoas
              desenvolverem doenças crônicas.
            </p>
          </div>
        </RoutineContainer>

        <Separator />

        <RoutineSteps className="container">
          <h2>Alguns passos para planejar uma rotina!</h2>

          <RoutineStep>
            <div>
              <Step>
                <strong>1. Planeja sua semana</strong>
                <p>
                  Organize os dias e horários de treino, sua alimentação, seu
                  sono e os dias de descanso.
                </p>
              </Step>
              <Step>
                <strong>2. Mantenha frequência</strong>
                <p>
                  A constância é fator primordial para obter resultados
                  satisfatórios.
                </p>
              </Step>

              <Step>
                <strong>3. Seja paciente</strong>
                <p>
                  Treine sua mente para se adaptar a esse novo estilo de vida e
                  tenha paciência, pois o trabalho é constante e o resultado vem
                  com o tempo.
                </p>
              </Step>
            </div>

            <Hero>
              <Image src={fisiculturistaImg} alt="" />
            </Hero>
          </RoutineStep>
        </RoutineSteps>
      </Layout>
    </>
  )
}
