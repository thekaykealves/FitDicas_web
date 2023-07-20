import { Muscles } from '@/pages/components/Muscles'

import breastplateImg from '../../../assets/muscles/peitoral.png'
import useExercises from '@/hook/useExercises'

export default function Breastplate() {
  const { exercises } = useExercises('breastplate')

  return (
    <Muscles name="Peitoral" image={breastplateImg.src} exercises={exercises} />
  )
}
