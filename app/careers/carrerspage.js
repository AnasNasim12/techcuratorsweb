"use client";


import { motion } from 'framer-motion'; // Import motion from framer-motion
import { useRef } from 'react'; // Import useRef for scrolling
import OpenPositions from '../components/openpostion/page';

const Careers = () => {
  // Reference to the OpenPositions section for smooth scrolling
  const openPositionsRef = useRef(null);

  // Function to scroll to open positions section
  const scrollToOpenings = () => {
    openPositionsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      
      {/* Hero Section - Matching FashionLifestyle.jsx */}
      <section className="relative w-full min-h-[calc(100vh-300px)] md:min-h-[calc(100vh-75px)] flex items-center py-12 md:py-20 bg-[#326B3F]/15">
        <div className="container max-w-screen-xl mx-auto px-4 md:px-6 flex flex-col items-center text-center z-10">
          <div className="inline-block px-4 py-1 bg-[#326B3F]/20 rounded-full mb-6">
            <span className="text-[#326B3F] font-medium text-sm">Join Our Team</span>
          </div>
          
          <h1 className="text-black font-semibold text-[32px] sm:text-[45px] md:text-[60px] leading-tight md:leading-[1.2] tracking-[0.014em] max-w-4xl">
            We make up TransCurators &
            <span className="text-[#326B3F] block mt-2">
              We're looking for talent.
            </span>
          </h1>
          
          
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button 
              onClick={scrollToOpenings}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-lg hover:shadow-xl transition-all duration-500 font-medium text-base bg-[#326B3F] text-white hover:-translate-y-1"
            >
              Check for Openings
            </motion.button>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-8 w-16 h-16 rounded-full bg-[#326B3F]/10 blur-xl"></div>
        <div className="absolute bottom-1/4 right-8 w-20 h-20 rounded-full bg-[#326B3F]/20 blur-xl"></div>
        <div className="absolute top-3/4 left-1/4 w-12 h-12 rounded-full bg-[#326B3F]/15 blur-lg"></div>
        
       
      </section>
      
       
      <div ref={openPositionsRef}>
         <OpenPositions /> 
      </div>
      
    </>  
  );
}
export default Careers;
