import { Dropdown } from "react-bootstrap";
import React from "react";

const DDowLang = () => {
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle
          style={{
            color: "black",
            fontSize: "14px",
            border: "none",
            fontWeight: "600",
          }}
          variant=""
          id="dropdown-basic"
        >
          Eng
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item
            style={{ borderBottom: "1px solid grey" }}
            href="#/action-1"
          >
            French
          </Dropdown.Item>
          <Dropdown.Item
            style={{ borderBottom: "1px solid grey" }}
            href="#/action-2"
          >
            Arabic
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3">Spanish</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default DDowLang;
