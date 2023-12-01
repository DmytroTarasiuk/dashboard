import AppState from "../state";

export function getProductsList(state: AppState) {
  return state.productsList.products;
}
