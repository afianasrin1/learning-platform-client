import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import Courses from "../Courses/Courses";

const Home = () => {
  const courses = useContext(AuthContext);
  console.log(courses);
  return (
    <div className="md:px-20 bg-slate-50 pt-5 ">
      <div className="grid gap-10 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 px-10 ">
        {/* {courses.map((course) => (
          <Courses key={course.id} course={course}></Courses>
        ))} */}
      </div>
    </div>
  );
};

export default Home;
