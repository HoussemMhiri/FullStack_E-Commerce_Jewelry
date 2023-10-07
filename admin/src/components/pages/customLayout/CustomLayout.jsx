import React from "react";
import TopBar from "../../topBar/TopBar";
import SideBar from "../../sidebar/SideBar";

const CustomLayout = ({ children }) => {
  return (
    <>
      <TopBar />
      <div className="container">
        <SideBar />

        {children}
      </div>
    </>
  );
};

export default CustomLayout;
