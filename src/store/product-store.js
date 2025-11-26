
import { create } from "zustand";
import { productInitState } from "./state";

export const useProductsState = create((set) => ({
  ...productInitState,

  setProducts: (products) => set({ products, filteredProducts: products }),

  setSelectedProduct: (product) => set({ selectedProduct: product }),
}));
