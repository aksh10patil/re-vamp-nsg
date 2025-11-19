// "use client";
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const items = [
//   { label: "Dashboard", icon: "🏠" },
//   { label: "Reports", icon: "📊" },
//   { label: "Settings", icon: "⚙️" },
//   { label: "Help", icon: "❓" },
// ];

// export default function Sidebar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       {/* MOBILE TOP BAR */}
//       <div className="md:hidden flex justify-between items-center px-4 py-4 bg-black">
//         <div className="text-white font-semibold text-lg tracking-widest">
//           FEATURE
//         </div>
//         <button
//           onClick={() => setOpen(!open)}
//           className="text-white text-xl"
//         >
//           {open ? "✕" : "☰"}
//         </button>
//       </div>

//       {/* MOBILE MENU DROPDOWN */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ height: 0 }}
//             animate={{ height: "auto" }}
//             exit={{ height: 0 }}
//             transition={{ duration: 0.3 }}
//             className="md:hidden overflow-hidden bg-black/95 px-4 py-4"
//           >
//             <nav className="flex flex-col gap-4">
//               {items.map((it) => (
//                 <a
//                   key={it.label}
//                   href={"#" + it.label.toLowerCase()}
//                   className="flex items-center gap-4 text-white/80 hover:text-white transition"
//                 >
//                   <span>{it.icon}</span>
//                   <span>{it.label}</span>
//                 </a>
//               ))}
//             </nav>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* DESKTOP SIDEBAR */}
//       <aside className="hidden md:block w-64 min-h-screen px-6 py-8 border-r border-white/5 bg-black/40 backdrop-blur-xl">
//         <div className="mb-8">
//           <div className="text-white text-2xl font-semibold tracking-widest">
//             FEATURE
//           </div>
//         </div>

//         <nav className="flex flex-col gap-4">
//           {items.map((it) => (
//             <a
//               key={it.label}
//               href={"#" + it.label.toLowerCase()}
//               className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-300 hover:bg-white/5 transition"
//             >
//               <span>{it.icon}</span>
//               <span className="font-medium">{it.label}</span>
//             </a>
//           ))}
//         </nav>
//       </aside>
//     </>
//   );
// }
