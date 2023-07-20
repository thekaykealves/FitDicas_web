import { Muscles } from '@/pages/components/Muscles'

import costasImg from '../../../assets/muscles/costas.jpeg'
import useExercises from '@/hook/useExercises'

export default function BackPage() {
  const { exercises } = useExercises('back')

  return <Muscles name="Costas" image={costasImg.src} exercises={exercises} />
}
