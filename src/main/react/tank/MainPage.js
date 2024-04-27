import React, { useEffect, useState } from "react";
import useMainPageStore from "../stateManagement/store";
import Card from "../parts/Card";

import "./MainPage.css";

export default function MainPage() {
    const {
        selectedOption,
        count,
        date,
        startDate,
        endDate,
        data,
        setSelectedOption,
        setCount,
        setDate,
        setStartDate,
        setEndDate,
        fetchData, // Get the fetchData function from the store
    } = useMainPageStore();

    const handleSubmit = (e) => {
        e.preventDefault();
        let queryParams = {};

        if (selectedOption === "count") {
            queryParams = { count };
        } else if (selectedOption === "date") {
            queryParams = { date };
        } else if (selectedOption === "between_dates") {
            queryParams = { start_date: startDate, end_date: endDate };
        }

        // Call fetchData function from the store
        fetchData(queryParams);
    };

    // if data is null, set date to current date and fetch data
    useEffect(() => {
        if (data === null) {
            const currentDate = new Date();
            const formattedDate = currentDate.toISOString().split("T")[0];
            setDate(formattedDate);
            fetchData({ date: formattedDate });
        }
    }, [data]);

    return (
        <div>
            <h1
             style={{ textAlign: "center" }}
            >MainPage</h1>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="option">Select an option:</label>
                        <select
                            id="option"
                            value={selectedOption}
                            onChange={(e) => setSelectedOption(e.target.value)}
                        >
                            <option value="count">Count</option>
                            <option value="date">Date</option>
                            <option value="between_dates">Between Dates</option>
                        </select>
                    </div>

                    {selectedOption === "count" && (
                        <div className="form-group">
                            <label htmlFor="count">Enter count:</label>
                            <input
                                type="number"
                                id="count"
                                value={count}
                                onChange={(e) => setCount(e.target.value)}
                            />
                        </div>
                    )}
                    {selectedOption === "date" && (
                        <div className="form-group">
                            <label htmlFor="date">Select date:</label>
                            <input
                                type="date"
                                id="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </div>
                    )}
                    {selectedOption === "between_dates" && (
                        <div className="form-group">
                            <label htmlFor="startDate">Start date:</label>
                            <input
                                type="date"
                                id="startDate"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                            />
                            <label htmlFor="endDate">End date:</label>
                            <input
                                type="date"
                                id="endDate"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                            />
                        </div>
                    )}

                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className="card-container">
                {/* Map through the data array and render Card component for each item */}
                {data && data.map((item, index) => (
                    <Card key={index} data={item} />
                ))}
            </div>
        </div>
    );
}
