import { createBrowserRouter } from "react-router-dom";
import Roots from "../Layout/Roots";
import Blog from "../Pages/Blog/Blog";

import FAQs from "../Pages/FAQs/FAQs";
import DefaultPage from "../DefaultPage/DefaultPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Others/ErrorPage/ErrorPage";
import Category from "../Pages/Category/Category";
// import CoursesDetails from "../Pages/CoursesDetails/CoursesDetails";
import Courses from "../Pages/Courses/Courses";
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
        loader: async () => fetch("http://localhost:5000/courses"),
      },
      {
        path: "/courses/:id",

        loader: async ({ params }) => {
          return fetch(`http://localhost:5000/courses/${params.id}`);
        },
        element: <Courses />,
      },
      {
        path: "/category/:id",
        element: <Category />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/courses-categories/1${params.id}`),
      },

      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/faqs", element: <FAQs /> },
      { path: "/blog", element: <Blog /> },
    ],
  },
]);
