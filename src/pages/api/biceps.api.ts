import type { NextApiRequest, NextApiResponse } from 'next'

interface bicepsExercisesProps {
  biceps: {
    id: number
    name: string
  }[]
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const exercises: bicepsExercisesProps = {
    biceps: [
      {
        id: 1,
        name: 'Rosca direta no cabo',
      },
      {
        id: 2,
        name: 'Rosca alternada com halteres',
      },
      {
        id: 3,
        name: 'Rosca Scott',
      },
      {
        id: 4,
        name: 'Rosca martelo',
      },
      {
        id: 5,
        name: 'Rosca com halteres no banco inclinado',
      },
    ],
  }

  return res.status(200).json(exercises)
}
