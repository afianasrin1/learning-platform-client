import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseSummary from "../CourseSummary/CourseSummary";

const Category = () => {
	const categoryCourses = useLoaderData();

	return (
		<div>
			<CourseSummary courseSummary={categoryCourses} />
		</div>
	);
};

export default Category;
