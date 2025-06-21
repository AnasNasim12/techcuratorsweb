"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0
  }
};

const ContentBangalore = () => {
      
    const faqs = [
        {
          question: "What makes TransCurator's content writing company in Bangalore unique?",
          answer:
            "TransCurator produces high-calibre, tailored content that reflects your brand's unique tone and objectives. We take the time to understand your audience's needs and assemble content that accurately conveys your message. We aim to help your brand shine by using plain, simple, and effective language that engages your audience.",
        },
        {
          question: "How do I get started with your content writing services in Bangalore?",
          answer:
            "Reach out to us for a free consultation, and we will discuss what type of content you need and learn about your business objectives. Based on that, we will develop a custom content plan tailored to your brand and goals and help you connect with the right audience. We aim to make the process as easy as possible so you can receive quality content that works for your company.",
        },
        {
          question: "Do you offer SEO-friendly content in your content writing services in Bangalore?",
          answer:
            "Our group has experience producing SEO-friendly materials, which can help boost your website's visibility on search engines like Google. They use the best keywords and/or techniques that help increase your overall presence and traffic to your website naturally. This means more customers will have the ability to find your business during their search online. Ultimately, we want to help you increase your traffic correctly with smart and engaging content.",
        },
        {
          question: "Can you handle large-scale content projects?",
          answer:
            "Of course! Our skilled staff can manage writing projects of any type or size, big or small. Our goal is to produce high-quality content that meets your expectations and aligns with your brand; whatever the size of the project, we will meet agreed-upon deadlines without sacrificing quality. You can rely on us for consistent professionalism and quality content every step of the way.",
        },
        {
          question: "What content do you provide in your content writing services in Bangalore?",
          answer:
            "We provide an extensive variety of content types to meet your brand's needs. This encompasses everything from blog posts to articles, web content, social media posts, and more. All the content we generate is designed explicitly for your brand style, voice, and goals. Whether you need content to inform, engage, or promote, we can ensure it speaks clearly to your audience while supporting your business objectives.",
        },
        {
          question: "How do you ensure the originality of the content?",
          answer:
            "We guarantee that all the content we produce will be 100% original and unique. We do so by using the most sophisticated plagiarism-checking tools and by following a strong quality control process. Every content piece is reviewed to ensure quality before being delivered to you. We aim to produce high-quality content that is fully authentic and produced specifically for your brand.",
        },
        {
          question: "What industries do you serve with your content writing services in Bangalore?",
          answer:
            "We develop content across a variety of industries, from technology to healthcare, finance, education, and others. Our staff recognises that each industry has its own unique set of needs. Therefore, we develop content that speaks to the specific needs and language of your industry. Whether you’re a large production company or a small family-owned coffee shop, we will ensure that your content meets your audience and industry standards.",
        },
        {
          question: "How can your content writing services in Bangalore help my business grow?",
          answer:
            "Effective copywriting creates awareness for your brand on the web, interacts with your ideal audience, and builds trust. It shares the right message in the right way to attract more visitors to your site and create customers. This results in leads, engagement, and, ultimately, greater opportunity to grow your business through strong, clear content.",
        },
        {
          question: "What is the turnaround time for your content writing services in Bangalore?",
          answer:
            "The delivery of the project is always based on its size and complexity, but we always finish work when we say we will finish the job. We never sacrifice quality or effectiveness, and every content piece we create is consistently of the quality that you expect from a professional. We want you to rely on us to be timely, professional, and consistent regardless of action size.",
        },
        {
          question: "Can I request revisions to the content you deliver?",
          answer:
            "Yes, we provide revisions based on your feedback to make sure the final content matches your needs perfectly. Our goal is to deliver content that fits your brand’s tone and message. If something needs to be changed, we’ll work with you to make it right. Your satisfaction is important to us, and we’re committed to getting the content just the way you want it.",
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
      const contentWritingProcess = [
        {
          number: 1,
          description: "Are you seeking to make an impact with your content? Our Bangalore content writing services offer you a strategic advantage.",
        },
        {
          number: 2,
          description: "We produce content that is attractive, understandable, and satisfies your requirements.",
        },
        {
          number: 3,
          description: "Our team of skilled writers delivers top-notch content that connects with readers, whether you need blog posts, promotional content, or website copy.",
        },
        {
          number: 4,
          description: "Our primary goal is to create unique content that pulls readers in and generates impact. Select our content writing services from Bangalore to improve your brand's voice and establish a strong connection with your desired audience.",
        },
        {
          number: 5,
          description: "Let us guide you in leaving a lasting impression with every word.",
        },
      ];
      
      
       const [showAllAnimations, setShowAllAnimations] = useState(false);
    const servicesoffered = [
        {
            title: "Content Writing Service",
            description:
              "Transform your ideas into captivating content with our expert writing services. We create engaging, clear, and original content tailored to your needs. Let us help you communicate your message effectively and stand out.",
          },
          {
            title: "Video Animation Service",
            description:
              "Transform your ideas into stunning visuals with our video animation service. We create engaging, custom animations to bring your story to life and captivate your audience.",
          },
          {
            title: "Designing Service",
            description:
              "Transform your vision into reality with our expert design services. We craft unique, eye-catching designs that perfectly match your needs and make a lasting impression.",
          },
          {
            title: "SOP Writing Service",
            description:
              "Our expert SOP writing service crafts personalized, compelling statements to boost your application. Get noticed with our professional help!",
          },
          {
            title: "Translation Service",
            description:
              "Need accurate translations? Our expert team delivers fast, reliable services in multiple languages, ensuring your message reaches the right audience clearly and effectively.",
          },
          {
            title: "Voice Over",
            description:
              "Bring your script to life with professional voice-over services. We deliver clear, engaging, and captivating voices tailored to your project's needs.",
          },
      ];
      const Process = [
        {
          number: 1,
          title: "Understanding Your Needs",
          description:
            "We start by thoroughly analyzing your requirements and goals, ensuring our material is consistent with your brand's voice and objectives.",
        },
        {
          number: 2,
          title: "Research and Planning",
          description:
            "Our team conducts extensive research and develops a thorough content plan to ensure correctness and relevancy.",
        },
        {
          number: 3,
          title: "Content Creation",
          description:
            "Our experienced writers create engaging and original material that is targeted to your specific needs while maintaining high quality and clarity.",
        },
        {
          number: 4,
          title: "Review and Revisions",
          description:
            "We thoroughly evaluate the material and make any required adjustments based on your feedback to ensure your satisfaction.",
        },
        {
          number: 5,
          title: "Delivery and Support",
          description:
            "We provide the completed content on schedule and offer continuous assistance with further changes or suggestions.",
        },
      ];
      
    const contentWriting=[
        {
            title: "",
            description: "Our skilled writers craft compelling, original content tailored to your needs. They excel in clear, engaging writing that captures attention. Trust our experts to deliver top-quality work, helping your message stand out and resonate.",
            icon: "/messageIcon.png"
          },
          {
            title: "",
            description: "Boost your website's presence with SEO visibility. Improve search rankings, attract more visitors, and grow your business online. Optimize your content, use relevant keywords, and track progress for better results.",
            icon: "/messageIcon.png"
          },
          {
            title: "",
            description: "Create a unique and consistent brand voice to connect with your audience. Speak directly to them, reflect your values, and ensure every message aligns with your identity. Build trust and stand out in the market.",
            icon: "/messageIcon.png"
          },
          {
            title: "",
            description: "Discover top-notch content that captivates and informs. Our expertly crafted articles, blogs, and web pages ensure clarity, engagement, and value. Enhance your brand with high-quality writing that stands out and resonates with your audience.",
            icon: "/messageIcon.png"
          },
          {
            title: "",
            description: "Boost your website's traffic with engaging, well-crafted writing. Discover the secrets to creating content that attracts and retains readers, enhances your online presence, and drives meaningful results.",
            icon: "/messageIcon.png"
          }
          ];
          
          const services = [
            {
              icon: "/messageIcon.png",
              title: "Engaging Content",
              description: "Deliver relevant and fascinating content for your market. Use relatable language, stories, and images to leave a lasting impression.",
            },
            {
              icon: "/messageIcon.png",
              title: "SEO Boost",
              description: "TransCurator offers SEO services that elevate search rankings with optimised content that attracts more visitors, helping you rank higher for your website.",
            },
            {
              icon: "/messageIcon.png",
              title: "Consistent Messaging",
              description: "Ensure your messaging is consistent to make your brand stand out. Establish reliability, solidify your identity, and successfully interact with your consumers.",
            },
            {
              icon: "/messageIcon.png",
              title: "Increased Conversions",
              description: "TransCurator assures that our tried-and-true tactics will increase your sales. Boost conversions, draw in more clients, and experience efficient business growth.",
            },
            {
              icon: "/messageIcon.png",
              title: "Expertise",
              description: "Use our writers' experience to highlight your company's unique qualities and offer helpful thoughts on the sector. We will assist you in making an impression and luring your target community to your benefit.",
            },
          ];
          
       
          const processSteps = [
            {
              number: 1,
              title: "Understanding Your Needs",
              description: "Making better choices and getting better solutions starts with knowing what you need. By determining your requirements, we make solutions that fit like a glove and ensure success in all aspects.",
            },
            {
              number: 2,
              title: "Research and Planning",
              description: "Gather, analyse, and use data efficiently. From academic research to industry observations, we offer straightforward, helpful information to help you make better choices.",
            },
            {
              number: 3,
              title: "Outline Creation",
              description: "We employ a quick approach to create effective outlines. Plan projects, arrange ideas, and organise content with convenience. And start immediately to increase output and ensure your work is valuable and well-organised.",
            },
            {
              number: 4,
              title: "Drafting",
              description: "Prepare detailed, in-depth graphics for every project you work on. We produce precise, expert drafts that suit your needs, whether technical sketches or blueprints.",
            },
            {
              number: 5,
              title: "Editing",
              description: "Enhance the draft's grammar, optimize its flow, and ensure readability. Focus on consistency, clarity, and smooth transitions to effectively engage readers and capture their interest. Additionally, integrate to attract potential clients looking for professional content solutions.",
            },
            {
              number: 6,
              title: "Feedback",
              description: "Promote the document to interested individuals and get their input. Merge their suggestions into the strategy and ensure that all perspectives are considered and all requirements are met.",
            },
            {
              number: 7,
              title: "Final Review",
              description: "A last inspection is needed to verify consistency and polish details. Before completing, ensure everything is clean and well done so your project has a flawless, finished look.",
            },
          ];
          
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
                        Hire a leading
                        <span className="text-[#326B3F] block mt-2">
                            Content Writing Agency in Bangalore
                        </span>
                    </motion.h1>
                    
                    <div className="text-[#6a6a6a] mt-6 text-lg leading-relaxed max-w-2xl">
                        Hire a leading content writing agency in Bangalore
                        for exceptional content that drives results.
                        Our team delivers customized solutions for all your writing needs.
                    </div>

                    <Link href="/contact">
                        <motion.button
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="submit"
                            className="gap-2 md:gap-3 mt-6 md:mt-10 flex justify-center items-center self-start text-[#6a6a6a] text-xs sm:text-sm bg-gray-50 backdrop-blur-md lg:font-medium isolation-auto border-gray-50 before:absolute before:inset-0 before:w-0 before:h-full before:transition-all before:duration-500 before:bg-[#326B3F] hover:text-gray-50 hover:before:w-full before:rounded-full before:-z-10 relative z-10 px-3 md:px-4 py-1.5 md:py-2 overflow-hidden border-2 rounded-full group tracking-wide w-fit"
                        >
                            Book Your Free Consultation!
                            <svg
                                className="w-6 h-6 md:w-7 md:h-7 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-[#326B3F] p-1 md:p-1.5 rotate-45 bg-[#326B3F]"
                                viewBox="0 0 16 19"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                                    className="fill-white group-hover:fill-[#326B3F]"
                                ></path>
                            </svg>
                        </motion.button>
                    </Link>
                </motion.div>
                <div className="hidden md:block md:w-[45%] lg:w-[50%] xl:w-[55%]"></div>
            </section>
            
            <div className="text-center mb-16 mt-22 md:mt-12space-y-4">
                <h2 className="md:text-3xl text-xl mt-4 font-medium">
                    Content Writing Services in{' '}<br />
                    <span className="text-[#326B3F]">Bangalore to get an Extra Edge</span>
                </h2>
            </div>
            
            <section className="max-w-screen-xl mx-auto text-left py-4">
                                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                            {contentWritingProcess
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
                                                {contentWritingProcess
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
            <div className="text-center mb-16 mt-22 md:mt-12space-y-4">
        <h2 className="md:text-3xl text-xl mt-4 font-medium">
          How can TransCurator's Professional Content Writers{' '}<br />
          <span className="text-[#326B3F]">Help you Scale Your Business?</span>
        </h2>
        <p className="text-[#6a6a6a] text-sm mt-4">
        Writers at TransCurator offer many top-notch privileges over others, i.e.,</p>
      </div>

            <div className=" max-w-screen-xl mx-auto grid grid-cols-1 gap-4 lg:grid-cols-5 lg:gap-5 md:mt-16 mt-12 text-left">
                                    {services.slice(0, 5).map((service, index) => (
                                      <div key={index} className='flex items-start justify-start'>
                                        <div className={`h-auto p-4 hover:bg-gray-50 rounded-lg cursor-pointer transition duration-200 group `}>
                                          <Image 
                                            src={service.icon} 
                                            alt={service.title} 
                                            width={24} 
                                            height={24}
                                            className='group-hover:translate-x-1.5 transition-all ease-in-out duration-300' 
                                          />
                                          <p className='text-md font-semibold text-[#1B223C] mt-2'>{service.title}</p>
                                          <p className='text-sm font-regular text-[#6a6a6a] mt-2 '>{service.description}</p>
                                        </div>
                                      </div>
                                    ))}
                            </div>
            </section>
            <div className='relative bg-[#429054]/20 mt-12 h-auto py-16 md:mt-22 flex justify-center items-center mx-auto'>
        <div className='max-w-screen-xl flex justify-center items-center mx-auto'>
        <div className='flex justify-center items-center mx-auto scale-70'>
          <Image 
            src="/section3.png" 
            alt="Icon1" 
            width={500} 
            height={500}
            className='md:block hidden' 
          />
        </div>
        <div className='flex-row justify-center items-center px-6 py-6 md:py-0 '>
          <h2 className='md:text-3xl text-xl font-semibold text-[#326B3F]'>
          Why Choose Our Content Writing<br/>
          <span className='md:text-3xl text-xl font-semibold text-black'>
            Services in Bangalore?<br/>
          </span>
          </h2>
          <p className='text-sm font-regular mt-6 text-[#6a6a6a]'>
          Find out exactly what makes our Bangalore content writing services exceptional. We provide content that speaks to the readers directly and is clear, short, and fascinating. Our trained crew offers excellent writing that boosts the visibility of your business and generates benefits. If you want your content to connect and speak to your audience, choose us.
          </p>
          <ul className='mt-6 space-y-4'>
            {[
                "Strategy: Take advantage of strategy-based writing to accomplish your best potential. Customised to your goals, this method blends precise planning with focused implementation. Effective content company and client analysis enable you to create relevant and profitable messages. Make every word matter, and use strategic statistics to strengthen your writing. Now is the time to start changing your content's effect.",
                "Quality: Get great content that both attracts and guides. Our team produces professionally written and captivating content tailored to meet your needs. Whether for personal or professional use, we ensure each piece is unique and well-crafted. Experience quality writing that connects with readers and delivers results. For exceptional content writing services in Bangalore, trust us for reliability and excellence in every project.",
                "Quantity: With help from our mass writing services, you can rapidly create large amounts of original, compelling content. Our focus on clarity and relevance makes us ideal for blogs, articles, and website pages that will draw in viewers. Meet your deadlines, generate more content, and do so with simplicity!",
                "Flexibility: Recognise the flexibility of writing to fit the wants of any reader or goal. This approach simplifies changing your stuff's language, tone, and structure, boosting its impact and engagement. Mastering flexible writing improves your ability to connect with readers, communicate effectively, and write more effectively overall.",
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
      <div className="text-center mb-8 space-y-4 mt-15 max-w-screen-xl mx-auto">
                            <h2 className="md:text-3xl text-xl font-medium text-black">
                                        How Does The <br/> <span className="text-[#326B3F]">Process Work?</span>{' '}<br />
                            </h2>
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
            <div className="text-center mb-16 mt-12 md:mt-22 space-y-4">
        <p className="text-[#326B3F] text-md">Our Services</p>
        <h2 className="md:text-3xl text-xl mt-4 font-medium">
          Check out our{' '}<br />
          <span className="text-[#326B3F]">Content Writing Services</span>
        </h2>
        <p className="text-[#6a6a6a] text-sm mt-4">
        Experience our broad range of services that are perfect for your demands.<br/> We offer first-rate support to help you reach your objectives, from individualised discussions to expert solutions. Find out more right now! 
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-22">
      {/* Splitting content into two equal columns */}
      {[0, 1].map((colIndex) => (
        <div key={colIndex} className="space-y-4 max-w-md">
          {servicesoffered
            .slice(colIndex * 3, colIndex * 3 + 3) // Split into two groups of 3
            .map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-lg transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-gray-100"
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
            <section class="relative bg-[#429054]/20 py-16 mt-12 md:mt-22 overflow-hidden">
                <div class="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center">
                    <div class="w-full md:w-5/12 mb-8 md:mb-0">
                    <h2 class="md:text-3xl text-xl font-semibold mb-3">
                        Industries We Support -<br/>
                        <span class="text-[#326B3F] block">Bangalore's Leading Content Writing Agency</span>
                    </h2>
                    </div>
                    <div class="w-full md:w-7/12 md:pl-8">
                    <p class="text-[#6a6a6a] mb-6">
  <ul class="space-y-2 ml-35 grid grid-cols-1 md:grid-cols-2">
    <li class="flex items-start">
      <div class="w-2 h-2 bg-[#326B3F] rounded-full mt-2 mr-3"></div>
      <span>SaaS</span>
    </li>
    <li class="flex items-start">
      <div class="w-2 h-2 bg-[#326B3F] rounded-full mt-2 mr-3"></div>
      <span>Travel, Food & Lifestyle</span>
    </li>
    <li class="flex items-start">
      <div class="w-2 h-2 bg-[#326B3F] rounded-full mt-2 mr-3"></div>
      <span>IT & Software</span>
    </li>
    <li class="flex items-start">
      <div class="w-2 h-2 bg-[#326B3F] rounded-full mt-2 mr-3"></div>
      <span>Content Marketing</span>
    </li>
    <li class="flex items-start">
      <div class="w-2 h-2 bg-[#326B3F] rounded-full mt-2 mr-3"></div>
      <span>E-commerce</span>
    </li>
    <li class="flex items-start">
      <div class="w-2 h-2 bg-[#326B3F] rounded-full mt-2 mr-3"></div>
      <span>Publishing & Journalism</span>
    </li>
    <li class="flex items-start">
      <div class="w-2 h-2 bg-[#326B3F] rounded-full mt-2 mr-3"></div>
      <span>Healthcare</span>
    </li>
    <li class="flex items-start">
      <div class="w-2 h-2 bg-[#326B3F] rounded-full mt-2 mr-3"></div>
      <span>Education</span>
    </li>
    <li class="flex items-start">
      <div class="w-2 h-2 bg-[#326B3F] rounded-full mt-2 mr-3"></div>
      <span>Human Resource & Talent</span>
    </li>
    <li class="flex items-start">
      <div class="w-2 h-2 bg-[#326B3F] rounded-full mt-2 mr-3"></div>
      <span>Gaming</span>
    </li>
    <li class="flex items-start">
      <div class="w-2 h-2 bg-[#326B3F] rounded-full mt-2 mr-3"></div>
      <span>Real Estate</span>
    </li>
    <li class="flex items-start">
      <div class="w-2 h-2 bg-[#326B3F] rounded-full mt-2 mr-3"></div>
      <span>Automotive</span>
    </li>
    <li class="flex items-start">
      <div class="w-2 h-2 bg-[#326B3F] rounded-full mt-2 mr-3"></div>
      <span>Fashion & Apparel</span>
    </li>
    <li class="flex items-start">
      <div class="w-2 h-2 bg-[#326B3F] rounded-full mt-2 mr-3"></div>
      <span>Transportation & Logistics</span>
    </li>
    <li class="flex items-start">
      <div class="w-2 h-2 bg-[#326B3F] rounded-full mt-2 mr-3"></div>
      <span>Blockchain & Cryptocurrency</span>
    </li>
  </ul>
                    </p>

                    <div class="mt-8 ml-35">
                        <a href="#" class="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-lg hover:shadow-xl transition-all duration-500 font-medium text-base bg-[#326B3F] text-white hover:-translate-y-1">
                        Start Your Journey
                        </a>
                    </div>
                    </div>
                </div>
            </section>
            <div className="w-full py-8 mb-20 md:mt-22 mt-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="md:text-3xl text-xl font-medium text-black">
          Looking for Content Writing Jobs?
        </h2>
        <p className="md:text-3xl ml-2 text-xl font-medium justify-center text-[#326B3F]">
        Head over to the careers section.
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

export default ContentBangalore;