"use client";
import CSLayout from '../components/cslayout/page';
import { motion } from 'framer-motion';

const CaseStudies = () => {
  return (
    <>
      
      <section className="relative w-full min-h-[calc(100vh-300px)] md:min-h-[calc(100vh-75px)] flex items-center py-12 md:py-20 bg-gradient-to-b from-[#326B3F]/10 to-[#326B3F]/5">
        <div className="container max-w-screen-xl mx-auto px-4 md:px-6 flex flex-col items-center text-center z-10">
          <div className="inline-block px-4 py-1 bg-[#326B3F]/20 rounded-full mb-6">
            <span className="text-[#326B3F] font-medium text-sm">Case Studies</span>
          </div>
          
          <h1 className="text-black font-semibold text-[32px] sm:text-[45px] md:text-[60px] leading-tight md:leading-[1.2] tracking-[0.014em] max-w-4xl">
            The latest case studies:
            <span className="text-[#326B3F] block mt-2">
              straight from industry leaders
            </span>
          </h1>
          
          <p className="text-[#6a6a6a] mt-6 text-lg leading-relaxed max-w-2xl mx-auto">
            Let us help you become even greater at what you do.
            Fill out the following form and we will get back to you in the next 24 hours.
          </p>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-8 w-16 h-16 rounded-full bg-[#326B3F]/10 blur-xl"></div>
        <div className="absolute bottom-1/4 right-8 w-20 h-20 rounded-full bg-[#326B3F]/20 blur-xl"></div>
        <div className="absolute top-3/4 left-1/4 w-12 h-12 rounded-full bg-[#326B3F]/15 blur-lg"></div>
      </section>
      
      <CSLayout />  
      
    </>
  );
}

export default CaseStudies;