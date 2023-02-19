import React from "react";
import Footer from "../../component/Footer";
import Header from "../../component/Header";
import ModifyLearner from "../../component/ModifyLearner";

function modifyLearner({ oneLearner }) {
  return (
    <>
      <Header />
      <ModifyLearner oneLearner={oneLearner} />
      <Footer />
    </>
  );
}

export default modifyLearner;
