import React from "react";
import "./HeaderNavStyle.css";
import SearchBar from "./searchBar/SearchBar";
import Badge from "@mui/material/Badge";
import RoomServiceOutlinedIcon from "@mui/icons-material/RoomServiceOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import UpperNav from "./upperNav/UpperNav";
import CategoriesNav from "./navCategories/CategoriesNav";
import Saveditems from "./savedItems/Saveditems";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import LogoutBtn from "./logInOutRegBtns/logoutBtn/LogoutBtn";
import LogRegBtn from "./logInOutRegBtns/logInRegis/LogRegBtn";
const HeaderNav = () => {
  const { cartQuantity } = useSelector((state) => state.cart);
  const { users } = useSelector((state) => state.authReducer);
  const handleLogoutClick = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <header>
      <UpperNav />

      <div className="headerNav">
        <div className="left-nav">
          <SearchBar />
          <Link style={{ color: "black", textDecoration: "none" }} to={"/care"}>
            <div className="clientCare">
              <RoomServiceOutlinedIcon />
              <p>Client Care</p>
            </div>
          </Link>
        </div>
        <div className="midd-nav">
          <Link to={"/"}>
            <img
              src="https://royalgems.shop/cdn/shop/files/Website_Header.jpg?height=628&pad_color=fff&v=1687541149&width=1200"
              alt=""
            />
          </Link>
        </div>

        <div className="right-nav">
          {users?.token ? (
            <LogoutBtn handleLogoutClick={handleLogoutClick} />
          ) : (
            <div style={{ display: "flex" }}>
              <Link className="links hh" to={"/register"}>
                {/*    <p style={{ marginRight: "1em" }}>REGISTER</p> */}
                <LogRegBtn name={"REGISTER"} />
              </Link>
              <Link className="links hh" to={"/login"}>
                {/* <p>SIGN IN</p> */}
                <LogRegBtn name={"LogIn"} />
              </Link>
            </div>
          )}
          <Saveditems />

          <Link className="shopCartIcon" to={`/cart`}>
            <div className="shopIcon">
              <Badge badgeContent={cartQuantity} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </div>
          </Link>
        </div>
      </div>
      <div className="nav-categories">
        <CategoriesNav />
      </div>
    </header>
  );
};

export default HeaderNav;
