import * as React from "react";
import Image from "next/image";
import defaultPicture from "../img/defaultProfil.png";
import { AiOutlinePlus } from "react-icons/ai";
import axios from "axios";

export default function AddLearner() {
  const [learner, setLearner] = React.useState({
      name: "",
      lastName: "",
      image: { defaultPicture },
      number: "",
      status: "",
      promotion: "",
      email: "",
      password: "",
      option: "",
    }),
    [picture, setPicture] = React.useState(defaultPicture);

  async function fetchLerner() {
    if (learner) {
      const newLearner = await axios.post(
        "http://localhost:3000/api/learner/learnerApi",
        {
          name: learner.name,
          lastName: learner.lastName,
          image: learner.image,
          number: learner.number,
          status: learner.status,
          promotion: learner.promotion,
          email: learner.email,
          password: learner.password,
          option: learner.option,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      try {
        if (newLearner) {
          console.log("succes");
        }
      } catch (err) {
        throw err;
      }
    } else {
      alert(`champs vides`);
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
              setLearner({ image: value.target.files[0] });
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
              setLearner({ name: Nom.target.value });
            }}
          />
          <input
            className="formBtn"
            type="text"
            placeholder="Prénom"
            onChange={(Prénom) => {
              setLearner({ lastName: Prénom.target.value });
            }}
          />
        </div>
        <div className="display">
          <input
            className="formBtn"
            type="text"
            placeholder="Status"
            onChange={(Status) => {
              setLearner({ status: Status.target.value });
            }}
          />
          <input
            className="formBtn"
            type="text"
            placeholder="Contact"
            onChange={(Contact) => {
              setLearner({ number: Contact.target.value });
            }}
          />
        </div>
        <div className="display">
          <select
            className="formBtn"
            onChange={(Option) => {
              setLearner({ option: Option.target.value });
            }}
          >
            <option value="">Option</option>
            <option value="dev">Developpeur web et mobile</option>
            <option value="smd">Specialiste en Marketing Digital</option>
          </select>
          <select
            className="formBtn"
            onChange={(Promotion) => {
              setLearner({ promotion: Promotion.target.value });
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
            setLearner({ email: Email.target.value });
          }}
        />
        <input
          className="formInput"
          type="password"
          placeholder="Mot de passe"
          onChange={(pin) => {
            setLearner({ password: pin.target.value });
          }}
        />
        <textarea className="formInput" placeholder="Déscription" />
        <div className="display">
          <button className="formBtn cancel"> Annuler </button>
          <button className="formBtn  submit" onClick={fetchLerner}>
            Soumettre
          </button>
        </div>
      </div>
    </main>
  );
}
