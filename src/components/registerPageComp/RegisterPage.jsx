import React from "react";
import HeaderNav from "../homePage/headerNav/HeaderNav";
import FooterSect from "../homePage/footer/FooterSect";
import RegisterComp from "./registerComp/RegisterComp";

const RegisterPage = () => {
  return (
    <section>
      <HeaderNav />
      <div className="Register-Cont">
        <RegisterComp />
      </div>
      <FooterSect />
    </section>
  );
};

export default RegisterPage;
