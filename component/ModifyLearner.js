import * as React from "react";
import Image from "next/image";
import defaultPicture from "../img/defaultProfil.png";
import { AiOutlinePlus } from "react-icons/ai";
import axios from "axios";

export default function ModifyLearner({ oneLearner }) {
  const [name, setName] = React.useState(oneLearner.name),
    [lastName, setLastName] = React.useState(oneLearner.lastName),
    [image, setImage] = React.useState(
      "https://res.cloudinary.com/davr0i2ga/image/upload/v1669824681/smtvpbcgudmaghtqoq6m.png"
    ),
    [email, setEmail] = React.useState(oneLearner.email),
    [password, setPassword] = React.useState(oneLearner.password),
    [contact, setContact] = React.useState(oneLearner.contact),
    [option, setOption] = React.useState(oneLearner.option),
    [description, setDescription] = React.useState(oneLearner.description),
    [status, setStatus] = React.useState(oneLearner.status),
    [promotion, setPromotion] = React.useState(oneLearner.promotion);

  console.log("oneLearner => ", oneLearner);

  return (
    <main data-aos="zoom-in" data-aos-duration="2000">
      <div className="formContainer">
        <div className="containerPicture">
          <Image
            src={oneLearner.image}
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
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="formBtn"
            type="text"
            placeholder="Prénom"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="display">
          <input
            className="formBtn"
            type="text"
            placeholder="Status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
          <input
            className="formBtn"
            type="text"
            placeholder="Contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
        <div className="display">
          <select className="formBtn">
            <option value="" onChange={(e) => setOption(e.target.value)}>
              {option}
            </option>
            {oneLearner.option == "Developpeur web et mobile" ? (
              <option
                value="Specialiste en Marketing Digital"
                onChange={(e) => setOption(e.target.value)}
              >
                Specialiste en Marketing Digital
              </option>
            ) : (
              <option
                value="Developpeur web et mobile"
                onChange={(e) => setOption(e.target.value)}
              >
                Developpeur web et mobile
              </option>
            )}
          </select>
          <select className="formBtn">
            <option
              value={promotion}
              onChange={(e) => setPromotion(e.target.value)}
            >
              {promotion}
            </option>
            <option value="2020" onChange={(e) => setPromotion(e.target.value)}>
              2020
            </option>
            <option value="2021" onChange={(e) => setPromotion(e.target.value)}>
              2021
            </option>
            <option value="2022" onChange={(e) => setPromotion(e.target.value)}>
              2022
            </option>
          </select>
        </div>
        <input
          className="formInput"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* <input
          className="formInput"
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /> */}
        <textarea
          className="formInput"
          placeholder="Déscription"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
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
