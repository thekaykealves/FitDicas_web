import Head from 'next/head'

import { Muscles } from '@/pages/components/Muscles'
import useExercises from '@/hook/useExercises'

import abdomenImg from '../../../assets/muscles/abdomen.jpg'

export default function Abdomen() {
  const { exercises } = useExercises('abdomen')

  return (
    <>
      <Head>
        <title>Abdomen | FitDicas</title>
      </Head>

      <Muscles name="Abdomen" image={abdomenImg.src} exercises={exercises} />
    </>
  )
}
