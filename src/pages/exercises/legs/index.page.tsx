import { Muscles } from '@/pages/components/Muscles'

import legsImg from '../../../assets/muscles/pernas.jpg'
import useExercises from '@/hook/useExercises'

export default function Exercises() {
  const { exercises } = useExercises('legs')

  return <Muscles name="Pernas" image={legsImg.src} exercises={exercises} />
}
