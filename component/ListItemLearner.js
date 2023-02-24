import Link from 'next/link'
import React, { useContext, useState } from 'react'
import Image from 'next/image'
import AppContext from '../Context/AppContext'
import { useRouter } from 'next/router'

function ListItemLearner({ setOneLearner }) {
  const context = useContext(AppContext)

  const [learners, setLearners] = useState(context.allLearners)
  const router = useRouter()

  return (
    <div className="learnerAleatoir">
      {learners.map(list => {
        return (
          <div
            className="container-learner"
            onClick={() => {
              setOneLearner(list)
              router.push('../retail')
            }}
            key={list.id}>
            <div className="blog-learner">
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
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ListItemLearner
