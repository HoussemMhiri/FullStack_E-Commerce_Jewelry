import React from "react";
import "./Engagment.css";
import { Link } from "react-router-dom";

const Engagment = () => {
  return (
    <div className="Engage-nav-cont">
      <Link className="links hh" to={`/products/engagement`}>
        <p className="title-Engage-Nav">Love & Engagement</p>
      </Link>
    </div>
  );
};

export default Engagment;
