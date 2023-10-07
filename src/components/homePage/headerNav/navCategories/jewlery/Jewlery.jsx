import React from "react";
import "./jewlery.css";
import { Link } from "react-router-dom";
const Jewlery = () => {
  return (
    <div className="jewlery-Categ">
      <p className="JewleryNav-title">Jewellery</p>
      <div className="btns-Jew-Coll">
        <div className="neck-Div">
          <img
            src="https://media.tiffany.com/is/image/tiffanydm/Necklace_op3?$tile$&&fmt=webp"
            alt=""
            style={{ width: "220px", height: "220px" }}
          />
          <Link className="links" to={`/products/necklaces`}>
            <p className="parg-hover">Necklaces & Pendants</p>
          </Link>
        </div>
        <div className="neck-Div">
          <img
            src=" https://media.tiffany.com/is/image/tiffanydm/Rings?$tile$&&fmt=webp"
            alt=""
            style={{ width: "220px", height: "220px" }}
          />
          <Link className="links" to={`/products/rings`}>
            <p className="parg-hover">Rings</p>
          </Link>
        </div>
        <div className="neck-Div">
          <img
            src="https://media.tiffany.com/is/image/tiffanydm/Earrings?$tile$&&fmt=webp"
            alt=""
            style={{ width: "220px", height: "220px" }}
          />
          <Link className="links" to={`/products/earrings`}>
            <p className="parg-hover">Earrings</p>
          </Link>
        </div>
        <div className="neck-Div">
          <img
            src="https://media.tiffany.com/is/image/tiffanydm/Bracelet?$tile$&&fmt=webp"
            alt=""
            style={{ width: "220px", height: "220px" }}
          />
          <Link className="links" to={`/products/bracelets`}>
            <p className="parg-hover">Bracelets</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Jewlery;
