/* eslint-disable @next/next/no-sync-scripts */
import Head from 'next/head'
import { Inter } from '@next/font/google'
import Footer from '@/component/Footer'
import Header from '@/component/Header'
import Main from '@/component/Main'
import Learner from '@/component/Learner'
import Addlearner from '@/component/AddLearner'
import AOS from 'aos'
import 'aos/dist/aos.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <script>AOS.init()</script>
      </Head>
      <div>
        <Header />
        {/* <Main /> */}
        {/* <Learner /> */}
        <Addlearner />
        <Footer />
      </div>
    </>
  )
}

export async function getServerSideProps() {
  await new Promise(resolve => {
    setTimeout(resolve, 1000)
  })

  return {
    props: {},
  }
}
