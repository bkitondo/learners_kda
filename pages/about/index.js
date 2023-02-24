import React from 'react'
import About from '../../component/About'
import Footer from '../../component/Footer'
import Header from '../../component/Header'
import Headers from "../../component/Hearders"

function BlogAbout() {
  return (
    <>
      {/* <Header /> */}
      <Headers />
      <About />
      <Footer />
    </>
  )
}

export default BlogAbout

export async function getServerSideProps() {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  return {
    props: {},
  };
}