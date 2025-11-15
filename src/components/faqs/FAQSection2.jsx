import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "How long does it take to install a solar panel system?",
    answer:
      "Installation typically takes 1-3 days, depending on the system size and complexity.",
  },
  {
    question: "Do solar panels require maintenance?",
    answer:
      "Solar panels require minimal maintenance. Cleaning them a few times a year and ensuring they are free from dust and debris is sufficient.",
  },
  {
    question: "Can I install solar panels on any type of roof?",
    answer:
      "Solar panels can be installed on most roof types, but the roof’s material, angle, and shading conditions may affect installation.",
  },
  {
    question: "How much roof space do I need for solar panels?",
    answer:
      "The required space depends on energy consumption and panel efficiency, but an average home system needs around 200-400 square feet.",
  },
];

const FAQSection2 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mx-auto py-16 px-8 flex flex-col md:flex-row items-center gap-20 bg-blue-50">

      {/* Image */}
      <div className="md:w-2/5 flex justify-center">
        <img src="/fq.webp" alt="Solar Panels" className="w-full  rounded-xl " />
      </div>

      {/* FAQ Content */}
      <div className="md:w-3/5 space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-2 ml-5">
          Installation & Maintenance
        </h2>
        <div className="w-24 h-1 bg-orange-500 rounded-full mb-2 ml-7"></div>
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`overflow-hidden rounded-2xl transition-all duration-300 ${openIndex === index ? "bg-white shadow-lg" : "bg-transparent"
              }`}
          >
            <button
              className="w-full flex justify-between items-center p-6 text-left hover:bg-white/70 transition duration-300 rounded-t-2xl"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-semibold text-gray-900 text-lg">{faq.question}</span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaChevronDown className="text-[#f47c20] text-xl" />
              </motion.div>
            </button>

            {/* Simple Line */}
            <div className="border-b border-gray-300 mx-6"></div>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden bg-white text-gray-700 rounded-b-2xl"
                >
                  <div className="p-6">{faq.answer}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>


    </section>
  );
};

export default FAQSection2;
