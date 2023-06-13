import { BackToTopButton } from '@/styles/global'
import { Footer } from './Footer'
import { ArrowUp } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { Header } from './Header'

export function Layout({ children }: any) {
  const [buttonVisibility, setButtonVisibility] = useState(false)

  function backToTop() {
    if (window.scrollY >= 300) {
      setButtonVisibility(true)
    } else {
      setButtonVisibility(false)
    }
  }

  function StartBackToTopButton() {
    window.addEventListener('scroll', () => {
      backToTop()
    })
  }

  useEffect(() => {
    StartBackToTopButton()
  })

  return (
    <>
      <Header />
      <div>{children}</div>
      <BackToTopButton
        href="#"
        css={{
          opacity: buttonVisibility ? '1' : '0',
          cursor: buttonVisibility ? 'pointer' : '',
        }}
      >
        <ArrowUp weight="bold" />
      </BackToTopButton>
      <Footer />
    </>
  )
}
