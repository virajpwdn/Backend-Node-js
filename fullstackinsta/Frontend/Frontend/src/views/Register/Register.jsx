import React, { useState } from "react";
import "./registerstyle.css";
import axios from "axios";
import { useNavigate } from "react-router";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const registerSubmitHandler = (e) => {
    e.preventDefault();

    axios
      .post(
        "http://localhost:3000/user/register",
        {
          username,
          email,
          password,
        },
        { withCredentials: true }
      )
      .then((response) => {
        setError("");
        localStorage.setItem("token", response.data.token)
        navigate("/profile");
      })
      .catch((error) => {
        setError(error.response.data.error);
        console.log(error.response.data.error);
      });

    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="register-main">
      <div className="container">
        <form onSubmit={registerSubmitHandler}>
          <label htmlFor="username">username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="email">email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter you password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn-submit" type="submit">
            Submit
          </button>
          {error && <p>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Register;
