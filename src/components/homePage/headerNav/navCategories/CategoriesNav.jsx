import React from "react";
import Jewlery from "./jewlery/Jewlery";
import Gifts from "./gifts/Gifts";
import "./CategNavStyle.css";
import Engagment from "./engagment/Engagment";

const CategoriesNav = () => {
  return (
    <div className="All-CategNav-Cont">
      <div>
        <Jewlery />
      </div>
      <div>
        <Gifts />
      </div>
      <div>
        <Engagment />
      </div>
    </div>
  );
};

export default CategoriesNav;
