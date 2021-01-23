import * as actionType from "../actions/actionType";

const initState = {
  tempCart: [],
  cart: null,
  errors: null,
};

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case actionType.TEMPCART:
      return { ...state, tempCart: action.data };

    case actionType.LOGOUT:
      localStorage.clear();
      return { ...state, tempCart: [] };

    case actionType.GET_CART_SUCCESS:
      return { ...state, cart: action.cart, errors: null };

    default:
      return state;
  }
};

export default cartReducer;
