import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNavbar = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		fetch(
			"https://learning-platform-server-side-three.vercel.app/courses-categories"
		)
			.then(res => res.json())
			.then(data => setCategories(data));
	}, []);
	return (
		<div className="my-10 w-72   pl-20">
			<h4 className="text-lg font-bold text-orange-400  hover:text-orange-800 ">
				All Category Courses:{categories.length}
			</h4>
			<div className="  text-slate-900">
				{categories.map(category => (
					<div key={category.id}>
						<Link
							className="text-gray-300 hover:text-red-400"
							to={`/courses/category/${category.id}`}>
							{category.coursesName}
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default LeftSideNavbar;
