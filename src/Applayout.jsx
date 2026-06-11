import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import "./applayout.css";
function Applayout() {
  return (
    <div className="layout">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Applayout;
