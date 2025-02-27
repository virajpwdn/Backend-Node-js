import React, { useState } from "react";
import { FiMenu, FiHome, FiUser, FiLogOut } from "react-icons/fi";

const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <div
          className={`fixed top-0 left-0 h-full bg-black text-white w-64 p-5 transform ${
            isOpen ? "translate-x-0" : "-translate-x-64"
          } md:translate-x-0 transition-transform duration-300 ease-in-out z-50`}
        >
          <h2 className="text-xl font-bold mb-6">Instagram</h2>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 cursor-pointer hover:text-gray-400">
              <FiHome /> Home
            </li>
            <li className="flex items-center gap-2 cursor-pointer hover:text-gray-400">
              <FiUser /> Profile
            </li>
            <li className="flex items-center gap-2 cursor-pointer hover:text-gray-400">
              <FiLogOut /> Logout
            </li>
          </ul>
        </div>
      );
}

export default Sidebar