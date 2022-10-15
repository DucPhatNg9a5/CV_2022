import React, { Fragment } from "react";
import Sun from "../../img/sun.png";
import Mountain from "../../img/mountain.png";
import Name from "../../img/name.png";
import Portrait from "../../img/portrait.png";
import Computer from "../../img/computer.png";
import Server from "../../img/server.png";

//import PropTypes from 'prop-types'

const Intro = (props) => {
  return (
    <Fragment>
      <div className="top-box contrainer-fluid">
        <img className="sun" src={Sun} alt="sun-img" />
        <img className="name" src={Name} alt="name-img" />
        <img className="mountain" src={Mountain} alt="mountain-img" />
      </div>
      <div className="middle-box contrainer-fluid">
        <div id="profile">
          <img className="portrait" src={Portrait} alt="portrait-img" />
          <h2>Hello.</h2>
          <br />
          <p className="intro-text">
            I am a self-taught full-stack web developer in Calgary. I love
            programming and working with technology{" "}
            <span role="img" aria-label="emoji">
              💻
            </span>
            .
          </p>
        </div>
        <hr />
        <div className="skills" id="skills">
          <h2>My skills</h2>
          <div className="skill-row">
            <img className="first-skill" src={Computer} alt="computer-img" />
            <h3>Programming</h3>
            <p>
              Javascript is my every-day programming language which I am
              continuously honing and loving. I teach myself MERN stack
              (MongoDB, Express, React, Node.js) to build stylist, interactive,
              and scalable websites. My past projects had me dabble in areas
              like image processing, database management, and Python scripting.
            </p>
          </div>
          <div className="skill-row">
            <img className="second-skill" src={Server} alt="server-img" />
            <h3>Troubleshooting</h3>
            <p>
              Not only coding, I am also capable of administrating and
              troubleshooting servers and network devices. With a strong
              foundation of knowledge in virtualization, cloud and security
              technology, I am certified in Cisco routing and switching.
            </p>
          </div>
        </div>
        <hr />
        <div className="contact-me" id="contact-me">
          <h3>I’m currently looking for a job oppotunity.</h3>
          <div className="contact-message">
            <h2>Get In Touch</h2>
            <p>
              Email: nguyenducphat9a5@gmail.com <br />
              Text message: +1 (825) 365-9357
            </p>
          </div>
          <a
            className="btn btn-primary"
            href="mailto:nguyenducphat9a5@gmail.com"
          >
            <i className="fas fa-envelope-open-text"></i> CONTACT ME
          </a>
        </div>
      </div>
    </Fragment>
  );
};

//Intro.propTypes = {}

export default Intro;
