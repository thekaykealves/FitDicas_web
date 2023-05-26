import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import { Layout } from './components/layout'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
