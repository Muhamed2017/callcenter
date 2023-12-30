import * as actions from "../constants";
const inqueryDefaultState = {
  // user: null,
  // isLoggedIn: false,
  form:null
};

// const inquery = JSON.parse(localStorage.getItem("inquery")) ?? inqueryDefaultState;
// inquery type-based reducer ...
export const inqueryReducer = (state = inqueryDefaultState, action) => {
  switch (action.type) {
    case actions.SET_QUERY_FOR_CAR:
      return {
        ...state,
        // loading:true
       form:"CAR_FORM"

        // form
      };
    case actions.SET_QUERY_FOR_PETROLIUM:
      return {
        ...state,
       form:"PETROLIUM_FORM"
      };

      case actions.SET_QUERY:
      return {
        ...state,
       form:action.payload
      };
    case actions.SET_QUERY_FOR_FLY:
      return {
        ...state,
        form:"FLY_FORM"
      };
    case actions.SET_QUERY_FOR_SEAL:
      return {
        ...state,
        form: 'SEAL_FORM',
      };
    default:
      return state;
  }
};
