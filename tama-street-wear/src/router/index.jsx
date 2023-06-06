import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../components/Root";
import Home from "../containers/Home";
import Mens from "../containers/Mens";
import Womans from "../containers/Womans";
import SKNKS from "../containers/SKNKS";
import Accesories from "../containers/Accesories";
import AboutUs from "../containers/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <p>No Encontrado</p>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/Mens",
        element: <Mens/>,
      },
      {
        path: "/Womans",
        element: <Womans/>,
      },
      {
        path: "/Accesories",
        element: <Accesories/>,
      },
      {
        path: "/SKNKS",
        element: <SKNKS/>,
      },
      {
        path: "/AboutUs",
        element: <AboutUs/>,
      },

    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
