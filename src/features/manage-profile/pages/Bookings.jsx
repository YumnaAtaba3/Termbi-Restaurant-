// import React, { useState } from "react";

// export default function Bookings() {
//   const bookings = [
//     { id: "11236587267", date: "20-07-2024", time: "14:00", guests: 20, status: "Confirmed" },
//     { id: "11236587268", date: "20-07-2024", time: "20:00", guests: 10, status: "Canceled" },
//     { id: "11236587269", date: "20-07-2024", time: "12:00", guests: 6, status: "Confirmed" },
//     { id: "11236587270", date: "20-07-2024", time: "23:00", guests: 7, status: "Canceled" },
//     { id: "11236587271", date: "20-07-2024", time: "18:00", guests: 15, status: "Confirmed" },
//   ];

//   const itemsPerPage = 5;
//   const [page, setPage] = useState(1);
//   const totalPages = Math.ceil(bookings.length / itemsPerPage);
//   const paginated = bookings.slice((page - 1) * itemsPerPage, page * itemsPerPage);
//   const goToPage = (p) => { if (p >= 1 && p <= totalPages) setPage(p); };

//   return (
//     <div className="w-full">
//       <h2 className="text-xl font-semibold mb-6">My Bookings</h2>

//       {/* Table for md+ */}
//       <div className="overflow-x-auto hidden md:block">
//         <table className="min-w-[700px] w-full">
//           <thead>
//             <tr className="text-gray-500 text-sm border-b">
//               <th className="py-3 text-left">Booking ID</th>
//               <th className="py-3 text-left">Date</th>
//               <th className="py-3 text-left">Time</th>
//               <th className="py-3 text-left">Guests</th>
//               <th className="py-3 text-left">Status</th>
//               <th className="py-3 text-left">Details</th>
//             </tr>
//           </thead>
//           <tbody>
//             {paginated.map((item) => (
//               <tr key={item.id + item.time} className="border-b hover:bg-gray-50">
//                 <td className="py-9 text-gray-500">{item.id}</td>
//                 <td className="py-9 text-gray-500">{item.date}</td>
//                 <td className="py-9">{item.time}</td>
//                 <td className="py-9">{item.guests}</td>
//                 <td className={`py-9 ${item.status === "Confirmed" ? "text-green-500" : "text-gray-500"}`}>{item.status}</td>
//                 <td className="py-4"><button className="text-red-500 hover:underline">View details</button></td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Mobile cards */}
//       <div className="flex flex-col gap-4 md:hidden">
//         {paginated.map((item) => (
//           <div key={item.id + item.time} className="bg-white p-4 rounded-xl shadow flex flex-col gap-2">
//             <div className="flex justify-between">
//               <span className="font-medium">Booking ID: {item.id}</span>
//               <span className={`${item.status === "Confirmed" ? "text-green-500" : "text-gray-500"} font-medium`}>{item.status}</span>
//             </div>
//             <div className="flex justify-between">
//               <span>Date: {item.date}</span>
//               <span>Time: {item.time}</span>
//             </div>
//             <span>Guests: {item.guests}</span>
//             <button className="text-red-500 hover:underline mt-2">View details</button>
//           </div>
//         ))}
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-center items-center gap-3 mt-6">
//         <button onClick={() => goToPage(page - 1)} disabled={page === 1} className="w-8 h-8 flex justify-center items-center border rounded-md disabled:opacity-50">&lt;</button>
//         {Array.from({ length: totalPages }, (_, i) => (
//           <button key={i} onClick={() => goToPage(i + 1)} className={`w-8 h-8 rounded-md border ${page === i + 1 ? "bg-red-500 text-white" : "hover:bg-gray-100"}`}>{i + 1}</button>
//         ))}
//         <button onClick={() => goToPage(page + 1)} disabled={page === totalPages} className="w-8 h-8 flex justify-center items-center border rounded-md disabled:opacity-50">&gt;</button>
//       </div>
//     </div>
//   );
// }
