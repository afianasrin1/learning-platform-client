import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../SharedPage/Navbar/Navbar";
import Footer from "../SharedPage/Footer/Footer";

import LeftSideNavbar from "../SharedPage/LeftSideNavbar/LeftSideNavbar";

const Roots = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <div className="flex-auto hidden lg:block w-3/12">
          <LeftSideNavbar />
        </div>
        <div className="flex-auto w-9/12">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Roots;
