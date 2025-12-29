import { useSearchParams } from "react-router-dom";
import { useProducts } from "../../restaurant-home-page/hooks/useProducts";
import { useProductsState } from "../../../store/product-store";
import MenuCard from "../../restaurant-home-page/components/MenuCard";

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q")?.toLowerCase() || "";


  const { isLoading, error } = useProducts({ page: 1, fetchAll: false });
  const products = useProductsState((s) => s.products) || [];

  const results = products.filter((item) =>
    item.name?.toLowerCase().includes(query)
  );

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-2">
        Search results for "{query}"
      </h2>

      <p className="text-gray-600 mb-8">{results.length} items found</p>

      {isLoading ? (
        <div className="py-16">Loading products…</div>
      ) : error ? (
        <div className="py-16 text-red-600">Failed to load products.</div>
      ) : results.length === 0 ? (
        <div className="py-16 text-gray-600">No items match your search.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {results.map((item) => (
            <MenuCard
              key={item.id}
              title={item.name}
              description={item.description}
              price={item.price}
              image={
                item.image ||
                "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=60"
              }
              view="cards"
            />
          ))}
        </div>
      )}
    </section>
  );
}
