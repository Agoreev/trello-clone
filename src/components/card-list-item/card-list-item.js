import React from "react";
import "./card-list-item.css";

const CardListItem = ({ name, items }) => {
  return (
    <div className="card">
      <span className="card__title">{name}</span>
    </div>
  );
};

export default CardListItem;
