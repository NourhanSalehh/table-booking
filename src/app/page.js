"use client";

import { useState } from "react";
import BookingForm from "./Components/BookingForm";
import AvailabilityDisplay from "./components/AvailabilityDisplay";
import BookingSummary from "./components/BookingSummary";

export default function BookingPage() {
  const [formData, setFormData] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState("");

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot);
  };

  return (
    <div className=" main container mx-auto p-4">
      <main className="overlay" ></main>
      <h1 className="text-2xl font-bold mb-4">Restaurant Table Booking</h1>
      {!formData ? (
        <BookingForm onSubmit={handleFormSubmit} />
      ) : !selectedSlot ? (
        <AvailabilityDisplay
          date={formData.date}
          onSelectSlot={handleSlotSelect}
        />
      ) : (
        <BookingSummary details={{ ...formData, time: selectedSlot }} />
      )}
    </div>
  );
}
