import React from "react";
import Image from "next/image";
import image from "../img/main.jpg";
import Link from "next/link";
import FontRetail from "./FontRetail";

function Retail() {
  return (
    <>
      <FontRetail />
      <div className="retail-leaner">
        <div className="img-retail">
          <Image src={image} alt="" className="big-img" title="" />
          <div className="retail-realisation">
            <span>Réalisations</span>
            <div className="realisation">
              Contacter un developpeur web ou un marketeur digital qui vous
              convient pour que votre entreprise soit numerisée comme vous y
              pensez.
            </div>
            <div className="lien">
              <Link href="#">githttps://github.com/ha</Link>
            </div>
          </div>
        </div>
        <div className="retail-container">
          <div className="retail-info">
            <Image
              src={image}
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "100%",
                objectFit: "cover",
                margin: "0 10px 0 0",
              }}
              alt=""
              title=""
            />
            <div className="top-profil">
              <div className="name">Diambu sinduki Jeannot</div>
              <div className="option">Marketing Digital</div>
            </div>
          </div>
          <div className="retail-description">
            Je suis developpeuse Web et Mobile formée à la Kinshasa Digital
            Academy en 2022. J’ai travaillé chez vodacom depuis deux ans comme
            etant un developpeur frontend.
          </div>
          <div className="retail-enterprise">
            <h3 className="enterprise">Entreprise</h3>
            <ul className="list-enterprise">
              <li>Vodacom</li>
            </ul>
          </div>
          <div className="retail-contact">
            <h3 className="contact">Contact</h3>
            <ul>
              <li className="email">diambujeannot@gmail.com</li>
              <li className="telephone">+243 825 910 778</li>
            </ul>
          </div>
          <div className="retail-cohorte">
            <h3 className="cohorte">Cohorte</h3>
            <ul>
              <li className="date">2022</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Retail;
