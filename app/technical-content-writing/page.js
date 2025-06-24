"use client";

import { CarouselTwo } from "../components/caruseltwo/page";
import Carousel from "../components/carousel/page";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from 'next/image';

const TechnicalWriting = () => {
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
    const services = [
        {
          icon: "/messageIcon.png",
          title: "Technical Documentation",
          description: "Precise, structured, and user-attentive documentation lowers confusion and minimizes support queries. Whether it’s user manuals, operation guides, or SOPs, we ensure your content improves efficiency.",
        },
        {
          icon: "/messageIcon.png",
          title: "Software & IT Documentation",
          description: "From API documentation to troubleshooting guides, our writers help IT firms deliver seamless user experiences. We simplify technical jargon into practical, easy-to-follow content for developers and end users alike.",
        },
        {
          icon: "/messageIcon.png",
          title: "Whitepapers & Case Studies",
          description: "Build credibility with research-driven whitepapers and case studies that showcase expertise and success stories. A leading SaaS company used our case study framework to highlight its product’s impact, resulting in a 35% increase in B2B inquiries.",
        },
        {
          icon: "/messageIcon.png",
          title: "Product Descriptions & Specifications",
          description: "Clarity is key in product communication. We craft detailed yet engaging product descriptions—whether for cutting-edge software, hardware components, or SaaS solutions—to drive conversions and user trust.",
        },
        {
          icon: "/messageIcon.png",
          title: "Compliance & Regulatory Documentation",
          description: "Navigating legal and compliance requirements can be complex. We create industry-specific security manuals, guideline documents, and regulatory content aligned with federal and global standards. Recently, we helped a health tech firm refine its compliance documentation, leading to faster approval processes and reduced audit risks.",
        },
      ];
     const benefits = [
  { 
    title: "Industry Expertise That Yields Outcomes", 
    Content: "Technical writing demands in-depth industry understanding. At our technical writing company, proficients specialise in IT, engineering, healthcare, finance, and even SaaS, guaranteeing your documentation satisfies industry norms while staying available and worthwhile." 
  },
  { 
    title: "Converting Intricacy into Clarity", 
    Content: "Technical content should not be like deciphering a riddle. We facilitate tricky notions, making them easy to comprehend. When a top SaaS technical writing company bumbled with high bounce rates because of thick, jargon-rich documentation, we restructured their content into reader-friendly and well-organised sections. The outcome? A 40% boost in user attention and enhanced consumer retention." 
  },
  { 
    title: "SEO-Optimised Without Compromising Accuracy", 
    Content: "Technical documentation should not only inform but also be discoverable. At our tech writing company, SEO-optimised content ranks well in search engines while maintaining technical precision, helping businesses improve their online visibility." 
  },
  { 
    title: "User-Focused Content That Drives Results", 
    Content: "Excellent documentation is devised for the end-user. Whether it's consumers, workers, or stakeholders, we develop content that guarantees seamless understanding. A swift-growing EdTech firm partnered with us to improve their study materials, making them more interesting and structured. This ushered in a 28% reduction in drop-off rates and raised learner fulfilment." 
  },
  { 
    title: "Comprehensive Technical Writing Services", 
    Content: "From API documentation and training manuals to whitepapers and compliance reports, we provide high-quality content tailored to your business needs." 
  },
  { 
    title: "Let’s Build Content That Works", 
    Content: "Nicely structured documentation improves user knowledge, promotes efficiency, and boosts credibility. Partner with us today for content that makes an impact!" 
  },
];

const faqs = [
    {
      question: "What is technical writing?",
      answer:
        "Technical writing is the method of constructing precise, succinct, and structured content such as user manuals, whitepapers, API documentation, and product handbooks. It streamlines convoluted data, making it easier for users, creators, and industries to comprehend technical operations, products, and assistance.",
      id: 1,
    },
    {
      question: "Why is technical writing noteworthy?",
      answer:
        "Technical writing services enhance user knowledge, lower bewilderment, and secure adherence to industry norms. Effortlessly structured documentation permits corporations to enrich consumer completion, lower support questions, and uphold regulatory observance, making it an integral piece of product evolution and service delivery.",
      id: 2,
    },
    {
      question: "How do I hire a technical writer?",
      answer:
        "You can employ a specialised writer by reaching out to a steadfast technical writing agency like ours. We evaluate your necessities, industry demands, and assignment range to deliver bespoke resolutions, guaranteeing your documentation is factual, enthralling, and straightforward to comprehend.",
      id: 3,
    },
    {
      question: "Do you provide SEO-optimized technical content?",
      answer:
        "Yes, our tech writing company can assemble SEO-friendly technical content that upholds technical precision while enhancing online visibility. Our writers guarantee the content is keyword-optimized without compromising clearness, making it both instructive and search-engine cordial.",
      id: 4,
    },
    {
      question: "Can you write API documentation?",
      answer:
        "Indeed! Our tech writing company specializes in developing elaborate API documentation, ensuring creators can seamlessly blend and operate with your software. We concentrate on clarity, texture, and accurate structuring to improve usability.",
      id: 5,
    },
    {
      question: "What industries do you supply technical writing assistance for?",
      answer:
        "We deliver specialised writing for various industries, including IT, healthcare, fintech, teaching, and SaaS. Our team guarantees industry-specific precision while streamlining intricate topics for eclectic audiences.",
      id: 6,
    },
    {
      question: "How does technical writing enhance user knowledge?",
      answer:
        "Well-structured technical writing delivers straightforward instructions, troubleshooting measures, and best approaches, letting users comprehend and utilise a product or service effortlessly. It eliminates bafflement and lowers the necessity for regular support.",
      id: 7,
    },
    {
      question: "What sorts of technical documents do you construct?",
      answer:
        "We develop user manuals, whitepapers, case investigations, software documentation, API handbooks, product definitions, observance documents, and training materials catering to both specialised and non-specialised audiences.",
      id: 8,
    },
    {
      question: "Do you deliver editing and proofreading for existing technical content?",
      answer:
        "Yes! We offer editing and even proofreading to enrich transparency, readability, and precision. We guarantee your current documentation is mistake-free, entertaining, and fits well with industry benchmarks.",
      id: 9,
    },
    {
      question: "How do you confirm precision in technical writing?",
      answer:
        "Our writers cooperate with industry aces, perform detailed analyses, fact-check facts, and use ascertained sources to preserve precision. We also observe standardized penmanship frameworks to guarantee precision.",
      id: 10,
    },
    {
      question: "Can you produce observation and regulatory documents?",
      answer:
        "Yes, we specialize in adherence documentation for various industries. Our content fits with legal and regulatory measures, assuring firms satisfy compliance needs seamlessly.",
      id: 11,
    },
    {
      question: "Do you deliver white-label technical writing assistance?",
      answer:
        "Yes, we deliver white-label technical writing solutions for corporations and agencies that require proficient content under their brand moniker. Our technical writing services guarantee consistency with your business’s style.",
      id: 12,
    },
    {
      question: "How long does it take to conclude a technical writing assignment?",
      answer:
        "Assignment timelines differ based on intricacy, word count, and research needs. Small documents may take a few days, while comprehensive manuals or whitepapers may demand weeks. We guarantee punctual delivery without compromising quality.",
      id: 13,
    },
    {
      question: "What makes your technical writing agency different?",
      answer:
        "We converge technical expertise, research-obsessive writing, and SEO optimization to concoct highly adequate content. Our team concentrates on transparency, industry pertinence, and user attention, providing top-notch documentation.",
      id: 14,
    },
    {
      question: "How do I get started with your technical writing services?",
      answer:
        "Getting initiated is easy! Contact us today, and our team will understand your assignment needs, suggest tailored resolutions, and guarantee your technical content is formulated to your satisfaction.",
      id: 15,
    },
  ];
  
    const processSteps = [
        {
          number: 1,
          title: "Understanding Your Requirements",
          description: "We are a leading technical content writing service in India, and we begin by analyzing your industry, target audience, and documentation needs. Whether it’s a software manual or a compliance document, we tailor our approach accordingly.",
        },
        {
          number: 2,
          title: "Content Structuring for Maximum Readability",
          description: "A well-organized document enhances comprehension. We create logical content flow, using headings, subheadings, and bullet points for effortless navigation.",
        },
        {
          number: 3,
          title: "Drafting with Technical Precision",
          description: "At our tech writing company, writers formulate explicit, succinct, and engaging content, guaranteeing technical exactness without overwhelming the reader.",
        },
        {
          number: 4,
          title: "Editing & Proofreading",
          description: "Every manuscript undergoes countless quality inspections to refine vocabulary, correct blunders, and improve clarity.",
        },
        {
          number: 5,
          title: "Final Delivery & Revisions",
          description: "We blend your feedback and adjust the content to perfection before the submission.",
        },
      ];
      
      const [showAllAnimations, setShowAllAnimations] = useState(false);
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
                
                <div className="w-full md:w-[55%] lg:w-[50%] xl:w-[60%] flex flex-col justify-center space-y-4 md:space-y-4 lg:space-y-6 px-5 md:px-8 lg:px-12 overflow-hidden z-10">
                  
                    
                    <h1 className="text-white font-medium text-[28px] sm:text-[34px] md:text-[50px] lg:text-[50px] xl:text-[60px] text-left leading-none md:leading-none tracking-tight mb-1 sm:mb-2 md:mb-2">
                        Technical Writing Services
                        <span className="text-[#326B3F] block mt-2">
                            That Speak to Your Audience
                        </span>
                    </h1>
                    
                    <p className="text-[#6a6a6a] mt-6 text-lg leading-relaxed max-w-2xl">
                        Bringing transparency to intricacy with our technical writing services 
                        that streamline, engross, and provide influence.
                    </p>
                    
                    <div className="mt-10 flex flex-col sm:flex-row items-start justify-start gap-4">
                        <button className="gap-2 md:gap-3 flex justify-center items-center self-start text-[#6a6a6a] text-xs sm:text-sm bg-gray-50 backdrop-blur-md lg:font-medium isolation-auto 
                        border-gray-50 before:absolute before:inset-0 before:w-0 before:h-full before:transition-all before:duration-500 before:bg-[#326B3F]
                        hover:text-gray-50 hover:before:w-full before:rounded-full before:-z-10 relative z-10 px-3 md:px-4 py-1.5 md:py-2 overflow-hidden border-2 rounded-full group tracking-wide w-fit">
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
                        </button>
                    </div>
                </div>
                <div className="hidden md:block md:w-[45%] lg:w-[50%] xl:w-[55%]"></div>
            </section>
            
            <section>
            <div className="text-center mb-16 mt-22 md:mt-12space-y-4">
        <h2 className="md:text-3xl text-xl mt-4 font-medium">
          Our Technical Writing Services{' '}<br />
          <span className="text-[#326B3F]">in India</span>
        </h2>
        <p className="text-[#6a6a6a] text-sm mt-4">
        At TransCurators, we craft clear, thrilling, and user-friendly specialised content that facilitates intricate information.<br/> As a trusted technical writing company, we support firms and experts in communicating effectively with their audience.</p>
      </div>

            <div className=" max-w-screen-xl mx-auto grid grid-cols-1 gap-4 lg:grid-cols-5 lg:gap-5 md:mt-16 mt-12 text-left">
                                    {services.slice(0, 5).map((service, index) => (
                                      <div key={index} className='flex items-start justify-start'>
                                        <div className={`h-auto p-4 hover:bg-gray-50 rounded-lg cursor-pointer transition duration-200 group `}>
                                          <Image src={service.icon} alt={service.title} width={32} height={32} className='group-hover:translate-x-1.5 transition-all ease-in-out duration-300' />
                                          <p className='text-md font-semibold text-[#1B223C] mt-2'>{service.title}</p>
                                          <p className='text-sm font-regular text-[#6a6a6a] mt-2 '>{service.description}</p>
                                        </div>
                                      </div>
                                    ))}
                            </div>
            </section>
            <div className="flex max-w-screen-xl mx-auto gap-6 my-24">
                  <div className="text-center flex">
                      <div className="w-full overflow-hidden text-left flex flex-col gap-2 justify-center">
                        
                        <h2 className=" text-[30px] md:text-[60px]  font-bold text-black leading-16">
                          Why Pick Our<br/> <span className="text-[#326B3F]">Technical Writing Services?</span>
                        </h2>
                        <p className="text-sm text-[#6a6a6a] font-regular ">We are a technical writing agency that transforms convoluted technical input into clear, accurate, and user-friendly content. From software documentation to adherence manuals, we guarantee precision, professionalism, and industry relevancy.</p>
                      </div>
                  </div>
            
                  <div className="relative flex flex-col overflow-hidden gap-9 justify-center items-center mx-auto">
                      <div className="max-w-screen-xl flex justify-center items-center mx-auto">
                        <Carousel gap={40} className="h-fit">
                          {benefits.map((benefits, index) => (
                            <div key={index} className="w-[400px] p-6 bg-white shadow-lg flex flex-col items-center justify-center text-center">
                              <h4 className="text-md font-semibold pointer-events-none">{benefits.title}</h4>
                              <p className="mt-3 text-sm text-[#444] italic pointer-events-none">"{benefits.Content}"</p>
                            </div>
                          ))}
                        </Carousel>
                      </div>
            
                      <div className="max-w-screen-xl flex justify-center items-center mx-auto">
                        <CarouselTwo gap={40} className="h-fit">
                          {benefits.map((benefits, index) => (
                            <div key={index} className="w-[400px] p-6 bg-white shadow-lg flex flex-col items-center justify-center text-center">
                              <h4 className="text-md font-semibold pointer-events-none">{benefits.title}</h4>
                              <p className="mt-3 text-sm text-[#444] italic pointer-events-none">"{benefits.Content}"</p>
                            </div>
                          ))}
                        </CarouselTwo>
                      </div>
                    </div>
                </div>
            <div className='relative bg-[#429054]/20 mt-12 h-auto md:mt-22 flex justify-center items-center mx-auto'>
        <div className='max-w-screen-xl flex justify-center items-center mx-auto'>
        <div className='flex justify-center items-center mx-auto scale-70'>
          <Image src="/section3.png" alt="Icon1" width={300} height={300} className='md:block hidden' />
        </div>
        <div className='flex-row justify-center items-center px-6 py-6 md:py-0 '>
          <h2 className='md:text-3xl text-xl font-semibold text-[#326B3F]'>
          Why We Are the Preferred<br/>
          <span className='md:text-3xl text-xl font-semibold text-black'>
            Technical Writing Company<br/>
          </span>
          </h2>
          <p className='text-sm font-regular mt-6 text-[#6a6a6a]'>
          At our technical writing company, we go past just assembling documents—we draft content that streamlines complexity, improves user experience, and demonstrates your power in the industry. Here’s why enterprises rely on us:
          </p>
          <ul className='mt-6 space-y-4'>
            {[
  "Certified Technical Writers with Industry Expertise – Our writers harbour in-depth familiarity across numerous fields, guaranteeing precision and transparency in every document.",
  "Affordable Solutions for All Business Sizes – Whether you’re a startup or a firm, our pricing is created to fit your funding without compromising quality.",
  "Fast & Reliable Turnaround – We provide high-quality content within deadlines, guaranteeing you never encounter project uncertainties.",
  "Strict Confidentiality & Data Security – We prioritize your privacy, guarding liable business data via strong protection steps.",
  "Brand-Consistent Content – We guarantee your technical records align with your brand’s style, making them edifying yet fascinating."
].map((item, index) => (
              <li key={index} className='text-sm font-normal text-[#6a6a6a] flex items-center gap-2'>
                <span className='w-5 h-5 flex items-center justify-center rounded-full bg-[#326B3F] text-white'>
                  <svg className="h-full p-0.5" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M6.5 10.7l-2.9-2.9-1.1 1.1 4 4 8-8-1.1-1.1z"></path>
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>

        </div>

        </div>
      </div>
      <div className="text-center mb-8 space-y-4 md:mt-22 mt-12 max-w-screen-xl mx-auto">
                                        <h2 className="md:text-3xl text-xl font-medium text-black">
                                                    How Our Technical Writing <br/> <span className="text-[#326B3F]">Service Process Works</span>{' '}<br />
                                        </h2>
                                        <p className="text-[#6a6a6a] text-sm mt-4">
                                        Our tech writing company believes in a structured approach to technical writing, ensuring clarity,<br/> accuracy, and readability. Here’s how we bring your documentation to life with our technical writing services:</p>
                                    </div>
                                    <section className="max-w-screen-xl mx-auto text-left py-8">
                                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                            {processSteps
                                                .slice(0, 3)
                                                .map((benefit) => (
                                                    <motion.div 
                                                        key={benefit.number}
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ duration: 0.5, delay: benefit.number * 0.1 }}
                                                    >
                                                        <span className="text-[#326B3F] text-2xl">{benefit.number}</span>
                                                        <p className="mt-2 text-sm font-semibold text-gray-500">{benefit.title}</p>
                                                        <p className="mt-2 text-sm text-gray-500">{benefit.description}</p>
                                                    </motion.div>
                                            ))}
                                        </div>
                                        
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ 
                                                height: showAllAnimations ? "auto" : 0,
                                                opacity: showAllAnimations ? 1 : 0
                                            }}
                                            transition={{ duration: 0.5, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                                                {processSteps
                                                    .slice(3)
                                                    .map((benefit) => (
                                                        <motion.div 
                                                            key={benefit.number}
                                                            initial={{ opacity: 0, y: 20 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ duration: 0.5, delay: (benefit.number - 4) * 0.1 }}
                                                        >
                                                            <span className="text-[#326B3F] text-2xl">{benefit.number}</span>
                                                            <p className="mt-2 text-sm font-semibold text-gray-500">{benefit.title}</p>
                                                            <p className="mt-2 text-sm text-gray-500">{benefit.description}</p>
                                                        </motion.div>
                                                ))}
                                            </div>
                                        </motion.div>
                        
                                        <div className="flex justify-center mt-8">
                                            <button 
                                                onClick={() => setShowAllAnimations(!showAllAnimations)}
                                                className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-lg hover:shadow-xl transition-all duration-500 font-medium text-base bg-[#326B3F] text-white hover:-translate-y-1"
                                            >
                                                {showAllAnimations ? "Show Less" : "Show All"}
                                            </button>
                                        </div>
                                    </section>
                                    <section>
                <div className="max-w-screen-xl mx-auto px-4 mt-12 md:mt-12 py-16">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        {/* Photo Section */}
                        <div className="w-full md:w-1/2">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-[#429054]/20 rounded-lg transform rotate-3"></div>
                                <Image
                                    src="https://images.unsplash.com/photo-1624969862644-791f3dc98927?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                                    alt="Animation Process"
                                    width={2340}
                                    height={400}
                                    className="relative w-full h-[400px] object-cover rounded-lg shadow-lg"
                                />
                            </div>
                        </div>
                        {/* Text Section */}
                        <div className="w-full md:w-1/2 space-y-6">
                            <h1 className="md:text-3xl text-xl font-medium">
                            Clear. Precise. Powerful.<br/><span className='text-[#326b3F]'> Technical Writing That Works.</span>
                            </h1>
                            <p className="text-[#6a6a6a] text-sm">
                            Struggling with complex documentation? We from TransCurators turn technical jargon into clear, engaging, and impactful content tailored to your industry. Whether it’s software manuals,  technical writing services, whitepapers, or compliance documents, we’ve got you covered.
                            </p>
                            <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-lg hover:shadow-xl transition-all duration-500 font-medium text-base bg-[#326B3F] text-white hover:-translate-y-1">
                                Get Started Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <div className='relative bg-[#429054]/20 mt-12 h-auto md:mt-22 flex justify-center items-center mx-auto'>
        <div className='max-w-screen-xl flex justify-center items-center mx-auto'>
        <div className='flex-row justify-center items-center px-6 py-6 md:py-0 '>
          <h2 className='md:text-3xl text-xl font-semibold text-[#326B3F]'>
          Industries We
          <span className='md:text-3xl text-xl font-semibold text-black'> Help<br/>
          </span>
          </h2>
          <p className='text-sm font-regular mt-6 text-[#6a6a6a]'>
          Our technical writing services expertise traverses a broad spectrum of industries, guaranteeing bespoke documentation that satisfies sector-precise needs:
          </p>
          <ul className='mt-6 space-y-4'>
            {[
  "IT & Software – API documentation, software user manuals, system architecture guides, and SaaS documentation.",
  "Engineering & Manufacturing – Standard operating procedures, technical specifications, and process manuals.",
  "Healthcare & Pharma – Medical device documentation, regulatory compliance guides, and healthcare reports.",
  "Finance & Banking – Investment reports, compliance documents, and financial service manuals.",
  "Telecommunications – Network infrastructure documentation, installation guides, and service manuals.",
  "Education & E-learning – Study materials, training manuals, and instructional strategy content."
].map((item, index) => (
              <li key={index} className='text-sm font-normal text-[#6a6a6a] flex items-center gap-2'>
                <span className='w-5 h-5 flex items-center justify-center rounded-full bg-[#326B3F] text-white'>
                  <svg className="h-full p-0.5" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M6.5 10.7l-2.9-2.9-1.1 1.1 4 4 8-8-1.1-1.1z"></path>
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
          <p className='text-sm font-regular mt-6 text-[#6a6a6a]'>
          With being a top technical content writing service in India, our profound industry familiarity and research-backed process, we guarantee your specialised documentation is not only instructive but also captivating and easy to comprehend. Let’s take your business transmission to peaks with our adept technical writing!
          </p>
        </div>
        <div className='flex justify-center items-center mx-auto scale-70'>
          <Image src="/section3.png" alt="Icon1" width={300} height={300} className='md:block hidden' />
        </div>
        </div>
      </div>
      <div className="w-full py-8 mb-20 md:mt-22 mt-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="md:text-3xl text-xl font-medium text-black">
          For Writers - 
        </h2>
        <p className="md:text-3xl ml-2 text-xl font-medium justify-center text-[#326B3F]">
        Join a network of skilled technical writers.
        </p>
        <div className="mt-8">
          <a
            href="/careers"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-lg hover:shadow-xl transition-all duration-500 font-medium text-base bg-[#326B3F] text-white hover:-translate-y-1"
            >
            Apply Today
          </a>
        </div>
      </div>
    </div>
    <div className='max-w-screen-xl flex justify-center md:mt-20 mt-12 mb-10 mx-auto items-center'>     
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

      <div className="flex justify-center mt-6">
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
          className="cursor-pointer group relative text-[#326B3F] my-8 font-regular tracking-wide transition-all duration-300 ease-in-out active:border-b-0 active:translate-y-1">
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

export default TechnicalWriting;