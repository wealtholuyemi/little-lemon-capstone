import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="brand" aria-label="Little Lemon home">
          <span className="brand-mark" aria-hidden="true">✳</span>
          <span>LITTLE <b>LEMON</b></span>
        </Link>
        <nav aria-label="Main navigation">
          <NavLink to="/">Home</NavLink>
          <a href="/#about">About</a>
          <a href="/#menu">Menu</a>
          <NavLink to="/booking" className="nav-book">Reservations</NavLink>
        </nav>
      </div>
    </header>
  );
}