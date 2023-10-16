import React, { useState } from "react";
import "./SearchBarS.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useNavigate } from "react-router-dom";
const SearchBar = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const searchSubmitHandler = (e) => {
    e.preventDefault();
    navigate(keyword.trim() ? `/products/${keyword}` : "/products");
  };
  return (
    <form className="input-container" onSubmit={searchSubmitHandler}>
      <SearchOutlinedIcon className="icon" />
      <input
        type="text"
        name="text"
        className="input"
        placeholder="Search RoyalGems"
        onChange={(e) => setKeyword(e.target.value)}
      />
    </form>
  );
};

export default SearchBar;
