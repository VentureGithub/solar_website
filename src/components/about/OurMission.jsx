import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OurMission = () => {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imgRef.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      textRef.current,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col md:flex-row items-center justify-center bg-blue-50 text-white py-8 md:py-2 px-10 md:px-24 min-h-[80vh] gap-1"
    >
      {/* Left Side - Image */}
      <div ref={imgRef} className="w-full md:w-1/2 ">
        <img
          src="/about/mission.jpg" // Change this to your image path
          alt="Solar Panels"
          className="rounded-sm shadow-xl w-full h-[80vh] object-cover"
        />
      </div>

      {/* Right Side - Text */}
      <div
        ref={textRef}
        className="w-full h-[80vh] md:w-1/2 p-10 md:p-12 bg-white rounded-sm shadow-xl"
      >
        {/* <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-6">
          OUR MISSION
        </h2> */}
        <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">
          OUR MISSION                
          </h2>
        <div className="w-24 h-1 bg-orange-500 rounded-full mb-2 ml-2"></div>

        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          Our mission is to lead the way in renewable energy by providing
          innovative, high-quality solutions that promote sustainability both
          economically and environmentally. We empower our clients with
          cutting-edge solar and EV charging technologies, ensuring a seamless
          transition to clean energy.
        </p>
        <p className="text-lg md:text-xl text-gray-600 mt-6">
          Committed to excellence, we strive to reduce carbon footprints,
          foster strong partnerships, and drive continuous innovation for a
          greener future. Our dedicated team ensures you receive the highest
          quality service. Join us in our mission to create a sustainable
          tomorrow.
        </p>
      </div>
    </section>
  );
};

export default OurMission;
