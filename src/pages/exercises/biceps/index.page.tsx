import Head from 'next/head'

import { Muscles } from '@/pages/components/Muscles'
import useExercises from '@/hook/useExercises'

import bicepsImg from '../../../assets/muscles/biceps.png'

export default function Biceps() {
  const { exercises } = useExercises('biceps')

  return (
    <>
      <Head>
        <title>Bíceps | FitDicas</title>
      </Head>

      <Muscles name="Bíceps" image={bicepsImg.src} exercises={exercises} />
    </>
  )
}
