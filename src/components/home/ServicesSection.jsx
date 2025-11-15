// import React, { useRef } from "react";
// import { motion } from "framer-motion";

// const ServicesSection = () => {
//   const sections = useRef([]);

//   const services = [
//     {
//       title: "Solar Panels",
//       description:
//         "We design and produce our own solar panels, ensuring they meet top industry standards. This provides you with efficient, reliable, and cost-effective solar solutions.",
//       image: "/solaar.webp",
//     },
//     {
//       title: "EV Chargers",
//       description:
//         "Our EV chargers are fast, efficient, and compatible with multiple vehicle models. We provide both residential and commercial charging solutions.",
//       image: "/solaar.webp",
//     },
//   ];

//   return (
//     <section className="bg-orange-50 py-20">
//       <div className="container mx-auto">
//         {services.map((service, index) => (
//           <motion.div
//             key={index}
//             ref={(el) => (sections.current[index] = el)}
//             className={`flex flex-col md:flex-row items-center min-h-screen px-8 md:px-16 gap-12 ${
//               index % 2 === 1 ? "md:flex-row-reverse" : ""
//             }`}
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 1, ease: "easeOut" }}
//             viewport={{ once: true }}
//           >
//             {/* Image with Animation */}
//             <motion.div
//               className="relative w-full md:w-1/2 overflow-hidden rounded-2xl shadow-xl"
//               initial={{ opacity: 0, y: 100 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1.5, ease: "easeOut" }}
//               viewport={{ once: true }}
//               whileHover={{ scale: 1.05 }}
//             >
//               <img
//                 src={service.image}
//                 alt={service.title}
//                 className="w-full h-[70vh] object-cover transition-transform duration-300 ease-in-out"
//               />
//               {/* Heading with Full White Color */}
//               <motion.h2
//                 className={`absolute top-10 md:top-16 text-[3.5rem] md:text-[5rem] font-extrabold leading-none drop-shadow-md text-white z-20 ${
//                   index % 2 === 0 ? "right-0 md:right-[-5%]" : "left-0 md:left-[-5%]"
//                 } whitespace-nowrap`}
//                 initial={{ opacity: 0, x: 100 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
//                 viewport={{ once: true }}
//               >
//                 {service.title}
//               </motion.h2>
//             </motion.div>

//             {/* Text Content with Animation */}
//             <motion.div
//               className="w-full md:w-1/2 flex flex-col justify-center"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
//               viewport={{ once: true }}
//             >
//               <p className="text-gray-700 text-2xl leading-relaxed tracking-wide">
//                 {service.description}
//               </p>
//             </motion.div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;









