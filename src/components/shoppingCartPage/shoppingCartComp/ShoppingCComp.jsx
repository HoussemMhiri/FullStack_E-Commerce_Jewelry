import React, { useEffect, useState } from "react";
import "./ShopCart.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ClearIcon from "@mui/icons-material/Clear";
import { deleteFromoCart, updateProdQunatity } from "../../../redux/actions";

const key = process.env.REACT_APP_STRIPE;
const ShoppingCComp = () => {
  const cart = useSelector((state) => state.cart);
  const { cartQuantity, products } = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);

  const navigate = useNavigate();
  const onToken = (token) => {
    setStripeToken(token);
  };

  const dispatch = useDispatch();
  const handlePlus = (productId) => {
    dispatch(updateProdQunatity(productId, 1));
  };

  const handleMinus = (productId) => {
    dispatch(updateProdQunatity(productId, -1));
  };

  useEffect(() => {
    const makeRequest = async () => {
      console.log("Inside useEffect 2");
      try {
        const { data } = await axios.post("/api/checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        });
        navigate("/success", { state: { data: data, cart: cart } });
      } catch (error) {
        console.log(error);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total, navigate]);

  return (
    <section className="shopComp-Sect">
      <div className="shopProd-cont">
        <div className="shopProd-cont-h3-btn">
          <button className="flesh-btn-SHOP">
            <p className="flesh-p-SHOP">Continue Shopping</p>
            <ArrowBackIosIcon
              className="arrow-right-SHOP"
              style={{ fontSize: "10px" }}
            />
          </button>
          <h3 className="shopProd-cont-h3">Shopping Bag</h3>
        </div>
        {!cartQuantity ? (
          <h3 className="emptyShopBag">Your shopping bag is empty.</h3>
        ) : (
          <>
            {cart.products.map((el) => (
              <div key={el.product._id} className="shopProd-cont-product">
                <button
                  onClick={() => dispatch(deleteFromoCart(el.product._id))}
                  className="delete-btn-card shopCartDelete"
                >
                  <ClearIcon />
                </button>
                <img src={el.product.imgs[0]} alt="" width={200} height={200} />
                <div className="shopProd-cont-desc">
                  <div className="prod-p">
                    <p className="prod-p-title">{el.product.title}</p>
                  </div>
                  <div className="shopProd-cont-desc-SizendQtity">
                    <div className="shopProd-cont-desc-Size">
                      <p className="shopProd-cont-desc-Size-title">Size</p>
                      <p className="shopProd-cont-desc-Size-p">{el.size}</p>
                    </div>
                    <div className="shopProd-cont-desc-Qtity">
                      <p className="qtity-word-shopCart">Qty</p>
                      <div className="shopProd-cont-desc-Qtity-btn">
                        <button
                          onClick={() => handleMinus(el.product._id)}
                          className="shopProd-cont-desc-Qtity-btnSign"
                        >
                          -
                        </button>
                        <p className="shopProd-cont-desc-Qtity-btn-num">
                          {el.productQuantity}
                        </p>
                        <button
                          onClick={() => handlePlus(el.product._id)}
                          className="shopProd-cont-desc-Qtity-btnSign"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="price-Cont">
                      <p className="shopCart-Price">Price</p>
                      <p className="shopCart-Price-Number">
                        {`£${el.product.price * el.productQuantity}`}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
      <div className="checkout-cont">
        <p className="checkout-cont-p">Order Summary</p>
        <div className="flexCheckout">
          <p className="flexCheckout-title">SubTotal</p>
          <p className="flexCheckout-price">£{cart.total}</p>
        </div>
        <div className="flexCheckout">
          <p className="flexCheckout-title">Estimated Shipping</p>
          <p className="flexCheckout-price">£5.90</p>
        </div>
        <div className="flexCheckout ">
          <p className="flexCheckout-title">Shipping Discount</p>
          <p className="flexCheckout-price">£-5.90</p>
        </div>
        <div className="flexCheckout total-fleshCH">
          <p className="flexCheckout-title">Total</p>
          <p className="flexCheckout-price">£{cart.total}</p>
        </div>
        <StripeCheckout
          name="RoyalGems"
          image="https://royalgems.shop/cdn/shop/files/Website_Header.jpg?height=80&pad_color=fff&v=1687541149&width=100"
          billingAddress
          shippingAddress
          description={`Your Total is £${cart.total}`}
          amount={cart.total * 100}
          token={onToken}
          stripeKey={key}
        >
          <button className="checkOutBtn">
            <p>Checkout</p>
          </button>
        </StripeCheckout>
        <p className="checkoutMsg">
          Enjoy complimentary delivery and returns on your order.
        </p>
      </div>
    </section>
  );
};

export default ShoppingCComp;
