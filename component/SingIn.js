import * as React from 'react'

export default function SingIn() {
  return (
    <main className="formContainer">
      <div className="fromtitle">Inscrivez-vous !</div>
      <div className='display'>
        <input className="formBtn" type="text" placeholder="Nom" />
        <input className="formBtn" type="text" placeholder="Prénom" />
      </div>
      <input className="formInput" type="email" placeholder="Email" />
      <input className="formInput" type="password" placeholder="Mot de passe" />
      <div className='display'>
        <button className="formBtn" > Annuler </button>
        <button className="formBtn  submit" >Soumettre</button>
      </div>
    </main>
  )
}
