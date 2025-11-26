import { create } from "zustand";

export const useCategoriesStore = create((set) => ({
  categories: [],
  activeCategory: null,

  setCategories: (categories) =>
    set({
      categories,
      activeCategory: categories[0]?.name || null,
    }),

  setActiveCategory: (name) => set({ activeCategory: name }),
}));
