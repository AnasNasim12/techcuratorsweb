"use client"

import { useState, useRef, useEffect } from 'react';
import { CarouselTwo } from "../components/caruseltwo/page";
import Carousel from "../components/carousel/page";
import { motion } from "framer-motion";
import Image from 'next/image'; // Add this import for the Image component

const PPC = () => {
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
    question: "What is PPC, and how does it work?",
    answer:
      "PPC or Pay-Per-Click is a web advertising model where you pay for each click on your ad. They show up on search engines, websites, or social media. You drive targeted traffic to your site using targeted keywords, increasing conversions and visibility.",
  },
  {
    id: 2,
    question: "How is PPC different from SEO?",
    answer:
      "Whereas PPC brings instantaneous traffic through paid advertising, SEO is aimed at organic ranking in the long term. PPC delivers quicker outcomes with quantifiable ROIs, while SEO requires consistent effort and persistence to develop searches and search engine positioning.",
  },
  {
    id: 3,
    question: "How much do PPC management services cost?",
    answer:
      "The cost of PPC management services differs based on your business goals, campaign size, and operating platform. Generally, the cost of PPC management can range from a flat rate to a percentage of your ad budget. Please request a customized quote specific to your needs.",
  },
  {
    id: 4,
    question: "How long does it take to see results from PPC?",
    answer:
      "PPC performance will typically reflect short-term traffic, click, and impression performance. However, the goal and ROI conversion rate will not be obtained for 1-3 months of consistent budgeting and optimization as you sort out your plan and optimize performance.",
  },
  {
    id: 5,
    question: "Which platforms do you manage PPC campaigns on?",
    answer:
      "We operate PPC campaigns on platforms such as Google Ads, Bing Ads, Facebook Ads, Instagram, LinkedIn, YouTube, Amazon, and more. We select the platforms based on your target market and the commercial goals to derive maximum visibility and conversions.",
  },
  {
    id: 6,
    question: "Where will my PPC ads appear?",
    answer:
      "Your PPC ads may appear on search pages, Google Display Network pages, social platforms (Facebook, Instagram, LinkedIn), YouTube video pages, and other pages associated with Google. Placement depends on your campaign's targeting approach and chosen pages.",
  },
  {
    id: 7,
    question: "How do you choose the right keywords for my business?",
    answer:
      "We do a comprehensive keyword analysis using Google Keyword Planner, competition analysis, and market trends. We identify high-converting, niche keywords that fit your products, services, and target audience to generate the most effective PPC traffic.",
  },
  {
    id: 8,
    question: "Do you create landing pages for PPC campaigns?",
    answer:
      "Yes, we create PPC-optimized landing pages specifically created for PPC campaigns. They are PPC-optimized for conversion with a clear call-to-action, corresponding copy, and optimized design for improved user experience and high conversions.",
  },
  {
    id: 9,
    question: "Will you manage my existing ad accounts or create new ones?",
    answer:
      "We can use your existing ad accounts or create new ones according to your settings and targets. Our experts will analyze your existing accounts for optimum performance and suggest changes to suit your goals and get improved results.",
  },
  {
    id: 10,
    question: "Do I have full ownership and access to my PPC accounts?",
    answer:
      "Yes, you will keep complete ownership and access to your PPC accounts. We offer open management and provide you with complete control. You will be able to view all reporting, data, and performance statistics, allowing you to monitor and track the success of your campaigns at any time.",
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
        setOpenFAQ(openFAQ === id ? null : id);}
    
        const benefits = [
  {
    title: "Expert PPC Audits",
    Content:
      "We offer professional PPC audits to examine your current campaigns, identify inefficiencies, and fine-tune your PPC services to deliver better. Our audits ensure every dollar of your budget is working at optimum.",
  },
  {
    title: "Custom-Tailored Strategies",
    Content:
      "We at TransCurators create customised PPC strategies to meet your specific business goals. We handle all your PPC advertising services for maximum ROI and growth.",
  },
  {
    title: "Transparent Reporting",
    Content:
      "We use open reporting for all of our PPC services. Clients receive clear, comprehensible reports, enabling them to monitor performance, budget usage, and campaign results.",
  },
  {
    title: "Certified Google Ads Specialists",
    Content:
      "Our company is staffed by certified Google Ads professionals who manage and optimise PPC campaigns. With their expertise, we leave your PPC advertising in good hands.",
  },
  {
    title: "Conversion-Driven Landing Pages",
    Content:
      "We create conversion-driven landing pages that support your PPC advertising. Our landing pages are designed to deliver high conversions via a user-friendly experience and powerful calls to action.",
  },
  {
    title: "Customer-First Mindset",
    Content:
      "Our India-based PPC company adheres to a customer-first philosophy. We concentrate on knowing your requirements and delivering PPC solutions with results, with your business at the core.",
  },
  {
    title: "Multi-Platform PPC Expertise",
    Content:
      "We specialise in multi-platform PPC advertising, so your advertisements are optimised on Google, social media, Amazon, and more. That means more individuals see your brand.",
  },
  {
    title: "Data-Backed Optimizations",
    Content:
      "Our PPC advertising agency employs data-driven optimisations to improve your PPC campaigns constantly. We track metrics, test strategies, and make data-driven choices to enhance campaign performance.",
  },
  {
    title: "Proven Track Record",
    Content:
      "Proudly showcasing a successful record of providing top-performance PPC solutions, TransCurators has assisted many companies enhance their online visibility and reaching their growth goals.",
  },
];


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
    heading: "Comprehensive Keyword Research & Targeting",
    description:
      "We thoroughly research and find the best keywords relevant to your business so that your ads will get seen by the right people.",
    image: "", // Replace with actual image URL if available
  },
  {
    number: 2,
    heading: "Continuous Optimization & A/B Testing",
    description:
      "Our team will optimize your campaign's optimum performance through ongoing adjustments and strategic A/B testing.",
    image: "",
  },
  {
    number: 3,
    heading: "Transparent Reporting & Performance Tracking",
    description:
      "We provide transparent reporting so that you know how successful your campaigns are and in what areas you can use improvement.",
    image: "",
  },
  {
    number: 4,
    heading: "Conversion-Focused Landing Page Development",
    description:
      "We provide a high-converting landing page developed for higher conversion rates.",
    image: "",
  },
  {
    number: 5,
    heading: "Multi-Platform PPC",
    description:
      "Our team uses PPC marketing services in Google Ads, Facebook, and LinkedIn.",
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
  const webdevservices = [
  {
    title: "Low Ad Visibility",
    description:
      "Are your ads showing up when you want them? Low ad visibility decreases impression share when you want people to see your brand. Some factors and reasons include insufficient bidding, targeting issues, or restrictions on the platform. The more optimized your PPC campaigns are, the better your ads will surface, allowing you to get in front of your ideal audience.",
  },
  {
    title: "High Cost Per Click (CPC)",
    description:
      "Are you constantly paying too much for cost per click? Paying too much to get clicks on your site negatively affects your overall ROI, and expensive ad clicks constrain your budget. An environment where you navigate and manage your pay-per-click (PPC) strategy correctly, leading into these campaigns, will allow you to only pay the right fee for your traffic qualities, thus, amplifying your conversion rates and profitability.",
  },
  {
    title: "Poor Quality Score",
    description:
      "A poor PPC quality score could result in higher costs per click associated with that particular ad group. Your ad performance can take a hit, too! Improving your ad's relevance, landing page experience, and expected click-through rate will be the items that you will want to improve continually, resulting in better quality score (PPC) and more reasonable costs, as well as optimizing the overall function of your campaign.",
  },
  {
    title: "Low Click-Through Rate (CTR)",
    description:
      "Are you experiencing a low CTR below where you believe you should be? Often, low CTR results from your ad copy having a weak message or targeting. Improving your general keywords, ads, and audience segmentation will likely improve engagement and traffic to your site.",
  },
  {
    title: "High Bounce Rate",
    description:
      "A high bounce rate means visitors leave your site quickly and probably do so because of uninteresting ad placements or a badly designed landing page. You must maximize PPC campaigns and optimize landing pages so the user stays, engages, and converts.",
  },
];
const ppcoffer = [
  {
    title: "Search Ads",
    description: "Our PPC services include keyword-based search ads whenever people look for certain keywords. These are strategically placed to drive traffic, increase conversions, and achieve search engine visibility on websites like Google.",
    image: "/ppcoffer1.png"
  },
  {
    title: "Display Ads",
    description: "We create powerful display ads on websites to facilitate brand visibility. Our PPC marketing solutions assist in ensuring your display ads are viewed by your desired audience on popular websites to get higher-quality leads.",
    image: "/ppcoffer2.png"
  },
  {
    title: "Social Media Advertising",
    description: "We use social media marketing to reach your desired audience through channels such as Facebook, Instagram, and LinkedIn. We customize PPC to generate brand awareness, initiate interactions, and enhance conversion.",
    image: "/ppcoffer3.png"
  },
  {
    title: "Remarketing Campaigns",
    description: "Our remarketing is directed to users who have already visited your website. With PPC management services, we ensure that you are never forgotten and conversions are achieved from aware users of your brand.",
    image: "/ppcoffer4.png"
  },
  {
    title: "Landing Page Optimization",
    description: "We build and design landing pages to drive the highest conversions for your PPC campaigns. Through A/B testing and continuous optimization, we align the landing page content with your ad messaging to drive more success.",
    image: "/ppcoffer5.png"
  },
  {
    title: "YouTube & In-stream Ads",
    description: "With in-stream ads & YouTube, we help you connect with video viewers. This PPC service provides maximum reach and engagement, driving targeted traffic to your site from one of the largest video platforms.",
    image: "/ppcoffer6.png"
  },
  {
    title: "Shopping Ads",
    description: "Our PPC marketing agency  creates and executes shopping ads that highlight your products in the spotlight in search results. It is especially useful for online shops that need to be discovered and boost sales using advertising.",
    image: "/ppcoffer7.png"
  },
  {
    title: "Gmail Sponsored Promotions",
    description: "We utilize Gmail-sponsored promotions to engage potential customers directly in their inboxes. The PPC service is most appropriate for businesses that prefer to contact prospects and provide conversions through email marketing.",
    image: "/ppcoffer8.png"
  },
  {
    title: "Amazon PPC Advertising",
    description: "As a professional PPC agency in India, we offer special Amazon PPC ads to help e-commerce businesses promote their products on Amazon to gain more visibility, reach the right audience, and drive sales.",
    image: "/ppcoffer9.png"
  },
  {
    title: "Local Services Ads",
    description: "Our local service ads allow businesses to acquire customers by putting targeted ads in local search results. Our PPC marketing services are ideal for service businesses that need to acquire local customers efficiently.",
    image: "/ppcoffer10.png"
  }
];




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
                    className='text-[#4B7D57] font-medium text-[28px] sm:text-[34px] md:text-[50px] lg:text-[50px] xl:text-[60px] text-left leading-tight md:leading-tight tracking-tight mb-1 sm:mb-2 md:mb-2'
                  >
                    Pay-Per-Click (PPC) Services <span
                    variants={itemVariants}
                    className='text-white font-medium text-[28px] sm:text-[34px] md:text-[50px] lg:text-[50px] xl:text-[60px] text-left leading-tight md:leading-tight tracking-tight mt-0'
                  >
                    to Accelerate Your Business Growth
                  </span> 
                  </motion.h1>
                <div
                className="text-black text-sm sm:text-base md:text-lg lg:text-lg font-normal mt-3 sm:mt-4 md:mt-6 lg:mt-7 leading-[1.5] max-w-[95%] md:max-w-[95%]">
                  Maximize Your ROI with Custom-Tailored PPC Campaigns That Deliver Results
                </div>
                  
                  <motion.button
                    variants={itemVariants}
                    onClick={() => {
                            document.getElementById('contact-form').scrollIntoView({ 
                                behavior: 'smooth',
                                block: 'start'
                            });
                        }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="gap-2 md:gap-3 mt-4 md:mt-10 flex justify-center items-center self-start text-[#6a6a6a] text-xs sm:text-sm bg-gray-50 backdrop-blur-md lg:font-medium isolation-auto 
                    border-gray-50 before:absolute before:inset-0 before:w-0 before:h-full before:transition-all before:duration-500 before:bg-[#326B3F]
                    hover:text-gray-50 hover:before:w-full before:rounded-full before:-z-10 relative z-10 px-3 md:px-4 py-1.5 md:py-2 overflow-hidden border-2 rounded-full group tracking-wide w-fit"
                  >
                    Book a 30-Min PPC Strategy Session
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
                </motion.div>
                <div className="hidden md:block md:w-[45%] lg:w-[50%] xl:w-[55%]">
                  {/* This is an empty placeholder div that maintains layout without showing any image */}
                </div>
    </section>
    <section>
      {/* Services Carousel Component */}
      {(() => {
        // Define services carousel component inside section to use existing webdevservices data
        function ServicesCarousel() {
          const [current, setCurrent] = useState(0);
    
          const cardsPerPage = 3;
          const totalPages = Math.ceil(webdevservices.length / cardsPerPage);
    
          const pagedServices = webdevservices.slice(
            current * cardsPerPage,
            current * cardsPerPage + cardsPerPage
          );
    
          return (
            <section className="w-full md:mt-22 mt-12">
              {/* Title */}
              <h2 className="text-2xl md:text-3xl font-medium text-center mb-12">
               Are You Struggling With These PPC Challenges?
              </h2>
    
              {/* Cards */}
              <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl px-4 mx-auto">
                  {pagedServices.map((service, idx) => (
                    <div
                      key={service.title}
                      className="bg-white rounded-[24px] shadow-[#B3D3BB] border border-[#B3D3BB] flex flex-col items-center p-8 transition hover:shadow-lg"
                      style={{ height: "420px" }}
                    >
                      <div className="h-[80px] flex items-center justify-center mb-6">
                        <h3 className="text-2xl font-medium text-[#4B7D57] text-center">
                          {service.title}
                        </h3>
                      </div>
                      <div className="bg-[#D9E9DD] rounded-xl p-6 text-black text-center flex-1 overflow-auto">
                        <div className="flex items-center justify-center h-full">
                          <p className="text-sm">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
    
              {/* Pagination Dots */}
              <div className="flex justify-center mt-10 space-x-3">
                {[...Array(totalPages)].map((_, idx) => (
                  <button
                    key={idx}
                    aria-label={`Go to page ${idx + 1}`}
                    onClick={() => setCurrent(idx)}
                    className={`h-2 w-10 rounded-full transition-all duration-200 ${
                      current === idx
                        ? "bg-[#326B3F]"
                        : "bg-[#9BCDA8] hover:bg-[#326B3F] hover:w-12"
                    }`}
                  />
                ))}
              </div>
            </section>
          );
        }
    
        // Render the carousel component
        return <ServicesCarousel />;
      })()}
    </section>
                <section>
                <div className='relative bg-[#429054]/20 mt-12 h-auto md:mt-22 flex justify-center items-center mx-auto py-4 md:py-4'>
                    <div className='max-w-screen-xl flex flex-col md:flex-row justify-between items-center mx-auto'>
                        {/* Image container - taking 35% width on medium screens and above */}
                        <div className='md:w-[35%] flex justify-center items-center mx-auto'>
                            <Image src="/ppcwhy.png" alt="Graphic Design Services" className='md:block hidden' width={400} height={400} priority />
                        </div>
                        
                        {/* Text container - taking 65% width on medium screens and above */}
                        <div className='md:w-[65%] flex-row justify-center items-center px-4 md:px-6 py-8 md:py-12'>
                            <h2 className='md:text-3xl text-xl font-medium text-black'>
                                How TransCurators Drives High-Performance PPC Campaigns for Your Business Growth 
                            </h2>
                            <p className='text-sm font-regular mt-6 text-[#6a6a6a]'>
                                TransCurators specializes in premium PPC services built to promote the growth of your business. Our experienced team utilizes a data-driven approach that makes your pay-per-click campaigns heavily relevant and optimized. The key to our approach is a strategic methodology that allows us to provide measurable results through continuously optimizing your campaigns and transparent reporting. 
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
                        </div>
                    </div>
                </div>
            </section>
            <section>
  {(() => {
    function ServicesCarousel() {
      const [current, setCurrent] = useState(0);
      const [isMobile, setIsMobile] = useState(false);

      // Check if mobile on component mount and window resize
      useEffect(() => {
        const checkMobile = () => {
          setIsMobile(window.innerWidth < 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
      }, []);

      // Responsive cards per page
      const cardsPerPage = isMobile ? 2 : 4;
      const totalPages = Math.ceil(ppcoffer.length / cardsPerPage);

      const pagedServices = ppcoffer.slice(
        current * cardsPerPage,
        current * cardsPerPage + cardsPerPage
      );

      // Helper to format the number as 01, 02, etc.
      const formatNumber = (n) => (n < 9 ? `0${n + 1}` : `${n + 1}`);

      return (
        <section className="w-full md:mt-22 mt-12">
          {/* Title */}
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-center mb-8 md:mb-12 px-4">
           What We Offer in PPC Marketing
          </h2>

          {/* Cards */}
          <div className="flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 w-full max-w-7xl px-2 md:px-4 mx-auto">
              {pagedServices.map((service, idx) => {
                // Calculate the global card number
                const cardNumber = current * cardsPerPage + idx;
                return (
                  <div
                    key={service.title}
                    className="w-full rounded-xl md:rounded-2xl border border-[#d9e9dd] p-3 md:p-6 bg-white shadow-md relative overflow-hidden"
                    style={{ minHeight: isMobile ? "280px" : "400px" }}
                  >
                    {/* Large faded number */}
                    <span
                      className="absolute top-1 md:top-2 left-2 md:left-4 text-[40px] md:text-[80px] font-extrabold select-none pointer-events-none z-0 opacity-20"
                      style={{
                        lineHeight: 1,
                        letterSpacing: '-0.05em',
                        background: 'linear-gradient(to bottom, #22c55e, #ffffff)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        textShadow: "0 2px 8px rgba(0,0,0,0.05)"
                      }}
                    >
                      {formatNumber(cardNumber)}
                    </span>
                    {/* Card content */}
                    <div className="relative z-10 flex flex-col h-full">
                      <h3 className="mt-4 md:mt-9 text-sm md:text-lg font-semibold text-gray-800 mb-2 md:mb-3 leading-tight">{service.title}</h3>
                      <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{service.description}</p>
                      {service.image && (
                        <div className="w-full mt-auto hidden md:block">
                          <Image
                            src={service.image}
                            alt={service.title}
                            width={320}
                            height={120}
                            className="rounded-xl object-cover w-full h-32"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-6 md:mt-10 space-x-2 md:space-x-3">
            {[...Array(totalPages)].map((_, idx) => (
              <button
                key={idx}
                aria-label={`Go to page ${idx + 1}`}
                onClick={() => setCurrent(idx)}
                className={`h-1.5 md:h-2 w-6 md:w-10 rounded-full transition-all duration-200 ${
                  current === idx
                    ? "bg-[#326B3F]"
                    : "bg-[#9BCDA8] hover:bg-[#326B3F] hover:w-8 md:hover:w-12"
                }`}
              />
            ))}
          </div>
        </section>
      );
    }

    return <ServicesCarousel />;
  })()}
</section>
<section className="w-full flex justify-center items-center mt-12 md:mt-22 px-4 md:px-8">
  <div className="border-4 border-[#d9e9dd] rounded-xl md:rounded-4xl min-h-fit md:min-h-[50vh] w-full max-w-[1400px] py-12 md:py-8 relative overflow-hidden mx-auto">
    <h2 className="text-2xl md:text-3xl font-medium text-center mb-10">
      Our PPC Strategy: <span className="text-[#326B3F] font-medium">Driving real results</span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 px-6 md:px-12">
      {/* Row 1 */}
      <div className="rounded-xl border border-[#41A959] p-6 text-center">
        <h3 className="text-lg font-semibold text-[#326B3F] mb-2">In-Depth Goal Analysis</h3>
        <p className="text-[#6a6a6a] text-sm">
          We begin with a thorough goal analysis to understand your business objectives so that all PPC campaigns are created to provide measurable outcomes and assist your most critical performance metrics.
        </p>
      </div>
      <div className="rounded-xl border border-[#41A959] bg-[#D4E4D8] p-6 text-center">
        <h3 className="text-lg font-semibold text-[#326B3F] mb-2">Competitive Landscape Analysis</h3>
        <p className="text-[#6a6a6a] text-sm">
          By analyzing the competitive landscape, we evaluate your competitors' PPC tactics. This allows us to optimize your strategy and take advantage of market gaps, making your PPC services better than the competition.
        </p>
      </div>
      <div className="rounded-xl border border-[#41A959] p-6 text-center">
        <h3 className="text-lg font-semibold text-[#326B3F] mb-2">Precise Audience Targeting</h3>
        <p className="text-[#6a6a6a] text-sm">
          Our accurate audience targeting is aimed at reaching your perfect customers. We apply data-driven insights into segmenting and targeting the correct audience, maximizing the performance of your PPC campaigns and guaranteeing high-quality traffic.
        </p>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-12">
      {/* Row 2 */}
      <div className="rounded-xl border border-[#41A959] bg-[#D4E4D8] p-6 text-center">
        <h3 className="text-lg font-semibold text-[#326B3F] mb-2">Strategic Budget Allocation</h3>
        <p className="text-[#6a6a6a]  text-sm">
          Our strategic budget planning ensures your ad spend is utilized to its fullest potential. We focus on the highest return on investment channels, maximizing your PPC marketing services and achieving cost-effective returns.
        </p>
      </div>
      <div className="rounded-xl border border-[#41A959] p-6 text-center">
        <h3 className="text-lg font-semibold text-[#326B3F] mb-2">Comprehensive Keyword Research &amp; Selection</h3>
        <p className="text-[#6a6a6a] text-sm">
          We conduct thorough keyword research to find the optimal and best keywords for your PPC campaigns. We optimize your ad visibility and conversion rate by selecting high-traffic and low-competition keywords.
        </p>
      </div>
      <div className="rounded-xl border border-[#41A959] bg-[#D4E4D8] p-6 text-center">
        <h3 className="text-lg font-semibold text-[#326B3F] mb-2">Continuous Optimization &amp; Reporting</h3>
        <p className="text-[#6a6a6a] text-sm">
          We continually optimize your PPC campaigns, checking performance data to maximize bids, keywords, and ad copy. Regular reporting keeps you informed and allows us to adjust for ongoing success in PPC advertising.
        </p>
      </div>
    </div>
  </div>
</section>
   <section>
              {/* industry section */}
              <div className='relativepy-16 mt-12 h-auto md:mt-22'>
                <div className='max-w-screen-xl mx-auto px-4'>
                  <div className='text-center mb-12'>
                    <h2 className='md:text-3xl text-2xl text-black'>
                        Industries We Serve
                    </h2>
                  </div>
                  <section className="md:mt-22 mt-12">
  <div className="max-w-screen-lg mx-auto px-4 sm:px-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
<div className="relative col-span-1 sm:col-span-2 rounded-lg shadow-sm overflow-hidden bg-cover bg-center h-28 sm:h-32 md:h-48" style={{ backgroundImage: 'url(/industry1dm.png)' }}>
  <div className="absolute bottom-0 left-0 w-full bg-[#D9E9DD] py-1 sm:py-2 text-center px-2">
    <span className="text-[#3c6446] font-bold sm:text-base block">BFSI & Fintech</span>
  </div>
</div>
<div className="relative rounded-lg shadow-sm overflow-hidden bg-cover bg-center h-28 sm:h-32 md:h-48" style={{ backgroundImage: 'url(/industry2dm.png)' }}>
  <div className="absolute bottom-0 left-0 w-full bg-[#D9E9DD] py-1 sm:py-2 text-center px-2">
    <span className="text-[#3c6446] font-bold sm:text-base block">Fashion & Lifestyle</span>
  </div>
</div>
<div className="relative rounded-lg shadow-sm overflow-hidden bg-cover bg-center h-28 sm:h-32 md:h-48" style={{ backgroundImage: 'url(/industry3dm.png)' }}>
  <div className="absolute bottom-0 left-0 w-full bg-[#D9E9DD] py-1 sm:py-2 text-center px-2">
    <span className="text-[#3c6446] font-bold sm:text-base block">Automotive</span>
  </div>
</div>
      {/* Row 2 */}
<div className="relative rounded-lg shadow-sm overflow-hidden bg-cover bg-center h-28 sm:h-32 md:h-48" style={{ backgroundImage: 'url(/industry4dm.png)' }}>
  <div className="absolute bottom-0 left-0 w-full bg-[#D9E9DD] py-1 sm:py-2 text-center px-2">
    <span className="text-[#3c6446] font-bold sm:text-base block">Sports & Fitness</span>
  </div>
</div>

<div className="relative rounded-lg shadow-sm overflow-hidden bg-cover bg-center h-28 sm:h-32 md:h-48" style={{ backgroundImage: 'url(/industry5dm.png)' }}>
  <div className="absolute bottom-0 left-0 w-full bg-[#D9E9DD] py-1 sm:py-2 text-center px-2">
    <span className="text-[#3c6446] font-bold sm:text-base block">Marketing & Advertising</span>
  </div>
</div>

<div className="relative col-span-1 sm:col-span-2 rounded-lg shadow-sm overflow-hidden bg-cover bg-center h-28 sm:h-32 md:h-48" style={{ backgroundImage: 'url(/industry6dm.png)' }}>
  <div className="absolute bottom-0 left-0 w-full bg-[#D9E9DD] py-1 sm:py-2 text-center px-2">
    <span className="text-[#3c6446] font-bold sm:text-base block">Education & EdTech</span>
  </div>
</div>

<div className="relative col-span-1 sm:col-span-1 md:col-span-2 rounded-lg shadow-sm overflow-hidden bg-cover bg-center h-28 sm:h-32 md:h-48" style={{ backgroundImage: 'url(/industry8dm.png)' }}>
  <div className="absolute bottom-0 left-0 w-full bg-[#D9E9DD] py-1 sm:py-2 text-center px-2">
    <span className="text-[#3c6446] font-bold sm:text-base block">Entertainment & Gaming</span>
  </div>
</div>

<div className="relative col-span-1 sm:col-span-1 md:col-span-2 rounded-lg shadow-sm overflow-hidden bg-cover bg-center h-28 sm:h-32 md:h-48" style={{ backgroundImage: 'url(/industry7dm.png)' }}>
  <div className="absolute bottom-0 left-0 w-full bg-[#D9E9DD] py-1 sm:py-2 text-center px-2">
    <span className="text-[#3c6446] font-bold sm:text-base block">Health & Beauty</span>
  </div>
</div>
  </div>
  </div>
</section>
                </div>
              </div>
            </section>
            <section className="w-full min-h-[80vh] md:min-h-screen bg-[#D9E9DD] md:mt-22 mt-12 flex items-center">
  <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 py-8 sm:py-12 md:py-16 gap-6 sm:gap-8 md:gap-10">
    {/* Left: Headline, description, CTA */}
    <div className="flex-1 w-full md:w-auto">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-4 sm:mb-6">
        Secret Strategies to <br />
        <span className="text-[#3c6446] font-medium">Skyrocket Your Business Online</span>
      </h1>
      <p className="text-[#6a6a6a] mb-8 sm:mb-12 md:mb-16 lg:mb-20 mt-6 sm:mt-10 md:mt-16 lg:mt-20 max-w-lg text-sm sm:text-base">
        Looking for more leads, higher engagement, and faster business growth? Our digital marketing professionals have put together 5 effective strategies that have generated amazing results for our clients. Fill out your information below, and we'll share the knowledge you need to enhance your online presence and promote growth.
      </p>
      <motion.button
                    variants={itemVariants}
                    onClick={() => {
                            document.getElementById('contact-form').scrollIntoView({ 
                                behavior: 'smooth',
                                block: 'start'
                            });
                        }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="gap-2 md:gap-3 mt-4 md:mt-6 flex justify-center items-center self-start text-[#6a6a6a] text-xs sm:text-sm bg-gray-50 backdrop-blur-md lg:font-medium isolation-auto 
                    border-gray-50 before:absolute before:inset-0 before:w-0 before:h-full before:transition-all before:duration-500 before:bg-[#326B3F]
                    hover:text-gray-50 hover:before:w-full before:rounded-full before:-z-10 relative z-10 px-3 md:px-4 py-1.5 md:py-2 overflow-hidden border-2 rounded-full group tracking-wide w-fit"
                  >
                    Get Free Strategy Now
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 
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
    </div>
    {/* Right: Form */}
    <form className="flex-1 max-w-md w-full bg-white rounded-2xl border border-[#B3D3BB] p-4 sm:p-6 md:p-8 shadow-md">
      <input
        type="text"
        placeholder="Your Name"
        className="w-full mb-3 sm:mb-4 px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-[#B3D3BB] focus:outline-none focus:ring-2 focus:ring-green-200 text-sm sm:text-base"
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full mb-3 sm:mb-4 px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-[#B3D3BB] focus:outline-none focus:ring-2 focus:ring-green-200 text-sm sm:text-base"
      />
      <input
        type="tel"
        placeholder="Phone"
        className="w-full mb-3 sm:mb-4 px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-[#B3D3BB] focus:outline-none focus:ring-2 focus:ring-green-200 text-sm sm:text-base"
      />
      <textarea
        placeholder="Message"
        rows={3}
        className="w-full mb-4 sm:mb-6 px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-[#B3D3BB] focus:outline-none focus:ring-2 focus:ring-green-200 text-sm sm:text-base resize-none"
      />
      <button
        type="submit"
        className="w-full bg-[#B3D3BB] text-black rounded-full py-2 sm:py-3 font-medium border border-[#B3D3BB] hover:bg-[#B3D3BB] transition text-sm sm:text-base"
      >
        Let's get started
      </button>
    </form>
  </div>
</section>
<div className="w-full bg-[#e5efe5] py-16 mb-20 md:mt-22 mt-12">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <h2 className="md:text-3xl text-2xl font-medium text-black">
          READY TO <span className="text-[#3c6446]">HELP</span>, READY TO <span className="text-[#3c6446]">GUIDE</span>
        </h2>
         <div href="/contact"
            className="cursor-pointer inline-flex mt-4 items-center text-sm justify-center px-3 py-1.5 border border-transparent rounded-md shadow-[0_0_10px_#CCE3DE] hover:shadow-[0_0_15px_#A8D5BA] font-medium bg-[#3c6446] text-white transition-shadow duration-300">Book Free Voice AI Session</div>
      </div>
    </div>
            <div className='max-w-screen-xl flex justify-center md:mt-22 mt-12 mx-auto items-center'>     
        <div className='text-center flex-row'>
            <p className='md:text-3xl text-xl text-black font-medium mt-4'>
            Frequently Asked<span className='text-[#326B3F]'> Questions</span>
            </p>
        </div>
      </div>

    <div className="max-w-screen-xl mx-auto p-6">
    
      <div
      onClick={() => toggleFAQ(faq.id)}
      className="grid grid-cols-1 md:grid-cols-2 cursor-pointer gap-8">
        {faqs.slice(0, showMore ? faqs.length : 10).map((faq) => (
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
    </div>
            

    </>
  );
}
export default PPC;

