import React from 'react'
import Header from '../../component/Header'
import Footer from '../../component/Footer'
import Login from '../../component/Login'

export default function LogIn() {
  return (
    <>
      <Header />
      <Login />
      <Footer />
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
