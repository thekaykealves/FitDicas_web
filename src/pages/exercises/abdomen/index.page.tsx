import { Muscles } from '@/pages/components/Muscles'

import abdomenImg from '../../../assets/muscles/abdomen.jpg'
import useExercises from '@/hook/useExercises'

export default function Abdomen() {
  const { exercises } = useExercises('abdomen')

  return <Muscles name="Abdomen" image={abdomenImg.src} exercises={exercises} />
}
