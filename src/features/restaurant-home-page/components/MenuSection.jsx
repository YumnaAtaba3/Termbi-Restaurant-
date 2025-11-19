import React, { useState } from "react";
import MenuCategoryTabs from "./MenuCategoryTabs";
import MenuCard from "./MenuCard";
import DishModal from "./DishModal";

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("Pasta");
  const [view, setView] = useState("cards");
  const [sortType, setSortType] = useState(null);

  const [selectedDish, setSelectedDish] = useState(null); 
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const openModal = (dish) => {
    setSelectedDish(dish);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const sampleDish = {
    title: "Shrimp Pasta",
    description:
      "The Shrimp Version Of Vongole Rosso Dish, Clams Mixed With Pasta, Tomatoes And Garlic.",
    price: 50,
    image:
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=60"
  };

  const dishes = Array.from({ length: 6 }).map(() => sampleDish);

  // Sorting
  const sortedDishes = [...dishes].sort((a, b) => {
    if (sortType === "name") return a.title.localeCompare(b.title);
    if (sortType === "price") return a.price - b.price;
    return 0;
  });

  return (
    <section className="w-full text-center mb-20">
      <h3 className="text-4xl font-bold mb-2">
        Our <span className="text-red-600">Menu</span>
      </h3>
      <p className="text-gray-600 text-lg mb-10 font-medium">
        Explore our special, tasteful dishes on the Restaurant Menu!
      </p>

      <MenuCategoryTabs active={activeCategory} setActive={setActiveCategory} />

      {/* Controls */}
      <div className="flex flex-wrap justify-center gap-4 mb-10 ">
        <button
          onClick={() => setView("cards")}
          className={`px-5 py-2  rounded-md border font-medium ${
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

       <div className="w-full md:w-auto border-b-2 md:border-b-0 md:border-r-2 border-gray-300 mx-4 my-2 md:my-0 shadow-"></div>


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

          <div className="w-full md:w-auto border-b-2 md:border-b-0 md:border-r-2 border-gray-300 mx-4 my-2 md:my-0  shadow-xl"></div>


          <button
         
          className="px-5 py-2 rounded-md border font-medium 
            border-gray-300 text-gray-700 hover:border-red-400 hover:text-red-600"
             
        
        >
         Download Menu
        </button>
      </div>

      {/* Cards / List */}
      <div
        className={`mx-4 px-4 ${
          view === "cards"
            ? "grid grid-cols-1 md:grid-cols-2 gap-16"
            : "flex flex-col gap-10"
        }`}
      >
        {sortedDishes.map((dish, index) => (
          <MenuCard
            key={index}
            {...dish}
            view={view}
            onClick={() => openModal(dish)} 
          />
        ))}
      </div>

      {/* MODAL */}
      {isModalOpen && (
        <DishModal dish={selectedDish} onClose={closeModal} />
      )}
    </section>
  );
}
