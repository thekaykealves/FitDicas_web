import type { NextApiRequest, NextApiResponse } from 'next'
import { backExercisesProps } from './@types/back-exercises'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const exercises: backExercisesProps = {
    backMuscles: [
      {
        id: 1,
        name: 'Puxada Frente',
        specificMuscle: 'dorsal',
      },
      {
        id: 2,
        name: 'Barra fixa',
        specificMuscle: 'miolo',
      },
      {
        id: 3,
        name: 'Remada cavalinho',
        specificMuscle: 'miolo',
      },
    ],
  }

  return res.status(200).json(exercises)
}
