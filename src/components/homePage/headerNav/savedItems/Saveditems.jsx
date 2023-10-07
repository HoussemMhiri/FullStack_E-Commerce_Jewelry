import React, { useState } from "react";
import "./SavedItems.css";
import Badge from "@mui/material/Badge";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Saveditems = () => {
  const { savedQtity } = useSelector((state) => state.savedReducer);

  return (
    <div className="saved">
      <Link className="links hh" to={"/saved"}>
        <Badge badgeContent={savedQtity} color="primary">
          <FavoriteBorderIcon />
        </Badge>
      </Link>
    </div>
  );
};

export default Saveditems;
