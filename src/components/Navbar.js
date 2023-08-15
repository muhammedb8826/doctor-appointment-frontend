import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import { useState } from 'react';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const togglMenu = () => {
    setToggle((prev) => !prev);
  };

  return (
    <header>
      <nav className="navbar">
        <Link to="/" className="logo"><img src="logo.png" alt="logo" /></Link>
        <button onClick={togglMenu} type="button" className="menu-toggle" id="mobile-menu">
          <span className="bar" />
          <span className="bar" />
        </button>
        <ul className={`navigations ${toggle === true ? 'active' : ''}`}>
          <li className="link-item">
            <Link to="/" onClick={togglMenu}>DOCTORS</Link>
          </li>
          <li className="link-item">
            <Link to="/my-reservations" onClick={togglMenu}>MY RESERVATIONS</Link>
          </li>
          <li className="link-item">
            <Link to="/add-doctors" onClick={togglMenu}>ADD DOCTORS</Link>
          </li>
          <li className="link-item">
            <Link to="/reserve" onClick={togglMenu}>RESERVE</Link>
          </li>
          <li className="link-item">
            <Link to="/delete" onClick={togglMenu}>DELETE DOCTORS</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
