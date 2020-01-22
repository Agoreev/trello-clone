const updateDeskList = (state, action) => {
  if (state === undefined) {
    return {
      desks: [],
      loading: true,
      error: null
    };
  }
  switch (action.type) {
    case "FETCH_DESKS_REQUEST":
      return {
        desks: [],
        loading: true,
        error: null
      };
    case "FETCH_DESKS_SUCCESS":
      return {
        desks: action.payload,
        loading: false,
        error: null
      };
    case "FETCH_DESKS_FAILURE":
      return {
        desks: [],
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default updateDeskList;
