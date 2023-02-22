import React, { useState } from "react";
import Header from "../../../component/Header";
import Footer from "../../../component/Footer";
import DisplayLeaner from "../../../component/AllLearner";
import Headers from "../../../component/Hearders";
import axios from "axios";

function Categories({ learners }) {
  // console.log("learners => >", learners);
  const optSmd = learners.filter(
    (learner) => learner.option === "Marketing Digital"
  );

  return (
    <>
      <Headers />
      <DisplayLeaner learnersSmd={optSmd} />
      <Footer />
    </>
  );
}

export default Categories;

export async function getServerSideProps() {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  const res = await axios.get("http://localhost:3000/api/learner/learnerApi");
  const learners = res.data.data;
  console.log(learners);

  return {
    props: { learners },
  };
}
