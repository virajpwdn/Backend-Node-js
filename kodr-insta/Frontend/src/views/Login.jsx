import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/v1/api/users/login", {email, password})

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
  };

  return (
    <div className="font-sans min-h-screen bg-[#03045e] w-screen flex items-center justify-center">
      <form
        onSubmit={submitHandler}
        className="bg-[#00b4d8] rounded-xl w-1/2 p-10 flex flex-col"
      >
        <div className="input-field flex flex-col">
          <label className="text-sm pl-1 text-white" htmlFor="email">
            Email:
          </label>
          <input
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            className="border p-1 outline-none rounded-sm border-zinc-700 hover:bg-amber-200"
            id="email"
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="input-field flex flex-col mt-4">
          <label className="text-sm pl-1 pb-2 text-white" htmlFor="password">
            Password:
          </label>
          <input
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            className="border p-1 outline-none rounded-sm border-zinc-700 hover:bg-amber-200"
            id="password"
            type="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <button
          className="bg-[#48cae4] rounded px-2 py-1 mt-5 cursor-pointer hover:bg-blue-500 transition"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
