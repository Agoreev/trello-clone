import React from "react";
import "./new-desk-item.css";
import { connect } from "react-redux";
import { compose } from "redux";
import {
  deskAdded,
  deskCreating,
  deskCreatingCanceled,
  deskNameChanged
} from "../../actions";

const NewDeskItem = ({
  deskCreatingState,
  newDeskName,
  onDeskCreating,
  onDeskCreatingCanceled,
  onDeskAdded,
  OnDeskNameChange
}) => {
  const newDesk = deskCreatingState ? (
    <div className="new-desk-item desk">
      <span className="new-desk-item__description">Create new desk...</span>
      <form
        className="new-desk-item__form"
        onSubmit={e => {
          e.preventDefault();
          onDeskAdded(newDeskName);
        }}
      >
        <span>Enter desk title here</span>
        <input
          type="text"
          name="desk-title"
          value={newDeskName}
          onChange={e => OnDeskNameChange(e.target.value)}
        />
        <div className="new-desk-item__controls">
          <button
            className="btn btn_cancel"
            onClick={() => onDeskCreatingCanceled()}
          >
            cancel
          </button>
          <button className="btn btn_confirm">create</button>
        </div>
      </form>
    </div>
  ) : (
    <button className="new-desk-item desk" onClick={() => onDeskCreating()}>
      Create new desk...
    </button>
  );
  return { newDesk };
};

const mapStateToProps = ({ deskCreatingState, newDeskName }) => {
  return {
    deskCreatingState,
    newDeskName
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onDeskAdded: name => dispatch(deskAdded(name)),
    onDeskCreating: () => dispatch(deskCreating()),
    onDeskCreatingCanceled: () => dispatch(deskCreatingCanceled()),
    OnDeskNameChange: name => dispatch(deskNameChanged(name))
  };
};

export default NewDeskItem;
