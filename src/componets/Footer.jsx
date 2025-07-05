import React from "react";
import { Link } from "react-router-dom";
import {
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9],
      }}
      style={{
        backgroundColor: "#0b0c0d",
        backgroundImage: `
          radial-gradient(circle at top left, rgba(34, 139, 34, 0.15), transparent 40%),
          radial-gradient(circle at bottom right, rgba(34, 139, 34, 0.15), transparent 40%)
        `,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="text-gray-100 py-12 border-t border-gray-800"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* باقي محتوى الفوتر كما هو */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-5"
          >
            <motion.h2
              whileHover={{ scale: 1.02 }}
              className="text-2xl font-bold text-white"
            >
              VAYALA
            </motion.h2>

            <motion.p className="text-gray-400 text-sm">
              Discover the wonders of Saudi Arabia's rich heritage and
              breathtaking landscapes.
            </motion.p>

            <motion.div
              className="flex space-x-4 pt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {[
                { icon: <FaTwitter />, color: "#1DA1F2", name: "Twitter" },
                { icon: <FaInstagram />, color: "#E1306C", name: "Instagram" },
                { icon: <FaFacebook />, color: "#4267B2", name: "Facebook" },
                { icon: <FaLinkedin />, color: "#0077B5", name: "LinkedIn" },
                { icon: <FaYoutube />, color: "#FF0000", name: "YouTube" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ y: -5, scale: 1.2, color: social.color }}
                  whileTap={{ scale: 0.9, rotate: 10 }}
                  href="#"
                  className="text-gray-400 text-xl transition-all"
                  aria-label={social.name}
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{
                    transition:
                      "all 0.3s cubic-bezier(0.68, -0.55, 0.32, 1.55)",
                  }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 gap-8"
          >
            <div>
              <motion.h4
                whileHover={{ x: 3 }}
                className="text-lg font-semibold mb-4 text-white"
              >
                Explore
              </motion.h4>
              <ul className="space-y-3">
                {[
                  "Historical Sites",
                  "Desert Adventures",
                  "Coastal Retreats",
                  "Cultural Events",
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.05 }}
                    whileHover={{
                      x: 5,
                      transition: { type: "spring", stiffness: 500 },
                    }}
                  >
                    <Link
                      to={`/${item.toLowerCase().replace(" ", "-")}`}
                      className="text-gray-400 hover:text-white text-sm transition-colors flex items-center"
                      aria-label={`Navigate to ${item}`}
                    >
                      <span className="w-2 h-2 rounded-full bg-gray-500 mr-3 group-hover:bg-white transition-colors"></span>
                      {item}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <motion.h4
                whileHover={{ x: 3 }}
                className="text-lg font-semibold mb-4 text-white"
              >
                Resources
              </motion.h4>
              <ul className="space-y-3">
                {[
                  "Travel Guides",
                  "Visa Information",
                  "Safety Tips",
                  "FAQ Center",
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.05 }}
                    whileHover={{
                      x: 5,
                      transition: { type: "spring", stiffness: 500 },
                    }}
                  >
                    <Link
                      to={`/${item.toLowerCase().replace(" ", "-")}`}
                      className="text-gray-400 hover:text-white text-sm transition-colors flex items-center"
                      aria-label={`Navigate to ${item}`}
                    >
                      <span className="w-2 h-2 rounded-full bg-gray-500 mr-3 group-hover:bg-white transition-colors"></span>
                      {item}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <motion.h4
              whileHover={{ x: 3 }}
              className="text-lg font-semibold mb-4 text-white"
            >
              Contact Us
            </motion.h4>
            <ul className="space-y-4">
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                whileHover={{ x: 5 }}
                className="flex items-start text-gray-400 text-sm"
              >
                <FaMapMarkerAlt className="mt-1 mr-3 text-gray-500 flex-shrink-0" />
                Riyadh, Kingdom of Saudi Arabia
              </motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                whileHover={{ x: 5 }}
                className="flex items-center text-gray-400 text-sm"
              >
                <FaPhone className="mr-3 text-gray-500 flex-shrink-0" />
                +20 100 897 3205
              </motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                whileHover={{ x: 5 }}
                className="flex items-center text-gray-400 text-sm"
              >
                <FaEnvelope className="mr-3 text-gray-500 flex-shrink-0" />
                Marwanelzazy8@gmail.com
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Animated Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
            ease: [0.6, 0.05, 0.01, 0.9],
          }}
          className="border-t border-gray-800 mb-8 relative"
          style={{ originX: 0 }}
        >
          <motion.div
            className="absolute top-0 left-0 h-px bg-white"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
              delay: 1,
              duration: 1,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-gray-500 text-sm mb-4 md:mb-0"
          >
            © {new Date().getFullYear()} SaudiExplorer. All rights reserved.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex space-x-6"
          >
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (item) => (
                <motion.div key={item} whileHover={{ y: -3, color: "#ffffff" }}>
                  <Link
                    to={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-500 hover:text-white text-sm transition-colors"
                    aria-label={`Navigate to ${item}`}
                  >
                    {item}
                  </Link>
                </motion.div>
              )
            )}
          </motion.div>
        </div>

        {/* Premium Credits */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.2,
            type: "spring",
            stiffness: 100,
          }}
          className="text-center mt-10"
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full border border-gray-600">
            <span className="text-gray-400 text-sm">
              Designed by{" "}
              <span className="font-semibold text-white">Ashraf</span>
            </span>
            <span className="mx-3 text-gray-600 select-none">•</span>
            <span className="text-gray-400 text-sm">
              Developed by{" "}
              <span className="font-semibold text-white">Marwan</span>
            </span>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
