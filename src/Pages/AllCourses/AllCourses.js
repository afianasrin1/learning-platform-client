import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseSummary from "../CourseSummary/CourseSummary";

const AllCourses = () => {
	const allCourses = useLoaderData();

	return (
		<div className="grid xl:grid-cols-3 lg:grid-cols-2 lg:pr-20 gap-5">
			{allCourses.map(course => (
				<CourseSummary key={course.id} courseSummary={course} />
			))}
		</div>
	);
};

export default AllCourses;
