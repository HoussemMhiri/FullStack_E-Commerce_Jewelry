import React from "react";
import Lock from "../../../assets/Lock.mp4";
import "./VidSec.css";
import { Link } from "react-router-dom";

const VidSec = () => {
  return (
    <div className="vid-cont">
      <video className="myvid" src={Lock} autoPlay loop muted></video>
      <div className="vd-content">
        <h2>Love Lock</h2>
        <p>
          New RoyalGems lock designs mark the unbreakable bonds that inspire
          your life and work
        </p>
        <Link to={`/products/lock`}>
          <button className="shop-btn-vd-btn">
            <p className="shop-btn-vd-p"> Shop The Collection </p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default VidSec;
