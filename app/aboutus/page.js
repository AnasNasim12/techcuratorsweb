"use client";

import React from "react";
import Images from "next/image";
import Carousel from "../components/carousel/page";
import ScrollContentSection from "../components/scrollview/page";
import { motion } from "framer-motion";
import { Images as LucideImages } from "lucide-react";

function AboutUs() {
  const expertiseItems = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#326B3F"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 17v-2a4 4 0 014-4h2m-6 0a4 4 0 014 4v2m0 0v2a4 4 0 01-4 4H7m6-8h2m-2 0a4 4 0 014 4v2m0 0v2a4 4 0 01-4 4H7"
          />
        </svg>
      ),
      name: "Healthcare",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#326B3F"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 10h16M4 14h16M4 18h16"
          />
        </svg>
      ),
      name: "Education",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#326B3F"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 12h8m-8 4h8M8 16h8"
          />
        </svg>
      ),
      name: "Finance",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#326B3F"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v16m8-8H4"
          />
        </svg>
      ),
      name: "Technology",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#326B3F"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8v8m-4-4h8"
          />
        </svg>
      ),
      name: "Retail",
    },
  ];

  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <section className="relative w-full min-h-[calc(100vh-300px)] md:min-h-[calc(100vh-75px)] flex items-center py-12 md:py-20 bg-[#326B3F]/10 to-[#326B3F]/5 overflow-hidden">
        <div className="container max-w-screen-xl mx-auto px-4 md:px-6 flex flex-col items-center text-center z-10">
          <div className="inline-block px-4 py-1 bg-[#326B3F]/20 rounded-full mb-6">
            <span className="text-[#326B3F] font-medium text-sm">About Us</span>
          </div>

          <h1 className="text-black font-semibold text-[32px] sm:text-[45px] md:text-[60px] leading-tight md:leading-[1.2] tracking-[0.014em] max-w-4xl">
            We Are TransCurators
            <span className="text-[#326B3F] block mt-2">
              Creating Content That Inspires
            </span>
          </h1>

          <p className="text-[#6a6a6a] mt-6 text-lg leading-relaxed max-w-2xl mx-auto">
            We&apos;re a team of passionate content creators who transform ideas
            into compelling narratives. Our mission is to elevate brands
            through authentic storytelling that resonates with audiences
            worldwide.
          </p>
        </div>

        {/* Decorative circles */}
        <div className="absolute top-1/4 left-8 w-16 h-16 rounded-full bg-[#326B3F]/10 blur-xl"></div>
        <div className="absolute bottom-1/4 right-8 w-20 h-20 rounded-full bg-[#326B3F]/20 blur-xl"></div>
        <div className="absolute top-3/4 left-1/4 w-12 h-12 rounded-full bg-[#326B3F]/15 blur-lg"></div>
      </section>

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
        <LucideImages
          className="absolute opacity-5 -left-10 md:top-10 top-1 md:h-44 md:w-44 h-28 w-28"
        />
        <div className="max-w-screen-lg flex justify-center items-center mx-auto">
          <Carousel gap={60} className="h-12 ">
            <Images
              src="/1mg.png"
              alt="Tata1mg - Tata1mg"
              width={200}
              height={48}
              className="h-12"
            />
            <Images
              src="/Mfine.png"
              alt="Mfine-Mfine"
              width={200}
              height={48}
              className="h-12"
            />
            <Images
              src="/Apollo Hospitals.png"
              alt="Apollo-Apollo"
              width={200}
              height={48}
              className="h-12"
            />
            <Images
              src="/Myntra.png"
              alt="Myntra-Myntra"
              width={200}
              height={48}
              className="h-12"
            />
            <Images
              src="/Paytm.png"
              alt="PayTM - PayTM"
              width={200}
              height={48}
              className="h-12"
            />
            <Images
              src="/TCS.png"
              alt="TCS - TCS"
              width={200}
              height={48}
              className="h-12"
            />
            <Images
              src="/HCL Technologies.png"
              alt="HCL-HCL"
              width={200}
              height={48}
              className="h-12"
            />
            <Images
              src="/Airtel.png"
              alt="Airtel-Airtel"
              width={200}
              height={48}
              className="h-12"
            />
            <Images
              src="/upGrad.png"
              alt="Upgrad - Upgrad"
              width={200}
              height={48}
              className="h-12"
            />
            <Images
              src="/Ajio.png"
              alt="Ajio - Ajio"
              width={200}
              height={48}
              className="h-12"
            />
            <Images
              src="/Aster Hospitals.png"
              alt="Aster-Aster"
              width={200}
              height={48}
              className="h-12"
            />
            <Images
              src="/HDFC.png"
              alt="HDFC-HDFC"
              width={200}
              height={48}
              className="h-12"
            />
            <Images
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
          <span className="text-[#326B3F] mb-4">Let&aposs team up!</span>
        </div>
        <div className="text-[#326b3f] w-4/5 xl:w-3/5 text-center mt-4">
          You need more than content&mdash;you need content that cuts through the
          noise. That&aposs where we come in. We bring deep industry expertise to
          the table, crafting tailored solutions that don&aposs just get attention
          but drive real results.
        </div>
      </div>

      {/* Horizontal SVG Line */}
      <div className="relative z-50 w-full h-20 mt-12 md:mt-22">
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-30"
          viewBox="0 0 1000 200"
          preserveAspectRatio="none"
        >
          <path
            d="M0 160 Q500 -150 1000 160"
            stroke="#023912"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      {/* Expertise Icons Grid */}
      <div className="flex flex-col justify-center items-center gap-6 py-8 sm:py-12 px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 xl:gap-14 w-full max-w-7xl">
          {expertiseItems.map((item, key) => (
            <div
              key={key}
              className="border text-[#326b3f] bg-white hover:bg-[#f8faf9] transition-all duration-300
              border-[#326b3f]/20 rounded-xl py-4 sm:py-6 px-3 sm:px-4 text-center
              flex flex-col items-center justify-center gap-3 sm:gap-4 group cursor-pointer
              transform hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-[#326b3f] group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <span className="font-medium text-xs sm:text-sm md:text-base">{item.name}</span>
            </div>
          ))}
        </div>

        <div className="text-center md:mt-10 mt-4 text-xs sm:text-sm md:text-base text-[#6b6b6b] max-w-3xl mx-auto">
          Our industry-specific expertise allows us to create content that
          resonates with your target audience. We understand the unique
          challenges and opportunities in these sectors, ensuring your message
          hits home.
        </div>
      </div>

      {/* Scroll Content Section */}
      <ScrollContentSection />
    </div>
  );
}

export default AboutUs;
