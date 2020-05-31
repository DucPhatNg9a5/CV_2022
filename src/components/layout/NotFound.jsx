import React, { Fragment } from "react";

export const NotFound = () => {
  return (
    <Fragment>
      <div className="main pt-5">
        <h1 className="x-large text-primary">
          <i className="fas fa-exclamation-triangle"></i> Page not found
        </h1>
        <p className="large">Sorry, This page does not exist</p>
      </div>
    </Fragment>
  );
};

export default NotFound;
