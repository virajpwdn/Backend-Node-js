import axios from "axios";
import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/v1/api/users/register",
        {
          email,
          password,
          username,
        }
      );

      console.log(response);
      const token = response.data.token;
      localStorage.setItem("token", token);
    } catch (error) {
      console.log(error);
      setError(error);
    }

    console.log(email, " ", password);

    setEmail("");
    setPassword("");
    setUsername("");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-r from-[#4a148c] to-[#00bcd4] p-4">
      <form
        onSubmit={submitHandler}
        className="bg-white/20 backdrop-blur-md shadow-xl rounded-xl w-full max-w-md p-8 flex flex-col border border-white/30"
      >
        <h2 className="text-white text-3xl font-bold text-center mb-6">Create Account</h2>

        <div className="input-field flex flex-col mb-4">
          <label className="text-sm text-white" htmlFor="email">
            Email:
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 bg-white/30 text-white placeholder-gray-200 rounded-md outline-none focus:ring-2 focus:ring-cyan-300 transition-all"
            id="email"
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="input-field flex flex-col mb-4">
          <label className="text-sm text-white" htmlFor="username">
            Username:
          </label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 p-2 bg-white/30 text-white placeholder-gray-200 rounded-md outline-none focus:ring-2 focus:ring-cyan-300 transition-all"
            id="username"
            type="text"
            placeholder="Enter your username"
            required
          />
        </div>

        <div className="input-field flex flex-col mb-4">
          <label className="text-sm text-white" htmlFor="password">
            Password:
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 p-2 bg-white/30 text-white placeholder-gray-200 rounded-md outline-none focus:ring-2 focus:ring-cyan-300 transition-all"
            id="password"
            type="password"
            placeholder="Enter your password"
            required
          />
        </div>

        <button
          className="mt-4 w-full py-2 bg-cyan-400 text-white font-semibold rounded-md shadow-md hover:bg-cyan-500 transition"
          type="submit"
        >
          Sign Up
        </button>

        {error && <p className="text-red-400 mt-3 text-center">{error.message}</p>}
      </form>
    </div>
  );
};

export default Register;
