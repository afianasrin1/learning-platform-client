import React, { useRef } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

const CoursesDetails = () => {
  const {
    logo,
    coursesName,
    priceAll,
    pricePer,
    ratings,
    totalTime,
    videos,
    details,
  } = useLoaderData();
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const handlePremium = () => {
    toast.success(
      "Sorrry... Our course this not running , we will let you know ..."
    );
  };
  return (
    <div className=" flex lg:justify-start justify-center ">
      <div className="w-3/4 py-10 rounded overflow-hidden shadow-lg">
        <div ref={componentRef}>
          <img className="w-full h-48" src={logo} alt={coursesName} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2"> {coursesName}</div>
            <p className=" text-base">{details} </p>
          </div>
          <div className="flex justify-between px-6">
            <div>
              <p>videos: {videos}</p>
              <p>Time: {totalTime}</p>
              <p>Ratings: {ratings}</p>
            </div>
            <div>
              <p>Per price: {pricePer}</p>
              <p>Total price: {priceAll}</p>
            </div>
          </div>
        </div>
        <div className="px-6 pt-4 flex justify-center gap-4 pb-2">
          {" "}
          <button
            onClick={handlePremium}
            className="bg-purple-700 py-1 px-4 rounded text-white"
          >
            Premimum Courses
          </button>
          <button
            onClick={handlePrint}
            className="bg-purple-700 py-1 px-4 rounded text-white"
          >
            Dounload pdf
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoursesDetails;
