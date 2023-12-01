import axios from "axios";

// Free online REST API for fake ecommerce store data fakestoreapi.com
export const apiUrl = "https://fakestoreapi.com";

const Products = {
  getProducts: (limit?: number) => {
    return axios.get(`${apiUrl}/products?limit=${limit}`);
  },
};

export default Products;
