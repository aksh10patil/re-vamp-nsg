"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaQuestion, FaArrowRight } from "react-icons/fa";
import type { Variants } from "framer-motion";


// --- FAQ Data ---
const faqs = [
  {
    question: "Quali tipi di processi potete automatizzare?",
    answer:
      "Siamo specializzati nell'automazione di attività digitali ripetitive, inserimento dati, sincronizzazione multipiattaforma e workflow complessi a più step che coinvolgono agenti AI. Se si tratta di dati che si spostano tra app, molto probabilmente possiamo automatizzarlo.",
  },
  {
    question: "Devo avere conoscenze tecniche per usare il vostro servizio?",
    answer:
      "Assolutamente no. La nostra piattaforma è progettata per essere facile da usare. Noi gestiamo tutta la logica complessa in background mentre ti forniamo una dashboard semplice per monitorare e controllare i tuoi agenti.",
  },
  {
    question: "Potete integrarvi con i nostri strumenti esistenti?",
    answer:
      "Sì, supportiamo integrazioni con oltre 2.000 applicazioni business popolari tra cui Slack, Notion, Salesforce, HubSpot e Google Workspace tramite API standard.",
  },
  {
    question: "Quanto tempo richiede l’implementazione?",
    answer:
      "I workflow semplici possono essere operativi in 24 ore. Le implementazioni personalizzate con agenti AI complessi richiedono in genere 1–2 settimane per essere completamente testate e integrate nel vostro ambiente di produzione.",
  },
  {
    question: "La vostra AI è sicura e conforme alle normative?",
    answer:
      "La sicurezza è la nostra massima priorità. Siamo conformi a SOC2, utilizziamo crittografia end-to-end per tutta l’elaborazione dei dati e non utilizziamo mai i vostri dati privati per addestrare modelli pubblici.",
  },
];

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
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
              <FaQuestion className="text-[10px]" /> FAQ
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Domande{" "}
            <span className="font-serif italic font-light" style={{ color: "#A797F7" }}>
              Frequenti
            </span>
          </h2>
          <p className="text-neutral-400 mt-4 text-lg">
            Trova risposte rapide alle domande più comuni.
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          
          {/* LEFT COLUMN - CTA */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="h-full p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col items-center justify-center text-center relative overflow-hidden group">
              
              {/* Hover BG */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="w-14 h-14 rounded-2xl bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 relative z-10 shadow-lg">
                <FaQuestion className="text-nsg text-xl" />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3 relative z-10">
                Hai ancora domande?
              </h3>
              <p className="text-neutral-400 text-sm mb-8 leading-relaxed relative z-10">
                Non trovi la risposta che cerchi? Parla con il nostro team.
              </p>
              
              <motion.a
                href="https://cal.northstargroup.ch/nsg/book"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="
                  relative z-10
                  flex items-center gap-2
                  px-6 py-3 rounded-xl 
                  bg-white/10 border border-white/10 
                  text-white font-medium text-sm
                  hover:bg-purple-600 hover:border-purple-500 
                  transition-all duration-300
                "
              >
                Fai una domanda <FaArrowRight className="text-xs" />
              </motion.a>

            </div>
          </motion.div>

          {/* RIGHT COLUMN - FAQ ACCORDION */}
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


// --- FAQ Item Component ---
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div variants={itemVariants}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`
          group cursor-pointer rounded-2xl border transition-all duration-300
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
