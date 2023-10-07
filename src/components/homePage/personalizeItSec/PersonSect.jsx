import React from "react";

import "./PersonSectStyle.css";
import FleshBtn from "../../repetitiveComp/fleshBTN/FleshBtn";
import { Link } from "react-router-dom";
const PersonSect = () => {
  return (
    <section className="person-Sect-Cont">
      <div className="person-Sect-desc">
        <h4 className="person-Sect-title">Gifts to Personalise</h4>
        <p className="person-Sect-p">
          Personalised jewellery and gifts are especially meaningful and become
          heirlooms over time. These necklace, bracelet and ring designs can be
          engraved, embossed or etched with a monogram, date or message to make
          it one of a kind
        </p>
        <Link className="links hh" to={`/products/personalise`}>
          <FleshBtn el={"Personalise It"} style={{ width: "110px" }} />
        </Link>
      </div>
    </section>
  );
};

export default PersonSect;
