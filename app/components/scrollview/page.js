"use client";

import { useState, useRef } from "react";
import Images from 'next/image';
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";

const sections = [
  {
    id: 1,
    title: "The spark of an idea",
    headingColor: "#326b3f",
    content:
      "Every great journey begins with a vision. Ours was to redefine content marketing by mixing creativity with strategy. We aim to bring brands to life through compelling storytelling, ensuring every piece of content engages, inspires, and converts. With a mission to disrupt and innovate, we built a platform that amplifies engagement by 30-50% and transforms content into powerful brand experiences.",
  },
  {
    id: 2,
    title: "Building the foundation",
    headingColor: "#326b3f",
    content:
      "A strong foundation is key to success. We built a powerhouse team of strategists, writers, designers, and marketers passionate about innovation. Our 5K+ creators from premier institutes like IIT Delhi and DTU craft content that captivates and delivers impact. Whether it's animated videos, editorial services, or digital storytelling, our expertise ensures brands stand out in a crowded market.",
  },
  {
    id: 3,
    title: "Delivering impact",
    headingColor: "#326b3f",
    content:
      "Content should do more than inform—it should inspire and drive action. With 1M+ creatives delivered, we specialize in animated videos, graphic design, gamified learning, and corporate training modules. Every project is designed to elevate brand engagement, enhance digital presence, and create measurable success. We don't just create content—we transform ideas into powerful marketing assets.",
  },
  {
    id: 4,
    title: "Scaling beyond borders",
    headingColor: "#326b3f",
    content:
      "What started as a mission soon became a global movement. Today, we serve over 600 brands across industries, offering end-to-end digital solutions tailored for impact. With a commitment to 97% on-time delivery, we ensure our content reaches audiences effectively. Our digital factory produces high-quality content, from e-publications to corporate training modules, making an impact worldwide.",
  },
];

export default function ScrollContentSection() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Track scroll within this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Map scroll progress (0 to 1) to section indices (0 to 4)
  const sectionIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, sections.length + 1]
  );

  // Log scroll progress (for debugging)
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("ScrollYProgress:", latest.toFixed(2));
  });

  // Update active section based on scroll
  useMotionValueEvent(sectionIndex, "change", (latest) => {
    const index = Math.floor(latest);
    console.log("Mapped section index:", index);
    if (index >= 0 && index < sections.length) {
      setActiveIndex(index);
    }
  });

  const activeSection = sections[activeIndex];

  return (
    <div ref={sectionRef} className="relative">
      <div className="top-0 h-screen flex items-center justify-center">
        <section className="max-w-screen-xl mx-auto px-4">
          <div className="text-3xl md:mb-18 mb-8 text-[#326b3f] font-semibold text-center">
            Our Journey
          </div>
          
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSection.id}
                  className="flex flex-col md:flex-row"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Left Section */}
                  <div className="w-full md:w-1/2 bg-white p-8">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="text-6xl font-bold text-[#326B3F] mb-4">
                        {activeSection.id}
                      </div>
                      <h2  className="text-2xl font-semibold mb-4">
                        {activeSection.title}
                      </h2>
                      <p className="text-[#6a6a6a]">{activeSection.content}</p>
                    </motion.div>
                  </div>

                  {/* Right Section */}
                  <div className="w-full md:w-1/2 bg-gray-200 flex items-center justify-center min-h-[250px] relative">
                    <motion.div
                      className="w-full h-full"
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {activeSection.image ? (
                        <Images
                          src={activeSection.image}
                          alt={activeSection.title}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-lg"
                        />
                      ) : (
                        <Images
                          src="https://miro.medium.com/v2/resize:fit:1400/1*tDvPpTA8Jw5P_B5xV8gsjw.jpeg"
                          alt={activeSection.title}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-lg"
                        />
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Pagination indicators */}
            <div className="flex justify-center md:mt-22 mt-12 space-x-1">
              {sections.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer hover:opacity-80 ${
                    activeIndex === index ? 'w-10 bg-[#429054]/40' : 'w-4 bg-gray-400 hover:bg-gray-600'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}