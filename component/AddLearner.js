import * as React from "react";
import Image from "next/image";
import defaultPicture from "../img/defaultProfil.png";
import { AiOutlinePlus } from "react-icons/ai";
import axios from "axios";

export default function AddLearner() {
  const [name, setName] = React.useState(""),
    [lastName, setLastName] = React.useState(""),
    [image, setImage] = React.useState(
      "https://res.cloudinary.com/davr0i2ga/image/upload/v1669824681/smtvpbcgudmaghtqoq6m.png"
    ),
    [email, setEmail] = React.useState(""),
    [password, setPassword] = React.useState(""),
    [contact, setContact] = React.useState(""),
    [option, setOption] = React.useState(""),
    [description, setDescription] = React.useState("salut"),
    [status, setStatus] = React.useState(""),
    [promotion, setPromotion] = React.useState(""),
    [picture, setPicture] = React.useState(defaultPicture),
    [loader, setLoader] = React.useState(false);

  async function fetchLerner() {
    if (
      name !== "" &&
      lastName !== "" &&
      email !== "" &&
      password !== "" &&
      option !== "" &&
      description !== "" &&
      promotion !== ""
    ) {
      setLoader(true);
      const newLearner = await axios({
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        url: "http://localhost:3000/api/learner/learnerApi",
        data: {
          name,
          lastName,
          image,
          email,
          password,
          contact,
          option,
          description,
          status,
          promotion,
        },
      });
      try {
        if (newLearner) {
          setLoader(false);
          alert("succes");
        }
      } catch (err) {
        throw err;
      }
    } else {
      alert(`remplissez les champs vides svp`);
    }
  }

  return (
    <main data-aos="zoom-in" data-aos-duration="2000">
      <div className="formContainer">
        <div className="containerPicture">
          <Image
            src={picture}
            width="100"
            height="100"
            alt="image selected"
            className="picture"
          />
          <AiOutlinePlus className="icon" />
          <input
            type="file"
            accept="image/png, image/jpeg, image/jpg"
            onChange={(value) => {
              setImage(value.target.files[0]);
              setPicture(URL.createObjectURL(value.target.files[0]));
            }}
            className="file"
            title=""
          />
        </div>
        <div className="display">
          <input
            className="formBtn"
            type="text"
            placeholder="Nom"
            onChange={(Nom) => {
              setName(Nom.target.value);
            }}
          />
          <input
            className="formBtn"
            type="text"
            placeholder="Prénom"
            onChange={(Prénom) => {
              setLastName(Prénom.target.value);
            }}
          />
        </div>
        <div className="display">
          <input
            className="formBtn"
            type="text"
            placeholder="Status"
            onChange={(Status) => {
              setStatus(Status.target.value);
            }}
          />
          <input
            className="formBtn"
            type="text"
            placeholder="Contact"
            onChange={(Contact) => {
              setContact(Contact.target.value);
            }}
          />
        </div>
        <div className="display">
          <select
            className="formBtn"
            onChange={(Option) => {
              setOption(Option.target.value);
            }}
          >
            <option value="">Option</option>
            <option value="Developpeur web et mobile">
              Developpeur web et mobile
            </option>
            <option value="Specialiste en Marketing Digital">
              Specialiste en Marketing Digital
            </option>
          </select>
          <select
            className="formBtn"
            onChange={(Promotion) => {
              setPromotion(Promotion.target.value);
            }}
          >
            <option value="">Promotion</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <input
          className="formInput"
          type="email"
          placeholder="Email"
          onChange={(Email) => {
            setEmail(Email.target.value);
          }}
        />
        <input
          className="formInput"
          type="password"
          placeholder="Mot de passe"
          onChange={(pin) => {
            setPassword(pin.target.value);
          }}
        />
        <textarea
          cols="30"
          rows="5"
          className="formInput"
          placeholder="Déscription"
          onChange={(Déscription) => setDescription(Déscription.target.value)}
        />
        <div className="display">
          <button className="formBtn cancel"> Annuler </button>
          <button className="formBtn  submit" onClick={fetchLerner}>
            {!loader ? `Soumettre` : `Envoie en cours ...`}
          </button>
        </div>
      </div>
    </main>
  );
}
