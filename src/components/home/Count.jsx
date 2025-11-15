import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

// Import images (Replace these with actual image URLs or local images)

// import experienceImg from "./count/qualified.png";
// import satisfactionImg from "./count/satisfaction.png";
// import projectsImg from "./count/projects.png";
// import engineersImg from "./count/engineers.png";

const stats = [
    { number: 11, label: "Years of Experience", img: "/count/hourglass.png" },
    { number: 1000, label: "Customer Satisfaction", img: "/count/chat.png" },
    { number: 125, label: "Projects Successfully Completed", img: "/count/check.png" },
    { number: 200, label: "Experienced Engineers", img: "/count/qualified.png" },
  ];
  
const Count = () => {
  const [countValues, setCountValues] = useState(stats.map(() => 0));
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setCountValues((prev) =>
          prev.map((val, index) =>
            val < stats[index].number ? val + Math.ceil(stats[index].number / 100) : stats[index].number
          )
        );
      }, 20);

      setTimeout(() => clearInterval(interval), 2000);
    }
  }, [isInView]);

  return (
    <div ref={ref} className="bg-blue-50 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white shadow-xl rounded-xl p-8 text-center border-b-4 border-orange-500 transition-transform duration-300 hover:scale-105"
          >
            <div className="flex justify-center items-center mb-4">
              <img src={stat.img} alt={stat.label} className="w-16 h-16 object-contain" />
            </div>
            <h2 className="text-4xl font-extrabold text-gray-800">
              {countValues[index].toLocaleString()}+
            </h2>
            <p className="text-orange-500 text-lg font-medium">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Count;
