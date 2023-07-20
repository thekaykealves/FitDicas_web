import { api } from '@/lib/axios'
import { ExercisesProps } from '@/pages/exercises/@types/exercises'
import { useEffect, useState } from 'react'

export default function useExercises(name: string) {
  const [exercises, setExercises] = useState<ExercisesProps[]>([])

  async function fetchExercises() {
    const response = await api.get(`/${name}`)
    const result = response.data[name]

    setExercises(result)
  }

  useEffect(() => {
    fetchExercises()
  }, [])

  return {
    exercises,
  }
}
