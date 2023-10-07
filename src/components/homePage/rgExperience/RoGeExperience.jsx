import React from "react";
import "./RoGeStyle.css";
import experData from "./RoGeData";
const RoGeExperience = () => {
  return (
    <section className="exper-sect">
      <h4 className="exper-title">The RoyalGems Experience</h4>
      <div className="exper-cont">
        {experData.map((el) => (
          <div key={el.id} className="exper-cont-one">
            <img src={el.img} width={328} height={328} alt="" />
            <div className="exper-p-cont">
              <p className="exper-pTitle">{el.title}</p>
              <p className="exper-p">{el.parag}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RoGeExperience;
