import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // العناصر مع الأيقونات الجديدة
  const navItems = [
    { 
      name: "Home", 
      path: "/",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    { 
      name: "Categories", 
      path: "/categories",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      )
    },
    { 
      name: "FAQ", 
      path: "/faq",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  // Animation variants
  const menuVariants = {
    hidden: { x: "100%" },
    visible: { 
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 25 }
    },
    exit: { 
      x: "100%",
      transition: { duration: 0.2 }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      backdropFilter: "blur(4px)",
      WebkitBackdropFilter: "blur(4px)"
    },
    exit: { 
      opacity: 0,
      backdropFilter: "blur(0px)",
      WebkitBackdropFilter: "blur(0px)"
    }
  };

  return (
    <>
      <nav 
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 px-4 sm:px-6 lg:px-8 text-white"
        style={{
          backgroundColor: "#0b0c0d",
          backgroundImage: `
            radial-gradient(circle at top left, rgba(0, 0, 0, 0.3), transparent 40%),
            radial-gradient(circle at bottom right, rgba(0, 0, 0, 0.3), transparent 40%)
          `,
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)"
        }}
      >
        {/* Logo - left side */}
        <div className="flex-shrink-0">
          <span className="text-xl font-bold text-white hover:text-opacity-80 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
            VAYALA
          </span>
        </div>

        {/* Desktop navigation - right side */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="relative flex items-center space-x-2 text-gray-300 text-sm sm:text-[16px] font-medium group transition-all duration-300 hover:text-white"
            >
              <span className="opacity-70 group-hover:opacity-100 transition-opacity">
                {item.icon}
              </span>
              <span>{item.name}</span>
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-white opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
            </Link>
          ))}
        </div>

        {/* Mobile menu button - right side */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Side Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Blur Overlay */}
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={overlayVariants}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={toggleMenu}
            />
            
            {/* Compact Side Menu */}
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
              className="fixed top-0 right-0 h-full w-64 sm:w-72 z-50 shadow-xl"
              style={{
                backgroundColor: "#0b0c0d",
                backgroundImage: `
                  radial-gradient(circle at top left, rgba(0, 0, 0, 0.3), transparent 40%),
                  radial-gradient(circle at bottom right, rgba(0, 0, 0, 0.3), transparent 40%)
                `,
                borderLeft: "1px solid rgba(0, 0, 0, 0.1)"
              }}
            >
              <div 
                className="p-4 flex justify-between items-center"
                style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.1)" }}
              >
                <span className="text-xl font-bold text-white">Menu</span>
                <button 
                  className="text-gray-400 hover:text-white focus:outline-none"
                  onClick={toggleMenu}
                  aria-label="Close menu"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="flex flex-col h-full p-4 space-y-2 overflow-y-auto">
                {/* Navigation Links */}
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
                    onClick={toggleMenu}
                  >
                    <span className="text-white/70">
                      {item.icon}
                    </span>
                    <span className="text-sm sm:text-base">{item.name}</span>
                  </Link>
                ))}

                <div className="my-2" style={{ borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}></div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;