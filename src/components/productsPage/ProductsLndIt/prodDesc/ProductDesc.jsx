import React from "react";
import OtherProdDesc from "./OtherProdDesc";
import GfhOtherSec from "./gfhPdtOtherSec/GfhOtherSec";
import GfhimPdts from "./gfhimOtherPdtDesc/GfhimPdts";
import EngageOtherDesc from "./engageOtherDesc/EngageOtherDesc";
import LockOtherDesc from "./lockOtherDesc/LockOtherDesc";
import PersoOtherDesc from "./personOtherDesc/PersoOtherDesc";

const ProductDesc = ({ cat }) => {
  return (
    <div>
      {cat === "lock" ? (
        <LockOtherDesc />
      ) : cat === "giftsForHer" ? (
        <GfhOtherSec />
      ) : cat === "giftsForHim" ? (
        <GfhimPdts />
      ) : cat === "engagement" ? (
        <EngageOtherDesc />
      ) : cat === "personalise" ? (
        <PersoOtherDesc />
      ) : (
        <OtherProdDesc cat={cat} />
      )}
    </div>
  );
};

export default ProductDesc;
