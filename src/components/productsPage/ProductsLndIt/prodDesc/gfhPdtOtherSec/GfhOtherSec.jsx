import React from "react";
import "./GfhOtherSecStyle.css";
import { gfhPdtData } from "../otherProdData";
const GfhOtherSec = () => {
  return (
    <div>
      <p className="gfh-P">
        Today’s gift is tomorrow’s family heirloom. Explore our selection to
        find the perfect present.
      </p>
      <div className="neckPdtcsCont">
        {gfhPdtData.map((el) => (
          <div key={el.id} className="neckPdtcsDiv">
            <img className="neckPdtcsImg" src={el.img} alt="" />
            <p>{el.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GfhOtherSec;
