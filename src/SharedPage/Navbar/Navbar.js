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
			.catch(error => {
				console.error(error);
			});
	};
	return (
		<div className="bg-gray-900">
			<div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
				<div className="relative flex items-center justify-between">
					<div className="flex items-center">
						<Link
							to="/"
							aria-label="P & A related Course"
							title="P & A related Course"
							className="inline-flex items-center mr-8">
							<img className="w-10  rounded-full" src={navbar} alt="" />
							<span className="ml-2 hidden sm:block text-xl font-bold tracking-wide text-gray-100 uppercase">
								Learning Web Development
							</span>
							<span
								title="Learning Web Development"
								className="ml-2 sm:hidden text-xl font-bold tracking-wide text-gray-100 uppercase">
								LWD
							</span>
						</Link>
						<ul className="flex items-center hidden space-x-8 lg:flex">
							<li>
								<Link
									to="/home"
									aria-label="Home"
									title="Home"
									className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400">
									Home
								</Link>
							</li>
							<li>
								<Link
									to="/courses"
									aria-label="Courses"
									title="Courses"
									className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400">
									Courses
								</Link>
							</li>
							<li>
								<Link
									to="/faqs"
									aria-label="FAQs"
									title="FAQs"
									className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400">
									FAQs
								</Link>
							</li>
							<li>
								<Link
									to="/blog"
									aria-label="Blog"
									title="Blog"
									className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400">
									Blog
								</Link>
							</li>
						</ul>
					</div>
					<div className="flex items-center justify-between gap-5">
						<div className="ml-4 pr-3 md:block hidden">
							<label
								for="default-toggle"
								class="inline-flex relative items-center cursor-pointer">
								<input
									type="checkbox"
									value=""
									id="default-toggle"
									class="sr-only peer"
								/>
								<div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
								<span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
									Toggle
								</span>
							</label>
						</div>
						<>
							{user?.uid ? (
								<div className="text-white flex items-center gap-3">
									<span className="hidden md:block">{user?.displayName}</span>
									<button
										onClick={handleLogOut}
										className="btn hidden sm:block btn-outline btn-success">
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
						<div className="cursor-pointer w-10">
							{user?.uid ? (
								<Link to="/profile">
									<img
										title={user.displayName}
										className="w-10 h-10  rounded-full"
										src={user?.photoURL}
										alt=""
									/>
								</Link>
							) : (
								<div title="No user found">
									<Link to="/profile">
										<FaUser />
									</Link>
								</div>
							)}
						</div>
					</div>
					<div className="lg:hidden z-50">
						<button
							aria-label="Open Menu"
							title="Open Menu"
							className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
							onClick={() => setIsMenuOpen(true)}>
							<svg className="w-5 text-gray-600" viewBox="0 0 24 24">
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
							<div className="absolute top-0 left-0 w-full">
								<div className="p-5 bg-white border rounded shadow-sm">
									<div className="flex items-center justify-between mb-4">
										<div>
											<Link
												to="/"
												aria-label="   P & A related Course"
												title="   P & A related Course"
												className="inline-flex items-center">
												<img
													className="w-10 rounded-full"
													src={navbar}
													alt=""
												/>
												<span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
													P & A related Course
												</span>
											</Link>
										</div>
										<div>
											<button
												aria-label="Close Menu"
												title="Close Menu"
												className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
												onClick={() => setIsMenuOpen(false)}>
												<svg className="w-5 text-gray-600" viewBox="0 0 24 24">
													<path
														fill="currentColor"
														d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
													/>
												</svg>
											</button>
										</div>
									</div>
									<nav>
										<ul className="space-y-4">
											<li>
												<Link
													to="/home"
													aria-label="Home"
													title="Home"
													className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
													Home
												</Link>
											</li>
											<li>
												<Link
													to="/courses"
													aria-label="Courses"
													title="Courses"
													className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
													Courses
												</Link>
											</li>
											<li>
												<Link
													to="/faqs"
													aria-label=" FAQs"
													title=" FAQs"
													className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
													FAQs
												</Link>
											</li>
											<li>
												<Link
													to="/blog"
													aria-label="Blog"
													title="Blog"
													className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
													Blog
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
															className="btn btn-outline btn-primary">
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
