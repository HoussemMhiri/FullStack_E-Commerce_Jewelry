import React from "react";
import "./GiftsBoth.css";
import FleshBtn from "../../repetitiveComp/fleshBTN/FleshBtn";
import { Link } from "react-router-dom";
const GiftsHerhim = () => {
  return (
    <section className="Gifts-Both-cont">
      <div className="for-her">
        <img
          src="https://media.tiffany.com/is/image/tiffanydm/2023-SO_GIFTS-LP-50-50-ONFIG3-Desktop?$tile$&wid=1088&hei=1360&fmt=webp"
          width={"512px"}
          height={"640px"}
          alt=""
        />

        <h2 className="gifts-title">Gifts For Her</h2>

        <Link to={`/products/giftsForHer`}>
          <div className="arrow-btn-flex">
            <FleshBtn el={"Shop Now"} />
          </div>
        </Link>
      </div>
      <div className="for-him">
        <img
          src="https://media.tiffany.com/is/image/tiffanydm/2023-SO_GIFTS-LP-50-50-ONFIG8-Desktop?$tile$&wid=1088&hei=1360&fmt=webp"
          width={"512px"}
          height={"640px"}
          alt=""
        />
        <h2 className="gifts-title">Gifts For Him</h2>
        <Link to={`/products/giftsForHim`}>
          <div className="arrow-btn-flex">
            <FleshBtn el={"Shop Now"} />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default GiftsHerhim;
