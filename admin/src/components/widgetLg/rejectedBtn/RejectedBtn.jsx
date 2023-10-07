import React from "react";
import "./rejectedStyle.css";
import { Button, message } from "antd";
const RejectedBtn = ({ hnadleApproved }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const error = () => {
    messageApi.open({
      type: "error",
      content: "This is an error message",
      style: {
        marginTop: "20vh",
      },
    });
  };
  return (
    <div>
      {contextHolder}
      <Button className="reject-btn" onClick={hnadleApproved}>
        <i className="fas fa-xmark"></i>
      </Button>
    </div>
  );
};

export default RejectedBtn;
