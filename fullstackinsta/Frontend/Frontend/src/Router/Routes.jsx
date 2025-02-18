import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "../views/Register/Register";
import Login from "../views/login/Login";
import Profile from "../views/Profile/Profile";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
