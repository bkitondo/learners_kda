import React from "react";

function Main() {
  const inscrire = "S'inscrire";
  return (
    <div className="container-main">
      <div className="alert-msg" data-aos="fade-down" data-aos-delay="900">
        <h2>Voulez vous rendre votre sevice numerique ?</h2>
        <p>
          Contacter un developpeur(se) web ou un marketeur(se) digital qui vous
          convient pour que votre entreprise soit numerisée comme vous y pensez.
        </p>
        <div className="inscription">{inscrire}</div>
      </div>
    </div>
  );
}

export default Main;
