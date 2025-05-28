"use client"
import { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Add animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};
const webdevservices = [
  {
    title: "Business Analysis & Consultation",
    description:
      "We conduct an in-depth analysis of your industry, objectives, and challenges to establish a roadmap that delivers results. Our consultants ensure consistent alignment between strategy and execution and help businesses link broad objectives to digital delivery. This is where we build the foundation to provide value in your website development services.",
  },
  {
    title: "UX & UI Design",
    description:
      "Design isn't just about aesthetics; it's about how the audience feels when interacting with your brand. Our design team creates beautiful, intuitive interfaces using several deliverables, such as wireframes, user flows, and prototypes. As a website designing agency, we aspire for clarity and success with every click rather than confusion.",
  },
  {
    title: "Front-End & Back-End Development",
    description:
      "We build finished designs using several modern frameworks such as React, Angular, and Vue.js. In addition, our back-end team builds a secure, clear, scalable and performance-evidenced stack using modern labels like Laravel, Django, Node.js, .net, etc. As a web development company, we consider best practices throughout our stack.",
  },
  {
    title: "API & Third-Party Integrations",
    description:
      "Data sync is important to a real-time user action, and we integrate interdependencies like CRMs, payment gateways, 3rd-party analytics, shipping APIS, etc., to ensure endless experiences for end users and their administrators. Regardless of your other technology, our web development efforts will ensure they are synced, and your systems are talking to one another.",
  },
  {
    title: "QA & Testing",
    description:
      "Before publicly launching your product, we ensure it has been through an exhaustive, manual and automated quality assurance process. We check for bugs, compatibility across browsers, mobile responsiveness, and security vulnerabilities. We build websites and applications that meet a high standard, which is why we are our clients' trusted web development company.",
  },
  {
    title: "Deployment & Support",
    description:
      "With our established Continuous Integration (CI) and Continuous Delivery (CD), we can seamlessly roll out your digital assets with no downtime. After launch, we monitor performance, security, and user engagement. When you partner with Transcurators, you have peace of mind knowing we are always creating long-term value and can provide you with ongoing support.",
  },
];


