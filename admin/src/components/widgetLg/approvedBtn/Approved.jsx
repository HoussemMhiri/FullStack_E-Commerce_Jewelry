import React from "react";
import "./approved.css";
import { Button, message } from "antd";
const Approved = ({ hnadleApproved }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "This is a prompt message with custom className and style",
      className: "custom-class",
      style: {
        marginTop: "20vh",
      },
    });
  };
  return (
    <div>
      {contextHolder}
      <Button className="complete-btn" onClick={hnadleApproved}>
        <i className="fas fa-check"></i>
      </Button>
    </div>
  );
};

export default Approved;
