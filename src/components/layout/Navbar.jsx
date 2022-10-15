import React from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-md navbar-light navbar-custom py-2">
      <h4 className="mr-auto">
        <Link to="/" className="nav-link" title="Homepage">
          <i className="fas fa-home"></i> Intro
        </Link>
      </h4>

      <ul className="navbar-nav">
        <li>
          <Link to="/portfolio" className="nav-link" title="My projects">
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="/background" className="nav-link" title="About me">
            Background
          </Link>
        </li>
      </ul>
    </nav>
  );
};

// Navbar.propTypes = {};

export default Navbar;
