import React from "react";
import Header from "../Componenets/Header/Header";
import Sidebar from "../Componenets/Sidebar/Sidebar";
import "./Layout.css";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="side">
        <Sidebar />
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
