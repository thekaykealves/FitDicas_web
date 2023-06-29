// import Image from 'next/image'
import Image from 'next/image'
import {
  AccordionContainer,
  AccordionContent,
  AccordionTrigger,
  BestFoodsContainer,
  BestFoodsTitle,
} from './styles'

import * as Accordion from '@radix-ui/react-accordion'

import carneImg from '../../../assets/carnes.webp'
import frutasImg from '../../../assets/frutas.avif'
import suplementosImg from '../../../assets/sulementos.avif'

import { TableFoods } from './components/TableFoods'
// import carnesImg from '../../../assets/carnes.webp'
// import { useEffect, useState } from 'react'

// interface FoodProps {
//   meat: {
//     name: string
//     quantity: string
//     protein: string
//     type: 'Bovina' | 'Aves' | 'Suína' | 'Peixe'
//   }
//   fruits: {
//     name: string
//     quantity: string
//   }
// }

export function BestFoods() {
  // const URL = 'http://localhost:3000'

  // const [foods, setFoods] = useState<FoodProps[]>([])

  // useEffect(() => {
  //   fetch(`${URL}/api/foods`)
  //     .then((response) => response.json())
  //     .then((foods) => setFoods(foods))
  // }, [])

  // console.log(beffs)

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
                <TableFoods />
              </AccordionContent>
            </Accordion.Item>

            <Accordion.Item value="2">
              <Accordion.Header>
                <AccordionTrigger>
                  <Image src={frutasImg} alt="" />
                  <span>Frutas</span>
                </AccordionTrigger>
              </Accordion.Header>
              <AccordionContent>teste</AccordionContent>
            </Accordion.Item>

            <Accordion.Item value="3">
              <Accordion.Header>
                <AccordionTrigger>
                  <Image src={suplementosImg} alt="" />
                  <span>Suplementos</span>
                </AccordionTrigger>
              </Accordion.Header>
              <AccordionContent>teste</AccordionContent>
            </Accordion.Item>
          </AccordionContainer>
        </Accordion.Root>
      </BestFoodsContainer>
    </BestFoodsTitle>
  )
}
