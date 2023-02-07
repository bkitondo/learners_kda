import React from 'react'
// import Learners from '../data/learners'
import Image from 'next/image'
import profil from '../img/main.jpg'

export default function DisplayLeaner() {
  return (
    <main>
      <div className="container-main">
        <div className="alert-msg" data-aos="fade-down" data-aos-delay="900">
          <h2>Voulez vous rendre votre sevice numerique ?</h2>
          <p>
            Contacter un developpeur(se) web ou un marketeur(se) digital qui vous convient
            pour que votre entreprise soit numerisée comme vous y pensez.
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
          <h1 className="title">
            Developpeurs Web/mobile et Specialiste en Marketing Digital
          </h1>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel obcaecati nihil
            aspernatur culpa sed eius ullam eligendi, excepturi deleniti consequatur illo
            dolorem dicta, enim, similique aut optio? Hic, tempora temporibus 
          </p>
        </div>
        <ul className="containerItem">
          {/* {Learners.map((learner, index) => {
            return <li key={index}> {learner.name} </li>
          })} */}
          <li className="item hover">
            <Image src={profil} alt="profil" className="profil" />
            <div>nom</div>
            <div>option</div>
            <div>status</div>
          </li>
          <li className="item hover">
            <Image src={profil} alt="profil" className="profil" />
            <div>nom</div>
            <div>option</div>
            <div>status</div>
          </li>
          <li className="item hover">
            <Image src={profil} alt="profil" className="profil" />
            <div>nom</div>
            <div>option</div>
            <div>status</div>
          </li>
          <li className="item hover">
            <Image src={profil} alt="profil" className="profil" />
            <div>nom</div>
            <div>option</div>
            <div>status</div>
          </li>
          <li className="item hover">
            <Image src={profil} alt="profil" className="profil" />
            <div>nom</div>
            <div>option</div>
            <div>status</div>
          </li>
          <li className="item hover">
            <Image src={profil} alt="profil" className="profil" />
            <div>nom</div>
            <div>option</div>
            <div>status</div>
          </li>
        </ul>
      </section>
    </main>
  )
}
