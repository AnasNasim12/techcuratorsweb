"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import BlogLayout from '../components/blogslayout/page';

const Blogs = () => {
  // Add scroll progress for parallax effects
  const [scrollY, setScrollY] = useState(0);
  const blogLayoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to handle smooth scroll to BlogLayout
  const scrollToBlogs = () => {
    blogLayoutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <>
      <motion.section 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full min-h-[calc(100vh-300px)] md:min-h-[calc(100vh-75px)] flex items-center py-12 md:py-20 bg-gradient-to-b from-[#326B3F]/10 to-[#326B3F]/5 overflow-hidden"
      >
        <motion.div 
          className="container max-w-screen-xl mx-auto px-4 md:px-6 flex flex-col items-center text-center z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-black font-semibold text-[32px] sm:text-[45px] md:text-[60px] leading-tight md:leading-[1.2] tracking-[0.014em] max-w-4xl"
          >
            The latest blogs: Stay
            <motion.span 
              className="text-[#326B3F] block mt-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              updated on what's happening.
            </motion.span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-[#6a6a6a] mt-6 text-lg leading-relaxed max-w-2xl mx-auto"
          >
            Let us help you become even greater at what you do.
            Fill out the following form and we will get back to you in the next 24 hours.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToBlogs}
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-lg hover:shadow-xl transition-all duration-500 font-medium text-base bg-[#326B3F] text-white hover:-translate-y-1"
            >
              Explore All Blogs
            </motion.button>
          </motion.div>
        </motion.div>
        
        {/* Decorative elements with subtle animation */}
        <motion.div 
          className="absolute top-1/4 left-8 w-16 h-16 rounded-full bg-[#326B3F]/10 blur-xl"
          animate={{ 
            x: Math.sin(scrollY * 0.01) * 10,
            y: Math.cos(scrollY * 0.01) * 10
          }}
          transition={{ type: "spring", stiffness: 10 }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-1/4 right-8 w-20 h-20 rounded-full bg-[#326B3F]/20 blur-xl"
          animate={{ 
            x: Math.cos(scrollY * 0.01) * -15,
            y: Math.sin(scrollY * 0.01) * -15
          }}
          transition={{ type: "spring", stiffness: 5 }}
        ></motion.div>
        <motion.div 
          className="absolute top-3/4 left-1/4 w-12 h-12 rounded-full bg-[#326B3F]/15 blur-lg"
          animate={{ 
            x: Math.sin(scrollY * 0.02) * 8,
            y: Math.cos(scrollY * 0.02) * 8
          }}
          transition={{ type: "spring", stiffness: 8 }}
        ></motion.div>
      </motion.section>
      
      {/* Wrap BlogLayout with motion for entrance animation */}
      <motion.div
        ref={blogLayoutRef}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="blog-container"
      >
        <BlogLayout />
      </motion.div>
      
      {/* Call-to-action section before footer */}
      <motion.section 
        className="bg-[#429054]/10 py-16 mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <motion.h2 
            className="text-2xl md:text-3xl font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Want to <span className="text-[#326B3F]">Stay Updated</span> on Latest Trends?
          </motion.h2>
          
          <motion.p 
            className="text-[#6a6a6a] mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Subscribe to our newsletter and never miss out on our latest articles, insights, and industry updates.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-auto flex-1 px-4 py-3 rounded-md border border-[#326B3F]/30 focus:border-[#326B3F] focus:outline-none focus:ring-2 focus:ring-[#326B3F]/20 text-[#6a6a6a]"
            />
            <button 
              className="bg-[#326B3F] text-white px-6 py-3 rounded-md hover:bg-[#429054] transition-colors duration-300"
            >
              Subscribe Now
            </button>
          </motion.div>
        </div>
      </motion.section>

      <style jsx>{`
        .blog-container img {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
          object-fit: cover;
          margin: 0 auto;
          display: block;
        }

        @media (min-width: 640px) {
          .blog-container img {
            max-height: 300px;
            width: 100%;
          }
        }

        @media (min-width: 1024px) {
          .blog-container img {
            max-height: 400px;
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
export default Blogs;