"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const Proofreading = () => {
    const [expandedCards, setExpandedCards] = useState({});

    // Animation variants
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

    const services = [
        {
          icon: "/messageIcon.png",
          title: "Academic Paper Editing",
          description:
            "Our academic editing and proofreading services will ensure that your research papers, dissertations, and theses are clear, concise and academically sound. We will improve your grammar, structure, and coherence to meet scholarly requirements and increase your chances of being published.",
        },
        {
          icon: "/messageIcon.png",
          title: "Business Document Editing",
          description:
            "Use our document editing and proofreading services to improve your business communications. We will improve the tone, grammar, and consistency of your reports, emails, and proposals to help elevate your documents to be polished and professional while aligning with your brand voice.",
        },
        {
          icon: "/messageIcon.png",
          title: "Marketing Content Editing",
          description:
            "As applied to marketing content, our online proofreading and editing services will help improve SEO and readership while capturing your intended audience's attention. We will improve your content and contribute to your success in capturing potential tomorrow's customers by using content as the first step in converting interest or desire to action. We will achieve this while being consistent with your brand.",
        },
        {
          icon: "/messageIcon.png",
          title: "Book and Manuscript Editing",
          description:
            "Our manuscript editing and proofreading services will help keep your authentic voice while improving pacing, flow, consistency, and readability. Whether fiction, creative non-fiction, or non-fiction, we will ensure your story is as authentic as possible.",
        },
        {
          icon: "/messageIcon.png",
          title: "Personal Projects Editing",
          description:
            "Whether you like letters, blogs, or resumes, we can help your English editing and proofreading services edit your writing while keeping your tone natural and heartfelt. You can trust us to correct errors and localize and polish your message to ensure clarity and impact.",
        },
      ];
    
    const Process = [
        {
          number: "Place Your Order",
          title: "Use our services easily and quickly by providing us your content and desired editing outcomes for a custom approach.",
          description:
            "You can instantly place your editing and proofreading services order. Upload your content, describe your content needs, and we will customise the services to produce high-quality document editing and proofreading services. The process is uncomplicated, fast, and all about convenience.",
        },
        {
          number: "Analyzing and Reviewing",
          title: "Before we even begin editing, we make sure through an in-depth analysis that your content makes sense and fulfils your intended purpose.",
          description:
            "Our proofreaders and editors make sure to produce the best analysis before editing your content through detailed analysis. You want to make sure the document was well-structured, clear, and in accordance with the expected tone and way it was supposed to be presented. Its quality needed to be improved before editing and proofreading services were provided, making sure we were evaluating the content appropriately and producing editing and proofreading in precise accordance with what you requested.",
        },
        {
          number: "Proofreading and Editing",
          title: "Our expert editors ensure that all errors are corrected, and your content is polished to perfection.",
          description:
            "With professional proofreading services, we fix grammar, punctuation, and sentence structure to ensure your document is error-free. Our online proofreading and editing services are designed to enhance readability, ensuring your content is clear, concise, and professionally polished.",
        },
        {
          number: "Delivery and Reporting",
          title: "After completing the edit of the content, we provide the final draft and a complete report of the changes that were made in the editing phase.",
          description:
            "Once the proofreading and editing are complete, we send the consistent document and a report of all changes made. This report identifies all the edits we completed and the ways our professional proofreading and editing services helped improve your content.",
        },
      ];
      
    const toggleCard = (index) => {
        setExpandedCards(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };
    
    const faqs = [
        {
          question: "What types of editing and proofreading services does Transcurators offer?",
          answer:
            "We provide a range of services, including academic proofreading, business document editing, manuscript editing, marketing material proofreading, and more. Our experts make your material shine with clarity, accuracy, and readability.",
          id: 1,
        },
        {
          question: "How do I get started with Transcurators’ proofreading services?",
          answer:
            "Just upload your paper, give your specifications, and our skilled editors will do the rest. Our experts will adjust the strategy as per your needs to deliver high-quality work.",
          id: 2,
        },
        {
          question: "Can I get academic proofreading for my thesis or dissertation?",
          answer:
            "Yes! Transcurators is a thesis, dissertation, research paper, and academic journal article professional proofreading and editing service. We make your work error-free, well-organised, and academic standards compliant.",
          id: 3,
        },
        {
          question: "How long does it take to receive the edited document?",
          answer:
            "Our turnaround times are fast. Depending on the complexity and length of your document, we have flexible timelines. We also offer expedited services in case of early deadlines.",
          id: 4,
        },
        {
          question: "Are Transcurators’ proofreading services available for all document types?",
          answer:
            "Yes! We edit all types of documents, ranging from business documents and academic writing to creative works and personal projects. Our expert editors guarantee that every piece is refined depending on the target audience and purpose.",
          id: 5,
        },
        {
          question: "Does Transcurators offer SEO editing services for digital content?",
          answer:
            "Yes! We provide SEO-driven editing to propel the highest visibility of your web content. Our editors optimise keyword use, readability, and user experience to improve your site's performance.",
          id: 6,
        },
        {
          question: "What is the cost of Transcurators’ editing and proofreading services?",
          answer:
            "Our prices are competitive and vary based on the type of document and level of service. Receive a custom quote that will suit your budget and project when you call us.",
          id: 7,
        },
        {
          question: "How can I be assured of the quality of my edited content?",
          answer:
            "We employ only very seasoned editors, experts in their areas of writing. Each manuscript is subjected to several quality assurances to guarantee our high standards in grammar, form, and legibility.",
          id: 8,
        },
        {
          question: "Can I make revisions after receiving the edited content?",
          answer:
            "Yes! We have a revision policy. If you need further adjustments after the first edit, please let us know, and we will ensure that we make the changes accordingly.",
          id: 9,
        },
        {
          question: "Is Transcurators’ service confidential?",
          answer:
            "Yes. We are confidentiality and data protective. Everything you submit to us is treated confidentially, and we safeguard your intellectual property at all times.",
          id: 10,
        },
        {
          question: "Can I hire a professional proofreader online through Transcurators?",
          answer:
            "Yes, we provide online proofreading and editing services where you can engage a professional proofreader who knows your content type, whether academic, business, or creative writing.",
          id: 11,
        },
        {
          question: "Do Transcurators provide services for large-scale editing projects?",
          answer:
            "Yes, we can handle heavy editing work. If you need to edit several papers or need editing services on a regular basis, our company can expand to suit your needs.",
          id: 12,
        },
        {
          question: "How do Transcurators ensure fast and efficient service?",
          answer:
            "We optimise our process with the assistance of a panel of professional editors, efficient communication, and advanced editing tools. Our streamlined process guarantees timely delivery without compromising quality.",
          id: 13,
        },
        {
          question: "What types of clients do Transcurators work with?",
          answer:
            "We service a wide variety of clients that range from academics, authors, businesses, and marketers to students. We possess a customised service that is designed to suit each client regardless of the industry or type of project.",
          id: 14,
        },
        {
          question: "How do I get in touch with Transcurators for my editing needs?",
          answer:
            "You can reach out to us effortlessly via our site by filling out the contact form or simply call or mail us for additional information. We're here for you to cater to all your editing and proofreading requirements.",
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
                    
    const metrics = [
      { key: "5+", value: 5, suffix: "+", label: "Years of Experience" },
      { key: "1000+", value: 1000, suffix: "+", label: "Expert Writers and Editors" },
      { key: "99%", value: 99, suffix: "%", label: "Client Satisfaction Rate" },
      { key: "500+", value: 500, suffix: "+", label: "Projects Delivered" },
      { key: "90%+", value: 90, suffix: "%+", label: "SEO Success Rate" },
      { key: "100%", value: 100, suffix: "%", label: "On-Time Delivery" }
    ];
    
    // Add counter state for metrics animation
    const [counters, setCounters] = useState({
        "5+": "0+",
        "1000+": "0+",
        "99%": "0%",
        "500+": "0+",
        "90%+": "0%+",
        "100%": "0%"
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
            
            // Update counters for each metric
            updatedCounters["5+"] = `${Math.floor(progress * 5)}+`;
            updatedCounters["1000+"] = `${Math.floor(progress * 1000)}+`;
            updatedCounters["99%"] = `${Math.floor(progress * 99)}%`;
            updatedCounters["500+"] = `${Math.floor(progress * 500)}+`;
            updatedCounters["90%+"] = `${Math.floor(progress * 90)}%+`;
            updatedCounters["100%"] = `${Math.floor(progress * 100)}%`;
            
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
        const metricsSection = document.querySelector('#proofreading-metrics-section');
        if (metricsSection) {
            observer.observe(metricsSection);
        }
        
        return () => {
            cancelAnimationFrame(animationRef.current);
            observer.disconnect();
        };
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
                Enhance Your Content with
                <span className="text-[#326B3F] block mt-2">
                    Expert Proofreading and Editing Services
                </span>
            </motion.h1>
            
            <motion.p 
                variants={itemVariants}
                className="text-[#6a6a6a] mt-6 text-lg leading-relaxed max-w-2xl"
            >
                Perfect your writing with Transcurators' professional editing services—error-free, detailed, and tailored to elevate your content quality.
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
        
      <section id="proofreading-metrics-section" className="md:mt-22 mt-12 bg-white">
        <div className="max-w-screen-xl mx-auto px-4">
          <motion.div 
            className="text-center mb-6 md:mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-medium">
              Our Track Record <span className="text-[#326B3F]">Speaks Volumes</span>
            </h2>
          </motion.div>
                
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 max-w-5xl mx-auto">
            {metrics.map((item, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                className="bg-white p-3 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center group"
              >
                <motion.h3 
                  className="text-xl md:text-3xl font-bold text-[#326B3F] mb-1 md:mb-2 transition-transform duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  {counters[item.key]}
                </motion.h3>
                <p className="text-[#6a6a6a] font-medium text-xs md:text-base">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
        
      <section>
        <motion.div 
          className="text-center mb-16 mt-22 md:mt-12 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="md:text-3xl text-xl mt-4 font-medium">
            Transform Your Content with
            {' '}<br />
            <span className="text-[#326B3F]"> Expert Editing and Proofreading Services</span>
          </h2>
        </motion.div>

        <div className="max-w-screen-xl mx-auto grid grid-cols-1 gap-4 lg:grid-cols-5 lg:gap-5 md:mt-16 mt-12 text-left">
          {services.slice(0, 5).map((service, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='flex items-start justify-start'
            >
              <motion.div 
                className={`h-auto p-4 hover:bg-gray-50 rounded-lg cursor-pointer transition duration-200 group`}
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <motion.img 
                  src={service.icon} 
                  alt={service.title} 
                  className='group-hover:translate-x-1.5 transition-all ease-in-out duration-300' 
                  whileHover={{ rotate: 5 }}
                />
                <p className='text-md font-semibold text-[#1B223C] mt-2'>{service.title}</p>
                <p className='text-sm font-regular text-[#6a6a6a] mt-2'>{service.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>
        
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className='relative bg-[#429054]/20 mt-12 h-auto md:mt-22 flex justify-center items-center mx-auto py-4 md:py-4'>
          <div className='max-w-screen-xl flex justify-center items-center mx-auto'>
            <motion.div 
              className='flex items-center mx-auto scale-70'
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <img src="/Typewriter-pana.png" alt="Icon1" className='md:block hidden' />
            </motion.div>
            <motion.div 
              className='flex-row justify-center items-center px-6 py-8 md:py-12'
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.h2 variants={itemVariants} className='md:text-3xl text-xl font-semibold text-[#326B3F]'>
                Benefits of Professional<br/>
                <span className='md:text-3xl text-xl font-semibold text-black'> Proofreading and Editing from Transcurators<br/></span>
              </motion.h2>
              <motion.p variants={itemVariants} className='text-sm font-regular mt-6 text-[#6a6a6a]'>
                When you utilize Transcurators' editing and proofreading services, you are not simply paying for the proofreading and editing; you are paying for a meticulous editor to guarantee that your content is clear, accurate, and professional. Our experience covers everything from business communications to academic writing to creative works, and every type of content completion project uses precise and methodical editing to polish the work. Our editors understand all aspects of content performance: tone, grammar, structure, etc. 
              </motion.p>
              <motion.p variants={itemVariants} className='text-sm font-medium mt-6 text-[#6a6a6a]'>
                Here's what you get with us:
              </motion.p>
              <motion.ul 
                className='mt-6 space-y-4'
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                {[
                  { desc: "Clear, concise, and error-free writing" },
                  { desc: "Enhanced grammar, punctuation, and structure" },
                  { desc: "Improved flow, tone, and readability" },
                  { desc: "Domain-specific editing by professionals" },
                  { desc: "SEO optimisation for digital content" },
                  { desc: "Personalised attention to your writing goals" }
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
                    <span>{item.desc}</span>
                  </motion.li>
                ))}
              </motion.ul>
              <motion.p variants={itemVariants} className='text-sm font-medium mt-6 text-[#6a6a6a]'>
                Ready to get started? We're here to help.
              </motion.p>
              <motion.div 
                variants={itemVariants} 
                className="flex flex-col sm:flex-row md:mt-4 mt-4"
              >
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-lg hover:shadow-xl transition-all duration-500 font-medium text-base bg-[#326B3F] text-white hover:-translate-y-1"
                >
                  Start Your Project
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
        
      <section className="md:mt-22 mt-12">
        <motion.div 
          className="text-center md:mb-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#326B3F] text-sm md:text-md">Our Process</p>
          <h2 className="text-xl md:text-3xl font-medium mt-2">
            Efficient, Accurate, and Timely<br />
            <span className="text-[#326B3F]">We Perfect Your Content with a Seamless Editing Process</span>
          </h2>
        </motion.div>
            
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {Process.map((benefit, index) => (
              <motion.div 
                key={benefit.number} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -5 }}
                className="bg-white p-4 md:p-6 rounded-lg hover:shadow-lg transition-all duration-300"
              >
                <motion.span 
                  className="inline-block text-[#326B3F] text-lg md:text-2xl font-bold mb-3 pb-2"
                  whileHover={{ scale: 1.05, x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {`Step ${index + 1}: ${benefit.number}`}
                </motion.span>
                <p className="text-sm md:text-md font-semibold text-[#1b223c] mb-2">
                  {expandedCards[index] ? benefit.title : benefit.title.slice(0, 80) + (benefit.title.length > 80 ? '...' : '')}
                </p>
                <AnimatePresence>
                  <motion.p 
                    className="text-xs md:text-sm text-[#6a6a6a]"
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {expandedCards[index] ? benefit.description : benefit.description.slice(0, 100) + '...'}
                  </motion.p>
                </AnimatePresence>
                <motion.button 
                  onClick={() => toggleCard(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-3 cursor-pointer group relative text-[#326B3F] font-regular tracking-widest text-xs transition-all duration-300 ease-in-out active:border-b-0 active:translate-y-1"
                >
                  <span className="flex items-center gap-3 relative z-10">
                    {expandedCards[index] ? 'Read less' : 'Read more'}
                    <motion.svg 
                      viewBox="0 0 24 24" 
                      fill="currentColor" 
                      animate={{ rotate: expandedCards[index] ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-5 h-5 transition-all duration-300 group-hover:translate-x-1"
                    >
                      <path d="M12 4L10.6 5.4L16.2 11H4V13H16.2L10.6 18.6L12 20L20 12L12 4Z"></path>
                    </motion.svg>
                  </span>
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
        
      <section className="md:mt-22 mt-12 bg-white">
        <div className="max-w-screen-xl mx-auto px-4">
          <motion.div 
            className="text-center mb-6 md:mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-medium mb-4">
              We Perfect Your Content for<br/> <span className="text-[#326B3F]">Accuracy, Clarity, and Optimization</span>
            </h2>
            <p className="text-[#6a6a6a] text-sm md:text-base max-w-3xl mx-auto">
              Our professional editing and proofreading solutions address critical issues, offering your content as polished, precise, and SEO-optimised as well as readable.
            </p>
          </motion.div>

          <motion.div 
            className="mb-8 text-[#6a6a6a] text-sm md:text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="max-w-4xl mx-auto text-center">
              Our editing and proofreading services are designed to make every aspect of your writing better. From correcting minor errors to rewording awkward sentences, we improve your content to get you noticed in a professional way.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              {
                title: "Grammatical Errors",
                desc: "We remove all grammatical errors, with proper tense usage, subject-verb concordance, and correct sentence construction."
              },
              {
                title: "Punctuation Issues",
                desc: "From missing commas to missing periods, we correct all punctuation marks to make it readable and flowing."
              },
              {
                title: "Spelling Mistakes",
                desc: "We correct all grammatical errors to provide you with a polished and professional tone in your writing."
              },
              {
                title: "Sentence Structure Issues",
                desc: "Our specialists reword clumsy or ambiguous sentences to enhance readability and flow."
              },
              {
                title: "Consistency of Tone and Style",
                desc: "We maintain a consistent voice, tense, and stylistic touch that is appropriate for your brand or academic requirement."
              },
              {
                title: "Clarity and Readability",
                desc: "We paraphrase convoluted sentences into simpler, clearer understanding without altering the meaning."
              },
              {
                title: "Flow and Logic",
                desc: "We improve the logical sequence of ideas to render your content consistent and persuasive."
              },
              {
                title: "SEO Optimisation",
                desc: "We organically incorporate keywords and optimise the formatting to ensure your content is SEO-friendly without sacrificing quality."
              }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="flex items-start gap-3"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.span 
                  className="mt-1.5"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <svg className="w-4 h-4 text-[#326B3F]" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M6.5 10.7l-2.9-2.9-1.1 1.1 4 4 8-8-1.1-1.1z"></path>
                  </svg>
                </motion.span>
                <div>
                  <h3 className="text-[#326B3F] font-semibold mb-1">{item.title}</h3>
                  <p className="text-[#6a6a6a] text-sm">{item.desc}</p>
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
        <div className='relative bg-[#429054]/20 mt-12 h-auto md:mt-22 flex justify-center items-center mx-auto py-4 md:py-4'>
          <div className='max-w-screen-xl flex justify-center items-center mx-auto'>
            <motion.div 
              className='flex-row justify-center items-center px-6 py-8 md:py-12'
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.h2 variants={itemVariants} className='md:text-3xl text-xl font-semibold text-[#326B3F]'>
                Why Choose Transcurators<br/>
                <span className='md:text-3xl text-xl font-semibold text-black'> for Editing and Proofreading Services in India?<br/>
                </span>
              </motion.h2>
              <motion.ul 
                className='mt-6 space-y-4'
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                {[
                  {
                    heading: "Proofreading by Industry Experts",
                    desc: "Our professionals from diverse domains ensure your academic, business, or creative content is perfectly tailored, accurate, and polished for a flawless presentation."
                  },
                  {
                    heading: "Quick and Efficient Deliveries",
                    desc: "We provide fast turnarounds without compromising quality, meeting tight deadlines with precision through our streamlined online proofreading services."
                  },
                  {
                    heading: "Quality Assurance",
                    desc: "Each piece is reviewed multiple times by experts to guarantee grammatical, logical, and stylistic accuracy, delivering content that's clear and error-free."
                  },
                  {
                    heading: "Ongoing Support and Clear Communication",
                    desc: "We maintain open communication throughout the process, offering timely updates, revisions, and support to keep you informed and confident in every edit."
                  },
                  {
                    heading: "Cost-Effective Solutions",
                    desc: "Our affordable editing and proofreading services provide high-quality results at competitive rates, giving individuals and businesses great value for their investment."
                  },
                  {
                    heading: "Customized Editing Based on Your Needs",
                    desc: "From academic to business to creative writing, we tailor our editing to suit your voice, goals, and audience, ensuring content that truly reflects your intent."
                  },
                  {
                    heading: "Scalability for Large Projects",
                    desc: "We're equipped to handle projects of all sizes, delivering consistent quality across high-volume content with our scalable editing and proofreading solutions."
                  },
                  {
                    heading: "Confidentiality and Data Security",
                    desc: "Your documents are handled with the highest confidentiality and protected through encryption and strict data security protocols during every step of the process."
                  }
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
                    <span>
                      <span className="font-semibold">{item.heading}</span>: {item.desc}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
              <motion.p variants={itemVariants} className='text-sm font-medium mt-6 text-[#6a6a6a]'>
                Speak with our professional team today.
              </motion.p>
              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row md:mt-4 mt-4"
              >
                <motion.button 
                  onClick={() => {
                      document.getElementById('contact-form').scrollIntoView({ 
                          behavior: 'smooth',
                          block: 'start'
                      });
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-lg hover:shadow-xl transition-all duration-500 font-medium text-base bg-[#326B3F] text-white hover:-translate-y-1"
                >
                  Contact Our Experts
                </motion.button>
              </motion.div>
            </motion.div>
            <motion.div 
              className='flex items-center mx-1/2 scale-70'
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <img src="/Typewriter-pana.png" alt="Icon1" className='md:block hidden' />
            </motion.div>
          </div>
        </div>
      </motion.section>
        
      <section className="max-w-screen-xl mx-auto md:mt-22 mt-12 px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="md:text-3xl text-2xl mt-4 font-medium">
            Hear From Our <span className="text-[#326B3F]">Industry-Leading Clients</span>
          </h2>
          <p className="text-[#6a6a6a] text-sm mt-4 max-w-2xl mx-auto">
            Read how industry leaders have benefited from our proofreading services, enhancing their content's impact and readability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              quote: "Transcurators elevated our research papers with their meticulous academic proofreading. Their editors understood complex terminology and delivered spotless, submission-ready content.",
              name: "Dr. Ananya Verma",
              title: "Senior Researcher",
              org: "Delhi University",
              tag: "Academic Excellence",
              highlight: "Spotless, submission-ready content"
            },
            {
              quote: "As a digital marketing agency, clarity and engagement are key. Transcurators' editing refined our copy for better SEO and customer response. Their speed and accuracy are unmatched.",
              name: "Ravi Mehta",
              title: "Founder",
              org: "MarketNest",
              tag: "Marketing Success",
              highlight: "Better SEO & engagement"
            },
            {
              quote: "Our product manuals and business documents have never looked more professional. Transcurators' editing improved tone, eliminated errors, and added real polish to our communications.",
              name: "Anjali Rao",
              title: "Operations Manager",
              org: "TechNova Pvt Ltd.",
              tag: "Business Impact",
              highlight: "Professional polish"
            },
          ].map((testimonial, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
              className="relative group h-[180px]"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#326B3F] to-[#A8D5BA] rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
              <div className="relative bg-white p-4 rounded-lg shadow-sm h-full flex flex-col">
                <p className="text-[#6a6a6a] text-sm italic flex-grow line-clamp-3">"{testimonial.quote}"</p>
                <div className="mt-2">
                  <p className="font-semibold text-sm text-[#1b223c]">{testimonial.name}</p>
                  <p className="text-[10px] text-[#6a6a6a]">{testimonial.title} @ {testimonial.org}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {[
            {
              quote: "I was amazed by how they edited my novel without losing my voice. Their suggestions improved structure, flow, and character depth. Transcurators is a gem for authors!",
              name: "Rohan Iyer",
              title: "Author",
              org: "Whispers of the Monsoon",
              tag: "Creative Writing",
              highlight: "Enhanced flow & depth"
            },
            {
              quote: "From grammar to formatting, their academic editing service helped me get published in a top-tier journal. The turnaround was fast, and the quality was exceptional.",
              name: "Sneha Pillai",
              title: "PhD Candidate",
              org: "Jawaharlal Nehru University",
              tag: "Research Excellence",
              highlight: "Fast turnaround, exceptional quality"
            }
          ].map((testimonial, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              whileHover={{ y: -8, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
              className="relative group h-[180px]"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#326B3F] to-[#A8D5BA] rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
              <div className="relative bg-white p-4 rounded-lg shadow-sm h-full flex flex-col">
                <div className="mb-4">
                </div>
                <p className="text-[#6a6a6a] text-sm italic flex-grow line-clamp-3">"{testimonial.quote}"</p>
                <div className="mt-2">
                  <p className="font-semibold text-sm text-[#1b223c]">{testimonial.name}</p>
                  <p className="text-[10px] text-[#6a6a6a]">{testimonial.title} @ {testimonial.org}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
        
      <motion.section 
        className="relative bg-[#429054]/20 py-16 mt-12 md:mt-22 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center">
          <motion.div 
            className="w-full md:w-5/12 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="max-w-md">
              <h2 className="md:text-3xl text-xl font-medium mb-3">
                Explore TransCurators'
                <span className="text-[#326B3F] block mt-1">Services</span>
              </h2>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-7/12 md:pl-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="prose prose-sm max-w-none">
              <p className="text-[#6a6a6a] mb-6">
                <span className="block mb-4">
                  At Transcurators, we provide a comprehensive array of professional proofreading and editing services designed to meet the requirements of both individuals and business organisations. From academic manuscripts to business documents and creative works, our skilled editors make sure that your content is refined to perfection.
                </span>

                <span className="block mb-4">
                  Discover our services to learn how we can enhance the quality of your writing, clarify language, and enhance readability. Whether you need academic proofreading, marketing write-up editing, or manuscript polishing, Transcurators can be there to assist.
                </span>

                <span className="block">
                  Click the button below to see our full range of services and learn how we can assist you with making your content perfect!
                </span>
              </p>
              
              <motion.div 
                className="mt-8"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button 
                  className="inline-flex flex-row items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-lg hover:shadow-xl transition-all duration-500 font-medium text-base bg-[#326B3F] text-white hover:-translate-y-1">
                  Explore More
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <motion.div 
          className="absolute top-0 right-0 w-32 h-32 bg-[#326B3F]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"
          animate={{ 
            x: Math.sin(scrollY * 0.01) * 10 + "px",
            y: Math.cos(scrollY * 0.01) * 10 - 50 + "%",
          }}
          transition={{ type: "spring", stiffness: 10 }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-0 left-1/4 w-24 h-24 bg-[#326B3F]/10 rounded-full translate-y-1/3 blur-2xl"
          animate={{ 
            x: Math.cos(scrollY * 0.01) * -15,
            y: Math.sin(scrollY * 0.01) * -15 + 33 + "%",
          }}
          transition={{ type: "spring", stiffness: 5 }}
        ></motion.div>
      </motion.section>
            
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
              className="cursor-pointer group relative text-[#326B3F] font-regular tracking-wide transition-all duration-300 ease-in-out active:border-b-0 active:translate-y-1"
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

      <section>
        <motion.div 
          className="w-full mb-20 md:mt-22 mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h2 className="md:text-3xl text-2xl font-medium text-black">
            Ready to Kickstart
            </h2>
            <p className="md:text-3xl ml-2 text-2xl justify-center text-[#326B3F]">
            Your Content Writing Career?
            </p>
            <motion.div 
              className="mt-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                className="inline-flex flex-row items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-lg hover:shadow-xl transition-all duration-500 font-medium text-base bg-[#326B3F] text-white hover:-translate-y-1"
              >
                Join Our Team Now
              </button>
            </motion.div>
          </div>
        </motion.div>
      </section>

    </>
  );
}
export default Proofreading;