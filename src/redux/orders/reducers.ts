import AppAction from "../action";

import { CLEAR_ORDER_LIST, SET_ORDER_LIST } from "./actions";

const initialState = {
  orderss: [],
};

export function orderReducer(state = initialState, action: AppAction) {
  switch (action.type) {
    case SET_ORDER_LIST:
      return { ...state, orders: action.payload };
    case CLEAR_ORDER_LIST:
      return { ...state, orders: [] };

    default:
      return state;
  }
}
