"use client";

import { motion } from "framer-motion";
import { FaChartBar, FaShareAlt, FaTachometerAlt } from "react-icons/fa";

const cardVariants = {
  initial: { scale: 1, y: 0, opacity: 1 },
  hover: {
    scale: 1.03,
    y: -6,
    boxShadow: "0 0 45px rgba(150, 90, 255, 0.22)",
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

const iconVariants = {
  initial: { scale: 1, opacity: 0.9 },
  hover: {
    scale: 1.14,
    opacity: 1,
    transition: { duration: 0.36, ease: "easeOut" },
  },
};

export default function WhyChooseUs() {
  const features = [
    {
      title: "Real-Time Intelligence",
      desc: "Access accurate, real-time data to drive smarter decisions",
      icon: <FaTachometerAlt className="text-[#cdb6ff] text-5xl" />,
    },
    {
      title: "Measurable Impact",
      desc: "Track performance, uncover insights, and achieve data-backed growth",
      icon: <FaChartBar className="text-[#cdb6ff] text-5xl" />,
    },
    {
      title: "Seamless Integration",
      desc: "Connect tools, teams, and workflows with intelligent automation",
      icon: <FaShareAlt className="text-[#cdb6ff] text-5xl" />,
    },
  ];

  return (
    <section className="w-full py-10 px-6 flex flex-col items-center">
      <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs mb-4">
        BENEFITS
      </div>

      <h2 className="text-white text-4xl md:text-5xl font-semibold tracking-tight">
        Why Choose <span className="italic text-[#d8c7ff]">Us?</span>
      </h2>

      <p className="text-neutral-400 text-center max-w-xl mt-4">
        Everything you need to automate, optimize, and scale
      </p>

      <div
        className="
          mt-10 grid 
          grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
          gap-8 w-full max-w-7xl
        "
      >
        {features.map((item, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
            className="
              p-8 sm:p-10 rounded-3xl
              backdrop-blur-xl 
              bg-white/5 
              border border-white/10 
              transition-all
              hover:border-purple-400/30
              relative overflow-hidden
              flex flex-col
            "
          >
            {/* Hover glow (absolute) */}
            <motion.div
              variants={iconVariants}
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 20% 20%, rgba(150,80,255,0.12), transparent 30%)",
                opacity: 0,
              }}
            />

            <motion.div variants={iconVariants} className="mb-6">
              {item.icon}
            </motion.div>

            <h3 className="text-white text-xl font-semibold mb-3">
              {item.title}
            </h3>

            <p className="text-neutral-400 leading-relaxed mt-auto">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
