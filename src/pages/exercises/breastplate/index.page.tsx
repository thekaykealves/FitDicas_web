import Head from 'next/head'

import { Muscles } from '@/pages/components/Muscles'
import useExercises from '@/hook/useExercises'

import breastplateImg from '../../../assets/muscles/peitoral.png'

export default function Breastplate() {
  const { exercises } = useExercises('breastplate')

  return (
    <>
      <Head>
        <title>Peitoral | FitDicas</title>
      </Head>

      <Muscles
        name="Peitoral"
        image={breastplateImg.src}
        exercises={exercises}
      />
    </>
  )
}
