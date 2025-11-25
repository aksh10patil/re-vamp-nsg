// "use client";

// import React from "react";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { Sparkles, MapPin, Phone, Mail, ChevronDown, ArrowRight } from "lucide-react";

// // --- Data Definitions ---
// const servicesLinks = [
//   "Web Development",
//   "Artificial intelligence",
//   "Mobile App",
//   "Social Media",
//   "Complete Solutions",
// ];

// const menuLinks = ["Home", "Portfolio", "Use Cases", "Prices"];

// const legalLinks = ["Privacy Policy", "Terms of Service", "Cookie Policy", "Data Processing"];

// // --- Animation Variants ---

// // Controls the staggered entrance of the main grid columns
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.15,
//       delayChildren: 0.3,
//     },
//   },
// };

// // Controls how each individual column fades up
// const itemVariants = {
//   hidden: { y: 20, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };

// // The slow, attention-grabbing pulse for the top star
// const starVariants = {
//   animate: {
//     scale: [1, 1.1, 1],
//     rotate: [0, 5, -5, 0],
//     opacity: [0.8, 1, 0.8],
//     transition: {
//       duration: 4,
//       ease: "easeInOut",
//       repeat: Infinity,
//     },
//   },
// };

// // --- Sub-components for cleaner JSX ---

// // A hoverable link with a subtle arrow reveal effect
// const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
//   <motion.li className="group">
//     <Link
//       href={href}
//       className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-1 relative overflow-hidden"
//     >
//       {/* subtle purple shine effect on hover */}
//       <span className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
//       <span className="relative z-10">{children}</span>
//     </Link>
//   </motion.li>
// );


// // The Main Component
// const AnimatedFooter = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-[#050505] text-white relative overflow-hidden pt-16 pb-8 px-6 md:px-12 lg:px-20 border-t border-white/10 font-sans">
//       {/* --- Background Ambiance --- */}
//       {/* A very subtle purple glow at the top center to give depth */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none" />


//       {/* --- Top Header Section --- */}
//       <motion.div 
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="flex flex-col items-center text-center mb-16 relative z-10"
//       >
//         <motion.div variants={starVariants} animate="animate" className="mb-6 text-white">
//           {/* Using Lucide icon, adjusted to look like the image star */}
//           <Sparkles className="w-10 h-10 text-white/90 fill-white/20" strokeWidth={1.5} />
//         </motion.div>
//         <h2 className="text-xl md:text-2xl text-gray-300 max-w-2xl font-light">
//           We transform ideas into innovative digital solutions for your business.
//         </h2>
//       </motion.div>


//       {/* --- Main Grid Content --- */}
//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.2 }}
//         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 relative z-10"
//       >
//         {/* Column 1: Services */}
//         <motion.div variants={itemVariants}>
//           <h3 className="text-xl font-semibold mb-6 text-white">Services</h3>
//           <ul className="space-y-4">
//             {servicesLinks.map((link, index) => (
//               <FooterLink key={index} href="#">{link}</FooterLink>
//             ))}
//           </ul>
//         </motion.div>

//         {/* Column 2: Menu */}
//         <motion.div variants={itemVariants}>
//           <h3 className="text-xl font-semibold mb-6 text-white">Menu</h3>
//           <ul className="space-y-4 mb-6">
//             {menuLinks.map((link, index) => (
//               <FooterLink key={index} href="#">{link}</FooterLink>
//             ))}
//           </ul>
          
//           {/* Instruments Dropdown Mockup */}
//           <motion.button
//              whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
//              className="flex items-center justify-between w-full text-gray-400 border-b border-white/10 pb-2 group hover:text-white transition-colors"
//           >
//             <span>Instruments</span>
//             <ChevronDown className="w-5 h-5 group-hover:text-purple-400 transition-colors" />
//           </motion.button>
//         </motion.div>

//         {/* Column 3: Contacts */}
//         <motion.div variants={itemVariants}>
//           <h3 className="text-xl font-semibold mb-6 text-white">Contacts</h3>
//           <ul className="space-y-6 text-gray-400">
//             <li className="flex items-start gap-3 hover:text-white transition-colors">
//               <MapPin className="w-6 h-6 text-purple-400 shrink-0 mt-1" />
//               <span>Via alla Chiesa 40, 6595 Riazzino</span>
//             </li>
//             <li className="flex items-center gap-3 hover:text-white transition-colors">
//               <Phone className="w-6 h-6 text-purple-400 shrink-0" />
//               <span>+41 79 945 33 73</span>
//             </li>
//             <li className="flex items-center gap-3 hover:text-white transition-colors group">
//               <Mail className="w-6 h-6 text-purple-400 shrink-0 group-hover:animate-bounce" />
//               <a href="mailto:info@northstargroup.ch" className="transition-colors">info@northstargroup.ch</a>
//             </li>
//           </ul>
//         </motion.div>

//         {/* Column 4: CTA */}
//         <motion.div variants={itemVariants} className="lg:pl-8">
//           <h3 className="text-2xl font-semibold mb-6 text-white">Get Started Now</h3>
          
//           {/* Animated CTA Button */}
//           <motion.button
//             whileHover={{ scale: 1.03 }}
//             whileTap={{ scale: 0.97 }}
//             className="group relative w-full py-4 px-6 mb-6 bg-gradient-to-r from-[#7F56D9] to-[#4766E2] rounded-xl text-lg font-medium overflow-hidden shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-shadow"
//           >
//             <span className="relative z-10 flex items-center justify-center gap-2">
//               Start your project
//               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </span>
//              {/* Shimmer effect overlay */}
//             <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
//           </motion.button>

//           <p className="text-gray-400 leading-relaxed">
//             Let's talk about your project and turn your ideas into digital reality.
//           </p>
//         </motion.div>
//       </motion.div>


//       {/* --- Bottom Section --- */}
//       <motion.div 
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true, delay: 0.5 }}
//         className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-sm text-gray-500 relative z-10"
//       >
//         <p className="mb-4 md:mb-0">
//           © {currentYear} northstargroup. All rights reserved.
//         </p>
//         <ul className="flex flex-wrap justify-center gap-6 lg:gap-8">
//             {legalLinks.map((link, index) => (
//                 <li key={index}>
//                     <Link href="#" className="hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-purple-400 hover:after:w-full after:transition-all after:duration-300">
//                         {link}
//                     </Link>
//                 </li>
//             ))}
//         </ul>
//       </motion.div>

//       {/* Replicating the small privacy badge from the image bottom right */}
//       <div className="absolute bottom-4 right-4 bg-white text-black text-[10px] p-1 rounded shadow-sm opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
//          Privacy - Terms
//       </div>
//     </footer>
//   );
// };

// export default AnimatedFooter;