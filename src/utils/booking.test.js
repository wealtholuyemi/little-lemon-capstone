import { describe, expect, it } from "vitest";
import { getTodayDate, validateBooking } from "./booking";

describe("booking validation", () => {
  const validBooking = {
    date: getTodayDate(),
    time: "18:00",
    guests: "2",
    name: "Alex Morgan",
    email: "alex@example.com"
  };

  it("accepts a complete valid booking", () => {
    expect(validateBooking(validBooking)).toEqual({});
  });

  it("requires a valid email address", () => {
    const errors = validateBooking({ ...validBooking, email: "not-an-email" });
    expect(errors.email).toBe("Enter a valid email address.");
  });

  it("rejects more than ten guests", () => {
    const errors = validateBooking({ ...validBooking, guests: "11" });
    expect(errors.guests).toBe("Choose between 1 and 10 guests.");
  });

  it("requires a reservation time", () => {
    const errors = validateBooking({ ...validBooking, time: "" });
    expect(errors.time).toBe("Choose a reservation time.");
  });

  it("requires a guest name", () => {
    const errors = validateBooking({ ...validBooking, name: " " });
    expect(errors.name).toBe("Enter the name for the reservation.");
  });
});