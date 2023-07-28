import Image from 'next/image'

import * as Accordion from '@radix-ui/react-accordion'

import { TableFoods } from './TableFoods'

import {
  AccordionContainer,
  AccordionContent,
  AccordionTrigger,
  BestFoodsContainer,
  BestFoodsTitle,
} from './styles'
import { Separator } from '@/styles/global'

import carneImg from '../../../assets/carnes.webp'
import frutasImg from '../../../assets/frutas.avif'
import suplementosImg from '../../../assets/sulementos.avif'

export function BestFoods() {
  return (
    <BestFoodsTitle>
      <BestFoodsContainer className="container" id="bestFoods">
        <h3>Melhores Alimentos para ganho de massa muscular</h3>
        <Accordion.Root type="single" defaultValue="item-1" collapsible>
          <AccordionContainer>
            <Accordion.Item value="1">
              <Accordion.Header>
                <AccordionTrigger>
                  <Image src={carneImg} alt="" />
                  <span>Carnes</span>
                </AccordionTrigger>
              </Accordion.Header>
              <AccordionContent>
                <TableFoods type="meats" />
              </AccordionContent>
            </Accordion.Item>

            <Accordion.Item value="2">
              <Accordion.Header>
                <AccordionTrigger>
                  <Image src={frutasImg} alt="" />
                  <span>Frutas</span>
                </AccordionTrigger>
              </Accordion.Header>
              <AccordionContent>
                <TableFoods type="fruits" />
              </AccordionContent>
            </Accordion.Item>

            <Accordion.Item value="3">
              <Accordion.Header>
                <AccordionTrigger>
                  <Image src={suplementosImg} alt="" />
                  <span>Suplementos</span>
                </AccordionTrigger>
              </Accordion.Header>
              <AccordionContent>
                <TableFoods type="supplements" />
              </AccordionContent>
            </Accordion.Item>
          </AccordionContainer>
        </Accordion.Root>
      </BestFoodsContainer>

      <Separator />
    </BestFoodsTitle>
  )
}
