import Link from 'next/link'
import React from 'react'
import {
  AiOutlineTwitter,
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineInstagram,
} from 'react-icons/ai'

export default function Footer() {
  return (
    <main className="footerContainer">
      <div>
        <div className="footerSection">Nous Contacter</div>
        <div className="containerIcon">
          <AiOutlineFacebook className="footerIcon hover" />
          <AiOutlineLinkedin className="footerIcon hover" />
          <AiOutlineInstagram className="footerIcon hover" />
          <AiOutlineTwitter className="footerIcon hover" />
        </div>
      </div>
      <div>
        <div className="footerSection">Categories</div>
        <div className="footerCategorie hover">DEVELOPPEUR WEB ET MOBILE</div>
        <div className="footerCategorie hover">MARKETING DIGITAL</div>
      </div>
      <Link className="footerSection" href="#s'inscrire">
        S'inscrire
      </Link>
      <div className="footerSection">A Propos</div>
    </main>
  )
}
