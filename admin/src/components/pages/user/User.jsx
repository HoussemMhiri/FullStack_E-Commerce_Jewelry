import React from "react";
import "./user.css";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";

import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import MarkunreadMailboxOutlinedIcon from "@mui/icons-material/MarkunreadMailboxOutlined";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Spinner } from "react-bootstrap";
const User = () => {
  const location = useLocation();
  const userId = location.pathname.split("/")[2];
  const user = useSelector((state) =>
    state.userReducer?.users?.find((user) => user._id === userId)
  );
  const order = useSelector((state) =>
    state.ordersReducer?.orders?.find((order) => order.userId === userId)
  );
  const prodId = order?.products?.map((el) => el.productId);

  const product = useSelector((state) =>
    state.productsReducer?.products?.filter((product) => {
      return prodId?.some((ele) => {
        return ele === product._id;
      });
    })
  );

  return (
    <div className="user">
      <div className="userContainer">
        {user && order ? (
          <>
            <div className="userShow">
              <div className="userShowTop">
                <img
                  src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
                  alt=""
                  className="userShowImg"
                />
                <div className="userShowTopTitle">
                  <span className="userShowUsername">{user.username}</span>
                  <span className="userShowUserTitle">{user._id}</span>
                </div>
              </div>
              <div className="userShowBottom">
                <div className="Account_Details">
                  <span className="userShowTitle">Account Details</span>
                  <div className="userShowInfo">
                    <PermIdentityIcon className="userShowIcon" />
                    <span className="userShowInfoTitle">{user.username}</span>
                  </div>
                  <div className="userShowInfo">
                    <MailOutlineIcon className="userShowIcon" />
                    <span className="userShowInfoTitle">{user.email}</span>
                  </div>
                </div>
                <div className="Order_Details">
                  <span className="userShowTitle">Order Details</span>
                  {order.products.map((el) => (
                    <div key={el.productId}>
                      <div className="userShowInfo">
                        <FingerprintIcon className="userShowIcon" />
                        <span className="userShowInfoTitle">
                          {el.productId}
                        </span>
                      </div>

                      <div className="userShowInfo">
                        <ProductionQuantityLimitsIcon className="userShowIcon" />
                        <span className="userShowInfoTitle">{el.quantity}</span>
                      </div>
                    </div>
                  ))}

                  {product.map((el) => (
                    <div className="userShowInfo" key={el._id}>
                      <img src={el.imgs[0]} alt="" className="imgIcon" />
                      <span className="userShowInfoTitle">
                        {el.title.length > 30
                          ? el.title.slice(0, 24)
                          : el.title}
                      </span>
                    </div>
                  ))}

                  <div className="userShowInfo">
                    <PaidOutlinedIcon className="userShowIcon" />
                    <span className="userShowInfoTitle">£ {order.amount}</span>
                  </div>

                  <div className="userShowInfo">
                    <LocationSearchingIcon className="userShowIcon" />
                    <span className="userShowInfoTitle">
                      {" "}
                      {order.address.city} |{" "}
                      {order.address.country === "Tunisia"
                        ? "Tn"
                        : order.address.country}
                    </span>
                  </div>
                  <div className="userShowInfo">
                    <RoomOutlinedIcon className="userShowIcon" />
                    <span className="userShowInfoTitle">
                      {order.address.line1}
                    </span>
                  </div>
                  <div className="userShowInfo">
                    <MarkunreadMailboxOutlinedIcon className="userShowIcon" />
                    <span className="userShowInfoTitle">
                      {order.address.postal_code}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <Spinner animation="border" variant="info" />
        )}
      </div>
    </div>
  );
};

export default User;
