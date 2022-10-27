import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import navbar from "../../images/navbar.jpg";
import { FaUser } from "react-icons/fa";
import LeftSideNavbar from "../LeftSideNavbar/LeftSideNavbar";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div class="bg-gray-900">
      <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div class="relative flex items-center justify-between">
          <div class="flex items-center">
            <Link
              to="/"
              aria-label="P & A related Course"
              title="P & A related Course"
              class="inline-flex items-center mr-8"
            >
              <img className="w-10 rounded-full" src={navbar} alt="" />
              <span class="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                P & A related Course
              </span>
            </Link>
            <ul class="flex items-center hidden space-x-8 lg:flex">
              <li>
                <Link
                  to="/home"
                  aria-label="Home"
                  title="Home"
                  class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  aria-label="Courses"
                  title="Courses"
                  class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  to="/faqs"
                  aria-label="FAQs"
                  title="FAQs"
                  class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  aria-label="Blog"
                  title="Blog"
                  class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <>
              {user?.uid ? (
                <div className="text-white">
                  <span>{user?.displayName}</span>
                  <button
                    onClick={handleLogOut}
                    className="btn btn-outline btn-primary"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="text-white">
                  <Link to="/login"> Login </Link>
                  <Link to="/register"> Register </Link>
                </div>
              )}
            </>
            <Link to="/profile">
              {user?.photoURL ? (
                <img style={{ height: "30px" }} src={user?.photoURL} alt="" />
              ) : (
                <FaUser className="text-white"></FaUser>
              )}
            </Link>
          </div>
          <div className="lg:hidden z-50">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div class="absolute top-0 left-0 w-full">
                <div class="p-5 bg-white border rounded shadow-sm">
                  <div class="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        to="/"
                        aria-label="   P & A related Course"
                        title="   P & A related Course"
                        class="inline-flex items-center"
                      >
                        <img
                          className="w-10 rounded-full"
                          src={navbar}
                          alt=""
                        />
                        <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          P & A related Course
                        </span>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul class="space-y-4">
                      <li>
                        <Link
                          to="/home"
                          aria-label="Home"
                          title="Home"
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/courses"
                          aria-label="Courses"
                          title="Courses"
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Courses
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/faqs"
                          aria-label=" FAQs"
                          title=" FAQs"
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          FAQs
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/blog"
                          aria-label="Blog"
                          title="Blog"
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Blog
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/login"
                          aria-label="Login"
                          title="Login"
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Login
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/register"
                          class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                          aria-label="Register"
                          title="Register"
                        >
                          Register
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/register"
                          class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                          aria-label="Register"
                          title="Register"
                        >
                          Register
                        </Link>
                      </li>
                    </ul>
                    <div>
                      <>
                        {user?.uid ? (
                          <>
                            <span>{user?.displayName}</span>
                            <button
                              onClick={handleLogOut}
                              className="btn btn-outline btn-primary"
                            >
                              Logout
                            </button>
                          </>
                        ) : (
                          <>
                            <Link to="/login"> Login </Link>
                            <Link to="/register"> Register </Link>
                          </>
                        )}
                      </>
                      <Link to="/profile">
                        {user?.photoURL ? (
                          <img
                            style={{ height: "30px" }}
                            src={user?.photoURL}
                            alt=""
                          />
                        ) : (
                          <FaUser className="text-white"></FaUser>
                        )}
                      </Link>
                    </div>
                    <div>
                      <LeftSideNavbar></LeftSideNavbar>
                    </div>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
