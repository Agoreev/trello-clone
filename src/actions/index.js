const desksLoaded = newDesks => {
  return {
    type: "FETCH_DESKS_SUCCESS",
    payload: newDesks
  };
};

const desksRequested = () => {
  return {
    type: "FETCH_DESKS_REQUESTED"
  };
};

const desksError = error => {
  return {
    type: "FETCH_DESKS_FAILURE",
    payload: error
  };
};

const fetchDesks = trelloService => () => dispatch => {
  dispatch(desksRequested);
  trelloService
    .getDesks()
    .then(data => dispatch(desksLoaded(data)))
    .catch(err => dispatch(desksError(err)));
};

const deskAdded = name => {
  return {
    type: "DESK_ADDED",
    payload: name
  };
};

const deskCreating = () => {
  return {
    type: "DESK_CREATING"
  };
};

const deskCreatingCanceled = () => {
  return {
    type: "DESK_CREATING_CANCELED"
  };
};

const deskNameChanged = name => {
  return {
    type: "DESK_NAME_CHANGE",
    payload: name
  };
};

export {
  fetchDesks,
  deskAdded,
  deskCreating,
  deskCreatingCanceled,
  deskNameChanged
};
