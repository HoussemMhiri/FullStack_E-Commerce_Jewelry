import React from "react";
import "./persoOtherStyle.css";
const PersoOtherDesc = () => {
  return (
    <div>
      <img
        className="persoImg-relative"
        src="https://media.tiffany.com/is/image/tiffanydm/BrowseGridHero_EngravableGifts_Desktop?$tile$&wid=2992&fmt=webp"
        alt=""
      />
      <div className="persoDesc-absol">
        <h3 className="title-PP-h3 ">Gifts to Personalise</h3>
        <p>
          Personalised jewellery and gifts are especially meaningful and become
          heirlooms over time. These necklace, bracelet and ring designs can be
          engraved, embossed or etched with a monogram, date or message to make
          it one of a kind.
        </p>
      </div>
    </div>
  );
};

export default PersoOtherDesc;
