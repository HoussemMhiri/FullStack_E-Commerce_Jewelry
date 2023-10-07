import React from "react";
import HeaderNav from "../homePage/headerNav/HeaderNav";
import FooterSect from "../homePage/footer/FooterSect";
import SavedItemsComp from "./SavedItemsComp/SavedItemsComp";

const SavedProdPage = () => {
  return (
    <section>
      <HeaderNav />
      <div className="SavedItemsPage-Cont">
        <SavedItemsComp />
      </div>
      <FooterSect />
    </section>
  );
};

export default SavedProdPage;
