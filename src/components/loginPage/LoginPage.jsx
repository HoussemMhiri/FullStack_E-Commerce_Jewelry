import React from "react";
import HeaderNav from "../homePage/headerNav/HeaderNav";
import FooterSect from "../homePage/footer/FooterSect";
import LoginComp from "./loginComp/LoginComp";

const LoginPage = () => {
  return (
    <section>
      <HeaderNav />
      <div className="Login-Cont">
        <LoginComp />
      </div>
      <FooterSect />
    </section>
  );
};

export default LoginPage;
