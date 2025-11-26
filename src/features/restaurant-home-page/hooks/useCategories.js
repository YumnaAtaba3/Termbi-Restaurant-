import { useEffect } from "react";
import { CategoryServices } from "../services/categoryApi";
import { useCategoriesStore } from "../../../store/category-store";

export function useCategories() {
  const { categories, setCategories } = useCategoriesStore();

  useEffect(() => {
    CategoryServices.getAll()
      .then((data) => setCategories(data))
      .catch((err) => console.error("Category Fetch Error:", err));
  }, []);

  return categories;
}
