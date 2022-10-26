import React from "react";
import { Link } from "react-router-dom";
import header from "../../images/header.jpg";
const Header = () => {
  return (
    <div className="relative bg-slate-100 flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src={header}
          alt=""
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-pink-800 uppercase rounded-full bg-teal-accent-400">
            welcome
          </p>
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            To visit
            <br className="hidden md:block" />
            our website
          </h2>
          <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
            To create highly skilled and diverse manpower for the programming
            And Architecture.
          </p>
          <div className="flex items-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-xl transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Get started
            </Link>
            <Link
              to="/"
              aria-label=""
              className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
