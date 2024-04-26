// import react and create a react temolate basic content with router outlet

import React from "react";

// outlet for router
import {Outlet} from "react-router-dom";


export default function AppContainer() {
    return (
        <div>
            <Outlet />
        </div>
    )
}