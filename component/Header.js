import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="header">
      <Link href="/" className="link logo">
        <h1 className="logo">Logo</h1>
      </Link>
      <nav className="nav-link">
        <Link href="/" className="link">
          Accueil
        </Link>
        <Link href="/categories" className="link">
          Categorie
        </Link>
        <Link href="about" className="link">
          A propos
        </Link>
        <Link href="/signin" className="link">
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
