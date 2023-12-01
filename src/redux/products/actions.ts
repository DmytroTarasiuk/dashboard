import { IProduct } from "./state";

export const SET_PRODUCT_LIST = "SET_PRODUCT_LIST";

export const setProductList = (payload: IProduct[]) => ({
  type: SET_PRODUCT_LIST,
  payload,
});
