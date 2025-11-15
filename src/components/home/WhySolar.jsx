import React from "react";
import { motion } from "framer-motion";

const WhySolar = () => {
  const benefits = [
    {
      imgSrc: "/why/sun.png",
      title: "Renewable Energy",
      description: "Solar power is a clean and unlimited source of energy from the sun.",
    },
    {
      imgSrc: "/why/coin.png",
      title: "Save Money",
      description: "Reduce electricity bills and earn through solar incentives.",
    },
    {
      imgSrc: "/why/biodegradable.png",
      title: "Eco-Friendly",
      description: "Lower your carbon footprint and help protect the environment.",
    },
    {
      imgSrc: "/why/energy.png",
      title: "Energy Independence",
      description: "Generate your own electricity and reduce reliance on the grid.",
    },
  ];

  // Parent animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4, // Slightly increased stagger delay
        delayChildren: 0.2,
      },
    },
  };

  // Card animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
  };

  return (
    <section className="py-20 px-8 md:px-16 lg:px-24 bg-blue-50">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading Animation */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100, damping: 12 }}
          viewport={{ once: true }}
          className="text-5xl font-extrabold text-orange-500 mb-6"
        >
          Why Choose Solar?
        </motion.h2>

        {/* Subtitle Animation */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 90, damping: 12 }}
          viewport={{ once: true }}
          className="text-lg text-orange-800 mb-12 max-w-2xl mx-auto"
        >
          Discover the benefits of switching to solar energy for a sustainable and cost-effective future.
        </motion.p>

        {/* Grid Container with Staggered Animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 30px rgba(244, 124, 32, 0.3)",
              }}
              className="bg-white/90 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-orange-200 hover:border-orange-500 transition-all duration-300"
            >
              {/* Image Animation */}
              <motion.div
                className="mb-4 flex justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3, type: "spring", stiffness: 100, damping: 10 }}
                viewport={{ once: true }}
              >
                <img
                  src={benefit.imgSrc}
                  alt={benefit.title}
                  className="w-20 h-20 object-contain"
                />
              </motion.div>

              {/* Text Content */}
              <h3 className="text-2xl font-semibold text-orange-900">{benefit.title}</h3>
              <p className="text-orange-800 mt-3">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhySolar;


// import React from "react";
// import { useEffect } from "react";
// import { motion } from "framer-motion";

// const WhyChooseSolar = () => {
//   return (
//     <section className="bg-blue-50 py-12 text-center">
//       <div className="max-w-4xl mx-auto">
//         <h2 className="text-3xl font-bold text-orange-500">Why Choose Solar?</h2>
//         <p className="text-brown-700 mt-2">
//           Discover the benefits of switching to solar energy for a sustainable and cost-effective future.
//         </p>
//       </div>
//       <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 max-w-6xl mx-auto">
//         {benefits.map((benefit, index) => (
//           <motion.div
//             key={index}
//             className="bg-white shadow-lg rounded-xl p-6 border border-orange-100 hover:shadow-xl transition-all"
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: index * 0.2 }}
//             viewport={{ once: true }}
//           >
//             <div className="flex justify-center mb-4">
//               <img src={benefit.icon} alt={benefit.title} className="w-16 h-16" />
//             </div>
//             <h3 className="text-xl font-semibold text-brown-700">{benefit.title}</h3>
//             <p className="text-brown-600 mt-2">{benefit.description}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// const benefits = [
//   {
//     title: "Renewable Energy",
//     description: "Solar power is a clean and unlimited source of energy from the sun.",
//     icon: "https://cdn-icons-png.flaticon.com/128/869/869869.png",
//   },
//   {
//     title: "Save Money",
//     description: "Reduce electricity bills and earn through solar incentives.",
//     icon: "https://cdn-icons-png.flaticon.com/128/2592/2592102.png",
//   },
//   {
//     title: "Eco-Friendly",
//     description: "Lower your carbon footprint and help protect the environment.",
//     icon: "https://cdn-icons-png.flaticon.com/128/189/189001.png",
//   },
//   {
//     title: "Energy Independence",
//     description: "Generate your own electricity and reduce reliance on the grid.",
//     icon: "https://cdn-icons-png.flaticon.com/128/3603/3603104.png",
//   },
// ];

// export default WhyChooseSolar;
