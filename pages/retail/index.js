import React from 'react'
import Footer from '../../component/Footer'
import Header from '../../component/Header'
import Retail from '../../component/Retail'
import Headers from "../../component/Hearders"

function ContainerRetail({ oneLearner }) {
  return (
    <>
      <Headers />
      <Retail oneLearner={oneLearner} />
      <Footer />
    </>
  )
}

export default ContainerRetail

export async function getServerSideProps() {
  await new Promise(resolve => {
    setTimeout(resolve, 1000)
  })

  return {
    props: {},
  }
}
