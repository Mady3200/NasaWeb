import React from "react";
import "./Homepage.css"; // assuming you have a CSS file for styling
// useNavigate
import {useNavigate} from "react-router-dom";


export default function Homepage() {
    const navigate = useNavigate();
    return (
        <div className="container">
            <div className="content">
                <h1>Homepage</h1>
                <div className="homepage-content">
                    <p>Homepage content</p>
                    <div className="links">
                        <a onClick={() => navigate("/main")} >Main</a>
                        <a onClick={() => navigate("/")} >Home</a>
                        <a onClick={() => navigate("/empty")} >Empty</a>
                    </div>
                    <p>
                        This is Home page, you can go to <a onClick={() => navigate("/main")}>Main</a>
                    </p>
                </div>
            </div>
        </div>
    );
}