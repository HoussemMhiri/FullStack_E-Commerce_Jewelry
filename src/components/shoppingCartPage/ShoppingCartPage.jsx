import React from "react";
import HeaderNav from "../homePage/headerNav/HeaderNav";
import FooterSect from "../homePage/footer/FooterSect";
import ShoppingCComp from "./shoppingCartComp/ShoppingCComp";

const ShoppingCartPage = () => {
  return (
    <section>
      <HeaderNav />
      <div className="Register-Cont">
        <ShoppingCComp />
      </div>
      <FooterSect />
    </section>
  );
};

export default ShoppingCartPage;
