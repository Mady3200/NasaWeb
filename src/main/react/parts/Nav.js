import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

// useNavigate
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();
    return (
        <nav className="navbar">
            <div className="nav-buttons">
                <button
                    onClick={() => navigate("/home")}
                    className="nav-button"
                    activeClassName="active"
                >
                    Home
                </button>
                <button
                    onClick={() => navigate("/main")}
                    className="nav-button"
                    activeClassName="active"
                >
                    Main
                </button>
            </div>
        </nav>
    );
};

export default NavBar;
