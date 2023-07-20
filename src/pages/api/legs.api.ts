import type { NextApiRequest, NextApiResponse } from 'next'

interface legExercisesProps {
  legs: {
    id: number
    name: string
    specificMuscle: 'Posteriores' | 'Quadriceps' | 'Glúteo' | 'Panturrilhas'
  }[]
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const exercises: legExercisesProps = {
    legs: [
      {
        id: 1,
        name: 'Cadeira Extensora',
        specificMuscle: 'Quadriceps',
      },
      {
        id: 2,
        name: 'Mesa Flexora',
        specificMuscle: 'Posteriores',
      },
      {
        id: 3,
        name: 'Leg Press',
        specificMuscle: 'Quadriceps',
      },
    ],
  }

  return res.status(200).json(exercises)
}
