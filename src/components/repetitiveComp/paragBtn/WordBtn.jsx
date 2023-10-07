import React from "react";
import "./WordBtn.css";
const WordBtn = ({ el }) => {
  return (
    <button className="word-btn">
      <p className="p-word-btn">{el}</p>
    </button>
  );
};

export default WordBtn;
