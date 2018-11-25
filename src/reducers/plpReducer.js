import { GET_PLP_DATA_REQUEST, GET_PLP_DATA_SUCCESS } from "../action/index";

const plpReducer = (
  state = {
    loading: false,
    plp: [],
    status: null,
    error: ""
  },
  action
) => {
  switch (action.type) {
    case GET_PLP_DATA_REQUEST:
      return Object.assign({}, state, {
        loading: true
      });
    case GET_PLP_DATA_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        plp: action.plp
      });
    case GET_PLP_DATA_REQUEST:
      return Object.assign({}, state, {
        loading: false,
        error: action.error
      });
    default:
      return state;
  }
};
export default plpReducer;
