import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json({
    meats: [
      {
        id: '1',
        name: 'Patinho',
        quantity: '100g',
        protein: '25g',
        type: 'Bovina',
      },
      {
        id: '2',
        name: 'Peito de frango',
        quantity: '100g',
        protein: '31g',
        type: 'Aves',
      },
    ],

    fruits: {},
  })
}
