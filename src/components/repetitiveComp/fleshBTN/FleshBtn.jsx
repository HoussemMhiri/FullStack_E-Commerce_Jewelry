import React from "react";
import "./FleshBtn.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
const FleshBtn = ({ el, style }) => {
  return (
    <button className="flesh-btn-categ" style={style}>
      <p className="flesh-p-categ">{el}</p>
      <ChevronRightIcon className="arrow-right" style={{ fontSize: "20px" }} />
    </button>
  );
};

export default FleshBtn;
