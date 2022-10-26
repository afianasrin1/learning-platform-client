import { createBrowserRouter } from "react-router-dom";
import Roots from "../Layout/Roots";
import Blog from "../Pages/Blog/Blog";
import Courses from "../Pages/Courses/Courses";
import FAQs from "../Pages/FAQs/FAQs";
import DefaultPage from "../DefaultPage/DefaultPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Others/ErrorPage/ErrorPage";
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
      },
      {
        path: "/",
        element: <Courses />,
      },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/faqs", element: <FAQs /> },
      { path: "/blog", element: <Blog /> },
    ],
  },
]);
