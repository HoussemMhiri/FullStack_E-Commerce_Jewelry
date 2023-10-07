import React from "react";
import HeaderNav from "../homePage/headerNav/HeaderNav";
import FooterSect from "../homePage/footer/FooterSect";
import ClCareComp from "./clientCareComp/ClCareComp";

const ClientCare = () => {
  return (
    <section>
      <HeaderNav />
      <ClCareComp />
      <FooterSect />
    </section>
  );
};

export default ClientCare;