import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const services = [
    {
      title: "Solar Panels",
      description:"We design and produce our own solar panels, ensuring they meet top industry standards. This provides you with efficient, reliable, and cost-effective solar solutions.",
      image: "/solaar.webp",
    },
    {
      title: "EV Chargers",
      description: "Our EV chargers are fast, efficient, and compatible with multiple vehicle models. We provide both residential and commercial charging solutions.",
      image: "/ev.jpg",
    },
  ];

  return (
    <div className="bg-blue-50 ">
      {services.map((service, index) => (
        <div
          key={index}
          className={`relative flex flex-col md:flex-row items-center  px-8 md:px-16 gap-12 ${
            index % 2 === 1 ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Image with Animation */}
          <motion.div
            className="relative w-full md:w-1/2"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img
              src={service.image}
              alt={service.title}
              className="service-img w-full h-[70vh] object-cover shadow-xl rounded-lg"
            />
            {/* Heading Overlay */}
            <motion.h2
              className={`absolute top-10 md:top-7 text-[3rem] md:text-[6rem] font-extrabold leading-none z-20 heading-mask text-orange-500 ${
                index % 2 === 0 ? "right-0 md:right-[-40%]" : "left-0 md:left-[-50%]"
              } whitespace-nowrap`}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              {service.title}
            </motion.h2>
          </motion.div>

          {/* Text Content with Animation */}


          <motion.div
  className="w-full md:w-1/2 flex flex-col justify-center p-6"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
  viewport={{ once: true }}
>
  <p className="text-gray-700 text-lg md:text-xl leading-relaxed relative">
    <FaQuoteLeft className="text-orange-500 w-12 h-12 absolute -top-4 -left-6" />
    <span className="inline-block px-6">
      {service.description}
    </span>
    <FaQuoteRight className="text-orange-500 w-12 h-12 absolute -bottom-4 -right-6" />
  </p>
</motion.div>
        </div>
      ))}
    </div>
  );
};

export default ServicesSection;




























































{/* <h2
className={`service-heading absolute top-10 text-[7rem] font-bold leading-none mix-blend-difference ${index % 2 === 0 ? "right-[-40%]" : "left-[-40%]"
    }`}
>
{service.title}
</h2> */}

// import React, { useLayoutEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const ServicesSection = () => {
//   const sectionRefs = useRef([]);

//   useLayoutEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     sectionRefs.current.forEach((section, index) => {
//       if (!section) return; // Ensure the section exists before applying animation

//       const img = section.querySelector(".service-img");
//       const text = section.querySelector(".service-text");

//       gsap.from(img, {
//         x: index % 2 === 0 ? 200 : -200,
//         opacity: 0, // Set to 0 for proper fade-in
//         duration: 1.5,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: section,
//           start: "top 85%",
//           end: "bottom 60%",
//           scrub: 1,
//         },
//       });

//       gsap.from(text, {
//         x: index % 2 === 0 ? -200 : 200,
//         opacity: 0, // Set to 0 for proper fade-in
//         duration: 1.5,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: section,
//           start: "top 85%",
//           end: "bottom 60%",
//           scrub: 1,
//         },
//       });
//     });

//     // Refresh ScrollTrigger after elements are mounted
//     ScrollTrigger.refresh();
//   }, []);

//   const services = [
//     {
//       title: "Solar Panels",
//       description:
//         "We design and produce our own solar panels, ensuring they meet top industry standards. This provides you with efficient, reliable, and cost-effective solar solutions for residential, commercial, and industrial projects.",
//       image: "/solaar.webp",
//     },
//     {
//       title: "EV Chargers",
//       description:
//         "Our EV chargers are fast, efficient, and compatible with multiple vehicle models. We provide both residential and commercial charging solutions.",
//       image: "/solaar.webp",
//     },
//   ];

//   return (
//     <div className="bg-orange-50">
//       {services.map((service, index) => (
//         <div
//           key={index}
//           ref={(el) => (sectionRefs.current[index] = el)}
//           className={`flex flex-col md:flex-row items-center min-h-screen px-8 md:px-16 gap-8 ${
//             index % 2 === 1 ? "md:flex-row-reverse" : ""
//           }`}
//         >
//           <div className="w-full md:w-1/2 service-img flex justify-center">
//             <img
//               src={service.image}
//               alt={service.title}
//               className="w-full h-[80vh] object-cover rounded-lg shadow-lg"
//             />
//           </div>
//           <div className="w-full md:w-1/2 service-text flex flex-col justify-center">
//             <h2 className="text-4xl font-bold text-[#f47c20]">{service.title}</h2>
//             <p className="text-gray-700 mt-4 text-lg">{service.description}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ServicesSection;


































// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// import React, { useLayoutEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const ServiceCard = () => {
//   const cardRef = useRef(null);
//   const imgRef = useRef(null);

//   useLayoutEffect(() => {
//     gsap.fromTo(
//       imgRef.current,
//       { y: "-100%", opacity: 1 }, // Initially image upar rahegi
//       {
//         y: "0%", // Scroll hote hi neeche slide karegi
//         opacity: 1,
//         duration: 2,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: cardRef.current,
//           start: "top 70%",
//           end: "bottom 50%",
//           scrub: 1,
//         },
//       }
//     );

//     ScrollTrigger.refresh();
//   }, []);

//   return (
//     <div ref={cardRef} className="bg-orange-50 flex flex-col items-center min-h-screen px-8 md:px-16 py-16">
//       {/* Card */}
//       <div className="relative w-full max-w-3xl bg-white rounded-lg shadow-lg overflow-hidden">
//         {/* Image Section */}
//         <div className="relative w-full h-[60vh] overflow-hidden">
//           <img
//             ref={imgRef}
//             src="/solaar.webp"
//             alt="Solar Panels"
//             className="absolute top-0 left-0 w-full h-full object-cover rounded-t-lg shadow-lg"
//           />
//         </div>

//         {/* Text Section */}
//         <div className="p-6">
//           <h2 className="text-4xl font-bold text-[#f47c20]">Solar Panels</h2>
//           <p className="text-gray-700 mt-4 text-lg">
//             We design and produce our own solar panels, ensuring they meet top industry standards.
//             This provides you with efficient, reliable, and cost-effective solar solutions for
//             residential, commercial, and industrial projects.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceCard;
