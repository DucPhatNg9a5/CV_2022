import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <input
      className="m-3"
      type="text"
      placeholder="Enter Cat Name"
      onChange={searchChange}
    />
  );
};

export default SearchBox;
