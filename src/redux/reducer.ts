import { combineReducers, Reducer } from "redux";

import { orderReducer } from "./orders/reducers";

const reducers: Reducer = combineReducers({
  orderList: orderReducer,
});

export default reducers;
