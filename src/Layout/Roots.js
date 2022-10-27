import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../SharedPage/Navbar/Navbar";
import Footer from "../SharedPage/Footer/Footer";

const Roots = () => {
	return (
		<div>
			<Navbar />
			<Outlet />
			<Footer />
		</div>
	);
};

export default Roots;
