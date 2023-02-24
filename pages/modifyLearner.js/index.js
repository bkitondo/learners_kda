import React from "react";
import Footer from "../../component/Footer";
import ModifyLearner from "../../component/ModifyLearner";
import Headers from "../../component/Hearders"

function modifyLearner({ oneLearner }) {
  return (
    <>
      <Headers />
      <ModifyLearner oneLearner={oneLearner} />
      <Footer />
    </>
  );
}

export default modifyLearner;

export async function getServerSideProps() {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  return {
    props: {},
  };
}
