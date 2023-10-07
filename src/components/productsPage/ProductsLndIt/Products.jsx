import React, { useEffect, useState } from "react";

import ProductItem from "./ProductItem";
import "./ProdLindIt.css";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../redux/actions";
import { Spinner } from "react-bootstrap";

const Products = ({ cat, filters, sort }) => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.prodReducer);

  const [filterdProducts, setFilterdProducts] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    dispatch(getProducts(cat));
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilterdProducts(
        products?.filter((el) =>
          Object.entries(filters).every(
            ([key, value]) => el[key] && el[key].includes(value)
          )
        )
      );
  }, [cat, products, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilterdProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilterdProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setFilterdProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort]);

  return (
    <div>
      {loading ? (
        <Spinner className="spin" animation="border" variant="info" />
      ) : (
        <section className="allProd-sect">
          {filterdProducts.map((el) => (
            <ProductItem key={el._id} el={el} />
          ))}
        </section>
      )}
    </div>
  );
};

export default Products;
