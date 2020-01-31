import React from "react";
import "./card-list.css";
import CardListItem from "../card-list-item";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {getDeskState} from '../../selectors';

const CardList = ({ desk }) => {

  const {cards} = desk;
  const cardsList = cards.map(card => {
    return <CardListItem key={card.id} name={card.name} items={card.items}></CardListItem>;
  });
  return (
    <div className="cards-list">
      <div className="cards-list__desk-title">{desk.name}</div>
      {cardsList}
    </div>
  );
};

//возможно надо подключить компонент к редаксу и брать из стейта деск по id
const mapStateToProps = (state, ownProps) => {
  return {
    desk: getDeskState(state, parseInt(ownProps.match.params.id))
  };
};

export default connect(mapStateToProps)(withRouter(CardList));

