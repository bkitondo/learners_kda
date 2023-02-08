import Link from "next/link";
import React from "react";

function FontAbout() {
  return (
    <div className="containe-retail-about">
      <div className="alert-msg-logo">
        <h2 className="title-logo">A propos</h2>
        <Link href="/">
          <p className="link-logo">Logo</p>
        </Link>
      </div>
    </div>
  );
}

export default FontAbout;
