import React, { useState, useEffect, useRef } from 'react';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const pageRef = useRef(null);

  useEffect(() => {
    // Trigger entrance animation
    setTimeout(() => {
      if (pageRef.current) {
        pageRef.current.style.opacity = "1";
        pageRef.current.style.transform = "translateY(0)";
      }
    }, 100);
  }, []);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "1. What are the unique tourist attractions in Saudi Arabia?",
      answer: "Saudi Arabia boasts incredible sites like the ancient Nabatean ruins of Al-Ula (Madain Saleh), the futuristic NEOM megacity project, the stunning Edge of the World cliffs, pristine Red Sea beaches, and the holy cities of Mecca and Medina."
    },
    {
      question: "2. How can I plan my visit to tourist attractions in Saudi Arabia?",
      answer: "First check visa requirements, then research regions of interest. Download the 'Visit Saudi' app for official info. Book popular sites like Al-Ula in advance. Consider visiting between October-April to avoid extreme heat. Pack modest clothing for cultural sites."
    },
    {
      question: "3. Do I need to book tickets in advance for some tourist attractions?",
      answer: "Absolutely! Major sites like Al-Ula, Diriyah, and Red Sea resorts require advance booking. During peak season (Nov-Mar), book at least 2-4 weeks ahead. Some religious sites have limited visitor numbers and strict entry requirements."
    },
    {
      question: "4. What are the official working hours of the tourist attractions?",
      answer: "Most cultural sites open 9AM-6PM, while malls and entertainment venues often operate until midnight. Religious sites close during prayer times. Many outdoor attractions adjust hours seasonally - always verify current times on official websites before visiting."
    },
    {
      question: "5. What is the best time to visit tourist attractions in Saudi Arabia?",
      answer: "The ideal window is October through April when temperatures range from 15-30°C. December-February offers perfect weather for desert excursions. Avoid June-August when temperatures exceed 45°C. Ramadan offers unique cultural experiences but with adjusted hours."
    },
    {
      question: "6. Can I visit tourist attractions with my family?",
      answer: "Yes! Saudi Arabia has become extremely family-friendly with dedicated family zones in malls, theme parks like Winter Wonderland, and kid-friendly historical tours. New mega-projects like Qiddiya are being built specifically for family entertainment."
    },
    {
      question: "7. Are there discounts or special ticket offers for students or families?",
      answer: "Definitely! Students get 50% off at many cultural sites with valid ID. Family packages often include 1-2 free child tickets. Seniors and disabled visitors frequently receive discounts. Check VisitSaudi.com for current promotions and combo tickets."
    }
  ];

  return (
    <div 
      ref={pageRef}
      style={{
        backgroundColor: "#0b0c0d",
        backgroundImage: `
          radial-gradient(circle at top left, rgba(18, 102, 15, 0.3), transparent 40%),
          radial-gradient(circle at bottom right, rgba(18, 102, 15, 0.3), transparent 40%)
        `,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: "100vh",
        padding: "5rem 2rem 4rem",
        color: "white",
        fontFamily: "Arial, sans-serif",
        position: "relative",
        opacity: 0,
        transform: "translateY(50px)",
        transition: "all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        willChange: "opacity, transform"
      }}
    >
      {/* Animated background elements */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "radial-gradient(circle at center, rgba(18, 165, 16, 0.05) 0%, transparent 70%)",
        opacity: 0,
        animation: "fadeIn 1.2s 0.3s forwards"
      }}></div>

      <div style={{ 
        maxWidth: "850px", 
        margin: "0 auto",
        textAlign: "center",
        marginBottom: "3rem",
        opacity: 0,
        transform: "scale(0.95)",
        animation: "contentFadeIn 0.6s 0.4s forwards"
      }}>
        <h1 style={{ 
          fontSize: "2.8rem", 
          fontWeight: "700",
          marginBottom: "1rem",
          color: "white",
          lineHeight: "1.3",
          marginTop :"75px",
          textShadow: "0 2px 8px rgba(0,0,0,0.4)"
        }}>
          Everything you need to know in one place!
        </h1>
        <p style={{ 
          fontSize: "1.4rem",
          color: "#cccccc",
          marginBottom: "2rem"
        }}>
          Get answers to help you plan your trip with ease
        </p>
      </div>

      <div style={{ 
        maxWidth: "850px", 
        margin: "0 auto",
        paddingBottom: "6rem",
      }}>
        {faqItems.map((item, index) => (
          <div 
            key={index} 
            style={{ 
              marginBottom: "2.2rem",
              cursor: "pointer",
              opacity: 0,
              transform: "translateX(-20px)",
              animation: `questionFadeIn 0.5s ${0.5 + index * 0.1}s forwards`,
              transition: "all 0.3s ease",
            }}
            onClick={() => toggleAnswer(index)}
          >
            <h2 style={{ 
              color: "white",
              fontSize: "1.5rem",
              marginBottom: "0.8rem",
              display: "flex",
              alignItems: "center",
              padding: "0.5rem 0",
              borderBottom: "1px solid rgba(255,255,255,0.08)"
            }}>
              <span style={{ 
                marginRight: "1.5rem",
                color: "white",
                fontWeight: "700",
                fontSize: "1.8rem",
                minWidth: "2.5rem"
              }}>
                {index + 1}.
              </span>
              {item.question}
            </h2>
            {activeIndex === index && (
              <div style={{ 
                color: "#eeeeee",
                paddingLeft: "4.2rem",
                paddingTop: "1rem",
                paddingRight: "1rem",
                animation: "enhancedReveal 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
                fontSize: "1.2rem",
                lineHeight: "1.7",
                textShadow: "0 1px 3px rgba(0,0,0,0.3)"
              }}>
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div style={{
        textAlign: "center",
        color: "#666",
        fontSize: "0.95rem",
        padding: "1.5rem 0",
        position: "absolute",
        bottom: "0",
        left: "0",
        right: "0",
        marginTop :"75px",
        opacity: 0,
        animation: "fadeIn 0.8s 1.2s forwards"
      }}>
        <div>Privacy Policy</div>
        <div>© 2025 Vayala. All Rights Reserved.</div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          to { opacity: 1; }
        }
        
        @keyframes contentFadeIn {
          0% { opacity: 0; transform: scale(0.95); }
          60% { opacity: 1; transform: scale(1.03); }
          100% { opacity: 1; transform: scale(1); }
        }
        
        @keyframes questionFadeIn {
          0% { opacity: 0; transform: translateX(-20px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes enhancedReveal {
          0% { opacity: 0; transform: translateY(-25px) scale(0.96); }
          60% { opacity: 0.8; transform: translateY(8px) scale(1.02); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
};

export default Faq;