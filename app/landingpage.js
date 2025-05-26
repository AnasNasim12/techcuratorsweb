"use client";
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import Images from 'next/image';
import Image from 'next/image';
import Carousel from './components/carousel/page';
import WhyTransCurators from './components/whytranscurators/page';
import WorkflowStrategy from './components/workflowtrans/page';





const Landing_Page = () => {
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
    { question: "What makes TransCurators a reliable content writing agency?", answer: "TransCurators is a trusted content writing agency known for delivering high-quality, engaging, and SEO-optimized content. With over five years of industry experience, we specialise in crafting original, plagiarism-free content tailored to various business needs. Our team ensures timely delivery, effective communication, and customised content strategies that align with your brand's voice, making us a preferred choice for content solutions. We are committed to excellence, helping businesses enhance their online presence, attract the right audience, and achieve long-term success through impactful content.", id: 1 },
    { question: "What types of content writing services do TransCurators offer?", answer: "We offer a wide range of content-writing services, including website content, blogs, articles, product descriptions, video scripts, and translations. Our team specialises in creating engaging and SEO-optimized content that enhances brand visibility, builds credibility, and drives audience engagement. Whether you need persuasive marketing content or informative blogs, we deliver high-quality, customised solutions tailored to your business needs. Our expertise ensures that every piece of content aligns with your brand's voice, effectively communicates your message, and maximises your online reach for sustained growth.", id: 2 },
    { question: "How do TransCurators ensure high-quality content?", answer: "At TransCurators, quality is our priority. Our content writing company follows strict quality control measures, including thorough research, keyword optimisation, and multiple rounds of editing. Our expert writers craft engaging, well-structured, and plagiarism-free content that resonates with your audience. Every piece undergoes proofreading and revision to ensure it meets your expectations and industry standards. We are committed to delivering content that not only informs and engages but also strengthens your brand's credibility and drives measurable results. ", id: 3 },
    { question: "Does TransCurators provide SEO-optimized content?", answer: "Yes, our content writing firm specialises in SEO-optimized content that improves search rankings and organic traffic. We strategically incorporate relevant keywords, maintain readability, and follow Google's content guidelines. Our SEO-friendly content enhances your online presence, boosts engagement, and helps you reach your target audience effectively. Additionally, we ensure a natural flow of keywords, creating content that is both user-friendly and search engine-compliant for maximum impact.", id: 4 },
    { question: "What industries do TransCurators cater to?", answer: "Our content writing services cover a wide range of industries, including healthcare, technology, finance, travel, real estate, education, and e-commerce. Our expert writers understand industry-specific trends and create relevant, informative, and engaging content that aligns with your business goals and audience preferences. We tailor our content strategies to suit each industry's unique requirements, ensuring high-quality, well-researched, and impactful content that drives results.", id: 5 },
    { question: "Do you provide customised content solutions?", answer: "Yes, we tailor our content writing service in India to meet your unique business needs. Whether you need website content, marketing copies, or technical writing, we create customised content strategies that reflect your brand's voice and objectives. Our flexible approach ensures impactful content that resonates with your audience. We take the time to understand your brand, industry, and target audience, delivering content that aligns with your goals and maximises engagement.", id: 6 },
    { question: "How do TransCurators handle revisions and edits?", answer: "Our content writing agency offers multiple revisions based on client feedback to ensure the final content meets expectations. We value collaboration and strive to refine content until it aligns perfectly with your brand's voice and messaging. Customer satisfaction is our priority, and we work closely with clients for the best results. Our revision process is designed to ensure clarity, accuracy, and impact, making sure every piece of content reflects your brand's essence and engages your audience effectively.", id: 7 },
    { question: "What makes TransCurators different from other content writing agencies?", answer: "Unlike many agencies, our content writing firm prioritises originality, SEO, and industry expertise. We provide AI-free, human-written, 100% plagiarism-free content tailored to your business. With a focus on quality, timely delivery, and personalised content strategies, we help brands build a strong online presence and engage their audience effectively. Additionally, our transparent communication and dedicated customer support set us apart, ensuring a seamless experience and content that truly resonates with your target audience", id: 8 },
    { question: "Can TransCurators handle bulk content requirements?", answer: "Yes, our content writing company efficiently manages bulk content projects without compromising quality. We have a team of skilled writers who can deliver large volumes of content within deadlines while ensuring originality, accuracy, and SEO optimisation. Whether for blogs, website content, or marketing materials, we cater to all content needs. Our streamlined workflow, rigorous quality checks, and dedicated project management ensure consistency and excellence in every piece, making us a reliable choice for bulk content requirements.", id: 9 },
    { question: "Does TransCurators provide content for international clients?", answer: "Absolutely! Our content writing services cater to both Indian and global clients. We provide localised, culturally relevant content tailored to different regions, ensuring it connects with the target audience. Our expertise in multiple industries makes us a preferred choice for businesses worldwide. We adapt our content strategies to suit diverse markets, maintaining clarity, engagement, and SEO effectiveness to help brands establish a strong presence both locally and internationally.", id: 10 },
    { question: "How do you ensure plagiarism-free content?", answer: "Our content writing agency follows strict plagiarism-checking processes. All content is manually written, thoroughly researched, and cross-checked using premium plagiarism detection tools. This ensures 100% originality and uniqueness, helping brands maintain credibility and trust with their audience. Additionally, our rigorous quality control measures, including multiple rounds of editing and proofreading, guarantee error-free and engaging content that aligns with your brand's voice and objectives.", id: 11 },
    { question: "Do you provide website content writing services?", answer: "Yes, our website content writing service specialises in creating compelling, SEO-friendly website content that engages visitors, enhances brand credibility and drives conversions. We cover everything from homepages to service pages, blogs, and product descriptions to ensure a strong online presence. Aligned with your brand's voice, helping you stand out in a competitive digital landscape.", id: 12 },
    { question: "Can you create engaging blog and article content?", answer: "Absolutely! Our content writing company delivers engaging, informative, and SEO-optimized blogs and articles that enhance brand authority and audience engagement. We ensure well-researched, original content that keeps readers informed, entertained, and connected with your brand. Our expert writers craft content tailored to your industry, incorporating relevant keywords and compelling storytelling to maximise reach and impact.", id: 13 },
    { question: "Do you provide product descriptions for e-commerce businesses?", answer: "Yes, our content writing firm specialises in crafting compelling, SEO-optimized product descriptions that highlight key features and benefits, persuade customers, and improve search rankings. Whether for e-commerce platforms, catalogues, or marketing materials, we ensure impactful content that boosts conversions. Our expert writers create clear, concise, and engaging product descriptions that align with your brand's voice, making your products stand out and attract potential buyers effectively.", id: 14 },
    { question: "Do you offer content translation services?", answer: "Yes, our content writing service in India includes high-quality translation services. We ensure accurate, culturally relevant translations that maintain the original meaning, tone, and clarity. Our expert translators help businesses connect with global audiences seamlessly. Our translation services cover multiple languages and industries, ensuring your content resonates with diverse audiences while maintaining accuracy and engagement.", id: 15 },
    { question: "Can you provide professional video script writing?", answer: "Yes, our content writing agency creates engaging and story-driven video scripts for advertisements, explainer videos, corporate presentations, and brand storytelling. Our scripts enhance viewer engagement and effectively communicate your message to the target audience. We focus on crafting compelling narratives, clear messaging, and audience engagement to ensure your videos leave a lasting impact and drive desired actions.", id: 16 },
    { question: "What is your pricing structure for content writing services?", answer: "Our content writing services are competitively priced based on content type, length, and complexity. We offer cost-effective solutions to suit different business needs while ensuring high-quality content that delivers value and results. For a detailed quote tailored to your specific requirements, feel free to contact us, and we'll provide a customised pricing plan that fits your budget and content goals.", id: 17 },
    { question: "How quickly can you deliver content?", answer: "Our content writing company ensures timely delivery without compromising quality. Turnaround times vary based on project scope, but we strive to meet deadlines efficiently. Urgent requests can also be accommodated with prior notice. We prioritise efficiency and reliability, ensuring that your content is delivered on time while maintaining high standards. If you have urgent requirements, we are flexible and can expedite delivery as needed.", id: 18 },
    { question: "How can I get started with TransCurators?", answer: "Getting started with our content writing firm is simple. Contact us with your content requirements, and our team will guide you through the process, from strategy development to content delivery. We ensure a smooth, hassle-free experience for every client by understanding their needs, setting clear content goals, out today, and let's create impactful content together.", id: 19 },
    { question: "How do I know if my business needs professional content writing services?", answer: "If you want high-quality, SEO-friendly content that enhances brand visibility, engagement, and credibility, professional content writing services are essential. Whether you need website content, blogs, marketing copies, or product descriptions, expert writers ensure impactful messaging that drives business success. Investing in professional content writing services helps you maintain a strong online presence, connect with your target audience, and achieve long-term growth with well-crafted, engaging content.", id: 20 },
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


  const contentData = [
    {
      icon: "/messageIcon.png",
      heading: "Expertise Across Industries",
      text: "Our content writers bring industry expertise and create content consistent with your brand's personality and goals. They understand worldwide markets, meaning your content can be helpful to a wide range of viewers."
    },
    {
      icon: "/messageIcon.png",
      heading: "Cultural Sensitivity and Localization ",
      text: "With a deep awareness of cultural settings, Indian writers create components that appeal to local and international consumers, making your brand more approachable."
    },
    {
      icon: "/messageIcon.png",
      heading: "Timely Delivery",
      text: "Top Indian companies deliver content on time, meeting deadlines without compromising quality. They can quickly grow to handle projects of any size, ensuring your needs are always satisfied."
    },
    {
      icon: "/messageIcon.png",
      heading: "Cost-Effective Quality",
      text: "High-quality content at lower prices allows you to get the most out of your investment. This cost-effectiveness will enable you to spend money on other essential business areas."
    },
    {
      icon: "/messageIcon.png",
      heading: "SEO-Focused Content",
      text: "Indian authors specialize in SEO, producing content that ranks high in search engines and generates genuine traffic to your website. Their experience in keyword research and optimization increases your online presence."
    },
    {
      icon: "/messageIcon.png",
      heading: "Strategic Insight",
      text: "These businesses do more than write; they also guide you to optimize your content strategy and ensure it relates to your overall business objectives."
    }
  ];
  const processItems = [
    {
      title: "Content for 500+ brands",
      description: "Serving startups, enterprises, and everything in between with tailored content solutions.",
    },
    {
      title: "90%+ keyword ranking success",
      description: "SEO-optimized content that actually ranks and drives organic traffic to your website.",
    },
    {
      title: "50+ Expert Writers & Editors",
      description: "Specialists in multiple industries and niches to ensure your content is accurate and compelling.",
    },
    {
      title: "35+ business domains",
      description: "Extensive experience across diverse industries gives us unmatched versatility and expertise.",
    },
    {
      title: "Unlimited revisions",
      description: "We're not done until you're 100% satisfied with the final content delivered.",
    },
  ];
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
        <div className="flex flex-col md:flex-row bg-[linear-gradient(90deg,_rgba(66,148,80,0.3)_0%,_rgba(255,255,255,0.3)_35%)] border-4 border-[#429450] md:rounded-4xl min-h-fit md:min-h-[50vh] md:h-[90vh] md:max-w-[calc(100vw-40px)] lg:max-w-[calc(100vw-70px)] w-full mt-4 py-8 md:py-4 relative overflow-hidden">
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
              Transform Your Brand's Voice with <span className='text-[#4B7D57]'>Our Content Writing Service!</span>
            </motion.h1>    

            <motion.h2
              variants={itemVariants}
              className='text-[#6a6a6a] text-center md:text-left text-[12px] sm:text-[14px] md:text-[14px] lg:text-[16px] xl:text-[18px] leading-tight md:leading-tight overflow-y-hidden tracking-[0.015em] w-full md:max-w-[800%] mx-auto md:ml-6 mt-2 md:mt-4'
            >
              Words That Win —
              <br />Content Writing Services That Spark Engagement,
              <br className="hidden sm:block" /><br className="sm:hidden" />
              <span className='text-[#6a6a6a] tracking-normal'>Build Trust,
                and Elevate Your Brand.</span>
            </motion.h2>

            <motion.button
              variants={itemVariants}
              onClick={() => window.location.href = "/contact"}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="gap-2 md:gap-3 mt-6 md:mt-6 flex justify-center items-center self-center md:self-start text-[#6a6a6a] text-xs sm:text-sm bg-gray-50 backdrop-blur-md lg:font-medium isolation-auto 
              border-gray-50 before:absolute before:inset-0 before:w-0 before:h-full before:transition-all before:duration-500 before:bg-[#326B3F]
              hover:text-gray-50 hover:before:w-full before:rounded-full before:-z-10 relative z-10 px-4 md:px-4 py-2 md:py-2 overflow-hidden border-2 rounded-full group tracking-wide w-fit"
            >
              Book Your Free Consultation!
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
            <video
              src="/VN20250519_154326.mp4"
              autoPlay
              loop
              muted
              playsInline
              controls={false}
              className="w-full max-w-[800px] h-[900px] aspect-video object-contain bg-white rounded-xl shadow-none"
              style={{ minHeight: '400px', maxHeight: '900px', background: 'white' }}
            >
              Your browser does not support the video tag.
            </video>
          </motion.div>
          
        </div>
      </motion.div>

      <section id="landing-metrics-section" className="md:mt-22 mt-12 bg-white">
        <div className="max-w-screen-xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-2xl md:text-3xl font-medium">
              <span className="text-[#326B3F]">Metrics</span> That Speak For Themselves
            </h2>
            <p className="text-[#6a6a6a] mt-4 text-sm">See the impact we've made for our clients</p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, boxShadow: "0 0 25px rgba(168, 213, 186, 0.6)" }}
                className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-[0_0_15px_#CCE3DE] hover:shadow-[0_0_25px_#A8D5BA] transition-all duration-300 text-center cursor-default"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#326B3F] min-h-[50px] sm:min-h-[60px] md:min-h-[80px] flex items-center justify-center">
                  {counters[metric.value]}
                </div>
                <p className="mt-2 md:mt-4 text-[#6a6a6a] text-sm sm:text-base md:text-lg">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="md:mt-22 mt-12 px-0">
  {/* Full-width green background */}
  <div className="w-screen bg-[#429054]/20 flex flex-col items-center py-8 sm:py-10 md:py-12 px-4 sm:px-0">
    <div className="max-w-screen-xl w-full mx-auto px-2 sm:px-4 md:px-6">
      <motion.div
        className="text-center mb-8 md:mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl font-medium">
          What Makes Us <span className="text-[#326B3F]">Different?</span>
        </h2>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
        {processItems.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-[16px] sm:rounded-[20px] md:rounded-[24px] shadow-md px-4 sm:px-6 md:px-8 py-6 sm:py-8 flex flex-col items-center text-center"
            style={{ minHeight: 'auto', height: '100%' }}
          >
            <div className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold mb-2 sm:mb-3 text-black leading-tight">
              {item.title}
            </div>
            {item.description && (
              <div className="text-gray-500 text-sm sm:text-base leading-snug">
                {item.description}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="bg-[#429054]/20 py-12 md:py-16 lg:py-20 mt-12 md:mt-22 px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-black">
            Let's Discuss Your <span className="text-[#326B3F]">Content Goals</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-[#1b223c] px-2">
            Have a question? We're just one call away from helping you get started.
          </p>
          <motion.div
            className="mt-6 md:mt-8 flex justify-center"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <motion.a
              href="tel:7678144482"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-4 sm:px-6 md:px-8 py-2 md:py-3 border border-transparent rounded-md shadow-[0_0_10px_#CCE3DE] hover:shadow-[0_0_20px_#A8D5BA] font-medium text-sm md:text-base bg-[#326B3F] text-white transition-all duration-300 hover:-translate-y-1"
            >
              Talk to us today
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      <div className='flex justify-center items-center md:mt-22 mt-12 max-w-screen-xl mx-auto px-4 md:px-6'>
        <div className='text-center flex-row'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className='text-md text-[#326B3F] font-regular'>Our Services</p>
            <p className='text-xl sm:text-2xl md:text-3xl text-black font-medium mt-4 px-2 sm:px-4 md:px-0'>
              Leading the Industry with the Best Content <span className='text-[#326B3F]'>Writing Services</span>
            </p>
            <p className='text-sm md:text-base mb-8 text-[#6a6a6a] mt-4 px-2 sm:px-6 md:px-8 lg:px-12'>
              Words That Work for You – Creating compelling narratives that drive engagement, build trust, and boost your brand.
            </p>
          </motion.div>


        </div>

      </div>
      <section className="md:mt-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-screen-xl">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6 flex-wrap justify-center">
            {[
              {
                number: 1,
                title: "Blog Writing",
                description: "Engage, enlighten, and convert with keyword-filled blog articles that resolve problems, boost search rankings, and drive traffic."
              },
              {
                number: 2,
                title: "SEO Content Writing",
                description: "Develop optimised content to drive rankings, traffic, and fulfilment of search intent without compromising reader engagement."
              },
              {
                number: 3,
                title: "Technical Content Writing",
                description: "Deconstruct complex concepts into proper, readable, and structured content that educates and assists in making informed decisions."
              },
              {
                number: 4,
                title: "Article Writing",
                description: "Develop research-driven, SEO-friendly articles that reflect expertise and boost organic visibility on all search engines."
              },
              {
                number: 5,
                title: "Website Content",
                description: "Develop high-quality, search-engine-optimised web copy that speaks to your brand voice and converts web visitors into devoted customers."
              },
              {
                number: 6,
                title: "Editing & Proofreading",
                description: "Ensure your content is impeccable, polished, and professionally edited to maintain the highest quality standards."
              },
              {
                number: 7,
                title: "Product Description",
                description: "Highlight benefits and features with compelling, conversion-driven product copy carefully crafted for ecommerce and online stores."
              },
              {
                number: 8,
                title: "Hindi Content Writing",
                description: "Engage regional audiences with culturally pertinent, high-quality content written easily in Hindi to induce engagement and trust."
              },
              {
                number: 9,
                title: "White Paper",
                description: "Create high-content, authoritative white papers that build credibility, generate sales and guide decision-making by B2B readers."
              },
              {
                number: 10,
                title: "Press Release",
                description: "Emphasise launches, partnerships, or milestones with engaging, media-friendly press releases that generate media coverage and press."
              },
              {
                number: 11,
                title: "Article Rewriting",
                description: "Reconstruct current content with a fresh, SEO-focused vision that delivers maximum clarity, interest, and relevance without sacrificing the original intent."
              },
              {
                number: 12,
                title: "Copy Writing",
                description: "Create snappy, compelling, action-oriented copy that drives conversions on landing pages, ads, and marketing campaigns."
              },
              {
                number: 13,
                title: "Emailers",
                description: "Power clicks opens, and conversions through branded email copy designed for the greatest effect and highest audience engagement."
              },
              {
                number: 14,
                title: "Newsletter Writing",
                description: "Develop compelling email newsletters that inform your readers well, keep them engaged, and make them loyal through regular updates, promotions, and company stories."
              },
              {
                number: 15,
                title: "Magazine Writing",
                description: "Deliver feature-rich, editorial-grade copy for print or online magazines that educates, entertains, and builds credibility."
              },
              {
                number: 16,
                title: "E-book",
                description: "Create in-depth, value-packed eBooks that establish thought leadership and serve as powerful lead magnets for your brand."
              }
            ].slice(0, showAllServices ? undefined : 4).map((card, idx) => (
              <div key={idx} className="relative bg-white border border-[#9BCDA8] rounded-xl p-4 sm:p-5 md:p-6 w-full flex flex-col shadow-sm h-full">
                {/* Vertical number bar - responsive width */}
                <div className="absolute top-0 right-0 h-full w-[18%] sm:w-[15%] md:w-1/5 flex flex-col items-end">
                  <div className="bg-[#9bcda8] rounded-tr-xl w-full flex items-center justify-center h-1/4 min-h-[40px] sm:min-h-[45px] md:min-h-[50px]">
                    <span className="text-white text-lg sm:text-xl md:text-2xl font-semibold">{card.number}</span>
                  </div>
                  <div className="bg-[#d9e9dd] w-full h-3/4 rounded-br-xl"></div>
                </div>

                {/* Content with icon above text - responsive padding */}
                <div className="flex flex-col items-left text-left mb-3 sm:mb-4 md:mb-5 pr-8 sm:pr-10 md:pr-12">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                    {/* Example icon: Responsive size */}
                    <Images src="/messageIcon.png" alt="" className="w-8 h-8 sm:w-10 sm:h-10" width={40} height={40} />
                  </div>
                  <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">{card.title}</h3>
                  <p className="text-gray-500 text-xs sm:text-sm">{card.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Responsive button container */}
          <div className="flex justify-center mt-8 sm:mt-10 md:mt-12">
            <motion.button
              onClick={() => setShowAllServices(!showAllServices)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-4 sm:px-6 md:px-8 py-2 md:py-3 border border-transparent rounded-md shadow-[0_0_10px_#CCE3DE] hover:shadow-[0_0_20px_#A8D5BA] font-medium text-xs sm:text-sm md:text-base bg-[#326B3F] text-white transition-all duration-300 hover:-translate-y-1"
            >
              {showAllServices ? (
                <>Show Less</>
              ) : (
                <>Explore All</>
              )}
            </motion.button>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#e3f3eb] md:mt-22 mt-12 py-16 px-4">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          {/* Google Standards Heading */}
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            <span className="inline-block">
              <span className="text-blue-600 font-semibold">G</span>
              <span className="text-red-600 font-semibold">o</span>
              <span className="text-yellow-500 font-semibold">o</span>
              <span className="text-blue-600 font-semibold">g</span>
              <span className="text-green-600 font-semibold">l</span>
              <span className="text-red-600 font-semibold">e</span>
            </span>
            <span className="font-normal text-black ml-2">Standards</span>
          </h2>
          <div className="text-2xl md:text-3xl font-normal text-black mb-8">
            We Follow While Writing Content
          </div>
          {/* Supporting Paragraphs */}
          <div className="text-[#6a6a6a] text-base md:text-s space-y-4 max-w-5xl">
            <p>
              At TransCurators, we adhere to Google&apos;s highest content standards, ensuring every piece is engaging, SEO-friendly, and highly relevant. As a leading content writing agency in Delhi, India, we specialise in delivering well-researched, original, and compelling content that enhances brand credibility.
            </p>
            <p>
              Our expert content writing services focus on quality, readability, and keyword optimisation, helping businesses rank higher, attract the right audience, and achieve long-term success. Whether it&apos;s blogs, website content, or marketing copies, we craft content that informs, inspires, and drives results.
            </p>
          </div>
        </div>
      </section>

      <div>
        <WhyTransCurators />
        <WorkflowStrategy />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className='relative bg-[#429054]/20 h-auto flex justify-center items-center mx-auto px-4 md:mt-22 mt-12 md:px-6 py-10 md:py-16'
      >
        <Images src="/transPen.png" alt="Trans logo" className='absolute opacity-5 -left-16 top-0 md:h-72 md:w-72 h-40 w-40' width={300} height={300} />
        <div className='max-w-screen-xl flex flex-col md:flex-row justify-center items-center mx-auto gap-6 md:gap-8'>
          <div className="hidden md:flex justify-center items-center mx-auto md:w-2/3 w-full">
            <Images
              src="/Homepage 2.png"
              alt="Icon1"
              width={400}
              height={400}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className='flex-row justify-center items-center space-y-4 md:space-y-6 md:w-2/3 w-full'
          >
            <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold text-[#326B3F] leading-tight'>
              Transforming Content,<br />
              Reaching New Heights, Breaking Boundaries:<br />
              <span className='text-xl sm:text-2xl md:text-3xl font-semibold text-black'>
                Celebrating Our Success!<br />
              </span>
            </h3>
            <p className='text-sm md:text-base font-regular leading-relaxed md:leading-6 mt-4 md:mt-6 text-[#6a6a6a]'>
              We create compelling content for startups, growing businesses, and global brands. With a commitment to excellence, we ensure every piece is impactful, engaging, and tailored to your needs. Client satisfaction is our priority, and we achieve it by:
            </p>
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className='mt-4 md:mt-5 space-y-2 md:space-y-3'
            >
              {[
                "Crafting original, AI-free, and 100% plagiarism-free content that reflects your brand's voice.",
                'Delivering SEO-optimized content to improve visibility and drive organic traffic.',
                'Providing well-researched and high-quality content that informs, persuades, and converts.',
                'Ensuring quick turnaround times without compromising on quality.',
                'Offering customised content solutions to suit different industries and business goals.',
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className='text-sm text-[#6a6a6a] flex items-center gap-2'
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.span
                    className='w-5 h-5 flex items-center justify-center rounded-full bg-[#326B3F] text-white'
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <svg className="w-5 md:w-3.5 h-3.5" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M6.5 10.7l-2.9-2.9-1.1 1.1 4 4 8-8-1.1-1.1z"></path>
                    </svg>
                  </motion.span>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <motion.div
              className="flex flex-col sm:flex-row mt-6 md:mt-8"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.button
                onClick={() => { }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-[0_0_50px_#CCE3DE] hover:shadow-[0_0_100px_#A8D5BA] font-medium text-base transition-shadow duration-300 bg-[#326B3F] text-white"
              >
                Contact Us
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <section className="px-4 md:px-6">
        <div className="max-w-screen-2xl mx-auto md:mt-22 mt-12">
          <motion.div
            className="text-center mb-10 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className='text-md text-[#326B3F] font-regular'>Our Partners</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mt-4">
              What Our <span className="text-[#326B3F]">Clients Say</span>
            </h2>
            <p className="text-[#6a6a6a] mt-4 text-xs sm:text-sm">Real feedback from our valued partners</p>
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

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className='relative bg-[#429054]/20 md:mb-20 h-auto py-16 md:py-28 flex justify-center md:mt-22 mt-12 items-center mx-auto overflow-hidden'
      >
        <Images src="/transPen.png" alt="Trans logo" className='absolute opacity-5 -left-10 md:top-10 top-1 md:h-50 md:w-50 h-28 w-28' width={200} height={200} />
        <div className='max-w-screen-xl w-full flex justify-center items-center mx-auto px-2'>
          <Carousel gap={60} className='h-12'>
            {[
              { src: '/1mg.png', alt: 'Tata1mg - Tata1mg' },
              { src: '/Mfine.png', alt: 'Mfine-Mfine' },
              { src: '/Apollo Hospitals.png', alt: 'Apollo-Apollo' },
              { src: '/Myntra.png', alt: 'Myntra-Myntra' },
              { src: '/Paytm.png', alt: 'PayTM - PayTM' },
              { src: '/TCS.png', alt: 'TCS - TCS' },
              { src: '/HCL Technologies.png', alt: 'HCL-HCL' },
              { src: '/Airtel.png', alt: 'Airtel-Airtel' },
              { src: '/upGrad.png', alt: 'Upgrad - Upgrad' },
              { src: '/Ajio.png', alt: 'Ajio - Ajio' },
              { src: '/Aster Hospitals.png', alt: 'Aster-Aster' },
              { src: '/HDFC.png', alt: 'HDFC-HDFC' },
              { src: '/Adani.png', alt: 'Adani - Adani' }
            ].map((logo, index) => (
              <Image
                key={index}
                src={logo.src}
                alt={logo.alt}
                className='w-[200px] h-12'
                width={200}
                height={48}
              />
            ))}
          </Carousel>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className='max-w-screen-xl flex mt-12 md:mt-22 justify-center mx-auto items-center px-4 md:px-6'
      >
        <div className='text-center flex-row'>
          <p className='text-md text-[#326B3F] font-regular'>Benefits of</p>
          <p className='text-xl sm:text-2xl md:text-3xl text-black font-medium mt-4'>
            Partnering with a<span className='text-[#326B3F]'> Leading Content Writing Company in India</span>
          </p>
          <p className='text-sm md:text-base text-[#6a6a6a] mt-4 leading-relaxed md:leading-[25px] max-w-screen-lg mx-auto px-2 sm:px-4 md:px-6 lg:px-8'>
            Partnering with a top content writing company in India gives your business significant tactical advantages. The evolving world of digital marketing demands content that connects with your specific audience increases engagement, and develops brand loyalty. Here's how working with a top-tier content writing agency in India might improve your content strategy:
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
              >Expertise Across Industries</motion.h2>
              <p className="text-sm text-gray-600">
                Our content writers bring industry expertise and create content
                consistent with your brand personality and goals. They understand
                worldwide markets, ensuring your content can be helpful to a wide
                range of viewers.
              </p>
            </div>
            <div className="ml-4 flex-shrink-0 hidden sm:block">
              <motion.div
                className="w-50 h-50"
                whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                transition={{ duration: 0.5 }}
              >
                <Images src="/QA engineers-bro 1.png" alt="" width={400} height={400} />
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
            >Cultural Sensitivity and Localization</motion.h2>
            <p className="text-sm text-gray-600">
              With a deep awareness of cultural settings, I can
              write create components that appeal to both and
              international consumers, making your brand more
              approachable.
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
            >Timely Delivery</motion.h2>
            <p className="text-sm text-gray-600">
              Top freelance companies deliver content on time, meeting
              deadlines without compromising quality. They can quickly
              grow to handle projects of any size, ensuring your needs are
              always satisfied.
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
              >Cost-Effective Quality</motion.h2>
              <p className="text-sm text-gray-600">
                High-quality content at lower prices allows you to get the most out of
                your investment. This cost effectiveness will enable you to spend
                money on other essential business areas.
              </p>
            </div>
            <div className="ml-4 flex-shrink-0 hidden sm:block">
              <motion.div
                className="w-50 h-50"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <Images src="/Middlebro.png" alt="" width={400} height={400} />
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
              >SEO-Focused Content</motion.h2>
              <p className="text-sm text-gray-600">
                Indian authors specialize in SEO, producing content that ranks high in search engines and generates genuine traffic to your website. Their experience in keyword research and optimization increases your online presence.
              </p>
            </div>
            <div className="ml-4 flex-shrink-0 hidden sm:block">
              <motion.div
                className="w-50 h-50"
                whileHover={{ rotate: 3 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <Images src="/Statistics-bro 1.png" alt="" width={400} height={400} />
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
            >Strategic Insight</motion.h2>
            <p className="text-sm text-gray-600">
              These businesses do more than write; they also guide you to optimize your content strategy and ensure it relates to your overall business objectives.
            </p>
          </motion.div>
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

        <div className="flex justify-center mt-8 md:mt-12 lg:mt-22">
          {!showMore ? (
            <motion.button
              onClick={() => setShowMore(true)}
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
                Show More
              </span>
            </motion.button>
          ) : (
            <motion.button
              onClick={() => setShowMore(false)}
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
                Show Less
              </span>
            </motion.button>
          )}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
       
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="w-full py-8 md:py-10 px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-black">
            Where Great Writers <span className="text-[#326B3F]">Build Great Careers</span>
          </h2>
          <motion.div
            className="mt-6 md:mt-8"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <motion.a
              href="/careers"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-6 sm:px-7 md:px-8 py-2 md:py-3 border border-transparent rounded-md shadow-[0_0_10px_#CCE3DE] hover:shadow-[0_0_20px_#A8D5BA] font-medium text-sm md:text-base bg-[#326B3F] text-white transition-all duration-300 hover:-translate-y-1"
            >
              Start Your Journey
            </motion.a>
          </motion.div>
        </div>
      </motion.div>


    </>
  )
}


export default Landing_Page

