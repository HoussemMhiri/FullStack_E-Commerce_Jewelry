import React from "react";
import FleshBtn from "../../repetitiveComp/fleshBTN/FleshBtn";
import "./Engagebaner.css";
import { Link } from "react-router-dom";
const EngageBanner = () => {
  return (
    <section className="engage-Sect-Cont">
      <div className="engage-Sect-desc">
        <h4 className="engage-Sect-title">Love Your Way</h4>
        <p className="engage-Sect-p">
          You’ll know who it’s for. You’ll know when it’s time. You’ll just
          know.
        </p>
        <Link className="links hh" to={`/products/engagement`}>
          <FleshBtn
            el={"Explore Love & Engagement"}
            style={{ width: "250px" }}
          />
        </Link>
      </div>
    </section>
  );
};

export default EngageBanner;
