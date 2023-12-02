import AppState from "../state";

export function getOrderList(state: AppState) {
  return state.orderList.orders;
}
