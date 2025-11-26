import { httpClient } from "../../../lib/axios";


const BASE_URL = "/products";

export const ProductServices = {
  getAll: async () => {
    const res = await httpClient.get("/products");
    return res.data.data; 
  },

};

export default ProductServices;


