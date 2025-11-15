
import React from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const services = [
    { title: "SOLAR EPC & DEVELOPMENT", icon: "/icons/solar-energy.png" },
    { title: "ENERGY STORAGE SYSTEMS", icon: "/icons/battery.png" },
    { title: "RENEWABLE ENERGY", icon: "/icons/renewable-energy.png" },
    { title: "E-MOBILITY SOLUTIONS", icon: "/icons/charging.png" },
    { title: "Engineering Design", icon: "/icons/prototype.png" },
    { title: "Procurement and Installation", icon: "/icons/hammer.png" },
    { title: "Commissioning and Testing", icon: "/icons/testing.png" },
    { title: "Consulting and Support", icon: "/icons/conversation.png" },
];

const Services = () => {
    const { scrollYProgress } = useScroll();
    
    // Smoother header transition
    const headerY = useTransform(scrollYProgress, [0, 0.3], [50, 0]);
    const headerOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
                ease: "easeOut"
            }
        }
    };

    const cardVariants = (index) => ({
        hidden: { 
            opacity: 0,
            x: index % 2 === 0 ? -50 : 50,
            y: 30,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 50,
                damping: 20,
                duration: 1.2,
                delay: index * 0.1
            }
        },
        hover: {
            y: -8,
            scale: 1.02,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 15
            }
        }
    });

    return (
        <section className="bg-blue-50 py-20 overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div 
                    style={{ y: headerY, opacity: headerOpacity }}
                    className="text-center mb-16"
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-5xl font-bold">
                        <span className="text-orange-600">OUR</span>
                        <span className="text-gray-900 ml-3">SERVICES</span>
                    </h2>
                    <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "6rem" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="h-1 bg-orange-500 mx-auto mt-4 rounded-full"
                    />
                </motion.div>

                <motion.div 
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ 
                        once: false, 
                        amount: 0.2,
                        margin: "-100px"
                    }}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants(index)}
                            whileHover="hover"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ 
                                once: false, 
                                margin: "-50px",
                                amount: 0.3
                            }}
                            className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl 
                                     transition-all duration-500 ease-out"
                        >
                            <motion.div 
                                className="absolute inset-0 bg-gray-900 rounded-2xl opacity-0 group-hover:opacity-95 
                                          transition-opacity duration-500 ease-out flex items-center justify-center"
                            />

                            <div className="flex flex-col items-center">
                                <motion.div 
                                    className="w-20 h-20 mb-6 relative"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ 
                                        type: "spring", 
                                        stiffness: 200,
                                        damping: 15
                                    }}
                                >
                                    <div className="absolute inset-0 bg-orange-500 rounded-full opacity-20" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <motion.img
                                            src={service.icon}
                                            alt={service.title}
                                            className="w-12 h-12"
                                            animate={{ 
                                                rotate: [0, 2, 0] 
                                            }}
                                            transition={{
                                                duration: 3,
                                                ease: "easeInOut",
                                                repeat: Infinity
                                            }}
                                        />
                                    </div>
                                </motion.div>
                                <motion.h3 
                                    className="text-lg font-semibold text-gray-900 group-hover:text-white 
                                             transition-colors duration-500 text-center z-10 relative"
                                >
                                    {service.title}
                                </motion.h3>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;