import Image from 'next/image'
import { Layout } from '../../components/layout'

import costasImg from '../../../assets/muscles/costas.jpeg'
import { BackContainer, ExercisesForBack } from './styles'
import { useEffect, useState } from 'react'
import { api } from '@/lib/axios'
import { Separator } from '@/styles/global'

interface ExercisesProps {
  id: number
  name: string
  specificMuscle: string
}

export default function BackPage() {
  const [exercises, setExercises] = useState<ExercisesProps[]>([])

  async function FetchExercises() {
    const response = await api.get('/back-exercises')
    const exercises = response.data.backMuscles

    setExercises(exercises)
  }

  useEffect(() => {
    FetchExercises()
  }, [])

  return (
    <Layout>
      <BackContainer className="container margin-top">
        <h1>Costas</h1>

        <Image src={costasImg} width={500} height={500} alt="" />
      </BackContainer>

      <Separator />

      <ExercisesForBack className="container">
        <h4>Exercicios para trabalhar esses músculos em específico 👇</h4>

        {exercises.map((exercise) => {
          return (
            <ul key={exercise.id}>
              <li>
                {exercise.name} <strong>({exercise.specificMuscle})</strong>
              </li>
            </ul>
          )
        })}
      </ExercisesForBack>
    </Layout>
  )
}
