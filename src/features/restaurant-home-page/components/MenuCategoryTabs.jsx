import { useEffect, useRef } from "react";
import { useCategoriesStore } from "../../../store/category-store";

export default function MenuCategoryTabs() {
  const { categories, activeCategory, setActiveCategory } = useCategoriesStore();
  const scrollRef = useRef(null);

  // Auto-scroll active tab into center (both mobile & desktop)
  useEffect(() => {
    if (!scrollRef.current) return;

    const activeBtn = scrollRef.current.querySelector(".active-tab");
    if (activeBtn) {
      const containerRect = scrollRef.current.getBoundingClientRect();
      const btnRect = activeBtn.getBoundingClientRect();
      const offset = btnRect.left - containerRect.left - containerRect.width / 2 + btnRect.width / 2;

      scrollRef.current.scrollBy({
        left: offset,
        behavior: "smooth",
      });
    }
  }, [activeCategory]);

  return (
    <div className="w-full mb-12">

      {/* Desktop Tabs */}
      <div className="hidden sm:flex justify-center relative px-4 overflow-x-auto" ref={scrollRef}>
        <div className="relative flex gap-16 py-2 min-w-max">

          {/* Gray bottom line */}
          <div className="absolute bottom-0 left-0 right-0 border-b border-gray-300"></div>

          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.name)}
              className={`relative pb-3 text-lg font-medium transition whitespace-nowrap ${
                activeCategory === cat.name ? "text-red-600 active-tab" : "text-gray-700"
              }`}
            >
              {cat.name}

              {/* Red underline for active tab */}
              {activeCategory === cat.name && (
                <span className="absolute bottom-[-7px] left-0 right-0 h-[3px] bg-red-600 rounded-full"></span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Tabs */}
      <div className="flex sm:hidden overflow-x-auto px-4" ref={scrollRef}>
        <div className="flex gap-6 py-2">

          {/* Optional gray line for mobile */}
          <div className="absolute bottom-0 left-0 right-0 border-b border-gray-300"></div>

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
                <span className="absolute bottom-1 left-0 right-0 h-[3px] bg-red-600 rounded-full"></span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
