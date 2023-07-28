import Head from 'next/head'

import { Muscles } from '@/pages/components/Muscles'
import useExercises from '@/hook/useExercises'

import tricepsImg from '../../../assets/muscles/triceps.png'

export default function Triceps() {
  const { exercises } = useExercises('triceps')

  return (
    <>
      <Head>
        <title>Tríceps | FitDicas</title>
      </Head>

      <Muscles name="Tríceps" image={tricepsImg.src} exercises={exercises} />
    </>
  )
}
