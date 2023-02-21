import '@/styles/globals.css'
import '../styles/header.css'
import '../styles/main.css'
import '../styles/learner.css'
import '../styles/footer.css'
import '../styles/allLearner.css'
import '../styles/retail.css'
import '../styles/about.css'
import '../styles/fontAbout.css'
import '../styles/signin.css'
import '../styles/loader.css'
import '../styles/headers.css'
import Router from 'next/router'
import Loader from '../component/Loader'
import nProgress from 'nprogress'
import Head from 'next/head'
import Header from '@/component/Header'
import Hearders from '@/component/Hearders'
import Footer from '@/component/Footer'
import Main from '@/component/Main'
import { useState } from 'react'


export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false),
    [oneLearner, setOneLearner] = useState({})

  Router.events.on('routeChangeStart', url => {
    setLoading(true)
    nProgress.start()
  })

  Router.events.on('routeChangeComplete', url => {
    setLoading(false)
    nProgress.done()
  })

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      {loading ? (
        <>
          <Hearders />
          <Main />
          <Loader />

          <div style={{ opacity: '0' }}>
            <Footer />
          </div>
        </>
      ) : (
        <Component oneLearner={oneLearner} setOneLearner={setOneLearner} {...pageProps} />
      )}
    </>
  )
}
