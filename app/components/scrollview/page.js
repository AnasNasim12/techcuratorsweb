"use client";

import { useState } from "react";
import Images from 'next/image';
import {
  motion,
  AnimatePresence,
} from "framer-motion";

const sections = [
  {
    id: 1,
    title: "The spark of an idea",
    headingColor: "#326b3f",
    image: "/journey1.png",
    content:
      "Every great journey begins with a vision. Ours was to redefine content marketing by mixing creativity with strategy. We aim to bring brands to life through compelling storytelling, ensuring every piece of content engages, inspires, and converts. With a mission to disrupt and innovate, we built a platform that amplifies engagement by 30-50% and transforms content into powerful brand experiences.",
  },
  {
    id: 2,
    title: "Building the foundation",
    headingColor: "#326b3f",
    image: "/journey2.png",
    content:
      "A strong foundation is key to success. We built a powerhouse team of strategists, writers, designers, and marketers passionate about innovation. Our 5K+ creators from premier institutes like IIT Delhi and DTU craft content that captivates and delivers impact. Whether it's animated videos, editorial services, or digital storytelling, our expertise ensures brands stand out in a crowded market.",
  },
  {
    id: 3,
    title: "Delivering impact",
    headingColor: "#326b3f",
    image: "/journey3.png",
    content:
      "Content should do more than inform—it should inspire and drive action. With 1M+ creatives delivered, we specialize in animated videos, graphic design, gamified learning, and corporate training modules. Every project is designed to elevate brand engagement, enhance digital presence, and create measurable success. We don't just create content—we transform ideas into powerful marketing assets.",
  },
  {
    id: 4,
    title: "Scaling beyond borders",
    image: "/journey4.png",
    headingColor: "#326b3f",
    content:
      "What started as a mission soon became a global movement. Today, we serve over 600 brands across industries, offering end-to-end digital solutions tailored for impact. With a commitment to 97% on-time delivery, we ensure our content reaches audiences effectively. Our digital factory produces high-quality content, from e-publications to corporate training modules, making an impact worldwide.",
  },
];

export default function ScrollContentSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSection = sections[activeIndex];

  return (
    <div className="py-12 relative">
      <section className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl md:mb-16 mb-8 text-[#326b3f] font-semibold text-center">
          Our Journey
        </h2>
        
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
                {/* Left Section - Content */}
                <div className="w-full md:w-1/2 bg-white p-5 sm:p-6 md:p-8">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#326B3F] mb-3 md:mb-4">
                      {activeSection.id}
                    </div>
                    <h2 className="text-xl sm:text-2xl font-semibold mb-3 md:mb-4">
                      {activeSection.title}
                    </h2>
                    <p className="text-sm md:text-base text-[#6a6a6a]">
                      {activeSection.content}
                    </p>
                  </motion.div>
                </div>

                {/* Right Section - Image */}
                <div className="w-full md:w-1/2 bg-gray-200 flex items-center justify-center min-h-[200px] sm:min-h-[250px] md:min-h-[300px] relative">
                  <motion.div
                    className="w-full h-full"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {activeSection.image && (
                      <div className="relative w-full h-full min-h-[200px] sm:min-h-[250px] md:min-h-[300px]">
                        <Images
                          src={activeSection.image}
                          alt={activeSection.title}
                          fill
                          style={{ objectFit: 'cover' }}
                          className="rounded-lg"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination indicators - Larger tap targets for mobile */}
          <div className="flex justify-center mt-8 md:mt-12 space-x-2 md:space-x-3">
            {sections.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 md:h-2.5 rounded-full transition-all duration-300 cursor-pointer hover:opacity-80 ${
                  activeIndex === index 
                    ? 'w-10 md:w-12 bg-[#429054]/70' 
                    : 'w-5 md:w-6 bg-gray-400 hover:bg-gray-600'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Mobile navigation buttons for easier tapping */}
          <div className="flex justify-between mt-6 md:hidden">
            <button
              onClick={() => setActiveIndex(prev => (prev > 0 ? prev - 1 : sections.length - 1))}
              className="bg-[#E8F3EB] text-[#326B3F] px-4 py-2 rounded-lg"
              aria-label="Previous slide"
            >
              Previous
            </button>
            <button
              onClick={() => setActiveIndex(prev => (prev < sections.length - 1 ? prev + 1 : 0))}
              className="bg-[#326B3F] text-white px-4 py-2 rounded-lg"
              aria-label="Next slide"
            >
              Next
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}