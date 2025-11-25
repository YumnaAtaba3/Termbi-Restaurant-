// import React,{useState} from "react";
// import { Avatar } from "@mui/material";

// export default function Orders() {
//   const orders = [
//     {
//       id: "11236587207",
//       img:   "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=60", 
//       date: "20-07-2024",
//       amount: "500$",
//     },
//     {
//       id: "11236587208",
//       img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=60",
//       date: "20-07-2024",
//       amount: "500$",
//     },
//     {
//       id: "11236587209",
//       img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=60",
//       date: "20-07-2024",
//       amount: "500$",
//     },
//     {
//       id: "11236587210",
//       img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=60",
//       date: "20-07-2024",
//       amount: "500$",
//     },
//     {
//       id: "11236587211",
//       img:   "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=60",
//       date: "20-07-2024",
//       amount: "500$",
//     },
//      {
//       id: "11236587207",
//       img:   "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=60", 
//       date: "20-07-2024",
//       amount: "500$",
//     },
//     {
//       id: "11236587208",
//       img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=60",
//       date: "20-07-2024",
//       amount: "500$",
//     },
//     {
//       id: "11236587209",
//       img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=60",
//       date: "20-07-2024",
//       amount: "500$",
//     },
//     {
//       id: "11236587210",
//       img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=60",
//       date: "20-07-2024",
//       amount: "500$",
//     },

//   ];
//  const itemsPerPage = 5;
//   const [page, setPage] = useState(1);

//   const totalPages = Math.ceil(orders.length / itemsPerPage);

//   const paginatedOrders = orders.slice(
//     (page - 1) * itemsPerPage,
//     page * itemsPerPage
//   );

//   const goToPage = (p) => {
//     if (p >= 1 && p <= totalPages) {
//       setPage(p);
//     }
//   };

//   return (
//   <div className="w-full">
//   <h2 className="text-xl font-semibold mb-6">My Orders</h2>

//   {/* Table for medium+ screens */}
//   <div className="overflow-x-auto hidden md:block">
//     <table className="min-w-[700px] w-full">
//       <thead>
//         <tr className="text-gray-500 text-sm border-b">
//           <th className="py-3 text-left">Order id</th>
//           <th className="py-3 text-left">Products</th>
//           <th className="py-3 text-left">Date</th>
//           <th className="py-3 text-left">Amount</th>
//           <th className="py-3 text-left">Details</th>
//           <th className="py-3 text-left">Review</th>
//         </tr>
//       </thead>
//       <tbody>
//         {paginatedOrders.map((order) => (
//           <tr key={order.id} className="border-b hover:bg-gray-50">
//             <td className="py-4 text-gray-500">{order.id}</td>
//             <td className="py-4">
//               <div className="flex items-center gap-4">
//                 <span className="text-gray-500 text-xl cursor-pointer">{"<"}</span>
//                 <img
//                   src={order.img}
//                   alt="Product"
//                   className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-md"
//                 />
//                 <span className="text-gray-500 text-xl cursor-pointer">{">"}</span>
//               </div>
//             </td>
//             <td className="py-4 text-gray-500">{order.date}</td>
//             <td className="py-4">{order.amount}</td>
//             <td className="py-4">
//               <button className="text-red-500 hover:underline text-sm md:text-base">View details</button>
//             </td>
//             <td className="py-4">
//               <button className="text-red-500 hover:underline text-sm md:text-base">Review order</button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   </div>

//   {/* Card layout for mobile */}
//   <div className="flex flex-col gap-4 md:hidden">
//     {paginatedOrders.map((order) => (
//       <div key={order.id} className="bg-white p-4 rounded-xl shadow flex flex-col gap-2">
//         <div className="flex justify-between items-center">
//           <span className="font-medium">Order ID: {order.id}</span>
//           <span>{order.date}</span>
//         </div>
//         <img src={order.img} alt="Product" className="w-full h-40 object-cover rounded-md" />
//         <div className="flex justify-between items-center">
//           <span>Amount: {order.amount}</span>
//           <div className="flex gap-2">
//             <button className="text-red-500 hover:underline text-sm">View details</button>
//             <button className="text-red-500 hover:underline text-sm">Review order</button>
//           </div>
//         </div>
//       </div>
//     ))}
//   </div>

//   {/* Pagination */}
//   <div className="flex justify-center items-center gap-3 mt-6">
//     <button
//       onClick={() => goToPage(page - 1)}
//       disabled={page === 1}
//       className="w-8 h-8 flex justify-center items-center border rounded-md disabled:opacity-50"
//     >
//       &lt;
//     </button>
//     {Array.from({ length: totalPages }, (_, i) => (
//       <button
//         key={i}
//         onClick={() => goToPage(i + 1)}
//         className={`w-8 h-8 rounded-md border ${
//           page === i + 1 ? "bg-red-500 text-white" : "hover:bg-gray-100"
//         }`}
//       >
//         {i + 1}
//       </button>
//     ))}
//     <button
//       onClick={() => goToPage(page + 1)}
//       disabled={page === totalPages}
//       className="w-8 h-8 flex justify-center items-center border rounded-md disabled:opacity-50"
//     >
//       &gt;
//     </button>
//   </div>
// </div>

//   );
// }