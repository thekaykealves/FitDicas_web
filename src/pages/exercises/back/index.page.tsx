import Head from 'next/head'

import { Muscles } from '@/pages/components/Muscles'
import useExercises from '@/hook/useExercises'

import costasImg from '../../../assets/muscles/costas.jpeg'

export default function BackPage() {
  const { exercises } = useExercises('back')

  return (
    <>
      <Head>
        <title>Costas | FitDicas</title>
      </Head>

      <Muscles name="Costas" image={costasImg.src} exercises={exercises} />
    </>
  )
}
