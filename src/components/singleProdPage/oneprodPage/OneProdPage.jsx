import React, { useEffect, useState } from "react";
import "./OneProdStyle.css";
import AddToCartBtn from "../../repetitiveComp/addToCart/AddToCartBtn";
import { Image } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  addToCart,
  getOneProduct,
  toggleSavedProduct,
} from "../../../redux/actions";
import { Spinner } from "react-bootstrap";
const OneProdPage = () => {
  const likeChange = (e) =>
    e.target.style.color !== "red"
      ? (e.target.style.color = "red")
      : (e.target.style.color = "");

  const { loading, product } = useSelector((state) => state.prodReducer);

  const location = useLocation();
  const prodId = location.pathname.split("/")[2];
  const [quantity, setQuantity] = useState(1);

  const [size, setSize] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOneProduct(prodId));
  }, [prodId]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else setQuantity(quantity + 1);
  };

  const handleClick = () => {
    /*  dispatch(addToCart(product, quantity, product.price)); */
    dispatch(addToCart(product, size, quantity, product.price));
  };
  //Saved Items
  const { products } = useSelector((state) => state.savedReducer);
  const handleLikeClick = (el) => {
    // Dispatch the toggleSavedProduct action with product details
    dispatch(toggleSavedProduct(el._id, el.imgs[0], el.descProd, el.price));
  };

  // Function to check if a product is liked
  const isProductLiked = (el) => {
    return products?.some((product) => product.id === el?._id);
  };

  return (
    <>
      {loading ? (
        <Spinner className="spin" animation="border" variant="info" />
      ) : (
        <section className="oneProdPage-sect">
          <div className="allImgs-oneProd-Cont">
            {product?.imgs?.map((el) => (
              <Image key={el._id} width={450} height={450} src={el} />
            ))}
          </div>
          <div className="addToBag-details-cont">
            <div className="addToBag-Desc-Cont">
              <div className="addToBag-imgs-Desc">
                <p className="addToBag-imgs-title">{product?.title}</p>
                <p className="addToBag-imgs-title-desc">{product?.descProd}</p>
              </div>
              <div className="addToBag-details">
                <div className="addToBag-saved-items">
                  <p className="addToBag-saved-items-p">Save Item</p>
                  <button
                    onClick={(e) => {
                      likeChange(e);
                      handleLikeClick(product);
                    }}
                    className={`liks ${
                      isProductLiked(product) ? "active" : ""
                    }`} /* "liks" */
                  >
                    <i className="fas fa-heart"></i>
                  </button>
                </div>
                <div className="addToBag-qtity">
                  <p className="addToBag-qtity-title">Quantity</p>
                  <div className="addToBag-qtity-btns-cont">
                    <button
                      onClick={() => handleQuantity("dec")}
                      className="addToBag-qtity-btns"
                    >
                      -
                    </button>
                    <p className="addToBag-qtity-btns-num">{quantity}</p>
                    <button
                      onClick={() => handleQuantity("inc")}
                      className="addToBag-qtity-btns"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="addToBag-size">
                  <p className="addToBag-size-p">Size</p>
                  <select
                    className="filter-Size"
                    name=""
                    id=""
                    onChange={(e) => setSize(e.target.value)}
                  >
                    <option
                      className="filter-Title"
                      value="choose"
                      disabled
                      selected
                    ></option>
                    <option value="medium">Medium</option>
                    <option value="small">Small</option>
                    <option value="large">Large</option>
                  </select>
                </div>
                <div className="addToBag-price">
                  <div className="prodItem-Btn-desc">
                    <p className="prodItem-Btn-p">£{product?.price}</p>
                    <AddToCartBtn handleClick={handleClick} />
                  </div>
                </div>
              </div>
            </div>
            <div className="details-oneProd-Cont">
              <p className="details-oneProd-title">Description & Details</p>
              <p className="details-oneProd-details">{product?.details}</p>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default OneProdPage;
