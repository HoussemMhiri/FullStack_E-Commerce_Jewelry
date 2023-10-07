import React from "react";
import "./adminLogout.css";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
const AdminLogOut = () => {
  function menuToggle() {
    const toggleMenu = document.querySelector(".menu");
    toggleMenu.classList.toggle("active");
  }

  const handleLogoutClick = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <div className="allContainer-logout">
      <div className="action">
        <div className="profile" onClick={menuToggle}>
          <img
            src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
            alt=""
          />
        </div>
        <div className="menu">
          <h3>
            Houssem Mhiri <br />
            <span>RoyalGems Admin</span>
          </h3>

          <ul>
            <li>
              <AccountCircleOutlinedIcon className="img_icon" />
              <a href="#">My Profile</a>
            </li>
            <li>
              <EditOutlinedIcon className="img_icon" />
              <a href="#">Edit Profile</a>
            </li>
            <li>
              <MailOutlinedIcon className="img_icon" />
              <a href="#">Inbox</a>
            </li>
            <li>
              <SettingsOutlinedIcon className="img_icon" />
              <a href="#">Settings</a>
            </li>
            <li>
              <HelpOutlineOutlinedIcon className="img_icon" />
              <a href="#">Help</a>
            </li>
            <li>
              <LogoutOutlinedIcon className="img_icon" />
              <button className="logoutBtn" onClick={handleLogoutClick}>
                <a href="#">Logout</a>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminLogOut;
