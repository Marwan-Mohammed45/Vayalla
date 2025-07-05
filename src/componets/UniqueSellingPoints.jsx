import React from "react";
import { motion } from "framer-motion";
import image from "../assets/istockphoto-1391369797-612x612.jpg";

const UniqueSellingPoints = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const imageVariants = {
    hidden: {
      x: -50,
      opacity: 0,
      rotate: -5,
    },
    visible: {
      x: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 10,
        mass: 0.5,
      },
    },
    hover: {
      scale: 1,
      boxShadow: "0px 10px 30px rgba(0,0,0,0.2)",
      transition: {
        duration: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: {
      x: 50,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
      },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1 + 0.5,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.section
      className="bg-gray-200 py-12 px-6 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-14">
        {/* الصورة */}
        <motion.div
          className="rounded-2xl overflow-hidden w-full h-[360px] object-contain border-4 border-white shadow-lg w-full md:w-1/2"
          variants={imageVariants}
          whileHover="hover"
        >
          <motion.img
            src={image}
            alt="Tourist Site"
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </motion.div>

        {/* النص */}
        <motion.div
          className="w-full md:w-1/2 text-gray-900"
          variants={textVariants}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold mb-6"
            variants={paragraphVariants}
            custom={0}
          >
            What makes us different?
          </motion.h2>

          <motion.p
            className="text-lg leading-relaxed mb-4"
            variants={paragraphVariants}
            custom={1}
          >
            We don't present information, we create an experience.
            At a time when tourist sites are becoming more and more numerous, we choose to be different... quietly and precisely.
          </motion.p>

          <motion.p
            className="text-lg leading-relaxed mb-4"
            variants={paragraphVariants}
            custom={2}
          >
            We provide accurate content, a design that makes you feel comfortable, categories that make you explore easily, and images that transport you to the heart of the Kingdom before you even step foot inside.
          </motion.p>

          <motion.p
            className="text-lg italic font-medium"
            variants={paragraphVariants}
            custom={3}
          >
            We don't claim to be unique... we live it with every page, every experience, and every visitor.
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default UniqueSellingPoints;
