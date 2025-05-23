"use client";
import Carousel from '../components/carousel/page';
import { motion } from 'framer-motion';
import { CarouselTwo } from '../components/caruseltwo/page';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

import Link from 'next/link'

const DigitalMarketing = () => {
    
    const [showAll, setShowAll] = useState(false);
    const [showAllServices, setShowAllServices] = useState(false);
    // Add state for mobile menu
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Toggle mobile menu
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    const [formData, setFormData] = useState({
      name: '',
      company: '',
      phone: '',
      email: '',
      project: '',
      services: {
        'website-content': false,
        'seo-blog-writing': false,
        'product-descriptions': false,
        'content-strategy-planning': false,
        'whitepapers-case-studies': false,
        'something-else': false
      }
    });
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
    const handleCheckboxChange = (e) => {
      const { id, checked } = e.target;
      setFormData({
        ...formData,
        services: {
          ...formData.services,
          [id]: checked
        }
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      
      // Format services for Google Sheets
      const selectedServices = Object.keys(formData.services)
        .filter(key => formData.services[key])
        .map(key => key.replace(/-/g, ' '))
        .join(', ');
      
      // Prepare the data for Google Sheets
      const dataToSend = {
        name: formData.name,
        company: formData.company,
        phone: formData.phone,
        email: formData.email,
        project: formData.project,
        services: selectedServices,
        timestamp: new Date().toISOString()
      };
  
      try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbx5DQDJ_h8F6clbp-VvV_dGom3TDaTM5BvxvUxko2S2aA197j-TzMiOPm2e4arEq0g0yg/exec', {
          method: 'POST',
          mode: 'no-cors', // Important for Google Sheets Web App
          cache: 'no-cache',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(dataToSend)
        });
        
        // Since 'no-cors' doesn't give us response details, we assume success
        setSubmitStatus('success');
          // Reset form after successful submission
        setFormData({
          name: '',
          company: '',
          phone: '',
          email: '',
          project: '',
          services: {
            'website-content': false,
            'seo-blog-writing': false,
            'product-descriptions': false,
            'content-strategy-planning': false,
            'whitepapers-case-studies': false,
            'something-else': false
          }
        });

        // Redirect to thank you page
        window.location.href = '/ThankYou';
        
      } catch (error) {
        console.error('Error submitting form:', error);
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
        // Reset status after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000);
      }
    };
    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isMobileMenuOpen && !event.target.closest('#mobile-menu') && !event.target.closest('#menu-button')) {
                setIsMobileMenuOpen(false);
            }
        };
        
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMobileMenuOpen]);
    
    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMobileMenuOpen]);
    
   
      const Process = [
        {
          number: 1,
          title: "Keyword-Driven Strategy",
          description:
            "We identify high-intent, low-competition phrases that align with your audience's search patterns to ensure maximum visibility and generate quality traffic.",
        },
        {
          number: 2,
          title: "On-Page SEO Excellence",
          description:
            "From meta tag optimization to content organization, we optimize every aspect of your page for improved rankings and more interaction.",
        },
        {
          number: 3,
          title: "Data-Backed Content Planning",
          description:
            "With trend and live analysis, we create SEO-optimized content calendars customized to user demand and industry requirements.",
        },
        {
          number: 4,
          title: "Link-Building That Works",
          description:
            "We focus on quality, ethical backlinks that increase domain authority and your online reputation on all search engines.",
        },
        {
          number: 5,
          title: "Local SEO for Targeted Reach",
          description:
            "We optimize your local listings and content to be search engine-friendly so local customers can find and select your business easily.",
        },
      ];
      
      const processItems = [
  {
    title: "Our Process",
    description: "",
    highlight: true,
  },
  {
    title: "Strategies",
    description:
      "As a full-service digital marketing agency, we explore your objectives, audience, and market to create a customized roadmap of our digital marketing services so that your strategy is consistent with your business goals.",
  },
  {
    title: "Data-Driven Decision Making",
    description:
      "Employing real-time analytics tools from our digital marketing services company, we can optimize your campaigns by adjusting bid strategies, creative assets, and messaging based on performance analysis to improve ROI.",
  },
  {
    title: "Competitive Analysis",
    description:
      "We track your brand against its competitors, taking advantage of the insights derived from our digital marketing services and looking for gaps and targets to ensure we get better campaign performance than the actual market.",
  },
  {
    title: "Transparent Reporting",
    description:
      "We provide clear, concise reporting and deliver specific details on key metrics, spending, and ROI, keeping clients informed with the ability to have control of their strategies.",
  },
  {
    title: "Proven Results",
    description:
      "By continually focusing on optimizing your campaigns, we are not just your digital marketing company that drives traffic, leads, and revenue growth. Still, we are also proving performance by iterating to achieve sustainable growth.",
  },
];
const reasons = [
  {
    title: "Reduced visibility",
    description: "Your brand will be harder to find online, limiting your reach.",
  },
  {
    title: "Missed leads",
    description:
      "Without a digital marketing plan, you're missing out on valuable leads that could convert into loyal customers.",
  },
  {
    title: "Increased marketing costs",
    description:
      "Without a targeted strategy, you're likely overspending on ineffective methods.",
  },
];
           const [expandedIndex, setExpandedIndex] = useState(null);
        
         const faqs = [
  {
    id: 1,
    question: "What is digital marketing?",
    answer:
      "Digital marketing refers to marketing products or services through digital channels such as social media, email, SEO, and more. It assists businesses in reaching their target market online.",
  },
  {
    id: 2,
    question: "Why is SEO important for my business?",
    answer:
      "SEO makes your site visible to search engines, driving organic traffic. Higher search rankings translate to more leads and sales at no cost of advertising.",
  },
  {
    id: 3,
    question: "How do I measure the success of digital marketing campaigns?",
    answer:
      "We use evidence-based metrics to track site traffic, conversion, and return on investment. This allows us to optimize campaigns and ensure they are successful based on your goals.",
  },
  {
    id: 4,
    question: "What is PPC advertising, and how does it work?",
    answer:
      "PPC (Pay-Per-Click) is an internet advertising scheme in which businesses pay per click on their advert. PPC is effective for generating immediate traffic and leads.",
  },
  {
    id: 5,
    question: "How can social media marketing benefit my business?",
    answer:
      "Social media marketing places the brand in front of people, engages with customers and directs traffic to your site. It's a fantastic way to target your audience and drive sales.",
  },
  {
    id: 6,
    question: "How do you create a digital marketing strategy?",
    answer:
      "We begin by understanding the goals and then create a customized approach with unique strategies. We use data insights to maximize and monitor performance at every step.",
  },
  {
    id: 7,
    question: "Can digital marketing help with brand visibility?",
    answer:
      "Yes! Internet marketing develops your brand's web presence, making it easier for potential clients to locate you. We engage your audience with targeted campaigns to raise visibility.",
  },
  {
    id: 8,
    question: "How often should I update my digital marketing strategy?",
    answer:
      "Digital marketing continues to evolve. We constantly look out for and adjust strategies to stay relevant and effective by observing market trends, competitor operations, and business needs.",
  },
  {
    id: 9,
    question: "What is content marketing, and why do I need it?",
    answer:
      "Content marketing involves creating helpful content to attract and engage your target market. It builds trust, improves SEO, and drives traffic to your site.",
  },
  {
    id: 10,
    question: "What tools do you use for digital marketing campaigns?",
    answer:
      "We use cutting-edge technologies such as Google Analytics, HubSpot, Meta Ads, and Ahrefs to monitor and optimize your campaign. These help us provide you with measurable results for your business.",
  },
];

          const [openFAQ, setOpenFAQ] = useState(null);
      const [showMore, setShowMore] = useState(false);
    
      const toggleFAQ = (id) => {
        setOpenFAQ((prev) => (prev === id ? null : id));
      };
              const toggleExpanded = (index) => {
                // If the clicked service is already expanded, collapse it; otherwise, expand it.
                setExpandedIndex(expandedIndex === index ? null : index);
              };
            // Animation variants for Framer Motion
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
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
                duration: 0.6
            }
        }
    };
    
    const metrics = [
        {
            value: '2.2M+',
            description: 'Ad Impressions Generated'
        },
        {
            value: '150+',
            description: 'Digital Campaigns Executed'
        },
        {
            value: '200%+',
            description: 'Average ROI on Performance Campaigns'
        },
        {
            value: '250+',
            description: 'Brands Scaled with Digital Marketing'
        }
    ];
    const benefits= [
      {
        title: 'Content for 500+ brands, startups, and enterprises.',
      Content: 'We serve startups, enterprises, and everything in between, delivering tailored content for diverse industry needs.'
    },
    {
        title: 'SEO-optimised content with 90%+ keyword ranking success.',
        Content: '90%+ keyword ranking success rate through our strategic content creation approach.'
    },
    {
        title: '50+ Expert Writers & Editors In House: Specialists in multiple industries and niches.',
        Content: 'Specialists in multiple industries and niches to ensure your content is accurate and compelling.'
    },
    {
        title: 'Experience across 35+ business domains',
        Content: 'From tech to healthcare, finance to education, we have the expertise to cover any business sector.'
    },
    {
        title: 'Unlimited : We\'re not done until you\'re 100% satisfied.',
        Content: 'We\'re not done until you\'re 100% satisfied with the final result.'
    },
    {
        title: 'Zero Missed Deadlines in 2024: Reliable delviery, always.',
        Content: 'Reliable delivery, always - our perfect on-time record in 2024 speaks for itself.'
    }
    ];
    
  const testimonials = [
  {
    name: "John Doe",
    title: "CEO, TechSolutions Ltd.",
    text: "TransCurators transformed our digital marketing strategy. Our traffic increased by 150% within 6 months, and we saw a significant improvement in lead generation."
  },
  {
    name: "Sarah Lee",
    title: "Marketing Director, EcoTech Innovations",
    text: "Working with TransCurators was a game-changer! They tailored a strategy that perfectly aligned with our goals, and we noticed a noticeable boost in our conversion rates."
  },
  {
    name: "Michael Smith",
    title: "Founder, FashionWave",
    text: "Thanks to TransCurators’ expert SEO and social media campaigns, we reached new customers and grew our sales by over 30% in just 3 months."
  }
];

      
        const [activeIndex, setActiveIndex] = useState(0);
      
        const prevTestimonial = () => {
          setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
        };
      
        const nextTestimonial = () => {
          setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
        };    // Add counter state
    const [counters, setCounters] = useState({
        "2.2M+": "0+",
        "150+": "0+",
        "200%+": "0%+",
        "250+": "0+"
    });
    
    // Animation timing ref
    const animationRef = useRef(null);    // Counter effect function
    
    // Define sections for the journey carousel
    const sections = [
  {
    id: 1,
    title: "Voice Search",
    headingColor: "#326b3f",
    image: "/trend 1.jpg",
    content:
      "With the proliferation of voice assistants, voice search optimization is crucial for better search rankings and a larger reach.",
  },
  {
    id: 2,
    title: "AI SEO",
    headingColor: "#326b3f",
    image: "/trend 2.jpg",
    content:
      "Artificial Intelligence is transforming SEO to allow more customized search results and intelligent algorithms for content optimization.",
  },
  {
    id: 3,
    title: "Micro-Influencers",
    headingColor: "#326b3f",
    image: "/trend 3.jpg",
    content:
      "Brands will rely more on micro-influencers to target specialized niches and increase engagement rates.",
  },
  {
    id: 4,
    title: "Privacy-First Tracking",
    headingColor: "#326b3f",
    image: "/trend 4.jpg",
    content:
      "Data privacy issues drive the shift toward privacy-first marketing strategies, such as more transparent tracking practices and user consent procedures.",
  },
];

    
    useEffect(() => {
        let startTimestamp;
        const duration = 1500; // Animation duration in milliseconds
        
        // Animation function
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            
            // Update each counter based on progress
            const updatedCounters = {};
            
            // For "2.2M+"
            const millions = Math.floor(progress * 2.2 * 10) / 10;
            updatedCounters["2.2M+"] = `${millions >= 2.2 ? "2.2" : millions.toFixed(1)}M+`;
            
            // For "150+"
            const campaigns = Math.floor(progress * 150);
            updatedCounters["150+"] = `${campaigns}+`;
            
            // For "200%+"
            const percentage = Math.floor(progress * 200);
            updatedCounters["200%+"] = `${percentage}%+`;
            
            // For "250+"
            const brands = Math.floor(progress * 250);
            updatedCounters["250+"] = `${brands}+`;
            
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

    const [activePage, setActivePage] = useState(0);

    return (
        <>
    
                
            
            {/* Hero Section - Ad Landing Version */}
           <motion.div
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ duration: 0.8 }}
                   className="flex justify-center w-full relative overflow-hidden"
                 >
                   <div className="flex flex-col md:flex-row bg-white border-4 border-[#429450] md:rounded-4xl min-h-fit md:min-h-[50vh] md:h-[90vh] md:max-w-[calc(100vw-40px)] lg:max-w-[calc(100vw-70px)] w-full mt-4 py-8 md:py-4 relative overflow-hidden">
                     <motion.div
                       variants={containerVariants}
                       initial="hidden"
                       animate="visible"
                       className="w-full md:w-[55%] lg:w-[50%] xl:w-[45%] flex flex-col justify-center space-y-4 md:space-y-4 lg:space-y-6 px-5 md:px-8 lg:px-12 overflow-hidden z-10 "
                     >
                       <motion.h1
                         variants={itemVariants}
                         className='text-black font-medium text-[28px] sm:text-[34px] md:text-[50px] lg:text-[50px] xl:text-[60px] text-left leading-none md:leading-none tracking-tight mb-3'
                       >
                         ROI-Driven
                       </motion.h1>
                       <motion.h1
                         variants={itemVariants}
                         className='text-[#4B7D57] font-medium text-[28px] sm:text-[34px] md:text-[50px] lg:text-[50px] xl:text-[60px] text-left leading-none md:leading-none tracking-tight mt-[-10px] md:mt-[-5px]'
                       >
                         Digital Marketing Agency
                       </motion.h1>
                       <motion.h1
                         variants={itemVariants}
                         className='text-black font-medium text-[28px] sm:text-[34px] md:text-[50px] lg:text-[50px] xl:text-[60px] text-left leading-none md:leading-none tracking-tight mb-3'
                       >
                        That Grows Your Business
                       </motion.h1>
           
                       
           
                       <motion.button
                         variants={itemVariants}
                         onClick={() => window.location.href = "/contact"}
                         whileHover={{ scale: 1.05 }}
                         whileTap={{ scale: 0.95 }}
                         type="submit"
                         className="gap-2 md:gap-3 mt-4 md:mt-6 flex justify-center items-center self-start text-[#6a6a6a] text-xs sm:text-sm bg-gray-50 backdrop-blur-md lg:font-medium isolation-auto 
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
                     </motion.div>
           
                     <motion.div
                       initial={{ opacity: 0, x: 50 }}
                       animate={{ opacity: 1, x: 0 }}
                       transition={{ delay: 0.4, duration: 0.8 }}
                       className="hidden md:flex justify-center items-center md:w-[40%] lg:w-[70%] xl:w-[70%] relative bg-white"
                     >
                        <Image
                                        className='max-w-[100%] md:max-w-[90%] lg:max-w-[95%] xl:max-w-[90%] h-auto object-contain mt-8 ml-4'
                                        src="/hero section.png"
                                        alt="Landing Page Hero"
                                        width={500}
                                        height={300}
                                        priority
                                      />
                     </motion.div>
                     
                   </div>
                 </motion.div> 

            {/* Metrics Section - with animated counter */}
            <section id="landing-metrics-section" className="md:mt-22 mt-12 bg-white">
    <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-medium">
                <span className="text-[#326B3F]">Metrics</span> That Speak For Themselves
            </h2>
            <p className="text-[#6a6a6a] mt-4 text-sm">See the impact we've made for our clients</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {metrics.map((metric, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-4 md:p-8 rounded-xl shadow-[0_0_15px_#CCE3DE] hover:shadow-[0_0_25px_#A8D5BA] transition-all duration-300 text-center"
                >
                    <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#326B3F] min-h-[60px] md:min-h-[80px] flex items-center justify-center">
                        {counters[metric.value]}
                    </div>
                    <p className="mt-2 md:mt-4 text-[#6a6a6a] text-xs sm:text-sm md:text-base lg:text-lg">{metric.description}</p>
                </motion.div>
            ))}
        </div>
    </div>
