import { useEffect, useRef } from "react";
import { useCategoriesStore } from "../../../store/category-store";

export default function MenuCategoryTabs() {
  const { categories, activeCategory, setActiveCategory } = useCategoriesStore();

  const scrollRef = useRef(null);

  // Auto-scroll (mobile)
  useEffect(() => {
    if (!scrollRef.current) return;

    const activeBtn = scrollRef.current.querySelector(".active-tab");
    if (activeBtn) {
      activeBtn.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [activeCategory]);

  return (
    <div className="w-full mb-12">

      {/* Desktop Tabs */}
      <div className="hidden sm:flex justify-center relative px-4">
        <div className="relative inline-flex flex-col w-full max-w-4xl">

          {/* Bottom gray line */}
          <div className="absolute bottom-0 left-0 right-0 border-b border-gray-300"></div>

          <div className="flex gap-16 relative">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.name)}
                className={`relative pb-3 text-lg font-medium transition 
                ${activeCategory === cat.name ? "text-red-600" : "text-gray-700"}`}
              >
                {cat.name}

                {/* Underline */}
                {activeCategory === cat.name && (
                  <span className="absolute bottom-[-2px] left-0 right-0 h-[3px] bg-red-600 rounded-full"></span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Tabs - Scrollable */}
      <div
        ref={scrollRef}
        className="flex sm:hidden overflow-x-auto px-4 scrollbar-hide"
      >
        <div className="flex gap-6 py-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.name)}
              className={`relative pb-2 text-base font-medium whitespace-nowrap ${
                activeCategory === cat.name
                  ? "text-red-600 active-tab"
                  : "text-gray-600"
              }`}
            >
              {cat.name}

              {activeCategory === cat.name && (
                <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-red-600 rounded-full"></span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
