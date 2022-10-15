import React from "react";
import projects from "../../data/projects";
import { Link } from "react-router-dom";
//import PropTypes from "prop-types";

const Portfolio = (props) => {
  return (
    <div className="container-fluid portfolio mt-4">
      <h2>Project List</h2>
      <div className="row">
        {projects.map((project) => {
          return (
            <div className="col-lg-6 my-4" key={project.id}>
              <div className="card h-100 shadow">
                <img
                  className="card-img-top py-2"
                  alt="project"
                  src={project.img}
                />
                <div className="card-body text-left">
                  <h5 className="card-title"> {project.name} </h5>
                  <p className="card-text "> {project.description} </p>
                  {project.url ? (
                    <a
                      href={project.url}
                      className="btn btn-primary shadow"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      view
                    </a>
                  ) : (
                    <Link to={project.link} className="btn btn-primary shadow">
                      View
                    </Link>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

//Portfolio.propTypes = {};

export default Portfolio;
