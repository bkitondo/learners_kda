import AddLearner from '../../component/AddLearner'
import Footer from '../../component/Footer'
import Headers from "../../component/Hearders"

export default function AddOneLearner() {
  return (
    <>
      <Headers />
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
