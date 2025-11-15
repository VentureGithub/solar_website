import React from "react";

const products = [
    {
        title: "Solar EPC & Development",
        description:
            "Our Engineering, Procurement, and Construction solutions bring your solar projects to lite seamlessly from planning to execution. Our Expert team will do Projects Management, Technological integration, Financial Strategy Development",
        image: "/services/s1.jpg",
    },
    {
        title: "Project Execution",
        description:
            "Unisun Power Solutions excels in project execution we ensure that every step of the process is managed with precision and care. Our project execution process includes: Site Assessment and Engineering Design, Procurement and Installation, Commissioning and Testing",
        image: "/services/s2.jpg",
    },
    {
        title: "Franchise Opportunity",
        description:
            "Explore our franchise options to start your own solar business without the need for a physical office space. Join us In spreading solar power solutions while building your own enterprise.",
        image: "/services/s3.jpg",
    },
    {
        title: "Renewable Energy",
        description:
            "Our commitment to renewable energy solutions, harnessing the power of sustainable resources like solar, wind, and hydroelectricity to promote a cleaner, greener future for all.",
        image: "/services/s4.jpg",
    },
    {
        title: "E Mobility Solutions",
        description:
            "E-Mobility solutions tailored for modern urban lifestyles. Our comprehensive offerings include electric vehicles, advanced charging solutions, and integrated mobility services, paving the way towards a sustainable and efficient transportation ecosystem.",
        image: "/services/s5.jpg",
    },
    {
        title: "Engineering design",
        description:
            "Offering precise site quotations and delivering expertly crafted designs tailored to your needs.",
        image: "/services/s6.webp",
    },
    {
        title: "Net metering and Commissioning",
        description:
            "Explore how our net metering and commissioning services, approved by government authorities, simplify the integration of renewable energy, maximizing efficiency and savings.",
        image: "/services/s6.webp",
    },
    {
        title: "Consulting and Support",
        description:
            "We offer expert consulting services to guide clients through the process of adopting solar energy. Our support team is available to answer questions and provide ongoing assistance post-installation.",
        image: "/services/s5.jpg",
    },
];

const SolarServices = () => {


return (
    <div className="bg-gray-100 py-10">
        <h2 className="text-4xl font-bold text-center text-orange-500 mb-10">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 md:px-12">
            {products.map((item, index) => (
                <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
                    {/* Background Image */}
                    <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-64 object-cover transition-transform  group-hover:scale-110"
                    />

                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-md flex flex-col items-center justify-center text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <h3 className="text-xl font-semibold text-orange-400">{item.title}</h3>
                        <p className="text-white text-sm mt-2">{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
);
};

export default SolarServices;

