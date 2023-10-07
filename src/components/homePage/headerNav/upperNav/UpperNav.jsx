import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import DDowLang from "../dropDownLang/DDowLang";
const UpperNav = () => {
  return (
    <div className="upper-Header">
      <div className="left-Upper-nav">
        <LocalPhoneIcon style={{ fontSize: "18px" }} />
        <p>28035320</p>
      </div>
      <div className="Midd-Upper-nav">
        <p>Discover Your Inner Crown</p>
      </div>
      <div className="right-Upper-nav">
        <DDowLang />
      </div>
    </div>
  );
};

export default UpperNav;
