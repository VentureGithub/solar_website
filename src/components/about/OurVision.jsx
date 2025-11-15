import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OurVision = () => {
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
            className="flex flex-col md:flex-row items-center justify-center bg-blue-50 text-white py-8 md:py-2 px-10 md:px-24  gap-1"
        >


            {/* Right Side - Text */}
            <div
                ref={textRef}
                className="w-full h-[54vh] md:w-1/2 p-10 md:p-12 bg-white rounded-sm shadow-xl"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">
                    OUR VISION
                </h2>
                <div className="w-24 h-1 bg-orange-500 rounded-full mb-2 ml-2"></div>

                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                    Our vision is to be a global leader in renewable energy, making clean, sustainable power accessible to everyone. We envision a world where every home, business, and community is powered by renewable energy, contributing to a healthier planet and a brighter future for generations to come. Through our dedication to innovation, quality, and sustainability, we aim to inspire and lead the global transition to clean energy.
                </p>

            </div>
            {/* Left Side - Image */}
            <div ref={imgRef} className="w-full md:w-1/2  h-[54vh]">
                <img
                    src="/about/vision.jpg" // Change this to your image path
                    alt="Solar Panels"
                    className="rounded-sm shadow-xl w-full h-[54vh] object-cover"
                />
            </div>
        </section>
    );
};

export default OurVision;
