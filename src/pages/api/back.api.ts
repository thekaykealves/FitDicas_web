import type { NextApiRequest, NextApiResponse } from 'next'

interface backExercisesProps {
  back: {
    id: number
    name: string
    specificMuscle: 'dorsal' | 'trapezio' | 'miolo' | 'lombar'
  }[]
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const exercises: backExercisesProps = {
    back: [
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
