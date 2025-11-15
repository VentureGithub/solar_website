// import React from "react";
// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { Link, useLocation } from "react-router-dom";
// import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

// const NAV_ITEMS = [
//     { name: "Home", path: "/" },
//     { name: "About Us", path: "/about-us" },
//     { name: "Products & Services", path: "/products-&-Services" },
//     { name: "Projects", path: "/projects" },
//     { name: "Contact Us", path: "/contact-us" },
//     { name: "FAQ's", path: "/faq" },
// ];

// const Header = () => {
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//     const [isSticky, setIsSticky] = useState(false);
//     const navRef = useRef(null);
//     const location = useLocation();

//     useEffect(() => {
//         const handleScroll = () => {
//             if (window.scrollY > 50) {
//                 setIsSticky(true);
//             } else {
//                 setIsSticky(false);
//             }
//         };

//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     useEffect(() => {
//         gsap.to(navRef.current, {
//             y: 0,
//             opacity: 1,
//             duration: 0.5,
//         });
//     }, []);

//     const isActivePath = (path) => {
//         if (path === "/") {
//             return location.pathname === path;
//         }
//         return location.pathname.startsWith(path);
//     };

//     return (
//         <div
//             ref={navRef}
//             className={`fixed inset-x-0 top-0 z-50 transition-all  duration-500  lg:mt-4 lg:mx-6  ${isSticky
//                     ? "bg-black/40 shadow-lg h-16"
//                     : "bg-transparent h-20"
//                 }`}
//         >
//             <header className="max-w-7xl mx-auto flex items-center justify-between h-full px-4  lg:px-6">
//                 {/* Logo */}
//                 <Link to="/" className="flex items-center space-x-2">
//                     <img
//                         src="/logoo.png"
//                         alt="logo"
//                         className={`transition-all duration-300 ${isSticky ? "w-22 h-16" : "w-26 h-18"
//                             }`}
//                     />
//                 </Link>

//                 {/* Desktop Navigation */}
//                 <nav className="hidden md:flex items-center space-x-8">
//                     {NAV_ITEMS.map((item) => (
//                         <Link
//                             key={item.name}
//                             to={item.path}
//                             className={`relative font-medium text-sm md:text-sm sm:text-sm lg:text-base tracking-wide transition-all duration-300 group ${isSticky
//                                     ? isActivePath(item.path)
//                                         ? "text-orange-600"
//                                         : "text-white hover:text-orange-600"
//                                     : "text-white hover:text-orange-500"
//                                 }`}
//                         >
//                             {item.name}
//                             <span className={`absolute -bottom-1 left-0 w-full h-0.5 transform origin-left transition-transform duration-300 ${isActivePath(item.path)
//                                     ? "scale-x-100 bg-orange-600"
//                                     : "scale-x-0 bg-orange-400 group-hover:scale-x-100"
//                                 }`} />
//                         </Link>
//                     ))}
//                 </nav>

//                 {/* "Become Distributor Today" Button */}
//                 <div className="hidden md:block">
//                     <Link
//                         to="/become-distributor"
//                         className="ml-8 px-6 py-2 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition duration-300"
//                     >
//                         Become Distributor Today
//                     </Link>
//                 </div>

//                 {/* Mobile Menu Button */}
//                 <button
//                     className="md:hidden p-2 rounded-lg transition-colors duration-300"
//                     onClick={() => setIsMobileMenuOpen(true)}
//                 >
//                     <AiOutlineMenu className={`text-2xl ${isSticky ? "text-white" : "text-white"}`} />
//                 </button>
//             </header>

//             {/* Mobile Menu Overlay */}
//             {isMobileMenuOpen && (
//                 <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden">
//                     <div className="fixed right-0 top-0 w-72 h-screen bg-white shadow-2xl transform transition-transform duration-300">
//                         {/* Mobile Header */}
//                         <div className="flex items-center justify-between p-4 border-b">
//                             <img src="/logoo.png" alt="logo" className="w-12 h-8" />
//                             <button
//                                 onClick={() => setIsMobileMenuOpen(false)}
//                                 className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
//                             >
//                                 <AiOutlineClose className="text-2xl text-gray-600" />
//                             </button>
//                         </div>

