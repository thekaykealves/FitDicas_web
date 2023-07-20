import { Separator } from '@/styles/global'
import { Layout } from '../components/layout'
import { FocusContainer, FocusStep, FocusSteps, Step } from './styles'

export default function Focus() {
  return (
    <Layout>
      <FocusContainer className="container margin-top">
        <h1>Como ser uma pessoa mais focada?</h1>

        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            voluptates voluptatibus obcaecati non animi quibusdam maxime,
            perspiciatis commodi temporibus, aspernatur debitis tempore id harum
            eum esse necessitatibus a quod quas?
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

          <div>teste</div>
        </FocusStep>
      </FocusSteps>
    </Layout>
  )
}
