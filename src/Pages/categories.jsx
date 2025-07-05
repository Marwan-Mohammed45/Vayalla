import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import religiousImg from "../assets/watermark38a712aa0c5111a0be611c8de75da36c.jpg";
import historicalImg from "../assets/jpeg.webp";
import naturalImg from "../assets/sword_dancing_in_saudi_card_1.jpg";
import culturalImg from "../assets/أثر_صناعة_الترفيه_في_السعودية_على_الاقتصاد_والمجتمع.jpg";
import modernImg from "../assets/54660.jpg";

const categories = [
  {
    title: "Religious Attractions :",
    description: `Places brimming with serenity and awe, touching the depths of the heart.
Makkah and Madinah... a destination for every soul yearning for closeness and reassurance.
An incomparable journey of faith, enriching the soul and purifying the heart.
Objective:
To attract pilgrims, Umrah performers, and visitors traveling for religious pilgrimage, as well as to provide information to Muslims interested in religion.
`,
    image: religiousImg,
    link: "/religious",
  },
  {
    title: "Historical Attractions :",
    description: `From the heart of AIUla to the alleys of old Jeddah, history pulses through every stone.  
Castles, souks, and forts tell the stories of our ancestors and the history of civilizations.  
Places that take you on a journey through time and bring the past to life right before your eyes.

Objective:  
To attract those interested in history, antiquities, and heritage, especially tourists who wish to explore the Kingdom's ancient history.`,
    image: historicalImg,
    link: "/historical",
  },
  {
    title: "Cultural Attractions :",
    description: `Celebrate the spirit of Saudi Arabia through its festivals, arts, and heritage.  
Museums, theaters, and cultural centers reflect the diversity of society.  
Every corner tells a story... and every event pulsates with the nation's identity.

Objective:  
To attract tourists interested in arts and culture, especially those who wish to learn about Saudi Arabia's cultural and artistic heritage.`,
    image: naturalImg,
    link: "/Cultural",
  },
  {
    title: "Entertainment Attractions :",
    description: `An atmosphere of fun and excitement in modern amusement parks and event areas.  
Marine adventures, flying experiences, and unforgettable gardens.  
Ideal for families, young people, and anyone looking for  fun.

Objective:  
To attract families and young people looking for  
recreational activities such as games and sports.`,
    image: culturalImg,
    link: "/Entertainment",
  },
  {
    title: "Natural Attractions:",
    description: `Mountains, valleys, deserts, and beaches combine the magic of natural diversity.
From Tabuk to Asir, the scenery and atmosphere are diverse.
Destinations that offer tranquility and rejuvenate your spirit.

Objective:
To attract tourists interested in nature and adventures such as safaris, diving, or hiking in natural areas.`,
    objective:
      "To attract tourists interested in nature and adventures such as safaris, diving, or hiking in natural areas.",
    image: modernImg,
    link: "/Natural",
  },
];

const CategorySection = ({ item, index }) => {
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

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={itemVariants}
      className={`flex flex-col md:flex-row items-center justify-center gap-14 px-4 md:px-8 ${
        index !== categories.length - 1 ? "mb-24" : "mb-0"
      } ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
    >
      {/* Image with animation */}
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

      {/* Text content with animation */}
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
          className="whitespace-pre-line leading-relaxed text-base md:text-lg mb-6 max-h-[300px] md:max-h-[400px] overflow-y-auto pr-2 custom-scrollbar"
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

const Categories = () => {
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
      className="pt-22 pb-12 pb-0 px-4 md:px-8"
    >
      {categories.map((item, index) => (
        <CategorySection key={index} item={item} index={index} />
      ))}
    </div>
  );
};

export default Categories;