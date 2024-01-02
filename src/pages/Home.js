import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Posts from "./Posts";

const Home = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <Posts />
    </div>
  );
};

export default Home;
