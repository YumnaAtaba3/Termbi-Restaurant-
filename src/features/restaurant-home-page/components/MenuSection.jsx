/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import MenuCategoryTabs from "./MenuCategoryTabs";
import MenuCard from "./MenuCard";
import DishModal from "./DishModal";
import AuthModalController from "./AuthModalController";
import { useIsLoggedIn } from "../../log-in/hooks/is-logged-in";

import { useProducts } from "../hooks/useProducts";
import { useProductsState } from "../../../store/product-store";

import { useCategories } from "../hooks/useCategories";
import { useCategoriesStore } from "../../../store/category-store";

export default function MenuSection() {
  const { isLoggedIn } = useIsLoggedIn();


  const { isLoading, error } = useProducts();
  const { filteredProducts } = useProductsState(); 
  const [view, setView] = useState("cards");
  const [sortType, setSortType] = useState(null);

  const [selectedDish, setSelectedDish] = useState(null);
  const [isDishModalOpen, setIsDishModalOpen] = useState(false);

  // Fetch categories
  useCategories(); 
  const { activeCategory, categories } = useCategoriesStore();

  // Find current category
  const currentCategory = categories.find(
    (cat) => cat.name === activeCategory
  );

  // Load dishes in that category
  const dishes = currentCategory?.products || [];

  // Sorting dishes
  const sortedDishes = [...dishes].sort((a, b) => {
    if (sortType === "name") return (a.name || "").localeCompare(b.name || "");
    if (sortType === "price") return (a.price || 0) - (b.price || 0);
    return 0;
  });

  return (
    <AuthModalController>
      {({ openLogin }) => (
        <section className="w-full text-center mb-20">

          <h3 className="text-4xl font-bold mb-2">
            Our <span className="text-red-600">Menu</span>
          </h3>

          <p className="text-gray-600 text-lg mb-10 font-medium">
            Explore our special, tasteful dishes on the Restaurant Menu!
          </p>

          {/* CATEGORY TABS */}
          <MenuCategoryTabs />

          {/* Controls */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {/* View Controls */}
            <button
              onClick={() => setView("cards")}
              className={`px-5 py-2 rounded-md border font-medium ${
                view === "cards"
                  ? "border-red-600 text-red-600"
                  : "border-gray-300 text-gray-700 hover:border-red-400"
              }`}
            >
              View as Cards
            </button>

            <button
              onClick={() => setView("list")}
              className={`px-5 py-2 rounded-md border font-medium ${
                view === "list"
                  ? "border-red-600 text-red-600"
                  : "border-gray-300 text-gray-700 hover:border-red-400"
              }`}
            >
              View as List
            </button>

            <div className="w-full md:w-auto border-b-2 md:border-b-0 md:border-r-2 border-gray-300 mx-4 my-2 md:my-0"></div>

            {/* Sorting */}
            <button
              onClick={() => setSortType("name")}
              className={`px-5 py-2 rounded-md border font-medium ${
                sortType === "name"
                  ? "border-red-600 text-red-600"
                  : "border-gray-300 text-gray-700 hover:border-red-400"
              }`}
            >
              Sort by Name
            </button>

            <button
              onClick={() => setSortType("price")}
              className={`px-5 py-2 rounded-md border font-medium ${
                sortType === "price"
                  ? "border-red-600 text-red-600"
                  : "border-gray-300 text-gray-700 hover:border-red-400"
              }`}
            >
              Sort by Price
            </button>

            <div className="w-full md:w-auto border-b-2 md:border-b-0 md:border-r-2 border-gray-300 mx-4 my-2 md:my-0"></div>

            <button className="px-5 py-2 rounded-md border font-medium border-gray-300 text-gray-700 hover:border-red-400 hover:text-red-600">
              Download Menu
            </button>
          </div>

          {/* LOADING / ERROR / EMPTY / PRODUCTS */}
          {isLoading ? (
            <div className="py-16">Loading menu…</div>
          ) : error ? (
            <div className="py-16 text-red-600">Failed to load menu.</div>
          ) : sortedDishes.length === 0 ? (
            <div className="py-16">No dishes available.</div>
          ) : (
            <div
              className={`mx-4 px-4 ${
                view === "cards"
                  ? "grid grid-cols-1 md:grid-cols-2 gap-16"
                  : "flex flex-col gap-10"
              }`}
            >
              {sortedDishes.map((dish) => (
                <MenuCard
                  key={dish.id}
                  title={dish.name}
                  description={dish.description}
                  price={dish.price}
                  image={
                    dish.image ||
                    "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=60"
                  }
                  view={view}
                  onClick={() => {
                    if (isLoggedIn) {
                      setSelectedDish(dish);
                      setIsDishModalOpen(true);
                    } else {
                      openLogin();
                    }
                  }}
                />
              ))}
            </div>
          )}

          {/* Dish Modal */}
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
