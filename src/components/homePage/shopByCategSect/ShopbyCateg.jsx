import React from "react";
import "./ShopByCategStyle.css";
import WordBtn from "../../repetitiveComp/paragBtn/WordBtn";
import ShopCategData from "./ShopbyCategData";
import { Link } from "react-router-dom";
const ShopbyCateg = () => {
  return (
    <section className="shop-Categ-sect">
      <h4 className="shop-Categ-title">Shop by Category</h4>
      <p className="shop-Categ-p">
        Brilliant design and unparalleled craftsmanship.
      </p>
      <div className="categ-shop-cont">
        {ShopCategData.map((el) => (
          <div key={el.id} className="one-categ">
            <img
              src={el.img}
              style={{ borderRadius: 10 }}
              alt=""
              width={220}
              height={220}
            />
            <Link className="links hh" to={`/products/${el.cat}`}>
              <div>
                <WordBtn el={el.btnName} />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopbyCateg;
