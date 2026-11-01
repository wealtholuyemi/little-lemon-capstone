import { Link } from "react-router-dom";

export default function ConfirmationPage({ booking }) {
  if (!booking) {
    return <main id="main-content" className="confirmation-page"><div className="confirmation-card"><h1>No booking found</h1><p>Please make a reservation first.</p><Link className="button button-yellow" to="/booking">Book a table</Link></div></main>;
  }
  return (
    <main id="main-content" className="confirmation-page">
      <div className="confirmation-card">
        <div className="confirmation-icon" aria-hidden="true">✓</div>
        <p className="eyebrow">LITTLE LEMON · CHICAGO</p>
        <h1>You're on the list, {booking.name.split(" ")[0]}!</h1>
        <p className="confirmation-lead">Your reservation details are ready. We look forward to welcoming you.</p>
        <dl className="booking-summary">
          <div><dt>Date</dt><dd>{booking.date}</dd></div>
          <div><dt>Time</dt><dd>{booking.time}</dd></div>
          <div><dt>Guests</dt><dd>{booking.guests}</dd></div>
          <div><dt>Occasion</dt><dd>{booking.occasion}</dd></div>
          <div><dt>Email</dt><dd>{booking.email}</dd></div>
        </dl>
        <p className="form-note">This is a project demonstration. No real reservation has been sent to a restaurant.</p>
        <Link className="button button-dark" to="/">Back to home</Link>
      </div>
    </main>
  );
}