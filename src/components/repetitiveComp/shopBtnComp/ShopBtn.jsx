import React from "react";
import "./shopBtn.css";

const ShopBtn = ({ el }) => {
  return (
    <button className="Shop-Btn">
      <p className="shop-btn-p">{el}</p>
    </button>
  );
};

export default ShopBtn;
