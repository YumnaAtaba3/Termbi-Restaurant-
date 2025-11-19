import StarIcon from "@mui/icons-material/Star";
import { useState } from "react";

export default function Reviews() {
  const reviewsList = [
    {
      id: 1,
      name: "John Doe",
      image:
        "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=60",
      rating: 5,
      date: "2024-06-15",
      text: "A delicious and beautifully presented dish that just needs a little salt to be perfect.",
    },
    {
      id: 2,
      name: "Jane Smith",
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=60",
      rating: 4,
      date: "2024-05-30",
      text: "Delicious dish and good service but it has a lot of hot spices which makes it difficult to eat.",
    },
    {
      id: 3,
      name: "Ali Ahmad",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=60",
      rating: 5,
      date: "2024-04-20",
      text: "The taste is bad and the vegetables are not fresh, I don't want to eat this dish again.",
    },
  ];

  const itemsPerPage = 5;
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(reviewsList.length / itemsPerPage);

  const paginatedReviews = reviewsList.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const goToPage = (p) => {
    if (p >= 1 && p <= totalPages) {
      setPage(p);
    }
  };

  return (
    <div className="flex-1 bg-white md:ml-8 p-4 md:p-8">
      <h2 className="text-xl font-semibold">My Reviews</h2>

      {paginatedReviews.map((review) => (
        <div
          key={review.id}
          className="flex flex-col md:flex-row mt-6 p-4 md:p-6 rounded-lg border border-gray-200 bg-[#F9F9F9] shadow-sm items-start gap-4 md:gap-6"
        >
          {/* IMAGE */}
          <img
            src={review.image}
            alt={review.name}
            className="w-full md:w-28 h-40 md:h-28 object-cover rounded-lg"
          />

          {/* TEXT CONTENT */}
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full">
              {/* STARS */}
              <div className="flex gap-0">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`w-6 h-6 ${
                      i < review.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              {/* DATE */}
              <div className="mt-2 sm:mt-0">
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>
            </div>

            <p className="text-gray-700 mt-4 text-lg">{review.text}</p>
          </div>
        </div>
      ))}

      {/* Pagination */}
      <div className="flex justify-center items-center gap-3 mt-6">
        <button
          onClick={() => goToPage(page - 1)}
          disabled={page === 1}
          className="w-8 h-8 flex justify-center items-center border rounded-md disabled:opacity-50"
        >
          &lt;
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => goToPage(i + 1)}
            className={`w-8 h-8 rounded-md border ${
              page === i + 1 ? "bg-red-500 text-white" : "hover:bg-gray-100"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => goToPage(page + 1)}
          disabled={page === totalPages}
          className="w-8 h-8 flex justify-center items-center border rounded-md disabled:opacity-50"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
