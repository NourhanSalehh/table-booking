"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function BookingForm({ onSubmit }) {
    const [formData, setFormData] = useState({
        date: new Date(),
        time: "",
        guests: 1,
        name: "",
        contact: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSubmit) onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
        <div>
            <label>Date:</label>
            <DatePicker
                selected={formData.date}
                onChange={(date) => setFormData({ ...formData, date })}
                className="border rounded"
            />
        </div>
        <div>
            <label>Time:</label>
            <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
            className="border rounded"
            />
        </div>
        <div>
            <label>Number of Guests:</label>
            <input
                type="number"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                min="1"
                required
                className="border rounded"
            />
        </div>
        <div>
            <label>Name:</label>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border rounded"
            />
        </div>
        <div>
            <label>Contact:</label>
            <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                required
                className="border rounded"
            />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Submit
        </button>
    </form>
);
}
