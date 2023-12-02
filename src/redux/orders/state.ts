export enum ProductCategories {
  MENS_CLOTHING = "men's clothing",
  ELECTRONICS = "electronics",
  JEWELERY = "jewelry",
}

export interface IOrder {
  id: number;
  productId: number;
  title: string;
  description: string;
  price: number;
  category: ProductCategories;
  unitSold: number;
  revenue?: number;
  cost?: number;
  profit?: number;
  profitMargin?: number | string;
  date: string;
}

export default interface OrderState {
  orders: IOrder[];
}