//                         {/* Mobile Navigation */}
//                         <nav className="p-4 space-y-2 font-serif">
//                             {NAV_ITEMS.map((item) => (
//                                 <Link
//                                     key={item.name}
//                                     to={item.path}
//                                     onClick={() => setIsMobileMenuOpen(false)}
//                                     className={`block px-4  py-3 font-serif rounded-lg text-sm font-medium transition-all duration-300 ${isActivePath(item.path)
//                                             ? "bg-blue-50 text-blue-600"
//                                             : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
//                                         }`}
//                                 >
//                                     {item.name}
//                                 </Link>
//                             ))}
//                         </nav>

//                         {/* Mobile "Become Distributor Today" Button */}
//                         <div className="absolute bottom-16 left-0 w-full p-4">
//                             <Link
//                                 to="/become-distributor"
//                                 className="w-full block text-center px-6 py-2 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition duration-300"
//                             >
//                                 Become Distributor Today
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Header;





import React from "react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const NAV_ITEMS = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Products & Services", path: "/products-&-Services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact Us", path: "/contact-us" },
    { name: "FAQ's", path: "/faq" },
];

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const navRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        gsap.to(navRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.5,
        });
    }, []);

    const isActivePath = (path) => {
        if (path === "/") {
            return location.pathname === path;
        }
        return location.pathname.startsWith(path);
    };

    return (
        <div
            ref={navRef}
            className={`fixed inset-x-0 top-0 z-50 transition-all  duration-500    ${isSticky
                    ? "bg-white shadow-lg h-24"
                    : "bg-white h-28"
                }`}
        >
            <header className="max-w-7xl mx-auto flex items-center justify-between h-full   lg:px-6">
                {/* Logo */}
                <Link to="/" className="flex items-center space-x-2">
                    <img
                        src="/Emerald Energy Logo.png"
                        alt="logo"
                        className={`transition-all duration-300 ${isSticky ? "w-22 h-16" : "w-30 h-22"
                            }`}
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            className={`relative font-medium text-sm md:text-sm sm:text-sm lg:text-base tracking-wide transition-all duration-300 group ${isSticky
                                    ? isActivePath(item.path)
                                        ? "text-orange-600"
                                        : "text-orange-600 hover:text-orange-600"
                                    : "text-orange-600 hover:text-orange-500"
                                }`}
                        >
                            {item.name}
                            <span className={`absolute -bottom-1 left-0 w-full h-0.5 transform origin-left transition-transform duration-300 ${isActivePath(item.path)
                                    ? "scale-x-100 bg-orange-600"
                                    : "scale-x-0 bg-orange-400 group-hover:scale-x-100"
                                }`} />
                        </Link>
                    ))}
                </nav>

                {/* "Become Distributor Today" Button */}
                <div className="hidden md:block">
                    <Link
                        to="/become-distributor"
                        className="ml-8 px-6 py-2 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition duration-300"
                    >
                        Become Distributor Today
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 rounded-lg transition-colors duration-300"
                    onClick={() => setIsMobileMenuOpen(true)}
                >
                    <AiOutlineMenu className={`text-2xl ${isSticky ? "text-white" : "text-white"}`} />
                </button>
            </header>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden">
                    <div className="fixed right-0 top-0 w-72 h-screen bg-white shadow-2xl transform transition-transform duration-300">
                        {/* Mobile Header */}
                        <div className="flex items-center justify-between p-4 border-b">
                            <img src="/logoo.png" alt="logo" className="w-12 h-8" />
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                            >
                                <AiOutlineClose className="text-2xl text-gray-600" />
                            </button>
                        </div>

                        {/* Mobile Navigation */}
                        <nav className="p-4 space-y-2 font-serif">
                            {NAV_ITEMS.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`block px-4  py-3 font-serif rounded-lg text-sm font-medium transition-all duration-300 ${isActivePath(item.path)
                                            ? "bg-blue-50 text-blue-600"
                                            : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>

                        {/* Mobile "Become Distributor Today" Button */}
                        <div className="absolute bottom-16 left-0 w-full p-4">
                            <Link
                                to="/become-distributor"
                                className="w-full block text-center px-6 py-2 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition duration-300"
                            >
                                Become Distributor Today
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;


