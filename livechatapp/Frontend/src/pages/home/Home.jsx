import React from "react";
import "./style.css";
import Navigation from "./Navigation";
import Hero from "./Hero";

const Home = () => {
  return (
    <div className="bg-zinc-800 h-screen flex justify-between">
      <Navigation />
      <Hero />
    </div>
  );
};

export default Home;
