import React from 'react';
import { Link } from 'react-router-dom';
import '../Header.css'; // Ensure the correct path to your CSS file

function Header() {
  return (
    <header className="header">
      <div className="header-content"> {/* New wrapper div */}
        <div className="header-title">Jacob Smith</div>
        <nav>
          <ul className="nav-list">
            <li>
              <Link to="/about" className="navListItem">About Me</Link>
            </li>
            <li>
              <Link to="/portfolio" className="navListItem">Portfolio</Link>
            </li>
            <li>
              <Link to="/contact" className="navListItem">Contact</Link>
            </li>
            <li>
              <Link to="/resume" className="navListItem">Resume</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;