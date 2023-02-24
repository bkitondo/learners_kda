import Link from 'next/link'
import React, { useContext, useState } from 'react'
import Router, { useRouter } from 'next/router'
import AppContext from '../Context/AppContext'

function Hearders({ allLearners }) {
  const router = useRouter()
  function handlerHome() {
    router.push('/')
  }

  function handlerAbout() {
    router.push('../about')
  }

  function handlerCategorieDev() {
    router.push('../categories/dev')
  }

  function handlerCategorieSmd() {
    router.push('../categories/smd')

    // const optSmd = allLearners.filter(
    //   (learner) => learner.option === "Marketing Digital"
    // );
    // console.log(" option => ", optSmd);
  }

  function handlerAddLearner() {
    router.push('../addLearner')
  }

  function handlerSignin() {
    router.push('../signin')
  }

  function handlerLogin() {
    router.push('../login')
  }

  return (
    <header className="headers">
      <h1 onClick={handlerHome} className="logose">
        Logo
      </h1>
      <nav className="nav-links">
        <ul>
          <li className="categorie" onClick={handlerHome}>
            Accueil
          </li>
          <li className="categorie">
            Categorie
            <ul>
              <li onClick={handlerCategorieDev}>DEV</li>
              <li onClick={handlerCategorieSmd}>SMD</li>
            </ul>
          </li>
          <li className="categorie" onClick={handlerAbout}>
            A propos
          </li>
          <li className="categorie" onClick={handlerAddLearner}>
            Ajouter un apprenant
          </li>
          <li onClick={handlerSignin}>S inscrire</li>
          <li className="categorie connexion" onClick={handlerLogin}>
            Connexion
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Hearders
