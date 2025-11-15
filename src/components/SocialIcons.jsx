import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
    FaPlus,
  } from "react-icons/fa";
  import { IoIosArrowDown } from "react-icons/io";

  
const SocialIcons = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed right-0 top-32 flex flex-col items-center gap-4 z-50">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-orange-500 p-4 rounded-l-2xl shadow-lg text-white text-2xl hover:bg-orange-600 transition duration-300"
        whileTap={{ scale: 0.9 }}
      >
        <IoIosArrowDown />
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-4"
          >
            {[{
              href: "https://www.instagram.com/",
              icon: <FaInstagram className="text-pink-500 text-2xl hover:text-white" />,
              bgHover: "hover:bg-pink-500",
            },
            {
              href: "https://www.linkedin.com/",
              icon: <FaLinkedin className="text-blue-700 text-2xl hover:text-white" />,
              bgHover: "hover:bg-blue-700",
            },
            {
              href: "https://www.facebook.com/",
              icon: <FaFacebookF className="text-blue-600 text-2xl hover:text-white" />,
              bgHover: "hover:bg-blue-600",
            },
            {
              href: "https://www.twitter.com/",
              icon: <FaTwitter className="text-blue-400 text-2xl hover:text-white" />,
              bgHover: "hover:bg-blue-400",
            }].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-white p-3 rounded-full shadow-lg transition duration-300 ${item.bgHover}`}
                whileHover={{ y: -3 }}
              >
                {item.icon}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SocialIcons;
