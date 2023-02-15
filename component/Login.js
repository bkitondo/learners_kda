import * as React from 'react'
import Image from 'next/image'
import google from '../img/google.png'

export default function Login() {
  return (
    <main>
      <div className="formContainer" data-aos="zoom-in" data-aos-duration="2000">
        <div className="fromtitle">Connectez-vous !</div>
        <input className="formInput" type="email" placeholder="Email" />
        <input className="formInput" type="password" placeholder="Mot de passe" />
        <div className="display">
          <button className="formBtn cancel"> Annuler </button>
          <button className="formBtn  submit">Connexion</button>
        </div>
      </div>
      <div className="containerGoogle" data-aos="zoom-in" data-aos-duration="3000">
        <Image src={google} alt="logo de google" className="logo" />
        <div className="textGoogle">Se connecter avec son compte google</div>
      </div>
    </main>
  )
}
