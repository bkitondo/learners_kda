import Link from "next/link";
import React from "react";

function Hearders() {
  return (
    <header className="headers">
      <h1 className="logose">Logo</h1>
      <nav className="nav-links">
        <ul>
          <li className="categorie">
            <a href="#">Accueil</a>
          </li>
          <li className="categorie">
            <a href="#">Categorie</a>
            <ul>
              <li>
                <a href="#">DEV</a>
              </li>
              <li>
                <a href="#">SMD</a>
              </li>
            </ul>
          </li>
          <li className="categorie">
            <a href="#">A propos</a>
          </li>
          <li className="categorie">
            <a href="#">Ajouter un apprenant</a>
          </li>
          <li>
            <a href="#">S inscrire</a>
          </li >
          <li className="categorie">
            <a href="#">Connexion</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Hearders;
