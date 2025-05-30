"use client"

import { useState, useRef, useEffect } from 'react';
import { motion } from "framer-motion";
import Image from 'next/image'; // Add this import for the Image component

const ContentMarketing = () => {
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
    question: "What Types of Content Do You Offer?",
    answer: "We create various content types, such as blog posts, social media content, infographics, video marketing, newsletters, emailers, and ad copy. Our services are geared toward a variety of content requirements and assist companies in reaching their audience effectively across various platforms."
  },
  {
    id: 2,
    question: "Can Content Marketing Help Improve My SEO?",
    answer: "Indeed, content marketing is also a key factor in enhancing SEO. By developing quality, relevant content incorporating focused keywords, your site can rank higher on search engine pages, gain organic traffic, and increase exposure. Regularly optimized content drives up search engine rankings and overall website authority."
  },
  {
    id: 3,
    question: "Do You Offer Industry-Specific Content Writing Services?",
    answer: "Absolutely! We know that every industry is different and has special needs, and we provide customized content writing services for industries like fashion, healthcare, education, tech, and many more. Our team ensures content aligns with your industry's tone, audience tastes, and business goals to trigger results."
  },
  {
    id: 4,
    question: "How Often Should I Publish New Content?",
    answer: "Consistency is the key to success in content marketing. The publishing frequency varies based on goals and industry, but releasing fresh content at least once or twice weekly is advisable. Ongoing content updating keeps readers engaged and enhances SEO positions over time."
  },
  {
    id: 5,
    question: "Do You Offer Ongoing Content Updates or One-Time Projects?",
    answer: "We offer both ongoing content updates and one-time projects. Whether you need a long-term content strategy with regular updates or a one-off project, we can cater to your needs. Our team works with you to ensure content always aligns with your goals and objectives."
  },
  {
    id: 6,
    question: "Do You Also Handle Content Distribution and Promotion?",
    answer: "Yes, we do! Not only do we develop compelling content, but we also assist in distributing and promoting it. Our approaches range from advertising content on social networks through email marketing to paid advertising to your intended audience and generating leads efficiently."
  },
  {
    id: 7,
    question: "Can You Repurpose Old Content to Improve Results?",
    answer: "Absolutely! We can reuse outdated content and spin it fresh. Whether we're rewriting blog articles, turning long copy into infographics or videos, or SEO-optimizing past pieces, we keep your content fresh and up-to-date with the latest trends so that it drives engagement and SEO."
  },
  {
    id: 8,
    question: "How Do I Measure the ROI of Content Marketing?",
    answer: "Measuring the ROI of content marketing means monitoring metrics such as website traffic, engagement (shares, comments), conversion rates, lead generation, and sales. We deliver in-depth analytics and clear reporting to enable you to see the direct effect of your content strategy on business growth."
  },
  {
    id: 9,
    question: "How Does AI Impact Content Marketing Today?",
    answer: "AI plays a crucial part in content marketing by enhancing efficiency and targeting. AI-powered tools assist with content creation, personalization, and predictive analytics, enabling companies to provide more targeted content to the audience. AI is revolutionizing content optimization and decision-making for improved outcomes."
  },
  {
    id: 10,
    question: "Can Content Marketing Work for Small Businesses and Startups?",
    answer: "Yes, content marketing is a great strategy for startups and small businesses. With a customized approach, content marketing can create brand awareness, connect with your audience, and drive leads. It's an affordable method for smaller businesses to compete and expand in a competitive online market."
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
      <section className="w-full mb-5 bg-[#B3D3BB] h-[50vh] sm:h-[60vh] md:h-[75vh] lg:h-[90vh] flex items-center justify-start relative overflow-hidden rounded-[30px] mx-auto mt-6 max-w-[95%]">
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
                  className="w-full md:w-[55%] lg:w-[50%] xl:w-[60%] flex flex-col justify-start items-start space-y-4 md:space-y-4 lg:space-y-6 px-5 md:px-8 lg:px-12 overflow-hidden z-10"
                >
                  <motion.h1 
                    variants={itemVariants}
                    className='text-white font-medium text-[28px] sm:text-[34px] md:text-[50px] lg:text-[50px] xl:text-[60px] text-left leading-none md:leading-none tracking-tight mb-1 sm:mb-2 md:mb-2 self-start'
                  >
                    Elevate Your Brand with
                  </motion.h1>
                  <motion.h1 
                    variants={itemVariants}
                    className='text-[#4B7D57] font-medium text-[28px] sm:text-[34px] md:text-[50px] lg:text-[50px] xl:text-[60px] text-left leading-none md:leading-none tracking-tight mt-0 self-start'
                  >
                    Content Marketing<br/>Services in India​
                  </motion.h1>
                <div
                className="text-black text-sm sm:text-base md:text-lg lg:text-lg font-normal mt-3 sm:mt-4 md:mt-6 lg:mt-7 leading-[1.5] max-w-[95%] md:max-w-[95%] self-start">
                  Crafting Content That Connects, Converts, and Elevates Your Brand​
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
                    className="gap-2 md:gap-3 mt-6 md:mt-10 flex justify-center items-center self-start text-[#6a6a6a] text-xs sm:text-sm bg-gray-50 backdrop-blur-md lg:font-medium isolation-auto 
                    border-gray-50 before:absolute before:inset-0 before:w-0 before:h-full before:transition-all before:duration-500 before:bg-[#326B3F]
                    hover:text-gray-50 hover:before:w-full before:rounded-full before:-z-10 relative z-10 px-3 md:px-4 py-1.5 md:py-2 overflow-hidden border-2 rounded-full group tracking-wide w-fit"
                  >
                    Book a 30-Min Content Strategy Session
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
          
    </section>
    {/* challenges section */}
    <section>
      {/* Content Challenges Carousel Component */}
      {(() => {
        // Define content challenges data
        const contentChallenges = [
          {
            title: "Low Brand Visibility",
            description: "When your brand isn't getting seen, it won't be at the top of your mind. If low visibility is coupled with poor strategic content marketing services, your business can get pushed to the bottom of the pile after competitors. We produce meaningful, on-brand content to maximise visibility through your owned platforms, encouraging lasting recognition with your target audience."
          },
          {
            title: "No Qualified Leads",
            description: "Traffic doesn't mean much to you if it doesn't convert. A lot of unbranded or unfocused content tends to attract the wrong audience. As an established content marketing agency, we develop targeted, value-driven content for your ideal customer - generating higher-quality leads that finally convert."
          },
          {
            title: "Minimal Website Traffic",
            description: "Without consistent and optimised content, your website will remain hidden without any exposure. We focus on improving your discoverability, whether it's poor SEO strategies, irrelevant and random blogs or weak headlines. Everything we do is built around producing content that generates organic traffic to engage users, thereby improving overall reach and performance."
          },
          {
            title: "Dropping Sales Numbers",
            description: "If sales are declining, bad or irrelevant content could be the reason. You're not guiding users down the funnel if you don't have a standardised focused framework. We focus on delivering results through continuous conversion-focused storytelling to turn idle readers into consumers, helping to recover any lost revenue while increasing your ROI."
          },
          {
            title: "Poor Engagement & Conversions",
            description: "Great content is more than just seen; it's felt. Your engagement will be terrible if your content is not hitting home or catalysing an action. Our content generation services create unique, interactive, and conversion-focused content, which keeps your audience engaged and moving along steadily in your funnel."
          }
        ];

        // Define challenges carousel component
        function ChallengesCarousel() {
          const [current, setCurrent] = useState(0);
    
          const cardsPerPage = 3;
          const totalPages = Math.ceil(contentChallenges.length / cardsPerPage);
    
          const pagedChallenges = contentChallenges.slice(
            current * cardsPerPage,
            current * cardsPerPage + cardsPerPage
          );
    
          return (
            <section className="w-full md:mt-22 mt-12">
              {/* Title */}
              <h2 className="text-2xl md:text-3xl font-medium text-center mb-12">
                Is Your Business Struggling With These <span className='text-[#4B7D57]'><br/>Content Challenges?</span>
              </h2>
    
              {/* Cards */}
              <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl px-4 mx-auto">
                  {pagedChallenges.map((challenge, idx) => (
                    <div
                      key={challenge.title}
                      className="bg-white rounded-[24px] shadow-[#B3D3BB] border border-[#B3D3BB] flex flex-col items-center p-8 transition hover:shadow-lg"
                      style={{ height: "420px" }}
                    >
                      <div className="h-[80px] flex items-center justify-center mb-6">
                        <h3 className="text-2xl font-medium text-[#4B7D57] text-center">
                          {challenge.title}
                        </h3>
                      </div>
                      <div className="bg-[#D9E9DD] rounded-xl p-6 text-black text-center flex-1 overflow-auto">
                        <div className="flex items-center justify-center h-full">
                          <p className="text-sm">
                            {challenge.description}
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
        return <ChallengesCarousel />;
      })()}
    </section>
    {/* cta button */}
    <section className="w-full flex justify-center items-center md:mt-22 mt-12">
      <motion.button
        onClick={() => window.location.href = '/contact'}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-[#326B3F] text-white font-medium text-sm md:text-base rounded-lg transition-all duration-300 hover:shadow-lg"
      >
        Book a Free Consultation
      </motion.button>
    </section>

        <section>
                <div className='relative bg-[#429054]/20 mt-12 h-auto md:mt-22 flex justify-center items-center mx-auto py-4 md:py-4'>
                    <div className='max-w-screen-xl flex flex-col md:flex-row justify-between items-center mx-auto'>
                        {/* Image container - taking 35% width on medium screens and above */}
                        <div className='md:w-[35%] flex justify-center items-center mx-auto'>
                            <Image src="/gfxdesign.png" alt="Content Marketing Strategy" className='md:block hidden' width={300} height={300} priority />
                        </div>
                        
                        {/* Text container - taking 65% width on medium screens and above */}
                        <div className='md:w-[65%] flex-row justify-center items-center px-4 md:px-6 py-8 md:py-12'>
                            <h2 className='md:text-3xl text-xl font-medium text-black'>
                                Why Every Growing Business Needs a<span className='text-[#326B3F]'><br/>Strong Content Strategy</span>
                            </h2>
                            <p className='text-sm font-regular mt-6 text-[#6a6a6a]'>
                                A strong content marketing strategy is essential in today's digital-first landscape. However, whether you are a startup or a scaling brand, good content establishes trust, nurtures leads, and drives conversions. A dedicated content marketing agency like TransCurators will help you tell your story in an engaging and converting way.
                            </p>
                            <p className='text-sm font-regular mt-4 text-[#6a6a6a]'>
                                Here's what a robust strategy delivers:
                            </p>
                            <ul className='mt-6 space-y-4 text-sm'>
                                <li className='text-sm font-normal text-[#6a6a6a] flex items-center gap-2'>
                                    <span className='w-5 h-5 flex items-center justify-center rounded-full bg-[#326B3F] text-white'>
                                        <svg className="h-full p-0.5" viewBox="0 0 16 16" fill="currentColor">
                                            <path d="M6.5 10.7l-2.9-2.9-1.1 1.1 4 4 8-8-1.1-1.1z"></path>
                                        </svg>
                                    </span>
                                    <span>Consistent brand messaging across all channels</span>
                                </li>
                                <li className='text-sm font-normal text-[#6a6a6a] flex items-center gap-2'>
                                    <span className='w-5 h-5 flex items-center justify-center rounded-full bg-[#326B3F] text-white'>
                                        <svg className="h-full p-0.5" viewBox="0 0 16 16" fill="currentColor">
                                            <path d="M6.5 10.7l-2.9-2.9-1.1 1.1 4 4 8-8-1.1-1.1z"></path>
                                        </svg>
                                    </span>
                                    <span>Significantly more organic traffic thanks to your SEO-rich content</span>
                                </li>
                                <li className='text-sm font-normal text-[#6a6a6a] flex items-center gap-2'>
                                    <span className='w-5 h-5 flex items-center justify-center rounded-full bg-[#326B3F] text-white'>
                                        <svg className="h-full p-0.5" viewBox="0 0 16 16" fill="currentColor">
                                            <path d="M6.5 10.7l-2.9-2.9-1.1 1.1 4 4 8-8-1.1-1.1z"></path>
                                        </svg>
                                    </span>
                                    <span>Better engagement levels with your ideal audience</span>
                                </li>
                                <li className='text-sm font-normal text-[#6a6a6a] flex items-center gap-2'>
                                    <span className='w-5 h-5 flex items-center justify-center rounded-full bg-[#326B3F] text-white'>
                                        <svg className="h-full p-0.5" viewBox="0 0 16 16" fill="currentColor">
                                            <path d="M6.5 10.7l-2.9-2.9-1.1 1.1 4 4 8-8-1.1-1.1z"></path>
                                        </svg>
                                    </span>
                                    <span>Higher quality leads and conversion rates</span>
                                </li>
                                <li className='text-sm font-normal text-[#6a6a6a] flex items-center gap-2'>
                                    <span className='w-5 h-5 flex items-center justify-center rounded-full bg-[#326B3F] text-white'>
                                        <svg className="h-full p-0.5" viewBox="0 0 16 16" fill="currentColor">
                                            <path d="M6.5 10.7l-2.9-2.9-1.1 1.1 4 4 8-8-1.1-1.1z"></path>
                                        </svg>
                                    </span>
                                    <span>Consistent awareness and authority in your niche</span>
                                </li>
                            </ul>
                            <p className='text-sm font-regular mt-6 text-[#6a6a6a]'>
                                Without a strategy, you're just creating noise.
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
                    className="gap-2 md:gap-3 mt-6 md:mt-10 flex justify-center items-center self-start text-[#6a6a6a] text-xs sm:text-sm bg-gray-50 backdrop-blur-md lg:font-medium isolation-auto 
                    border-gray-50 before:absolute before:inset-0 before:w-0 before:h-full before:transition-all before:duration-500 before:bg-[#326B3F]
                    hover:text-gray-50 hover:before:w-full before:rounded-full before:-z-10 relative z-10 px-3 md:px-4 py-1.5 md:py-2 overflow-hidden border-2 rounded-full group tracking-wide w-fit"
                  >
                    Book a Free Consultation
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
                        </div>
                    </div>
                </div>
            </section>

    {/* cmarketing cards */}
    {(() => {
      // Define content marketing services data
      const ppcoffer = [
        {
          title: "Content Strategy Development",
          description: "We develop a content strategy that fulfils your organization's and people's goals, which are part of the consumer journey. The content we create, from keyword planning to content mapping, is planned so that one cohesive brand voice leverages your digital audience's attention and trust.",
          image: "/ppcoffer1.png"
        },
        {
          title: "Blog Writing",
          description: "Our professional blog writers create fact-based, relevant, engaging, and SEO-friendly articles unique to your readership. Each blog is based on facts and contains a clear message: to increase brand authority and organic traffic and generate leads and conversions through every blog post.",
          image: "/ppcoffer2.png"
        },
        {
          title: "Social Media Content",
          description: "We position specific social media content that spurs engagement and creates community. Whether reels, captions, or bulleted carousels, our team ensures relevancy and consistency for your brand across all social media platforms.",
          image: "/ppcoffer3.png"
        },
        {
          title: "Infographics and Visual Content",
          description: "Our designers help you grab all the attention, but satisfyingly, by changing complex information into easy-to-understand visual representations. Visual formats can be infographics or branded carousels to create a more memorable or recognizable message while improving user retention and social shares – ultimately improving how your brand is designed overall.",
          image: "/ppcoffer4.png"
        },
        {
          title: "Video Marketing",
          description: "We can develop engaging video content that distils all your messaging into engaging content in an easy-to-digest format. From script writing to editing, we do it all. Product explainer videos, brand story videos, or shorts on social media - our content will make you stand out in a video-first world and excel in your digital offerings.",
          image: "/ppcoffer5.png"
        },
        {
          title: "Content Distribution & Promotion",
          description: "Getting content published is only half the task. We will get your story in front of the right eye through SEO, targeted email marketing, influencer outreach and paid promotion, maximizing impact and ROI from every content piece created.",
          image: "/ppcoffer6.png"
        },
        {
          title: "Ad Copywriting",
          description: "We write concise, compelling ad copy that grabs attention and encourages clicks - from Google Ads to Social Media; our copy will increase your CTR, conversions, and overall advertising effectiveness.",
          image: "/ppcoffer7.png"
        },
        {
          title: "Newsletters and Email",
          description: "Our email campaigns aim to inform, engage, and convert your audience. Whether weekly updates, offers or onboarding sequences, our newsletters encourage action and drive engagement whilst building customer relationships.",
          image: "/ppcoffer8.png"
        }
      ];

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
             What We Offer in <span className='text-[#326B3F]'>Content Marketing Solutions</span>
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
       <section className="w-full flex justify-center items-center md:mt-22 mt-12">
      <motion.button
        onClick={() => window.location.href = '/contact'}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-[#326B3F] text-white font-medium text-sm md:text-base rounded-lg transition-all duration-300 hover:shadow-lg"
      >
        Book a Free Consultation
      </motion.button>
    </section>

    {/* why section */}
    {(() => {
      const benefits = [
        { title: "100% In-House Content Team", Content: "Our content is produced by a talented team of in-house writers, strategists, and designers, so you can trust us to provide quality, control, and consistency." },
        { title: "Results-Driven Strategy", Content: "Our content plans are based on measurable objectives so we can drive traffic, increase engagement, and generate high-quality leads that convert." },
        { title: "Multi-Industry Experience", Content: "We can produce content based on experience from multiple industries and create content that speaks directly to your ideal audience." },
        { title: "End-To-End Content Solutions", Content: "We manage the entire content journey from strategy and creation to publishing and optimisation, providing a seamless, stress-free marketing experience." },
        { title: "Content Backed by Analytics", Content: "We do not guess—we analyse. Our content creation is based on solid data and insights, and we optimise performance continuously." },
        { title: "Transparent Processes and Reporting", Content: "We provide full visibility into your campaigns through structured timelines, streamlined workflows, and comprehensive content performance and ROI metrics reporting." }
      ];

      function WhyTransCurators() {
        const [currentIndex, setCurrentIndex] = useState(0);

        // Auto-scroll functionality
        useEffect(() => {
          const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % benefits.length);
          }, 3000);

          return () => clearInterval(timer);
        }, []);

        return (
          <div className="flex flex-col lg:flex-row max-w-screen-xl mx-auto gap-6 my-14 md:my-24 px-4">
            {/* Title Section */}
            <div className="text-center lg:text-left flex lg:w-1/2">
              <div className="w-full overflow-hidden flex flex-col gap-2 justify-center">
                <h2 className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[42px] xl:text-[50px] font-bold text-black leading-tight">
                  Why Choose TransCurators<span className="text-[#326B3F]"><br/>for Content Marketing Services?</span>
                </h2>
              </div>
            </div>

            {/* Carousel Section */}
            <div className="relative flex flex-col overflow-hidden gap-6 justify-center items-center mx-auto lg:w-1/2 w-full">
              <div className="w-full flex justify-center items-center">
                <div className="relative w-full max-w-[450px] h-[280px] sm:h-[300px] md:h-[320px] flex justify-center items-center">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className={`absolute w-full max-w-[400px] mx-auto p-4 sm:p-6 bg-white shadow-lg rounded-lg flex flex-col items-center justify-center text-center transition-all duration-500 ${
                        index === currentIndex 
                          ? 'opacity-100 transform translate-x-0 scale-100' 
                          : index === (currentIndex - 1 + benefits.length) % benefits.length
                          ? 'opacity-40 transform -translate-x-full scale-90'
                          : index === (currentIndex + 1) % benefits.length
                          ? 'opacity-40 transform translate-x-full scale-90'
                          : 'opacity-0 transform translate-x-0 scale-90'
                      }`}
                      style={{
                        zIndex: index === currentIndex ? 10 : 1
                      }}
                    >
                      <h4 className="text-base sm:text-lg md:text-xl font-semibold text-[#326B3F] mb-3">
                        {benefit.title}
                      </h4>
                      <p className="text-xs sm:text-sm md:text-base text-[#444] leading-relaxed">
                        {benefit.Content}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pagination dots */}
              <div className="flex justify-center space-x-2">
                {benefits.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'bg-[#326B3F]' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        );
      }

      return <WhyTransCurators />;
    })()}

    {/* cards section */}
    {(() => {
      // Define content marketing process sections
      const sections = [
        {
          id: "01",
          title: "Research & Strategy Development",
          content: "We conduct an in-depth understanding of your business goals and objectives, identify your target audience, and check your competitors to plan a clear content marketing strategy that is data-driven and ensures your content will reach the right audience.",
          image: "/cmarket1.jpg"
        },
        {
          id: "02", 
          title: "Content Creation & Optimization",
          content: "Our talented and creative writers will produce high-quality, engaging content for you and then use the right SEO keywords, formats, and visuals to optimize it for the best possible reach, SEO value, and engagement/user experience.",
          image: "/cmarket2.jpg"
        },
        {
          id: "03",
          title: "Content Review & Quality Assurance", 
          content: "Before any content goes live, we ensure that each piece is carefully reviewed for proofreading, quality and fit to your voice. This will help ensure that published content exceeds expectations and ultimately improves content marketing effectiveness.",
          image: "/cmarket3.jpg"
        },
        {
          id: "04",
          title: "Distribution & Publishing",
          content: "To complete the circle of content marketing, we will push your content out across affiliated platforms via blogs, social media, and more to ensure content is being distributed strategically where your audiences hang out.",
          image: "/cmarket4.jpg"
        },
        {
          id: "05",
          title: "Tracking, Reporting & Optimization",
          content: "We use advanced tools to track the success of your content, analysing performance to make data-driven adjustments for continual improvement. Detailed reports keep you informed on content marketing ROI.",
          image: "/cmarket5.jpg"
        }
      ];

      function ScrollContentSection() {
        const [activeIndex, setActiveIndex] = useState(0);
        const activeSection = sections[activeIndex];

        return (
          <div className="md:mt-22 mt-12 relative">
            <section className="max-w-screen-xl mx-auto px-4">
              <h2 className="text-2xl md:text-3xl md:mb-16 mb-8 text-black font-medium text-center">
                Content Marketing Services <span className='text-[#326b3f]'>That Drive Results</span>
              </h2>
              <p className="text-center text-sm md:text-base text-[#6a6a6a] mb-8 md:mb-12 max-w-3xl mx-auto">
                Our content marketing services also focus on delivering the maximum impact. Below are the steps we take to drive measurable outcomes:
              </p>
              
              <div className="relative">
                <div className="rounded-lg overflow-hidden shadow-lg">
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
                            <Image
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
                </div>

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

      return <ScrollContentSection />;
    })()}

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
        5 Secret Strategies to <br />
        <span className="text-[#3c6446] font-medium">Skyrocket Your Business Online</span>
      </h1>
      <p className="text-[#6a6a6a] mb-8 sm:mb-12 md:mb-16 lg:mb-20 mt-6 sm:mt-10 md:mt-16 lg:mt-20 max-w-lg text-sm sm:text-base">
        Want to get more leads, create more engagement, and grow your business faster? Our digital marketing team have put together 5 critical tactics that achieve results for our clients. Fill in your details below, and we'll provide you with the information you can use to boost your online presence and help you grow.
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
                    Get Free Strategy Today
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

{/* testimonials */}
{(() => {
  const testimonials = [
    {
      name: "Indmoney",
      title: "Financial Technology Platform",
      text: "TransCurators helped us elevate our digital strategy with innovative content marketing solutions. Our brand visibility skyrocketed, and the qualified leads poured in. Highly recommended!",
      highlight: "⭐⭐⭐⭐⭐"
    },
    {
      name: "UpGrad",
      title: "Online Education Platform",
      text: "Working with TransCurators has been an absolute game-changer for us. Their tailored approach to content marketing helped us achieve substantial growth. We saw immediate results in our lead generation and online visibility.",
      highlight: "⭐⭐⭐⭐⭐"
    },
    {
      name: "Mindler",
      title: "Career Guidance Platform",
      text: "Thanks to TransCurators, Mindler's digital presence has reached new heights. Their end-to-end content marketing services helped us engage our audience more effectively and deliver results that matter.",
      highlight: "⭐⭐⭐⭐⭐"
    }
  ];

  function TestimonialSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextTestimonial = () => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
      setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    // Auto-rotate testimonials
    useEffect(() => {
      const interval = setInterval(() => {
        nextTestimonial();
      }, 5000);

      return () => clearInterval(interval);
    }, []);

    return (
      <section className="px-4 md:px-6">
        <div className="max-w-screen-2xl mx-auto md:mt-22 mt-12">
          <motion.div
            className="text-center mb-10 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mt-4">
              Testimonials
            </h2>

          </motion.div>

          <div className="flex flex-col max-w-screen-2xl items-center bg-white">
                                             <div className="flex items-center space-x-6">
              {/* Previous Arrow */}
              <button
                onClick={prevTestimonial}
                className="text-gray-400 hover:text-gray-600 text-2xl focus:outline-none"
                aria-label="Previous testimonial"
              >
                &lt;
              </button>
              {/* Testimonials */}
              {testimonials.map((testimonial, idx) => (
                <div
                  key={idx}
                  className={`transition-all duration-300 w-80 p-6 rounded-xl shadow-lg bg-white flex flex-col items-center
              ${idx === activeIndex ? "scale-105 z-10" : "opacity-50 scale-95"}
              ${idx === activeIndex ? "" : "hidden md:flex"}
            `}
                >
                  <div className="text-lg font-semibold">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm mb-3">{testimonial.title}</div>
                  <p className="text-center italic text-gray-700">{testimonial.text}</p>
                  <p className="text-xs text-[#326B3F] font-medium mt-4">{testimonial.highlight}</p>
                </div>
              ))}
              {/* Next Arrow */}
              <button
                onClick={nextTestimonial}
                className="text-gray-400 hover:text-gray-600 text-2xl focus:outline-none"
                aria-label="Next testimonial"
              >
                &gt;
              </button>
            </div>
            {/* Dots */}
            <div className="flex justify-center mt-6 md:mt-10 space-x-1">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer hover:opacity-80 ${activeIndex === idx ? 'w-10 bg-[#429054]/40' : 'w-4 bg-gray-400 hover:bg-gray-600'
                    }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return <TestimonialSection />;
})()}

<section className="w-full flex justify-center mt-12 md:mt-22 mb-8 px-2">
  <div className="w-full max-w-6xl bg-[#D9E9DD] rounded-[2.5rem] px-6 py-12 md:px-16 md:py-16 text-center">
     <h2 className="md:text-3xl text-2xl font-medium text-black">
          READY TO <span className="text-[#3c6446]">HELP</span>, READY TO <span className="text-[#3c6446]">GUIDE</span>
        </h2>
    <p className="text-[#3c6446] text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto font-sans mt-4">
        Book your free 30 - Min Growth session</p>
    <p className="text-[#6a6a6a] mt-4 text-sm md:text-base leading-relaxed max-w-4xl mx-auto font-sans">
As a passionate digital marketing team, we are here to listen, direct, and deliver. Schedule a free 30-minute strategy session today, and let's discuss how your business can grow, enhance your visibility online, and generate additional leads and sales through our customized digital marketing solutions. Let's accelerate your business' growth together. Doing things that make a tangible difference.    </p>

    <div href="/contact"
            className="cursor-pointer inline-flex mt-4 items-center text-sm justify-center px-3 py-1.5 border border-transparent rounded-md shadow-[0_0_10px_#CCE3DE] hover:shadow-[0_0_15px_#A8D5BA] font-medium bg-[#3c6446] text-white transition-shadow duration-300">Book Your Free 30-Min Growth Session</div>
  </div>
</section>

        
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
      <section className="w-full flex justify-center mt-12 md:mt-22 mb-8 px-2">
  <div className="w-full max-w-6xl bg-[#D9E9DD] rounded-[2.5rem] px-6 py-12 md:px-16 md:py-16 text-center">
     <h2 className="md:text-3xl text-2xl font-medium text-black">
          Have a question?
        </h2>
    <p className="text-[#6a6a6a] mt-4 text-sm md:text-base leading-relaxed max-w-4xl mx-auto font-sans">
We’re just one call away from helping you get started. Whether you have inquiries about our services or need assistance with your digital marketing strategy, we’re here to help
</p>
<p className="text-[#6a6a6a] mt-4 font-semibold text-sm md:text-base leading-relaxed max-w-4xl mx-auto font-sans">
 📞 Talk to us today at 7678144482
</p>

  </div>
</section>


    </div>
            

    </>
  );
}
export default ContentMarketing;

