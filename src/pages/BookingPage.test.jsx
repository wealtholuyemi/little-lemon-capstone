import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BookingPage from "./BookingPage";

describe("BookingPage", () => {
  it("renders the reservation form fields", () => {
    render(<MemoryRouter><BookingPage onBooking={vi.fn()} /></MemoryRouter>);
    expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/your name/i)).toBeInTheDocument();
  });

  it("shows validation errors when required details are missing", () => {
    render(<MemoryRouter><BookingPage onBooking={vi.fn()} /></MemoryRouter>);
    fireEvent.click(screen.getByRole("button", { name: /confirm reservation/i }));
    expect(screen.getByText("Choose a reservation time.")).toBeInTheDocument();
    expect(screen.getByText("Enter the name for the reservation.")).toBeInTheDocument();
    expect(screen.getByText("Enter a valid email address.")).toBeInTheDocument();
  });
});