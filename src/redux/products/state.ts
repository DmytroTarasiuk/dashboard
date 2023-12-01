interface IRating {
  rate: number;
  count: number;
}

export enum ProductCategories {
  MENS_CLOTHING = "men's clothing",
  ELECTRONICS = "electronics",
  JEWELERY = "jewelery",
}

export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  category: ProductCategories;
  image: string;
  rating: IRating;
}

export default interface ProductsState {
  products: IProduct[];
}
