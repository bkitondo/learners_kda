import * as React from "react";
import Image from "next/image";
import defaultPicture from "../img/defaultProfil.png";
import { AiOutlinePlus } from "react-icons/ai";
import axios from "axios";
import { Router, useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    [promotion, setPromotion] = React.useState(oneLearner.promotion),
    [picture, setPicture] = React.useState(defaultPicture),
    [loader, setLoader] = React.useState(false),
    [learner, setLearner] = React.useState(oneLearner);
  const idLearner = oneLearner._id;
  const router = useRouter();

  const handlerModify = () => {
    toast("Information modifée avec succes!");
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
      console.log("oneLearner => ", learner);
      console.log("Id => ", idLearner);

      const updateLearner = axios({
        method: "PUT",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        url: `http://localhost:3000/api/learner/${idLearner}`,
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
        if (updateLearner) {
          setLoader(false);
          // router.push("/");
        }
      } catch (err) {
        throw err;
      }
    } else {
      alert(`remplissez les champs vides svp`);
    }
  };

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
            className="file"
            onChange={(value) => {
              setImage(value.target.files[0]);
              setPicture(URL.createObjectURL(value.target.files[0]));
            }}
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
          <select
            className="formBtn"
            onChange={(e) => setOption(e.target.value)}
          >
            <option value="Specialiste en Marketing Digital">
              Specialiste en Marketing Digital
            </option>
            <option value="Developpeur web et mobile">
              Developpeur web et mobile
            </option>
          </select>
          <select
            className="formBtn"
            onChange={(e) => setPromotion(e.target.value)}
          >
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <input
          className="formInput"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          className="formInput"
          placeholder="Déscription"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="display">
          <button className="formBtn cancel"> Annuler </button>
          <button className="formBtn  submit" onClick={handlerModify}>
          <ToastContainer />
            {!loader ? `Modify` : `Envoie en cours ...`}
          </button>
        </div>
      </div>
    </main>
  );
}
