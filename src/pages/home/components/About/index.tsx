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
            <strong>Um bom sono</strong>
          </div>
        </AboutIconsWrapper>

        <AboutText>
          <h3>O que é &quot;Ser Fitness&quot; ?</h3>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt ipsa
            incidunt placeat explicabo veritatis nesciunt est voluptate
          </p>
        </AboutText>
      </AboutWrapper>

      <Circle id="right-circle" />
    </AboutContainer>
  )
}
