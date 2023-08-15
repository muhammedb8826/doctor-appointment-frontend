import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => (
  <header>
    <nav className="navbar">
      <Link to="/" className="logo"><img src="logo.png" alt="logo" /></Link>
      <ul className="links">
        <li className="link-item">
          <Link to="/">DOCTORS</Link>
        </li>
        <li className="link-item">
          <Link to="/my-reservations">MY RESERVATIONS</Link>
        </li>
        <li className="link-item">
          <Link to="/add-doctors">ADD DOCTORS</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
