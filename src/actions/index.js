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

export { fetchDesks };
