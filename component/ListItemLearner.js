import Link from "next/link";
import React from "react";
import Image from "next/image";
import ImageMain from "../img/main.jpg";

function ListItemLearner({ imagesss, id, desc, option }) {
  return (
    <div className="container-learner">
      <Link href="/retail" className="blog-learner">
        <Image
          src={imagesss}
          width={210}
          height={240}
          alt="image of main page"
          className="leaner-img"
          component="img"
        />
        <div className="title-learner">{option}</div>
        <div className="learner-description">{desc}</div>
        <div className="retail">retail</div>
      </Link>
    </div>
  );
}

export default ListItemLearner;
