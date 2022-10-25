import { createBrowserRouter } from "react-router-dom";
import Roots from "../Layout/Roots";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
