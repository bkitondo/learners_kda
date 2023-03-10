import Footer from '../../../component/Footer'
import DisplayLeaner from '../../../component/AllLearner'
import Headers from '../../../component/Hearders'
import axios from 'axios'

function Categories({ learners, oneLearner, setOneLearner }) {
  const optDev = learners.filter(
    learner => learner.option === 'Developpeur web et mobile',
  )

  return (
    <>
      <Headers />
      <DisplayLeaner
        learnersDev={optDev}
        oneLearner={oneLearner}
        setOneLearner={setOneLearner}
      />
      <Footer />
    </>
  )
}

export default Categories

export async function getServerSideProps() {
  await new Promise(resolve => {
    setTimeout(resolve, 1000)
  })

  const res = await axios.get('http://localhost:3000/api/learner/learnerApi')
  const learners = res.data.data
  console.log(learners)

  return {
    props: { learners },
  }
}
