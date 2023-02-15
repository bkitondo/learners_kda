import AddLearner from '../../component/AddLearner'
import Footer from '../../component/Footer'
import Header from '../../component/Header'

export default function AddOneLearner() {
  return (
    <>
      <Header />
      <AddLearner />
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
