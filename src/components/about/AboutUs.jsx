import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useLayoutEffect(() => {
    // Text Animation
    gsap.fromTo(
      textRef.current.children,
      { opacity: 0, y: 70 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power4.out",
        stagger: 0.4,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 90%",
          end: "bottom 60%",
          scrub: 1,
        },
      }
    );

    // Image Animation
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 95%",
          end: "bottom 75%",
          scrub: 1,
        },
      }
    );

    ScrollTrigger.refresh();
  }, []);

  return (
    <section className="bg-blue-50 py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        
        {/* Text Section with GSAP Animation */}
        <div ref={textRef} className="lg:w-1/2">
          <h2 className="text-5xl font-extrabold text-blue-800 drop-shadow-lg">
            About Us
          </h2>
          <p className="mt-6 text-gray-800 text-xl leading-relaxed">
            At <span className="font-semibold">Emerald Energy</span>, we are committed to 
            powering a sustainable future by delivering <span className="text-[#f47c20]">
            innovative and efficient solar energy solutions</span> in Lucknow and beyond.
          </p>
          <p className="mt-6 text-gray-700 text-lg leading-relaxed">
            As a trusted name in the renewable energy sector, we specialize in 
            designing, installing, and maintaining <span className="font-semibold">
            high-performance solar power systems</span> for residential, commercial, 
            and industrial applications.
          </p>
          <p className="mt-6 text-gray-700 text-lg leading-relaxed">
            Our mission is to make <span className="text-[#f47c20]">clean and affordable 
            energy accessible</span> to everyone. With a team of skilled professionals 
            and cutting-edge technology, we provide customized solar solutions that 
            help reduce electricity costs, minimize carbon footprints, and promote 
            energy independence.
          </p>
        </div>

        {/* Image Section with Smooth Animation */}
        <div className="lg:w-1/2 mt-6 lg:mt-0 flex justify-center">
          <img
            ref={imageRef}
            src="/solarr.jpg" // Ensure this is the correct image path
            alt="Solar Panels"
            className="max-w-full h-auto rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;




// import React from "react";

// const AboutUs = () => {
//   return (
//     <section className="bg-blue-50 py-12 px-6 lg:px-20">
//       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
//         <div className="lg:w-1/2">
//           <h2 className="text-4xl font-bold text-blue-800">About US</h2>
//           <p className="mt-6 text-gray-800 text-xl leading-relaxed max-w-5xl mx-auto">
//             At <span className="font-semibold">Emerald Energy</span>, we are committed to 
//             powering a sustainable future by delivering <span className="text-[#f47c20]">innovative and efficient 
//             solar energy solutions</span> in Lucknow and beyond. 
//           </p>
//           <p className="mt-6 text-gray-700 text-lg leading-relaxed max-w-5xl mx-auto">
//             As a trusted name in the renewable energy sector, we specialize in 
//             designing, installing, and maintaining <span className="font-semibold">high-performance solar 
//             power systems</span> for residential, commercial, and industrial applications.
//           </p>
//           <p className="mt-6 text-gray-700 text-lg leading-relaxed max-w-5xl mx-auto">
//             Our mission is to make <span className="text-[#f47c20]">clean and affordable energy accessible</span> to 
//             everyone. With a team of skilled professionals and cutting-edge 
//             technology, we provide customized solar solutions that help reduce 
//             electricity costs, minimize carbon footprints, and promote energy 
//             independence.
//           </p>
//         </div>
//         <div className="lg:w-1/2 mt-6 lg:mt-0 flex justify-center">
//           <img
//             src="/solarr.jpg" // Replace with actual image path
//             alt="Solar Panels"
//             className="max-w-full h-auto rounded-lg shadow-lg"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutUs;
