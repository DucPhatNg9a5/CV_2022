import React from "react";
import Card from "./Card";

const CardList = ({ catsList }) => {
  return catsList.map((cat) => {
    return <Card key={cat.id} name={cat.name} />;
  });
};

export default CardList;
