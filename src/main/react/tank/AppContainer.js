// import react and create a react temolate basic content with router outlet

import React from "react";

// outlet for router
import {Outlet} from "react-router-dom";

import NavBar from  "../parts/Nav"


export default function AppContainer() {
    return (
        <div>
            <NavBar/>
            <Outlet />
        </div>
    )
}