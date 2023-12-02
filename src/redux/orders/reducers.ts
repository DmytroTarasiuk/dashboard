import AppAction from "../action";

import { SET_ORDER_LIST } from "./actions";

const initialState = {
  orderss: [],
};

export function orderReducer(state = initialState, action: AppAction) {
  switch (action.type) {
    case SET_ORDER_LIST:
      return { ...state, orders: action.payload };

    default:
      return state;
  }
}
