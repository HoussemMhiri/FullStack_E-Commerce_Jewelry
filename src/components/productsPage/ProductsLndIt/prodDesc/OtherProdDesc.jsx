import React from "react";
import {
  neckPdtData,
  bracPdtData,
  earrPdtData,
  ringsPdtData,
} from "./otherProdData";
import "./otherProdStyle.css";
const OtherProdDesc = ({ cat }) => {
  return (
    <div className="neckPdtcsCont">
      {cat === "necklaces"
        ? neckPdtData.map((el) => (
            <div className="neckPdtcsDiv" key={el.id}>
              <img className="neckPdtcsImg" src={el.img} alt="" />
              <p>{el.title}</p>
            </div>
          ))
        : cat === "bracelets"
        ? bracPdtData.map((el) => (
            <div className="neckPdtcsDiv" key={el.id}>
              <img className="neckPdtcsImg" src={el.img} alt="" />
              <p>{el.title}</p>
            </div>
          ))
        : cat === "earrings"
        ? earrPdtData.map((el) => (
            <div className="neckPdtcsDiv" key={el.id}>
              <img className="neckPdtcsImg" src={el.img} alt="" />
              <p>{el.title}</p>
            </div>
          ))
        : cat === "rings"
        ? ringsPdtData.map((el) => (
            <div className="neckPdtcsDiv" key={el.id}>
              <img className="neckPdtcsImg" src={el.img} alt="" />
              <p>{el.title}</p>
            </div>
          ))
        : ""}
    </div>
  );
};

export default OtherProdDesc;
