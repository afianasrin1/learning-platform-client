import { createBrowserRouter } from "react-router-dom";
import Roots from "../Layout/Roots";
import Blog from "../Pages/Blog/Blog";
import Courses from "../Pages/Courses/Courses";
import FAQs from "../Pages/FAQs/FAQs";
import DefaultPage from "../DefaultPage/DefaultPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Others/ErrorPage/ErrorPage";
import Category from "../Pages/Category/Category";
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
        loader: () => fetch("Data.json"),
      },
      {
        path: "/",
        element: <Courses />,
        loader: ({ params }) => fetch(`categories.json/${params.id}`),
      },
      {
        path: "/category/:id",
        element: <Category />,
      },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/faqs", element: <FAQs /> },
      { path: "/blog", element: <Blog /> },
    ],
  },
]);
