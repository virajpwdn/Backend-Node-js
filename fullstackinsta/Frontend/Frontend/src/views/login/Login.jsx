import React, { useState } from "react";
import "./loginstyle.css";
import axios from "axios";
import { useNavigate } from "react-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const loginHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/user/login", {
        email,
        password,
      })
      .then((response) => {
        setError("");
        localStorage.setItem("token", response.data.token);
        navigate("/profile");
        console.log("You are successfully logged in");
      })
      .catch((error) => {
        console.log(error.response.data.message);
        setError(error.response.data.message);
      });

    setEmail("");
    setPassword("");
  };

  return (
    <div className="login-container">
      <form onSubmit={loginHandler}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
        />
        <button className="login-submit-btn" type="submit">
          Login
        </button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
