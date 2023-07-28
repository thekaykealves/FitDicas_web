import { ReactNode, useEffect, useState } from 'react'

import { Footer } from './Footer'
import { Header } from './Header'

import { ArrowUp } from 'phosphor-react'

import { BackToTopButton } from '@/styles/global'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  const [isButtonVisibility, setIsButtonVisibility] = useState(false)

  function backToTop() {
    if (window.scrollY >= 300) {
      setIsButtonVisibility(true)
    } else {
      setIsButtonVisibility(false)
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
          opacity: isButtonVisibility ? '1' : '0',
          cursor: isButtonVisibility ? 'pointer' : '',
        }}
      >
        <ArrowUp weight="bold" />
      </BackToTopButton>
      <Footer />
    </>
  )
}
