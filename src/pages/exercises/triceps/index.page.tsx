import { Muscles } from '@/pages/components/Muscles'

import tricepsImg from '../../../assets/muscles/triceps.png'
import useExercises from '@/hook/useExercises'

export default function Triceps() {
  const { exercises } = useExercises('triceps')

  return <Muscles name="Tríceps" image={tricepsImg.src} exercises={exercises} />
}
