import React from "react";
import "./card-list.css";
import CardListItem from "../card-list-item";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const CardList = ({ match, desks }) => {
  console.log(match.params.id);
  // const cardsList = cards.map(card => {
  //   return <CardListItem name={card.name} items={card.items}></CardListItem>;
  // });
  // return (
  //   <div className="cards-list">
  //     <div className="cards-list__desk-title">{deskTitle}</div>
  //     {cardsList}
  //   </div>
  // );
};

//возможно надо подключить компонент к редаксу и брать из стейта деск по id
const mapStateToProps = ({ desks }) => {
  return {
    desks
  };
};

export default connect(mapStateToProps)(withRouter(CardList));
