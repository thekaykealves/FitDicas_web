import Head from 'next/head'

import { Muscles } from '@/pages/components/Muscles'
import useExercises from '@/hook/useExercises'

import legsImg from '../../../assets/muscles/pernas.jpg'

export default function Exercises() {
  const { exercises } = useExercises('legs')

  return (
    <>
      <Head>
        <title>Pernas | FitDicas</title>
      </Head>

      <Muscles name="Pernas" image={legsImg.src} exercises={exercises} />
    </>
  )
}
