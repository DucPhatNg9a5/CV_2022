import React, { Fragment } from "react";
// import PropTypes from 'prop-types'
import Cisco from "../../img/cisco_ccna_R_26S.png";
import Sait from "../../img/logo200px.png";

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
              </p>
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
              <div className="">
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
                  <strong>Issued: </strong> Sep 2018 - Expires Sep 2021
                </p>
                <p>
                  <strong>Credential: </strong>ID 433665709919GTCL
                </p>
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
