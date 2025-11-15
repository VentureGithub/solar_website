// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// const Home = () => {
//   const videoRef = useRef(null);
//   const contentRef = useRef(null);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     // Scroll animation for text and buttons
//     gsap.fromTo(
//       contentRef.current.children,
//       { opacity: 0, y: 80 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1.5,
//         stagger: 0.3,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: contentRef.current,
//           start: "top 85%", // Animation triggers when 85% of the section is visible
//           end: "top 30%",
//           scrub: 1,
//         },
//       }
//     );

//     // Zoom & Blur effect on the background video
//     gsap.to(videoRef.current, {
//       scale: 1.1,
//       filter: "blur(3px)",
//       duration: 1.5,
//       ease: "none",
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         start: "top top",
//         end: "bottom top",
//         scrub: true,
//       },
//     });

//     return () => ScrollTrigger.getAll().forEach((t) => t.kill());
//   }, []);

//   return (
//     <div ref={sectionRef} className="relative min-h-screen w-full overflow-hidden">
//       {/* Background Video */}
//       <video
//         ref={videoRef}
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000"
//       >
//         <source src="/video.mp4" type="video/mp4" />
//       </video>

//       {/* Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-transparent to-red-500/20" />

//       {/* Content */}
//       <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-6">
//         <div className="relative h-screen flex items-center w-full">
//           <div className="container mx-auto px-6">
//             <div className="max-w-2xl bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg flex items-center relative">
//               <div className="absolute left-0 top-0 bottom-0 w-2 bg-orange-500 rounded-l-lg"></div>
//               <div ref={contentRef} className="pl-4">
//                 {/* Main Heading */}
//                 <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-orange-500 mb-4 leading-tight">
//                   Solar Panels & Solar Roofs For Heating and Cooling Source
//                 </h1>

//                 {/* Subtext */}
//                 <p className="text-md md:text-lg text-white/90 mb-6">
//                   Powering a sustainable future with innovative solar solutions.
//                   We provide efficient off-grid solar power systems for reliable
//                   and eco-friendly energy.
//                 </p>

//                 {/* Buttons */}
//                 <div className="flex flex-wrap gap-4">
//                   <button className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
//                     Hire Us
//                   </button>
//                   <button className="px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 backdrop-blur-sm transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
//                     Explore Us
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

























// import React, { useEffect, useRef, useState } from 'react';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import gsap from 'gsap';

// function Home() {
//     const sectionRef = useRef(null);
//     const videoRef = useRef(null);
//     const textRef = useRef(null);

//     const videos = ["/vdo2.mp4", "/vdo.mp4", "/video.mp4"];
//     const [videoIndex, setVideoIndex] = useState(0);

//     useEffect(() => {
//         gsap.registerPlugin(ScrollTrigger);

//         const textElements = textRef.current.children;
//         gsap.set(textElements, { opacity: 0, y: 100 });

//         gsap.to(textElements, {
//             opacity: 1,
//             y: 0,
//             duration: 1.5,
//             stagger: 0.3,
//             ease: "power3.out",
//             delay: 0.5
//         });

//         gsap.to(videoRef.current, {
//             scrollTrigger: {
//                 trigger: sectionRef.current,
//                 start: "top top",
//                 end: "bottom top",
//                 scrub: true,
//             },
//             x: "50%",
//             y: "-50%",
//             scale: 1.1,
//             skewX: 10,
//             skewY: 10,
//             rotation: 10,
//             ease: "none",
//         });

//         gsap.to(textRef.current, {
//             scrollTrigger: {
//                 trigger: sectionRef.current,
//                 start: "top top",
//                 end: "center top",
//                 scrub: true
//             },
//             y: "-20%",
//             opacity: 0,
//             ease: "none"
//         });

//         gsap.fromTo(
//             ".overlay-gradient",
//             { opacity: 0 },
//             { opacity: 0.6, duration: 2, ease: "power2.inOut" }
//         );

//         // Set interval to change the video every 10 seconds
//         const videoInterval = setInterval(() => {
//             nextVideo();
//         }, 10000);

//         return () => {
//             // Cleanup the interval on unmount
//             clearInterval(videoInterval);
//             ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//         };
//     }, [videoIndex]);

//     const nextVideo = () => {
//         // Video move up and fade out effect
//         gsap.to(videoRef.current, {
//             y: "-100vh", // Move video upwards off-screen
//             opacity: 0,
//             scale: 1.2, // Slight zoom effect
//             rotation: 10, // Slight rotation
//             duration: 1,
//             ease: "power2.out",
//             onComplete: () => {
//                 // Change the video source once the animation is complete
//                 setVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);

//                 // Fade-in new video and animate from bottom to top
//                 gsap.fromTo(videoRef.current, {
//                     y: "100vh", // Start from bottom (off-screen)
//                     opacity: 0,
//                     scale: 1.1,
//                     rotation: -10,
//                 }, {
//                     y: 0, // End at normal position
//                     opacity: 1,
//                     scale: 1,
//                     rotation: 0,
//                     duration: 1.5,
//                     ease: "power2.inOut"
//                 });

