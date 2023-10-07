import React from "react";
import "./GiftsCateg.css";
import { Link } from "react-router-dom";

const Gifts = () => {
  return (
    <div className="Gifts-nav-cont">
      <p className="title-Gifts-Nav">Gifts</p>

      <div className="all-Gifts-Prod-cont">
        <div className="one-Gift">
          <img
            src="https://media.tiffany.com/is/image/tiffanydm/HW-On-FigMktgTile-1?$tile$&wid=1488&hei=1488&defaultImage=NoImageAvailableInternal&fmt=webp"
            alt="WomenGift"
            style={{ width: "220px", height: "220px" }}
          />
          <Link className="links hh" to={`/products/giftsForHer`}>
            <p className="desc-gifts">Gifts For Her</p>
          </Link>
        </div>
        <div className="one-Gift">
          <img
            src="https://www.thomassabo.com/dw/image/v2/AAQY_PRD/on/demandware.static/-/Sites-ts-master-catalog/default/dw1b09347f/product/T/TR/TR2332/TR2332-045-2_mm1.png?sw=328&sfrm=png"
            alt="MenGift"
            style={{ width: "220px", height: "220px" }}
          />
          <Link className="links hh" to={`/products/giftsForHim`}>
            <p className="desc-gifts">Gifts For Him</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Gifts;
