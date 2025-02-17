import React, { useState } from "react";
import "./registerstyle.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
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
        localStorage.setItem("token", response.data.token)
        navigate("/profile");

      })
      .catch((error) => {
        // console.log(error.response.data.error);
        setError(error.response.data.error);
      });

    setUsername("");
    setEmail("");
    setPassword("");
  };
  return (
    <main>
      <section className="register-view">
        <form onSubmit={submitHandler}>
          <label htmlFor="name">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Submit</button>
          {error && <p>{error}</p>}
        </form>
      </section>
    </main>
  );
};

export default Register;

// backend => localhost:3000
// forntend => localhost 5137
