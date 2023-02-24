import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

function CategorieDev({ smd, setOneLearner }) {
  return (
    <li
      className="item hover"
      key={smd._id}
      onClick={() => {
        setOneLearner(smd)
      }}>
      <Link href="../retail">
        <Image src={smd.image} width={210} height={240} alt="profil" className="profil" />
        <div className="containerDetail">
          <div className="itemdetail">
            {smd.name} {smd.lastName}
          </div>
          <div className="itemdetail">{smd.option}</div>
          <div className="itemdetail">{smd.status}</div>
        </div>
        <div className="detail">détail</div>
      </Link>
    </li>
  )
}

export default CategorieDev
