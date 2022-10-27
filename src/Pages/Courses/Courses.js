import React from "react";
import { Outlet } from "react-router-dom";
import LeftSideNavbar from "../../SharedPage/LeftSideNavbar/LeftSideNavbar";

const Courses = () => {
	return (
		<div>
			<div className="flex">
				<div className="flex-auto hidden lg:block w-3/12">
					<LeftSideNavbar />
				</div>
				<div className="flex-auto w-9/12">
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default Courses;
