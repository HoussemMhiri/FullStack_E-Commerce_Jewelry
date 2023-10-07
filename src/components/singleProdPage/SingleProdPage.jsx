import React, { useEffect } from "react";
import HeaderNav from "../homePage/headerNav/HeaderNav";
import FooterSect from "../homePage/footer/FooterSect";
import OneProdPage from "./oneprodPage/OneProdPage";

const SingleProdPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section>
      <HeaderNav />
      <div className="One-ProdPage-Cont">
        <OneProdPage />
      </div>
      <FooterSect />
    </section>
  );
};

export default SingleProdPage;
