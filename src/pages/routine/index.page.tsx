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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              voluptates voluptatibus obcaecati non animi quibusdam maxime,
              perspiciatis commodi temporibus, aspernatur debitis tempore id
              harum eum esse necessitatibus a quod quas?
            </p>
          </div>
        </RoutineContainer>

        <Separator />

        <RoutineSteps className="container">
          <h2>Alguns passos para planejar uma rotina!</h2>

          <RoutineStep>
            <div>
              <Step>
                <strong>1. Definir horários</strong>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
                  beatae dolorum repudiandae ab nesciunt adipisci ratione quo
                  laborum delectus laudantium iure, tempore corporis at quis
                  labore quam temporibus autem ut.
                </p>
              </Step>

              <Step>
                <strong>2. Definir metas diárias</strong>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
                  beatae dolorum repudiandae ab nesciunt adipisci ratione quo
                  laborum delectus laudantium iure, tempore corporis at quis
                  labore quam temporibus autem ut.
                </p>
              </Step>

              <Step>
                <strong>3. Definir metas diárias</strong>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
                  beatae dolorum repudiandae ab nesciunt adipisci ratione quo
                  laborum delectus laudantium iure, tempore corporis at quis
                  labore quam temporibus autem ut.
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