</section>
<section className="flex flex-col md:flex-row items-center justify-center min-h-[auto] md:min-h-screen bg-white px-4 py-12">
  {/* Left: Content */}
  <div className="bg-white rounded-xl md:rounded-tr-2xl md:rounded-br-2xl shadow-lg p-6 max-w-xl w-full md:mr-[-96px] z-10">
    <h2 className="text-2xl md:text-3xl mb-4">
      Boost your online presence with a professional digital marketing agency
    </h2>
    <p className="text-[#6a6a6a] mb-4">
      In a time of increasing competition and dependence on digital media, businesses that ignore digital media will fall behind. Consumers now have multiple digital touchpoints to research, compare, and buy—if you're not there, you don't exist. A digital marketing agency helps ensure your brand cuts through the noise, engages where prospective customers are and keeps you ahead of competitors.
    </p>
    <ul className="list-disc pl-5 space-y-2 text-[#6a6a6a] mb-6">
      <li>
        Increase brand exposure and visibility across channels by using SEO, social, and paid ads to be where your business continuously gets seen.
      </li>
      <li>
        Engage audiences with campaigns based on insights to resonate with their needs and corresponding behaviors; we want to establish a connection, and, ultimately, loyalty.
      </li>
      <li>
        Grow organic traffic and increase leads to your website through a combination of content marketing and technical SEO refinements.
      </li>
      <li>
        Impact conversion rates: fine-tune your lead generation process using measurable insights—to better inform the messaging, design, and offers that resonate best via A/B testing insights analytics.
      </li>
    </ul>
    <button className="bg-green-800 hover:bg-green-900 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200">
      Book Your Free 30-Min Growth Session
    </button>
  </div>
  
  {/* Right: Image - Hidden on mobile */}
  <div className="hidden md:flex mt-8 md:mt-0 md:ml-[-64px] flex-1 items-center justify-center">
    <div className="rounded-2xl overflow-hidden w-[900px] h-[900px] flex items-center justify-center shadow-lg">
      <Image
        src="/1st.jpg"
        alt="Digital Marketing Illustration"
        width={900}
        height={900}
        className="object-cover w-full h-full"
      />
    </div>
  </div>
