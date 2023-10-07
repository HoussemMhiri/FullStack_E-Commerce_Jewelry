import React from "react";
import "./ProdLindIt.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import More from "../../repetitiveComp/moreBtn/More";
import { useDispatch, useSelector } from "react-redux";
import { toggleSavedProduct } from "../../../redux/actions";
const ProductItem = ({ el }) => {
  const likeChange = (e) =>
    e.target.style.color !== "red"
      ? (e.target.style.color = "red")
      : (e.target.style.color = "");
  //Saved Items
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.savedReducer);
  const handleLikeClick = (el) => {
    // Dispatch the toggleSavedProduct action with product details
    dispatch(toggleSavedProduct(el._id, el.imgs[0], el.descProd, el.price));
  };

  // Function to check if a product is liked
  const isProductLiked = (el) => {
    return products.some((product) => product.id === el._id);
  };
  return (
    <div className="item-cont">
      {/* <div className="relative-img">
        <img src={el.img} alt="" width={348} height={348} />
      </div> */}

      <div key={el._id} className="absolute-cards">
        <Card style={{ width: "21.7rem" }}>
          <Link to={`/product/${el._id}`}>
            <Card.Img variant="top" src={el.imgs[0]} className="pdtsImg" />
          </Link>
          <button
            onClick={(e) => {
              likeChange(e);
              handleLikeClick(el);
            }}
            className={`liked ${
              isProductLiked(el) ? "active" : ""
            }`} /* "liked" */
          >
            <i className="fas fa-heart"></i>
          </button>
          <Card.Body>
            <p className="prodItem-Btn-p-des">{el.descProd}</p>

            <div className="prodItem-Btn-des">
              <p className="prodItem-Btn-p">£ {el.price}</p>
              {/* <SeeMore /> */}
              <Link to={`/product/${el._id}`}>
                <More />
              </Link>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default ProductItem;
