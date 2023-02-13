import React from 'react'
import Image from 'next/image'
import profil from '../img/main.jpg'
import Link from 'next/link'

export default function DisplayLeaner() {
  return (
    <main>
      <div className="container-main" data-aos="zoom-in">
        <div className="alert-msg" data-aos="fade-down" data-aos-delay="900">
          <h2>Voulez vous rendre votre sevice numerique ?</h2>
          <p>
            Contacter un(e) developpeur(se) web ou un(e) marketeur(se) digital qui vous
            convient pour que votre entreprise soit numerisée comme vous y pensez.
          </p>
          <div className="inputContaire">
            <input className="input" placeholder="Recherche par nom" type="text" />
            <input
              className="input"
              placeholder="Recherche par cohorte:2022"
              type="text"
            />
          </div>
        </div>
      </div>
      <section className="sectionLearner">
        <div>
          <h1 className="title" data-aos="fade-down" data-aos-delay="700">Developpeurs Web et Mobile</h1>
          <p className="paragraph" data-aos="fade-down" data-aos-delay="1000">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel obcaecati nihil
            aspernatur culpa sed eius ullam eligendi, excepturi deleniti consequatur illo
            dolorem dicta, enim, similique aut optio? Hic, tempora temporibus
          </p>
        </div>
        <ul className="containerItem">
          <li className="item hover">
            <Link href="retail">
              <Image src={profil} alt="profil" className="profil" />
              <div className="containerDetail">
                <div className="itemdetail">nom</div>
                <div className="itemdetail">option</div>
                <div className="itemdetail">status</div>
              </div>
              <div className="detail">détail</div>
            </Link>
          </li>
          <li className="item hover">
            <Image src={profil} alt="profil" className="profil" />
            <div className="containerDetail">
              <div className="itemdetail">nom</div>
              <div className="itemdetail">option</div>
              <div className="itemdetail">status</div>
            </div>
            <div className="detail">détail</div>
          </li>
          <li className="item hover">
            <Image src={profil} alt="profil" className="profil" />
            <div className="containerDetail">
              <div className="itemdetail">nom</div>
              <div className="itemdetail">option</div>
              <div className="itemdetail">status</div>
            </div>
            <div className="detail">détail</div>
          </li>
          <li className="item hover">
            <Image src={profil} alt="profil" className="profil" />
            <div className="containerDetail">
              <div className="itemdetail">nom</div>
              <div className="itemdetail">option</div>
              <div className="itemdetail">status</div>
            </div>
            <div className="detail">détail</div>
          </li>
          <li className="item hover">
            <Image src={profil} alt="profil" className="profil" />
            <div className="containerDetail">
              <div className="itemdetail">nom</div>
              <div className="itemdetail">option</div>
              <div className="itemdetail">status</div>
            </div>
            <div className="detail">détail</div>
          </li>
          <li className="item hover">
            <Image src={profil} alt="profil" className="profil" />
            <div className="containerDetail">
              <div className="itemdetail">nom</div>
              <div className="itemdetail">option</div>
              <div className="itemdetail">status</div>
            </div>
            <div className="detail">détail</div>
          </li>
        </ul>
      </section>
    </main>
  )
}
