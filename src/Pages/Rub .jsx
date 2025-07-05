import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import rubAlKhaliImg from "../assets/97779.jpg";
import tempIcon from "../assets/drinkwaterrr.jpg";
import visitorsIcon from "../assets/صوره رجل.jpg";
import populationIcon from "../assets/6166e83d-c465-4f7b-99cf-d011a3984d10.png";
import locationImage from "../assets/Screenshot3.png";


const Rub = () => {
  // Animations Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const scaleIn = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } }
  };

  // Refs for scroll animations
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const cardsRef = useRef(null);
  
  const isSection1InView = useInView(section1Ref, { once: true, margin: "-100px" });
  const isSection2InView = useInView(section2Ref, { once: true, margin: "-100px" });
  const isSection3InView = useInView(section3Ref, { once: true, margin: "-100px" });
  const areCardsInView = useInView(cardsRef, { once: true, margin: "-100px" });

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
        minHeight: "100vh",
      }}
      className="text-white px-4 md:px-8 pt-20" // Added pt-20 for top padding
    >
      {/* القسم الرئيسي */}
      <motion.div 
        ref={section1Ref}
        initial="hidden"
        animate={isSection1InView ? "visible" : "hidden"}
        className="flex flex-col md:flex-row items-center gap-6 mb-12 py-8"
      >
        <motion.img
          variants={fadeInUp}
          src={rubAlKhaliImg}
          alt="Madinah"
          className="w-full md:w-[500px] h-[200px] md:h-[300px] object-cover rounded-lg border-2 border-white shadow-lg hover:brightness-75 transition duration-300"
        />
        
        <motion.div 
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
          className="w-full md:w-1/2"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Rub al-Khali Desert
          </h1>
          <p className="text-base text-gray-300 leading-relaxed">
           The Empty Quarter, or Rub' al Khali, is the largest continuous sand desert in the world, stretching across several countries in the Arabian Peninsula. Its vast dunes and harsh environment embody the spirit of Arabia's natural beauty.
          </p>
        </motion.div>
      </motion.div>

      {/* قسم المعلومات */}
      <div className="max-w-5xl mx-auto mb-12">
        <motion.div
          ref={section2Ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isSection2InView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 py-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Discover key information about Rub al-Khali Desert
          </h2>
        </motion.div>

        <motion.div
          ref={cardsRef}
          initial="hidden"
          animate={areCardsInView ? "visible" : "hidden"}
          className="grid gap-6 md:grid-cols-3 mb-12"
        >
          {[tempIcon, visitorsIcon, populationIcon].map((img, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="relative h-[350px] w-[300px] rounded-[20px] rounded-lg border-2 border-white overflow-hidden shadow-lg group"
            >
              <img
                src={img}
                alt={`Card ${index}`}
                className="absolute inset-0 w-full h-full object-cover group-hover:brightness-75 transition duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h4 className="font-semibold text-white text-lg mb-1">
                  {index === 0 ? "Average temperature" : 
                   index === 1 ? "Annual visitors" : "Tourist ratio"}
                </h4>
                <p className="text-white text-sm">
                  {index === 0 ? "22°C in winter and 38°C in summer" : 
                   index === 1 ? "Around Four Hunderd Thousand" : "90% local, 10% foreign"}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* قسم الموقع */}
      <motion.div
        ref={section3Ref}
        initial={{ opacity: 0 }}
        animate={isSection3InView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto py-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isSection3InView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white py-8">
            And don't forget to know the location
          </h2>
        </motion.div>
        
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
          className="w-full group"
        >
          <img
            src={locationImage}
            alt="Location"
            className="w-full h-auto rounded-lg border-2 border-white shadow-md group-hover:brightness-75 transition duration-300"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Rub;