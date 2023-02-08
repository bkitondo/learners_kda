import React from "react";
import Image from "next/image";
import ImageMain from "../img/main.jpg";
import Link from "next/link";

function Learners() {
  return (
    <div className="container">
      <div className="msg-alert">
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
            <div className="blog-learner">
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
            </div>
          </div>
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
          <div className="container-learner">
            <div className="blog-learner">
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
            </div>
          </div>
          <div className="container-learner">
            <div className="blog-learner">
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
            </div>
          </div>
          <div className="container-learner">
            <div className="blog-learner">
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
            </div>
          </div>
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
