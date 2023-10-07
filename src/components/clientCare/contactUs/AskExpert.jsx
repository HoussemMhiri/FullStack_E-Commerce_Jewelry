import React from "react";
import "./askExpert.css";
import HeaderNav from "../../homePage/headerNav/HeaderNav";
import FooterSect from "../../homePage/footer/FooterSect";
import AskAnExpertComp from "./askAnExpertComp/AskAnExpertComp";
const AskExpert = () => {
  return (
    <section>
      <HeaderNav />
      <AskAnExpertComp />
      <FooterSect />
    </section>
  );
};

export default AskExpert;
