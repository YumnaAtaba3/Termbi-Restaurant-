// src/products/hooks/useProducts.js
import { useEffect, useState } from "react";
import { ProductServices } from "../services/api"; 
import { useProductsState } from "../../../store/product-store"; 

export const useProducts = (page = 1) => {
  const setProducts = useProductsState((s) => s.setProducts);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    async function load() {
      setIsLoading(true);
      setError(null);
      try {
        const data = await ProductServices.getAll(page);
        if (!mounted) return;
        setProducts(data || []);
      } catch (err) {
        if (!mounted) return;
        setError(err);
      } finally {
        if (mounted) setIsLoading(false);
      }
    }
    load();

    return () => {
      mounted = false;
    };
  }, [page, setProducts]);

  return { isLoading, error };
};
