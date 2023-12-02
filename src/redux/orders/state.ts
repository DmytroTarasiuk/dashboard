export enum ProductCategories {
  MENS_CLOTHING = "men's clothing",
  ELECTRONICS = "electronics",
  JEWELERY = "jewelery",
}

export interface IOrder {
  id: number;
  productId: number;
  title: string;
  description: string;
  price: number;
  category: ProductCategories;
  qty: number;
  date: string;
}

export default interface OrderState {
  orders: IOrder[];
}
