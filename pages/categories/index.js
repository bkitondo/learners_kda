import React from 'react'
import Header from '../../component/Header'
import Footer from '../../component/Footer'
import DisplayLeaner from '../../component/AllLearner'
import Headers from "../../component/Hearders"

function Categories() {
  return (
    <>
      <Headers />
      <DisplayLeaner />
      <Footer />
    </>
  )
}

export default Categories

export async function getServerSideProps() {
  await new Promise(resolve => {
    setTimeout(resolve, 1000)
  })

  return {
    props: {},
  }
}
