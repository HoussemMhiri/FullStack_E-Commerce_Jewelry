import React from "react";
import "./topbar.css";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import AdminLogOut from "./adminLogout/AdminLogOut";

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <Link className="dashAdmin" to={"/"}>
            {/*  <p>RoyalGems Admin Dashboard</p> */}
            <img
              src="/images/Asset 1@3x.png"
              alt=""
              height={"50px"}
              style={{ marginTop: "20px", marginLeft: "50px" }}
            />
          </Link>
        </div>
        <div className="topRight">
          <div className="all3Icons">
            <div className="topbarIconsContainer">
              <NotificationsNoneIcon />
              <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconsContainer">
              <LanguageIcon />
            </div>
            <div className="topbarIconsContainer">
              <SettingsIcon />
            </div>
          </div>

          {/*  <img
            src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
            alt=""
            className="topAvatar"
          /> */}
          <AdminLogOut />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
