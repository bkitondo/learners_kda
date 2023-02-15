import * as React from 'react'
import Image from 'next/image'
import google from '../img/google.png'

export default function Login() {
  return (
    <main>
      <div className="formContainer">
        <div className="fromtitle">Connectez-vous !</div>
        {/* <div className="display">
          <input className="formBtn" type="text" placeholder="Nom" />
          <input className="formBtn" type="text" placeholder="Prénom" />
        </div> */}
        <input className="formInput" type="email" placeholder="Email" />
        <input className="formInput" type="password" placeholder="Mot de passe" />
        <div className="display">
          <button className="formBtn cancel"> Annuler </button>
          <button className="formBtn  submit">Connexion</button>
        </div>
      </div>
      <div className='containerGoogle'>
        <Image src={google} alt='logo de google'className='logo' />
        <div className='textGoogle'>
          Se connecter  avec son compte google
        </div>
      </div>
    </main>
  )
}
