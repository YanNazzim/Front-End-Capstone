import React, { useState } from "react";

const BookingPage = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [phoneNum, setPhoneNum] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Parse the input date to a JavaScript Date object
    const parsedDate = new Date(date);

    // Format the date as "Month, DD, YYYY"
    const formattedDate = new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(parsedDate);

    // Parse the input time to a JavaScript Date object (only considering the time part)
    const parsedTime = new Date(`1970-01-01T${time}`);

    // Format the time in 12-hour format
    const formattedTime = parsedTime.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });

    // Confirmation and subheading messages
    const confirmationMessage = `Reservation confirmed for ${name} on ${formattedDate} at ${formattedTime}`;
    const subheadingMessage =
      "You will receive a text message 2 hours before the reservation.";

    // Show the alert
    alert(`${confirmationMessage}\n\n${subheadingMessage}`);
  };

  return (
    <div>
      <h2 id="bookTableh2">Book a Table</h2>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name..."
          required
        />

        <label htmlFor="phoneNum">Phone Number:</label>
        <input
          type="text"
          id="phoneNum"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          value={phoneNum}
          onChange={(e) => setPhoneNum(e.target.value)}
          placeholder="Enter phone number..."
          required
          title="Format: ###-###-####"
        />

        <label htmlFor="#ofGuests"># of Guests:</label>
        <input
          type="number"
          min="1"
          max="8"
          id="guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          placeholder="#"
          required
        />

        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <label htmlFor="time">Time:</label>
        <input
          type="time"
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          step="1800"
          required
        />

        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default BookingPage;
