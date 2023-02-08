import Image from "next/image";
import Link from "next/link";
import React from "react";
import FontAbout from "../component/FontAbout"

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
    </div>
  );
}

export default About;
