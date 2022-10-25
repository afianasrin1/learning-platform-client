import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";
import Footer from "../SharedPage/Footer/Footer";
import Header from "../SharedPage/Header/Header";
import LeftSideNavbar from "../SharedPage/LeftSideNavbar/LeftSideNavbar";

const Roots = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="flex">
        <div className="flex-1 w-36">
          <LeftSideNavbar />
        </div>
        <div className="flex-1 w-64">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Roots;
