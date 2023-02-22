import React from "react";
import Image from "next/image";
import profil from "../img/main.jpg";
import Link from "next/link";
import CategorieDev from "../component/CategorieDev";

export default function DisplayLeaner({ learnersDev, learnersSmd }) {

  return (
    <main>
      <div className="container-main" data-aos="zoom-in">
        <div className="alert-msg" data-aos="fade-down" data-aos-delay="900">
          <h2>Voulez vous rendre votre sevice numerique ?</h2>
          <p>
            Contacter un(e) developpeur(se) web ou un(e) marketeur(se) digital
            qui vous convient pour que votre entreprise soit numerisée comme
            vous y pensez.
          </p>
          <div className="inputContaire">
            <input
              className="input"
              placeholder="Recherche par nom"
              type="text"
            />
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
            {learnersDev ? "Développeur Web et Mobile" : "Marketing Digital"}
          </h1>
          <p className="paragraph" data-aos="fade-down" data-aos-delay="1000">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
            obcaecati nihil aspernatur culpa sed eius ullam eligendi, excepturi
            deleniti consequatur illo dolorem dicta, enim, similique aut optio?
            Hic, tempora temporibus
          </p>
        </div>
        <ul className="containerItem">
          {learnersSmd?.map((smd) => {
            return <CategorieDev key={smd._id} smd={smd} />;
          })}
        </ul>
        <ul className="containerItem">
          {learnersDev?.map((dev) => {
            return (
              <li className="item hover" key={dev._id}>
                <Link href="retail">
                  <Image src={profil} alt="profil" className="profil" />
                  <div className="containerDetail">
                    <div className="itemdetail">{dev.name}</div>
                    <div className="itemdetail">{dev.option}</div>
                    <div className="itemdetail">{dev.status}</div>
                  </div>
                  <div className="detail">détail</div>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
