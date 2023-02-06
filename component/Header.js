import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="header">
      <Link href="#accueil" className="link logo">
        <h1 className="logo">Logo</h1>
      </Link>
      <nav className="nav-link">
        <a href="#accueil" className="link">
          Accueil
        </a>
        <Link href="#apropos" className="link">
          A propos
        </Link>
        <Link href="#categories" className="link">
          Categorie
        </Link>
        <Link href="#s'inscrire" className="link">
          S inscrire
        </Link>
        <Link href="#connexion" className="important link">
          Connexion
        </Link>
      </nav>
    </header>
  );
}

export default Header;
