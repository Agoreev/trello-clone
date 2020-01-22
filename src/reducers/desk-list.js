const updateDeskList = (state, action) => {
  if (state === undefined) {
    return {
      desks: [],
      deskCreatingState: false,
      newDeskName: null,
      loading: true,
      error: null
    };
  }
  switch (action.type) {
    case "FETCH_DESKS_REQUEST":
      return {
        ...state,
        desks: [],
        loading: true,
        error: null
      };
    case "FETCH_DESKS_SUCCESS":
      return {
        ...state,
        desks: action.payload,
        loading: false,
        error: null
      };
    case "FETCH_DESKS_FAILURE":
      return {
        ...state,
        desks: [],
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default updateDeskList;
