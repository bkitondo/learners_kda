import React from 'react'
import CategorieDev from '../component/CategorieDev'
import CategorieSmd from '../component/CategorieSmd'

export default function DisplayLeaner({
  learnersDev,
  learnersSmd,
  setOneLearner,
}) {
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
          <h1 className="title" data-aos="fade-down" data-aos-delay="700">
            {learnersDev ? 'Développeur Web et Mobile' : 'Marketing Digital'}
          </h1>
          <p className="paragraph" data-aos="fade-down" data-aos-delay="1000">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel obcaecati nihil
            aspernatur culpa sed eius ullam eligendi, excepturi deleniti consequatur illo
            dolorem dicta, enim, similique aut optio? Hic, tempora temporibus
          </p>
        </div>
        <ul className="containerItem">
          {learnersSmd?.map(smd => {
            return (
              <CategorieDev
                key={smd._id}
                smd={smd}
                setOneLearner={setOneLearner}
                
              />
            )
          })}
        </ul>
        <ul className="containerItem">
          {learnersDev?.map(dev => {
            return (
              <CategorieSmd
                key={dev._id}
                dev={dev}
                setOneLearner={setOneLearner}
              />
            )
          })}
        </ul>
      </section>
    </main>
  )
}
