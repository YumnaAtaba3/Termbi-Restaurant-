export default function MenuCategoryTabs({ active, setActive }) {
  const categories = ["Pasta", "Salad", "Seafood", "Sandwiches", "Pizzas", "Burger", "Juice"];

  return (
    <div className="w-full mb-12">
      {/* Desktop Tabs */}
      <div className="hidden sm:flex justify-center relative px-4">
        <div className="relative inline-flex flex-col w-full max-w-4xl">
          <div className="absolute bottom-0 left-0 right-0 border-b border-gray-300"></div>
          <div className="flex gap-16 relative">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`
                  pb-3 text-lg font-medium relative whitespace-nowrap
                  ${active === cat ? "text-red-600" : "text-gray-700"}
                `}
              >
                {cat}
                {active === cat && (
                  <span className="absolute bottom-[-2px] left-0 right-0 mx-auto h-[3px] bg-red-600 w-full rounded-full"></span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Tabs */}
      <div className="flex sm:hidden overflow-x-auto px-4">
        <div className="flex gap-4 relative">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`
                pb-3 text-base font-medium relative whitespace-nowrap
                ${active === cat ? "text-red-600" : "text-gray-700"}
              `}
            >
              {cat}
              {active === cat && (
                <span className="absolute bottom-[-2px] left-0 right-0 mx-auto h-[3px] bg-red-600 w-full rounded-full"></span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
