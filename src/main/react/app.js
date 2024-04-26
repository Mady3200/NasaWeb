import React, {Component} from "react";
import ReactDom from "react-dom/client";
import AppContainer from "./tank/AppContainer"
import Homepage from "./tank/Homepage"
import MainPage from "./tank/MainPage"
import {createBrowserRouter, RouterProvider} from "react-router-dom"

const router = createBrowserRouter([
    {
        path:"/",
        element:<AppContainer />,
        children: [
            {
              index: true,
              element: <div> Empty Page </div>
            },
            {
                path:"Home",
                element:<Homepage />
            },
            {
                path:"main",
                element:<MainPage />
            }
        
        ]
    }

])


ReactDom.createRoot(document.getElementById('app')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)