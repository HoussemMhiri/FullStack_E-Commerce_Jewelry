import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Result } from "antd";
import { useSelector } from "react-redux";
import axios from "axios";

const SuccessPage = () => {
  const location = useLocation();
  const dataStripe = location.state.data;
  const cart = location.state.cart;

  console.log(location);
  const { users } = useSelector((state) => state.authReducer);
  const [orderId, setOrderId] = useState(null);
  useEffect(() => {
    const createOrder = async () => {
      const token = JSON.parse(
        JSON.parse(localStorage.getItem("persist:persist-key")).authReducer
      ).users.token;

      const config = {
        headers: {
          Authorization: token,
        },
      };
      try {
        const { data } = await axios.post(
          "/api/orders",
          {
            userId: users.user.id,
            username: users.user.username,
            products: cart.products.map((el) => ({
              productId: el.product._id,
              quantity: el.productQuantity,
            })),
            amount: cart.total,
            address: dataStripe.billing_details.address,
          },
          config
        );

        setOrderId(data._id);
      } catch (error) {
        console.log(error);
      }
    };
    dataStripe && createOrder();
  }, [cart, dataStripe, users]);
  const subTitle = orderId
    ? `Your order number is: ${orderId}. Thank you for your purchase!`
    : "Your order is being prepared. Please wait for further updates.";
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Result
        status="success"
        title={
          orderId
            ? "Order Created Successfully"
            : "Order Processing in Progress"
        }
        subTitle={subTitle}
        extra={[
          <Link key={Math.random()} to={"/"}>
            <Button type="primary" key="console">
              Go to Homepage
            </Button>
          </Link>,
        ]}
      />
    </div>
  );
};

export default SuccessPage;
