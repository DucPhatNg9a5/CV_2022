import React, { Fragment } from "react";
// import PropTypes from 'prop-types'
import Cisco from "../../img/cisco_ccna_R_26S.png";
import Sait from "../../img/logo200px.png";
import Jsninja from "../../img/UC-7615eef0-3e9c-49eb-8d56-1a2ba45998e1.jpg";
import Mern from "../../img/UC-b461af42-3812-4852-9903-039f95367afd.jpg";
import Bootcamp from "../../img/UC-d9279b63-2b8c-4746-8ee4-85ad568a9e6b.jpg";

const Background = (props) => {
  return (
    <Fragment>
      <div className="bg-white container-fluid">
        <div className="background-grid py-5">
          <div className="background-exp p-2">
            <h2 className="background-header">Experience</h2>
            <div>
              <p>
                <strong>Southern Alberta Institute of Technology</strong>
              </p>
              <p>May 2019 - Decenber 2019</p>
              <p>
                <strong>Department: </strong>
                Centre for Innovation and Research in Unmanned Systems (CIRUS)
              </p>
              <p>
                <strong>Position: </strong>
                Research Assistant
              </p>
              <p>
                <strong>Tasks: </strong>
              </p>
              <ul>
                <li>Developing web map using open-source solution</li>
                <li>
                  Creating features and troubleshooting with Javascript and
                  Python
                </li>
                <li>
                  Administrating database (PostgreSQL) and server (Hyper-v)
                </li>
              </ul>
            </div>
          </div>
          <div className="background-edu p-2">
            <h2 className="background-header">Education</h2>
            <div>
              <h4 className="text-dark">
                Southern Alberta Institute of Technology
                <img className="SAIT" src={Sait} alt="SAIT-img" />
              </h4>
              <p>
                <strong>Degrees: </strong>
              </p>
              <ul>
                <li>
                  Bachelor of Applied Technology Geographic Information Systems
                </li>
                <li>Diploma in Information Technology</li>
              </ul>

              <p>
                <strong>Description: </strong>
                GPA of 3.8 for both programs
              </p>
            </div>
          </div>
          <div className="background-cert p-2">
            <h2 className="background-header">Certification</h2>
            <div>
              <div>
                <p>
                  <strong>
                    <a
                      className="CCNA-link"
                      href="https://www.youracclaim.com/badges/cf0606a8-24fb-4a35-886b-bcbe7737c438/public_url"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      CCNA Routing and Switching
                    </a>
                  </strong>
                </p>
                <img className="CCNA" src={Cisco} alt="CCNA-img" />

                <p>
                  <strong>Issued: </strong> Sep 2018 - Sep 2021
                </p>
                <p>
                  <strong>Credential: </strong>ID 433665709919GTCL
                </p>
              </div>
              <div>
                <h5 className="py-4">
                  <strong className="text-info">Udemy Certifications</strong>
                </h5>
                <p>
                  <strong>Course: </strong>Modern JavaScript (from Novice to
                  Ninja)
                </p>
                <img className="udemy" src={Jsninja} alt="udemy-img" />
                <p>
                  <strong>Course: </strong>MERN Stack Front To Back: Full Stack
                  React, Redux & Node.js
                </p>
                <img className="udemy" src={Mern} alt="udemy-img" />
                <p>
                  <strong>Course: </strong>The Complete 2020 Web Development
                  Bootcamp
                </p>
                <img className="udemy" src={Bootcamp} alt="udemy-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

// Background.propTypes = {}

export default Background;
