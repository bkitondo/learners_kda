import React, { useState } from "react";
import Image from "next/image";
import ImageMain from "../img/main.jpg";
import Link from "next/link";
import ListItemLearner from "../component/ListItemLearner";

function Learners({ learners }) {
  console.log("allLearner => ", learners);
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
      <div className="learners-pub">
        <div className="learnerAleatoir">
          <div className="container-learner">
            {learners.map((list) => {
              return (
                <ListItemLearner
                  key={list.id}
                  id={list._id}
                  option={list.option}
                  desc={list.description}
                  imagesss={list.image}
                  promotion={list.promotion}
                  contact ={list.contact}
                  email={list.email}
                  status={list.status}
                  
                />
              );
            })}
          </div>
        </div>
        {/* <div className="learnerAleatoir">
          <div className="container-learner">
            <Link href="/retail" className="blog-learner">
              <Image
                src={ImageMain}
                alt="image of main page"
                className="leaner-img"
              />
              <div className="title-learner">
                Specialiiste en Markint Digital
              </div>
              <div className="learner-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                dignissimos eaque totam. Quidem, perferendi. perferendis.
              </div>
              <div className="retail">retail</div>
            </Link>
          </div>
        </div> */}
        <div className="publicity">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          dignissimos eaque totam. Quidem, perferendi. perferendis.
        </div>
      </div>
    </div>
  );
}

export default Learners;
