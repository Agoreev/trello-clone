import "./desk-list-item.css";
import React from "react";
import { Link } from "react-router-dom";

const DeskListItem = ({ desk }) => {
  const { id, name } = desk;
  return (
    <Link to={`/desks/${id}`}>
      <div className="desk" key={id}>
        <span className="desk__name">{name}</span>
      </div>
    </Link>
  );
};

export default DeskListItem;
