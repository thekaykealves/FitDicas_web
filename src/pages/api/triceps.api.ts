import type { NextApiRequest, NextApiResponse } from 'next'

interface tricepsExercisesProps {
  triceps: {
    id: number
    name: string
  }[]
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const exercises: tricepsExercisesProps = {
    triceps: [
      {
        id: 1,
        name: 'Tríceps na polia alta com barra reta',
      },
      {
        id: 2,
        name: 'Tríceps na polia alta com corda',
      },
    ],
  }

  return res.status(200).json(exercises)
}
