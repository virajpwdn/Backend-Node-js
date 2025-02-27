import React from "react";
import { BrowserRouter as Browser, Route, Routes } from "react-router-dom";
import Login from "../views/Login";
import Register from "../views/Register";
import Profile from "../views/Profile";
import Protected from "../components/protected";
import Home from "../views/Home";

const routes = () => {
  return (
    <div>
      <Browser>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/profile"
            element={
              <Protected>
                <Profile />
              </Protected>
            }
          />
          <Route
            path="/home"
            element={
              <Protected>
                <Home />
              </Protected>
            }
          />
        </Routes>
      </Browser>
    </div>
  );
};

export default routes;
