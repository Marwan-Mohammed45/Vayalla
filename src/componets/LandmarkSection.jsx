import React from "react";
import { motion } from "framer-motion";

import kaabaImg from "../assets/illuminated-minaret-symbolizes-spirituality-famous-blue-mosque-generated-by-ai_188544-35440.png";
import madainSalehImg from "../assets/istockphoto-1401473286-612x612.jpg";
import riyadhTowerImg from "../assets/Omrania-Kingdom-Centre-Riyadh-Season-2019-Saudi-Arabia-Abdullah_Aleisa1.jpg";

const categories = [
  {
    title: "Religious Attractions",
    image: kaabaImg,
  },
  {
    title: "Historical Attractions",
    image: madainSalehImg,
  },
  {
    title: "Entertainment Attractions",
    image: riyadhTowerImg,
  },
];

const LandmarkSection = () => {
  return (
    <section
      className="relative text-white py-40 px-4 min-h-[120vh] flex flex-col items-center justify-start"
      style={{
        backgroundColor: "#0b0c0d",
        backgroundImage: `
          radial-gradient(circle at top left, rgba(18, 102, 15, 0.3), transparent 40%),
          radial-gradient(circle at bottom right, rgba(18, 102, 15, 0.3), transparent 40%)
        `,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-black/10 z-0"></div>

      <div className="relative z-10 text-center mb-20">
        <motion.h2
          className="text-2xl md:text-4xl font-medium leading-snug tracking-tight drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Learn about <br />
          <span className="font-light">
            the most prominent landmarks in Saudi Arabia
          </span>
        </motion.h2>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl w-full px-6">
        {categories.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
            }}
            whileTap={{ scale: 0.98 }}
            className="relative rounded-2xl overflow-hidden border-2 border-white/50 shadow-2xl cursor-pointer group"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[22rem] object-cover group-hover:brightness-75 transition duration-300 ease-in-out"
            />
            <div className="absolute bottom-5 left-0 w-full text-center text-white text-lg font-semibold drop-shadow-md">
              {item.title}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="relative z-10 text-center mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <p className="text-2xl md:text-4xl font-medium drop-shadow-md">And more</p>
      </motion.div>
    </section>
  );
};

export default LandmarkSection;
