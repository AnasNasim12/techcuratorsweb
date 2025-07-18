"use client";
import Carousel from '../components/carousel/page';
import { motion } from 'framer-motion';
import { CarouselTwo } from '../components/caruseltwo/page';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';



const LandingPage = () => {
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

  const [expandedIndex, setExpandedIndex] = useState(null);
  const processSteps = [
    {
      icon: "/icon 1.png",
      number: "01",
      title: "Discovery & Consultation",
      description: "We start with a comprehensive consultation to learn about your brand, audience, and objectives. This helps us determine your content tone, messaging style, and key performance indicators for measurable results.",
    },
    {
      icon: "/icon 2.png",
      number: "02",
      title: "Research & Strategy",
      description: "Our writers are committed to deep keyword and thematic analysis as we design robust content plans. We ensure all the articles provided to clients are correct, insightful, and tailored for successful SEO and conversion efforts.",
    },
    {
      icon: "/icon 3.png",
      number: "03",
      title: "Content Creation",
      description: "Professional writers create engaging, unique content that best represents your brand voice. From technical writing to storytelling, we guarantee quality, clarity, and uniqueness in every word.",
    },
    {
      icon: "/icon 4.png",
      number: "04",
      title: "Editing & Optimization",
      description: "Our editors polish the material for tone, grammar, structure, and legibility. We also apply on-page SEO best practices to enhance search engine visibility and performance.",
    },
    {
      icon: "/icon 5.png",
      number: "05",
      title: "Review & Feedback Loop",
      description: "We offer several revisions based on your input. This shared procedure guarantees the end product is based on your vision and marketing needs.",
    },
    {
      icon: "/icon 6.png",
      number: "06",
      title: "Delivery & Performance Tracking",
      description: "Once approved, we publish the content in whatever format you desire. We also help you track its performance – from traffic to engagement – so you can measure real ROI.",
    },
  ];

  const faqs = [
    {
      id: 1,
      question: "What makes TransCurators a leading content writing agency?",
      answer:
        "TransCurators merge creativity, strategy, and SEO skills to produce content that educates, converts, and ranks. Our content is 100% original, research-based, and brand-focused.",
    },
    {
      id: 2,
      question: "Do you offer SEO content writing for all industries?",
      answer:
        "We provide SEO content writing services across different industries such as healthcare, ecommerce, fintech, edtech, real estate, and more—each tailored to meet specific business needs.",
    },
    {
      id: 3,
      question: "How do you ensure the content is SEO-friendly?",
      answer:
        "We use keyword research, metadata, internal linking, and readability enhancement to optimize each article for the search engines without compromising quality.",
    },
    {
      id: 4,
      question: "Can I request revisions for my content?",
      answer:
        "Yes. We provide a maximum of two free revision cycles to guarantee that the completed work is to your satisfaction and brand voice.",
    },
    {
      id: 5,
      question: "Is your content plagiarism-free and AI-free?",
      answer:
        "Yes. Experienced authors write each and undergo strict checks for originality, grammar, and AI detection before delivery.",
    },
    {
      id: 6,
      question: "Do you offer multilingual content writing services?",
      answer:
        "We provide English and native language content writing, such as Hindi. It assists you in reaching more people using culturally appropriate messages.",
    },
    {
      id: 7,
      question: "What’s your typical turnaround time?",
      answer:
        "Our standard delivery time is 3–5 business days, depending on project size. Express delivery solutions are also provided for situations where urgent needs are required.",
    },
    {
      id: 8,
      question: "How do I get started with Transcurators’ content writing services?",
      answer:
        "Just ask for a quote or book a call with us. We'll walk you through our process and suggest your business's most suitable content strategy.",
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
      value: '10M+',
      description: 'Content Pieces Delivered'
    },
    {
      value: '3000+',
      description: 'Businesses Supported Globally'
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
  const benefits = [
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
  // Add counter state
  const [counters, setCounters] = useState({
    "10M+": "0+",
    "3000+": "0+",
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

      // For "3000+"
      const thousands = Math.floor(progress * 3000);
      updatedCounters["3000+"] = `${thousands}+`;

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

  const [visibleServices, setVisibleServices] = useState(6);

  const toggleVisibleServices = () => {
    setVisibleServices(prev => prev === 6 ? 16 : 6);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-md">
  <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
    {/* Logo */}
    <Image
      src="/Trans_logo.svg"
      alt="Logo"
      width={150}
      height={40}
      className="cursor-pointer"
    />

    {/* Desktop nav buttons */}
    <div className="hidden md:flex items-center space-x-3">
      <Link
        href="/careers"
        className="inline-block text-[#326B3F] border border-[#326B3F] px-5 py-1.5 rounded-lg text-sm font-medium hover:bg-[#326B3F] hover:text-white transition-colors duration-300"
      >
        Careers
      </Link>
      <div
        onClick={() => {
          document.getElementById('contact-form').scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }}
        className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-900 cursor-pointer"
      >
        Talk to Sales
      </div>
    </div>

    {/* Mobile view: Hamburger menu and Talk to Sales button */}
    <div className="md:hidden flex items-center space-x-3">
      <div
        onClick={() => {
          document.getElementById('contact-form').scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }}
        className="inline-block bg-green-600 text-white px-4 py-1.5 rounded-lg text-xs font-medium hover:bg-gray-900 cursor-pointer"
      >
        Talk to Sales
      </div>
      <button
        id="menu-button"
        onClick={toggleMobileMenu}
        className="text-gray-600 hover:text-gray-900 focus:outline-none"
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>
    </div>
  </div>

  {/* Mobile menu */}
  {isMobileMenuOpen && (
    <div
      id="mobile-menu"
      className="absolute top-full left-0 right-0 bg-white shadow-md py-4 px-4 md:hidden flex flex-col space-y-4 z-50"
    >
      <Link
        href="/careers"
        className="text-[#326B3F] border border-[#326B3F] px-5 py-2 rounded-lg text-sm font-medium hover:bg-[#326B3F] hover:text-white transition-colors duration-300 text-center"
      >
        Careers
      </Link>
    </div>
  )}
</header>
          {/* Hero Section - Ad Landing Version */}
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
          className="w-full md:w-[55%] lg:w-[50%] xl:w-[45%] flex flex-col justify-center space-y-4 md:space-y-4 lg:space-y-6 px-5 md:px-8 lg:px-12 overflow-hidden z-10"
        >
          <motion.h1
            variants={itemVariants}
            className='text-white font-medium text-[28px] sm:text-[34px] md:text-[50px] lg:text-[50px] xl:text-[60px] text-left leading-none md:leading-none tracking-tight max-w-[95%] md:max-w-[95%] mb-1 sm:mb-2 md:mb-3'
          >
            Delivering Success with the
          </motion.h1>
          <motion.h1
            variants={itemVariants}
            className='text-[#4B7D57] font-medium text-[28px] sm:text-[34px] md:text-[50px] lg:text-[50px] xl:text-[60px] text-left leading-none md:leading-none tracking-tight max-w-[95%] md:max-w-[95%] mt-0'
          >
            Best Content Writing Service
          </motion.h1>



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
          className="hidden md:flex justify-center items-center md:w-[45%] lg:w-[50%] xl:w-[55%] relative"
        >
          <Image
            className='max-w-[100%] md:max-w-[90%] lg:max-w-[95%] xl:max-w-[90%] h-auto object-contain mt-8 ml-4'
            src="/ads page hs.png"
            alt="Landing Page Hero"
            width={600}
            height={400}
            priority
          />
        </motion.div>
      </section>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className='relative bg-[#429054]/20 md:mb-20 h-auto py-16 md:py-28 flex justify-center md:mt-22 mt-12 items-center mx-auto overflow-hidden'
      >
        <Image src="/transPen.png" alt="Trans logo" className='absolute opacity-5 -left-10 md:top-10 top-1 md:h-50 md:w-50 h-28 w-28' width={200} height={200} priority />
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
                priority={index < 4}
              />
            ))}
          </Carousel>
        </div>
      </motion.div>

      {/* Metrics Section - with animated counter */}
      <section id="landing-metrics-section" className="md:mt-22 mt-12 bg-white">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl md:text-3xl font-medium">
              <span className="text-[#326B3F]">Metrics</span> That Speak For Themselves
            </h2>
            <p className="text-[#6a6a6a] mt-4 text-sm">See the impact we've made for our clients</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-[0_0_15px_#CCE3DE] hover:shadow-[0_0_25px_#A8D5BA] transition-all duration-300 text-center"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#326B3F] min-h-[60px] md:min-h-[80px] flex items-center justify-center">
                  {counters[metric.value]}
                </div>
                <p className="mt-2 md:mt-4 text-[#6a6a6a] text-sm sm:text-base md:text-lg">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <div className="max-w-screen-xl mx-auto px-4 my-12 md:my-24">
        {/* Mobile-only centered heading (shown only on small screens) */}
        <div className="md:hidden text-center mb-8">
          <h2 className="text-[28px] sm:text-[32px] font-bold text-black leading-tight">
            What Makes Us<span className="text-[#326B3F]"> Different?</span>
          </h2>
        </div>

        {/* Desktop layout with heading on left (original layout) */}
        <div className="hidden md:flex max-w-screen-xl mx-auto gap-6">
          <div className="text-center flex">
            <div className="w-full overflow-hidden text-left flex flex-col gap-2 justify-center">
              <h2 className="text-[42px] lg:text-[60px] font-bold text-black leading-tight">
                What Makes Us<br /> <span className="text-[#326B3F]">Different?</span>
              </h2>
            </div>
          </div>

          <div className="relative flex flex-col overflow-hidden gap-9 justify-center items-center mx-auto">
            {/* Desktop carousels (moved back to original layout) */}
            <div className="max-w-screen-xl flex justify-center items-center mx-auto">
              <Carousel gap={40} className="h-fit">
                {benefits.map((benefit, index) => (
                  <div key={index} className="w-[400px] p-6 bg-white shadow-lg flex flex-col items-center justify-center text-center">
                    <h4 className="text-md font-semibold pointer-events-none">{benefit.title}</h4>
                  </div>
                ))}
              </Carousel>
            </div>

            <div className="max-w-screen-xl flex justify-center items-center mx-auto">
              <CarouselTwo gap={40} className="h-fit">
                {benefits.map((benefit, index) => (
                  <div key={index} className="w-[400px] p-6 bg-white shadow-lg flex flex-col items-center justify-center text-center">
                    <h4 className="text-md font-semibold pointer-events-none">{benefit.title}</h4>
                  </div>
                ))}
              </CarouselTwo>
            </div>
          </div>
        </div>

        {/* Mobile-only carousels stacked vertically (shown only on small screens) */}
        <div className="md:hidden flex flex-col gap-8">
          <div className="w-full">
            <Carousel gap={20} className="h-fit">
              {benefits.map((benefit, index) => (
                <div key={index} className="w-[280px] sm:w-[340px] p-4 sm:p-6 bg-white shadow-lg flex flex-col items-center justify-center text-center">
                  <h4 className="text-sm sm:text-md font-semibold pointer-events-none">{benefit.title}</h4>
                </div>
              ))}
            </Carousel>
          </div>

          <div className="w-full">
            <CarouselTwo gap={20} className="h-fit">
              {benefits.map((benefit, index) => (
                <div key={index} className="w-[280px] sm:w-[340px] p-4 sm:p-6 bg-white shadow-lg flex flex-col items-center justify-center text-center">
                  <h4 className="text-sm sm:text-md font-semibold pointer-events-none">{benefit.title}</h4>
                </div>
              ))}
            </CarouselTwo>
          </div>
        </div>
      </div>

      <div className="text-center md:mt-22 mt-12">
        <button onClick={() => {
          document.getElementById('contact-form').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }}
    className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-[0_0_50px_#CCE3DE] hover:shadow-[0_0_100px_#A8D5BA] font-medium text-base transition-shadow duration-300 bg-[#326B3F] text-white">
        Start Your Content Journey Today
    </button>
</div>
            <section>
            <div className='relative bg-[#429054]/20 mt-12 h-auto md:mt-22 flex justify-center items-center mx-auto py-4 md:py-4'>
        <div className='max-w-screen-xl flex justify-center items-center mx-auto'>
        <div className='flex items-center mx-auto scale-70'>
          <Image src="/ads page cw.png" alt="Icon1" className='md:block hidden' width={400} height={400} priority />
        </div>
        <div className='flex-row justify-center items-center px-6 py-8 md:py-12'>
          <h2 className='md:text-3xl text-xl font-medium text-[#326B3F]'>
          Why Choose TransCurators 
          <span className='md:text-3xl text-xl font-medium text-black'> for Your Content Needs<br/>
          </span>
          </h2>
          <p className='text-sm font-regular mt-6 text-[#6a6a6a]'>
          The Right Content Partner Changes Everything – From Brand Perception to SEO to Recall. At TransCurators, we go beyond words to deliver strategy, creativity, and results. 
          </p>
          <ul className='mt-6 space-y-4'>
            {[
              {
                heading: "Industry-Specific Content",
                desc: "Writers with real domain expertise for content that connects."
              },
              {
                heading: "SEO-Focused",
                desc: "Optimized for rankings, traffic, and conversions."
              },
              {
                heading: "Custom Solutions",
                desc: "Content tailored to your brand's voice and audience."
              },
              {
                heading: "Fast Turnarounds",
                desc: "On-time delivery without compromising quality."
              },
              {
                heading: "Original & Authentic",
                desc: "No AI fluff—just unique, brand-driven storytelling."
              },
              {
                heading: "Transparent Process",
                desc: "Collaborative, clear, and goal-focused at every step."
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
      <div className="w-full mb-20 md:mt-22 mt-12">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="md:text-3xl text-2xl font-medium text-black">
            Let's Discuss Your Content Goals.
          </h2>
          <p className="md:text-3xl ml-2 text-2xl justify-center text-[#326B3F]">
            Have a question? We’re just one call away from helping you get started.
          </p>
          <div className="mt-8">
            <button
              onClick={() => {
                document.getElementById('contact-form').scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-[0_0_50px_#CCE3DE] hover:shadow-[0_0_100px_#A8D5BA] font-medium text-base transition-shadow duration-300 bg-[#326B3F] text-white"
            >
              Talk to us today
            </button>
          </div>
        </div>
      </div>
      <section className="w-full bg-[#D9E9DD]">
        {/* Green strip with heading and intro, spans full width */}
        <div className="max-w-5xl mx-auto px-4 py-8 md:py-12 text-center">
          <p className='md:text-3xl text-xl text-black font-medium mt-4'>
            Reimagining Content. Elevating Brands.<span className='text-[#326B3F]'> Celebrating Impact.</span>
          </p>
          <p className='text-xs sm:text-sm text-[#6a6a6a] mt-3 md:mt-4 leading-[22px] md:leading-[25px] max-w-screen-lg mx-auto px-2 md:px-4'>
            Every successful brand is fueled by connecting the content that we produce. We are a results-oriented content writing agency working with startups, enterprises, and growing companies to create content rich with narrative to engage their customers.
          </p>
        </div>

        {/* Cards grid - placed outside the green strip for white background */}
        <div className="w-full bg-white py-8 md:py-10">
          <div className="max-w-6xl mx-auto px-3 md:px-4 grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-8">
            {/* Card 1 */}
            <div className="bg-[#D9E9DD] rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 text-center h-full">
              <div className="font-semibold text-sm sm:text-base md:text-lg mb-1 md:mb-2">Authentic &amp; Original</div>
              <div className="text-gray-700 text-xs sm:text-sm md:text-base">
                Every piece is 100% plagiarism-free and uniquely crafted to match your brand's voice.
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#D9E9DD] rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 text-center h-full">
              <div className="font-semibold text-sm sm:text-base md:text-lg mb-1 md:mb-2">SEO-Focused</div>
              <div className="text-gray-700 text-xs sm:text-sm md:text-base">
                We optimize content to boost visibility, increase traffic, and improve search engine rankings.
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#D9E9DD] rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 text-center h-full">
              <div className="font-semibold text-sm sm:text-base md:text-lg mb-1 md:mb-2">Research-Driven</div>
              <div className="text-gray-700 text-xs sm:text-sm md:text-base">
                In-depth research ensures high-quality content that informs, convinces, and converts.
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-[#D9E9DD] rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 text-center h-full">
              <div className="font-semibold text-sm sm:text-base md:text-lg mb-1 md:mb-2">Fast &amp; Reliable</div>
              <div className="text-gray-700 text-xs sm:text-sm md:text-base">
                Quick turnaround times with zero compromise on quality.
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-[#D9E9DD] rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 text-center h-full">
              <div className="font-semibold text-sm sm:text-base md:text-lg mb-1 md:mb-2">Tailored to You</div>
              <div className="text-gray-700 text-xs sm:text-sm md:text-base">
                Customized solutions to meet industry-specific and business-specific goals.
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-[#D9E9DD] rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 text-center h-full">
              <div className="font-semibold text-sm sm:text-base md:text-lg mb-1 md:mb-2">Always Here for You</div>
              <div className="text-gray-700 text-xs sm:text-sm md:text-base">
                Our dedicated content support team is available <span className="italic">24/7</span>.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 md:mt-22 mt-12">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-medium">
              Content Writing That <span className="text-[#326B3F] relative">
                Drives Results
              </span>
            </h2>
            <p className="text-[#6a6a6a] mt-6 text-sm max-w-3xl mx-auto leading-relaxed">
              Engage, Inform, and Convert with SEO-Optimized Content for Your Business. We provide an extensive range of content writing services that are geared to enhance visibility, generate leads, and make your brand stand out.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Blog Writing",
                description: "Engage, enlighten, and convert with keyword-filled blog articles that resolve problems, boost search rankings, and drive traffic."
              },
              {
                title: "SEO Content Writing",
                description: "Develop optimised content to drive rankings, traffic, and fulfilment of search intent without compromising reader engagement."
              },
              {
                title: "Technical Content Writing",
                description: "Deconstruct complex concepts into proper, readable, and structured content that educates and assists in making informed decisions."
              },
              {
                title: "Article Writing",
                description: "Develop research-driven, SEO-friendly articles that reflect expertise and boost organic visibility on all search engines."
              },
              {
                title: "Website Content",
                description: "Develop high-quality, search-engine-optimised web copy that speaks to your brand voice and converts web visitors into devoted customers."
              },
              {
                title: "Editing & Proofreading",
                description: "Ensure your content is impeccable, polished, and professionally edited to maintain the highest quality standards."
              },
              {
                title: "Product Description",
                description: "Highlight benefits and features with compelling, conversion-driven product copy carefully crafted for ecommerce and online stores."
              },
              {
                title: "Hindi Content Writing",
                description: "Engage regional audiences with culturally pertinent, high-quality content written easily in Hindi to induce engagement and trust."
              },
              {
                title: "White Paper",
                description: "Create high-content, authoritative white papers that build credibility, generate sales and guide decision-making by B2B readers."
              },
              {
                title: "Press Release",
                description: "Emphasise launches, partnerships, or milestones with engaging, media-friendly press releases that generate media coverage and press."
              },
              {
                title: "Article Rewriting",
                description: "Reconstruct current content with a fresh, SEO-focused vision that delivers maximum clarity, interest, and relevance without sacrificing the original intent."
              },
              {
                title: "Copy Writing",
                description: "Create snappy, compelling, action-oriented copy that drives conversions on landing pages, ads, and marketing campaigns."
              },
              {
                title: "Emailers",
                description: "Power clicks opens, and conversions through branded email copy designed for the greatest effect and highest audience engagement."
              },
              {
                title: "Newsletter Writing",
                description: "Develop compelling email newsletters that inform your readers well, keep them engaged, and make them loyal through regular updates, promotions, and company stories."
              },
              {
                title: "Magazine Writing",
                description: "Deliver feature-rich, editorial-grade copy for print or online magazines that educates, entertains, and builds credibility."
              },
              {
                title: "E-book",
                description: "Create in-depth, value-packed eBooks that establish thought leadership and serve as powerful lead magnets for your brand."
              }
            ].slice(0, visibleServices).map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 md:p-8 rounded-2xl 
                  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] 
                  hover:shadow-[0_8px_25px_-5px_rgba(50,107,63,0.1),0_10px_10px_-5px_rgba(50,107,63,0.04)]
                  border border-transparent hover:border-[#326B3F]/10 transition-all duration-300
                  hover:translate-y-[-2px]"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 rounded-lg bg-[#326B3F]/5 flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-[#326B3F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-[#326B3F] group-hover:text-[#326B3F] transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-[#6a6a6a] text-sm md:text-base leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <button
              onClick={toggleVisibleServices}
              className="px-8 py-3 text-sm font-medium text-white bg-[#326B3F] rounded-lg
                hover:bg-[#326B3F]/90 transition-all duration-300 transform hover:scale-105
                shadow-[0_4px_12px_rgba(50,107,63,0.15)] hover:shadow-[0_6px_20px_rgba(50,107,63,0.25)]"
            >
              {visibleServices === 6 ? 'Show More Services' : 'Show Less'}
            </button>
          </div>
        </div>
      </section>
      <div className="text-center mb-8 space-y-4 mt-12 md:mt-22 max-w-screen-xl mx-auto">
        <h2 className="md:text-3xl text-2xl font-medium">
          Our Process:<br /> <span className="text-[#326B3F]">Seamless, Strategic, and Scalable</span>{' '}<br />
        </h2>
        <p className="text-[#6a6a6a] text-sm">
          Our tested process guarantees that each piece of content we produce is tailored to your brand objectives and SEO goals — from discovery to delivery.
        </p>
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
                    className="w-5 h-5 md:w-7 md:h-7 object-contain"
                    width={28}
                    height={28}
                    loading="lazy"
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
                  className="w-7 h-7 object-contain"
                  width={28}
                  height={28}
                  loading="lazy"
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
              </div>
            </div>
          ))}
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
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer hover:opacity-80 ${activeIndex === idx ? 'w-10 bg-[#429054]/40' : 'w-4 bg-gray-400 hover:bg-gray-600'
                    }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>







      <section className="relative bg-[#429054]/20 py-8 sm:py-12 md:py-16 mt-12 md:mt-22 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
            {/* Left side - Text content */}
            <div className="w-full md:w-full text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-medium mb-3">
                Words that Work.
                <span className="text-[#326B3F] block mt-1">Content that Converts.</span>
              </h2>
              <p className="text-sm md:text-base text-[#6a6a6a] mb-6 max-w-md mx-auto md:mx-0">
                We turn ideas into compelling content that grabs attention and fuels growth.
              </p>
              <button
                onClick={() => {
                  document.getElementById('contact-form').scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-[0_0_50px_#CCE3DE] hover:shadow-[0_0_100px_#A8D5BA] font-medium text-sm md:text-base transition-shadow duration-300 bg-[#326B3F] text-white"
              >
                Start Your Journey
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className='max-w-screen-xl flex justify-center md:mt-20 mt-12 mb-10 mx-auto items-center'>
        <div className='text-center flex-row'>
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
      </div>
      <section id="contact-form" className="px-4 md:mb-22 mb-12 md:mt-22 mt-12">
        {/* contact form section */}
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Contact Info Sidebar */}
            <div className="w-full lg:w-1/3 bg-white p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-gray-100">
              <div className="space-y-6 lg:space-y-8">
                {/* Chat with us */}
                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-full bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Chat with us</h3>
                    <p className="text-gray-600 text-sm">Our content team is here to help.</p>
                    <p className="text-gray-600 text-sm mt-1">nandini@transcurators.com</p>
                  </div>
                </div>

                {/* Rest of contact info */}
                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-full bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Call us</h3>
                    <p className="text-gray-600 text-sm mt-1">+91-7678144482</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="w-full lg:w-2/3 bg-[#429054]/10 p-8 lg:p-12">
              <div className="max-w-2xl mx-auto">
                <h2 className="text-2xl lg:text-3xl text-black font-medium">Got content goals?<br /><span className='text-[#326b3f]'>We've got the words to match. Let's collaborate.</span></h2>
                <p className="text-sm text-[#6a6a6a] md:text-sm mb-6 lg:mb-8 mt-4">Tell us a bit about your brand and how we can help elevate your content.</p>

                {/* Rest of the form */}
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    {/* Name Input */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium mb-1">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full p-1.5 border-b border-gray-800 bg-transparent focus:outline-none focus:border-gray-900"
                        required
                      />
                    </div>

                    {/* Company Name and Phone Input Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label htmlFor="company" className="block text-xs font-medium mb-1">Your Company's name</label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full p-1.5 border-b border-gray-800 bg-transparent focus:outline-none focus:border-gray-900"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-xs font-medium mb-1">Your Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full p-1.5 border-b border-gray-800 bg-transparent focus:outline-none focus:border-gray-900"
                        />
                      </div>
                    </div>

                    {/* Email Input */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium mb-1">Your Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full p-1.5 border-b border-gray-800 bg-transparent focus:outline-none focus:border-gray-900"
                        required
                      />
                    </div>

                    {/* Project Description */}
                    <div>
                      <label htmlFor="project" className="block text-xs font-medium mb-1">Tell us about the project</label>
                      <textarea
                        id="project"
                        name="project"
                        value={formData.project}
                        onChange={handleInputChange}
                        rows="1"
                        className="w-full p-1.5 border-b border-gray-800 bg-transparent focus:outline-none focus:border-gray-900"
                      ></textarea>
                    </div>
                  </div>

                  {/* Services Checkboxes */}
                  <div>
                    <label className="block text-sm font-medium mb-3">How can we help?</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        { id: 'website-content', label: 'Website Content' },
                        { id: 'seo-blog-writing', label: 'SEO Blog Writing' },
                        { id: 'product-descriptions', label: 'Product Descriptions' },
                        { id: 'content-strategy-planning', label: 'Content Strategy & Planning' },
                        { id: 'whitepapers-case-studies', label: 'Whitepapers & Case Studies' },
                        { id: 'something-else', label: 'Something else' }
                      ].map((service) => (
                        <div key={service.id} className="flex items-center">
                          <input
                            type="checkbox"
                            id={service.id}
                            checked={formData.services[service.id]}
                            onChange={handleCheckboxChange}
                            className="h-5 w-5 text-[#1b322c] border-gray-800 rounded"
                          />
                          <label htmlFor={service.id} className="ml-2 text-sm text-[#1b322c]">{service.label}</label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-4 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-[0_0_50px_#CCE3DE] hover:shadow-[0_0_100px_#A8D5BA] font-medium text-base transition-shadow duration-300 bg-[#326B3F] text-white"
                  >
                    {isSubmitting ? 'Submitting...' : 'Let\'s get started!'}
                  </button>

                  {/* Status Message */}
                  {submitStatus === 'success' && (
                    <div className="mt-3 p-2 bg-green-100 text-green-800 rounded text-center">
                      Thank you! Your submission has been received.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="mt-3 p-2 bg-red-100 text-red-800 rounded text-center">
                      There was an error submitting your form. Please try again.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default LandingPage;