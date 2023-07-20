import Image from 'next/image'
import { Layout } from '../layout'
import { Separator } from '@/styles/global'
import { Container, Exercises } from './styles'

interface ExercisesProps {
  id: number
  name: string
}

interface MusclesProps {
  name: string
  image: string
  exercises: ExercisesProps[]
}

export function Muscles({ name, image, exercises }: MusclesProps) {
  return (
    <Layout>
      <Container className="container margin-top">
        <h1>{name}</h1>

        <Image src={image} width={500} height={500} priority alt="" />
      </Container>

      <Separator />

      <Exercises className="container">
        <h4>Exercicios que trabalha esses músculos em específico 👇</h4>

        {exercises.map((exercise) => {
          return (
            <ul key={exercise.id}>
              <li>{exercise.name}</li>
            </ul>
          )
        })}
      </Exercises>
    </Layout>
  )
}
