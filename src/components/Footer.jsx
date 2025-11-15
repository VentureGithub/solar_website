// import React from "react";
// import { motion } from "framer-motion";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
//   FaMapMarkerAlt,
//   FaPhone,
//   FaEnvelope,
// } from "react-icons/fa";

// const socialLinks = [
//   { Icon: FaFacebookF, href: "#" },
//   { Icon: FaInstagram, href: "#" },
//   { Icon: FaLinkedinIn, href: "#" },
// ];

// const Footer = () => {
//   return (
//     <motion.footer
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       viewport={{ once: true }}
//       className="bg-white text-[#1d75bc] py-4 px-4 md:px-16 lg:px-24"
//     >
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
//         {/* Logo & About */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="flex flex-col items-center md:items-start text-center md:text-left"
//         >
//           <img
//             src="/logo.jpg"
//             alt="Emerald Energy Logo"
//             className="w-32 h-auto mb-3 "
//           />
//           <h2 className="text-3xl font-extrabold text-[#f47c20]">EMERALD ENERGY</h2>
//           <p className="text-[#1d75bc] font-medium text-lg">Energising India, Smartly</p>
//         </motion.div>

//         {/* Quick Links */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//         >
//           <h3 className="text-xl font-bold text-[#f47c20] border-l-4 pl-3 border-[#f47c20] mb-4">
//             Quick Links
//           </h3>
//           <ul className="space-y-2 text-base">
//             {["Home", "About Us", "Products & Services", "Projects", "Contact Us", "Start Your Business Today"].map((item, index) => (
//               <li
//                 key={index}
//                 className="hover:text-[#f47c20] transition duration-300 cursor-pointer border-b border-gray-600 pb-1 transform hover:translate-x-2"
//               >
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </motion.div>

//         {/* Contact Info */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, delay: 0.6 }}
//         >
//           <h3 className="text-xl font-bold text-[#f47c20] border-l-4 pl-3 border-[#f47c20] mb-4">
//             Contact Info
//           </h3>
//           <p className="flex items-center gap-3 text-base">
//             <FaMapMarkerAlt className="text-[#f47c20]" />
//             <span>XXX XXXX XXXXXXXXXX</span>
//           </p>
//           <p className="flex items-center gap-3 text-base mt-3">
//             <FaPhone className="text-[#f47c20]" />
//             <span>+91 XXXXXXXXXX</span>
//           </p>
//           <p className="flex items-center gap-3 text-base mt-3">
//             <FaEnvelope className="text-[#f47c20]" />
//             <span>emerald@gmail.com</span>
//           </p>
//         </motion.div>

//       </div>

//         {/* Google Map */}
//         <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.5 }}
//         className="rounded-xl overflow-hidden shadow-lg mt-10"
//       >
//         <iframe
//           title="Emerald Energy Location"
//           className="w-full h-60 rounded-xl"
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094235!2d144.95565101531585!3d-37.81732774201353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf57757e6dc4d0d2!2sVictoria%20Harbour%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sin!4v1635750083323!5m2!1sen!2sin"
//           allowFullScreen=""
//           loading="lazy"
//         ></iframe>
//       </motion.div>
//       {/* Copyright and Social Links */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.5, delay: 0.4 }}
//         className="text-center text-gray-500 text-sm mt-8 border-t border-gray-300 pt-4 flex flex-col md:flex-row justify-between items-center"
//       >
//         <p>
//           © {new Date().getFullYear()} <span className="text-[#f47c20] font-semibold">Emerald Energy</span>. All Rights Reserved.
//         </p>
//         <div className="flex gap-4 mt-3 md:mt-0">
//           {socialLinks.map(({ Icon, href }, index) => (
//             <a
//               key={index}
//               href={href}
//               className="p-3 border border-gray-300 rounded-full hover:bg-[#f47c20] hover:border-[#f47c20] hover:text-white transition duration-300 shadow-md"
//             >
//               <Icon size={20} />
//             </a>
//           ))}
//         </div>
//       </motion.div>
//     </motion.footer>
//   );
// };

// export default Footer;




import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaTwitter,
  FaYoutube
} from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";

