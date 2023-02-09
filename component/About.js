import Image from "next/image";
import Link from "next/link";
import React from "react";
import FontAbout from "../component/FontAbout"
import { FaPhoneAlt } from "react-icons/fa";

function About() {
  return (
    <div className="container-about">
     <FontAbout />
      <div className="about-us">
        <div className="content-about">
          <h2>A propos de nous!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            dignissimos eaque totam. Quidem, perferendis aspernatur similique
            deserunt reprehenderit error ab! Eveniet a voluptatibus corrupti.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            dignissimos eaque totam. Quidem, perferendis aspernatur similique
            deserunt reprehenderit error ab! Eveniet a voluptatibus corrupti.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="img-about">
          
        </div>
      </div>
      <div className="contact-about">
        <form className="form">
          <input type="text" placeholder="Ecrire un mail..." />
          <button type="submit">Envoyer</button>
        </form>
        <div className="call-about">
          <div className="call-ablot-phone">
            <FaPhoneAlt className="callphone" />
            <div className="telephones">
              <span>+243 825 910 778 </span>|
              <span> +243 810 671 668</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
