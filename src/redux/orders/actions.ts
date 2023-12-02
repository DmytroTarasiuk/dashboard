import { IOrder } from "./state";

export const SET_ORDER_LIST = "SET_ORDER_LIST";

export const setOrderList = (payload: IOrder[]) => ({
  type: SET_ORDER_LIST,
  payload,
});
