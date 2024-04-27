import React from "react";
import "./Card.css";

export default function Card({ data }) {
    return (
        <div className="card">
            {data.media_type === "image" ? (
                <img src={data.hdurl} alt={data.title} className="card-img" />
            ) : (
                <iframe src={data.url} title={data.title} className="card-iframe" />
            )}
            <div className="card-body">
                <h2 className="card-title">{data.title}</h2>
                <p className="card-date">{data.date}</p>
                <p className="card-explanation">{data.explanation}</p>
                <a href={data.hdurl} target="_blank" rel="noopener noreferrer" className="card-link">View Image</a>
            </div>
        </div>
    );
}