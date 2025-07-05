import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import nationalMuseumImg from "../assets/1.jpg";
import ithraImg from "../assets/200801_OS_N1533_webimageland.png";
import diriyahImg from "../assets/istockphoto-1391369797-612x612.jpg";

const attractions = [
  {
    title: "Explore the most prominent cultural Attractions",
    description: "",
    image: "",
    isHeader: true
  },
  {
    title: "The National Museum",
    description: `The National Museum in Riyadh showcases the rich history and cultural heritage of Saudi Arabia through immersive exhibits and rare artifacts. It is a gateway to understanding the Kingdom's deep-rooted past.`,
    image: nationalMuseumImg,
    link: "/museum"
  },
  {
    title: "Ithra",
    description: `Ithra is a cultural icon in Dhahran, blending art, knowledge, innovation, and creativity under one roof. It inspires generations through exhibitions, performances, and interactive learning experiences.`,
    image: ithraImg,
    link: "/ithra"
  },
  {
    title: "Ad-Diriyah (At-Turaif District)",
    description: `Ad-Diriyah, particularly At-Turaif District, is a historic gem that served as the birthplace of the first Saudi state. It stands today as a symbol of national pride, showcasing traditional architecture and deep-rooted heritage.`,
    image: diriyahImg,
    link: "/diriyah"
  }
];

const AttractionSection = ({ item, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  if (item.isHeader) {
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={itemVariants}
        className="text-center py-16 mt-50 mb-75"
      >
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-white mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ delay: 0.3 }}
        >
          {item.title}
        </motion.h1>
      </motion.div>
    );
  }

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={itemVariants}
      className={`flex flex-col md:flex-row items-center justify-center gap-14 px-4 md:px-8 ${
        index !== attractions.length - 1 ? "mb-24" : "mb-0"
      } ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
    >
      <motion.div 
        className="w-full md:w-1/2"
        variants={imageVariants}
      >
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-[300px] md:h-[430px] object-cover rounded-[20px] border-[2px] border-white shadow-lg"
        />
      </motion.div>

      <motion.div 
        className="w-full md:w-1/2 text-white max-w-2xl"
        initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
        animate={{ 
          opacity: inView ? 1 : 0, 
          x: inView ? 0 : (index % 2 === 0 ? 50 : -50) 
        }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-4 md:mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ delay: 0.4 }}
        >
          {item.title}
        </motion.h2>
        <motion.div 
          className="whitespace-pre-line leading-relaxed text-base md:text-lg mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ delay: 0.5 }}
        >
          {item.description}
        </motion.div>
        <motion.a
          href={item.link}
          className="inline-block bg-[#a77c45] hover:bg-[#8b6232] transition px-6 py-2 md:px-8 md:py-3 text-white font-semibold rounded-lg text-base md:text-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ delay: 0.6 }}
        >
          Explore
        </motion.a>
      </motion.div>
    </motion.section>
  );
};

const Cultural = () => {
  return (
    <div
      style={{
        backgroundColor: "#0b0c0d",
        backgroundImage: `
          radial-gradient(circle at top left, rgba(18, 102, 15, 0.3), transparent 40%),
          radial-gradient(circle at bottom right, rgba(18, 102, 15, 0.3), transparent 40%)
        `,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="pt-12 pb-12 px-4 md:px-8"
    >
      {attractions.map((item, index) => (
        <AttractionSection key={index} item={item} index={index} />
      ))}
    </div>
  );
};

export default Cultural;