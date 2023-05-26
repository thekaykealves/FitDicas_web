import { Barbell, Clock, ForkKnife } from 'phosphor-react'
import {
  AboutContainer,
  AboutIcon,
  AboutIconsWrapper,
  AboutText,
  AboutWrapper,
} from './styles'
import { Circle } from '../../styles'

export function About() {
  return (
    <AboutContainer className="container">
      <Circle id="left-circle" />

      <AboutWrapper>
        <AboutIconsWrapper>
          <div>
            <AboutIcon>
              <Barbell />
            </AboutIcon>
            <strong>Prática de exercício</strong>
          </div>

          <div>
            <AboutIcon>
              <ForkKnife />
            </AboutIcon>
            <strong>Alimentação saudável</strong>
          </div>

          <div>
            <AboutIcon>
              <Clock />
            </AboutIcon>
            <strong>Ter uma rotina</strong>
          </div>
        </AboutIconsWrapper>

        <AboutText>
          <h3>
            <strong>O que é &quot;Ser Fitness&quot; ?</strong>
          </h3>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt ipsa
            incidunt placeat explicabo veritatis nesciunt est voluptate sed
            minus aliquam molestias dolorem nisi, eos, ipsam beatae sint quam
            debitis? Autem. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Aperiam porro facilis sequi magnam laboriosam molestias
            impedit explicabo iste enim, minus cum delectus. Sunt cumque labore
            nostrum necessitatibus amet, culpa dolore?
          </p>
        </AboutText>
      </AboutWrapper>

      <Circle id="right-circle" />
    </AboutContainer>
  )
}
