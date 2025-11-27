"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaQuestion, FaArrowRight } from "react-icons/fa";
import type { Variants } from "framer-motion";



// --- FAQ Data ---
const faqs = [
  {
    question: "What types of processes can you automate?",
    answer:
      "We specialize in automating repetitive digital tasks, data entry, cross-platform syncing, and complex multi-step workflows involving AI agents. If it involves data moving between apps, we can likely automate it.",
  },
  {
    question: "Do I need technical knowledge to use your service?",
    answer:
      "Not at all. Our platform is designed to be user-friendly. We handle the complex logic in the background while giving you a simple dashboard to monitor and control your agents.",
  },
  {
    question: "Can you integrate with our existing tools?",
    answer:
      "Yes, we support integrations with over 2,000 popular business apps including Slack, Notion, Salesforce, HubSpot, and Google Workspace via standard APIs.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "Simple workflows can be live in 24 hours. More complex, custom AI agent deployments typically take 1-2 weeks to fully test and integrate into your production environment.",
  },
  {
    question: "Is your AI secure and compliant?",
    answer:
      "Security is our top priority. We are SOC2 compliant, use end-to-end encryption for all data processing, and never train our public models on your private data.",
  },
];

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut", // Now VALID
    },
  },
};

export default function FAQSection() {
  return (
    <section className="w-full py-20 px-6 flex justify-center">
      <div className="w-full max-w-6xl">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
            <span className="text-purple-300 text-xs font-medium tracking-wider uppercase flex items-center gap-2">
              <FaQuestion className="text-[10px]" /> FAQ's
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Frequently Asked <span className="font-serif italic font-light text-purple-400">Questions</span>
          </h2>
          <p className="text-neutral-400 mt-4 text-lg">
            Find quick answers to the most common support questions.
          </p>
        </motion.div>

        {/* GRID LAYOUT */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          
          {/* LEFT COLUMN: CTA CARD */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="h-full p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col items-center justify-center text-center relative overflow-hidden group">
              
              {/* Background Gradient Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="w-14 h-14 rounded-2xl bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 relative z-10 shadow-lg">
                <FaQuestion className="text-purple-400 text-xl" />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3 relative z-10">
                Still Have Questions?
              </h3>
              <p className="text-neutral-400 text-sm mb-8 leading-relaxed relative z-10">
                Can't find the answer you're looking for? Please chat to our friendly team.
              </p>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="
                  relative z-10
                  flex items-center gap-2
                  px-6 py-3 
                  rounded-xl 
                  bg-white/10 border border-white/10 
                  text-white font-medium text-sm
                  hover:bg-purple-600 hover:border-purple-500 
                  transition-all duration-300
                "
              >
                Ask A Question <FaArrowRight className="text-xs" />
              </motion.button>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: ACCORDION */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}

// --- Helper Component: Individual Accordion Item ---
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div variants={itemVariants}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`
          group cursor-pointer
          rounded-2xl border 
          transition-all duration-300
          ${isOpen 
            ? "bg-white/10 border-purple-500/30" 
            : "bg-white/5 border-white/10 hover:bg-white/8 hover:border-white/20"
          }
        `}
      >
        <div className="p-5 md:p-6 flex items-center justify-between gap-4">
          <h3 className={`font-medium text-base md:text-lg transition-colors ${isOpen ? "text-white" : "text-neutral-200"}`}>
            {question}
          </h3>
          <div className={`
            flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300
            ${isOpen ? "bg-purple-500 border-purple-500 rotate-45" : "bg-transparent border-white/20 group-hover:border-white/40"}
          `}>
            {/* Note: Rotation is handled by CSS rotate-45 above which turns Plus to X */}
            <FaPlus className={`text-xs transition-colors ${isOpen ? "text-white" : "text-neutral-400"}`} />
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.42, 0, 0.58, 1] }}
              className="overflow-hidden"
            >
              <p className="px-5 pb-6 md:px-6 md:pb-6 text-neutral-400 text-sm leading-relaxed">
                {answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}