"use client";

import React from "react";

import Carousel from "../components/carousel/page";
import ScrollContentSection from "../components/scrollview/page";
import { motion } from "framer-motion";

function AboutUs() {  
  return (
    <div className="min-h-screen w-full">
     

      {/* Hero Section - Redesigned to match other pages */}
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
            We're a team of passionate content creators who transform ideas into compelling narratives. Our mission is to elevate brands through authentic storytelling that resonates with audiences worldwide.
          </p>
          
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-8 w-16 h-16 rounded-full bg-[#326B3F]/10 blur-xl"></div>
        <div className="absolute bottom-1/4 right-8 w-20 h-20 rounded-full bg-[#326B3F]/20 blur-xl"></div>
        <div className="absolute top-3/4 left-1/4 w-12 h-12 rounded-full bg-[#326B3F]/15 blur-lg"></div>
      </section>

      {/* logo0 section */}
      <div className="flex justify-center md:mt-22 mt-12">
        <div className="max-w-screen-xl flex justify-center mx-auto items-center">
          <div className="text-center flex-row">
            <p className="text-sm text-[#326B3F]">Our Partners</p>
            <p className="md:text-3xl text-xl text-black font-medium mt-4">
              Trusted by the
              <span className="text-[#326B3F]">
                {" "}
                World's Leading Organizations
              </span>
            </p>
            <p className="text-sm text-[#6a6a6a] mt-4 ">
              We don't just talk big—we've got the partnerships to prove it.
              Industry giants trust us to take their brand stories to the next
              level. Why? Because we don't do boring. We make brands
              unforgettable.
            </p>
          </div>
        </div>
      </div>
      <div className="relative md:mt-22 mt-12 bg-[#429054]/20 h-auto py-28  flex justify-center items-center mx-auto">
        <img
          src="/transPen.png"
          alt="Trans logo"
          className="absolute opacity-5 -left-10 md:top-10 top-1 md:h-44 md:w-44 h-28 w-28"
        />
        <div className="max-w-screen-lg flex justify-center items-center mx-auto">
        <Carousel  gap={60} className='h-12 '>
                                                          <img
                                                            src='/1mg.png'
                                                            alt='Tata1mg - Tata1mg'
                                                            className=' w-[200px] h-12'
                                                          />
                                                          <img
                                                            src='/Mfine.png'
                                                            alt='Mfine-Mfine'
                                                            className=' w-[200px] h-12'
                                                          />
                                                          <img
                                                            src='/Apollo Hospitals.png'
                                                            alt='Apollo-Apollo'
                                                            className=' w-[200px] h-12'
                                                          />
                                                          <img
                                                            src='/Myntra.png'
                                                            alt='Myntra-Myntra'
                                                            className=' w-[200px] h-12'
                                                          />
                                                          <img
                                                            src='/Paytm.png'
                                                            alt='PayTM - PayTM'
                                                            className=' w-[200px] h-12'
                                                          />
                                                          <img
                                                            src='/TCS.png'
                                                            alt='TCS - TCS'
                                                            className=' w-[200px] h-12'
                                                          />
                                                          <img
                                                            src='/HCL Technologies.png'
                                                            alt='HCL-HCL'
                                                            className=' w-[200px] h-12'
                                                          />
                                                          <img
                                                            src='/Airtel.png'
                                                            alt='Airtel-Airtel'
                                                            className=' w-[200px] h-12'
                                                          />
                                                          <img
                                                            src="/upGrad.png"
                                                            alt='Upgrad - Upgrad'
                                                            className=' w-[200px] h-12'
                                                          />
                                                          <img
                                                            src="/Ajio.png"
                                                            alt='Ajio - Ajio'
                                                            className=' w-[200px] h-12'
                                                          />
                                                          <img
                                                            src="/Aster Hospitals.png"
                                                            alt='Aster-Aster'
                                                            className=' w-[200px] h-12'
                                                          />
                                                          <img
                                                            src='/HDFC.png'
                                                            alt='HDFC-HDFC'
                                                            className=' w-[200px] h-12'
                                                          />
                                                          <img
                                                            src='/Adani.png'
                                                            alt='Adani - Adani'
                                                            className=' w-[200px] h-12'
                                                          />
                                                        </Carousel>
        </div>
      </div>

      {/* section 2 */}
      <div className=" w-full flex flex-col md:mt-22 mt-12 justify-center items-center">
        <div className="text-[#326b3f] text-sm mb-4">Our Expertise</div>
        <div className="text-black text-3xl text-center font-semibold">
          Our Domain Expertise can accelerate your success.<br/>
          <span className="text-[#326B3F] mb-4">Let’s team up!</span>
        </div>
        <div className="text-[#326b3f] w-4/5 xl:w-3/5 text-center mt-4">
          You need more than content—you need content that cuts through the
          noise. That’s where we come in. We bring deep industry expertise to
          the table, crafting tailored solutions that don’t just get attention
          but drive real results.
        </div>
      </div>

      {/*section6----Horizontal horizon type line*/}
      <div className="relative  z-50 w-full h-20  mt-12 md:mt-22">
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

      {/* section 3 */}
      <div className="flex flex-col justify-center items-center gap-6 py-8 sm:py-12 px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 xl:gap-14 w-full max-w-7xl">
          {[
            {name: "Automotive", icon: (
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 17h14M5 17a2 2 0 01-2-2V9m2 10a2 2 0 002 2h10a2 2 0 002-2M5 17l-2-2m19 2a2 2 0 01-2-2V9M17 17l2-2M9 7l2-2h2l2 2M7 7h10l2 2v6m-14 0v-6l2-2"/>
              </svg>
            )},
            {name: "Real Estate", icon: (
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
              </svg>
            )},
            {name: "Healthcare", icon: (
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 12h15m-15 0a3 3 0 01-3-3V6a3 3 0 013-3h15a3 3 0 013 3v3a3 3 0 01-3 3m-15 0a3 3 0 00-3 3v3a3 3 0 003 3h15a3 3 0 003-3v-3a3 3 0 00-3-3m-9-9l1 1m0 0l1-1m-1 1v4"/>
              </svg>
            )},
            {name: "FinTech", icon: (
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
              </svg>
            )},
            {name: "EdTech", icon: (
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
              </svg>
            )}
          ].map((item, key) => (
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
          Our industry-specific expertise allows us to create content that resonates with your target audience. 
          We understand the unique challenges and opportunities in these sectors, ensuring your message hits the mark every time.
        </div>
      </div>

      {/* section 4 */}
      <div className="w-full flex flex-col justify-center items-center">
        <ScrollContentSection/>

        <div className="mx-5 md:w-4/5 mt-12 md:mt-0 text-lg text-center text-[#6b6b6b]">Innovation is a continuous journey, and we’re just getting started. We push boundaries, challenge industry norms, and redefine success in content marketing. As we move forward, our goal remains the same—helping brands craft powerful narratives, enhance engagement, and stay ahead in a competitive digital landscape. The future of content is bright, and we’re leading the way.</div>
      </div>

      {/* section 5 our team */}
      <div className="w-full flex flex-col justify-center items-center mt-24 gap-2">
        <div className="text-sm text-[#326b3f]">Our Team</div>
        <div className="md:text-3xl text-2xl text-center font-medium">High-octane Storytellers that fuel Brand Loyalty</div>
        <div className="text-[#6b6b6b] text-center">Meet the minds behind the magic—visionaries who don't just think outside the box, they crush it.</div>

        <div className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:mt-22 mt-12">
          {/* First team member */}
          <div className="flex flex-col items-center">
            <div className="bg-[#d9e9dd] rounded-xl w-full overflow-hidden">
              <img className="w-full h-auto object-contain mx-auto" src="/boss.png" alt="Harneet S N" />
            </div>
            <div className="flex flex-col text-lg items-center text-center mt-4 font-medium">
              Mr. Harneet S N 
              <span className="font-normal text-sm">CEO & Co-Founder</span>
            </div>
          </div>
          
          {/* Second team member */}
          <div className="flex flex-col items-center">
            <div className="bg-[#d9e9dd] rounded-xl w-full overflow-hidden">
              <img className="w-full h-auto object-contain mx-auto" src="/boss.png" alt="Nandini Marwah" />
            </div>
            <div className="flex flex-col text-lg items-center text-center mt-4 font-medium">
              Ms. Nandini Marwah 
              <span className="font-normal text-sm">COO & Co-Founder</span>
            </div>
          </div>
          
          {/* Third team member */}
          <div className="flex flex-col items-center">
            <div className="bg-[#d9e9dd] rounded-xl w-full overflow-hidden">
              <img className="w-full h-auto object-contain mx-auto" src="/boss.png" alt="Kshitij Goel" />
            </div>
            <div className="flex flex-col text-lg items-center text-center mt-4 font-medium">
              Mr. Kshitij Goel 
              <span className="font-normal text-sm">Co-Founder</span>
            </div>
          </div>
        </div>
      </div>

      {/* section 6 */}
      <div className="w-full bg-[#d9e9dd] h-2/6 flex md:mt-22 mt-12 items-center justify-center mb-26">
          <div className="md:w-1/2 flex flex-col justify-center items-center gap-2">
            <div className="text-center text-2xl md:text-3xl font-medium">Step into the realm of limitless possibilities and</div>
            <div className="text-2xl text-center md:text-3xl text-[#326b3f] font-medium">Watch your brand come alive.</div>

            <button className="mt-2 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md bg-white shadow-[0_0_10px_#CCE3DE] hover:shadow-[0_0_15px_#A8D5BA] font-medium text-base text-gray-500 transition-shadow duration-300">Book a Call</button>
          </div>
      </div>

     
      
    </div>
  );
}

export default AboutUs;
