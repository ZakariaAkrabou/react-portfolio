import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { navLinks } from '../../data/Data';
import './navbar.css';

const Navbar = () => {
  // State for toggling menu
  const [showMenu, setShowMenu] = useState(false);

  // Function to toggle menu
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // Function to close menu
  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <nav>
      {/* Navigation links */}
      <ul className={`navlinks ${showMenu ? 'navlinks-show' : ''}`}>
        {navLinks.map(({ id, name, path, icon }) => (
          <li className="nav-item" key={id}>
            <NavLink
              to={path}
              className={({ isActive }) =>
                isActive ? 'nav-link navlinksActive' : 'nav-link'
              }
              onClick={closeMenu}
            >
              <span>
                <FontAwesomeIcon icon={icon} />
              </span>
              <h3>{name}</h3>
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Nav toggle button */}
      <div
        className={`nav-toggle ${showMenu ? 'nav-close' : ''}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
