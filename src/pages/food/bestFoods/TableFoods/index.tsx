import { useEffect, useState } from 'react'

import { api } from '@/lib/axios'

import { TableFoodsContainer } from './styles'

interface FoodProps {
  id: string
  name: string
  quantity: string
  protein: string
  calories: string
  type: string
}

interface TableFoodsProps {
  type: 'meats' | 'fruits' | 'supplements'
}

export function TableFoods({ type }: TableFoodsProps) {
  const [foods, setFoods] = useState<FoodProps[]>([])

  async function fetchFoods() {
    const response = await api.get('/foods')
    const typesOfFoods = response.data

    const foods = typesOfFoods[`${type}`]

    setFoods(foods)
  }

  useEffect(() => {
    fetchFoods()
  }, [])

  return (
    <TableFoodsContainer>
      <div>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Quantidade</th>
            {type === 'meats' || type === 'supplements' ? (
              <th>Proteínas</th>
            ) : (
              <th>Calorias</th>
            )}
          </tr>
        </thead>
        <tbody>
          {foods?.map((food) => {
            return (
              <tr key={food.id}>
                <td>{food.name}</td>
                <td>{food.quantity}</td>
                {type === 'meats' || type === 'supplements' ? (
                  <td>{food.protein}</td>
                ) : (
                  <td>{food.calories}</td>
                )}
              </tr>
            )
          })}
        </tbody>
      </div>
    </TableFoodsContainer>
  )
}
