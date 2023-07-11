import { useEffect, useState } from 'react'

import { TableFoodsContainer } from './styles'

import { FoodProps } from '../../@types/Food'
import { api } from '@/lib/axios'

interface TableFoodsProps {
  type: 'meats' | 'fruits' | 'supplements'
}

export function TableFoods({ type }: TableFoodsProps) {
  const [foods, setFoods] = useState<FoodProps[]>()

  async function FetchFoods() {
    const response = await api.get('/foods')
    const typesOfFoods = response.data

    const foods = typesOfFoods[`${type}`]

    setFoods(foods)
  }

  useEffect(() => {
    FetchFoods()
  }, [])

  return (
    <TableFoodsContainer>
      <div>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Quantidade</th>
            {type === 'meats' && <th>Proteínas</th>}
            {type === 'supplements' && <th>Proteínas</th>}
            {type === 'fruits' && <th>Calorias</th>}
          </tr>
        </thead>
        <tbody>
          {foods?.map((food) => {
            return (
              <tr key={food.id}>
                <td>{food.name}</td>
                <td>{food.quantity}</td>
                {type === 'meats' && <td>{food.protein}</td>}
                {type === 'fruits' && <td>{food.calories}</td>}
                {type === 'supplements' && <td>{food.protein}</td>}
              </tr>
            )
          })}
        </tbody>
      </div>
    </TableFoodsContainer>
  )
}
