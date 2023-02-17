import Link from 'next/link'
import React, { useContext, useState } from 'react'
import Image from 'next/image'
import AppContext from '../Context/AppContext'

function ListItemLearner({ setOneLearner }) {
  const context = useContext(AppContext)

  const [learners, setLearners] = useState(context.allLearners)
  return (
    <div className="learnerAleatoir">
      {learners.map(list => {
        return (
          <div
            className="container-learner"
            onClick={() => setOneLearner(list)}
            key={list.id}>
            <Link href="/retail" className="blog-learner">
              <Image
                src={list.image}
                width={210}
                height={240}
                alt="image of main page"
                className="leaner-img"
                component="img"
              />
              <div className="title-learner">{list.option}</div>
              <div className="learner-description">{list.description}</div>
              <div className="retail">retail</div>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default ListItemLearner
