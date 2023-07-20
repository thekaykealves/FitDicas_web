import type { NextApiRequest, NextApiResponse } from 'next'

interface abdomenExercisesProps {
  abdomen: {
    id: number
    name: string
  }[]
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const exercises: abdomenExercisesProps = {
    abdomen: [
      {
        id: 1,
        name: 'Abdominal reto',
      },
      {
        id: 2,
        name: 'Abdominal Infra',
      },
      {
        id: 3,
        name: 'Abdominal Remador',
      },
      {
        id: 4,
        name: 'Abdominal Canivete',
      },
      {
        id: 5,
        name: 'Abdominal Superman',
      },
      {
        id: 6,
        name: 'Abdominal Bicicleta',
      },
      {
        id: 7,
        name: 'Rotação Russa',
      },
      {
        id: 8,
        name: 'Prancha',
      },
    ],
  }

  return res.status(200).json(exercises)
}
