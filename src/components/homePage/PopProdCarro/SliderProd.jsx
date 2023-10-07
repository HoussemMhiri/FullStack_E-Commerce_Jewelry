import React, { useEffect } from "react";
import "./Slider.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ShopBtn from "../../repetitiveComp/shopBtnComp/ShopBtn";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, toggleSavedProduct } from "../../../redux/actions";
const SliderProd = () => {
  const { products } = useSelector((state) => state.prodReducer);

  const { products: savedProducts } = useSelector(
    (state) => state.savedReducer
  );
  const dispatch = useDispatch();

  // SAVED ITEMS
  const handleLikeClick = (el) => {
    // Dispatch the toggleSavedProduct action with product details
    dispatch(toggleSavedProduct(el._id, el.imgs[0], el.descProd, el.price));
  };

  // Function to check if a product is liked
  /*  const isProductLiked = (el) => {
    return savedProducts.some((product) => product.id === el._id);
  }; 
  ${isProductLiked(el) ? "active" : ""} */

  //
  useEffect(() => {
    dispatch(getProducts("lock"));
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const likeChange = (e) =>
    e.target.style.color !== "red"
      ? (e.target.style.color = "red")
      : (e.target.style.color = "");

  return (
    <section className="product-slider">
      <h2 className="slider-title">Most Popular Collection</h2>
      <Carousel responsive={responsive}>
        {products?.map((el) => (
          <div className="img-cont" key={el._id}>
            <Link to={`/product/${el._id}`}>
              <img
                className="imgCont-inImg"
                src={el.imgs[0]}
                alt=""
                width={346}
                height={346}
              />
            </Link>
            <button
              className={`liked`}
              onClick={(e) => {
                likeChange(e);
                handleLikeClick(el);
              }}
              /* className="liked" */
            >
              <i className="fas fa-heart"></i>
            </button>
          </div>
        ))}
      </Carousel>

      <div className="shop-btn-cont">
        {
          <Link to={`/products/lock`}>
            <ShopBtn el={"Shop Now"} />
          </Link>
        }
      </div>
    </section>
  );
};

export default SliderProd;
