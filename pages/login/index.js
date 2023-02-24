import React from 'react'
import Footer from '../../component/Footer'
import Login from '../../component/Login'
import Headers from "../../component/Hearders"

export default function LogIn() {
  return (
    <>
      <Headers />
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
