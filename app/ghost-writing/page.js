"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { Section } from 'lucide-react';


const GhostWriting = () => {
    const faqs = [
        {
          question: "What are ghostwriting services?",
          answer:
            "Ghostwriting services entail the utilization of a professional writer to develop content on your behalf. The writer is anonymous, while you receive credit for the content. The services are used for books, articles, blogs, business reports, and more. It enables people and companies to publish quality content without taking the time to write it themselves, saving time while the end product remains in its voice and purpose.",
          id: 1,
        },
        {
          question: "Why should I hire ghostwriting services?",
          answer:
            "Ghostwriting services will enhance your content creation process by providing professional authors capable of creating quality content within minutes. For professional blogs, successful books, or business reports, a ghostwriter ensures your content is professional, effective, and customized for your target audience. It is particularly beneficial for busy individuals and businesses that must consistently create effective content without compromising quality.",
          id: 2,
        },
        {
          question: "What types of content do you offer for ghostwriting?",
          answer:
            "We offer a range of ghostwriting services, including business writing, books, blogs, articles, white papers, case studies, and personal memoirs such as memoirs and biographies. We are experts in writing for a range of industries and niches, and we professionally craft each project to meet the client's specific requirements. Whether you need SEO-friendly content to post on your website or a compelling story to use in a book, we've got you covered.",
          id: 3,
        },
        {
          question: "How do I know my content will be original?",
          answer:
            "We are very serious about plagiarism at Transcurators. Our ghostwriting process entails careful checks for uniqueness before submitting any content. We utilize sophisticated plagiarism-checking software and ensure all content is 100% unique, with no duplication or copying. This ensures that the integrity of your brand is not compromised while offering unique and original content that stands out from the rest.",
          id: 4,
        },
        {
          question: "What is the process for working with a ghostwriter?",
          answer:
            "We begin with an initial consultation where we learn about your preferences, needs, and ideas about the content. After gathering the necessary details and references, we write, organize, and revise your content. We remain in contact throughout the process to ensure the content meets your specifications. After revising, we deliver the final work, which is publication-ready, so you can convey your ideas without lifting a finger.",
          id: 5,
        },
        {
          question: "How long does it take to complete a ghostwriting project?",
          answer:
            "The duration of a ghostwriting project depends on its complexity and the amount of material. For instance, articles and blog posts can be completed in days, whereas larger projects like books or intricate case studies take weeks. We offer realistic timelines and meet deadlines without compromising quality. Always give your deadlines advance notice, and we will deliver on time.",
          id: 6,
        },
        {
          question: "Can I hire a ghostwriter for a specific niche?",
          answer:
            "Yes! We possess experienced ghostwriters with niche-specific expertise in various niches like finance, healthcare, technology, entertainment, and more. You might need niche-specific content for a technical niche, a business blog, or a creative article. Our veteran ghostwriters are ready to deliver quality content for any need. Our versatile writers can write according to various styles and tones based on your niche needs.",
          id: 7,
        },
        {
          question: "Is confidentiality guaranteed when using ghostwriting services?",
          answer:
            "Absolutely! Discretion is at the top of our agenda. We recognize your thoughts, initiatives, and private information are precious, so we take total discretion with all our clients. We provide non-disclosure agreements (NDAs) for additional peace of mind. You can trust that we will guard your project and ensure no one will ever know you've hired a ghostwriter unless you make them aware.",
          id: 8,
        },
        {
          question: "Do you provide revisions to ghostwritten content?",
          answer:
            "Yes, we provide unlimited revisions within a stated time limit to ensure the content meets your requirements. After we send the first draft, you can ask us to make changes, and we'll modify it to your heart's content until you are 100% happy. Our objective is to provide you with excellent content that exactly fits your voice and goals, and we are always in close communication with you to make necessary adjustments and touch-ups.",
          id: 9,
        },
        {
          question: "How much do ghostwriting services cost?",
          answer:
            "The cost of ghostwriting services will vary based on the type, length, and complexity of the material you need. For example, a blog or article will cost less than a book or a long business report. We have reasonable prices based on the size and budget of your project. We offer you a free consultation to discuss your needs and give you a customized quote based on the specifics of your project.",
          id: 10,
        },
        {
          question: "Can I use the content for my own branding and promotion?",
          answer:
            "Yes, all our ghostwriters produce is 100% yours to keep and do as you wish. You own full rights to the content for business marketing, personal branding, or publishing. Our writers will get the content in your brand voice so you can use it for marketing, promotions, or otherwise without restriction.",
          id: 11,
        },
        {
          question: "How do I get started with your ghostwriting services?",
          answer:
            "It is simple to get started with our ghostwriting services. Contact us via our website or contact form and book a free consultation. In this first meeting, we will discuss your project, requirements, and deadlines and then pair you with the most appropriate writer for your project. We will work on your content when the terms are settled and inform you at each stage.",
          id: 12,
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
                
    const Process = [
        {
          number: 1,
          title: "Consultation",
          description:
            "We start with a detailed consultation to understand your goals, brand tone, audience, and content expectations. By gathering relevant materials and defining timelines, platforms, and objectives, we ensure our ghostwriting aligns with your niche. Whether fiction or business, we maintain your voice and deliver content that truly resonates.",
        },
        {
          number: 2,
          title: "Planning",
          description:
            "Once the consultation stage is complete, we will develop an outline, prepare items for a schedule, identify the most appropriate writer (depending on availability), and establish content goals. During this planning stage, we have a road map that, through various tasks, facilitates the seamless progression of the project from idea to completion.",
        },
        {
          number: 3,
          title: "Drafting",
          description:
            "Our team of experienced writers will begin with the first draft. Using our unique process, we infuse every piece of content with a combination of creativity and strategy. Whether the content is a novel or white paper, we will ensure it contains sufficient structure while making it interesting and engaging to meet your expectations and current market trends.",
        },
        {
          number: 4,
          title: "Revision",
          description:
            "Client feedback is essential to us. We revise drafts based on your comments—offering unlimited revisions until you're satisfied. Every piece is refined to meet both creative and technical standards for the final version.",
        },
        {
          number: 5,
          title: "Delivery",
          description:
            "Once revisions are complete, the final content is delivered in your preferred format. Our professional ghostwriting services ensure timely, polished, and plagiarism-free content—ready to publish or present.",
        },
      ];
      
    const metrics = [
        {
            value: '$2.45B',
            description: 'Projected global market size by 2025'
        },
        {
            value: '6.8% CAGR',
            description: 'Steady growth expected from 2023 to 2030'
        },
        {
            value: '14.6%',
            description: 'India contributes 14.6% to the Asia-Pacific ghostwriting market'
        },
        {
            value: '34.1%',
            description: 'Asia-Pacific holds 34.1% of the global ghostwriting market'
        },
        {
            value: 'Top in-demand services',
            description: 'Fiction writing, web blogs, press releases & product descriptions'
        },
    ];
    
    // Add counter state for metrics animation
    const [counters, setCounters] = useState({
        '$2.45B': '$0B',
        '6.8% CAGR': '0%',
        '14.6%': '0%',
        '34.1%': '0%',
        'Top in-demand services': 'Top in-demand services'
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
            
            // For "$2.45B"
            const billions = Math.floor(progress * 245) / 100;
            updatedCounters["$2.45B"] = `$${billions >= 2.45 ? "2.45" : billions.toFixed(2)}B`;
            
            // For "6.8% CAGR"
            const cagr = Math.floor(progress * 680) / 100;
            updatedCounters["6.8% CAGR"] = `${cagr >= 6.8 ? "6.8" : cagr.toFixed(1)}% CAGR`;
            
            // For "14.6%"
            const indiaPercent = Math.floor(progress * 1460) / 100;
            updatedCounters["14.6%"] = `${indiaPercent >= 14.6 ? "14.6" : indiaPercent.toFixed(1)}%`;
            
            // For "34.1%"
            const asiaPercent = Math.floor(progress * 3410) / 100;
            updatedCounters["34.1%"] = `${asiaPercent >= 34.1 ? "34.1" : asiaPercent.toFixed(1)}%`;
            
            // Text remains constant
            updatedCounters["Top in-demand services"] = "Top in-demand services";
            
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
        const metricsSection = document.querySelector('#ghostwriting-metrics-section');
        if (metricsSection) {
            observer.observe(metricsSection);
        }
        
        return () => {
            cancelAnimationFrame(animationRef.current);
            observer.disconnect();
        };
    }, []);
    
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
      <section className="w-full mb-5 bg-[#B3D3BB] h-[50vh] sm:h-[60vh] md:h-[75vh] lg:h-[90vh] flex items-center justify-center relative overflow-hidden rounded-[30px] mx-auto mt-6 max-w-[95%]">
                <div className="absolute inset-x-0 bottom-0 flex justify-center pointer-events-none">
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
                        className="text-white font-medium text-[28px] sm:text-[34px] md:text-[50px] lg:text-[50px] xl:text-[60px] text-left leading-none md:leading-none tracking-tight mb-1 sm:mb-2 md:mb-2"
                    >
                        Ghostwriting Services in India
                        <span className="text-[#326B3F] block mt-2">
                            for SEO Content, eBooks & Website Copy
                        </span>
                    </motion.h1>
                    
                    <motion.p 
                        variants={itemVariants}
                        className="text-[#6a6a6a] mt-6 text-lg leading-relaxed max-w-2xl"
                    >
                        Bringing Your Ideas to Life with Expert Ghostwriting Services—SEO Content, eBooks, and Website Copy
                    </motion.p>
                    
                    <motion.div 
                        variants={itemVariants}
                        className="mt-10 flex flex-col sm:flex-row items-start justify-start gap-4"
                    >
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="gap-2 md:gap-3 flex justify-center items-center self-start text-[#6a6a6a] text-xs sm:text-sm bg-gray-50 backdrop-blur-md lg:font-medium isolation-auto 
                            border-gray-50 before:absolute before:inset-0 before:w-0 before:h-full before:transition-all before:duration-500 before:bg-[#326B3F]
                            hover:text-gray-50 hover:before:w-full before:rounded-full before:-z-10 relative z-10 px-3 md:px-4 py-1.5 md:py-2 overflow-hidden border-2 rounded-full group tracking-wide w-fit"
                        >
                            Get Started Now
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
                </motion.div>
                <div className="hidden md:block md:w-[45%] lg:w-[50%] xl:w-[55%]"></div>
            </section>
        <section id="ghostwriting-metrics-section" className="md:mt-22 mt-12 bg-white">
                <div className="max-w-screen-xl mx-auto px-4">
                    <motion.div 
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <h2 className="text-2xl md:text-3xl font-medium">
                            <span className="text-[#326B3F]">Ghostwriting</span> Industry at a Glance
                        </h2>
                    </motion.div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
                        {metrics.map((metric, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ 
                                    scale: 1.03,
                                    boxShadow: "0 0 25px rgba(168, 213, 186, 0.6)" 
                                }}
                                className="bg-white p-4 md:p-6 rounded-xl shadow-[0_0_15px_#CCE3DE] hover:shadow-[0_0_25px_#A8D5BA] transition-all duration-300 text-center cursor-default"
                            >
                                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#326B3F]">{counters[metric.value]}</div>
                                <p className="mt-3 text-[#6a6a6a] text-sm md:text-base">{metric.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="md:mt-22 mt-12 bg-white">
                <div className="max-w-screen-xl mx-auto px-4">
                    <motion.div 
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-2xl md:text-3xl font-medium">
                            Why <span className="text-[#326B3F]">Ghostwriting Services</span> Are Crucial for Your Business Growth
                        </h2>
                        <p className="text-[#6a6a6a] mt-4 max-w-3xl mx-auto">
                            Ghostwriting services help brands scale their voice in the content-rich landscape while being consistent with their tone and voice without overloading internal teams or sacrificing quality.
                        </p>
                    </motion.div>
                    
                    <motion.div 
                        className="relative max-w-4xl mx-auto px-4"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {[
                            {
                                title: "Boosts Brand Authority",
                                description: "You can consistently push out professional, polished content that conveys not only depth of knowledge but also authority in the industry. This builds your credibility with your target audience, and fosters trust in your brand."
                            },
                            {
                                title: "Enhances SEO & Visibility",
                                description: "A content ghost writing services considers SEO before creating any content. You can expect branded search terms and strategic keywords to be integrated into your content, setting it up to rank and appear where it counts the most – at the top of search engine results pages."
                            },
                            {
                                title: "Engages Your Audience",
                                description: "Top best ghostwriting services develop compelling stories that connect emotionally with your reader, capturing their attention and empowering higher engagement rates across all platforms."
                            },
                            {
                                title: "Supports Lead Generation",
                                description: "Content strategically crafted by our business ghostwriting services builds engagement with potential customers, addresses their pain points, and leads to conversions smoothly through the conversion funnel."
                            },
                            {
                                title: "Ensures Compliance",
                                description: "Our professional ghostwriting services ensure all content complies with any legal, financial, or regulatory needs. This keeps your brand accurate, trustworthy, and safe at each step."
                            }
                        ].map((benefit, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="flex items-start gap-4 mb-6 relative"
                                whileHover={{ x: 5 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                <motion.div 
                                    className="flex items-center justify-center w-8 h-8 rounded-full bg-[#326B3F] shrink-0"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                                >
                                    <span className="text-white text-sm font-medium">{index + 1}</span>
                                </motion.div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-[#326B3F] mb-2">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-[#6a6a6a] text-base">{benefit.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
            >
                <div className='relative bg-[#429054]/20 mt-12 h-auto md:mt-22 flex justify-center items-center mx-auto py-8 md:py-8'>
                    <div className='max-w-screen-xl flex justify-center items-center mx-auto'>
                        <motion.div 
                            className='flex justify-center items-center mx-auto scale-70'
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            <img src="/section3.png" alt="Icon1" className='md:block hidden' />
                        </motion.div>
                        <motion.div 
                            className='flex-row justify-center items-center px-6 py-8 md:py-12'
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            <motion.h2 variants={itemVariants} className='md:text-3xl text-xl font-semibold text-[#326B3F]'>
                                Benefits of Ghostwriting 
                                <span className='md:text-3xl text-xl font-semibold text-black'> Services from Transcurators<br/>
                                </span>
                            </motion.h2>
                            <motion.p variants={itemVariants} className='text-sm font-regular mt-6 text-[#6a6a6a]'>
                                At Transcurators, our ghostwriting is designed to produce content that not only shines with polish and professionalism but also resonates deeply with your brand voice and vision. Whether you're an entrepreneur, a CEO, or a fiction writer, our professional ghostwriters assist you in expressing your ideas with clarity, creativity, and accuracy. From engaging books to insightful blogs and influential white papers, we turn your ideas into content that engages, converts, and connects.
                            </motion.p>
                            <motion.ul 
                                className='mt-6 space-y-4'
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                            >
                                {[
                                    "Tailored content that showcases your own voice",
                                    "Experience in a wide variety of industries and formats",
                                    "Original storytelling with strategic intent",
                                    "Professional, top-quality writing standards",
                                    "100% confidentiality and discretion guaranteed",
                                    "Prompt delivery without sacrificing quality",
                                    "Approved by more than 500 international clients",
                                    "Ideal for authors, business thinkers, and thought leaders",
                                    "Facilitates content objectives through books, blogs, articles, and white papers",
                                    "Full-service from idea generation to completion"
                                ].map((item, index) => (
                                    <motion.li 
                                        key={index} 
                                        variants={itemVariants}
                                        className='text-sm font-normal text-[#6a6a6a] flex items-center gap-2'
                                        whileHover={{ x: 5 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    >
                                        <motion.span 
                                            className='w-5 h-5 flex items-center justify-center rounded-full bg-[#326B3F] text-white'
                                            whileHover={{ scale: 1.2, rotate: 5 }}
                                            transition={{ type: "spring", stiffness: 300, damping: 10 }}
                                        >
                                            <svg className="h-full p-0.5" viewBox="0 0 16 16" fill="currentColor">
                                                <path d="M6.5 10.7l-2.9-2.9-1.1 1.1 4 4 8-8-1.1-1.1z"></path>
                                            </svg>
                                        </motion.span>
                                        {item}
                                    </motion.li>
                                ))}
                            </motion.ul>
                            <motion.p variants={itemVariants} className='text-sm font-medium mt-6 mb-4 text-[#6a6a6a]'>
                                Transform Your Content Today—Get a Free Consultation with Our Expert Editors!
                            </motion.p>
                        </motion.div>
                    </div>
                </div>
            </motion.section>
            <section className="md:mt-22 mt-12 bg-white">
                <div className="max-w-screen-xl mx-auto px-4">
                    <motion.div 
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-2xl md:text-3xl font-medium">
                            Bringing Your Ideas to Life with <span className="text-[#326B3F]">Professional Ghostwriting</span>
                        </h2>
                        <p className="text-[#6a6a6a] mt-4 max-w-3xl mx-auto">
                            Our ghostwriting services transform your thoughts into impactful, professionally written content. Whether you're a business leader, entrepreneur, or author, we give your ideas a powerful and polished voice.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Business Content",
                                services: [
                                    {
                                        name: "White Papers",
                                        description: "Our business ghostwriting services deliver well-researched white papers that build thought leadership and establish trust with stakeholders."
                                    },
                                    {
                                        name: "Case Studies",
                                        description: "Highlight your success stories with compelling case studies written to demonstrate real-world results and client satisfaction."
                                    },
                                    {
                                        name: "Business Reports",
                                        description: "We create precise, data-driven reports that reflect your brand's analytical depth and strategic insights."
                                    },
                                    {
                                        name: "Company Policies",
                                        description: "Ensure clear communication with professionally written company policies tailored to your industry and internal operations."
                                    }
                                ]
                            },
                            {
                                title: "Articles and Blogs",
                                services: [
                                    {
                                        name: "Website Blogs",
                                        description: "Boost your web presence with SEO-rich, engaging blog posts crafted by our professional ghostwriting services team."
                                    },
                                    {
                                        name: "Magazines",
                                        description: "Get published in high-impact magazines with well-articulated, editorial-standard content developed by expert ghostwriters."
                                    },
                                    {
                                        name: "Personal Blogs and Articles",
                                        description: "Share personal insights and thought leadership through expressive, custom-written articles that reflect your unique voice."
                                    }
                                ]
                            },
                            {
                                title: "Books and Journals",
                                services: [
                                    {
                                        name: "Novel",
                                        description: "From plot building to character development, our fiction ghostwriting services bring your literary vision to life."
                                    },
                                    {
                                        name: "Memoirs",
                                        description: "Tell your life's story with emotion, clarity, and style—crafted by our experienced ghostwriting services in India."
                                    },
                                    {
                                        name: "Biographies",
                                        description: "We help turn extraordinary lives into captivating reads through our affordable ghostwriting services, handled with care and precision."
                                    }
                                ]
                            }
                        ].map((category, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                whileHover={{ y: -5 }}
                                className="group bg-white p-6 rounded-xl shadow-[0_0_15px_#CCE3DE] hover:shadow-[0_0_25px_#A8D5BA] transition-all duration-300"
                            >
                                <h3 className="text-2xl font-semibold text-[#326B3F] mb-6 transition-all duration-300 group-hover:translate-x-1">{category.title}</h3>
                                <div className="space-y-6">
                                    {category.services.map((service, serviceIndex) => (
                                        <motion.div 
                                            key={serviceIndex}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: serviceIndex * 0.1 + index * 0.2 }}
                                            whileHover={{ scale: 1.02, x: 5 }}
                                            className="p-4 rounded-lg bg-gradient-to-r from-[#429054]/5 to-transparent group-hover:from-[#429054]/10 transition-all duration-300"
                                        >
                                            <h4 className="text-lg font-medium text-black mb-2">{service.name}</h4>
                                            <p className="text-[#6a6a6a] text-sm">{service.description}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <section>
                <motion.div 
                    className="text-center md:mt-22 mt-12 max-w-screen-xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="md:text-3xl text-2xl font-medium">
                        Behind the Scenes<br/><span className="text-[#326B3F]"> How We Work to Craft Your Perfect Content</span>{' '}<br />
                    </h2>
                    <p className="text-[#6a6a6a] mt-4 max-w-3xl mx-auto">
                        At Transcurators, our ghostwriting process is designed to be structured and flexible enough to provide high-quality, original content that helps fulfil your unique goals. Here's how we bring your vision into reality.
                    </p>
                </motion.div>
                
                {/* Process steps with staggered animations */}
                <div className="max-w-screen-xl mx-auto text-left py-8">
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-6">
                        {Process.map((benefit, index) => (
                            <motion.div 
                                key={benefit.number}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                whileHover={{ y: -5 }}
                                className="transition-all duration-300"
                            >
                                <motion.span 
                                    className="text-[#326B3F] text-2xl inline-block"
                                    whileHover={{ scale: 1.2, x: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >{benefit.number}</motion.span>
                                <p className="mt-2 text-md font-semibold text-[#1b223c]">{benefit.title}</p>
                                <p className="mt-2 text-sm text-[#6a6a6a]">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
            >
                <div className='relative bg-[#429054]/20 mt-12 md:mt-22 h-auto flex justify-center items-center mx-auto'>
                    <div className='max-w-screen-xl flex justify-center items-center mx-auto'>
                        <motion.div 
                            className='flex-row justify-center items-center px-6 py-6 md:py-12'
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            <motion.h3 variants={itemVariants} className='md:text-3xl text-xl font-semibold text-[#326B3F]'>
                                Why Choose
                                <span className='md:text-3xl text-xl font-semibold text-black'> TransCurators?<br/>
                                </span>
                            </motion.h3>
                            <motion.p variants={itemVariants} className='text-sm font-medium mt-6 text-[#6a6a6a]'>Confidentiality</motion.p>
                            <motion.p variants={itemVariants} className='text-sm font-regular mt-2 text-[#6a6a6a]'>
                                At Transcurators, we have you covered when it comes to your ideas. Client confidentiality is paramount to us, and we require legal documents (NDAs) upon signing for every project and utilising secure channels. No matter how big or small, if you're publishing a book, blog, or business document, your intellectual property will be protected 100% during the entire scope of work.
                            </motion.p>
                            <motion.p variants={itemVariants} className='text-sm font-medium mt-6 text-[#6a6a6a]'>Experienced Writers</motion.p>
                            <motion.p variants={itemVariants} className='text-sm font-regular mt-2 text-[#6a6a6a]'>
                                We have antecedently experienced writers in the industry and discipline-specific experts in fiction and non-fiction. We offer business ghostwriting services, commercial ghostwriting services, compelling memoirs, or anything similar that's positioned in your target market. We have the capability because our writers simultaneously enjoy varied experiences and qualify levels on every project.
                            </motion.p>
                            <motion.p variants={itemVariants} className='text-sm font-medium mt-6 text-[#6a6a6a]'>Customised Content</motion.p>
                            <motion.p variants={itemVariants} className='text-sm font-regular mt-2 text-[#6a6a6a]'>
                                We don't believe in "cut and paste" solutions, so everything we write is uniquely customised to reflect your tone, audience, and goals to give you authentic content that reflects your original tone in your ghostwriting across all contexts.
                            </motion.p>
                            <motion.p variants={itemVariants} className='text-sm font-medium mt-6 text-[#6a6a6a]'>Free Guidance</motion.p>
                            <motion.p variants={itemVariants} className='text-sm font-regular mt-2 text-[#6a6a6a]'>
                                When you're with Transcurators, you get support before starting your project. We offer free consultations, content audits, and expert advice to form or develop your big ideas into professional content with a high impact at no additional cost.
                            </motion.p>
                        </motion.div>
                        <motion.div 
                            className='flex justify-center items-center mx-auto scale-70'
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            <img src="/section3.png" alt="Icon1" className='md:block hidden' />
                        </motion.div>
                    </div>
                </div>
            </motion.section>
            <section>
                <motion.div 
                    className="w-full md:mt-22 mt-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="md:text-3xl text-xl font-medium text-black">
                            Explore TransCurators'
                        </h2>
                        <p className="md:text-3xl ml-2 text-xl font-medium justify-center text-[#326B3F]">
                            Services
                        </p>
                        <motion.div 
                            className="mt-8"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <a
                                href="/careers"
                                className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-[0_0_50px_#CCE3DE] hover:shadow-[0_0_100px_#A8D5BA] font-medium text-base transition-shadow duration-300 bg-[#326B3F] text-white"
                            >
                                Explore More
                            </a>
                        </motion.div>
                    </div>
                </motion.div>
            </section>
            <section className="max-w-screen-xl mx-auto md:mt-22 mt-12 mb-16">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="md:text-3xl text-xl mt-4 font-medium">
                        Client <span className="text-[#326B3F]">Testimonials</span>
                    </h2>
                    <p className="text-[#6a6a6a] text-sm mt-4 max-w-2xl mx-auto">
                        Hear from our satisfied clients about the quality and impact of our ghostwriting services.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* Testimonial 1 */}
                    <motion.div 
                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ y: -8, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                    >
                        <p className="text-[#6a6a6a] text-sm italic mb-6">
                            "TransCurators delivered my novel on time, and the quality was exceptional. The process was smooth, and the team was very professional. They truly understood my vision and brought it to life beautifully!"
                        </p>
                    </motion.div>

                    {/* Testimonial 2 */}
                    <motion.div 
                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        whileHover={{ y: -8, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                    >
                        <p className="text-[#6a6a6a] text-sm italic mb-6">
                            "Our business blog traffic increased by 35% thanks to the SEO-optimized articles written by TransCurators. Their ability to craft content that resonates with our audience is unmatched. Highly recommend their services!"
                        </p>
                    </motion.div>
                </div>
                
                {/* Get started section */}
                <motion.div 
                    className="w-full py-8 mb-20 md:mt-22 mt-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="md:text-3xl text-xl font-medium text-black">
                            Ready to Get Started?
                        </h2>
                        <p className="text-[#6a6a6a] mt-4 max-w-3xl mx-auto">
                            Begin your journey towards high-quality, professionally crafted content with TransCurators. Whether you're looking for engaging business content, compelling articles, or a novel, our expert ghostwriters are here to bring your ideas to life. Let's work together to elevate your brand and ensure your message reaches the right audience. Take the first step today and watch your content come to life with our dedicated team.
                        </p>
                        <motion.div 
                            className="mt-8"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <a
                                href="/careers"
                                className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-[0_0_50px_#CCE3DE] hover:shadow-[0_0_100px_#A8D5BA] font-medium text-base transition-shadow duration-300 bg-[#326B3F] text-white"
                            >
                                Request a Free Consultation
                            </a>
                        </motion.div>
                    </div>
                </motion.div>
            </section>
            <section>
                <motion.div 
                    className='max-w-screen-xl flex justify-center md:mt-22 mt-12 mb-10 mx-auto items-center'
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <div className='text-center flex-row'>
                        <p className='text-md text-[#326B3F] font-regular'>FAQ&apos;s</p>
                        <p className='md:text-3xl text-xl text-black font-medium mt-4'>
                            Frequently Asked<span className='text-[#326B3F]'> Questions</span>
                        </p>
                    </div>
                </motion.div>

                <div className="max-w-screen-xl mx-auto p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 cursor-pointer gap-8">
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

                    <div className="flex justify-center mt-12 md:mt-22">
                        <motion.button 
                            onClick={() => setShowMore(!showMore)}
                            className="cursor-pointer group relative text-[#326B3F] my-8 font-regular tracking-wide transition-all duration-300 ease-in-out active:border-b-0 active:translate-y-1"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="flex items-center gap-3 relative z-10">
                                <motion.svg 
                                    viewBox="0 0 24 24" 
                                    fill="#326B3F" 
                                    className="w-5 h-5 transition-all duration-300 group-hover:translate-x-1"
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ 
                                        duration: 1.5, 
                                        repeat: Infinity, 
                                        repeatType: "mirror",
                                        ease: "easeInOut"
                                    }}
                                >
                                    <path d="M12 4L10.6 5.4L16.2 11H4V13H16.2L10.6 18.6L12 20L20 12L12 4Z"></path>
                                </motion.svg>
                                {showMore ? "Show Less" : "Show More"}
                            </span>
                        </motion.button>
                    </div>
                </div>
            </section>

        </>
    );
}
export default GhostWriting;