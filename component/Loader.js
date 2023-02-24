import React from "react";
import Image from "next/image";
import loagingImg from "../img/loader.gif";
import loagingImg2 from "../img/loader2.gif";
import loagingImg3 from "../img/loader3.gif";
import Header from "./Header";


function Loader() {
  return (
    <div className="loaderpage">
      {/* <Header /> */}
      <div className="text-loading">Loading...</div>
      <div>
        <div className="loader">
          <Image
            src={loagingImg3}
            alt="Picture of the author"
            width={150}
            height={150}
          />
        </div>
      </div>
    </div>
  );
}

export default Loader;
