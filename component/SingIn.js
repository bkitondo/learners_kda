import * as React from 'react'
import Image from 'next/image'
import google from '../img/google.png'

export default function SingIn() {
  return (
    <main>
      <div className="formContainer" data-aos="zoom-in-down" data-aos-duration="2000">
        <div className="fromtitle">Inscrivez-vous !</div>
        <div className="display">
          <input className="formBtn" type="text" placeholder="Nom" />
          <input className="formBtn" type="text" placeholder="Prénom" />
        </div>
        <input className="formInput" type="email" placeholder="Email" />
        <input className="formInput" type="password" placeholder="Mot de passe" />
        <div className="display">
          <button className="formBtn cancel"> Annuler </button>
          <button className="formBtn  submit">Soumettre</button>
        </div>
      </div>
      <div className="containerGoogle" data-aos="zoom-in-down" data-aos-duration="3000">
        <Image src={google} alt="logo de google" className="logo" />
        <div className="textGoogle">S'inscrire avec son compte google</div>
      </div>
    </main>
  )
}
