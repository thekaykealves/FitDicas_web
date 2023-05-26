import { useEffect, useState } from 'react'
import { TableFoodsContainer } from './styles'

interface FoodProps {
  meats: {
    id: string
    name: string
    quantity: string
    protein: string
    type: string
  }[]
}

export function TableFoods() {
  const [foods, setFoods] = useState<FoodProps>()

  const URL = 'http://localhost:3000/api/foods'

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setFoods(data))
  }, [])

  return (
    <TableFoodsContainer>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Peso</th>
          <th>Proteínas</th>
        </tr>
      </thead>
      <tbody>
        {foods?.meats.map((food) => {
          return (
            <tr key={food.id}>
              <td>{food.name}</td>
              <td>{food.quantity}</td>
              <td>{food.protein}</td>
            </tr>
          )
        })}
      </tbody>
    </TableFoodsContainer>
  )
}
