import React from "react";
import { Link } from "react-router-dom";
import errorImg from "../images/errorImg.jpg";
const ErrorPage = () => {
  return (
    <div className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <img src={errorImg} alt="" />
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl text-gray-600">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl mb-8">
            Sorry, this page isn't available.
          </p>
          <Link
            to="/"
            className="px-8 py-3 font-semibold rounded bg-red-200 text-gray-900"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
