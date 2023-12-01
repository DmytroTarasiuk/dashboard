import { combineReducers, Reducer } from "redux";

import { productsReducer } from "./products/reducers";

const reducers: Reducer = combineReducers({
  productsList: productsReducer,
});

export default reducers;
