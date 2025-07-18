"use client";
import React from 'react'
import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const MarketingAdvertisingPage = () => {

  const textSectionRef = useRef(null);
    const firstTextRef = useRef(null);
    const secondTextRef = useRef(null);
    const [isTextAligned, setIsTextAligned] = useState(false);
    useEffect(() => {
    const handleScroll = () => {
      if (!textSectionRef.current) return;
      
      const sectionRect = textSectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Start animation earlier when section is 50% visible
      let scrollProgress = 1 - (sectionRect.top - windowHeight * 0.5) / (windowHeight * 0.5);
      scrollProgress = Math.min(Math.max(scrollProgress, 0), 1); // Clamp between 0 and 1
      
      // Use cubic-bezier easing for more natural movement
      // Apply easing function to make animation smoother
      const easedProgress = cubicBezier(scrollProgress);
      
      if (scrollProgress >= 1 && !isTextAligned) {
        setIsTextAligned(true);
      } else if (scrollProgress < 1 && isTextAligned) {
        setIsTextAligned(false);
      }
      
      // Apply smoother transitions
      if (firstTextRef.current) {
        // Start fully left, move to center (50% - 50% = 0 for center)
        const translateX = (50 - 100) + (easedProgress * 50);
        firstTextRef.current.style.transform = `translateX(${translateX}%)`;
        firstTextRef.current.style.opacity = 0.5 + (easedProgress * 0.5);
      }
      
      if (secondTextRef.current) {
        // Start fully right, move to center (50% - 0% = 50% for center)
        const translateX = 50 - (easedProgress * 50);
        secondTextRef.current.style.transform = `translateX(${translateX}%)`;
        secondTextRef.current.style.opacity = 0.5 + (easedProgress * 0.5);
      }
    };
    
    // Simple cubic-bezier easing function for smoother animation
    const cubicBezier = (t) => {
      // This approximates a standard ease-out curve
      return 1 - Math.pow(1 - t, 3);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isTextAligned]);

const features = [
  {
    title: "Audience Understanding",
    description: "We delve deep into your target demographics, ensuring content resonates and engages.",
    image: "/bfsiexpertise.jpg",
    alt: "Audience Understanding",
  },
  {
    title: "SEO Optimization",
    description: "Our content is designed to rank, driving organic traffic and enhancing visibility.",
    image: "/seooptbfsi.jpg",
    alt: "SEO Optimization",
  },
  {
    title: "Performance Tracking",
    description: "We continuously monitor content performance, refining strategies for optimal ROI.",
    image: "/compliancevfsi.jpg",
    alt: "Performance Tracking",
  },
];
  // Add counter state
  const [counters, setCounters] = useState({
    "97%": "0%",
    "1M+": "0+",
    "600+": "0+"
  });
  // Animation timing ref
  const animationRef = useRef(null);

  // Counter effect function
  useEffect(() => {
    let startTimestamp;
    const duration = 1500; // Animation duration in milliseconds

    // Animation function
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      // Update each counter based on progress
      const updatedCounters = {};

      // For "97%"
      const percentage = Math.floor(progress * 97);
      updatedCounters["97%"] = `${percentage}%`;

      // For "1M+"
      const millions = (progress * 1).toFixed(1);
      updatedCounters["1M+"] = `${millions >= 1 ? "1" : millions}M+`;

      // For "600+"
      const clients = Math.floor(progress * 600);
      updatedCounters["600+"] = `${clients}+`;

      setCounters(updatedCounters);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(step);
      }
    };

    // Start animation when component is in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animationRef.current = requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    // Target the metrics section
    const metricsSection = document.querySelector('#metrics-section');
    if (metricsSection) {
      observer.observe(metricsSection);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      observer.disconnect();
    };
  }, []);
  
  const metrics = [
    {
      value: '97%',
      description: 'on-time delivery rate, ensuring your campaigns launch as scheduled.'
    },
    {
      value: '1M+',
      description: 'Over 1 million creatives delivered, showcasing our capacity to handle projects of any scale.'
    },
    {
      value: '600+',
      description: 'Collaborations with over 600 global clients, reflecting our versatility and expertise.'
    }
  ];

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
  

  // Scroll progress for parallax effects
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>

      {/*top section*/}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex justify-center w-full relative overflow-hidden"
      >
        <div className="flex flex-col md:justify-center border-4 border-[#429450] md:rounded-4xl min-h-fit md:min-h-[25vh] md:h-[45vh] md:max-w-[calc(100vw-40px)] lg:max-w-[calc(100vw-70px)] w-full mt-4 py-8 md:py-4 relative overflow-visible">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full flex flex-col justify-center items-center space-y-4 md:space-y-4 lg:space-y-6 px-4 sm:px-5 md:px-8 lg:px-12 overflow-visible z-10 relative"
          >
            {/* Decorative stars - same as other pages */}
            <Image 
              src="/star.png" 
              width={24} 
              height={24} 
              alt="Decorative star" 
              className="absolute top-[-20px] left-[5%] md:top-[-30px] md:left-[10%] z-10"
            />
            
            <Image 
              src="/star.png" 
              width={18} 
              height={18} 
              alt="Decorative star" 
              className="absolute bottom-[-15px] right-[8%] md:bottom-[-25px] md:right-[15%] z-10"
            />
            
            <Image 
              src="/star.png" 
              width={16} 
              height={16} 
              alt="Decorative star" 
              className="absolute top-[-15px] right-[12%] md:top-[-25px] md:right-[20%] z-10"
            />
            
            <Image 
              src="/star.png" 
              width={22} 
              height={22} 
              alt="Decorative star" 
              className="absolute bottom-[-20px] left-[7%] md:bottom-[-30px] md:left-[12%] z-10"
            />

            <Image 
              src="/star.png" 
              width={20} 
              height={20} 
              alt="Decorative star" 
              className="absolute top-[40%] right-[5%] md:right-[8%] z-10 opacity-50"
            />
            
            <Image 
              src="/star.png" 
              width={14} 
              height={14} 
              alt="Decorative star" 
              className="absolute top-[45%] left-[6%] md:left-[9%] z-10 opacity-50"
            />

            <motion.h1
              variants={itemVariants}
              className='text-black font-medium text-center md:text-center text-[24px] sm:text-[30px] md:text-[42px] lg:text-[50px] xl:text-[60px] leading-tight md:leading-none tracking-tight w-full md:max-w-[800%] mx-auto relative z-10'
            >
              Marketing & Advertising Content <span className='text-[#4B7D57]'><br/>That Converts</span>
            </motion.h1>    
          </motion.div>
          
        </div>
      </motion.div>
      <div className="flex justify-center md:mt-22 mt-12 px-4 md:px-6">
        <p className="text-center max-w-4xl mx-auto text-[#6a6a6a]">In the dynamic realm of marketing and advertising, compelling content is the cornerstone of brand success. At TransCurators, we specialize in crafting narratives that not only capture attention but also drive measurable results.</p>
      </div>
      <div className="flex justify-center md:mt-22 mt-12">
        <div className="max-w-screen-xl flex justify-center mx-auto items-center">
          <div className="text-center flex-row">
            <p className="md:text-3xl text-xl text-black font-medium mt-4">
              Why Choose TransCurators for Your
              <span className="text-[#326B3F]"><br/>Marketing & Advertising Needs?</span>
            </p>
            <p className="text-sm text-[#6a6a6a] mt-4 ">
              With a team of over 200+ specialized writers, we understand the intricacies of the marketing landscape. Our content strategies are rooted in:
            </p>
          </div>
        </div>
      </div>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 md:mt-12 mt-8 px-4 max-w-7xl mx-auto">
      {features.map((feature, idx) => (
        <div
          key={idx}
          className="border border-[#B3D3BB] rounded-2xl p-4 sm:p-6 flex flex-col items-center w-full max-w-[370px] mx-auto bg-white"
        >
          <div className="w-full aspect-[336/175] bg-[#6a6a6a] rounded-xl mb-5 flex items-center justify-center overflow-hidden">
            <Image
              src={feature.image}
              alt={feature.alt}
              width={336}
              height={175}
              className="object-cover w-full h-full rounded-xl"
            />
          </div>
          <h3 className="text-xl sm:text-[22px] md:text-[24px] font-medium text-[#326B3F] mb-3 text-center">{feature.title}</h3>
          <p className="text-[#6a6a6a] text-sm sm:text-[15px] text-center leading-relaxed">{feature.description}</p>
        </div>
      ))}
    </div>
    <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center w-full relative overflow-hidden"
          >
            <div className="absolute inset-0 flex opacity-65 justify-center md:mt-22 mt-12 pointer-events-none overflow-hidden">
                {/* Concentric semi-circles starting from top center */}
        <div className="absolute top-0 w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] lg:w-[50vw] lg:h-[50vw] rounded-[50%] bg-[#abcfb4]/60 -translate-y-[40%]"></div>
        <div className="absolute top-0 w-[75vw] h-[75vw] md:w-[56vw] md:h-[56vw] lg:w-[47vw] lg:h-[47vw] rounded-[50%] bg-[#a3cbad]/60 -translate-y-[40%]"></div>
        <div className="absolute top-0 w-[70vw] h-[70vw] md:w-[52vw] md:h-[52vw] lg:w-[44vw] lg:h-[44vw] rounded-[50%] bg-[#9cc7a6]/60 -translate-y-[40%]"></div>
        <div className="absolute top-0 w-[65vw] h-[65vw] md:w-[48vw] md:h-[48vw] lg:w-[41vw] lg:h-[41vw] rounded-[50%] bg-[#95c4a0]/60 -translate-y-[40%]"></div>
        <div className="absolute top-0 w-[60vw] h-[60vw] md:w-[44vw] md:h-[44vw] lg:w-[38vw] lg:h-[38vw] rounded-[50%] bg-[#8ec19a]/60 -translate-y-[40%]"></div>
        <div className="absolute top-0 w-[55vw] h-[55vw] md:w-[40vw] md:h-[40vw] lg:w-[35vw] lg:h-[35vw] rounded-[50%] bg-[#88be95]/60 -translate-y-[40%]"></div>
        <div className="absolute top-0 w-[50vw] h-[50vw] md:w-[36vw] md:h-[36vw] lg:w-[32vw] lg:h-[32vw] rounded-[50%] bg-[#82bb90]/60 -translate-y-[40%]"></div>
        <div className="absolute top-0 w-[45vw] h-[45vw] md:w-[32vw] md:h-[32vw] lg:w-[29vw] lg:h-[29vw] rounded-[50%] bg-[#7db88b]/60 -translate-y-[40%]"></div>
              </div>
            <div className="flex flex-col md:flex-row border-2 border-[#429450] md:rounded-4xl min-h-fit md:min-h-[50vh] md:h-[90vh] md:max-w-[calc(100vw-40px)] lg:max-w-[calc(100vw-70px)] w-full md:mt-22 mt-12 py-8 md:py-4 relative overflow-hidden">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="w-full md:w-[55%] lg:w-[50%] xl:w-[45%] flex flex-col justify-center items-center md:items-start space-y-4 md:space-y-4 lg:space-y-6 px-4 sm:px-5 md:px-8 lg:px-12 overflow-hidden z-10"
              >
                <motion.h1
                  variants={itemVariants}
                  className='text-black font-medium text-center md:text-left text-[12px] sm:text-[15px] md:text-[21px] lg:text-[25px] xl:text-[30px] leading-tight md:leading-none tracking-tight w-full md:max-w-[800%] mx-auto md:ml-6'
                >
                  Our <span className='text-[#4B7D57]'>Expertise</span>
                </motion.h1>    
    
                <motion.h2
                  variants={itemVariants}
                  className='text-[#6a6a6a] text-center md:text-left text-[12px] sm:text-[14px] md:text-[14px] lg:text-[16px] xl:text-[18px] leading-tight md:leading-tight overflow-y-hidden tracking-[0.015em] w-full md:max-w-[800%] mx-auto md:ml-6 mt-2 md:mt-4'
                >
                  Having collaborated with over 600 global clients, including industry leaders, we've honed our skills to deliver content that stands out. Our services encompass:
                </motion.h2>
    
              </motion.div>
    
              {/* 3x2 Card Layout */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="flex w-full md:w-[45%] lg:w-[50%] xl:w-[55%] justify-center items-center px-4 md:px-8 z-10 mt-8 md:mt-0"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-6 sm:grid-rows-3 gap-4 w-full max-w-lg">
                  {[
  {
    number: 1,
    title: "B2B Copywriting",
    description: "Crafting persuasive narratives that resonate with decision-makers."
  },
  {
    number: 2,
    title: "E-commerce Content",
    description: "Highlighting product features and benefits to drive conversions."
  },
  {
    number: 3,
    title: "Social Media Campaigns",
    description: "Creating engaging posts that foster community and brand loyalty."
  },
  {
    number: 4,
    title: "Email Marketing",
    description: "Designing newsletters that inform, engage, and convert."
  },
  {
    number: 5,
    title: "Video Scripts",
    description: "Producing compelling scripts for promotional and explainer videos."
  }
].map((item, index) => (
                    <motion.div
                      key={item.number}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + (index * 0.1), duration: 0.5 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className={`${[1, 4, 5].includes(item.number) ? 'bg-white' : 'bg-[#D4E4D8]'} border-2 border-[#41A959] rounded-xl p-4 h-32 flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 text-center`}
                    >
                      <h3 className="text-[#326B3F] font-semibold text-sm mb-1">{item.title}</h3>
                      <p className="text-[#6a6a6a] text-xs leading-tight">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
            </div>
          </motion.div>
          <section id="metrics-section" className="md:mt-22 mt-12 bg-white">
              <div className="max-w-screen-xl mx-auto px-4">
                  <div className="text-center mb-8 md:mb-16">
                      <h2 className="text-2xl md:text-3xl font-medium text-black">
                          Results<span className="text-[#326B3F]"> That Speak</span>
                      </h2>
                      <p className="text-[#6a6a6a] mt-4 text-sm">Our commitment to excellence is evident in our track record:</p>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
                      {metrics.map((metric, index) => (
                          <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                              viewport={{ once: true }}
                              className="bg-[#D9E9DD] p-4 md:p-8 rounded-4xl border-1 border-[#D9E9DD] transition-all duration-300 text-center"
                          >
                              <div className="text-2xl sm:text-3xl md:text-3xl lg:text-6xl font-bold text-[#326B3F] min-h-[60px] md:min-h-[80px] flex items-center justify-center">
                                  {counters[metric.value]}
                              </div>
                              <p className="mt-2 md:mt-4 text-[#6a6a6a] text-xs sm:text-sm md:text-base lg:text-sm">{metric.description}</p>
                          </motion.div>
                      ))}
                  </div>
              </div>
          </section>
           <div className="relative md:mt-22 mt-12">
              {/* Green bar spanning full width with responsive height */}
              <div className="absolute top-0 left-0 w-screen bg-[#D9E9DD] -z-10" style={{ height: '100%', minHeight: '400px' }} />
              <div className="relative bg-[#D9E9DD] w-full">
                <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
                  <h2 className="text-xl md:text-2xl lg:text-3xl text-center mb-6 md:mb-10">
                    Tailored Solutions for <span className="text-[#3c6446] font-normal">Every Challenge</span>
                  </h2>
                  <p className="text-[#6a6a6a] text-sm md:text-base text-center px-2 md:px-4 max-w-4xl mx-auto leading-relaxed mb-8">
                    Whether you're launching a new product, rebranding, or aiming to increase market share, our content strategies are customized to meet your specific objectives. We focus on:
                  </p>
                  <div className="flex flex-col md:flex-row justify-center items-stretch gap-4 md:gap-6 max-w-5xl mx-auto">
                    {[
                      {
                        title: "Understanding Your Brand Voice",
                        description: "Ensuring consistency across all content platforms."
                      },
                      {
                        title: "Aligning with Your Marketing Goals",
                        description: "Creating content that supports your broader marketing strategy."
                      },
                      {
                        title: "Driving Engagement",
                        description: "Crafting content that not only attracts but also retains your audience."
                      }
                    ].map((step, idx) => (
                      <div
                        key={idx}
                        className="bg-white rounded-xl mt-5 shadow-md px-6 py-8 flex-1 min-w-[220px] max-w-xs mx-auto"
                      >
                        <div className="font-semibold text-lg mb-2 text-center">{step.title}</div>
                        <div className="text-gray-500 text-sm text-center">{step.description}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

      <section className="flex flex-col md:flex-row items-center justify-center min-h-[auto] md:min-h-screen bg-white px-4 py-12">
        {/* Left: Content */}
        <div className="bg-white rounded-xl md:rounded-tr-2xl md:rounded-br-2xl shadow-lg p-12 max-w-xl w-full md:mr-[-96px] z-10">
          <h2 className="text-2xl md:text-3xl mb-4">
            Let's Elevate Your<span className='text-[#326B3F]'><br/>Brand Together</span>
          </h2>
          <p className="text-[#6a6a6a] mb-4">
            In the competitive world of marketing and advertising, compelling content can be your differentiator. At TransCurators, we're ready to partner with you to create narratives that not only inform but also inspire.
          </p>
        </div>
        
        {/* Right: Image - Hidden on mobile */}
        <div className="hidden md:flex mt-8 md:mt-0 md:ml-[-64px] flex-1 items-center justify-center">
          <div className="rounded-2xl overflow-hidden w-[859px] h-[476px] flex items-center justify-center shadow-lg">
            <Image
              src="/marketingadvert.jpg"
              alt="Marketing & Advertising Content Image"
              width={900}
              height={900}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>
            
      <section className="w-full flex justify-center mt-8 mb-8 px-2">
        <div className="w-full max-w-6xl bg-[#D9E9DD] rounded-[2.5rem] px-6 py-12 md:px-16 md:py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-medium mb-6 font-sans">
            Ready to transform your <span className="text-[#326B3F]">content strategy?</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-4xl mx-auto font-sans">
            Contact us today and let's embark on a journey to elevate your brand's presence in the marketing and advertising landscape.
          </p>
        </div>
      </section>

    </>
  )
}

export default MarketingAdvertisingPage;
