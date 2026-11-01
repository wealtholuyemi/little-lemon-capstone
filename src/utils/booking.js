export const availableTimes = ["12:00", "12:30", "13:00", "13:30", "14:00", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00"];

export function getTodayDate() {
  const today = new Date();
  const local = new Date(today.getTime() - today.getTimezoneOffset() * 60000);
  return local.toISOString().slice(0, 10);
}

export function validateBooking(values) {
  const errors = {};
  if (!values.date) errors.date = "Choose a reservation date.";
  else if (values.date < getTodayDate()) errors.date = "Choose today or a future date.";
  if (!values.time) errors.time = "Choose a reservation time.";
  if (!values.guests || Number(values.guests) < 1 || Number(values.guests) > 10) {
    errors.guests = "Choose between 1 and 10 guests.";
  }
  if (!values.name.trim()) errors.name = "Enter the name for the reservation.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = "Enter a valid email address.";
  return errors;
}