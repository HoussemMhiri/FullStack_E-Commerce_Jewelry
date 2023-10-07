import React, { useState } from "react";
import "./loginStyle.css";
import { useDispatch, useSelector } from "react-redux";
import { loginAdmin } from "../../../redux/action";
import { Navigate, useNavigate } from "react-router-dom";
const LoginAdmin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { loading, errors } = useSelector((state) => state.adminReducer);
  /*  const handleSubmit = (e) => {
    e.preventDefault();
    const adminUser = {
      email,
      password,
    };
    dispatch(loginAdmin(adminUser));
  }; */
  const navigate = useNavigate(); // Initialize useNavigate
  const handleSubmit = async (e) => {
    e.preventDefault();
    const adminUser = {
      email,
      password,
    };

    await dispatch(loginAdmin(adminUser));

    if (!errors) {
      navigate("/");
    }
  };
  /*  const admin = JSON.parse(
    JSON.parse(localStorage.getItem("persist:persist-key")).adminReducer
  ).admin.user.isAdmin; */
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {errors ? <p className="errorAuth">{errors.msg}</p> : ""}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {errors ? <p className="errorAuth">{errors.msg}</p> : ""}
        <button type="submit">Login</button>
        {errors ? <p className="errorAuthMsg">You are not Authorized!</p> : ""}
      </form>
    </div>
  );
};

export default LoginAdmin;
