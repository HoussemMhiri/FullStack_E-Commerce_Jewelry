import React, { useState } from "react";
import "./LoginStyleComp.css";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../redux/actions";
import { Link, Navigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";
const LoginComp = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { loading, errors, users } = useSelector((state) => state.authReducer);
  const handleSubmit = (e) => {
    e.preventDefault();
    const signUser = {
      email,
      password,
    };
    dispatch(loginUser(signUser));
  };
  return (
    <section className="loginComp-contAll">
      {loading ? (
        <Spinner className="spin" animation="border" variant="info" />
      ) : /* localStorage.getItem("token") */ users?.token ? (
        <Navigate to={"/"} />
      ) : (
        <>
          <div className="loginComp-Sect">
            <div className="login-form">
              <h2 className="login-form-h2">Sign In</h2>
              <p className="login-form-p">
                Please sign in to your Tiffany Account.
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
                    <p style={{ color: "red" }}>Wrong credentials!</p>
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
                    <p style={{ color: "red" }}>Wrong credentials!</p>
                  ) : (
                    ""
                  )}
                </Form.Item>
                <Form.Item>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                  </Form.Item>

                  <a className="login-form-forgot" href="">
                    Forgot password
                  </a>
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    /*   style={{ backgroundColor: "black", color: "white" }} */
                  >
                    Sign In
                  </Button>

                  <div className="reg-now">
                    Or{" "}
                    <Link to={"/register"}>
                      <a href="" className="login-form-forgot">
                        register now!
                      </a>
                    </Link>
                  </div>
                </Form.Item>
              </Form>
            </div>
            <div className="img-login-container">
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

export default LoginComp;
