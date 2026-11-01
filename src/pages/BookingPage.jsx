import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { availableTimes, getTodayDate, validateBooking } from "../utils/booking";

const initialValues = { date: getTodayDate(), time: "", guests: "2", occasion: "Birthday", name: "", email: "", requests: "" };

export default function BookingPage({ onBooking }) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  function updateField(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validateBooking(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    onBooking({ ...values });
    navigate("/confirmation");
  }

  return (
    <main id="main-content" className="booking-page">
      <div className="booking-intro"><p className="eyebrow">LITTLE LEMON · CHICAGO</p><h1>Book your table</h1><p>Pick a date, choose a time and let us take care of the rest.</p></div>
      <form className="booking-form" onSubmit={handleSubmit} noValidate>
        <div className="form-grid">
          <div className="field">
            <label htmlFor="date">Choose date <span aria-hidden="true">*</span></label>
            <input id="date" name="date" type="date" min={getTodayDate()} value={values.date} onChange={updateField} aria-invalid={Boolean(errors.date)} aria-describedby={errors.date ? "date-error" : undefined} />
            {errors.date && <small className="error" id="date-error">{errors.date}</small>}
          </div>
          <div className="field">
            <label htmlFor="time">Choose time <span aria-hidden="true">*</span></label>
            <select id="time" name="time" value={values.time} onChange={updateField} aria-invalid={Boolean(errors.time)} aria-describedby={errors.time ? "time-error" : undefined}>
              <option value="">Select a time</option>{availableTimes.map((time) => <option key={time} value={time}>{time}</option>)}
            </select>
            {errors.time && <small className="error" id="time-error">{errors.time}</small>}
          </div>
          <div className="field">
            <label htmlFor="guests">Number of guests <span aria-hidden="true">*</span></label>
            <select id="guests" name="guests" value={values.guests} onChange={updateField} aria-invalid={Boolean(errors.guests)} aria-describedby={errors.guests ? "guests-error" : undefined}>
              {Array.from({ length: 10 }, (_, index) => <option key={index + 1} value={index + 1}>{index + 1} {index === 0 ? "guest" : "guests"}</option>)}
            </select>
            {errors.guests && <small className="error" id="guests-error">{errors.guests}</small>}
          </div>
          <div className="field">
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" name="occasion" value={values.occasion} onChange={updateField}><option>Birthday</option><option>Anniversary</option><option>Date night</option><option>Business meal</option><option>Other</option></select>
          </div>
          <div className="field">
            <label htmlFor="name">Your name <span aria-hidden="true">*</span></label>
            <input id="name" name="name" type="text" autoComplete="name" placeholder="Full name" value={values.name} onChange={updateField} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} />
            {errors.name && <small className="error" id="name-error">{errors.name}</small>}
          </div>
          <div className="field">
            <label htmlFor="email">Email address <span aria-hidden="true">*</span></label>
            <input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" value={values.email} onChange={updateField} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} />
            {errors.email && <small className="error" id="email-error">{errors.email}</small>}
          </div>
          <div className="field field-full">
            <label htmlFor="requests">Special requests <span className="optional">(optional)</span></label>
            <textarea id="requests" name="requests" rows="3" placeholder="Accessibility needs, dietary notes, or anything else we should know..." value={values.requests} onChange={updateField} />
          </div>
        </div>
        <p className="form-note">Fields marked with * are required. This demo confirms your booking locally; it does not contact a restaurant server.</p>
        <button className="button button-yellow submit-button" type="submit">Confirm reservation <span aria-hidden="true">→</span></button>
      </form>
    </main>
  );
}