import '../styles/footer.css'
import type { AppProps } from 'next/app'
import '../styles/header.css'
import '../styles/main.css'
import '../styles/learner.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} /> 
}