</section>
            <section>
            <div className='relative bg-[#429054]/20 mt-12 h-auto md:mt-22 flex justify-center items-center mx-auto py-4 md:py-4'>
        <div className='max-w-screen-xl flex justify-center items-center mx-auto'>
        <div className='flex items-center mx-auto scale-70'>
          <Image src="/group 1.png" alt="Icon1" className='md:block hidden' width={400} height={400} priority />
        </div>
        <div className='flex-row justify-center items-center px-6 py-8 md:py-12'>
          <h2 className='md:text-3xl text-xl font-semibold text-[#326B3F]'>
          What Real ROI Looks Like
          <span className='md:text-3xl text-xl font-semibold text-black'> With TransCurators<br/>
          </span>
          </h2>
          <p className='text-sm font-regular mt-6 text-[#6a6a6a]'>
          At TransCurators, we focus on delivering measurable results through data-driven digital marketing services. Our clients experience significant improvements, such as:
          </p>
          <ul className='mt-6 space-y-4'>
            {[
              {
                heading: "+40% organic traffic",
                desc: "Retail – SEO campaign"
              },
              {
                heading: "+30% lead generation",
                desc: "EdTech – Paid & Social"
              },
              {
                heading: "−25% marketing costs",
                desc: "BFSI – PPC optimization"
              },
              {
                heading: "+55% engagement rate",
                desc: "D2C brand – Instagram & LinkedIn"
              },
              {
                heading: "+70% increase in email open rates",
                desc: "Healthcare – CRM strategy revamp"
              },
              {
                heading: "3.5x return on ad spend",
                desc: "E-commerce – Meta + Google Ads"
              },
              {
                heading: "+200% growth in blog traffic",
                desc: "B2B SaaS – content revamp & SEO"
              },
              {
                heading: "+60% landing page conversions",
                desc: "Fintech – CRO and UX fixes"
              },
              {
                heading: "−35% bounce rate improvement",
                desc: "Education – mobile-first redesign"
              }
            ].map((item, index) => (
              <li key={index} className='text-sm font-normal text-[#6a6a6a] flex items-center gap-2'>
                <span className='w-5 h-5 flex items-center justify-center rounded-full bg-[#326B3F] text-white'>
                <svg className="h-full p-0.5" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M6.5 10.7l-2.9-2.9-1.1 1.1 4 4 8-8-1.1-1.1z"></path>
                  </svg>
                  
                </span>
                <span>
                  <span className="font-semibold">{item.heading}</span>: {item.desc}
                </span>
              </li>
            ))}
          </ul>
          <p className='text-sm font-regular mt-6 text-[#6a6a6a]'>
          These real-world results demonstrate how our digital marketing agency can effectively boost your ROI.
          </p>
          <div className="flex flex-col sm:flex-row md:mt-4 mt-4">
                                <button 
                                    onClick={() => {
                                        document.getElementById('contact-form').scrollIntoView({ 
                                            behavior: 'smooth',
                                            block: 'start'
                                        });
                                    }}
                                    className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-[0_0_50px_#CCE3DE] hover:shadow-[0_0_100px_#A8D5BA] font-medium text-base transition-shadow duration-300 bg-[#326B3F] text-white"
                                >
                                    Contact Us
                                </button>
                            </div>
        </div>
        </div>
      </div>
      </section>
    <section className="relative md:mt-22 mt-12">
      {/* Green bar spanning full width */}
      <div className="absolute top-0 left-0 w-full h-[180px] sm:h-[200px] md:h-[220px] bg-[#D9E9DD] -z-10" />
      <div className="max-w-screen-xl mx-auto px-4 pt-8 sm:pt-10 md:pt-12 pb-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl text-center mb-3">
          What TransCurators Can Do for Your Business Growth
        </h2>
        <p className="text-[#6a6a6a] text-center max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10 text-xs sm:text-sm">
          TransCurators Digital Marketing Agency is a leading digital marketing agency for brands focused on measurable results. 
          We build campaigns to suit your interests, ensuring every activity drives your goals.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mt-6 md:mt-8">
          {[
            {
              title: "Tailored strategy aligned with your business objectives",
              description: "We develop tailored strategic roadmaps to prioritize the highest value activities, from SEO to paid media."
            },
            {
              title: "Performance tracking & analytics",
              description: "From real-time dashboards to campaign-level reports, our efforts are measurable and can be tracked as an ROI."
            },
            {
              title: "Campaigns relevant throughout the buyer journey",
              description: "We reach your audience with the right message when it's time - whether that's awareness, consideration, or decision."
            },
            {
              title: "Dedicated account managers constant optimization",
              description: "You get a dedicated person to optimize strategies, improve performance, and ensure you deliver value."
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md text-center p-4 sm:p-5 md:p-6 flex flex-col h-full">
              <h3 className="font-semibold text-base sm:text-lg mb-2">{item.title}</h3>
              <p className="text-[#6a6a6a] text-xs sm:text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section>
        <div className="mt-12 md:mt-22 max-w-screen-xl mx-auto px-4">
              <h2 className="md:text-3xl text-2xl text-center mb-6">2025 Trends That Will Shape Your Marketing Strategy</h2>
              <p className="text-[#6a6a6a] text-center mb-10">
                As the digital marketing environment changes, being ahead of new trends is important. 
                The following are significant trends to follow in 2025:
              </p>
              
              </div>
        
            
            <div className="relative">
              <div className="rounded-lg overflow-hidden max-w-screen-xl mx-auto shadow-lg">
                <motion.div
                  key={sections[activeIndex].id}
                  className="flex flex-col md:flex-row"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Left Section */}
                  <div className="w-full md:w-1/2 bg-white p-8">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="text-6xl font-bold text-center md:text-left text-[#326B3F] mb-4">
                        {sections[activeIndex].id}
                      </div>
                      <h2 className="text-2xl font-semibold mb-4 text-center md:text-left">
                        {sections[activeIndex].title}
                      </h2>
                      <p className="text-[#6a6a6a] text-center md:text-left">{sections[activeIndex].content}</p>
                    </motion.div>
                  </div>

                  {/* Right Section */}
                  <div className="w-full md:w-1/2 bg-gray-200 flex items-center justify-center min-h-[250px] relative">
                    <motion.div
                      className="w-full h-full"
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Image
                        src={sections[activeIndex].image}
                        alt={sections[activeIndex].title}
                        className="rounded-lg object-cover w-full h-full"
                        width={600}
                        height={400}
                        priority
                      />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
              

              {/* Pagination indicators */}
              <div className="flex justify-center md:mt-22 mt-12 space-x-1">
                {sections.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer hover:opacity-80 ${
                      activeIndex === index ? 'w-10 bg-[#429054]/40' : 'w-4 bg-gray-400 hover:bg-gray-600'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
</section>
<section>
  <div className="md:mt-22 mt-12 ">
    <h2 className="md:text-3xl text-2xl text-center mb-8">
      Full-Funnel{" "}
      <span className="text-[#326B3F]">Digital Marketing Services</span> We Offer
    </h2>
    
    {/* Service cards - only display 4 at once based on current page */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">      {[
        {
          number: "01",
          title: "Content Writing Service",
          description:
            "Our SEO-content firm develops SEO-rich blog posts, website copy, and thought-leadership white papers. From keyword development to final copy, we deliver compelling, value-rich content that delights prospects, drives organic traffic, and establishes your firm as an industry thought leader.",
          image: "/contentwritingservice.png.jpg",
        },
        {
          number: "02",
          title: "SEO Services",
          description:
            "As a leading digital marketing service company, we perform rigorous site analysis, on-page optimization, technical repair, and local search engine optimization. Our strategic process ensures improved search ranks, organic traffic increase that endures, and increased online presence on all the major search engines.",
          image: "/seoservices.png.jpg",
        },
        {
          number: "03",
          title: "Website Design and Development",
          description:
            "Your website is your virtual store. Our digital marketing agency designs responsive, fast‑loading, SEO‑optimized sites with simple‑to‑use user interfaces and conversion‑focused designs, converting visitors into return customers.",
          image: "/websitedesignanddevelopment.png.jpg",
        },
        {
          number: "04",
          title: "Pay‑Per‑Click (PPC) Advertising",
          description:
            "Maximize return on investment using strategic PPC advertising on Google Ads, Bing, and social media. We maintain bidding strategies, create compelling advertisement copy, and optimize for cost‑per‑click and conversion objectives to achieve measurable results.",
          image: "/Pay‑Per‑Click(PPC)advertising.png.jpg",
        },
        {
          number: "05",
          title: "Social Media Marketing",
          description:
            "Grow and engage your Facebook, Instagram, LinkedIn, and beyond audience. Our social media experts create personalized content calendars, track community engagement, and run paid social campaigns that generate lead generation and brand awareness.",
          image: "/socialmediamarketing.png.jpg",
        },
        {
          number: "06",
          title: "Video Animation",
          description:
            "Stand out with animated explainer videos, product demos, and social shorts. Our video animation services marry storytelling and design to capture attention, boost engagement, and drive conversions across digital channels.",
          image: "/videoanimation.png.jpg",
        },
        {
          number: "07",
          title: "Graphic Designing",
          description:
            "From social graphics and infographics to ad creative, our internal design team develops visually engaging assets that build on your brand identity. Engaging designs drive more engagement and facilitate messaging across all platforms.",
          image: "/graphicdesigning.png.jpg",
        },
        {
          number: "08",
          title: "Link Building",
          description:
            "Increase your domain authority and rankings with our white‑hat link-building. We acquire high‑quality backlinks via outreach, guest blogging, and partnerships, creating long‑term off‑page SEO equity.",
          image: "/linkbuilding.png.jpg",
        },
      ]
      .slice(activePage * 4, (activePage * 4) + 4)
      .map((service, idx) => (
        <motion.div 
          key={idx} 
          className="relative bg-white rounded-xl border border-green-200 p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: idx * 0.1 }}
        >
          <div className="absolute top-4 left-4 text-6xl font-bold text-green-100 select-none pointer-events-none z-0">
            {service.number}
          </div>
          <div className="relative z-10">
            <h3 className="text-lg font-semibold text-gray-800 mt-8">{service.title}</h3>
            <p className="text-gray-600 text-sm mt-4">{service.description}</p>
          </div>          
          <Image
            src={service.image}
            alt={service.title}
            width={400}
            height={200}
            className="w-full h-28 object-cover rounded-lg mt-2"
          />
        </motion.div>
      ))}
    </div>
    
    {/* Pagination */}
    <div className="flex justify-center mt-8 space-x-2">
      {Array.from({ length: Math.ceil(8 / 4) }).map((_, index) => (
        <button
          key={index}
          onClick={() => setActivePage(index)}
          className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer hover:opacity-80 ${
                      activePage === index ? 'w-10 bg-[#429054]/40' : 'w-4 bg-gray-400 hover:bg-gray-600'
                    }`}
          aria-label={`Go to page ${index + 1}`}
        />
      ))}
    </div>

  </div>
</section>
 <section className="md:mt-22 mt-12 bg-white px-4 md:px-6">
        <div className="max-w-screen-xl mx-auto">
          <motion.div
            className="text-center mb-10 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-medium">
              Our Process to <span className="text-[#326B3F]">Deliver Digital Excellence</span>
            </h2>

          </motion.div>
          <div className="max-w-screen-xl mx-auto md:mt-6 mt-4 px-4">
            <div className="grid grid-cols-1 md:grid-cols-3">
              {processItems.map((item, idx) => (
                <div
                  key={idx}
                  className={`rounded-xl border border-[#B3D3BB] p-8 flex flex-col justify-center items-center text-center min-h-[180px] ${item.highlight
                      ? "bg-[#B3D3BB] text-gray-900 font-medium text-2xl"
                      : "bg-white"
                    }`}
                >
                  <div className={`mb-2 ${item.highlight ? "text-3xl" : "text-xl font-semibold"}`}>
                    {item.title}
                  </div>
                  {item.description && (
                    <div className="text-gray-500 text-sm mt-2">{item.description}</div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
<section className="md:mt-22 mt-12">
      <h2 className="text-2xl md:text-3xl text-center mb-4">
        Why Not Investing in Digital Marketing{" "}
        <span className="text-[#4B7D57] font-normal">Is Costing You</span>
      </h2>
      <p className="max-w-2xl mx-auto text-center text-[#6a6a6a] mb-10">
        In today’s competitive market, failing to invest in digital marketing is a missed opportunity. Without a strong online presence, your business risks losing potential customers to competitors who leverage SEO, PPC, and social media strategies. Not staying ahead in the digital game means:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
        {reasons.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md border border-[#B3D3BB] p-8 flex flex-col items-center text-center transition-shadow hover:shadow-lg"
          >
            <h3 className="text-2xl font-medium text-[#4B7D57] mb-6">{item.title}</h3>
            <div className="bg-[#D9E9DD] rounded-lg p-4 w-full">
              <p className="text-[#6a6a6a] text-base">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center text-gray-400 mb-6">
        Don’t let the competition outpace you. Start building your digital marketing presence today!
      </p>
      <div className="flex justify-center">
        <button className="bg-[#4B7D57] text-white px-8 py-3 rounded-md font-medium shadow hover:bg-green-700 transition">
          Book a Free Consultation
        </button>
      </div>
    </section>
            <section>
              {/* industry section */}
              <div className='relativepy-16 mt-12 h-auto md:mt-22'>
                <div className='max-w-screen-xl mx-auto px-4'>
                  <div className='text-center mb-12'>
                    <h2 className='md:text-3xl text-2xl text-[#326B3F]'>
                      Content Solutions That Speak
                      <span className='md:text-3xl text-2xl text-black'> Your Brand's Language</span>
                    </h2>
                    <p className='text-sm font-regular mt-6 text-[#6a6a6a] max-w-2xl mx-auto'>
                      Each industry requires a unique voice — and we customize our content writing services to suit your industry, objectives, and audience. Our writers blend technical expertise with strategic storytelling to create content that educates, engages, and converts across various industries.
                    </p>
                  </div>
                  <section className="md:mt-22 mt-12">
  <div className="max-w-screen-lg mx-auto px-4 sm:px-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
<div className="relative col-span-1 sm:col-span-2 rounded-lg shadow-sm overflow-hidden bg-cover bg-center h-36 sm:h-40 md:h-64" style={{ backgroundImage: 'url(/industry1dm.png)' }}>
  <div className="absolute bottom-0 left-0 w-full bg-[#D9E9DD] py-1 sm:py-2 text-center px-2">
    <span className="text-[#3c6446] font-bold sm:text-base block">BFSI & Fintech</span>
    <p className="text-[#6a6a6a] text-xs sm:text-xs mt-1 leading-snug">
Our digital marketing services for the BFSI & Fintech sector help organizations with a complete online presence, lead generation, and campaigns for complying with legislation practices for financial institutions and fintech companies.    </p>
  </div>
</div>
<div className="relative rounded-lg shadow-sm overflow-hidden bg-cover bg-center h-36 sm:h-40 md:h-64" style={{ backgroundImage: 'url(/industry2dm.png)' }}>
  <div className="absolute bottom-0 left-0 w-full bg-[#D9E9DD] py-1 sm:py-2 text-center px-2">
    <span className="text-[#3c6446] font-bold sm:text-base block">Fashion & Lifestyle</span>
    <p className="text-[#6a6a6a] text-xs sm:text-xs mt-1 leading-snug">
We deliver innovative digital marketing solutions for fashion and lifestyle brands that enhance online sales, social media engagement, and brand recognition across multiple digital platforms.    </p>
  </div>
</div>
<div className="relative rounded-lg shadow-sm overflow-hidden bg-cover bg-center h-36 sm:h-40 md:h-64" style={{ backgroundImage: 'url(/industry3dm.png)' }}>
  <div className="absolute bottom-0 left-0 w-full bg-[#D9E9DD] py-1 sm:py-2 text-center px-2">
    <span className="text-[#3c6446] font-bold sm:text-base block">Automotive</span>
    <p className="text-[#6a6a6a] text-xs sm:text-xs mt-1 leading-snug">
Our digital marketing agency has supplied solutions for the automotive platform, ranging from lead generation to customer acquisition and digital visibility, to help dealers and service centers grow.    </p>
  </div>
</div>
      {/* Row 2 */}
<div className="relative rounded-lg shadow-sm overflow-hidden bg-cover bg-center h-36 sm:h-40 md:h-64" style={{ backgroundImage: 'url(/industry4dm.png)' }}>
  <div className="absolute bottom-0 left-0 w-full bg-[#D9E9DD] py-1 sm:py-2 text-center px-2">
    <span className="text-[#3c6446] font-bold sm:text-base block">Sports & Fitness</span>
    <p className="text-[#6a6a6a] text-xs sm:text-xs mt-1 leading-snug">
 As a digital marketing services company, we help sports and fitness brands grow their community, create leads, and develop greater brand loyalty through targeted content and opportunistic campaigns.
    </p>
  </div>
</div>

<div className="relative rounded-lg shadow-sm overflow-hidden bg-cover bg-center h-36 sm:h-40 md:h-64" style={{ backgroundImage: 'url(/industry5dm.png)' }}>
  <div className="absolute bottom-0 left-0 w-full bg-[#D9E9DD] py-1 sm:py-2 text-center px-2">
    <span className="text-[#3c6446] font-bold sm:text-base block">Marketing & Advertising</span>
    <p className="text-[#6a6a6a] text-xs sm:text-xs mt-1 leading-snug">
Our digital marketing company helps marketing and advertising agencies increase reach, connect with clients, and generate growth through optimized campaigns and client retention strategies.    </p>
  </div>
</div>

<div className="relative col-span-1 sm:col-span-2 rounded-lg shadow-sm overflow-hidden bg-cover bg-center h-36 sm:h-40 md:h-64" style={{ backgroundImage: 'url(/industry6dm.png)' }}>
  <div className="absolute bottom-0 left-0 w-full bg-[#D9E9DD] py-1 sm:py-2 text-center px-2">
    <span className="text-[#3c6446] font-bold sm:text-base block">Education & EdTech</span>
    <p className="text-[#6a6a6a] text-xs sm:text-xs mt-1 leading-snug">
We develop specialized digital marketing services for education and EdTech organizations, converting student enrollments, brand recognition, and engagement through SEO, social media marketing, and paid campaigns.</p>
  </div>
</div>

<div className="relative col-span-1 sm:col-span-1 md:col-span-2 rounded-lg shadow-sm overflow-hidden bg-cover bg-center h-36 sm:h-40 md:h-64" style={{ backgroundImage: 'url(/industry8dm.png)' }}>
  <div className="absolute bottom-0 left-0 w-full bg-[#D9E9DD] py-1 sm:py-2 text-center px-2">
    <span className="text-[#3c6446] font-bold sm:text-base block">Entertainment & Gaming</span>
    <p className="text-[#6a6a6a] text-xs sm:text-xs mt-1 leading-snug">
Entertainment and gaming companies can use our digital marketing services to find their audiences, engage loyal fans, and create conversions through engaging campaigns and impactful digital experiences.</p>
  </div>
</div>

<div className="relative col-span-1 sm:col-span-1 md:col-span-2 rounded-lg shadow-sm overflow-hidden bg-cover bg-center h-36 sm:h-40 md:h-64" style={{ backgroundImage: 'url(/industry7dm.png)' }}>
  <div className="absolute bottom-0 left-0 w-full bg-[#D9E9DD] py-1 sm:py-2 text-center px-2">
    <span className="text-[#3c6446] font-bold sm:text-base block">Health & Beauty</span>
    <p className="text-[#6a6a6a] text-xs sm:text-xs mt-1 leading-snug">
As a digital marketing agency, we build and produce engaging content and ads for brands that sell and market health and beauty products that expand audience reach, juice customer trust, and drive conversions in a crowded market.
    </p>
  </div>
</div>
  </div>
  </div>
</section>
                </div>
              </div>
            </section>
            
      <section>
            <div className='relative bg-[#429054]/20 mt-12 h-auto md:mt-22 flex justify-center items-center mx-auto py-4 md:py-4'>
        <div className='max-w-screen-xl flex justify-center items-center mx-auto'>
        <div className='flex items-center mx-auto scale-70'>
          <Image src="/group 2.png" alt="Icon1" className='md:block hidden' width={700} height={700} priority />
        </div>
        <div className='flex-row justify-center items-center px-6 py-8 md:py-12'>
          <h2 className='md:text-3xl text-xl font-semibold text-black'>
          Our Tools & Tech Stack
          </h2>
          <p className='text-sm font-regular mt-6 text-[#6a6a6a]'>
          At TransCurators, we utilize the latest tools and technology to maximize performance and results from every digital marketing initiative.
          </p>
          <ul className='mt-6 space-y-4'>
            {[
              {
                heading: "Google Analytics (GA)",
                desc: "GA helps us to track and measure website traffic, behavior, and conversions—allowing us to make data-driven decisions for your organization."
              },
              {
                heading: "Ahrefs",
                desc: "We use Ahrefs for SEO-related audit analysis, backlink checking, and keyword research to ensure your website ranks higher in search engines, etc."
              },
              {
                heading: "HubSpot",
                desc: "HubSpot is our inbound marketing, lead management, and customer relationship manager (CRM) tool, which helps us maintain and grow relationships and increase customer retention."
              },
              {
                heading: "Meta Ads",
                desc: "Meta Ads (Facebook and Instagram) help us generate targeted ads to connect with target audiences, increase traffic and improve conversions."
              },
              {
                heading: "Figma",
                desc: "Figma allows our design team to collaborate and create visually stunning and appealing websites and marketing collateral for more user-friendly experiences."
              }
            ].map((item, index) => (
              <li key={index} className='text-sm font-normal text-[#6a6a6a] flex items-center gap-2'>
                <span className='w-5 h-5 flex items-center justify-center rounded-full bg-[#326B3F] text-white'>
                <svg className="h-full p-0.5" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M6.5 10.7l-2.9-2.9-1.1 1.1 4 4 8-8-1.1-1.1z"></path>
                  </svg>
                  
                </span>
                <span>
                  <span className="font-semibold">{item.heading}</span>: {item.desc}
                </span>
              </li>
            ))}
          </ul>
          <p className='text-sm font-regular mt-6 text-[#6a6a6a]'>
          These powerful tools help us deliver the best digital marketing services to enhance your business growth.
          </p>
          <div className="flex flex-col sm:flex-row md:mt-4 mt-4">
                                <motion.button
                         variants={itemVariants}
                         onClick={() => window.location.href = "/contact"}
                         whileHover={{ scale: 1.05 }}
                         whileTap={{ scale: 0.95 }}
                         type="submit"
                         className="gap-2 md:gap-3 mt-4 md:mt-6 flex justify-center items-center self-start text-[#6a6a6a] text-xs sm:text-sm bg-gray-50 backdrop-blur-md lg:font-medium isolation-auto 
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
                            </div>
        </div>
        </div>
      </div>
      </section>
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
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer hover:opacity-80 ${
                  activeIndex === idx ? 'w-10 bg-[#429054]/40' : 'w-4 bg-gray-400 hover:bg-gray-600'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
            </div>
          </section>
          <div className="max-w-screen-3xl flex justify-center items-center md:mt-22 mt-12 px-2 sm:px-4 md:px-6">
  <div className="w-full max-w-7xl rounded-2xl sm:rounded-[24px] md:rounded-[32px] bg-[#d3e8db] py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-8 flex flex-col items-center">
    <h2 className="text-xl sm:text-2xl md:text-3xl text-center mb-2 sm:mb-3 md:mb-4 px-2">
      Ready to Accelerate <span className="text-[#4B7D57]">Your Growth?</span>
    </h2>
    <p className="text-center text-[#6a6a6a] mb-4 sm:mb-5 md:mb-6 max-w-3xl text-sm sm:text-base">
      Are you ready to take your business to the next level? At TransCurators, we help businesses just like yours thrive in the digital world. Our proven strategies and expert team are here to help you achieve measurable growth. Don't wait—let's get started on transforming your digital presence today!
    </p>
    <button 
      onClick={() => window.location.href = "/contact"} 
      className="bg-white text-gray-800 rounded-md px-4 sm:px-5 md:px-6 py-2 text-sm sm:text-base font-medium shadow-sm hover:bg-gray-100 hover:shadow-md transition-all duration-300 border border-transparent hover:border-gray-200">
      Book Your Free 30-Min Growth Session
    </button>
  </div>
</div>
            <div className='max-w-screen-xl flex justify-center md:mt-20 mt-12 mb-10 mx-auto items-center'>     
        <div className='text-center flex-row'>
            <p className='md:text-3xl text-2xl text-black font-medium mt-4'>
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
    </div>

    
        </>
    );
}

export default DigitalMarketing;