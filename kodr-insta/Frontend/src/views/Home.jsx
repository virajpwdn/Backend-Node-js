import React, {useState} from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import { FiMenu } from "react-icons/fi";


const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar - Hidden on Mobile */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden p-4 bg-black text-white flex items-center">
          <FiMenu className="text-2xl cursor-pointer" onClick={toggleSidebar} />
          <h2 className="text-lg ml-3">Instagram</h2>
        </div>

        {/* Feed Section */}
        <Feed />
      </div>
    </div>
  );
};

export default Home;
