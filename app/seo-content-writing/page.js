"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";


const SEOContentWriting = () => {
      const [currentCard, setCurrentCard] = useState(0);
      const [showAll, setShowAll] = useState(false);
      const [scrollY, setScrollY] = useState(0);
      
      // Add scroll effect for parallax animations
      useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

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
      
      const nextCard = () => {
        setCurrentCard((prev) => (prev + 1) % totalCards);
      };
    
      const prevCard = () => {
        setCurrentCard((prev) => (prev - 1 + totalCards) % totalCards);
      };
      const seoBenefits = [
        {
          number: 1,
          title: "Improved Search Engine Rankings",
          description:
            "Incorporating keywords such as SEO copywriting services and SEO writing services will make your content more visible to users and, as a result, improve your site's ranking on the Search Engine Result Pages with optimized content.",
        },
        {
          number: 2,
          title: "Increased Organic Traffic",
          description:
            "A properly executed content strategy gets your website more and more sought-after, increasing the flow of organic traffic, which will result in automatic SEO.",
        },
        {
          number: 3,
          title: "Higher Engagement & Reduced Bounce Rates",
          description:
            "People want to visit informative and engaging sites. Having such content on your site increases your site's value and ranking, which means your content informs search engines about your valuable site.",
        },
        {
          number: 4,
          title: "Establishes Brand Authority",
          description:
            "An SEO content writing agency will help build trust with your audience by creating authoritative content that positions your business as a niche leader after consistently producing high-quality content.",
        },
        {
          number: 5,
          title: "Boosts Conversion Rates",
          description:
            "Having such content in a well-thought-out structure will prompt visitors to take action by purchasing something, signing up for a newsletter, or making inquiries about your business.",
        },
        {
          number: 6,
          title: "Cost-Effective Marketing Strategy",
          description:
            "Unlike the other advertisement platforms, optimized content through SEO offers a forever-lasting return on investment for minimal expenditure. The content keeps generating leads and traffic for an extended period.",
        },
        {
          number: 7,
          title: "Enhances Local & Global Visibility",
          description:
            "Whether aiming to reach local customers or a global audience, content through SEO services facilitates your business, reaching the intended masses through localized and globally optimized content.",
        },
      ];
      const faqs = [
        {
          id: 1,
          question: "What are SEO content writing services?",
          answer:
            "SEO content writing services focus on creating optimized content that helps websites rank higher on search engines. These services include writing blogs, articles, web pages, and product descriptions with strategic keyword placement. The goal is to attract organic traffic, engage readers, and improve search engine rankings. Professional SEO content writing services ensure content is informative, high-quality, and aligned with Google’s algorithms, ultimately boosting visibility and conversions for businesses in competitive online markets.",
        },
        {
          id: 2,
          question: "How do SEO content writing services help businesses?",
          answer:
            "SEO writing services enhance a company's web presence with better search rankings and organic traffic. High-quality, keyword-loaded content enhances site authority, user interaction, and conversions. Well-organised blogs, articles, and website pages help companies establish trust and properly engage their target audience. Following SEO best practices, these services optimise content search engine algorithms to make companies more findable and competitive, leading to more revenue and sustainable growth.",
        },
        {
          id: 3,
          question: "What types of content can be optimized for SEO?",
          answer:
            "SEO can be applied to many forms of content, including blog posts, site pages, product descriptions, press releases, landing pages, and social media posts. Careful keyword placement, linking, and readability improvements enable optimised content to rank higher. Even infographics, video script writing, and email newsletters are optimised for SEO. SEO content services ensure that all content is appropriate to address the intent of search users and build visibility in search results.",
        },
        {
          id: 4,
          question: "What is the difference between SEO content writing and SEO copywriting?",
          answer:
            "SEO content writing is focused on creating useful, long-form content such as articles and blogs to inform and instruct the readers. SEO copywriting, on the other hand, is more persuasive in that it tries to convert readers into customers through sales-driven content such as ads, product descriptions, and landing pages. Both utilise SEO writing services, but copywriting is focused on persuasive calls to action. In contrast, content writing is focused on educating the masses and building search engine rankings in the long run.",
        },
        {
          id: 5,
          question: "How do I choose the best SEO content writing agency?",
          answer:
            "Selecting the right SEO content writing agency involves evaluating their experience, expertise, and client reviews. Select agencies that offer researched, high-quality content with proper keyword optimisation and SEO practices. An ideal agency should provide diverse content types, adhere to deadlines, and be original. Evaluating sample work, SEO performance reports and pricing transparency helps in making an informed decision. A good agency ensures content that drives business goals while increasing search visibility and engagement.",
        },
        {
          id: 6,
          question: "How long does it take to see results from SEO content writing?",
          answer:
            "SEO is a long-term process, and content produced by SEO content writing services typically takes 3 to 6 months to reflect on search rankings. Industry competition, keyword difficulty, content quality, and backlinking determine the speed of rankings. Refreshing content, internal linking, and technical SEO optimization help to accelerate results. SEO content does not provide immediate success, but constant optimization ensures steady traffic increase, enhanced audience engagement, and increased online presence in the long term.",
        },
        {
          id: 7,
          question: "Can I do SEO content writing myself?",
          answer:
            "Companies can create SEO content themselves, but expert SEO content writing services ensure competent keyword insertion, readability, and search engine optimization. Successful SEO content writing includes understanding algorithms, search intent, and best practices like meta descriptions, internal linking, and structured formatting. Without competent SEO knowledge, content could lack rankings or generate organic traffic. Outsourcing to specialists saves time and increases quality, ensuring content satisfies user and search engine requirements.",
        },
        {
          id: 8,
          question: "What makes SEO content high quality?",
          answer:
            "Best-in-class SEO copywriting is authentic, informative, and user-based but search-engine optimized. The copy should feature contextual keywords with a natural flow, good formatting, and user benefit. Good copy contains proper headlines, bulletins, and sequencing for better reading. Search-engine-friendly optimized meta tag description, images alt tag, and internal linking boost effectiveness. SEO content writing services guarantee harmony with search-engine requirements to deliver a better position and user experience for improved interaction.",
        },
        {
          id: 9,
          question: "How much do SEO content writing services cost?",
          answer:
            "The cost of SEO content writing services varies with word count, content complexity, and expertise. Agencies may charge per word, per article, or package pricing. SEO content that is well-researched and optimized is more costly but yields better results. Some agencies provide subscription plans for regular content needs. Professional SEO writers hired ensure well-structured, ranking-worthy content, ultimately leading to more organic traffic and business growth in the long term.",
        },
        {
          id: 10,
          question: "Are SEO content services a one-time investment?",
          answer:
            "No, SEO content writing services require ongoing investment for long-term success. Search engines constantly update algorithms, making regular content updates essential for maintaining rankings. Fresh, optimized content keeps websites relevant and competitive. Regular blog posts, web page enhancements, and keyword updates improve engagement and authority. Businesses that continuously invest in SEO content see consistent traffic growth, better conversions, and stronger brand credibility. SEO is an evolving strategy that demands continuous effort for sustainable online visibility.",
        },
      ];
      
    
      const [openFAQ, setOpenFAQ] = useState(null);
      const [showMore, setShowMore] = useState(false);
  
        const toggleFAQ = (id) => {
          setOpenFAQ(openFAQ === id ? null : id);}
      const points = [
        {
          number: "1",
          title: "In-Depth Keyword Research",
          description: "We conduct in-depth keyword research to identify top-ranking search keywords and integrate them naturally into content.",
        },
        {
          number: "2",
          title: "Engaging & Informative Content",
          description: "Each content item is written to provide value to your audience in an informal yet professional style.",
        },
        {
          number: "3",
          title: "Optimized Headings & Subheadings",
          description: "Properly formatted headings (H1, H2, H3) improve readability and help search engines comprehend content hierarchy.",
        },
        {
          number: "4",
          title: "Internal & External Links",
          description: "An internal linking strategy improves website organization, while external links to valid sources provide authenticity.",
        },
        {
          number: "5",
          title: "AI-Free, Human-Written Content",
          description: "We write all our content 100% uniquely, free of any AI and SEO-friendly and readable to humans.",
        },
      ];
      const seoHQ = [
        {
          number: 1,
          title: "Essential for SEO Success",
          description:
            "The first thing to focus on while creating content is understanding the target audience's requirements. Search engines have specific preferences when it comes to new, original content. Well-written and optimized content has a huge potential to capture attention and traffic to the website.",
        },
        {
          number: 2,
          title: "Engages & Educates Your Audience",
          description:
            "Good content educates potential clients, keeps the audience engaged with the brand, and answers all their questions.",
        },
        {
          number: 3,
          title: "Supports Other Marketing Strategies",
          description:
            "Content advertisement promotes and helps other marketing efforts, such as email, social media, and PPC.",
        },
        {
          number: 4,
          title: "Encourages Social Shares & Backlinks",
          description:
            "Accessible and informative content can promote social media engagement and attract backlinks.",
        },
        {
          number: 5,
          title: "Builds Trust & Customer Loyalty",
          description:
            "Well-researched and thought-out content promotes trust and credibility and gives the business dependable information.",
        },
        {
          number: 6,
          title: "Drives More Conversions",
          description:
            "Captivating, well-written, and interactive content has more potential to appeal to prospects. SEO content writing services guarantee a business an interactive, effective, and result-driven online marketing campaign.",
        },
      ];
      
            
      
      const cardData = [
        {
          number: 1,
          heading: "SEO Blog Writing Services",
          description:
            "Daily blog posts enhance search engine performance, connect with the audience, and establish brand trust. Our SEO blog content services are committed to keyword optimization and quality content.",
          image: "https://via.placeholder.com/300", // Replace with actual image URL if available
        },
        {
          number: 2,
          heading: "Website Copywriting",
          description:
            "Your website copy is the driving force behind converting and attracting visitors. Our SEO copywriting services will make your site pages informative, interesting, and optimized for search engines.",
          image: "",
        },
        {
          number: 3,
          heading: "Product & Service Descriptions",
          description:
            "Well-optimized product and service descriptions lead to conversions. Our SEO content writing service ensures that descriptions are keyword-rich and engaging.",
          image: "https://via.placeholder.com/300",
        },
        {
          number: 4,
          heading: "Landing Page Content",
          description:
            "We create high-converting landing pages with targeted keywords that engage and sell effectively.",
          image: "",
        },
        {
          number: 5,
          heading: "Press Releases & Articles",
          description:
            "Keyword-rich articles and news announcements maximize search visibility and brand recognition.",
          image: "https://via.placeholder.com/300",
        },
      ];
      
      const services = [
        {
          icon: "/messageIcon.png",
          title: "Keyword Optimization for Maximum Visibility",
          description:
            "Our skilled writers seamlessly incorporate phrases such as 'SEO content writing services,' 'SEO copywriting services,' and 'SEO blog writing services' into the content. This helps SEO a lot while still keeping the content human-friendly.",
        },
        {
          icon: "/messageIcon.png",
          title: "High-Quality, Engaging Content",
          description:
            "Google prefers original, informative, and well-researched content. We strive to achieve maximum compliance with search engines while giving value to our audience, and our SEO content writing service keeps that in mind.",
        },
        {
          icon: "/messageIcon.png",
          title: "Structured Formatting for Readability",
          description:
            "Using headings, bullet points, and short paragraphs is a great way to optimize content and user experience while boosting the rank of your web pages with search engines.",
        },
        {
          icon: "/messageIcon.png",
          title: "Internal & External Linking Strategies",
          description:
            "We use strategic internal links for better site navigation and provide credible external links to enhance the site's credibility.",
        },
        {
          icon: "/messageIcon.png",
          title: "Mobile & Voice Search Optimization",
          description:
            "Our voice search and mobile-friendly SEO content writing company ensures more individuals reach the content.",
        },
      ];
      
        const [expandedIndex, setExpandedIndex] = useState(null);
        const toggleExpanded = (index) => {
          // If the clicked service is already expanded, collapse it; otherwise, expand it.
          setExpandedIndex(expandedIndex === index ? null : index);
        };
      
        const fadeInVariants = {
          hidden: {
            opacity: 0,
            y: 20
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.6
            }
          }
        };

     

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
                        Expert SEO
                        <span className="text-[#326B3F] block mt-2">
                            Content Writing Services
                        </span>
                    </motion.h1>
                    
                    <div className="text-[#6a6a6a] mt-6 text-lg leading-relaxed max-w-2xl">
                        Boost your website's visibility with expert SEO content writing services.
                        Get high-quality, keyword-optimized content that ranks higher and drives more traffic.
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
            
            <motion.div 
              className="text-center mb-8 space-y-4 mt-12 md:mt-22 max-w-screen-xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
                <p className="text-[#326B3F] text-sm">Why SEO Content Writing?</p>
                <h2 className="md:text-3xl text-2xl font-medium">
                    How SEO-Friendly Content Improves<br/><span className="text-[#326B3F]"> Rankings & Traffic</span>{' '}<br />
                </h2>
            </motion.div>

            <div className="max-w-screen-xl mx-auto grid grid-cols-1 gap-4 lg:grid-cols-5 lg:gap-5 md:mt-16 mt-12 text-left">
              {services.slice(0, 5).map((service, index) => (
                <motion.div 
                  key={index} 
                  className='flex items-start justify-start'
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
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
                
            <section>
              <motion.div 
                className="text-center mb-8 space-y-4 mt-12 md:mt-22 max-w-screen-xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-[#326B3F] text-sm">Why SEO Content Writing?</p>
                <h2 className="md:text-3xl text-2xl font-medium">
                    Why SEO Content Writing Services Are<br/><span className="text-[#0c6a22]"> Essential for Your Business</span>{' '}<br />
                </h2>
                <p className="text-[#6a6a6a] text-sm">
                  Our agency specialises in SEO content writing services and develops targeted and strategically written copy that helps to improve the rankings and traffic to your website.
                </p>
              </motion.div>
              
              <motion.section 
                className="max-w-screen-xl mx-auto px-4 py-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative">
                  {/* Single visible card */}
                  <motion.div 
                    className="rounded-lg overflow-hidden shadow-lg"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex flex-col md:flex-row">
                      {/* Left Section */}
                      <div className="w-full md:w-1/2 bg-white p-8">
                        <div className="text-6xl font-bold text-[#326B3F] mb-4">
                          {cardData[currentCard].number}
                        </div>
                        <h2 className="text-md font-semibold text-[#1b223c] mb-4">{cardData[currentCard].heading}</h2>
                        <p className="text-[#6a6a6a] text-sm">{cardData[currentCard].description}</p>
                      </div>
                      {/* Right Section (Image or Placeholder) */}
                      <div className="w-full md:w-1/2 bg-gray-200 flex items-center justify-center min-h-[250px]">
                        {cardData[currentCard].image ? (
                          <Image
                            src={cardData[currentCard].image}
                            alt={cardData[currentCard].heading}
                            width={300}
                            height={300}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span className="text-gray-500">No Image</span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                  {/* Pagination indicators */}
                  <div className="flex justify-center mt-12 md:mt-22 space-x-1">
                    {cardData.map((_, index) => (
                      <motion.button
                        key={index}
                        onClick={() => setCurrentCard(index)}
                        className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer hover:opacity-80 ${
                          currentCard === index ? 'w-10 bg-[#429054]/40' : 'w-4 bg-gray-400 hover:bg-gray-600'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      />
                    ))}
                  </div>
                </div>
              </motion.section>
            </section>

            <motion.div 
              className='relative bg-[#429054]/20 mt-12 h-auto flex justify-center items-center mx-auto'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className='max-w-screen-xl flex justify-center items-center mx-auto'>
                <motion.div 
                  className='flex justify-center items-center mx-auto scale-70'
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <Image
                    src="/Images/section3.png"
                    alt="Icon1"
                    width={500}
                    height={500}
                    className='md:block hidden'
                  />
                </motion.div>
                <motion.div 
                  className='flex-row justify-center items-center px-6 py-6 md:py-0'
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <motion.h3 variants={itemVariants} className='md:text-3xl text-2xl font-medium text-[#326B3F]'>
                  Why SEO Content Writing Services are<br/>
                  <span className='md:text-3xl text-2xl font-medium text-black'>
                  Essential for Your Business<br/>
                  </span>
                  </motion.h3>
                  <motion.p variants={itemVariants} className='text-sm font-regular mt-6 text-[#6a6a6a]'>
                  Here are some benefits you enjoy when you hire SEO content writing services:
                  </motion.p>
                  <motion.ul 
                    className='mt-6 space-y-4'
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    {[
                      "Improved Position in Search Engine Results: The right keywords and optimised content will improve your site's ranking in the search engine result pages (SERPs).",
                      "Increased Organic Traffic: Well-researched content will yield traffic from users looking up the same information.",
                      "Better User Engagement: Informative content results in increased user engagement, which decreases the bounce rate of your website.",
                      "Greater Authority for the Brand: Your company will become the industry leader with fresh, high-quality content that is updated regularly.",
                      "Enhanced Conversion Rate: Interesting content resulting from thorough writing captures actions from users."
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
                  <motion.p variants={itemVariants} className='text-sm font-regular mt-6 text-[#6a6a6a]'>
                  Our agency specialises in SEO content writing services and develops targeted and strategically written copy that helps to improve the rankings and traffic to your website.
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              className="text-center mb-8 space-y-4 mt-12 md:mt-22 max-w-screen-xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
                <h2 className="md:text-3xl text-2xl font-medium">
                    Benefits of SEO Content Writing<br/> <span className="text-[#326B3F]">Services for Business</span>{' '}<br />
                </h2>
                <p className="text-[#6a6a6a] text-sm">
                The returns of investing in SEO copywriting services can be widely noted in the growth and presence of your business online compared to not investing in them. Here's the breakdown:
                </p>
            </motion.div>
            
            <motion.section 
              className="max-w-screen-xl mx-auto text-left py-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {seoBenefits.map((benefit, index) => (
                  <motion.div 
                    key={benefit.number}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-[#326B3F] text-2xl">{benefit.number}</span>
                    <p className="mt-2 text-md font-semibold text-[#1b223c]">{benefit.title}</p>
                    <p className="mt-2 text-sm text-[#6a6a6a]">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
            
            <section className="md:mt-22 mt-12 overflow-hidden">
              <motion.div 
                className="text-center space-y-4 max-w-screen-xl mx-auto px-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                  <h2 className="md:text-3xl text-2xl font-medium">
                      Best Practices in<span className="text-[#326B3F]"> SEO Copywriting</span>
                  </h2>
                  <p className="text-[#6a6a6a] text-sm max-w-2xl mx-auto">
                    Our SEO copywriting agency follows industry best practices to provide maximum output and deliver content that ranks and converts.
                  </p>
              </motion.div>
              
              <div className="max-w-screen-xl mx-auto mt-8 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {points.map((point, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 relative overflow-hidden"
                      whileHover={{ y: -5 }}
                    >
                      <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-[#326B3F]/10 z-0"></div>
                      <div className="flex items-start space-x-4 relative z-10">
                        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-[#326B3F]/20">
                          <span className="text-[#326B3F] text-xl font-bold">{point.number}</span>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-[#1b223c] mb-2">{point.title}</h3>
                          <p className="text-[#6a6a6a] text-sm leading-relaxed">{point.description}</p>
                          
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div 
                  className="mt-16 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                </motion.div>
              </div>
            </section>
            
            <section>
              <motion.div 
                className='relative bg-[#429054]/20 mt-12 md:mt-22 h-auto flex justify-center items-center mx-auto'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <div className='max-w-screen-xl flex justify-center items-center mx-auto'>
                  <motion.div 
                    className='flex-row justify-center items-center px-6 py-6 md:py-0'
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    <motion.h3 variants={itemVariants} className='md:text-3xl text-2xl font-medium text-[#326B3F]'>
                    Why Choose Our SEO<br/>
                    <span className='md:text-3xl text-2xl font-medium text-black'>
                    Content Writing Agency<br/>
                    </span>
                    </motion.h3>
                    <motion.p variants={itemVariants} className='text-sm font-regular mt-6 text-[#6a6a6a]'>
                    Choosing the right SEO content writing agency is crucial for improving search rankings, driving organic traffic, and boosting conversions. Our team of experienced SEO writers creates well-researched, keyword-optimized content tailored to your brand's voice and goals.
                    </motion.p>
                    <motion.ul 
                      className='mt-6 space-y-4'
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-50px" }}
                    >
                      {[
                        "Experienced SEO Writers – Our experts craft compelling, SEO-friendly content.",
                        "Customized Content Strategy – We align content with your brand's objectives.",
                        "Grammarly & AI Detection Passed – Ensuring originality and readability.",
                        "Affordable & Timely Delivery – Quality content at competitive rates.",
                        "Data-Driven Approach – Content backed by analytics for better results."
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
                    <motion.p variants={itemVariants} className='text-sm font-regular mt-6 text-[#6a6a6a]'>
                    With our SEO content services, your business gets content that ranks well and engages your audience effectively.
                    </motion.p>
                  </motion.div>
                  <motion.div 
                    className='flex justify-center items-center mx-auto scale-70'
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    <Image
                      src="/Images/section3.png"
                      alt="Icon1"
                      width={500}
                      height={500}
                      className='md:block hidden'
                    />
                  </motion.div>
                </div>
              </motion.div>
              
              <motion.div 
                className="text-center mb-8 space-y-4 mt-12 md:mt-22 max-w-screen-xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                  <h2 className="md:text-3xl text-2xl font-medium">
                      Importance of High Quality Content<br/> <span className="text-[#326B3F]">for Digital Marketing</span>{' '}<br />
                  </h2>
                  <p className="text-[#6a6a6a] text-sm">
                  Quality content is the foundation of a successful digital marketing campaign. Here's why it matters:
                  </p>
              </motion.div>
              
              <motion.section 
                className="max-w-screen-xl mx-auto text-left py-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {seoHQ.map((benefit, index) => (
                    <motion.div 
                      key={benefit.number}
                      variants={itemVariants}
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span className="text-[#326B3F] text-2xl">{benefit.number}</span>
                      <p className="mt-2 text-md font-semibold text-[#1b223c]">{benefit.title}</p>
                      <p className="mt-2 text-sm text-gray-500">{benefit.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            </section>
            
            <motion.section 
              className="relative bg-[#429054]/40 py-16 mt-12 md:mt-22 overflow-hidden"
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
                      <h1 className="md:text-3xl text-xl font-medium mb-3">
                          Get Started with Professional
                          <span className="text-[#326B3F] block">Content Writing Services Today!</span>
                      </h1>
                    </motion.div>
                    <motion.div 
                      className="w-full md:w-7/12 md:pl-8"
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                    >
                      <p className="text-[#6a6a6a] ml-35 mb-6">
                      Boost your online presence with our SEO content writing services. Contact TransCurators today to create high-quality, SEO-optimized content that ranks, engages, and converts!
                      </p>
                      <motion.div 
                        className="mt-8 ml-35"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                          <a href="#" className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-lg hover:shadow-xl transition-all duration-500 font-medium text-base bg-[#326B3F] text-white hover:-translate-y-1">
                          Start Your Journey
                          </a>
                      </motion.div>
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
            
            <motion.div 
              className='max-w-screen-xl flex justify-center md:mt-22 mt-12 mb-10 mx-auto items-center'     
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className='text-center flex-row'>
                  <p className='md:text-3xl text-xl text-black font-medium mt-4'>
                  Frequently Asked<span className='text-[#326B3F]'> Questions</span>
                  </p>
                  <p className='text-sm text-[#6a6a6a] mt-4 leading-[25px] max-w-screen-lg'>
                  Get answers to common questions about our SEO content writing services          
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

        </>
    );
}

export default SEOContentWriting;