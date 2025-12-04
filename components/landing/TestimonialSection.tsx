"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import type { Variants } from "framer-motion";

// Testimonial Data
const testimonials = [
  {
    name: "Daniel Kim",
    title: "Responsabile Operativo presso Flowbyte",
    avatar: "/images/people/p2.jpg",
    quote:
      "Davvero impressionante. L’assistente AI è veloce, preciso e si integra senza attriti nelle nostre operazioni quotidiane.",
  },
  {
    name: "Darsh Mehra",
    title: "CTO presso Brightstack Labs",
    avatar: "/images/people/p1.jpg",
    quote:
      "Una rivoluzione. I flussi automatizzati funzionano alla perfezione. Il nostro team ora si concentra solo su ciò che conta davvero.",
  },
  {
    name: "Elena Rodriguez",
    title: "Product Manager presso Nexora",
    avatar: "/images/people/p3.jpg",
    quote:
      "Configurazione fluida. Il loro sistema ha sostituito tre strumenti. Abbiamo visto miglioramenti già nella prima settimana.",
  },
  {
    name: "Sheyna Thompson",
    title: "Marketing Director presso OrbitShift",
    avatar: "/images/people/p4.jpg",
    quote:
      "Sorprendentemente semplice. L’AI si adatta rapidamente. Le nostre campagne ora funzionano il doppio più efficientemente.",
  },
  {
    name: "Sarah Wong",
    title: "Responsabile Analytics presso Corelink",
    avatar: "/images/people/p5.jpg",
    quote:
      "Un enorme risparmio di tempo. I dati sono più organizzati e gli insight che otteniamo sono rapidi e utilizzabili.",
  },
  {
    name: "Ravi Shah",
    title: "COO presso PixelNext Solutions",
    avatar: "/images/people/p6.jpg",
    quote:
      "Molto intuitivo. Nessun fronzolo, solo prestazioni. I nostri processi interni finalmente sono sotto controllo.",
  },
];

// Animation variants
const testimonialContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const testimonialCardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function TestimonialSection() {
  return (
    <section className="w-full py-16 px-6 text-white flex flex-col items-center">
      <div className="text-center mb-12 max-w-2xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold tracking-tight text-white mb-3"
        >
          Scelto dai <span className="text-nsg">Visionari</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-neutral-400 text-lg"
        >
          Le testimonianze reali di chi ha raggiunto risultati grazie alla nostra automazione.
        </motion.p>
      </div>

      <motion.div
        variants={testimonialContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl"
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            variants={testimonialCardVariants}
            whileHover={{ y: -8, boxShadow: "0 10px 20px rgba(168,85,247,0.2)" }}
            className="
              relative p-6 rounded-2xl
              bg-white/5 border border-white/10
              backdrop-blur-xl flex flex-col
              transition-all duration-300 ease-out
            "
          >
            <div className="absolute inset-0 opacity-10 blur-xl bg-gradient-to-br from-purple-500/10 via-transparent to-purple-500/5 rounded-2xl pointer-events-none" />

            <div className="flex items-center mb-4 relative z-10">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-purple-500/50 flex-shrink-0">
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
                <p className="text-neutral-400 text-sm">{testimonial.title}</p>
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
