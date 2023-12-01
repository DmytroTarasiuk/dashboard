import AppAction from "../action";

import { SET_PRODUCT_LIST } from "./actions";

const initialState = {
  products: [],
};

export function productsReducer(state = initialState, action: AppAction) {
  switch (action.type) {
    case SET_PRODUCT_LIST:
      return { ...state, products: action.payload };

    default:
      return state;
  }
}
