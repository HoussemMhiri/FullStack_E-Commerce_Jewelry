import React, { useState } from "react";
import "./RegisterStyle.css";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../../redux/actions";
import { Navigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";
const RegisterComp = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { loading, users, errors } = useSelector((state) => state.authReducer);
  console.log(users);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      username,
      email,
      password,
    };
    dispatch(registerUser(newUser));
  };

  return (
    <section className="registerComp-contAll">
      {loading ? (
        <Spinner className="spin" animation="border" variant="info" />
      ) : users ? (
        <Navigate to={"/login"} />
      ) : (
        <>
          <div className="registerComp-Sect">
            <div className="register-form">
              <h2 className="register-form-h2">Create an Account</h2>
              <p className="register-form-p">
                With a RoyalGems.com account, you can save time during checkout,
                access your shopping bag from any device and view your order
                history.
              </p>
              <Form
                onSubmitCapture={handleSubmit}
                name="normal_login"
                className="login-form"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
              >
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Username!",
                    },
                  ]}
                >
                  <label className="label-default" htmlFor="">
                    <p className="label-default-p">Name:</p>
                  </label>
                  <Input
                    className="inp-default"
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  {errors ? (
                    <p style={{ color: "red" }}>Please input your Username!</p>
                  ) : (
                    ""
                  )}
                </Form.Item>
                <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Email!",
                    },
                  ]}
                >
                  <label className="label-default" htmlFor="">
                    <p className="label-default-p">Email:</p>
                  </label>
                  <Input
                    className="inp-default"
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors ? (
                    <p style={{ color: "red" }}>
                      It should be a valid email address
                    </p>
                  ) : (
                    ""
                  )}
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Password!",
                    },
                  ]}
                >
                  <label className="label-default" htmlFor="">
                    <p className="label-default-p">Password:</p>
                  </label>
                  <Input
                    className="inp-default"
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {errors ? (
                    <p style={{ color: "red" }}>
                      The passwrod should be at least 6 characters
                    </p>
                  ) : (
                    ""
                  )}
                </Form.Item>
                <Form.Item>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <div className="check-parag">
                      <Checkbox></Checkbox>
                      <p className="check-parag-p">
                        I consent to receive RoyalGems. emails, text messages,
                        catalogues and other communications about jewelry,
                        watches, fragrance and other Rot products
                      </p>
                    </div>
                  </Form.Item>
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                  >
                    Register
                  </Button>
                </Form.Item>
              </Form>
            </div>
            <div className="img-register-container">
              <img
                src="https://www.tiffany.co.uk/shared/images/checkout/blue-box.jpg"
                alt=""
                width={500}
                height={500}
              />
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default RegisterComp;
