import React from "react";
import "./Homepage.css"; // assuming you have a CSS file for styling

export default function Homepage() {
    return (
        <div className="container">
            <div className="content">
                <h1>Homepage</h1>
                <div className="homepage-content">
                    <p>Homepage content</p>
                    <div className="links">
                        <a href="/main">Main</a>
                        <a href="/home">Home</a>
                        <a href="/">Empty</a>
                    </div>
                    <p>
                        This is Home page, you can go to <a href="/main">Main</a>
                    </p>
                </div>
            </div>
        </div>
    );
}