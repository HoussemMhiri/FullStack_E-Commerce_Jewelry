import React from "react";
import "./Likes.css";

const Liked = () => {
  const likeChange = (e) =>
    e.target.style.color !== "red"
      ? (e.target.style.color = "red")
      : (e.target.style.color = "");
  return (
    <button onClick={(e) => likeChange(e)} className="likes">
      <i className="fas fa-heart"></i>
    </button>
  );
};

export default Liked;
