import React from "react";
import "./FilterCompStyle.css";
import { useLocation } from "react-router-dom";

const FilterComp = ({ handleFilters, setSort }) => {
  return (
    <section className="allFilters-Cont">
      <div className="filter-Prod">
        <p className="filter-Prod-title">Filter by:</p>
        <div className="filter">
          <select
            className="filter-jewl"
            name="categories"
            id=""
            onChange={handleFilters}
          >
            <option className="filter-Title" value="" disabled selected>
              Jewellery
            </option>
            <option value="necklaces">necklaces</option>
            <option value="bracelets">bracelets</option>
            <option value="earrings">earrings</option>
            <option value="rings">rings</option>
          </select>
          <select
            className="filter-jewl"
            name="material"
            id=""
            onChange={handleFilters}
          >
            <option value="" disabled selected>
              Materials
            </option>
            <option value="gold">gold</option>
            <option value="silver">silver</option>
          </select>
          <select
            className="filter-jewl"
            name="gender"
            id=""
            onChange={handleFilters}
          >
            <option value="" disabled selected>
              Gender
            </option>
            <option value="men">men</option>
            <option value="women">women</option>
          </select>
        </div>
      </div>
      <div className="sort-Prod">
        <p className="filter-Prod-title">Sort by:</p>
        <div className="filter">
          <select
            className="filter-jewl"
            name="newest"
            id=""
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="newest" selected>
              newest
            </option>
            <option value="asc">Price (asc)</option>
            <option value="desc">Price (desc)</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default FilterComp;