const socialLinks = [
  { Icon: FaFacebookF, href: "#", color: "#1877F2" },
  { Icon: FaInstagram, href: "#", color: "#E4405F" },
  { Icon: FaTwitter, href: "#", color: "#1DA1F2" },
  { Icon: FaLinkedinIn, href: "#", color: "#0A66C2" },
  { Icon: FaYoutube, href: "#", color: "#FF0000" }
];

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-gradient-to-b from-white to-blue-50 text-[#1d75bc] pt-12 px-4 md:px-16 lg:px-24 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-0 left-0 w-full h-64 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxZDc1YmMiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzBoLTZsMyAzeiIvPjwvZz48L2c+PC9zdmc+')]"></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
        {/* Logo & About */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center md:items-start text-center md:text-left"
        >
          <div className="bg-white p-4  inline-block mb-5 transform hover:rotate-2 transition-transform duration-300">
            <img
              src="/Emerald Energy Logo.png"
              alt="Emerald Energy Logo"
              className="w-32 h-auto"
            />
          </div>
          <h2 className="text-3xl font-extrabold text-[#f47c20] mb-2">EMERALD ENERGY</h2>
          <p className="text-[#1d75bc] font-medium text-lg mb-4">Energising India, Smartly</p>
          <p className="text-gray-600 text-sm mb-6">Providing sustainable energy solutions for a brighter tomorrow. Join us in our mission to power India's future.</p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-xl font-bold text-[#f47c20] border-l-4 pl-3 border-[#f47c20] mb-6">
            Quick Links
          </h3>
          <ul className="space-y-3 text-base">
            {[
              { name: "Home", link: "/" },
              { name: "About Us", link: "/about-us" },
              { name: "Products & Services", link: "/products-&-Services" },
              { name: "Projects", link: "/projects" },
              { name: "Contact Us", link: "/contact-us" },
              { name: "FAQ's", link: "/faq" }
            ].map((item, index) => (
              <li
                key={index}
                className="hover:text-[#f47c20] transition duration-300 cursor-pointer border-b border-gray-200 pb-2 flex items-center group"
              >
                <div className="w-0 h-0.5 bg-[#f47c20] group-hover:w-3 transition-all duration-300 mr-0 group-hover:mr-2"></div>
                <a href={item.link} className="block w-full">{item.name}</a>
              </li>
            ))}
          </ul>

        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-xl font-bold text-[#f47c20] border-l-4 pl-3 border-[#f47c20] mb-6">
            Contact Info
          </h3>
          <div className="space-y-4">
            <a href="tel:+919990299997" className="flex items-start gap-3 text-base group">
              <div className="mt-1 p-2 bg-blue-50 rounded-lg text-[#f47c20] group-hover:bg-[#f47c20] group-hover:text-white transition-colors duration-300">
                <FaPhone />
              </div>
              <div>
                <p className="font-medium text-[#1d75bc]">Phone Number</p>
                <p className="text-gray-600">+91 999 029 9997</p>
              </div>
            </a>
            <a href="mailto:info@emeraldenergyindia.com" className="flex items-start gap-3 text-base group">
              <div className="mt-1 p-2 bg-blue-50 rounded-lg text-[#f47c20] group-hover:bg-[#f47c20] group-hover:text-white transition-colors duration-300">
                <FaEnvelope />
              </div>
              <div>
                <p className="font-medium text-[#1d75bc]">Email Address</p>
                <p className="text-gray-600">info@emeraldenergyindia.com</p>
              </div>
            </a>
            <a href="https://emeraldenergyindia.com" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-base group">
              <div className="mt-1 p-2 bg-blue-50 rounded-lg text-[#f47c20] group-hover:bg-[#f47c20] group-hover:text-white transition-colors duration-300">
                <TfiWorld />
              </div>
              <div>
                <p className="font-medium text-[#1d75bc]">Website</p>
                <p className="text-gray-600">emeraldenergyindia.com</p>
              </div>
            </a>
            <a href="https://goo.gl/maps/6qYxTt5Fg3G2" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-base group">
              <div className="mt-1 p-2 bg-blue-50 rounded-lg text-[#f47c20] group-hover:bg-[#f47c20] group-hover:text-white transition-colors duration-300">
                <FaMapMarkerAlt />
              </div>
              <div>
                <p className="font-medium text-[#1d75bc]">Our Address</p>
                <p className="text-gray-600">Ground floor, Plot No 7, Vikalp Khand 1, Gomti Nagar, Lucknow</p>
              </div>
            </a>
          </div>
        </motion.div>

      </div>

      {/* Google Map */}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="rounded-xl overflow-hidden shadow-lg mt-12 max-w-7xl mx-auto"
      >
        <div className="bg-white p-4 rounded-t-xl">
          <h3 className="text-xl font-bold text-[#1d75bc]">Find Us</h3>
          <p className="text-gray-600">
            Ground Floor, Plot No 7, Vikalp Khand 1, Gomti Nagar, Lucknow, Uttar Pradesh - 226010
          </p>
        </div>
        <iframe
          title="Emerald Energy Location"
          className="w-full h-64 rounded-b-xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.258394639066!2d80.99669917540693!3d26.85704717669066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be2bf6936edaf%3A0x8f5e0f4d5e90f0e!2sVikalp%20Khand%201%2C%20Gomti%20Nagar%2C%20Lucknow%2C%20Uttar%20Pradesh%20226010!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </motion.div>


      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center text-gray-500 text-sm mt-4 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center py-4 px-4"
      >
        <p className="mb-2 md:mb-0">
          © {new Date().getFullYear()} <span className="text-[#f47c20] font-semibold">Emerald Energy</span>. All Rights Reserved.
        </p>


      </motion.div>

    </motion.footer>
  );
};

export default Footer;










































// import React from "react";
// import { motion } from "framer-motion";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
//   FaMapMarkerAlt,
//   FaPhone,
//   FaEnvelope,
//   FaTwitter,
//   FaYoutube
// } from "react-icons/fa";
// import { TfiWorld } from "react-icons/tfi";

// const socialLinks = [
//   { Icon: FaFacebookF, href: "#", color: "#1877F2" },
//   { Icon: FaInstagram, href: "#", color: "#E4405F" },
//   { Icon: FaTwitter, href: "#", color: "#1DA1F2" },
//   { Icon: FaLinkedinIn, href: "#", color: "#0A66C2" },
//   { Icon: FaYoutube, href: "#", color: "#FF0000" }
// ];

// const Footer = () => {
//   return (
//     <motion.footer
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       viewport={{ once: true }}
//       className="bg-gradient-to-b from-white to-blue-50 text-[#1d75bc] pt-12 px-4 md:px-16 lg:px-24 relative overflow-hidden"
//     >
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="flex flex-col items-center md:items-start text-center md:text-left"
//         >
//           <div className="bg-white p-4 inline-block mb-5 transform hover:rotate-2 transition-transform duration-300">
//             <img
//               src="/logo.jpg"
//               alt="Emerald Energy Logo"
//               className="w-32 h-auto"
//             />
//           </div>
//           <h2 className="text-3xl font-extrabold text-[#f47c20] mb-2">EMERALD ENERGY</h2>
//           <p className="text-[#1d75bc] font-medium text-lg mb-4">Energising India, Smartly</p>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, delay: 0.6 }}
//         >
//           <h3 className="text-xl font-bold text-[#f47c20] border-l-4 pl-3 border-[#f47c20] mb-6">
//             Contact Info
//           </h3>
//           <div className="space-y-4">
//             <a href="tel:+919990299997" className="flex items-start gap-3 text-base group">
//               <div className="mt-1 p-2 bg-blue-50 rounded-lg text-[#f47c20] group-hover:bg-[#f47c20] group-hover:text-white transition-colors duration-300">
//                 <FaPhone />
//               </div>
//               <div>
//                 <p className="font-medium text-[#1d75bc]">Phone Number</p>
//                 <p className="text-gray-600">+91 999 029 9997</p>
//               </div>
//             </a>
//             <a href="mailto:info@emeraldenergyindia.com" className="flex items-start gap-3 text-base group">
//               <div className="mt-1 p-2 bg-blue-50 rounded-lg text-[#f47c20] group-hover:bg-[#f47c20] group-hover:text-white transition-colors duration-300">
//                 <FaEnvelope />
//               </div>
//               <div>
//                 <p className="font-medium text-[#1d75bc]">Email Address</p>
//                 <p className="text-gray-600">info@emeraldenergyindia.com</p>
//               </div>
//             </a>
//             <a href="https://emeraldenergyindia.com" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-base group">
//               <div className="mt-1 p-2 bg-blue-50 rounded-lg text-[#f47c20] group-hover:bg-[#f47c20] group-hover:text-white transition-colors duration-300">
//                 <TfiWorld />
//               </div>
//               <div>
//                 <p className="font-medium text-[#1d75bc]">Website</p>
//                 <p className="text-gray-600">emeraldenergyindia.com</p>
//               </div>
//             </a>
//             <a href="https://goo.gl/maps/6qYxTt5Fg3G2" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-base group">
//               <div className="mt-1 p-2 bg-blue-50 rounded-lg text-[#f47c20] group-hover:bg-[#f47c20] group-hover:text-white transition-colors duration-300">
//                 <FaMapMarkerAlt />
//               </div>
//               <div>
//                 <p className="font-medium text-[#1d75bc]">Our Address</p>
//                 <p className="text-gray-600">Ground floor, Plot No 7, Vikalp Khand 1, Gomti Nagar, Lucknow</p>
//               </div>
//             </a>
//           </div>
//         </motion.div>
//       </div>

//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.5, delay: 0.4 }}
//         className="text-center text-gray-500 text-sm mt-4 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center py-4 px-4"
//       >
//         <p className="mb-2 md:mb-0">
//           © {new Date().getFullYear()} <span className="text-[#f47c20] font-semibold">Emerald Energy</span>. All Rights Reserved.
//         </p>
//       </motion.div>
//     </motion.footer>
//   );
// };

// export default Footer;
