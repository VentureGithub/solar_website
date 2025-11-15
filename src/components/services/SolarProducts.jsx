
import React from "react";

const products = [
    {
        title: "Hybrid Solar",
        description:
            "Hybrid solar, sometimes called hybrid solar system or gird-outage solar with battery storage, merges the advantages of on-gird and off-gird system.",
        image: "/HybridSystem.png",
    },
    {
        title: "Solar Water Pump",
        description:
            "A solar water pump uses solar energy to extract water from a source like a well, borehole, or reservoir, and then delivers it to a specified location for uses such as irrigation, livestock watering, or household needs.",
        image: "/SolarWaterPump.png",
    },
    {
        title: "Solar Water Heater",
        description:
            "A solar water heater captures sunlight to heat water for residential or commercial use, reducing energy consumption.",
        image: "/project/p6.jpg",
    },
    {
        title: "Solar Street Lights",
        description:
            "Solar street lights are powered by photovoltaic panels and provide efficient outdoor lighting without grid dependency.",
        image: "/project/p5.jpg",
    },
    {
        title: "On-grid solar",
        description:
            "On-grid solar, or grid-tied solar, refers to a solar energy system linked to the utility grid. Unlike off grid systems, which run independently, on-grid solar setups let homes or business produces electricity while staying connected to the local power grid.",
        image: "/OnGridSystem.webp",
    },
    {
        title: "Off-grid solar",
        description:
            "Off-grid solar, also called stanalone solar, is a solar energy system that functions without connecting to the utility grid. It’s intended to supply electricity to homes, cabins, or remote sites that lack access to traditional power infrastructure.",
        image: "/OffGridSystem.jpg",
    },
   
];
const productss = [

    {
        title: "Solar Home Light System",
        description:
            "A solar home lighting system is a com-pact solar energy solution designed for versatile use, such as an emergency light, study light, or torch. It also includes a mobile charging port.",
        image: "/SolarHomeLightSystem.jpg",
    },
    {
        title: "Solar EV Charging Station",
        description:
            "A Solar EV Charging Station is an eco-friendly charging solution that uses solar power to charge electric vehicles. It reduces dependency on the grid, lowers electricity costs, and promotes sustainable ",
        image: "/SolarEVChargingStation.webp",
    },
];

const SolarProducts = () => {
    return (
        <div className="bg-gray-100 py-10">
            <h2 className="text-4xl font-bold text-center text-blue-600 mb-10">Our Products & <span className="text-orange-500">Services</span></h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 md:px-12">
                {products.map((item, index) => (
                    <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
                        {/* Background Image */}
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-80 object-cover transition-transform  group-hover:scale-110"
                        />

                        {/* Overlay on Hover */}
                        <div className="absolute inset-0 bg-black/60 backdrop-blur-md flex flex-col items-center justify-center text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <h3 className="text-xl font-semibold text-orange-400">{item.title}</h3>
                            <p className="text-white text-sm mt-2">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 px-6 md:px-12 mt-5">
                {productss.map((item, index) => (
                    <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
                        {/* Background Image */}
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-80 object-cover transition-transform  group-hover:scale-110"
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

export default SolarProducts;


// import React from "react";

// const products = [
//     {
//         title: "Hybrid Solar",
//         description:
//             "Hybrid solar, sometimes called hybrid solar system or gird-outage solar with battery storage, merges the advantages of on-gird and off-gird system.",
//         image: "/HybridSystem.png",
//     },
//     {
//         title: "Solar Water Pump",
//         description:
//             "A solar water pump uses solar energy to extract water from a source like a well, borehole, or reservoir, and then delivers it to a specified location for uses such as irrigation, livestock watering, or household needs.",
//         image: "/SolarWaterPump.png",
//     },
//     {
//         title: "Solar Water Heater",
//         description:
//             "A solar water heater captures sunlight to heat water for residential or commercial use, reducing energy consumption.",
//         image: "/project/p6.jpg",
//     },
//     {
//         title: "Solar Street Lights",
//         description:
//             "Solar street lights are powered by photovoltaic panels and provide efficient outdoor lighting without grid dependency.",
//         image: "/project/p5.jpg",
//     },
//     {
//         title: "On-grid solar",
//         description:
//             "On-grid solar, or grid-tied solar, refers to a solar energy system linked to the utility grid. Unlike off grid systems, which run independently, on-grid solar setups let homes or business produces electricity while staying connected to the local power grid.",
//         image: "/OnGridSystem.webp",
//     },
//     {
//         title: "Off-grid solar",
//         description:
//             "Off-grid solar, also called stanalone solar, is a solar energy system that functions without connecting to the utility grid. It’s intended to supply electricity to homes, cabins, or remote sites that lack access to traditional power infrastructure.",
//         image: "/OffGridSystem.jpg",
//     },
// ];
// const productss = [
//     {
//         title: "Solar Home Light System",
//         description:
//             "A solar home lighting system is a com-pact solar energy solution designed for versatile use, such as an emergency light, study light, or torch. It also includes a mobile charging port.",
//         image: "/SolarHomeLightSystem.jpg",
//     },
//     {
//         title: "Solar EV Charging Station",
//         description:
//             "A Solar EV Charging Station is an eco-friendly charging solution that uses solar power to charge electric vehicles. It reduces dependency on the grid, lowers electricity costs, and promotes sustainable ",
//         image: "/SolarEVChargingStation.webp",
//     },
// ];

// const SolarProducts = () => {
//     return (
//         <div className="bg-gray-100 py-10">
//             <h2 className="text-4xl font-bold text-center text-blue-600 mb-10">Our Products & <span className="text-orange-500">Services</span></h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 md:px-12">
//                 {products.map((item, index) => (
//                     <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
//                         <img
//                             src={item.image}
//                             alt={item.title}
//                             className="w-full h-80 object-cover transition-transform group-hover:scale-110"
//                         />
//                         <div className="absolute inset-0 bg-black/60 backdrop-blur-md flex flex-col items-center justify-center text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                             <h3 className="text-xl font-semibold text-orange-400">{item.title}</h3>
//                             <p className="text-white text-sm mt-2">{item.description}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 px-6 md:px-12 mt-5">
//                 {productss.map((item, index) => (
//                     <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
//                         <img
//                             src={item.image}
//                             alt={item.title}
//                             className="w-full h-80 object-cover transition-transform group-hover:scale-110"
//                         />
//                         <div className="absolute inset-0 bg-black/60 backdrop-blur-md flex flex-col items-center justify-center text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                             <h3 className="text-xl font-semibold text-orange-400">{item.title}</h3>
//                             <p className="text-white text-sm mt-2">{item.description}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default SolarProducts;
