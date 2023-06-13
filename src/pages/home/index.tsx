import Head from 'next/head'
import Image from 'next/image'

import { Header } from '../components/Header'
import { About } from './components/About'
import { Benefits } from './components/Benefitis'

import { HomeContainer, HomeImages, HomeTextContainer } from './styles'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import alimentacaoImg from '../../assets/alimentacao.avif'
import exercicioImg from '../../assets/exercicio.avif'
import rotinaImg from '../../assets/rotina.avif'

export default function Home() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      slides: {
        perView: 1,
        spacing: 1,
      },
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>

        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          timeout = setTimeout(() => {
            slider.next()
          }, 3000)
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            clearNextTimeout()
          })
          slider.container.addEventListener('mouseout', () => {
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on('dragStarted', clearNextTimeout)
        slider.on('animationEnded', nextTimeout)
        slider.on('updated', nextTimeout)
      },
    ],
  )

  return (
    <>
      <Head>
        <title>Home | FitDicas</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        <HomeContainer className="container">
          <HomeTextContainer>
            <h1>Vem ser Fitness !</h1>
            <span>
              Aqui você encontra as melhores dicas para ser uma pessoa +
              saudável e - preguiçosa.
            </span>
          </HomeTextContainer>

          <HomeImages>
            <div ref={sliderRef} className="keen-slider">
              <Image
                className="keen-slider__slide"
                src={alimentacaoImg}
                alt=""
              />

              <Image className="keen-slider__slide" src={exercicioImg} alt="" />

              <Image className="keen-slider__slide" src={rotinaImg} alt="" />
            </div>
          </HomeImages>
        </HomeContainer>

        <About />
        <Benefits />
      </div>
    </>
  )
}
