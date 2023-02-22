import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

function CategorieSmd({dev}) {
  return (
    <li className="item hover" key={dev._id}>
    <Link href="retail">
      <Image src={dev.image} width={210} height={240} alt="profil" className="profil" />
      <div className="containerDetail">
        <div className="itemdetail">{dev.name}</div>
        <div className="itemdetail">{dev.option}</div>
        <div className="itemdetail">{dev.status}</div>
      </div>
      <div className="detail">détail</div>
    </Link>
  </li>
  )
}

export default CategorieSmd