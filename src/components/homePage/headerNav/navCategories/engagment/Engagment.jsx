import React from "react";
import "./Engagment.css";
import { Link } from "react-router-dom";

const Engagment = () => {
  return (
    <div className="Engage-nav-cont">
      <Link className="links hh" to={`/products/engagement`}>
        <p className="title-Engage-Nav">Love & Engagement</p>
      </Link>
      {/*   <div className="all-Engage-Prod-cont">
        <div className="one-Engage">
          <img
            src="https://media.tiffany.com/is/image/tiffanydm/2023-SDR_2x2-TILE3?$tile$&wid=1488&hei=1488&defaultImage=NoImageAvailableInternal&fmt=webp"
            alt="WomenEngage"
            style={{ width: "220px", height: "220px" }}
          />
          <p className="desc-engage">Women’s Wedding Rings</p>
        </div>
        <div className="one-Engage">
          <img
            src="https://media.tiffany.com/is/image/tiffanydm/L_E_2021_2x2_COUPLES_RINGS_V2_T_TWO?$tile$&wid=1488&hei=1488&defaultImage=NoImageAvailableInternal&fmt=webp"
            alt="MenEngage"
            style={{ width: "220px", height: "220px" }}
          />
          <p className="desc-engage">Men’s Wedding Rings</p>
        </div>
      </div> */}
    </div>
  );
};

export default Engagment;
