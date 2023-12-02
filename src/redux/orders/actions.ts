import { IOrder } from "./state";

export const SET_ORDER_LIST = "SET_ORDER_LIST";
export const CLEAR_ORDER_LIST = "CLEAR_ORDER_LIST";

export const setOrderList = (payload: IOrder[]) => ({
  type: SET_ORDER_LIST,
  payload,
});

export const clearOrderList = () => ({
  type: CLEAR_ORDER_LIST,
  payload: [],
});
