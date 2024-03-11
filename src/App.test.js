import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import BookingPage from "./BookingPage";

describe("BookingPage", () => {
  test("Form submission and alert display", () => {
    // Arrange
    render(<BookingPage />);

    const nameInput = screen.getByLabelText(/name/i);
    const phoneNumInput = screen.getByLabelText(/phone number/i);
    const guestsInput = screen.getByLabelText(/# of guests/i);
    const dateInput = screen.getByLabelText(/date/i);
    const timeInput = screen.getByLabelText(/time/i);
    const submitButton = screen.getByText(/book now/i);

    // Act
    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(phoneNumInput, { target: { value: "555-555-5555" } });
    fireEvent.change(guestsInput, { target: { value: "4" } });
    fireEvent.change(dateInput, { target: { value: "2024-03-10" } });
    fireEvent.change(timeInput, { target: { value: "12:00" } });
    fireEvent.click(submitButton);

    // Assert
    // Assert
    const confirmationMessage = screen.getByText((content, element) => {
      // Use a regex to match the dynamic part of the confirmation message
      const regex =
        /reservation confirmed for .+ on march 10, 2024 at 12:00 pm/i;
      const elementText = element.textContent || "";

      // Check if the element's text content matches the regex
      return regex.test(elementText);
    });

    expect(confirmationMessage).toBeInTheDocument();
  });
});
