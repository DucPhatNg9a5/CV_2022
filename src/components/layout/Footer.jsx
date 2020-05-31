import React from "react";
// import PropTypes from 'prop-types'

const Footer = (props) => {
  return (
    <div className="footer">
      <a
        href="https://www.linkedin.com/in/ducphatnguyensait/"
        target="_blank"
        rel="noopener noreferrer"
        title="Linkedin"
      >
        <i className="fab fa-linkedin fa-2x"></i>
      </a>

      <a
        href="https://ducphatng9a5.github.io/CV/"
        target="_blank"
        rel="noopener noreferrer"
        title="My personal website"
      >
        <i className="fas fa-globe fa-2x"></i>
      </a>

      <a
        href="https://github.com/DucPhatNg9a5/"
        target="_blank"
        rel="noopener noreferrer"
        title="Github"
      >
        <i className="fab fa-github fa-2x"></i>
      </a>

      <p className="copyright footer-link">© 2020 Duc Phat Nguyen.</p>
    </div>
  );
};

// Footer.propTypes = {}

export default Footer;
