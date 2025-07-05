import React from 'react';
import { motion } from 'framer-motion';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: "easeInOut"
    }
  }
};

const textVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "backOut"
    }
  }
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 0.3,
    transition: {
      duration: 1.2,
      ease: "easeInOut"
    }
  }
};

const HeroSection = () => {
  return (
    <motion.div
      className="w-full h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundColor: '#0b0c0d',
        backgroundImage: `
          radial-gradient(circle at top left, rgba(18, 102, 15, 0.3), transparent 40%),
          radial-gradient(circle at bottom right, rgba(18, 102, 15, 0.3), transparent 40%)
        `,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Optional overlay if needed */}
      <motion.div 
        className="absolute inset-0 bg-black/30"
        variants={overlayVariants}
      />

      <motion.div 
        className="text-center px-4 max-w-3xl z-10"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2 }}
      >
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-3 sm:mb-4 md:mb-5"
          variants={textVariants}
        >
          Explore the Kingdom's landmarks
        </motion.h1>
        
        <motion.p 
          className="text-lg sm:text-xl md:text-2xl text-white opacity-90 px-2 sm:px-0"
          variants={textVariants}
        >
          Where the magic of history meets the splendor of nature
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
