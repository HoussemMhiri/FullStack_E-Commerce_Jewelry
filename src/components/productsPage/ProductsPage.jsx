import React, { useState } from "react";
import HeaderNav from "../homePage/headerNav/HeaderNav";
import Products from "./ProductsLndIt/Products";
import FooterSect from "../homePage/footer/FooterSect";
import ShopBtn from "../repetitiveComp/shopBtnComp/ShopBtn";
import "./ProductPageStyle.css";
import FilterComp from "../repetitiveComp/filterComp/FilterComp";
import { Link, useLocation } from "react-router-dom";
import ProductDesc from "./ProductsLndIt/prodDesc/ProductDesc";
const ProductsPage = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];

  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };
  console.log(filters);

  return (
    <section>
      <HeaderNav />
      <div className="title-PP-Desc">
        <h3 className="title-PP-h3">
          {cat === "giftsForHer"
            ? "Gifts For Her"
            : cat === "giftsForHim"
            ? ""
            : cat === "engagement"
            ? ""
            : cat === "lock"
            ? ""
            : cat === "personalise"
            ? ""
            : `${cat[0].toUpperCase()}${cat.slice(1)}`}
        </h3>
        <div className="title-PP-p">
          <ProductDesc cat={cat} />
        </div>
      </div>
      <div className="filters-cont">
        <FilterComp handleFilters={handleFilters} setSort={setSort} />
      </div>
      <div>
        <Products cat={cat} filters={filters} sort={sort} />
      </div>
      <div className="back-pdtPage-btn">
        <Link to="/">
          <ShopBtn el={"Back To Home"} />
        </Link>
      </div>
      <FooterSect />
    </section>
  );
};

export default ProductsPage;
