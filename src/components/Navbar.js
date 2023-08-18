import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';
import { useState } from 'react';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const togglMenu = () => {
    setToggle((prev) => !prev);
  };

  const login = () => {
    if (localStorage.getItem('user')) {
      return true;
    }
    return false;
  };

  return (
    <header>
      <nav className="navbar">
        <NavLink to="/" className="logo"><img src="logo.png" alt="logo" /></NavLink>
        <button onClick={togglMenu} type="button" className="menu-toggle" id="mobile-menu">
          <span className="bar" />
          <span className="bar" />
        </button>
        <ul className={`navigations ${toggle === true ? 'active' : ''}`}>
          {login() && (
            <>
              <li className="nav-item">
                <NavLink to="/" exact className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')} onClick={togglMenu}>DOCTORS</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/my-reservations" className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')} onClick={togglMenu}>MY RESERVATIONS</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/add-doctors" className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')} onClick={togglMenu}>ADD DOCTORS</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/reserve" className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')} onClick={togglMenu}>RESERVE</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/delete" className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')} onClick={togglMenu}>DELETE DOCTORS</NavLink>
              </li>
            </>
          )}
          {!login() && (
            <>
              <li className="nav-item">
                <NavLink to="/signup" className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')} onClick={togglMenu}>SIGN UP</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/login" className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')} onClick={togglMenu}>LOGIN</NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