//                 // Optional: Add text animation for smoother transition
//                 gsap.fromTo(textRef.current, {
//                     opacity: 0,
//                     y: 50,
//                 }, {
//                     opacity: 1,
//                     y: 0,
//                     duration: 1.5,
//                     ease: "power3.out"
//                 });
//             }
//         });
//     };

//     return (
//         <div className="relative w-full h-screen overflow-hidden" ref={sectionRef}>
//             <section className="relative w-full h-full">
//                 <div className="absolute top-0 left-0 w-full h-full perspective-1000">
//                     <video
//                         ref={videoRef}
//                         className="absolute top-0 left-0 w-full h-full object-cover transform-gpu"
//                         autoPlay
//                         loop
//                         muted
//                         playsInline
//                         key={videoIndex}
//                     >
//                         <source src={videos[videoIndex]} type="video/mp4" />
//                     </video>
//                 </div>

//                 <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-6">
//         <div className="relative h-screen flex items-center w-full">
//           <div className="container mx-auto px-6">
//             <div className="max-w-2xl bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg flex items-center relative">
//               <div className="absolute left-0 top-0 bottom-0 w-2 bg-orange-500 rounded-l-lg"></div>
//               <div ref={textRef} className="pl-4">
//                 {/* Main Heading */}
//                 <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-orange-500 mb-4 leading-tight">
//                   Solar Panels & Solar Roofs For Heating and Cooling Source
//                 </h1>

//                 {/* Subtext */}
//                 <p className="text-md md:text-lg text-white/90 mb-6">
//                   Powering a sustainable future with innovative solar solutions.
//                   We provide efficient off-grid solar power systems for reliable
//                   and eco-friendly energy.
//                 </p>

//                 {/* Buttons */}
//                 <div className="flex flex-wrap gap-4">
//                   <button className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
//                     Contact Us
//                   </button>
//                   {/* <button className="px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 backdrop-blur-sm transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
//                     Explore Us
//                   </button> */}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//                 <div className="overlay-gradient absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0" />
//             </section>

//             <style jsx>{`
//                 .perspective-1000 {
//                     perspective: 1000px;
//                 }
//                 .transform-gpu {
//                     transform: translateZ(0);
//                     will-change: transform;
//                 }
//             `}</style>
//         </div>
//     );
// }

// export default Home;














import React, { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

function Home() {
    const sectionRef = useRef(null);
    const videoRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const textElements = textRef.current.children;
        gsap.set(textElements, { opacity: 0, y: 100 });

        gsap.to(textElements, {
            opacity: 1,
            y: 0,
            duration: 1.5,
            stagger: 0.3,
            ease: "power3.out",
            delay: 0.5
        });

        gsap.to(videoRef.current, {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
            },
            x: "50%",
            y: "-50%",
            scale: 1.1,
            skewX: 10,
            skewY: 10,
            rotation: 10,
            ease: "none",
        });

        gsap.to(textRef.current, {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: "center top",
                scrub: true
            },
            y: "-20%",
            opacity: 0,
            ease: "none"
        });

        gsap.fromTo(
            ".overlay-gradient",
            { opacity: 0 },
            { opacity: 0.6, duration: 2, ease: "power2.inOut" }
        );

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className="relative w-full h-screen overflow-hidden" ref={sectionRef}>
            <section className="relative w-full h-full">
                <div className="absolute top-0 left-0 w-full h-full perspective-1000">
                    <video
                        ref={videoRef}
                        className="absolute top-0 left-0 w-full h-full object-cover transform-gpu"
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src="/video.mp4" type="video/mp4" />
                    </video>
                </div>

                <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-6">
                    <div className="relative h-screen flex items-center w-full">
                        <div className="container mx-auto px-6">
                            <div className="max-w-2xl bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg flex items-center relative">
                                <div className="absolute left-0 top-0 bottom-0 w-2 bg-orange-500 rounded-l-lg"></div>
                                <div ref={textRef} className="pl-4">
                                    {/* Main Heading */}
                                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-orange-500 mb-4 leading-tight">
                                        Solar Panels & Solar Roofs For Heating and Cooling Source
                                    </h1>

                                    {/* Subtext */}
                                    <p className="text-md md:text-lg text-white/90 mb-6">
                                        Powering a sustainable future with innovative solar solutions.
                                        We provide efficient off-grid solar power systems for reliable
                                        and eco-friendly energy.
                                    </p>

                                    {/* Buttons */}
                                    <div className="flex flex-wrap gap-4">
                                        <button className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
                                            Contact Us
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="overlay-gradient absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0" />
            </section>

            <style jsx>{`
                .perspective-1000 {
                    perspective: 1000px;
                }
                .transform-gpu {
                    transform: translateZ(0);
                    will-change: transform;
                }
            `}</style>
        </div>
    );
}

export default Home;
