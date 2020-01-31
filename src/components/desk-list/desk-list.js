import "./desk-list.css";
import React from "react";
import DeskListItem from "../desk-list-item";
import { connect } from "react-redux";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import { fetchDesks } from "../../actions";
import { compose } from "redux";
import { withTrelloService } from "../hoc";
import NewDeskItem from "../new-desk-item";

const DeskList = ({ desks }) => {
  const desksList = desks.map(desk => {
    return <DeskListItem key={desk.id} desk={desk}></DeskListItem>;
  });
  return (
    <div className="desks-list">
      <NewDeskItem />
      {desksList}
    </div>
  );
};

class DesksListContainer extends React.Component {
  componentDidMount() {
    this.props.fetchDesks();
  }

  render() {
    const { desks, loading, error } = this.props;
    if (loading) {
      return <Spinner />;
    }
    if (error) {
      return <ErrorIndicator />;
    }
    return (
      <React.Fragment>
        <DeskList desks={desks} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ deskList: { desks, loading, error } }) => {
  return {
    desks,
    loading,
    error
  };
};

const mapDispatchToProps = (dispatch, { trelloService }) => {
  return {
    fetchDesks: () => fetchDesks(trelloService, dispatch)
  };
};

export default compose(
  withTrelloService(),
  connect(mapStateToProps, mapDispatchToProps)
)(DesksListContainer);
