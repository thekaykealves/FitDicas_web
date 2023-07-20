import type { NextApiRequest, NextApiResponse } from 'next'

interface breastplateExercisesProps {
  breastplate: {
    id: number
    name: string
  }[]
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const exercises: breastplateExercisesProps = {
    breastplate: [
      {
        id: 1,
        name: 'Supino reto (maquina, barra ou halteres)',
      },
      {
        id: 2,
        name: 'Supino Inclinado (maquina, barra ou halteres)',
      },
      {
        id: 3,
        name: 'Peck Deck',
      },
      {
        id: 4,
        name: 'Flexão de braços',
      },
      {
        id: 5,
        name: 'Crucifixo Inclinado',
      },
    ],
  }

  return res.status(200).json(exercises)
}
