import { useSearchStore } from "../store/search-store";

export default function SearchOverlay() {
  const { isOpen, closeSearch, query, setQuery } = useSearchStore();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 bg-black/60 flex justify-center pt-32">
      <div className="bg-white w-full max-w-xl rounded-lg p-6 relative">
        <button
          onClick={closeSearch}
          className="absolute top-3 right-4 text-gray-500 text-2xl"
        >
          ×
        </button>

        <input
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search dishes..."
          className="w-full border px-4 py-3 rounded focus:outline-none"
        />
      </div>
    </div>
  );
}
