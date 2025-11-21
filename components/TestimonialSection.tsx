"use client";

import { motion } from "framer-motion";
import Image from "next/image"; // Assuming Next.js for Image component
import React from "react";
import type { Variants } from "framer-motion";

// Testimonial Data
const testimonials = [
  {
    name: "Daniel Kim",
    title: "Operations Lead at Flowbyte",
    avatar: "/images/people/p2.jpg", // Replace with actual paths
    quote: "Truly impressive. The AI assistant is fast, accurate, and blends into our daily ops without friction.",
  },
  {
    name: "Darsh Mehra",
    title: "CTO at Brightstack Labs",
    avatar: "/images/people/p1.jpg",
    quote: "Game-changer. Automation flows run flawlessly. Our team now focuses only on what really matters.",
  },
  {
    name: "Elena Rodriguez",
    title: "Product Manager at Nexora",
    avatar: "/images/people/p3.jpg",
    quote: "Smooth setup. Their system replaced three tools. We saw improvements in just the first week.",
  },
  {
    name: "Sheyna Thompson",
    title: "Marketing Director at OrbitShift Director",
    avatar: "/images/people/p4.jpg",
    quote: "Surprisingly simple. The AI adapts quickly. Our campaigns are now running 2x more efficiently.",
  },
  {
    name: "Sarah Wong",
    title: "Analytics Manager at Corelink",
    avatar: "/images/people/p5.jpg",
    quote: "Huge time-saver. Data is better organized. The insights we get now are actionable and fast.",
  },
  {
    name: "Ravi Shah",
    title: "COO at PixelNext Solutions",
    avatar: "/images/people/p6.jpg",
    quote: "Very intuitive. No fluff, just performance. Our internal processes finally feel under control.",
  },
];

// Animation variants for staggered appearance
const testimonialContainerVariants : Variants  = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger delay for each testimonial card
    },
  },
};

const testimonialCardVariants : Variants  = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function TestimonialSection() {
  return (
    <section className="w-full py-16 px-6 bg-neutral-950 text-white flex flex-col items-center">
      <div className="text-center mb-12 max-w-2xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold tracking-tight text-white mb-3"
        >
          Trusted by <span className="text-purple-400">Visionaries</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-neutral-400 text-lg"
        >
          Hear from real users who achieved success with our automation.
        </motion.p>
      </div>

      <motion.div
        variants={testimonialContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of section is visible
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl"
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            variants={testimonialCardVariants}
            whileHover={{ y: -8, boxShadow: "0 10px 20px rgba(168,85,247,0.2)" }} // Lift and glow on hover
            className="
              relative p-6 rounded-2xl
              bg-white/5 border border-white/10
              backdrop-blur-xl flex flex-col
              transition-all duration-300 ease-out
            "
          >
            {/* Optional subtle background pattern/glow for each card */}
            <div className="absolute inset-0 opacity-10 blur-xl bg-gradient-to-br from-purple-500/10 via-transparent to-purple-500/5 rounded-2xl pointer-events-none" />

            <div className="flex items-center mb-4 relative z-10">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-purple-500/50 flex-shrink-0">
                {/* Use Next.js Image component for optimization */}
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  objectFit="cover"
                />
              </div>
              <div className="ml-4">
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-neutral-400 text-sm">
                  {testimonial.title}
                </p>
              </div>
            </div>
            <p className="text-neutral-300 text-base leading-relaxed relative z-10">
              "{testimonial.quote}"
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}