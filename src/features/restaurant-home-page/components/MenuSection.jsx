import React, { useState } from "react";
import MenuCategoryTabs from "./MenuCategoryTabs";
import MenuCard from "./MenuCard";
import DishModal from "./DishModal";
import AuthModalController from "./AuthModalController";

import { useIsLoggedIn } from "../../log-in/hooks/is-logged-in";
import { useProducts } from "../hooks/useProducts";
import { useCategories } from "../hooks/useCategories";

import { useCategoriesStore } from "../../../store/category-store";
import { useSearchStore } from "../../../store/search-store";

export default function MenuSection() {
  const { isLoggedIn } = useIsLoggedIn();
  const { query } = useSearchStore();

  const { isLoading, error } = useProducts();
  useCategories();

  const { activeCategory, categories } = useCategoriesStore();

  const [view] = useState("cards");
  const [selectedDish, setSelectedDish] = useState(null);
  const [isDishModalOpen, setIsDishModalOpen] = useState(false);

  const currentCategory = categories.find(
    (cat) => cat.name === activeCategory
  );

  const dishes = currentCategory?.products || [];

  const filteredDishes = dishes.filter((dish) =>
    dish.name?.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AuthModalController>
      {({ openLogin }) => (
        <section
          id="menu"
          className="w-full text-center mb-20 scroll-mt-32"
        >
          <h3 className="text-4xl font-bold mb-2">
            Our <span className="text-red-600">Menu</span>
          </h3>

          <p className="text-gray-600 text-lg mb-10 font-medium">
            Explore our special, tasteful dishes.
          </p>

          <MenuCategoryTabs />

          {isLoading ? (
            <div className="py-16">Loading menu…</div>
          ) : error ? (
            <div className="py-16 text-red-600">Failed to load menu.</div>
          ) : filteredDishes.length === 0 ? (
            <div className="py-16 text-gray-500">
              No dishes match your search.
            </div>
          ) : (
            <div className="px-4 sm:px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-16">
              {filteredDishes.map((dish) => (
                <MenuCard
                  key={dish.id}
                  title={dish.name}
                  description={dish.description}
                  price={dish.price}
                  image={dish.image}
                  view={view}
                  onClick={() => {
                    if (!isLoggedIn) return openLogin();
                    setSelectedDish(dish);
                    setIsDishModalOpen(true);
                  }}
                />
              ))}
            </div>
          )}

          {isDishModalOpen && (
            <DishModal
              dish={selectedDish}
              onClose={() => setIsDishModalOpen(false)}
            />
          )}
        </section>
      )}
    </AuthModalController>
  );
}
