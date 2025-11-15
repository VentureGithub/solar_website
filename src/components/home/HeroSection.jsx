
import React from "react";

const HeroSection = () => {
    return (
        <section className="relative bg-blue-50 text-gray-900 py-24 px-10 md:px-20 lg:px-32">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">

                {/* Left Content */}
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
                        Power Your Home with{" "}
                        <span className="text-orange-500 drop-shadow-md bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text ">
                            Solar Energy
                        </span>
                    </h1>
                    <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                        Save money & protect the environment with our advanced solar panel solutions. Harness the power of the sun and take a step towards a greener future.
                    </p>
                    <div className="flex justify-center lg:justify-start gap-6">
                        <button className="bg-orange-500 text-white hover:bg-orange-600 transition-all duration-300 px-12 py-4 text-lg font-semibold rounded-lg shadow-xl transform hover:scale-110 hover:-translate-y-1">
                            Get a Free Quote
                        </button>
                        <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300 px-12 py-4 text-lg font-semibold rounded-lg shadow-xl transform hover:scale-110 hover:-translate-y-1">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Right Image Section */}
                <div className="relative">
                    {/* Main Image */}
                    <img
                        src="/work.jpg"
                        alt="Solar Panels"
                        className="rounded-xl shadow-xl w-[500px] h-auto transition-transform duration-500 hover:scale-105"
                    />

                    {/* Overlay Image Positioned Further to the Right */}
                    <div className="relative -top-16 lg:mr-[-80px] flex justify-end">
                        <img
                            src="/workk.jpeg"
                            alt="Additional Solar Work"
                            className="w-56 h-auto rounded-lg shadow-lg border-4 border-white transition-transform duration-500 hover:scale-105"
                        />
                    </div>
                </div>


            </div>
        </section>
    );
};

export default HeroSection;
