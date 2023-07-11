import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json({
    meats: [
      {
        id: '1',
        name: 'Patinho',
        quantity: '100g',
        protein: '25g',
      },
      {
        id: '2',
        name: 'Peito de frango',
        quantity: '100g',
        protein: '31g',
      },
    ],

    fruits: [
      {
        id: '1',
        name: 'Banana',
        quantity: '1 unidade',
        calories: '120 kcal',
      },
      {
        id: '1',
        name: 'Ameixa',
        quantity: '1 unidade',
        calories: '92 kcal',
      },
    ],

    supplements: [
      {
        id: '1',
        name: 'Whey Protein',
        quantity: '20g',
        protein: '20g',
      },
      {
        id: '2',
        name: 'Creatina',
        quantity: '5g',
      },
    ],
  })
}