const processSteps = [
  {
    icon: "/i1.png",
    number: "01",
    title: "Discovery & Scoping",
    description: "All good websites start with a solid foundation. We evaluate your infrastructure, identify gaps, and define user goals, features, and technical specifications.",
  },
  {
    icon: "/i2.png",
    number: "02",
    title: "Design & Architecture",
    description: "Then, there is user experience design and system architecture. We create interactive wireframes and develop a scalable framework for expansion.",
  },
  {
    icon: "/i3.png",
    number: "03",
    title: "Agile Development",
    description: "During sprints, we develop and validate your solution incrementally. With agile delivery, we keep stakeholders informed and can remain agile.",
  },
  {
    icon: "/i4.png",
    number: "04",
    title: "Testing & Optimization",
    description: "We test across situations and devices to deliver flawless user experiences. We also optimize site speed and search ranking.",
  },
  {
    icon: "/i5.png",
    number: "05",
    title: "Deployment & Post-Launch Support",
    description: "Your launch is just the beginning. We provide continuous monitoring and proactive maintenance to future-proof your investment.",
  },
];
const steps = [
  {
    title: "Starting at ₹1.5 Lakhs / $2,000",
    description:
"This plan is best for startups and small businesses. Included is a custom-branded website with a robust content management system (CMS), and we champion fast and responsive design and basic SEO to ensure your digital presence can be live within 4–6 weeks"  },
  {
    title: "Starting at ₹5 Lakhs / $6,000",
    description:
      "This is an ideal plan for growing companies, and it includes feature-rich customer portals and interactive dashboards. This tier includes mid-level third-party integrations, smart workflows, and a more bespoke user experience to elevate your brand's functionality and performance.",
  },
  {
    title: "Starting at ₹15 Lakhs / $20,000",
    description:
      "We offer fully customised systems for enterprises requiring more complex solutions that incorporate advanced logic, custom APIs, automation tools, and scalable infrastructure. You'll get a dedicated development team and ongoing support to manage the product life cycle.",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const WebDevelopment = () => {
     const carouselRef = useRef(null);
        // Navigation functions
        const setsusapart = [
            {
              title: "Quality-First Approach",
              description:
                "We code each line with diligence. Whether you are creating a sophisticated application or business website, we make sure it performs flawlessly, is secure, and can scale up as per your business needs. Our web designing company never overlooks the details that matter the most.",
            },
            {
              title: "Agile & Flexible Delivery",
              description:
                "We conform to your work process. Whether agile sprints, fixed-price projects, or a dedicated development team, our process revolves around your convenience and project objectives. That is why we are a Web design company in Delhi that excels in flexibility.",
            },
            {
              title: "Transparent Communication",
              description:
                "With weekly update reports, collaborative software in real-time, and open feedback lines, you will always know the status of where your project stands. We're a web development service provider who cares that you stay in charge—at all times.",
            },
            {
              title: "Reliable Post-Launch Support",
              description:
                "From server monitoring to feature rollouts and bug fixes, our experts proactively support your site. Select a website development company that doesn't leave you hanging after launch for seamless long-term success.",
            },
          ];
          const faqs = [
            {
              question: "What sets Transcurators apart as a top web development company?",
              answer: "Transcurators offers tailored, high-performance solutions backed by strategy, design, and agile execution—making it a top web development company globally.",
              id: 1,
            },
            {
              question: "Does your company offer services as an Indian web design company?",
              answer: "Yes, we are a reputable web development company in India offering local expertise to global clients and world-class design.",
              id: 2,
            },
            {
              question: "How is a web development company different from a web design company?",
              answer: "A web design company is all about looks and UX, whereas a web development company deals with coding, backend, and technical work.",
              id: 3,
            },
            {
              question: "Do you create e-commerce sites as part of your website development services?",
              answer: "Indeed, our web solutions include e-commerce solutions that are intended to maximise speed, scalability, and conversion.",
              id: 4,
            },
            {
              question: "How can I select the appropriate website-designing firm for my project?",
              answer: "Seek experience, technical know-how, good communication, and client testimonials. Transcurators has all these credentials as a highly reputed company handling website design.",
              id: 5,
            },
            {
              question: "Do you provide web design services in Delhi?",
              answer: "Yes! We are trusted for website designing in Delhi, offering local support and full-service packages in various industries.",
              id: 6,
            },
            {
              question: "What technology stacks are used in website development services?",
              answer: "We utilise React, Angular, Node.js, Laravel, and others to provide sound web development services.",
              id: 7,
            },
            {
              question: "How long does a web development project usually take?",
              answer: "Typical sites are 4–6 weeks. More complex portals or systems may be 8–16 weeks, depending on complexity.",
              id: 8,
            },
            {
              question: "Are your services mobile responsive?",
              answer: "Yes, all of our websites are built to be responsive on all screen sizes and mobile-first.",
              id: 9,
            },
            {
              question: "How much do you charge?",
              answer: "We provide affordable pricing options beginning at ₹1.5 lakhs. Kindly do check our price page for detailed information.",
              id: 10,
            },
            {
              question: "Can you redo my current site?",
              answer: "Certainly! As a multifaceted web design firm, we provide redesign services that emphasise improved user experience, enhanced speed, and optimised search engine performance.",
              id: 11,
            },
            {
              question: "Are your solutions SEO-optimised?",
              answer: "Actually, all our web design work includes the best on-page SEO practices from the very beginning.",
              id: 12,
            },
            {
              question: "Do you offer support and maintenance post-launch?",
              answer: "Yes, our support plans include bug fixes, updates, and feature enhancements.",
              id: 13,
            },
            {
              question: "Can you design advanced educational or healthcare portals?",
              answer: "Yes. We have experience in high-compliance markets and are among the best web development service providers in high-compliance marketplaces.",
              id: 14,
            },
            {
              question: "Are trans curators well aligned to the needs of enterprise customers?",
              answer: "Yes! As an enterprise-focused website development company, we offer secure, scalable, and integrated systems.",
              id: 15,
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
            

            const solutionsData = {
    'Web Portals': {
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Secure, centralized, and simple to use—our web portals can be utilized to serve internal employees, external customers, or vendor communities. A student portal, supplier login, or customer dashboard is exactly what you require, and we create simple-to-use experiences for every audience.',
      featuresTitle: 'Key features include:',
      features: [
        'Custom integrations (ERPs, CRMs, APIs)',
        'Role-based access controls',
        'Scalable architecture'
      ],
      conclusion: 'Being a professional website designing agency, we ensure that all portals provide form and function.'
    },
    'Corporate Websites': {
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Emphasize your brand identity and turn visitors into customers with professionally designed corporate websites. Fast and search engine optimized, they are easy to maintain and deliver great user experiences.',
      featuresTitle: 'Core highlights:',
      features: [
        'Fast load speeds',
        'Accessibility standards compliance',
        'SEO-optimised pages'
      ],
      conclusion: 'Choose Transcurators as your Indian web design organization to be at the top of the challenging online business environment.'
    },
    'Ecommerce Solutions': {
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'From payment gateway integrations to catalogue management, we build scalable ecommerce sites. Whether you are an upstart D2C challenger or a longtime retailer, our customized solutions generate sales and engagement.',
      featuresTitle: 'Capabilities include:',
      features: [
        'Omnichannel features',
        'Third-party integrations (shipping, tax, inventory)',
        'Mobile-first design'
      ],
      conclusion: 'Regardless of your product or audience size, our website development company provides ecommerce growth.'
    },
    'Web Applications': {
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Our custom-built web apps solve complex business challenges and enhance digital service delivery. Whether it\'s a CRM, internal tool, or booking system, our apps are performance-optimised and easy to scale.',
      featuresTitle: 'Popular use cases:',
      features: [
        'SaaS applications',
        'Admin dashboards',
        'Workflow automation systems'
      ],
      conclusion: 'With Transcurators, a trusted web development service provider, you get apps that work as hard as you do.'
    }
  };
  

  const [activeTab, setActiveTab] = useState('Web Portals');
  const currentSolution = solutionsData[activeTab];
          
        const services = [
            {
              title: "Web Portals",
              points: [
                "Secure, centralized, and simple to use—our web portals can be utilized to serve internal employees, external customers, or vendor communities.",
                "A student portal, supplier login, or customer dashboard is exactly what you require, and we create simple-to-use experiences for every audience.",
                "Key features include: Custom integrations (ERPs, CRMs, APIs)",
                "Role-based access controls",
                "Scalable architecture",
                "Being a professional website designing agency, we ensure that all portals provide form and function."
              ],
            },
            {
              title: "Corporate Websites",
              points: [
                "Emphasize your brand identity and turn visitors into customers with professionally designed corporate websites.",
                "Fast and search engine optimized, they are easy to maintain and deliver great user experiences.",
                "Core highlights: Fast load speeds",
                "Accessibility standards compliance",
                "SEO-optimised pages",
                "Choose Transcurators as your Indian web design organization to be at the top of the challenging online business environment."
              ],
            },
            {
              title: "Ecommerce Solutions",
              points: [
                "From payment gateway integrations to catalogue management, we build scalable ecommerce sites.",
                "Whether you are an upstart D2C challenger or a longtime retailer, our customized solutions generate sales and engagement.",
                "Capabilities include: Omnichannel features",
                "Third-party integrations (shipping, tax, inventory)",
                "Mobile-first design",
                "Regardless of your product or audience size, our website development company provides ecommerce growth."
              ],
            },
            {
              title: "Web Applications",
              points: [
                "Our custom-built web apps solve complex business challenges and enhance digital service delivery.",
                "Whether it's a CRM, internal tool, or booking system, our apps are performance-optimised and easy to scale.",
                "Popular use cases: SaaS applications",
                "Admin dashboards",
                "Workflow automation systems",
                "With Transcurators, a trusted web development service provider, you get apps that work as hard as you do."
              ],
            }
          ];
          const Pricing = [ 
            {
              number: "Starting at ₹1.5 Lakhs / $2,000",
              title: "Startup & Small Business Plan",
              description:
                "This plan is best for startups and small businesses. Included is a custom-branded website with a robust content management system (CMS), and we champion fast and responsive design and basic SEO to ensure your digital presence can be live within 4–6 weeks.",
            },
            {
              number: "Starting at ₹5 Lakhs / $6,000",
              title: "Growth Plan for Scaling Brands",
              description:
                "This is an ideal plan for growing companies, and it includes feature-rich customer portals and interactive dashboards. This tier includes mid-level third-party integrations, smart workflows, and a more bespoke user experience to elevate your brand's functionality and performance.",
            },
            {
              number: "Starting at ₹15 Lakhs / $20,000",
              title: "Enterprise-Grade Custom Solutions",
              description:
                "We offer fully customised systems for enterprises requiring more complex solutions that incorporate advanced logic, custom APIs, automation tools, and scalable infrastructure. You'll get a dedicated development team and ongoing support to manage the product life cycle.",
            },
          ];
          
          const Process = [
            {
              number: 1,
              title: "Discovery & Scoping",
              description:
                "All good websites start with a solid foundation. We evaluate your infrastructure, identify gaps, and define user goals, features, and technical specifications.",
            },
            {
              number: 2,
              title: "Design & Architecture",
              description:
                "Then, there is user experience design and system architecture. We create interactive wireframes and develop a scalable framework for expansion.",
            },
            {
              number: 3,
              title: "Agile Development",
              description:
                "During sprints, we develop and validate your solution incrementally. With agile delivery, we keep stakeholders informed and can remain agile.",
            },
            {
              number: 4,
              title: "Testing & Optimization",
              description:
                "We test across situations and devices to deliver flawless user experiences. We also optimize site speed and search ranking.",
            },
            {
              number: 5,
              title: "Deployment & Post-Launch Support",
              description:
                "Your launch is just the beginning. We provide continuous monitoring and proactive maintenance to future-proof your investment.",
            },
          ];
          
          
    const goToSlide = (slideIndex) => {
        setCurrentSlide(slideIndex);
    };
    const [currentSlide, setCurrentSlide] = useState(0);
    
    // Split services into chunks for carousel
    const chunkedServices = [];
    for (let i = 0; i < services.length; i += 4) {
        chunkedServices.push(services.slice(i, i + 4));
    }
    
    // Handle carousel navigation
    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev === chunkedServices.length - 1 ? 0 : prev + 1));
    }, [chunkedServices.length]);
    
    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev === 0 ? chunkedServices.length - 1 : prev - 1));
    }, [chunkedServices.length]);
    
    // Auto-rotate carousel (optional)
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000); // Change slide every 5 seconds
        
        return () => clearInterval(interval);
    }, [nextSlide]); // Add nextSlide to the dependency array

    return (
        <>

            {/* Hero Section */}
<section className="w-full mb-5 bg-[#B3D3BB] h-[50vh] sm:h-[60vh] md:h-[75vh] lg:h-[90vh] flex items-center justify-center relative overflow-hidden rounded-[30px] mx-auto mt-6 max-w-[95%]">
      {/* Radial Gradient Overlay */}
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
              className="w-full md:w-[55%] lg:w-[50%] xl:w-[45%] flex flex-col justify-center space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 px-5 md:px-8 lg:px-12 overflow-hidden z-10"
            ><motion.h1 
                variants={itemVariants}
                className='text-white font-medium text-[28px] sm:text-[34px] md:text-[50px] lg:text-[50px] xl:text-[60px] text-left leading-none md:leading-none tracking-tight max-w-[95%] md:max-w-[95%] mb-1 sm:mb-2 md:mb-3'
              >
                Web Development Services – Crafting 
              </motion.h1>
              <motion.h1 
                variants={itemVariants}
                className='text-[#4B7D57] font-medium text-[28px] sm:text-[34px] md:text-[50px] lg:text-[50px] xl:text-[60px] text-left leading-none md:leading-none tracking-tight max-w-[95%] md:max-w-[95%] mt-0'
              >Custom Web Experiences That Perform
              </motion.h1>
              <div
                className="text-black text-sm sm:text-base md:text-lg lg:text-lg font-normal mt-3 sm:mt-4 md:mt-6 lg:mt-7 leading-[1.5] max-w-[95%] md:max-w-[95%]">
                 Empower your brand with TransCurators — a web development company crafting scalable, high-performance websites.
                </div><motion.button
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
                Contact Us
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
             <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="hidden md:flex justify-center items-center md:w-[45%] lg:w-[50%] xl:w-[55%] relative"
            >
              <Image
                className='max-w-[100%] md:max-w-[90%] lg:max-w-[95%] xl:max-w-[90%] h-auto object-contain mt-10 ml-10'
                src="/webdevhero.png"
                alt="Landing Page Hero"
                width={500}
                height={200}
                priority
              />
            </motion.div>
</section>   
<section>
              <div className='w-full bg-[#429054]/20 mt-12 md:mt-22 py-8 md:py-16'>
                {/* Centered heading */}
                <div className='text-center mb-8'>
                    <h3 className='md:text-3xl text-2xl font-medium text-black'>
                        Why Choose TransCurators for
                        <span className='md:text-3xl text-2xl font-medium text-[#326B3F]'> Web Development
                        </span>
                    </h3>
                </div>
                
                {/* Content container */}
                <div className='max-w-screen-xl mx-auto px-4 w-full'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            {/* Box 1 */}
                            <div className='bg-white rounded-3xl p-8 shadow-lg border border-gray-100 transition-all hover:shadow-xl'>
                                <h4 className='text-lg font-medium text-[#1B223C] mb-4 text-center'>Genuine Partner, Not Just a Vendor</h4>
                                <p className='text-sm font-regular text-[#6a6a6a] text-center'>
                                    Transcurators offers much more than coding—we get to know your business objectives and work alongside your internal teams. Utilizing clear communication and a user-first ideology, we facilitate and listen to your goals above all else, making technical solutions aligned with your business strategy. As a trustworthy, reliable web design company, we are committed to providing genuine value through collaboration, not just delivery.<br/><br/>

                                    Each project will benefit from an agile approach, fast feedback loops, and a problem-solving mindset. We're more than just a website development company—your digital growth partner.
                                </p>
                            </div>

                            {/* Box 2 */}
                            <div className='bg-white rounded-3xl p-8 shadow-lg border border-gray-100 transition-all hover:shadow-xl'>
                                <h4 className='text-lg font-medium text-[#1B223C] mb-4 text-center'>Full-Cycle Development with Measurable Results</h4>
                                <p className='text-sm font-regular text-[#6a6a6a] text-center'>
                                    Our holistic approach ensures we provide support at each stage, from concept to post-launch maintenance. Our team will work on strategy, design, coding, testing, implementation and monitoring - all of it! Over 100 customized web solutions across ecommerce, healthcare, education and corporate have been released by our team. We remain your go-to web development company for brands that demand measurable performance and ongoing support.
                                </p>
                            </div>
                        </div>
                    </div>
            </div>
</section>
<section>
      <div className="w-full md:mt-22 mt-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-3xl font-medium text-[#1B223C] mb-4">
            Custom Web Solutions{' '}
            <span className="text-[#3c6446]">We Build</span>
          </h1>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {Object.keys(solutionsData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 font-medium transition-all duration-200 border-b-2 ${
                activeTab === tab
                  ? 'text-[#4B7D57] border-[#4B7D57]'
                  : 'text-[#1B223C] border-transparent hover:text-[#4B7D57] hover:border-[#4B7D57]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Image Section */}
            <div className="relative h-64 lg:h-auto">
              <Image
                src={currentSolution.image}
                alt={activeTab}
                width={1000}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="p-8 lg:p-10">
              <div className="space-y-6">
                <p className="text-[#6a6a6a] leading-relaxed">
                  {currentSolution.description}
                </p>

                <div>
                  <h3 className="text-[#6a6a6a] mb-3">{currentSolution.featuresTitle}</h3>
                  <ul className="space-y-2">
                    {currentSolution.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-1 h-1 bg-[#6a6a6a] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-[#6a6a6a]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-[#6a6a6a] leading-relaxed">
                  {currentSolution.conclusion}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
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
            Web Development{" "}
            <span className="text-[#3c6446]">Services We Offer</span>
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
      <div className="text-center mb-8 space-y-4 mt-12 md:mt-22 max-w-screen-xl mx-auto">
                <h2 className="text-2xl md:text-3xl text-center mb-2">
                    Our Process: Built for<span className='text-[#3c6446]'> Transparency & Efficiency</span>
                </h2>
            </div>
            <section className="md:mt-22 mt-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {processSteps.map((step, idx) => (
          <div className="flex flex-col md:flex-row items-start md:items-stretch gap-4 md:gap-8 mb-8" key={idx}>
            {/* Mobile-first layout: Stack the elements in a column for mobile */}
            <div className="flex md:hidden w-full items-center mb-4">
              {/* Icon & Step Number Combined for Mobile */}
              <div className="flex items-center justify-center min-w-[80px] min-h-[80px] border-2 md:border-3 border-[#B3D3BB] bg-white rounded-xl mr-4">
                <Image
                  src={step.icon}
                  alt={step.title}
                  width={400}
                  height={300}
                  className="w-5 h-5 md:w-7 md:h-7 object-contain"
                />
              </div>
              <span className="text-[36px] md:text-[48px] font-bold text-[#B3D3BB] leading-none select-none">{step.number}</span>
            </div>
            
            {/* Desktop layout elements */}
            {/* Icon Box - Hidden on Mobile */}
            <div className="hidden md:flex items-center justify-center min-w-[110px] min-h-[110px] border-3 border-[#B3D3BB] bg-white 
                rounded-tl-2xl rounded-bl-2xl rounded-tr-none rounded-br-none">
              <Image
                src={step.icon}
                alt={step.title}
                width={400}
                height={300}
                className="w-7 h-7 object-contain"
              />
            </div>
            
            {/* Step Number - Hidden on Mobile */}
            <div className="hidden md:flex items-center">
              <span className="text-[48px] font-bold text-[#B3D3BB] leading-none select-none">{step.number}</span>
            </div>
            
            {/* Content Box */}
            <div className="flex-1 border-2 md:border-3 border-[#B3D3BB] rounded-xl md:rounded-tl-none md:rounded-bl-none md:rounded-tr-2xl md:rounded-br-2xl bg-white flex flex-col justify-center px-4 md:px-8 py-4 md:py-6">
  <div className="font-semibold text-base md:text-lg lg:text-xl mb-1">{step.title}</div>
  <div className="text-gray-700 text-sm md:text-base">{step.description}</div>
  {step.bullets && step.bullets.length > 0 && (
    <ul className="list-disc pl-5 mt-2 space-y-1">
      {step.bullets.map((point, idx) => {
        const match = point.match(/^([^:]+:)(.*)$/);
        return (
          <li key={idx} className="text-gray-700 text-sm md:text-base">
            {match ? (
              <>
                <span className="font-semibold">{match[1]}</span>
                {match[2]}
              </>
            ) : (
              point
            )}
          </li>
        );
      })}
    </ul>
  )}
</div>

          </div>
        ))}
      </div>
    </section>
    <section className="w-full md:mt-22 mt-12">
      {/* Title */}
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-medium">
          Real <span className="text-[#3c6446]">Results</span>, Real <span className="text-[#3c6446]">Clients</span>
        </h2>
        <p className="mt-4 text-[#6a6a6a] max-w-3xl mx-auto">
          At TransCurators, we create more than digital products; we build solutions that deliver measurable results. Our clients have enjoyed better performance, scalability, and user engagement, from startup companies to enterprises. User-centred design and strong development are important to our success stories.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {/* Card 1 */}
        <div className="bg-white border border-[#B3D3BB] rounded-2xl shadow-sm flex flex-col h-full p-4 transition hover:shadow-lg">
          <Image
            src="/rc1.png"
            alt="High-Growth Ecommerce Platform"
            className="rounded-xl w-full h-48 object-cover mb-4"
            width={500}
            height={500} 
          />
          <h3 className="font-semibold text-[#6a6a6a] text-lg mb-2">High-Growth Ecommerce Platform</h3>
          <p className="text-[#6a6a6a] text-sm">
            We worked with an emerging D2C brand to redesign their ecommerce platform. The outcome? Page speed improved by 300%, and conversion rates improved by 45%. The platform integrated seamlessly with ERP systems, customer relationship tools, and multiple payment gateway options, enabling better operational efficiency and real-time data flow.
          </p>
        </div>
        {/* Card 2 */}
        <div className="bg-white border border-[#B3D3BB] rounded-2xl shadow-sm flex flex-col h-full p-4 transition hover:shadow-lg">
          <Image
            src="/rc2.png"
            alt="Custom CRM for Healthcare Startup"
            className="rounded-xl w-full h-48 object-cover mb-4"
            width={500}
            height={500} 
          />
          <h3 className="font-semibold text-[#6a6a6a] text-lg mb-2">Custom CRM for Healthcare Startup</h3>
          <p className="text-[#6a6a6a] text-sm">
            A healthcare tech startup contacted us to develop a custom CRM for their workflow. This solution eliminated more than 80% of their manual data entry, made onboarding patients easier, and allowed them to communicate securely while being HIPAA-compliant. CRM was developed with a modular architecture to scale as it grows.
          </p>
        </div>
        {/* Card 3 */}
        <div className="bg-white border border-[#B3D3BB] rounded-2xl shadow-sm flex flex-col h-full p-4 transition hover:shadow-lg">
          <Image
            src="/rc3.png"
            alt="More Client Wins"
            width={400}
            height={300}
            className="rounded-xl w-full h-48 object-cover mb-4" 
          />
          <h3 className="font-semibold text-[#6a6a6a] text-lg mb-2">More Client Wins</h3>
          <p className="text-[#6a6a6a] text-sm">
            We have empowered edtech platforms to automate enrollment, supported finance companies in securing their portals, and created multilingual websites for global NGOs. Our results demonstrate why brands rely on us as their trusted web development partner.
          </p>
        </div>
      </div>
    </section>
    <div className="relative md:mt-22 mt-12">
      {/* Green bar spanning full width */}
      <div className="absolute top-0 left-0 w-screen h-55 bg-[#D9E9DD] -z-10" />
      <div className="max-w-7xl mx-auto px-4 pt-12 pb-8">
        <h2 className="text-2xl md:text-3xl text-center mb-6">
          Transparent Pricing for Every Stage of Growth
        </h2>
        <p className="text-[#6a6a6a] text-sm mt-4 text-center mx-auto max-w-3xl">
          At Transcurators, we value straightforward, upfront pricing that corresponds with your business goals and its current growth stage. Whether working towards your first website or scaling to an enterprise-grade system, our pricing is flexible to ensure you can receive value without the hidden surprises.         </p>
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-4">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl mt-3 shadow-md px-6 py-8 flex-1 min-w-[220px] max-w-xs mx-auto"
            >
              <div className="font-semibold text-lg mb-2 text-center">{step.title}</div>
              <div className="text-gray-500 text-sm text-center">{step.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
        <div className="w-full bg-[#e5efe5] py-20 mb-20 md:mt-22 mt-12">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <h2 className="md:text-3xl text-xl font-medium text-black">
          Want a tailored quote that fits your exact needs?
        </h2>
         <div href="/contact"
            className="cursor-pointer inline-flex mt-4 items-center text-sm justify-center px-3 py-1.5 border border-transparent rounded-md shadow-[0_0_10px_#CCE3DE] hover:shadow-[0_0_15px_#A8D5BA] font-medium bg-[#3c6446] text-white transition-shadow duration-300">Request a Free Estimate</div>
      </div>
    </div>
    <div className="text-center mb-16 mt-12 md:mt-22 space-y-4">
        <h2 className="md:text-3xl text-xl mt-4 font-medium">
          Industries We{' '}
          <span className="text-[#326B3F]">Serve</span>
        </h2>
        <p className="text-[#6a6a6a] text-sm mt-4">
Transcurators, a top web development company and website designing agency, serves various industries through its high-performance, <br/>customized web solutions. Our skilled teams offer world-class website development services and website designing services that<br/> are carefully designed to meet the unique requirements of various industries.
        </p>
      </div>
    <section className="md:mt-22 mt-12">
  <div className="max-w-screen-lg mx-auto px-4 sm:px-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
<div className="relative col-span-1 sm:col-span-2 rounded-lg shadow-sm overflow-hidden bg-cover bg-center h-36 sm:h-40 md:h-64" style={{ backgroundImage: 'url(/ind1.png)' }}>
  <div className="absolute bottom-0 left-0 w-full bg-[#D9E9DD] py-1 sm:py-2 text-center px-2">
    <span className="text-[#3c6446] font-bold sm:text-base block">Ecommerce & Retail</span>
    <p className="text-[#6a6a6a] text-xs sm:text-xs mt-1 leading-snug">
We are a website development company known for creating scalable, mobile-first e-commerce sites that drive traffic and conversion. Our hallmark includes smooth integrations and intuitive interfaces.</p>
  </div>
</div>
<div className="relative rounded-lg shadow-sm overflow-hidden bg-cover bg-center h-36 sm:h-40 md:h-64" style={{ backgroundImage: 'url(/ind2.png)' }}>
  <div className="absolute bottom-0 left-0 w-full bg-[#D9E9DD] py-1 sm:py-2 text-center px-2">
    <span className="text-[#3c6446] font-bold sm:text-base block">Healthcare & Wellness</span>
    <p className="text-[#6a6a6a] text-xs sm:text-xs mt-1 leading-snug">
Our web design company builds HIPAA-compliant patient portals, telemedicine platforms, and scheduling systems that enhance the delivery of care and safeguard sensitive data.</p>
  </div>
</div>
<div className="relative rounded-lg shadow-sm overflow-hidden bg-cover bg-center h-36 sm:h-40 md:h-64" style={{ backgroundImage: 'url(/ind3.png)' }}>
  <div className="absolute bottom-0 left-0 w-full bg-[#D9E9DD] py-1 sm:py-2 text-center px-2">
    <span className="text-[#3c6446] font-bold sm:text-base block">Finance & Insurance</span>
    <p className="text-[#6a6a6a] text-xs sm:text-xs mt-1 leading-snug">
From compliant dashboards to payment gateways, our web development capabilities power fintech innovation with regulatory compliance and data protection.
</p>
  </div>
</div>
      {/* Row 2 */}
<div className="relative rounded-lg shadow-sm overflow-hidden bg-cover bg-center h-36 sm:h-40 md:h-64" style={{ backgroundImage: 'url(/ind4.png)' }}>
  <div className="absolute bottom-0 left-0 w-full bg-[#D9E9DD] py-1 sm:py-2 text-center px-2">
    <span className="text-[#3c6446] font-bold sm:text-base block">Logistics & Manufacturing</span>
    <p className="text-[#6a6a6a] text-xs sm:text-xs mt-1 leading-snug">
Our Delhi-based web development company offers strong systems of inventory management, vendor management, and logistics monitoring.
    </p>
  </div>
</div>

<div className="relative rounded-lg shadow-sm overflow-hidden bg-cover bg-center h-36 sm:h-40 md:h-64" style={{ backgroundImage: 'url(/ind5.png)' }}>
  <div className="absolute bottom-0 left-0 w-full bg-[#D9E9DD] py-1 sm:py-2 text-center px-2">
    <span className="text-[#3c6446] font-bold sm:text-base block">Travel & Hospitality</span>
    <p className="text-[#6a6a6a] text-xs sm:text-xs mt-1 leading-snug">
As a web design company in India, we create robust booking engines and multilingual portals that streamline customer journeys and boost direct bookings.</p>
  </div>
</div>

<div className="relative col-span-1 sm:col-span-2 rounded-lg shadow-sm overflow-hidden bg-cover bg-center h-36 sm:h-40 md:h-64" style={{ backgroundImage: 'url(/ind6.png)' }}>
  <div className="absolute bottom-0 left-0 w-full bg-[#D9E9DD] py-1 sm:py-2 text-center px-2">
    <span className="text-[#3c6446] font-bold sm:text-base block">Education & eLearning</span>
    <p className="text-[#6a6a6a] text-xs sm:text-xs mt-1 leading-snug">
With our website development services, we provide LMS systems, online test software, and virtual classrooms that enable easier access and interaction with education.</p>
  </div>
</div>
  </div>
  </div>
</section>
 <div className="text-center mb-16 mt-12 md:mt-22 space-y-4">
        <h2 className="md:text-3xl text-xl mt-4 font-medium">
          What Sets Us{' '}
          <span className="text-[#326B3F]">Apart</span>
        </h2>
        <p className="text-[#6a6a6a] text-sm mt-4">
        Being a professional web development company and web design company, Transcurators does not simply create websites—<br/>we create scalable, reliable, and future-proof digital experiences. Here's why we stand out in the crowded website designing services and website development services field.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-0 md:gap-22">
      {/* Splitting content into two equal columns */}
      {[0, 1].map((colIndex) => (
        <div key={colIndex} className="space-y-4 max-w-md">
          {setsusapart
            .slice(colIndex * 2, colIndex * 2 + 2) // Split into two groups of 3
            .map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white md:p-4 p-1 rounded-lg transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-gray-100"
              >
                <h3 className="font-semibold text-lg text-[#326B3F]">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
        </div>
      ))}
    </div>
     <section className="max-w-screen-xl mx-auto md:mt-22 mt-12 mb-16">
      <div className="text-center mb-16">
        <h2 className="md:text-3xl text-xl mt-4 font-medium">
          Client <span className="text-[#326B3F]">Testimonials</span>
        </h2>
        <p className="text-[#6a6a6a] text-sm mt-4 max-w-2xl mx-auto">
          At TransCurators, we pride ourselves on being more than just a web development company — we are a reliable digital partner. Our clients across industries trust our website development services and website designing services to turn ideas into high-performing digital products.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Testimonial 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transform transition-all duration-300 hover:-translate-y-2">
          <p className="text-[#6a6a6a] text-sm italic mb-6">
            "TransCurators turned our vision into a fully functional web app with precision and professionalism. A reliable partner from day one."
          </p>
          <div className="mt-auto">
            <p className="font-semibold text-[#1b223c]">CTO, Healthcare Startup</p>
            <p className="text-xs text-[#6a6a6a]">(Website built using scalable architecture and HIPAA compliance features)</p>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transform transition-all duration-300 hover:-translate-y-2">
          <p className="text-[#6a6a6a] text-sm italic mb-6">
            "They made the complex simple. Our ecommerce site now runs faster and converts better thanks to their structured and scalable approach."
          </p>
          <div className="mt-auto">
            <p className="font-semibold text-[#1b223c]">Head of Marketing, D2C Brand</p>
            <p className="text-xs text-[#6a6a6a]">(Custom ecommerce platform delivered by a top web design company India)</p>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transform transition-all duration-300 hover:-translate-y-2">
          <p className="text-[#6a6a6a] text-sm italic mb-6">
            "Professional, communicative, and technically sound — exactly what we needed in a Web Designing Company in Delhi. Their team delivered a robust portal that exceeded expectations."
          </p>
          <div className="mt-auto">
            <p className="font-semibold text-[#1b223c]">Founder, EdTech Platform</p>
            <p className="text-xs text-[#6a6a6a]">(Seamless UX design and backend development)</p>
          </div>
        </div>
      </div>
      <div className="w-full py-8 mb-20 md:mt-22 mt-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="md:text-3xl text-xl font-medium text-black">
          Looking for a website designing agency
        </h2>
        <p className="md:text-3xl ml-2 text-xl font-medium justify-center text-[#326B3F]">
        that delivers measurable impact?
        </p>
        <div className="mt-8">
          <a
            href="/careers"
            className=" cursor-pointer inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-[0_0_10px_#CCE3DE] hover:shadow-[0_0_15px_#A8D5BA] font-medium text-base bg-white text-gray-500 transition-shadow duration-300"
            >
            Partner with us today
          </a>
        </div>
      </div>
    </div>
    </section>
      {/* 2 case study + one paragraph section */}
    
      <section className="relative bg-[#429054]/20 py-10 md:py-16 mt-8 md:mt-22 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Image on the left */}
          <div className="w-full md:w-5/12">
            <Image
              src="/buildtgther.png"
              alt="Let's Build Together"
              width={500}
              height={400}
              className="w-full h-auto"
            />
          </div>
          
          {/* Content on the right */}
          <div className="w-full md:w-7/12">
            <h2 className="text-2xl md:text-3xl mb-6">
              Let's build something
              <span className="text-black"> Great Together</span>
            </h2>
            
            <div className="text-[#6a6a6a]">
              <p className="mb-4">
                Whether you are launching a new platform, redesigning an existing system, or simply looking to refresh your existing digital presence — Transcurators is here for you. We're a high-rated website development company and web design company that delivers personalized digital solutions that drive growth, performance, and ROI.
              </p>

              <p className="mb-4">
                Our expertise crosses industries and project sizes — from high-energy corporate sites to large enterprise applications. Whether your business is in healthcare, ecommerce, education, or travel, our team has the technical know-how and creative passion to take your project to success. We're not just another web designing company in Delhi — your technology partner for the long haul.
              </p>

              <p className="mb-4">
                Let's construct thoughtful, scalable, and conversion-focused platforms together. Start by choosing the engagement that suits you best:
              </p>              
              <div className="mb-4 space-y-3">
                <div className="flex items-start">
                  <span className='w-5 h-5 flex items-center justify-center rounded-full bg-[#326B3F] text-white mr-3'>
                <svg className="h-full p-0.5" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M6.5 10.7l-2.9-2.9-1.1 1.1 4 4 8-8-1.1-1.1z"></path>
                  </svg>
                  
                </span>
                  <p>
                <span className="underline font-semibold">Request a Quote</span><br/>Get a personalised estimate from our experts.</p>
                </div>
                <div className="flex items-start">
                 <span className='w-5 h-5 flex items-center justify-center rounded-full bg-[#326B3F] text-white mr-3'>
                <svg className="h-full p-0.5" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M6.5 10.7l-2.9-2.9-1.1 1.1 4 4 8-8-1.1-1.1z"></path>
                  </svg>
                  
                </span>
                  <p><span className="underline font-semibold">Schedule a Call</span><br/>Let's discuss your vision, challenges, and timelines.</p>
                </div>
                <div className="flex items-start">
                  <span className='w-5 h-5 flex items-center justify-center rounded-full bg-[#326B3F] text-white mr-3'>
                <svg className="h-full p-0.5" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M6.5 10.7l-2.9-2.9-1.1 1.1 4 4 8-8-1.1-1.1z"></path>
                  </svg>
                  
                </span>
                  <p><span className="underline font-semibold">Start a Project</span><br/>Ready to begin? Let's build something amazing!</p>
                </div>
              </div>

              <p>
                Trust a website designing agency that combines strategy, creativity, and technology to bring your ideas to life.
              </p>
              
         
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* testimonial section */}
   
            <div className='max-w-screen-xl flex justify-center md:mt-22 mt-12 mb-10 mx-auto items-center'>     
        <div className='text-center flex-row'>
            <p className='text-md text-[#326B3F] font-regular'>FAQ&apos;s</p>
            <p className='md:text-3xl text-xl text-black font-medium mt-4'>
            Frequently Asked<span className='text-[#326B3F]'> Questions</span>
            </p>
        </div>
      </div>

    <div className="max-w-screen-xl mx-auto p-6">
    
      <div className="grid grid-cols-1 md:grid-cols-2 cursor-pointer gap-8">
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
          className="overflow-hidden transition-all duration-500"
          style={{
            maxHeight: openFAQ === faq.id ? '200px' : '0',
            opacity: openFAQ === faq.id ? '1' : '0',
          }}
        >
          <p className="mt-3 text-[#326B3F]">{faq.answer}</p>
        </div>
      </div>
    ))}
  </div>

      <div className="flex justify-center mt-12 md:mt-22">
        {!showMore ? (
          <button 
          onClick={() => setShowMore(true)}
          className="cursor-pointer group relative text-[#326B3F] my-8 font-regular tracking-wide transition-all duration-300 ease-in-out active:border-b-0 active:translate-y-1">
          <span className="flex items-center gap-3 relative z-10">
            <svg viewBox="0 0 24 24" fill="#326B3F" className="w-5 h-5 transition-all duration-300 group-hover:translate-x-1">
              <path d="M12 4L10.6 5.4L16.2 11H4V13H16.2L10.6 18.6L12 20L20 12L12 4Z"></path>
            </svg>
            Show More
          </span>
        </button>
        ) : (
          <button 
          onClick={() => setShowMore(false)}
          className="cursor-pointer group relative text-[#326B3F] font-regular tracking-wide transition-all duration-300 ease-in-out active:border-b-0 active:translate-y-1">
          <span className="flex items-center gap-3 relative z-10">
            <svg viewBox="0 0 24 24" fill="#326B3F" className="w-5 h-5 transition-all duration-300 group-hover:translate-x-1">
              <path d="M12 4L10.6 5.4L16.2 11H4V13H16.2L10.6 18.6L12 20L20 12L12 4Z"></path>
            </svg>
            Show Less
          </span>
        </button>
        )}
      </div>
    </div>

        </>
    );
}

export default WebDevelopment;