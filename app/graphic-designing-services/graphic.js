"use client"

import { useState, useRef, useEffect } from 'react';
import { motion } from "framer-motion";
import Image from 'next/image'; 
import Link from 'next/link';// Add this import for the Image component

const Designing = () => {
  const [activeTab, setActiveTab] = useState('UI/UX Design');
  const [isAnimating, setIsAnimating] = useState(false);
  const [contentVisible, setContentVisible] = useState(true);
  const contentRef = useRef(null);

  // Add the missing animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

    const [showAll, setShowAll] = useState(false);

    const faqs = [
      {
        id: 1,
        question: "What are Graphics Designing Services, and why are they important?",
        answer: "Graphics designing services encompass the creation of visually appealing content for branding, marketing, and digital platforms. They are crucial for businesses to establish a strong identity, improve user engagement, and communicate messages effectively."
      },
      {
        id: 2,
        question: "How do I choose the best Graphic Design Company in India?",
        answer: "To select the best graphic design company in India, look for expertise, client reviews, portfolio quality, and industry experience. A company that offers customized solutions and understands your brand vision is ideal."
      },
      {
        id: 3,
        question: "What makes a Graphic Design Company in Delhi stand out?",
        answer: "A top graphic design company in Delhi stands out with innovative designs, industry expertise, and customized solutions tailored to clients' branding needs. They offer a diverse range of services, including UI/UX, logo design, and digital illustrations."
      },
      {
        id: 4,
        question: "What services does a Graphic Designing Agency provide?",
        answer: "A professional graphic designing agency offers UI/UX design, web and app development, logo creation, infographics, brochure design, corporate presentations, and digital illustrations to enhance a brand’s visual identity."
      },
      {
        id: 5,
        question: "How do Graphic Design Services improve business branding?",
        answer: "Graphic design services create compelling brand visuals, including logos, marketing materials, and digital assets, which enhance recognition, credibility, and customer engagement for businesses."
      },
      {
        id: 6,
        question: "What industries benefit from professional Graphic design services?",
        answer: "Industries such as e-commerce, technology, healthcare, real estate, education, and entertainment benefit from graphic design services to establish a strong brand presence and communicate effectively."
      },
      {
        id: 7,
        question: "How does a Graphic Design Company ensure quality and creativity?",
        answer: "A reputed graphic design company follows a structured design process, conducts market research, and implements quality assurance measures to ensure high creativity, precision, and industry-standard execution."
      },
      {
        id: 8,
        question: "What should I expect from a Graphic Design Company in India?",
        answer: "A reliable graphic design company in India offers tailored solutions, industry expertise, innovative concepts, and seamless collaboration to meet branding, marketing, and digital design needs."
      },
      {
        id: 9,
        question: "How can Graphics designing services enhance user engagement online?",
        answer: "Professional graphics designing services improve UI/UX design, create visually appealing websites, and optimize branding materials to enhance user experience, retention, and conversions."
      },
      {
        id: 10,
        question: "Why should I choose Transcurators for Graphics Designing Services?",
        answer: "Transcurators offers industry-leading graphics designing services with a focus on creativity, customized solutions, seamless collaboration, and quality excellence to elevate brand identity and digital presence."
      }
    ];
  
    const [openFAQ, setOpenFAQ] = useState(null);
    const [showMore, setShowMore] = useState(false);

    const [expandedIndex, setExpandedIndex] = useState(null);
      const toggleExpanded = (index) => {
        // If the clicked service is already expanded, collapse it; otherwise, expand it.
        setExpandedIndex(expandedIndex === index ? null : index);
      };

      const toggleFAQ = (id) => {
        setOpenFAQ(openFAQ === id ? null : id);}
    

  const services = [
    {
      icon: "/Images/messageIcon.png",
      title: "Digital Illustration Design Services",
      description: "Our digital illustration services cover a wide range of mediums, including blogs, websites, advertorials, books, caricatures, comics, cityscapes, portraits, covers, magazines, and newspapers. We specialize in crafting visually striking illustrations tailored to your unique concepts."
    },
    {
      icon: "/Images/messageIcon.png",
      title: "Explainer Video Services",
      description: "Enhance your brand’s message with Transcurators’ expert explainer video services. We specialize in SaaS explanations, B-roll footage, whiteboard animations, 2D animations, corporate presentations, and screencast tutorials. Our engaging videos, combined with top-tier graphic design service, ensure clear communication and audience engagement."
    },
    {
      icon: "/Images/messageIcon.png",
      title: "Web Design & Development",
      description: "With expertise in e-commerce, Webflow, WordPress, and custom solutions, we offer comprehensive web design and development services. At Transcurators, India's leading graphic design company, we ensure seamless website maintenance to keep your online presence professional and polished."
    },
    {
      icon: "/Images/messageIcon.png",
      title: "Presentation Design Services",
      description: "At Transcurators, we craft impactful Corporate Presentations, Sales Decks, Investor Pitch Decks, and Business PPT Templates that captivate audiences. Our expert team ensures visually compelling, brand-aligned designs, helping you communicate with confidence and professionalism. Let’s create presentations that leave a lasting impression!"
    },
    {
      icon: "/Images/messageIcon.png",
      title: "Brochure Design Services",
      description: "With Transcurators by your side, high-impact brochures become powerful tools to elevate brand visibility and communication. From corporate brochures and product catalogs to flyers and leaflets, our expert designers bring your brand to life with distinctive, professional designs crafted to match your identity."
    },
    {
      icon: "/Images/messageIcon.png",
      title: "Creative Photoshop Design Services",
      description: "Elevate your brand’s visuals with our expert Photoshop design services. We specialize in custom social media creatives, ad banners, website graphics, product mockups, photo retouching, and promotional materials. Our high-quality designs, tailored to your brand identity, ensure striking visuals that captivate and convert."
    },
    {
      icon: "/Images/messageIcon.png",
      title: "Impactful Infographic Design",
      description: "Simplify complex data with our expert infographic design services. We craft visually."
    },
    {
      icon: "/Images/messageIcon.png",
      title: "Custom Mascot Design",
      description: "Bring your brand to life with our custom mascot design services. We create unique, memorable mascots that reflect your brand personality and connect emotionally with your audience. From playful characters for startups to professional icons for corporates, our designs help boost recognition, engagement, and brand recall."
    },
    
    {
      icon: "/Images/messageIcon.png",
      title: "Striking Podcast Design",
      description: "Make your podcast stand out with our professional podcast design services. We craft eye-catching cover art, engaging episode thumbnails, and branded social media graphics tailored to your show’s theme and tone. Our designs help you capture listener attention and build a consistent visual identity across platforms."
    },
    {
      icon: "/Images/messageIcon.png",
      title: "Next-Level 3D Design",
      description: "Transform ideas into reality with our professional 3D design services. We specialize in product visualization, architectural renders, 3D mockups, and character modeling. Our detailed, photorealistic designs add depth and dimension to your brand, making concepts easier to understand and more impactful for your audience."
    },
    {
      icon: "/Images/messageIcon.png",
      title: "Scalable Vector Design Solutions",
      description: "Get crisp, clean, and scalable graphics with our professional vector design services. We create logos, icons, illustrations, and brand assets that maintain quality across all sizes and formats. Perfect for print, web, and merchandise, our vector designs ensure your visuals stay sharp, versatile, and brand-consistent."
    },
    ];
  
  // More robust tab change animation
  const handleTabChange = (tabName) => {
    if (tabName !== activeTab && !isAnimating) {
      setIsAnimating(true);
      
      // Fade out content
      setContentVisible(false);
      
      // Change tab immediately for indicator animation
      setActiveTab(tabName);
      
      // After fadeout, prepare to fade in new content
      setTimeout(() => {
        setContentVisible(true);
        setTimeout(() => {
          setIsAnimating(false);
        }, 400);
      }, 300);
    }
  };
  const cardData = [
    {
      number: 1,
      heading: "Expertise in Innovative Design",
      description:
        "With years of industry experience, we have honed our skills to deliver high-quality, trend-forward design solutions. Our expert team stays updated with the latest design trends and technologies, ensuring innovative, visually appealing, and impactful creations that exceed client expectations and set new standards.",
      image: "", // Replace with actual image URL if available
    },
    {
      number: 2,
      heading: "Customized Solutions for Every Client",
      description:
        "We believe in a tailored approach, understanding that each client has unique needs. Whether you're a startup or a large enterprise, we work closely with you to develop personalized design solutions that align with your brand, goals, and audience, ensuring maximum impact and long-term success.",
      image: "",
    },
    {
      number: 3,
      heading: "Creativity That Makes an Impact",
      description:
        "Creativity is at the heart of our design process. Our designers push boundaries to craft visually compelling, engaging, and innovative designs that leave a lasting impression. From concept development to execution, every project is infused with originality, ensuring your brand stands out in a competitive landscape.",
      image: "",
    },
    {
      number: 4,
      heading: "Seamless Collaboration for Success",
      description:
        "We prioritize collaboration, involving clients at every stage—from initial brainstorming to final delivery. Our transparent process ensures that your vision is brought to life with precision and creativity, fostering strong partnerships that result in exceptional designs tailored to your brand’s identity and business goals.",
      image: "",
    },
    {
      number: 5,
      heading: "Commitment to Quality Excellence",
      description:
        "Quality is our top priority. Every design undergoes a rigorous quality assurance process, ensuring flawless execution and attention to detail. Our team meticulously reviews and refines each project before delivery, guaranteeing that the final output meets the highest industry standards and exceeds client expectations.",
      image: "",
    },
  ];
  const tabContents = {
    'UI/UX Design': {
      heading: 'Intuitive UI/UX Design for Seamless Digital Experiences',
      points: [
        {
          title: 'User-Centered Interfaces for Enhanced Engagement',
          description: 'Crafting intuitive and user-friendly designs that prioritize seamless navigation and accessibility for an exceptional user experience.'
        },
        {
          title: 'Data-Driven UX Strategies for Maximum Impact',
          description: 'From initial sketches to interactive prototypes, we build a clear roadmap for your digital product that aligns with user needs and business goalsUtilizing user research, behavior analysis, and testing to create designs that enhance usability and drive conversions.'
        },
        {
          title: 'Interactive Prototyping for Flawless Execution',
          description: 'Building high-fidelity wireframes and interactive prototypes to visualize and refine the user journey before development.'
        },
        {
          title: 'Responsive & Adaptive Designs for All Devices',
          description: 'Ensuring smooth and consistent experiences across mobile, tablet, and desktop with fluid, responsive design solutions.'
        },
        {
          title: 'Conversion-Focused UI Elements for Better Performance',
          description: 'Implementing engaging visual elements and optimized layouts to improve interactions, retention, and overall business growth.'
        },
      ]
    },
    'Web Development': {
      heading: 'Cutting-edge Web Development Solutions for Your Business',
      points: [
        {
          title: 'Custom Website Design & Development',
          description: 'Crafting visually stunning, user-friendly, and responsive websites tailored to your brand’s identity and business goals.'
        },
        {
          title: 'E-Commerce Website Development',
          description: 'Building seamless, secure, and high-performance online stores with intuitive navigation and optimized checkout experiences.'
        },
        {
          title: 'CMS & Website Management Solutions',
          description: 'Empowering businesses with easy-to-manage content management systems for efficient website updates and scalability.'
        },
        {
          title: 'Web Application Development Services',
          description: 'Creating powerful, scalable, and high-performing web applications to streamline operations and enhance user engagement.'
        },
        {
          title: 'SEO & Performance Optimization',
          description: 'Enhancing website speed, security, and search engine visibility to improve user experience and online presence.'
        },
      ]
    },
    'App Development': {
      heading: 'Innovative App Development for Next-Gen Digital Solutions',
      points: [
        {
          title: 'Custom Mobile & Web App Development',
          description: 'Transforming ideas into high-performance applications with intuitive interfaces and robust functionality for seamless user experiences.'
        },
        {
          title: 'Scalable & Secure App Solutions',
          description: 'Building future-ready apps tailored to your business needs, ensuring scalability, security, and exceptional performance.'
        },
        {
          title: 'Cross-Platform & Native App Development',
          description: 'Expert development for iOS, Android, and cross-platform apps, leveraging the latest technologies and frameworks.'
        },
        {
          title: 'Business-Centric App Development',
          description: 'Enhancing efficiency with feature-rich apps that streamline operations, boost engagement, and drive business growth.'
        },
        {
          title: 'End-to-End Development & Support',
          description: 'Providing complete app development services, from conceptualization to deployment, with ongoing support and maintenance.'
        },
      ]
    },
    'Infographics': {
      heading: 'Transform Your Brand with Stunning Visuals',
      points: [
        {
          title: 'Eye-Catching Designs for Maximum Engagement ',
          description: 'Create compelling infographics that capture attention and communicate complex ideas in a visually appealing way.'
        },
        {
          title: 'Data-Driven Visuals for Clear Storytelling',
          description: 'Turn raw data into insightful, easy-to-understand graphics that enhance presentations, reports, and marketing materials.'
        },
        {
          title: 'Custom Infographics Tailored to Your Brand',
          description: 'Ensure consistency and professionalism with uniquely designed infographics that align with your brand identity and message.'
        },
        {
          title: 'Boost Social Media Impact with Graphics',
          description: 'Increase engagement and shareability with well-crafted infographics designed specifically for social media platforms.'
        },
        {
          title: 'High-Quality, Print-Ready Infographic Designs',
          description: 'Get professionally designed infographics optimized for both digital and print formats to meet all your marketing needs.'
        },
      ]
    },
    'Logo Design': {
      heading: 'Professional Logo Design for Brand Identity',
      points: [
        {
          title: 'Unique & Memorable Logos for Strong Branding',
          description: 'Crafting distinctive logos that leave a lasting impression and effectively represent your brand’s identity and values.'
        },
        {
          title: 'Custom Logo Designs Tailored to Your Vision',
          description: 'Creating bespoke logo designs that align with your brand’s personality, industry, and target audience for maximum impact.'
        },
        {
          title: 'Versatile Logos for Digital & Print Use',
          description: 'Designing scalable and adaptable logos that maintain clarity and quality across websites, social media, packaging, and merchandise.'
        },
        {
          title: 'Modern, Timeless & Industry-Specific Logo Styles',
          description: 'Combining creativity and industry trends to develop logos that are both visually striking and timelessly relevant.'
        },
        {
          title: 'Expert Design Process with Revisions & Refinements',
          description: 'Ensuring perfection through a collaborative design process, offering revisions and refinements to meet your exact expectations.'
        },
      ]
    }
  };

  const textSectionRef = useRef(null);
  const firstTextRef = useRef(null);
  const secondTextRef = useRef(null);
  const [isTextAligned, setIsTextAligned] = useState(false);

  // Improved smooth animation for text alignment
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
  
  // Use the existing activeTab state - removing the duplicate declaration
  const currentContent = tabContents[activeTab];

  const [currentCard, setCurrentCard] = useState(0);
  const totalCards = services.length;

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % totalCards);
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + totalCards) % totalCards);
  };

  return (
    <>
      <section className="w-full mb-5 bg-[#B3D3BB] h-[50vh] sm:h-[60vh] md:h-[75vh] lg:h-[90vh] flex items-center justify-center relative overflow-hidden rounded-[30px] mx-auto mt-6 max-w-[95%]">
          {/* Semi-circle Gradient Overlay */}
          <div className="absolute inset-x-0 bottom-0 flex justify-center pointer-events-none">
            {/* Concentric semi-circles starting from bottom center */}
    <div className="absolute bottom-0 w-[112vw] h-[112vw] md:w-[91vw] md:h-[91vw] lg:w-[70vw] lg:h-[70vw] rounded-[50%] bg-[#abcfb4] translate-y-[45%]"></div>
    <div className="absolute bottom-0 w-[105vw] h-[105vw] md:w-[84vw] md:h-[84vw] lg:w-[66vw] lg:h-[66vw] rounded-[50%] bg-[#a3cbad] translate-y-[45%]"></div>
    <div className="absolute bottom-0 w-[98vw] h-[98vw] md:w-[77vw] md:h-[77vw] lg:w-[61vw] lg:h-[61vw] rounded-[50%] bg-[#9cc7a6] translate-y-[45%]"></div>
    <div className="absolute bottom-0 w-[91vw] h-[91vw] md:w-[70vw] md:h-[70vw] lg:w-[57vw] lg:h-[57vw] rounded-[50%] bg-[#95c4a0] translate-y-[45%]"></div>
    <div className="absolute bottom-0 w-[84vw] h-[84vw] md:w-[63vw] md:h-[63vw] lg:w-[53vw] lg:h-[53vw] rounded-[50%] bg-[#8ec19a] translate-y-[45%]"></div>
    <div className="absolute bottom-0 w-[77vw] h-[77vw] md:w-[56vw] md:h-[56vw] lg:w-[49vw] lg:h-[49vw] rounded-[50%] bg-[#88be95] translate-y-[45%]"></div>
    <div className="absolute bottom-0 w-[70vw] h-[70vw] md:w-[49vw] md:h-[49vw] lg:w-[45vw] lg:h-[45vw] rounded-[50%] bg-[#82bb90] translate-y-[45%]"></div>
    <div className="absolute bottom-0 w-[63vw] h-[63vw] md:w-[42vw] md:h-[42vw] lg:w-[41vw] lg:h-[41vw] rounded-[50%] bg-[#7db88b] translate-y-[45%]"></div>
          </div>
    
           <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="w-full md:w-[55%] lg:w-[50%] xl:w-[60%] flex flex-col justify-center space-y-4 md:space-y-4 lg:space-y-6 px-5 md:px-8 lg:px-12 overflow-hidden z-10"
                >
                  <motion.h1 
                    variants={itemVariants}
                    className='text-white font-medium text-[28px] sm:text-[34px] md:text-[50px] lg:text-[50px] xl:text-[60px] text-left leading-none md:leading-none tracking-tight mb-1 sm:mb-2 md:mb-2'
                  >
                    Graphic Design Services
                  </motion.h1>
                  <motion.h1 
                    variants={itemVariants}
                    className='text-[#4B7D57] font-medium text-[28px] sm:text-[34px] md:text-[50px] lg:text-[50px] xl:text-[60px] text-left leading-none md:leading-none tracking-tight mt-0'
                  >
                    Professional Logo & <br/>Print Design Solutions
                  </motion.h1>
                <div
                className="text-black text-sm sm:text-base md:text-lg lg:text-lg font-normal mt-3 sm:mt-4 md:mt-6 lg:mt-7 leading-[1.5] max-w-[95%] md:max-w-[95%]">
                  Let's Build Something Amazing Together
                </div>
                  
                  <Link href="/contact">
      <motion.button
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        className="gap-2 md:gap-3 mt-6 md:mt-10 flex justify-center items-center self-start text-[#6a6a6a] text-xs sm:text-sm bg-gray-50 backdrop-blur-md lg:font-medium isolation-auto 
        border-gray-50 before:absolute before:inset-0 before:w-0 before:h-full before:transition-all before:duration-500 before:bg-[#326B3F]
        hover:text-gray-50 hover:before:w-full before:rounded-full before:-z-10 relative z-10 px-3 md:px-4 py-1.5 md:py-2 overflow-hidden border-2 rounded-full group tracking-wide w-fit"
      >
        Book Your Free Consultation!
        <svg
          className="w-6 h-6 md:w-7 md:h-7 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 
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
    </Link>
                </motion.div>
                
                {/* Removed the empty motion.div that was previously holding the image */}
                <div className="hidden md:block md:w-[45%] lg:w-[50%] xl:w-[55%]">
                  {/* This is an empty placeholder div that maintains layout without showing any image */}
                </div>
    </section>
    <section>
                  {/* Improved mobile responsiveness for tabs */}
      <div className="flex flex-wrap justify-center md:mt-22 mt-12 mb-8 relative overflow-x-auto px-2 sm:px-0 max-w-full scrollbar-hide">
        <div className="flex flex-nowrap md:flex-wrap w-full md:w-auto justify-start md:justify-center">
          {Object.keys(tabContents).map(tabName => (
            <button 
              key={tabName}
              className={`px-3 sm:px-5 py-2 sm:py-3 font-medium text-sm sm:text-base whitespace-nowrap relative ${
                activeTab === tabName 
                  ? 'text-[#326B3F]' 
                  : 'text-[#1B223C] hover:text-[#326B3F]'
              } transition-colors duration-300 ease-in-out`}
              onClick={() => handleTabChange(tabName)}
              disabled={isAnimating}
            >
              {tabName}
              {activeTab === tabName && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#326B3F] transition-all duration-300 ease-in-out" 
                      style={{ transform: 'scaleX(1)' }}></span>
              )}
            </button>
          ))}
        </div>
      </div>   

      {/* Responsive container for tab content */}      <div className="w-full mb-5 md:mt-22 mt-8 bg-[#B3D3BB] min-h-[450px] sm:min-h-[500px] md:min-h-[550px] flex items-center justify-center relative overflow-hidden rounded-[20px] sm:rounded-[30px] mx-auto max-w-[95%]">
        <div className="max-w-7xl mx-auto w-full px-3 sm:px-4 py-6 sm:py-8 md:py-10">

          {/* Header with fixed height to prevent shifting */}
          <div className="text-center mb-4 sm:mb-6 md:mb-8 min-h-[60px] sm:min-h-[70px] flex items-center justify-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 px-2">
              {currentContent.heading}
            </h1>
          </div>

          {/* Content container with better overflow handling */}
          <div className="w-full overflow-visible h-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5 md:gap-6">
              {currentContent.points.map((point, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100 flex flex-col h-full"
                >
                  <h2 className="text-base sm:text-lg font-medium text-[#1B223C] mb-2 sm:mb-4 leading-tight">
                    {point.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#6a6a6a] leading-relaxed">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
      
            <section className=' max-w-screen-xl mx-auto mt-12 md:mt-22'>
            <div className='flex justify-center  items-center'>     
                <div className='text-center flex-row'>
                    <p className='text-md text-[#326B3F] font-regular'>Our Services</p>
                    <p className='md:text-3xl text-xl text-black font-medium mt-4'>
                    Our All-Inclusive<span className='text-[#326B3F]'> Graphic Designing Services</span>
                    </p>
                    <p className='text-sm text-[#6a6a6a] mt-4 leading-[25px] max-w-screen-lg mx-auto px-4'>
                    As a premier Graphic Designing Agency, Transcurators offers a full suite of graphics designing services that elevate your visual identity.</p>
                </div>
              </div>

              <section className="md:mt-12 mt-6">
              <div className="container mx-auto px-4 sm:px-6 max-w-screen-xl">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6 flex-wrap justify-center">
                  {services.slice(0, showAll ? services.length : 4).map((service, idx) => (
                    <div key={idx} className="relative bg-white border border-[#9BCDA8] rounded-xl p-4 sm:p-5 md:p-6 w-full flex flex-col shadow-sm h-full">
                      {/* Vertical number bar - responsive width */}
                      <div className="absolute top-0 right-0 h-full w-[18%] sm:w-[15%] md:w-1/5 flex flex-col items-end">
                        <div className="bg-[#9bcda8] rounded-tr-xl w-full flex items-center justify-center h-1/4 min-h-[40px] sm:min-h-[45px] md:min-h-[50px]">
                          <span className="text-white text-lg sm:text-xl md:text-2xl font-semibold">{idx + 1}</span>
                        </div>
                        <div className="bg-[#d9e9dd] w-full h-3/4 rounded-br-xl"></div>
                      </div>
                      
                      {/* Content with adjusted right padding to prevent overlap */}
                      <div className="flex flex-col items-left text-left mb-3 sm:mb-4 md:mb-5 pr-[22%] sm:pr-[20%] md:pr-[25%]">
                        <h3 className="font-semibold text-[#1B223C] text-base sm:text-lg mb-1 sm:mb-2">{service.title}</h3>
                        <p className="text-[#6A6A6A] text-xs sm:text-sm">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Responsive button container */}
                <div className="flex justify-center mt-8 sm:mt-10 md:mt-12">
                  <motion.button
                    onClick={() => setShowAll(!showAll)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center px-4 sm:px-6 md:px-8 py-2 md:py-3 border border-transparent rounded-md shadow-[0_0_10px_#CCE3DE] hover:shadow-[0_0_20px_#A8D5BA] font-medium text-xs sm:text-sm md:text-base bg-[#326B3F] text-white transition-all duration-300 hover:-translate-y-1"
                  >
                    {showAll ? (
                      <>Show Less</>
                    ) : (
                      <>Explore All</>
                    )}
                  </motion.button>
                </div>
              </div>
            </section>
            </section>
            
            <section ref={textSectionRef} className="relative w-full py-15 mt-4 bg-white overflow-hidden min-h-[400px] flex flex-col justify-center items-center">
              <div className="w-full overflow-hidden">
                <h2 
                  ref={firstTextRef}
                  className="text-6xl md:text-[150px] font-bold tracking-tight transform w-full"
                  style={{ 
                    transform: 'translateX(-50%)', 
                    opacity: 0.5,
                    transition: 'transform 0.10s linear, opacity 0.25s linear'
                  }}
                >
                  YOU IMAGINE IT,
                </h2>
              </div>

              <div className="w-full overflow-hidden">
                <h2 
                  ref={secondTextRef}
                  className="text-6xl md:text-[150px] font-bold tracking-tight text-[#326B3F] transform w-full text-right"
                  style={{ 
                    transform: 'translateX(50%)', 
                    opacity: 0.5,
                    transition: 'transform 0.10s linear, opacity 0.25s linear'
                  }}
                >
                  WE CREATE IT.
                </h2>
              </div>
            </section>
          <section>
    <div className='relative bg-[#429054]/20 mt-12 h-auto md:mt-22 flex justify-center items-center mx-auto py-4 md:py-4'>
        <div className='max-w-screen-xl flex flex-col md:flex-row justify-between items-center mx-auto'>
            {/* Image container - taking 35% width on medium screens and above */}
            <div className='md:w-[35%] flex justify-center items-center mx-auto'>
                <Image src="/gfxdesign.png" alt="Graphic Design Services" className='md:block hidden' width={400} height={400} priority />
            </div>
            
            {/* Text container - taking 65% width on medium screens and above */}
            <div className='md:w-[65%] flex-row justify-center items-center px-4 md:px-6 py-8 md:py-12'>
                <h2 className='md:text-3xl text-xl font-semibold text-black'>
                    Why Choose Transcurators for Your <span className='text-[#326B3F]'>Graphic Designing</span> Needs?
                </h2>
                <p className='text-sm font-regular mt-6 text-[#6a6a6a]'>
                    Experience top-tier graphic design services with Transcurators—where creativity, precision, and custom solutions come together to elevate your brand.
                </p>
                <ul className='mt-6 space-y-4 text-sm'>
                    {cardData.map((item, index) => (
                      <li key={index} className='text-sm font-normal text-[#6a6a6a] flex items-center gap-2'>
                        <span className='w-5 h-5 flex items-center justify-center rounded-full bg-[#326B3F] text-white'>
                        <svg className="h-full p-0.5" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M6.5 10.7l-2.9-2.9-1.1 1.1 4 4 8-8-1.1-1.1z"></path>
                          </svg>
                        </span>
                        <span>
                          <span className="font-semibold">{item.heading}</span>:<br/>{item.description}
                        </span>
                      </li>
                    ))}
                </ul>
                <Link href="/contact">
                    <motion.button
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="gap-2 md:gap-3 mt-6 md:mt-10 flex justify-center items-center self-start text-[#6a6a6a] text-xs sm:text-sm bg-gray-50 backdrop-blur-md lg:font-medium isolation-auto 
                        border-gray-50 before:absolute before:inset-0 before:w-0 before:h-full before:transition-all before:duration-500 before:bg-[#326B3F]
                        hover:text-gray-50 hover:before:w-full before:rounded-full before:-z-10 relative z-10 px-3 md:px-4 py-1.5 md:py-2 overflow-hidden border-2 rounded-full group tracking-wide w-fit"
                    >
                        Book Your Free Consultation!
                        <svg
                            className="w-6 h-6 md:w-7 md:h-7 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 
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
                </Link>
            </div>
        </div>
    </div>
</section>

            <div className='max-w-screen-xl flex justify-center md:mt-22 mt-12 mx-auto items-center'>     
  <div className='text-center flex-row'>
    <p className='md:text-3xl text-xl text-black font-medium mt-4'>
      Frequently Asked<span className='text-[#326B3F]'> Questions</span>
    </p>
    <p className='text-sm text-[#6a6a6a] mt-4 leading-[25px] max-w-screen-lg'>
      Get clear answers to common queries about graphics designing services, choosing the right company, and business benefits.          
    </p>
  </div>
</div>

<div className="max-w-screen-xl mx-auto p-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {faqs.slice(0, showMore ? faqs.length : 4).map((faq) => (
      <div key={faq.id} className="bg-white hover:shadow-lg duration-300 transition-all ease-in-out shadow-md p-5 rounded-md">
        <button
          className="flex justify-between items-center w-full text-md font-normal cursor-pointer text-[#6a6a6a]"
          onClick={() => toggleFAQ(faq.id)}
        >
          {faq.question}
          <span className="text-xl transition-transform duration-300">
            {openFAQ === faq.id ? "−" : "+"}
          </span>
        </button>
        <div
          className={`transition-all duration-500 overflow-hidden ${
            openFAQ === faq.id ? "max-h-40 mt-3 text-[#326B3F] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {faq.answer}
        </div>
      </div>
    ))}
  </div>

  <div className="flex justify-center mt-6">
    <button
      onClick={() => setShowMore(!showMore)}
      className="cursor-pointer group relative text-[#326B3F] my-8 font-regular tracking-wide transition-all duration-300 ease-in-out active:border-b-0 active:translate-y-1"
    >
      <span className="flex items-center gap-3 relative z-10">
        <svg viewBox="0 0 24 24" fill="#326B3F" className="w-5 h-5 transition-all duration-300 group-hover:translate-x-1">
          <path d="M12 4L10.6 5.4L16.2 11H4V13H16.2L10.6 18.6L12 20L20 12L12 4Z"></path>
        </svg>
        {showMore ? "Show Less" : "Show More"}
      </span>
    </button>
  </div>
</div>
            

    </>
  );
}
export default Designing;

