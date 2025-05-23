"use client";

import React from "react";
import Image from 'next/image';
import Carousel from "../components/carousel/page";
import ScrollContentSection from "../components/scrollview/page";
import { motion } from "framer-motion";

function AboutUs() {
  // Define animation variants for container and items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        duration: 0.5
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const expertiseItems = [
    {
      icon: '/messageIcon.png',
      name: "Automotive",
    },
    {
      icon: '/messageIcon.png',
      name: "Real Estate",
    },
    {
      icon: '/messageIcon.png',
      name: "Healthcare",
    },
    {
      icon: '/messageIcon.png',
      name: "Fintech",
    },
    {
      icon: '/messageIcon.png',
      name: "Edtech",
    },
  ];  
  const founders = [
  {
    name: "Harneet Singh",
    position: "Co-Founder",
    img: "/hsn.png", // Add leading slash for local images
    alt: "Founder 1",
    width: 400,
    height: 400,
  },
  {
    name: "Kshitij Goel",
    position: "Co-Founder",
    img: "/kg.png",
    alt: "Founder 2",
    width: 400,
    height: 400,
  },
  {
    name: "Nandini Marwah",
    position: "Co-Founder",
    img: "/nand.png",
    alt: "Founder 3",
    width: 400,
    height: 400,
  },
];

  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center w-full relative overflow-hidden"
            >
              <div className="flex flex-col md:flex-row bg-white min-h-fit md:min-h-[50vh] md:h-[80vh] md:max-w-[calc(100vw-40px)] lg:max-w-[calc(100vw-70px)] w-full mt-4 py-8 md:py-4 relative overflow-hidden">
                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="w-full md:w-[55%] lg:w-[50%] xl:w-[45%] flex flex-col justify-center space-y-4 md:space-y-4 lg:space-y-6 px-5 md:px-8 lg:px-12 overflow-hidden z-10 "
                >
                  <motion.h1 
                    variants={itemVariants}
                    className='text-black font-medium text-[28px] sm:text-[34px] md:text-[50px] lg:text-[50px] xl:text-[60px] text-left leading-none md:leading-none tracking-tight mb-3'
                  >
                    We Are TransCurators
                  </motion.h1>
                  <motion.h1 
                    variants={itemVariants}
                    className='text-[#4B7D57] font-medium text-[28px] sm:text-[34px] md:text-[50px] lg:text-[50px] xl:text-[60px] text-left leading-none md:leading-none tracking-tight mt-[-10px] md:mt-[-5px]'
                  >
                    Creating Content That Inspires
                  </motion.h1>
      
                  <motion.h2 
                    variants={itemVariants}
                    className='text-[#6a6a6a] text-[10px] sm:text-[12px] md:text-[12px] lg:text-[16px] xl:text-[16px] leading-tight md:leading-tight text-left overflow-y-hidden tracking-[0.015em] mt-4'
                  >
                    We're a team of passionate content creators who transform ideas into
                    <br />compelling narratives. Our mission is to elevate brands through authentic
                    <br className="hidden sm:block" /><br className="sm:hidden" />
                    <span className='text-[#6a6a6a] tracking-normal'>storytelling that resonates with audiences worldwide.</span>
                  </motion.h2>
                  
                 
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="hidden md:flex justify-center items-center md:w-[45%] lg:w-[50%] xl:w-[55%] relative"
                >
                  <Image
                    className='max-w-[100%] md:max-w-[90%] lg:max-w-[95%] xl:max-w-[90%] h-auto object-contain mt-2 ml-4'
                    src="/aboutushs.png"
                    alt="Landing Page Hero"
                    width={600}
                    height={600}
                  />
                </motion.div>
      
                {/* Decorative elements with subtle animation */}
                
              </div>
            </motion.div>

      {/* Partners Section */}
      <div className="flex justify-center md:mt-22 mt-12">
        <div className="max-w-screen-xl flex justify-center mx-auto items-center">
          <div className="text-center flex-row">
            <p className="text-sm text-[#326B3F]">Our Partners</p>
            <p className="md:text-3xl text-xl text-black font-medium mt-4">
              Trusted by the
              <span className="text-[#326B3F]"> World&apos;s Leading Organizations</span>
            </p>
            <p className="text-sm text-[#6a6a6a] mt-4 ">
              We don&apos;t just talk big&mdash;we&apos;ve got the partnerships to prove it.
              Industry giants trust us to take their brand stories to the next
              level. Why? Because we don&apos;t do boring. We make brands
              unforgettable.
            </p>
          </div>
        </div>
      </div>
      <div className="relative md:mt-22 mt-12 bg-[#429054]/20 h-auto py-28  flex justify-center items-center mx-auto">
        <div className="max-w-screen-xl flex justify-center items-center mx-auto">
          <Carousel gap={60} className="h-12 ">
            <Image
              src="/1mg.png"
              alt="Tata1mg - Tata1mg"
              width={200}
              height={48}
              className="h-12"
            />
            <Image
              src="/Mfine.png"
              alt="Mfine-Mfine"
              width={200}
              height={48}
              className="h-12"
            />
            <Image
              src="/Apollo Hospitals.png"
              alt="Apollo-Apollo"
              width={200}
              height={48}
              className="h-12"
            />
            <Image
              src="/Myntra.png"
              alt="Myntra-Myntra"
              width={200}
              height={48}
              className="h-12"
            />
            <Image
              src="/Paytm.png"
              alt="PayTM - PayTM"
              width={200}
              height={48}
              className="h-12"
            />
            <Image
              src="/TCS.png"
              alt="TCS - TCS"
              width={200}
              height={48}
              className="h-12"
            />
            <Image
              src="/HCL Technologies.png"
              alt="HCL-HCL"
              width={200}
              height={48}
              className="h-12"
            />
            <Image
              src="/Airtel.png"
              alt="Airtel-Airtel"
              width={200}
              height={48}
              className="h-12"
            />
            <Image
              src="/upGrad.png"
              alt="Upgrad - Upgrad"
              width={200}
              height={48}
              className="h-12"
            />
            <Image
              src="/Ajio.png"
              alt="Ajio - Ajio"
              width={200}
              height={48}
              className="h-12"
            />
            <Image
              src="/Aster Hospitals.png"
              alt="Aster-Aster"
              width={200}
              height={48}
              className="h-12"
            />
            <Image
              src="/HDFC.png"
              alt="HDFC-HDFC"
              width={200}
              height={48}
              className="h-12"
            />
            <Image
              src="/Adani.png"
              alt="Adani - Adani"
              width={200}
              height={48}
              className="h-12"
            />
          </Carousel>
        </div>
      </div>

      {/* Expertise Section */}
      <div className="w-full flex flex-col md:mt-22 mt-12 justify-center items-center">
        <div className="text-[#326b3f] text-sm mb-4">Our Expertise</div>
        <div className="text-black text-3xl text-center font-semibold">
          Our Domain Expertise can accelerate your success.
          <br />
          <span className="text-[#326B3F] mb-4">Let's team up!</span>
        </div>
        <div className="text-[#6a6a6a] w-4/5 xl:w-3/5 text-center mt-4">
          You need more than content&mdash;you need content that cuts through the
          noise. That&apos;s where we come in. We bring deep industry expertise to
          the table, crafting tailored solutions that don&apos;t just get attention
          but drive real results.
        </div>
      </div>
      {/* Expertise Icons Grid */}      
      <div className="flex flex-col justify-center items-center gap-6 md:mt-22 mt-12 px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 xl:gap-14 w-full max-w-7xl">
          {expertiseItems.map((item, key) => (
            <div
              key={key}
              className="border text-[#326b3f] bg-[#D9E9DD] hover:bg-[#f8faf9] transition-all duration-300
              border-[#326b3f]/20 rounded-xl py-4 sm:py-6 px-3 sm:px-4 text-center
              flex flex-col items-center justify-center gap-3 sm:gap-4 group cursor-pointer
              transform hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-[#326b3f] group-hover:scale-110 transition-transform duration-300">
                <Image 
                  src={item.icon} 
                  alt={item.name + " icon"}
                  width={48}
                  height={48}
                  className="h-10 w-10 object-contain"
                />
              </div>
              <span className="font-medium text-xs sm:text-sm md:text-base">{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Content Section */}
      <ScrollContentSection />
      <div className="flex justify-center items-center mt-12">
        <p className="text-[#6a6a6a] text-center max-w-4xl mx-auto leading-relaxed">
          Innovation is a continuous journey, and we're just getting started. We push boundaries, challenge industry norms, and redefine success in content marketing. As we move forward, our goal remains the same—helping brands craft powerful narratives, enhance engagement, and stay ahead in a competitive digital landscape. The future of content is bright, and we're leading the way.
        </p>
      </div>
<section className="w-screen bg-[#D9E9DD] py-20 md:mt-22 mt-12">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-4">
      <div className="flex-1">
        <p className="text-[#326B3F] text-lg mb-4 font-medium">Our Founding Team</p>
        <h2 className="text-3xl md:text-4xl mb-5 leading-tight">
          <span className="text-[#326B3F]">High-octane<br />Storytellers</span> that fuel<br />
          <span className="text-black">Brand Loyalty</span>
        </h2>
        <p className="text-[#6a6a6a] max-w-md mt-4">
          Meet the minds behind the magic-visionaries who don’t just think outside the box, they crush it.
        </p>      </div>
      <div className="flex-1 flex gap-6 justify-center">
        {founders.map((founder, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md overflow-hidden w-32 md:w-40 lg:w-54 h-72 md:h-80 lg:h-96 flex items-center justify-center relative group"
          >
            <Image
              src={founder.img}
              alt={founder.alt}
              width={founder.width}
              height={founder.height}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#326B3F]/80 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white transition-opacity duration-300 p-4">
              <h3 className="font-bold text-xl text-center mb-2">{founder.name}</h3>
              <p className="text-center text-white/90">{founder.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  <div className="w-full bg-[#e5efe5] py-12 mb-20 md:mt-22 mt-12">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <h2 className="md:text-2xl text-xl font-medium text-black">
          Step into the realm of limitless possibilities and
        </h2>
        <div className="md:text-2xl ml-2 text-xl justify-center text-[#326B3F]">
        Watch your brand come alive.
      </div>
      <div href="/contact"
            className="cursor-pointer md:text-lg text-lg inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-[0_0_10px_#CCE3DE] hover:shadow-[0_0_15px_#A8D5BA] font-medium bg-white text-[#487040] transition-shadow duration-300">Book a call</div>
        </div>
    </div>
    </div>
  );
}

export default AboutUs;
