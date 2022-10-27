import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNavbar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/courses-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="my-10 text-center">
      <h4 className="text-lg font-bold text-orange-400  hover:text-orange-800 ">
        All Category Courses:{categories.length}
      </h4>
      <div className="  text-slate-900">
        {categories.map((category) => (
          <li key={category.id}>
            <Link to={`/category/${category.id}`}>{category.coursesName}</Link>
          </li>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNavbar;
