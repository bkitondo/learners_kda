import React, { useState } from "react";
import Image from "next/image";
import ImageMain from "../img/main.jpg";
import Link from "next/link";
import ListItemLearner from "../component/ListItemLearner";

function Learners({ learners }) {
  
  const handlerLearner = () => {
      console.log("salut")
  }

  return (
    <div className="container">
      <div className="msg-alert" data-aos="fade-right" data-aos-duration="2000">
        <h2>Digital marketing specialists and web developers in Africa</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          dignissimos eaque totam. Quidem, perferendis aspernatur similique
          deserunt reprehenderit error ab! Eveniet a voluptatibus corrupti
        </p>
      </div>
      <div className="learners-pub" onClick={handlerLearner}>
        <div className="learnerAleatoir">
          {learners.map((list) => {
            return (
              <ListItemLearner
                key={list.id}
                id={list._id}
                option={list.option}
                desc={list.description}
                imagesss={list.image}
              />
            );
          })}
        </div>
        <div className="publicity">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          dignissimos eaque totam. Quidem, perferendi. perferendis.
        </div>
      </div>
    </div>
  );
}

export default Learners;
