import { createBrowserRouter } from "react-router-dom";
import Roots from "../Layout/Roots";
import Blog from "../Pages/Blog/Blog";

import FAQs from "../Pages/FAQs/FAQs";
import DefaultPage from "../DefaultPage/DefaultPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Others/ErrorPage/ErrorPage";
import Category from "../Pages/Category/Category";
import Courses from "../Pages/Courses/Courses";
import TermsAndCondition from "../Others/TermsAndCondition/TermsAndCondition";
import Profile from "../Pages/Profile/Profile";
import PrivatesRoutes from "../Pages/PrivateRoutes/PrivatesRoutes";
import CoursesDetails from "../Pages/CoursesDetails/CoursesDetails";
import AllCourses from "../Pages/AllCourses/AllCourses";
import CheckOut from "../Pages/CheckOut/CheckOut";
import { async } from "@firebase/util";
export const router = createBrowserRouter([
	{
		path: "/",
		element: <Roots />,
		errorElement: <ErrorPage />,

		children: [
			{
				path: "/",
				element: <DefaultPage />,
			},
			{
				path: "/home",
				element: <DefaultPage />,
				loader: async () =>
					fetch(
						"https://learning-platform-server-side-three.vercel.app/courses"
					),
			},
			{
				path: "/courses/:id",

				element: <Courses />,
			},

			{ path: "/login", element: <Login /> },
			{ path: "/register", element: <Register /> },
			{ path: "/faqs", element: <FAQs /> },
			{ path: "/blog", element: <Blog /> },
			{ path: "/terms", element: <TermsAndCondition /> },
			{
				path: "/courses",
				element: <Courses />,
				children: [
					{
						path: "/courses/category/:id",
						element: <Category />,
						loader: ({ params }) =>
							fetch(
								`https://learning-platform-server-side-three.vercel.app/courses-categories/${params.id}`
							),
					},
					{
						path: "/courses/details/:id",
						element: (
							<PrivatesRoutes>
								{" "}
								<CoursesDetails />
							</PrivatesRoutes>
						),
						loader: async ({ params }) => {
							return fetch(
								`https://learning-platform-server-side-three.vercel.app/courses/${params.id}`
							);
						},
					},
					{
						path: "/courses/",
						element: <AllCourses />,
						loader: ({ params }) =>
							fetch(
								"https://learning-platform-server-side-three.vercel.app/courses"
							),
					},
				],
			},
			{
				path: "/profile",
				element: (
					<PrivatesRoutes>
						<Profile />
					</PrivatesRoutes>
				),
			},
			{
				path: "/checkout/:id",
				element: (
					<PrivatesRoutes>
						<CheckOut />
					</PrivatesRoutes>
				),
				loader: async ({ params }) =>
					fetch(
						`https://learning-platform-server-side-three.vercel.app/courses/${params.id}`
					),
			},
		],
	},
]);
