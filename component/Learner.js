import ListItemLearner from '../component/ListItemLearner'

function Learners({ setOneLearner }) {
  return (
    <div className="container">
      <div className="msg-alert" data-aos="fade-right" data-aos-duration="2000">
        <h2>Digital marketing specialists and web developers in Africa</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dignissimos eaque
          totam. Quidem, perferendis aspernatur similique deserunt reprehenderit error ab!
          Eveniet a voluptatibus corrupti
        </p>
      </div>
      <div className="learners-pub">
        <ListItemLearner setOneLearner={setOneLearner} />
        <div className="publicity">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dignissimos eaque
          totam. Quidem, perferendi. perferendis.
        </div>
      </div>
    </div>
  )
}

export default Learners
