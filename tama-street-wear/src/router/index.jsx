import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../components/Root";
import Home from "../containers/Home";
import Mens from "../containers/Mens";
import Womans from "../containers/Womans";
import SKNKS from "../containers/SKNKS";
import Accesories from "../containers/Accesories";
import AboutUs from "../containers/AboutUs";
import ItemDetailContainer from "../containers/ItemDetailContainer";

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
        path: "/mens",
        element: <Mens/>,
      },
      {
        path: "/womans",
        element: <Womans/>,
      },
      {
        path: "/accesories",
        element: <Accesories/>,
      },
      {
        path: "/sknks",
        element: <SKNKS/>,
      },
      {
        path: "/aboutUs",
        element: <AboutUs/>,
      },
      {
        path: "/detail/:id",
        element: <ItemDetailContainer/>
     
      },


    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
