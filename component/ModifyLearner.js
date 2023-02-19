import * as React from "react";
import Image from "next/image";
import defaultPicture from "../img/defaultProfil.png";
import { AiOutlinePlus } from "react-icons/ai";
import axios from "axios";

export default function ModifyLearner({ oneLearner }) {
  console.log("oneLearner => ", oneLearner);

  return (
    <main data-aos="zoom-in" data-aos-duration="2000">
      <div className="formContainer">
        <div className="containerPicture">
          <Image
            src={""}
            width="100"
            height="100"
            alt="image selected"
            className="picture"
          />
          <AiOutlinePlus className="icon" />
          <input
            type="file"
            accept="image/png, image/jpeg, image/jpg"
            className="file"
            title=""
          />
        </div>
        <div className="display">
          <input
            className="formBtn"
            type="text"
            placeholder="Nom"
            value={oneLearner.name}
          />
          <input
            className="formBtn"
            type="text"
            placeholder="Prénom"
            value={oneLearner.lastName}
          />
        </div>
        <div className="display">
          <input
            className="formBtn"
            type="text"
            placeholder="Status"
            value={oneLearner.status}
          />
          <input
            className="formBtn"
            type="text"
            placeholder="Contact"
            value={oneLearner.contact}
          />
        </div>
        <div className="display">
          <select className="formBtn">
            <option value="">{oneLearner.option}</option>
            {oneLearner.option == "Developpeur web et mobile" ? (
              <option value="Specialiste en Marketing Digital">
                Specialiste en Marketing Digital
              </option>
            ) : (
              <option value="Developpeur web et mobile">
                Developpeur web et mobile
              </option>
            )}
          </select>
          <select className="formBtn">
            <option value="">Promotion</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <input className="formInput" type="email" placeholder="Email" />
        <input
          className="formInput"
          type="password"
          placeholder="Mot de passe"
        />
        <textarea className="formInput" placeholder="Déscription" />
        <div className="display">
          <button className="formBtn cancel"> Annuler </button>
          <button className="formBtn  submit">
            {/* {!loader ? `Soumettre` : `Envoie en cours ...`} */}
            Modify
          </button>
        </div>
      </div>
    </main>
  );
}
