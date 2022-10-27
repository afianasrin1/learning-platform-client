import React from "react";
import { Link } from "react-router-dom";

const CourseSummary = ({ courseSummary }) => {
	return (
		<div className="flex my-10 justify-center">
			<div className="bg-slate-800 max-w-xl  rounded overflow-hidden shadow-lg">
				<img
					className="w-full h-48"
					src={courseSummary.logo}
					alt={courseSummary.coursesName}
				/>
				<div className="px-6 py-4">
					<div className="font-bold text-xl mb-2">
						{" "}
						{courseSummary.coursesName}
					</div>
					<p className=" text-base">{courseSummary.details.slice(0, 100)}...</p>
				</div>
				<div className="px-6 pt-4 pb-2">
					{" "}
					<Link to={`/courses/details/${courseSummary.id}`}>
						<button className="bg-purple-700 py-1 px-4 rounded text-white">
							Details
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default CourseSummary;
