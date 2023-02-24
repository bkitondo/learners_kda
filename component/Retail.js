import React, { useState } from "react";
import Image from "next/image";
import image from "../img/main.jpg";
import Link from "next/link";
import FontRetail from "./FontRetail";
import { useRouter } from "next/router";

function Retail({ oneLearner }) {
  const router = useRouter();

  function handlerOneLearner(e) {
    e.preventDefault();
    router.push(`/modifyLearner/`);
  }

  return (
    <>
      <FontRetail />
      <div className="retail-leaner">
        <div className="img-retail">
          <Image
            style={{
              margin: "0 10px 0 0",
              height: "300px",
              width: "100%",
              objectFit: "contain",
              objectPosition: "contain",
            }}
            src={oneLearner.image}
            width={200}
            height={200}
            alt=""
            className="big-img"
            title=""
          />
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
            <div onClick={handlerOneLearner} className="Modify">
              Modifier
            </div>
          </div>
        </div>
        <div className="retail-container">
          <div className="retail-info">
            <Image
              src={oneLearner.image}
              style={{
                borderRadius: "100%",
                objectFit: "cover",
                margin: "0 10px 0 0",
                height: "50px",
                width: "50px",
              }}
              width={50}
              height={50}
              alt=""
              title=""
            />
            <div className="top-profil">
              <div className="name">
                {oneLearner?.name} {oneLearner?.lastName}{" "}
              </div>
              <div className="option">{oneLearner?.option} </div>
            </div>
          </div>
          <div className="retail-description">{oneLearner?.description}</div>
          <div className="retail-enterprise">
            <h3 className="enterprise">Entreprise</h3>
            <ul className="list-enterprise">
              <li>{oneLearner.status} </li>
            </ul>
          </div>
          <div className="retail-contact">
            <h3 className="contact">Contact</h3>
            <ul>
              <li className="email">{oneLearner?.email} </li>
              <li className="telephone">{oneLearner?.contact} </li>
            </ul>
          </div>
          <div className="retail-cohorte">
            <h3 className="cohorte">Cohorte</h3>
            <ul>
              <li className="date">{oneLearner?.promotion}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Retail;
