"use client";

import { motion } from "framer-motion";
import { FaCheck, FaCube, FaUsers, FaClock, FaEnvelope, FaDatabase, FaStar, FaSearch, FaUserFriends, FaChartLine, FaCode } from "react-icons/fa";
import AnimationCardContinued from "./AnimationCardContinued";

export default function AnimationCard() {
  const tasks = [
    { icon: <FaEnvelope />, text: "Social media post" },
    { icon: <FaUsers />, text: "Employee Tracking" },
    { icon: <FaClock />, text: "Payment reminder" },
  ];

  const orbitIcons = [
    <FaEnvelope size={26} key="1" />,
    <FaUsers size={26} key="2" />,
    <FaDatabase size={26} key="3" />,
    <FaStar size={26} key="4" />,
  ];

  return (

        <div>
<section className="w-full px-6">
  <div
    className="
      max-w-7xl 
      mx-auto 
      grid 
      grid-cols-1 
      lg:grid-cols-2 
      gap-10 
      items-stretch
    "
  >
    {/* LEFT CARD */}
    <div
      className="
        p-8 
        rounded-3xl 
        bg-white/5 
        border border-white/10 
        backdrop-blur-xl
        flex 
        flex-col 
        justify-between
        min-h-[480px]
        h-full
      "
    >
      <div className="flex flex-col gap-4">
        {tasks.map((task, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{
              delay: index * 0.2,
              duration: 0.5,
              ease: "easeOut",
            }}
            className="
              w-full 
              flex items-center justify-between 
              px-4 py-3 
              rounded-xl 
              bg-white/5 
              border border-white/10 
              backdrop-blur-xl 
              text-white
            "
          >
            <div className="flex items-center gap-3 text-neutral-200">
              <div className="text-purple-300 text-lg">{task.icon}</div>
              <span className="text-sm">{task.text}</span>
            </div>

            <motion.div
              initial={{ scale: 0.4, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.2 }}
              className="
                w-6 h-6 
                rounded-full 
                flex items-center justify-center 
                bg-purple-500/20 
                border border-purple-400/30
              "
            >
              <FaCheck className="text-purple-200 text-sm" />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Text Bottom */}
      <div className="mt-10">
        <h3 className="text-white text-2xl font-semibold">
          Automate repetitive tasks
        </h3>
        <p className="text-neutral-400 mt-2 leading-relaxed">
          We help you streamline internal operations by automating manual workflows.
        </p>
      </div>
    </div>

    {/* RIGHT CARD */}
    <div
      className="
        p-8 
        rounded-3xl 
        bg-white/5 
        border border-white/10 
        backdrop-blur-xl 
        relative 
        overflow-hidden
        flex 
        flex-col 
        justify-between
        min-h-[480px]
        h-full
        text-center
      "
    >
      {/* Glow */}
      <div
        className="
          absolute left-1/2 top-1/2 
          -translate-x-1/2 -translate-y-1/2 
          w-48 h-48 
          rounded-full 
          bg-[radial-gradient(circle,rgba(150,80,255,0.25),transparent)]
          blur-2xl
        "
      />

      {/* Orbiting Icons */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        className="relative w-64 h-64 mx-auto hidden sm:block"
      >
        {orbitIcons.map((icon, i) => (
          <motion.div
            key={i}
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.3 }}
            className="
              absolute left-1/2 top-1/2 
              -translate-x-1/2 -translate-y-1/2
              w-10 h-10 
              flex items-center justify-center 
              bg-white/5 
              border border-white/10 
              rounded-xl 
              text-neutral-200
            "
            style={{
              rotate: `${(360 / orbitIcons.length) * i}deg`,
              transformOrigin: "0 120px",
            }}
          >
            {icon}
          </motion.div>
        ))}
      </motion.div>

      {/* Center Icon */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0.8 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="
          absolute left-1/2 top-1/2 
          -translate-x-1/2 -translate-y-1/2 
          w-20 h-20 
          rounded-full 
          bg-black/40 
          border border-white/10 
          flex items-center justify-center 
          shadow-[0_0_40px_rgba(150,80,255,0.4)]
        "
      >
        <FaStar className="text-white text-3xl" />
      </motion.div>

      {/* Text Bottom */}
      <div className="mt-auto pt-12">
        <h3 className="text-white text-2xl font-semibold">
          Automated Workflows
        </h3>
        <p className="text-neutral-400 mt-2 leading-relaxed">
          Boost efficiency across teams with smart automation.
          Build intelligent workflows that automate multi-step processes across tools and platforms.
        </p>
      </div>
    </div>
  </div>
</section>

     

    

    
    <AnimationCardContinued />

       </div>
  );
}
