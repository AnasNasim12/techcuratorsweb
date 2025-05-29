"use client";
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import Images from 'next/image';
import Image from 'next/image';


// ScrollContentSection component
const sections = [
  {
    id: 1,
    title: "2D Animation Services",
    headingColor: "#326b3f",
    image: "/vidanimj1.png",
    content:
      "Our 2D animation services are perfect for creating engaging explainer videos, educational content, and marketing campaigns. We produce visually appealing animations that effectively communicate your message using traditional techniques combined with modern technology.",
  },
  {
    id: 2,
    title: "3D Animation Services",
    headingColor: "#326b3f",
    image: "/vidanimj2.png",
    content:
      "For a more immersive experience, our 3D animation services offer stunning visuals and realistic animations. Ideal for product demonstrations, architectural visualizations, and animated storytelling, 3D animations can bring a new dimension to your video content.",
  },
  {
    id: 3,
    title: "Motion Graphics",
    headingColor: "#326b3f",
    image: "/vidanimj3.png",
    content:
      "Motion graphics are a powerful way to enhance your video content with dynamic visuals. Our motion graphics services include kinetic typography, animated logos, and graphic transitions that add a professional touch to your videos.",
  },
  {
    id: 4,
    title: "Explainer Videos",
    headingColor: "#326b3f",
    image: "/vidanimj4.png",
    content:
      "Explainer videos are excellent for breaking down complex information into easy-to-understand animations. Our explainer video services are designed to simplify your message and engage your audience, making it easier for them to grasp and remember the information.",
  },
];


function ScrollContentSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSection = sections[activeIndex];

  return (
    <div className="md:mt-22 mt-12 relative">
      <section className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl md:mb-16 mb-8 text-black font-medium text-center">
          Our Comprehensive <span className='text-[#326b3f]'>Animation Process</span>
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
          </div
          >

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

const VideoAnimation = () => {
  const testimonials = [
    {
      name: "Lokesh",
      title: "Acko",
      text: "We developed our entire health insurance and car insurance vertical through TransCurators. The quality and the speed at which we received content was superb.",
      highlight: "Superb Quality & Speed"
    },
    {
      name: "Adnan",
      title: "DMI Finance",
      text: "With the help of team TC, we churned out a huge chunk of blogs on the financial sector and insurance. The understanding the team has about the financial sector is very good.",
      highlight: "Deep Understanding of Finance"
    },
    {
      name: "Vaibhavi Mehta",
      title: "Senior Manager, SMFG India Credit Co. Ltd.",
      text: "We 'Thank you' and your team for their dedication, creativity, and hard work. It has truly made a significant impact on our success. We deeply appreciate our partnership and look forward to more collaborations in the future.",
      highlight: "A True Impact on Our Success"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

const faqs = [
  {
    id: 1,
    question: "What types of video animation services do you offer?",
    answer:
      "At TransCurators, we specialize in a comprehensive range of video animation services, including 2D animation, 3D animation, and motion graphics. Our talented team can create engaging explainer videos, product demos, and educational animations to suit your specific needs.",
  },
  {
    id: 2,
    question: "How can your video animation agency help my business stand out?",
    answer:
      "Our video animation agency excels in crafting unique and captivating animations that effectively convey your brand’s message. Whether you need 2D animation services for a sleek, minimalist look or 3D animation services for a more immersive experience, we tailor our animations to engage your target audience and enhance your marketing efforts.",
  },
  {
    id: 3,
    question: "What is the process for creating a custom animation with TransCurators?",
    answer:
      "Our animation services process begins with a detailed consultation to understand your vision and goals. We then move to the storyboard and design phase, followed by animation production and revisions. Finally, we deliver a polished video that meets your expectations. Our video production services ensure a smooth and collaborative experience from start to finish.",
  },
  {
    id: 4,
    question: "Can you handle both small and large-scale animation projects?",
    answer:
      "Absolutely! TransCurators is equipped to manage projects of any size. Whether you need a short 2D animation for social media or an elaborate 3D animated series, our team has the expertise and resources to deliver high-quality results tailored to your requirements.",
  },
  {
    id: 5,
    question: "Why should I choose TransCurators for my animation needs?",
    answer:
      "TransCurators stands out due to our commitment to quality, creativity, and client satisfaction. Our diverse range of animation services, including 2D and 3D animation, ensures we can provide the perfect solution for your project. As a leading video animation agency, we combine state-of-the-art technology with artistic excellence to produce compelling animations that capture your audience’s attention and drive results.",
  },
];

  const [openFAQ, setOpenFAQ] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const [expandedIndex, setExpandedIndex] = useState(null);
  const toggleExpanded = (index) => {
    // If the clicked service is already expanded, collapse it; otherwise, expand it.
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const toggleFAQ = (id) => {
    setOpenFAQ((prev) => (prev === id ? null : id));
  };




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
  const services = [
    {
      icon: "/messageIcon.png",
      title: "Blog Writing",
      description: "Engage, enlighten, and convert with keyword-filled blog articles that resolve problems, boost search rankings, and drive traffic."
    },
    {
      icon: "/messageIcon.png",
      title: "SEO Content Writing",
      description: "Develop optimised content to drive rankings, traffic, and fulfilment of search intent without compromising reader engagement."
    },
    {
      icon: "/messageIcon.png",
      title: "Technical Content Writing",
      description: "Deconstruct complex concepts into proper, readable, and structured content that educates and assists in making informed decisions."
    },
    {
      icon: "/messageIcon.png",
      title: "Article Writing",
      description: "Develop research-driven, SEO-friendly articles that reflect expertise and boost organic visibility on all search engines."
    },
    {
      icon: "/messageIcon.png",
      title: "Website Content",
      description: "Develop high-quality, search-engine-optimised web copy that speaks to your brand voice and converts web visitors into devoted customers."
    },
    {
      icon: "/messageIcon.png",
      title: "Editing & Proofreading",
      description: "Ensure your content is impeccable, polished, and professionally edited to maintain the highest quality standards."
    },
    {
      icon: "/messageIcon.png",
      title: "Product Description",
      description: "Highlight benefits and features with compelling, conversion-driven product copy carefully crafted for ecommerce and online stores."
    },
    {
      icon: "/messageIcon.png",
      title: "Hindi Content Writing",
      description: "Engage regional audiences with culturally pertinent, high-quality content written easily in Hindi to induce engagement and trust."
    },
    {
      icon: "/messageIcon.png",
      title: "White Paper",
      description: "Create high-content, authoritative white papers that build credibility, generate sales and guide decision-making by B2B readers."
    },
    {
      icon: "/messageIcon.png",
      title: "Press Release",
      description: "Emphasise launches, partnerships, or milestones with engaging, media-friendly press releases that generate media coverage and press."
    },
    {
      icon: "/messageIcon.png",
      title: "Article Rewriting",
      description: "Reconstruct current content with a fresh, SEO-focused vision that delivers maximum clarity, interest, and relevance without sacrificing the original intent."
    },
    {
      icon: "/messageIcon.png",
      title: "Copy Writing",
      description: "Create snappy, compelling, action-oriented copy that drives conversions on landing pages, ads, and marketing campaigns."
    },
    {
      icon: "/messageIcon.png",
      title: "Emailers",
      description: "Power clicks opens, and conversions through branded email copy designed for the greatest effect and highest audience engagement."
    },
    {
      icon: "/messageIcon.png",
      title: "Newsletter Writing",
      description: "Develop compelling email newsletters that inform your readers well, keep them engaged, and make them loyal through regular updates, promotions, and company stories."
    },
    {
      icon: "/messageIcon.png",
      title: "Magazine Writing",
      description: "Deliver feature-rich, editorial-grade copy for print or online magazines that educates, entertains, and builds credibility."
    },
    {
      icon: "/messageIcon.png",
      title: "E-book",
      description: "Create in-depth, value-packed eBooks that establish thought leadership and serve as powerful lead magnets for your brand."
    }
  ];

  const [showAll, setShowAll] = useState(false);
  const [showAllServices, setShowAllServices] = useState(false);

  const images = [
    "/demoLogo.png",
    "/demoLogo.png",
    "/demoLogo.png",
    "/demoLogo.png",
    "/demoLogo.png",
  ];

  const posts = [
    {
      productionName: "XYZ Productions",
      date: "13/2/25",
      heading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://dummyimage.com/250x300/ffffff/fff.png",
      slug: "/read-more-xyz",
    },
    {
      productionName: "XYZ Productions",
      date: "13/2/25",
      heading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://dummyimage.com/250x300/ffffff/fff.png",
      slug: "/read-more-xyz",
    },
    {
      productionName: "XYZ Productions",
      date: "13/2/25",
      heading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://dummyimage.com/250x300/ffffff/fff.png",
      slug: "/read-more-xyz",
    },
    {
      productionName: "XYZ Productions",
      date: "13/2/25",
      heading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://dummyimage.com/250x300/ffffff/fff.png",
      slug: "/read-more-xyz",
    },

  ];

  const CardComponent = ({ productionName, date, heading, description, image, slug }) => (
    <div className="cursor-pointer grid grid-rows-[auto_auto] w-full mx-auto sm:w-[200px] md:w-[250px] gap-4 hover:bg-gray-50 duration-300 transition-all ease-in-out rounded-[14px] p-4 group">
      {/* Image Section */}
      <div>
        <Images
          src={image}
          alt={heading}
          className="w-full sm:w-[200px] md:w-[250px] h-auto sm:h-[250px] md:h-[300px] rounded-[4px] shadow-[0_0_20px_#CCE3DE]"
          width={250}
          height={300}
        />
      </div>

      {/* Content Section */}
      <div className="grid gap-2 max-w-full sm:max-w-[200px] md:max-w-[250px]">
        <div className="grid grid-cols-2 mt-6">
          <p className="text-[#6a6a6a] font-regular text-xs sm:text-sm">{productionName}</p>
          <p className="text-[#6a6a6a] font-regular text-xs sm:text-sm text-right">{date}</p>
        </div>
        <div>
          <h4 className="text-sm sm:text-md text-[#6a6a6a] font-medium">{heading}</h4>
        </div>
        <div>
          <p className="text-[#6a6a6a] font-regular text-xs sm:text-sm">{description}</p>
        </div>
        <div>
          <a href={slug}>
            <button className="mt-3 cursor-pointer group relative text-[#326B3F] font-regular tracking-widest text-xs transition-all duration-300 ease-in-out active:border-b-0 active:translate-y-1">
              <span className="flex items-center gap-3 relative z-10">
                Read more
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 transition-all duration-300 group-hover:translate-x-1">
                  <path d="M12 4L10.6 5.4L16.2 11H4V13H16.2L10.6 18.6L12 20L20 12L12 4Z"></path>
                </svg>
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );

  // Add counter state
  const [counters, setCounters] = useState({
    "10M+": "0+",
    "250+": "0+", // Updated from 3000+ to 250+
    "4.5/5": "0.0/5",
    "1000+": "0+"
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

      // For "10M+"
      const millions = Math.floor(progress * 10 * 10) / 10;
      updatedCounters["10M+"] = `${millions >= 10 ? "10" : millions.toFixed(1)}M+`;

      // For "250+" (previously "3000+")
      const clients = Math.floor(progress * 250);
      updatedCounters["250+"] = `${clients}+`;

      // For "4.5/5"
      const rating = (progress * 4.5).toFixed(1);
      updatedCounters["4.5/5"] = `${rating}/5`;

      // For "1000+"
      const writers = Math.floor(progress * 1000);
      updatedCounters["1000+"] = `${writers}+`;

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
    const metricsSection = document.querySelector('#landing-metrics-section');
    if (metricsSection) {
      observer.observe(metricsSection);
    }

    return () => {
      cancelAnimationFrame(animationRef.current);
      observer.disconnect();
    };
  }, []);
  const metrics = [
    {
      value: '10M+',
      description: 'Content Pieces Delivered'
    },
    {
      value: '250+',
      description: 'Clients Supported Globally'
    },
    {
      value: '4.5/5',
      description: 'Client Satisfaction Score'
    },
    {
      value: '1000+',
      description: 'Expert Writers & Strategists'
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
        <div className="flex flex-col md:flex-row border-4 border-[#429450] md:rounded-4xl min-h-fit md:min-h-[50vh] md:h-[90vh] md:max-w-[calc(100vw-40px)] lg:max-w-[calc(100vw-70px)] w-full mt-4 py-8 md:py-4 relative overflow-hidden">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full md:w-[55%] lg:w-[50%] xl:w-[45%] flex flex-col justify-center items-center md:items-start space-y-4 md:space-y-4 lg:space-y-6 px-4 sm:px-5 md:px-8 lg:px-12 overflow-hidden z-10"
          >
            <motion.h1
              variants={itemVariants}
              className='text-black font-medium text-center md:text-left text-[24px] sm:text-[30px] md:text-[42px] lg:text-[50px] xl:text-[60px] leading-tight md:leading-none tracking-tight w-full md:max-w-[800%] mx-auto md:ml-6'
            >
              Transcurators: Top Notch Video <span className='text-[#4B7D57]'>Animation Services</span>
            </motion.h1>    

            <motion.h2
              variants={itemVariants}
              className='text-[#6a6a6a] text-center md:text-left text-[12px] sm:text-[14px] md:text-[14px] lg:text-[16px] xl:text-[18px] leading-tight md:leading-tight overflow-y-hidden tracking-[0.015em] w-full md:max-w-[800%] mx-auto md:ml-6 mt-2 md:mt-4'
            >
              Bringing Your Vision to Life Through Engaging Animation.
            </motion.h2>

            <motion.button
              variants={itemVariants}
              onClick={() => window.location.href = "/contact"}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="gap-2 md:gap-3 mt-6 md:mt-6 flex justify-center items-center self-center md:self-start text-[#6a6a6a] text-xs sm:text-sm bg-gray-50 backdrop-blur-md lg:font-medium isolation-auto 
              border-gray-50 before:absolute before:inset-0 before:w-0 before:h-full before:transition-all before:duration-500 before:bg-[#326B3F]
              hover:text-gray-50 hover:before:w-full before:rounded-full before:-z-10 relative z-10 px-4 md:px-4 py-2 md:py-2 overflow-hidden border-2 rounded-full group tracking-wide w-fit md:ml-6"
            >
              Order Your Animation Now
              <svg
                className="w-5 h-5 md:w-7 md:h-7 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 
                rounded-full border border-gray-700 group-hover:border-[#326B3F] p-1 md:p-1.5 rotate-45 bg-[#326B3F]"
                viewBox="0 0 16 19"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 
                  7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 
                  8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 
                  15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                  className="fill-white group-hover:fill-[#326B3F]"
                ></path>
              </svg>
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden md:flex justify-center items-center md:w-[40%] lg:w-[70%] xl:w-[70%] relative bg-white"
          >
            <Image
                        className='max-w-[100%] md:max-w-[90%] lg:max-w-[95%] xl:max-w-[90%] h-auto object-contain mt-8 ml-4'
                        src="/vidanimation.png"
                        alt="Landing Page Hero"
                        width={600}
                        height={400}
                        priority
                      />
          </motion.div>
          
        </div>
      </motion.div>
      <section className="flex flex-col md:flex-row items-center justify-center min-h-[auto] md:min-h-screen bg-white px-4 py-12">
        {/* Left: Content */}
        <div className="bg-white rounded-xl md:rounded-tr-2xl md:rounded-br-2xl shadow-lg p-6 max-w-xl w-full md:mr-[-96px] z-10">
          <h2 className="text-2xl md:text-3xl mb-4">
            Transcurators: Highly Experienced Artist Team for <span className='text-[#326B3F]'>Video Animation Services</span>
          </h2>
          <p className="text-[#6a6a6a] mb-4">
At Transcurators, we bring stories to life through our exceptional video animation services. As a leading video animation agency, we specialize in creating captivating 2D and 3D animations that engage, educate, and entertain your audience. Whether you want to enhance your brand’s presence or convey complex ideas simply and effectively, our video animation services are designed to meet your unique needs.
</p>
<p className="text-[#6a6a6a] text-lg font-semibold mb-4">
Transform Your Ideas into Videos
</p>
        </div>
        
        {/* Right: Image - Hidden on mobile */}
        <div className="hidden md:flex mt-8 md:mt-0 md:ml-[-64px] flex-1 items-center justify-center">
          <div className="rounded-2xl overflow-hidden w-[859px] h-[476px] flex items-center justify-center shadow-lg">
            <Image
              src="/vidanimation2.png"
              alt="Digital Marketing Illustration"
              width={900}
              height={900}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>
          <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex justify-center w-full relative overflow-hidden"
      >
        <div className="absolute inset-0 flex opacity-65 justify-center mt-4 pointer-events-none overflow-hidden">
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
        <div className="flex flex-col md:flex-row border-2 border-[#429450] md:rounded-4xl min-h-fit md:min-h-[50vh] md:h-[90vh] md:max-w-[calc(100vw-40px)] lg:max-w-[calc(100vw-70px)] w-full mt-4 py-8 md:py-4 relative overflow-hidden">
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
              Navigating the Path to Exceptional Content: <span className='text-[#4B7D57]'><br/>Our step-by-step Creating Journey</span>
            </motion.h1>    

            <motion.h2
              variants={itemVariants}
              className='text-[#6a6a6a] text-center md:text-left text-[12px] sm:text-[14px] md:text-[14px] lg:text-[16px] xl:text-[18px] leading-tight md:leading-tight overflow-y-hidden tracking-[0.015em] w-full md:max-w-[800%] mx-auto md:ml-6 mt-2 md:mt-4'
            >
              Here's why Transcurators stands out in delivering top-notch video animation services.
            </motion.h2>
             <motion.h2
              variants={itemVariants}
              className='text-[#6a6a6a] text-center md:text-left text-[12px] sm:text-[14px] md:text-[14px] lg:text-[16px] xl:text-[18px] leading-tight md:leading-tight overflow-y-hidden tracking-[0.015em] w-full md:max-w-[800%] mx-auto md:ml-6 mt-2 md:mt-4'
            >
              By choosing Transcurators, you partner with a dedicated team committed to bringing your ideas to life through exceptional video animation services.
            </motion.h2>

            <motion.button
              variants={itemVariants}
              onClick={() => window.location.href = "/contact"}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="gap-2 md:gap-3 mt-6 md:mt-6 flex justify-center items-center self-center md:self-start text-[#6a6a6a] text-xs sm:text-sm bg-gray-50 backdrop-blur-md lg:font-medium isolation-auto 
              border-gray-50 before:absolute before:inset-0 before:w-0 before:h-full before:transition-all before:duration-500 before:bg-[#326B3F]
              hover:text-gray-50 hover:before:w-full before:rounded-full before:-z-10 relative z-10 px-4 md:px-4 py-2 md:py-2 overflow-hidden border-2 rounded-full group tracking-wide w-fit md:ml-6"
            >
              See Portfolio
              <svg
                className="w-5 h-5 md:w-7 md:h-7 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 
                rounded-full border border-gray-700 group-hover:border-[#326B3F] p-1 md:p-1.5 rotate-45 bg-[#326B3F]"
                viewBox="0 0 16 19"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 
                  7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 
                  8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 
                  15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                  className="fill-white group-hover:fill-[#326B3F]"
                ></path>
              </svg>
            </motion.button>
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
                  title: "Concept Development",
                  description:
                    "From concept development to final delivery, our video production services cover every aspect of the animation process, guaranteeing a seamless and professional outcome.",
                },
                {
                  number: 2,
                  title: "Storyboarding",
                  description:
                    "We work closely with you throughout the project, incorporating your feedback at every stage to ensure the final product perfectly matches your vision.",
                },
                {
                  number: 3,
                  title: "Character Design",
                  description:
                    "We provide bespoke animation services that align with your brand's vision and goals, delivering unique and memorable animated content.",
                },
                {
                  number: 4,
                  title: "Animation Production",
                  description:
                    "Our skilled team excels in both 2D animation services and 3D animation services, ensuring visually captivating and dynamic videos tailored to your needs.",
                },
                {
                  number: 5,
                  title: "Post-Production",
                  description:
                    "Utilizing the latest tools and software, our video animation service ensures high-quality animations that meet industry standards and exceed expectations.",
                },
                {
                  number: 6,
                  title: "Final Delivery",
                  description:
                    "As a leading video animation agency, we have a portfolio of successful projects across various industries, showcasing our capability to deliver outstanding results.",
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

      {/* card section */}
      <ScrollContentSection />
      <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className='max-w-screen-xl flex mt-12 md:mt-22 justify-center mx-auto items-center px-4 md:px-6'
            >
              <div className='text-center flex-row'>
                <p className='text-2xl md:text-3xl text-black font-medium mt-4'>
                  The Transcurator Video Production <span className='text-[#326B3F]'>Process</span>
                </p>
              </div>
            </motion.div>
            <section className="mt-8 md:mt-16 min-h-screen p-4">
              <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Expertise Across Industries */}
                <motion.div
                  className="bg-white rounded-lg p-6 flex items-center outline-2 outline-[#D9E9DD] outline-offset-2 md:col-span-2"
                  whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(50, 107, 63, 0.2)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <div className="flex-1">
                    <motion.h2
                      className="text-lg font-medium text-gray-800 mb-3"
                      whileHover={{ color: "#326B3F" }}
                      transition={{ duration: 0.2 }}
                    >Concept Development</motion.h2>
                    <p className="text-sm text-gray-600">
                      Every great animation starts with a solid concept. Our team works closely with you to develop a storyline and visual style that aligns with your brand and objectives. We brainstorm ideas, create storyboards, and outline the project to ensure a clear direction.
                    </p>
                  </div>
                  <div className="ml-4 flex-shrink-0 hidden sm:block">
                    <motion.div
                      className="w-50 h-50"
                      whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <Images src="/vidanimp1.png" alt="" width={400} height={400} />
                    </motion.div>
                  </div>
                </motion.div>
      
                {/* Cultural Sensitivity and Localization */}
                <motion.div
                  className="bg-[#D9E9DD] rounded-lg outline-2 outline-[#D9E9DD] outline-offset-0 p-6 flex flex-col justify-center items-left text-left h-full"
                  whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(50, 107, 63, 0.2)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <motion.h2
                    className="text-lg font-medium text-gray-800 mb-3"
                    whileHover={{ color: "#326B3F" }}
                    transition={{ duration: 0.2 }}
                  >Voiceover and Sound Design</motion.h2>
                  <p className="text-sm text-gray-600">
                    The right voiceover can significantly affect how your animation is perceived. We work with professional voiceover artists to match the tone and style of your animation. Our sound designers add music, sound effects, and audio enhancements to improve production quality.
                  </p>
                </motion.div>
      
                {/* Timely Delivery */}
                <motion.div
                  className="bg-[#D9E9DD] rounded-lg outline-2 outline-[#D9E9DD] outline-offset-0 p-6 flex flex-col justify-center items-left text-left h-full"
                  whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(50, 107, 63, 0.2)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <motion.h2
                    className="text-lg font-medium text-gray-800 mb-3"
                    whileHover={{ color: "#326B3F" }}
                    transition={{ duration: 0.2 }}
                  >Scriptwriting</motion.h2>
                  <p className="text-sm text-gray-600">
                    A compelling script is the backbone of any successful animation. Our talented scriptwriters craft engaging narratives that captivate your audience and convey your message effectively. We ensure the script is concise, impactful, and aligned with your goals.
                  </p>
                </motion.div>
      
                {/* Cost-Effective Quality */}
                <motion.div
                  className="bg-white rounded-lg p-6 outline-2 outline-[#D9E9DD] outline-offset-2 flex items-center md:col-span-2"
                  whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(50, 107, 63, 0.2)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <div className="flex-1">
                    <motion.h2
                      className="text-lg font-medium text-gray-800 mb-3"
                      whileHover={{ color: "#326B3F" }}
                      transition={{ duration: 0.2 }}
                    >Review and Revisions</motion.h2>
                    <p className="text-sm text-gray-600">
Your feedback is crucial to us. We provide you with animation drafts at various stages of production, allowing you to review and suggest changes. We make revisions until you are delighted with the final product.
                    </p>
                  </div>
                  <div className="ml-4 flex-shrink-0 hidden sm:block">
                    <motion.div
                      className="w-50 h-50"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    >
                      <Images src="/vidanimp2.png" alt="" width={400} height={400} />
                    </motion.div>
                  </div>
                </motion.div>
      
                {/* SEO-Focused Content */}
                <motion.div
                  className="bg-white rounded-lg p-6 outline-2 outline-[#D9E9DD] outline-offset-2 flex items-center md:col-span-2"
                  whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(50, 107, 63, 0.2)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <div className="flex-1">
                    <motion.h2
                      className="text-lg font-medium text-gray-800 mb-3"
                      whileHover={{ color: "#326B3F" }}
                      transition={{ duration: 0.2 }}
                    >Design and Animation</motion.h2>
                    <p className="text-sm text-gray-600">
Once the script is finalized, our designers and animators get to work. Using the latest tools and techniques, we create stunning 2D and 3D animations that bring your story to life. We pay attention to every detail, from character design to colour schemes, to ensure the animation is visually striking and engaging.                    </p>
                  </div>
                  <div className="ml-4 flex-shrink-0 hidden sm:block">
                    <motion.div
                      className="w-50 h-50"
                      whileHover={{ rotate: 3 }}
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    >
                      <Images src="/vidanimp3.png" alt="" width={400} height={400} />
                    </motion.div>
                  </div>
                </motion.div>
      
                {/* Strategic Insight */}
                <motion.div
                  className="bg-[#D9E9DD] rounded-lg outline-2 outline-[#D9E9DD] outline-offset-0 p-6 flex flex-col justify-center items-left text-left h-full"
                  whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(50, 107, 63, 0.2)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <motion.h2
                    className="text-lg font-medium text-gray-800 mb-3"
                    whileHover={{ color: "#326B3F" }}
                    transition={{ duration: 0.2 }}
                  >Final Delivery</motion.h2>
                  <p className="text-sm text-gray-600">
Once the animation is complete and approved, we deliver the final video in the required formats. Whether you need it for the web, social media, or broadcast, we ensure the animation is optimized for your chosen platforms.                  </p>
                </motion.div>
              </div>
            </section>

            {/* what makes us card section */}
            
            <div className="relative md:mt-22 mt-12">
              {/* Green bar spanning full width */}
              <div className="absolute top-0 left-0 w-screen h-55 bg-[#D9E9DD] -z-10" />
              <div className="max-w-7xl mx-auto px-4 pt-12 pb-8">
                <h2 className="text-2xl md:text-3xl text-center mb-10">
                  Why Invest in <span className="text-[#3c6446] font-normal">Video Animation Services?</span>
                </h2>
                <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">
                  {[
                    {
                      title: " Engage Your Audience",
                      description: "Animated videos are a powerful tool for capturing attention and keeping your audience engaged. They are visually appealing and can simplify complex information, making it easier for viewers to understand and retain."
                    },
                    {
                      title: " Boost Conversion Rates",
                      description: "Animations can significantly boost your conversion rates by making your marketing messages more compelling. Explainer videos, in particular, increase conversion rates by clarifying the benefits of your products or services."
                    },
                    {
                      title: "Enhance Brand Awareness",
                      description: "High-quality animations help in building brand awareness and recognition. A well-crafted animation can leave a lasting impression on your audience, making your brand more memorable."
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
            <section className="w-full flex justify-center mt-8 mb-8 px-2">
  <div className="w-full max-w-6xl bg-[#D9E9DD] rounded-[2.5rem] px-6 py-12 md:px-16 md:py-16 text-center">
    <h2 className="text-2xl md:text-3xl font-medium mb-6 font-sans">
      Partner with TransCurators
    </h2>
    <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-4xl mx-auto font-sans">
As a dedicated video animation agency, TransCurators is committed to delivering exceptional animation services that meet your needs and exceed your expectations. Our comprehensive video production services ensure that every aspect of your animation project is handled with expertise and care. Contact us today to discuss how our video animation services can help bring your vision to life. Focusing on these elements ensures that TransCurators stands out as a premier video animation service provider, meeting clients' diverse needs across industries.    </p>
  </div>
</section>
<section ref={textSectionRef} className="relative w-full py-15 mt-4 bg-white overflow-hidden min-h-[400px] flex flex-col justify-center items-center">
              <div className="w-full overflow-hidden">
                <h1 
                  ref={firstTextRef}
                  className="text-5xl md:text-[150px] font-bold tracking-tight transform w-full"
                  style={{ 
                    transform: 'translateX(-50%)', 
                    opacity: 0.5,
                    transition: 'transform 0.10s linear, opacity 0.25s linear'
                  }}
                >
                  TRANSFORM YOUR
                </h1>
              </div>

              <div className="w-full overflow-hidden">
                <h1 
                  ref={secondTextRef}
                  className="text-5xl md:text-[150px] font-bold tracking-tight text-[#326B3F] transform w-full text-right"
                  style={{ 
                    transform: 'translateX(50%)', 
                    opacity: 0.5,
                    transition: 'transform 0.10s linear, opacity 0.25s linear'
                  }}
                >
                  IDEAS INTO VIDEOS.
                </h1>
              </div>
            </section>






   

 




      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className='max-w-screen-xl flex justify-center md:mt-22 mt-16 mb-6 md:mb-10 mx-auto items-center px-4 md:px-6'
      >
        <div className='text-center flex-row'>
          <p className='text-xl sm:text-2xl md:text-3xl text-black font-medium mt-4'>
            Frequently Asked<span className='text-[#326B3F]'> Questions</span>
          </p>
        </div>
      </motion.div>

      <div className="max-w-screen-xl mx-auto p-4 md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 cursor-pointer gap-4 md:gap-8">
          {faqs.slice(0, showMore ? faqs.length : 10).map((faq, index) => (
            <motion.div
              key={faq.id}
              className="bg-white hover:shadow-lg duration-300 transition-all ease-in-out shadow-md p-5 rounded-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: Math.min(index * 0.1, 0.5) }}
            >
              <button
                className="flex justify-between items-center w-full text-md font-normal cursor-pointer text-[#6a6a6a]"
                onClick={() => toggleFAQ(faq.id)}
              >
                {faq.question}
                <motion.span
                  className="text-xl transition-transform duration-300"
                  animate={{ rotate: openFAQ === faq.id ? 180 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {openFAQ === faq.id ? "−" : "+"}
                </motion.span>
              </button>

              <AnimatePresence>
                {openFAQ === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="mt-3 text-[#326B3F]">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>




    </>
  )
}


export default VideoAnimation;

