import { Brain, FirstAid, Person, PersonSimpleRun } from 'phosphor-react'
import { BenefitBox, BenefitsContainer, BenefitsWrapper } from './styles'

export function Benefits() {
  return (
    <BenefitsContainer className="container">
      <span>Quais são os principais benefícios ?</span>

      <BenefitsWrapper>
        <BenefitBox>
          <div>
            <FirstAid weight="fill" />
          </div>
          <strong>Saúde</strong>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            dignissimos accusantium{' '}
          </p>
        </BenefitBox>

        <BenefitBox>
          <div>
            <Brain />
          </div>
          <strong>Saúde mental</strong>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            dignissimos accusantium{' '}
          </p>
        </BenefitBox>

        <BenefitBox>
          <div>
            <PersonSimpleRun />
          </div>
          <strong>Disposição</strong>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            dignissimos accusantium{' '}
          </p>
        </BenefitBox>

        <BenefitBox>
          <div>
            <Person />
          </div>
          <strong>Corpo + bonito</strong>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            dignissimos accusantium{' '}
          </p>
        </BenefitBox>
      </BenefitsWrapper>
    </BenefitsContainer>
  )
}
