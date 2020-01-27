import React from "react";
import CardList from "../card-list";

const CardsPage = ({ match }) => {
  return <CardList deskId={match.params.id} />;
};

export default CardsPage;
