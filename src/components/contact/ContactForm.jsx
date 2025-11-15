import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const ContactForm = () => {
    return (
        <section className="bg-blue-50 text-black py-16 px-8 md:px-20">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
                {/* Left Section - Contact Info */}
                <div className="md:w-1/2 space-y-8">
                    {/* Address */}
                    <div className="flex items-start gap-4">
                        <FaMapMarkerAlt className="text-[#f47c20] text-3xl" />
                        <div>
                            <h3 className="text-lg font-semibold text-[#007bff]">ADDRESS</h3>
                            <p className="text-gray-700">
                                221, Gomti Nagar, <br />
                                XX Road, XXXX (X), <br />
                                Lucknow - 400066
                            </p>
                        </div>
                    </div>

                    <hr className="border-gray-300" />

                    {/* Email */}
                    <div className="flex items-start gap-4">
                        <FaEnvelope className="text-[#f47c20] text-3xl" />
                        <div>
                            <h3 className="text-lg font-semibold text-[#007bff]">EMAIL</h3>
                            <p className="text-gray-700">emerald@gmail.com</p>
                        </div>
                    </div>

                    <hr className="border-gray-300" />

                    {/* Phone */}
                    <div className="flex items-start gap-4">
                        <FaPhoneAlt className="text-[#f47c20] text-3xl" />
                        <div>
                            <h3 className="text-lg font-semibold text-[#007bff]">PHONE</h3>
                            <p className="text-gray-700">+91 XXXX XXXX XX, +91 XX XXXX XXXX</p>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="hidden md:block border-l border-gray-300"></div>

                {/* Right Section - Contact Form */}
                <div className="md:w-1/2 bg-blue-50 p-8 rounded-lg ">
                    <h2 className="text-gray-800 text-2xl font-bold mb-4">Get in Touch</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="text-gray-800 block">Name*</label>
                            <input
                                type="text"
                                className="w-full p-3 border border-gray-300 bg-white text-black rounded-md focus:outline-none focus:border-[#f47c20]"
                                required
                            />
                        </div>

                        <div>
                            <label className="text-gray-800 block">Email*</label>
                            <input
                                type="email"
                                className="w-full p-3 border border-gray-300 bg-white text-black rounded-md focus:outline-none focus:border-[#f47c20]"
                                required
                            />
                        </div>

                        <div>
                            <label className="text-gray-800 block">Mobile*</label>
                            <input
                                type="text"
                                className="w-full p-3 border border-gray-300 bg-white text-black rounded-md focus:outline-none focus:border-[#f47c20]"
                                required
                            />
                        </div>

                        <div>
                            <label className="text-gray-800 block">Your message (optional)</label>
                            <textarea
                                className="w-full p-3 border border-gray-300 bg-white text-black rounded-md focus:outline-none focus:border-[#f47c20] h-32"
                            ></textarea>
                        </div>

                        <button className="bg-[#f47c20] text-white px-6 py-3 rounded-md hover:bg-white hover:text-[#f47c20] hover:border-[#f47c20] border-2 transition duration-300">
                            SUBMIT
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
