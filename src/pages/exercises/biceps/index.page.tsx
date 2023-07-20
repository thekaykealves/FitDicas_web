import { Muscles } from '@/pages/components/Muscles'

import bicepsImg from '../../../assets/muscles/biceps.png'
import useExercises from '@/hook/useExercises'

export default function Biceps() {
  const { exercises } = useExercises('biceps')

  return <Muscles name="Biceps" image={bicepsImg.src} exercises={exercises} />
}
