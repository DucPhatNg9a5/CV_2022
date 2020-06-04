import React from "react";

const Card = ({ name }) => {
  return (
    <div className="col-sm-4 my-4">
      <div className="card shadow">
        <img
          className="card-img-top pt-2"
          alt="cat-img"
          src={"https://robohash.org/" + name.split(" ")[1] + "?set=set4"}
        />
        <div className="card-body">
          <h5 className="card-title"> {name.split(" ")[1]} </h5>
        </div>
      </div>
    </div>
  );
};

export default Card;
