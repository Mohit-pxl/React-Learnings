import React, { Component } from "react";
import {createRoot} from "react-dom/client";
import {createBrowserRouter, RouterProvider,Outlet} from "react-router"
import Body from "./components/Body";
import Header from "./components/Header";
import About from "./components/About"
import Contact from "./components/Contact"
import RestaurantMenu from "./components/RestaurantMenu";




const AppLayout=()=>{
    return(
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    )
}

const router = createBrowserRouter([
    { path: "/", element: <AppLayout />,
        children:[
            {path:"/", element:<Body/>},
            {path:"/about", element:<About/>},
            {path:"/contact",element:<Contact/>},
            {path:"/resMenu/:resId",element:<RestaurantMenu/>}
        ]
     }
    
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);