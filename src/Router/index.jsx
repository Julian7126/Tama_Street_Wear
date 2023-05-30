import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../components/Root";
import ItemListContainer from "../conteiners/ItemListContainer";
import ItemDetailContainer from "../conteiners/ItemDetailContainer";
import ItemTrolleyContainer from "../conteiners/ItemTrolleyContainer";

 

const router =createBrowserRouter([
                {
                    path: "/",                   
                    element: <Root/>,
                    errorElement: <p>No Encontrado</p>,
                    children:[
                        {
                            path:"/",
                            element:<ItemListContainer/>

                        },
                        {
                            path:"/category/:categoryId",
                            element:<ItemListContainer/>
                        },
                        {
                            path:"/detail/:id",
                            element: <ItemDetailContainer/>

                        },
                        {
                            path:"/cart",
                            element: <ItemTrolleyContainer/>
  

                        },
                    

                    ],


                    
                }



]);







const Router = () => {
    
  return (
  
  <RouterProvider router={router}/>
  
  )
};

export default Router;




