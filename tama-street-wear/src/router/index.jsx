import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../components/Root";
import Home from "../containers/Home";
import AboutUs from "../containers/AboutUs";
import ItemDetailContainer from "../containers/ItemDetailContainer";
import ItemListContainer from "../containers/ItemListContainer";
import ItemTrolleyContainer  from "../containers/ItemTrolleyContainer";

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
        path: "/category/:categoryId",
        element: <ItemListContainer/>,
      },
    
      {
        path: "/detail/:id",
        element: <ItemDetailContainer/>
        
      },
      
      {
        path: "/aboutUs",
        element: <AboutUs/>,
      },
      {
        path:"/cart",
        element: <ItemTrolleyContainer/>


    },

    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
