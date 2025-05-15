"use client";
import Carousel from "../components/carousel/page";
import { motion } from 'framer-motion';
import { CarouselTwo } from '../components/caruseltwo/page';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link'
import Image from 'next/image'

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
        navigate('/thank-you');
        
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
    
    const services = [
        {
          icon: "/messageIcon.png",
          title: "Authentic & Original",
          description: "Every piece is 100% plagiarism-free and uniquely crafted to match your brand’s voice."
        },
        {
          icon: "/messageIcon.png",
          title: "SEO-Focused",
          description: "We optimize content to boost visibility, increase traffic, and improve search engine rankings."
        },
        {
          icon: "/messageIcon.png",
          title: "Research-Driven",
          description: "In-depth research ensures high-quality content that informs, convinces, and converts."
        },
        {
          icon: "/messageIcon.png",
          title: "Fast & Reliable",
          description: "Quick turnaround times with zero compromise on quality."
        },
        {
          icon: "/messageIcon.png",
          title: "Tailored to You",
          description: "Customized solutions to meet industry-specific and business-specific goals."
        },
        {
          icon: "/messageIcon.png",
          title: "Always Here for You",
          description: "Our dedicated content support team is available 24/7."
        },
      ];
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
           const seoHQ = [
            {
              number: 1,
              title: "Discovery & Consultation",
              description:
                "We start with a comprehensive consultation to learn about your brand, audience, and objectives. This helps us determine your content tone, messaging style, and key performance indicators for measurable results.",
            },
            {
              number: 2,
              title: "Research & Strategy",
              description:
                "Our writers are committed to deep keyword and thematic analysis as we design robust content plans. We ensure all the articles provided to clients are correct, insightful, and tailored for successful SEO and conversion efforts.",
            },
            {
              number: 3,
              title: "Content Creation",
              description:
                "Professional writers create engaging, unique content that best represents your brand voice. From technical writing to storytelling, we guarantee quality, clarity, and uniqueness in every word.",
            },
            {
              number: 4,
              title: "Editing & Optimization",
              description:
                "Our editors polish the material for tone, grammar, structure, and legibility. We also apply on-page SEO best practices to enhance search engine visibility and performance.",
            },
            {
              number: 5,
              title: "Review & Feedback Loop",
              description:
                "We offer several revisions based on your input. This shared procedure guarantees the end product is based on your vision and marketing needs.",
            },
            {
              number: 6,
              title: "Delivery & Performance Tracking",
              description:
                "Once approved, we publish the content in whatever format you desire. We also help you track its performance — from traffic to engagement — so you can measure real ROI.",
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

    return (
        <>
        <section>
          {/* navbar section */}
          <div className="relative bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
                {/* Logo - restored original size */}
                <div className="flex justify-start lg:w-0 lg:flex-1">
                  <Link href="/">
                    <Image className="h-8 w-48" src="/Trans_logo.svg" alt="TransCurators Logo" />
                  </Link>
                </div>
                
                {/* Mobile menu button */}
                <div className="-mr-2 -my-2 md:hidden">
                  <button
                    id="menu-button"
                    type="button"
                    onClick={toggleMobileMenu}
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#326B3F]"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Open menu</span>
                    {/* Icon when menu is closed */}
                    <svg
                      className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                    {/* Icon when menu is open */}
                    <svg
                      className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                
                {/* Desktop navigation buttons - repositioned together */}
                <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 space-x-4">
                  
                  <button 
                    onClick={() => {
                      document.getElementById('contact-form').scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                      });
                    }}
                    className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-[0_0_50px_#CCE3DE] hover:shadow-[0_0_100px_#A8D5BA] font-medium text-base transition-shadow duration-300 bg-[#326B3F] text-white"
                  >
                    Talk to Sales
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile menu, show/hide based on mobile menu state */}
            <div
              id="mobile-menu"
              className={`${
                isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
              } fixed top-0 right-0 bottom-0 z-40 w-full max-w-xs bg-white shadow-xl transform transition-all ease-in-out duration-300 overflow-auto`}
            >
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <Image
                      className="h-8 w-auto"
                      src="/Trans_logo.svg"
                      alt="TransCurators"
                    />
                  </div>
                  <div>
                    <button
                      type="button"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#326B3F]"
                    >
                      <span className="sr-only">Close menu</span>
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
        
                
                <div className="mt-6 border-t border-gray-200 pt-4">
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setTimeout(() => {
                        document.getElementById('contact-form').scrollIntoView({ 
                          behavior: 'smooth',
                          block: 'start'
                        });
                      }, 300); // Small delay to ensure menu closes first
                    }}
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#326B3F] hover:bg-[#275231]"
                  >
                    Talk to Sales
                  </button>
                </div>
              </div>
            </div>
            
            {/* Overlay for mobile menu */}
            {isMobileMenuOpen && (
              <div 
                className="fixed inset-0 z-30 bg-gray-600 bg-opacity-75 transition-opacity" 
                aria-hidden="true"
                onClick={() => setIsMobileMenuOpen(false)}
              ></div>
            )}
          </div>
        </section>
                
            
            {/* Hero Section - Ad Landing Version */}
            <section className="relative bg-gradient-to-br from-[#f8faf9] to-[#e0f0e5] py-8 md:py-15">
                <div className="max-w-screen-xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left Column - Content */}
                        <div className="order-1">
                            <div className="inline-block px-4 py-1 bg-[#326B3F]/10 rounded-full mb-4">
                                <span className="text-[#326B3F] font-medium text-sm">Premium Content Services</span>
                            </div>
                            
                            <h1 className="text-black font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
                                Delivering Success with the<br/> <span className="text-[#326B3F]">Best Content Writing Services</span>
                            </h1>
                            
                            
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button 
                                    onClick={() => {
                                        document.getElementById('contact-form').scrollIntoView({ 
                                            behavior: 'smooth',
                                            block: 'start'
                                        });
                                    }}
                                    className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-[0_0_50px_#CCE3DE] hover:shadow-[0_0_100px_#A8D5BA] font-medium text-base transition-shadow duration-300 bg-[#326B3F] text-white"
                                >
                                    Book Your Free Consultation Today!
                                </button>
                            </div>
                        </div>
                        
                        {/* Right Column - Visual - Hidden on Mobile */}
                        <div className="relative order-2 hidden md:block">
                            <div className="absolute w-[80%] h-[80%] bg-[#326B3F]/20 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                            
                            <div className="relative ml-25 bg-white/50 p-5 w-3/4 h-auto rounded-2xl shadow-xl rotate-2 transform hover:rotate-0 transition-all duration-500">
                                <Image 
                                    src="/Wall post-amico.png" 
                                    alt="Content Writing Services" 
                                    className="w-full h-auto rounded-lg"
                                />
                                
                                <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-xl p-4 rotate-6 transform hover:rotate-0 transition-all duration-300">
                                    <div className="flex items-center gap-2">
                                        <div className="text-[#326B3F] font-bold text-2xl">4.9</div>
                                        <div>
                                            <div className="flex">
                                                {[1,2,3,4,5].map(i => (
                                                    <svg key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                ))}
                                            </div>
                                            <div className="text-xs text-gray-500">Client satisfaction</div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="absolute -top-5 -right-5 bg-white rounded-full shadow-xl p-4 w-20 h-20 flex items-center justify-center rotate-12 transform hover:rotate-0 transition-all duration-300">
                                    <div className="text-center">
                                        <div className="font-bold text-[#326B3F]">3M+</div>
                                        <div className="text-xs text-gray-500">Content pieces</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Trust Indicators */}
                <div className="max-w-screen-xl mx-auto md:mt-30 mt-12 px-4">
                    <p className="text-center text-sm text-medium text-gray-500 mb-6">TRUSTED BY INDUSTRY LEADERS</p>
                     <div className='max-w-screen-lg flex justify-center items-center mx-auto'>
                             <Carousel  gap={60} className='h-12 '>
                                                          <Image
                                                            src='/1mg.png'
                                                            alt='Tata1mg - Tata1mg'
                                                            className=' w-[200px] h-12'
                                                          />
                                                          <Image
                                                            src='/Mfine.png'
                                                            alt='Mfine-Mfine'
                                                            className=' w-[200px] h-12'
                                                          />
                                                          <Image
                                                            src='/Apollo Hospitals.png'
                                                            alt='Apollo-Apollo'
                                                            className=' w-[200px] h-12'
                                                          />
                                                          <Image
                                                            src='/Myntra.png'
                                                            alt='Myntra-Myntra'
                                                            className=' w-[200px] h-12'
                                                          />
                                                          <Image
                                                            src='/Paytm.png'
                                                            alt='PayTM - PayTM'
                                                            className=' w-[200px] h-12'
                                                          />
                                                          <Image
                                                            src='/TCS.png'
                                                            alt='TCS - TCS'
                                                            className=' w-[200px] h-12'
                                                          />
                                                          <Image
                                                            src='/HCL Technologies.png'
                                                            alt='HCL-HCL'
                                                            className=' w-[200px] h-12'
                                                          />
                                                          <Image
                                                            src='/Airtel.png'
                                                            alt='Airtel-Airtel'
                                                            className=' w-[200px] h-12'
                                                          />
                                                          <Image
                                                            src="/upGrad.png"
                                                            alt='Upgrad - Upgrad'
                                                            className=' w-[200px] h-12'
                                                          />
                                                          <Image
                                                            src="/Ajio.png"
                                                            alt='Ajio - Ajio'
                                                            className=' w-[200px] h-12'
                                                          />
                                                          <Image
                                                            src="/Aster Hospitals.png"
                                                            alt='Aster-Aster'
                                                            className=' w-[200px] h-12'
                                                          />
                                                          <Image
                                                            src='/HDFC.png'
                                                            alt='HDFC-HDFC'
                                                            className=' w-[200px] h-12'
                                                          />
                                                          <Image
                                                            src='/Adani.png'
                                                            alt='Adani - Adani'
                                                            className=' w-[200px] h-12'
                                                          />
                                                        </Carousel>
                            </div>
                </div>
            </section>

            {/* Metrics Section - with animated counter */}
            <section id="landing-metrics-section" className="md:mt-22 mt-12 bg-white">
                <div className="max-w-screen-xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-2xl md:text-3xl font-medium">
                            <span className="text-[#326B3F]">Metrics</span> That Speak For Themselves
                        </h2>
                        <p className="text-[#6a6a6a] mt-4 text-sm">See the impact we've made for our clients</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {metrics.map((metric, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white p-8 rounded-xl shadow-[0_0_15px_#CCE3DE] hover:shadow-[0_0_25px_#A8D5BA] transition-all duration-300 text-center"
                            >
                                <div className="text-5xl md:text-6xl font-bold text-[#326B3F] min-h-[80px] flex items-center justify-center">
                                    {counters[metric.value]}
                                </div>
                                <p className="mt-4 text-[#6a6a6a] text-lg">{metric.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What Makes Us Different Section */}
                        <div className="flex max-w-screen-xl mx-auto gap-6 my-24">
                              <div className="text-center flex">
                                  <div className="w-full overflow-hidden text-left flex flex-col gap-2 justify-center">
                                    
                                    <h2 className=" text-[30px] md:text-[60px]  font-bold text-black leading-16">
                                      What Makes Us<br/> <span className="text-[#326B3F]">Different?</span>
                                    </h2>
                                  </div>
                              </div>
                        
                              <div className="relative flex flex-col overflow-hidden gap-9 justify-center items-center mx-auto">
                                  <div className="max-w-screen-xl flex justify-center items-center mx-auto">
                                    <Carousel gap={40} className="h-fit">
                                      {benefits.map((benefits, index) => (
                                        <div key={index} className="w-[400px] p-6 bg-white shadow-lg flex flex-col items-center justify-center text-center">
                                          <h4 className="text-md font-semibold pointer-events-none">{benefits.title}</h4>
                                          
                                        </div>
                                      ))}
                                    </Carousel>
                                  </div>
                        
                                   <div className="max-w-screen-xl flex justify-center items-center mx-auto">
                                    <CarouselTwo gap={40} className="h-fit">
                                      {benefits.map((benefits, index) => (
                                        <div key={index} className="w-[400px] p-6 bg-white shadow-lg flex flex-col items-center justify-center text-center">
                                          <h4 className="text-md font-semibold pointer-events-none">{benefits.title}</h4>
                                
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
          <Image src="/Typewriter-pana.png" alt="Icon1" className='md:block hidden' />
        </div>
        <div className='flex-row justify-center items-center px-6 py-8 md:py-12'>
          <h2 className='md:text-3xl text-xl font-semibold text-[#326B3F]'>
          Why Choose TransCurators 
          <span className='md:text-3xl text-xl font-semibold text-black'> for Your Content Needs<br/>
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
                    <path d="M6.5 10.7l-2.9-2.9-1.1 1.1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
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
                <section className=' max-w-screen-xl mx-auto mt-12 md:mt-22'>
                <div className='flex justify-center  items-center'>     
                    <div className='text-center flex-row'>
                        <p className='md:text-3xl text-2xl text-black font-medium mt-4'>
                        Reimagining Content. Elevating Brands.<span className='text-[#326B3F]'> Celebrating Impact.</span>
                        </p>
                        <p className='text-sm text-[#6a6a6a] mt-4 leading-[25px] max-w-screen-lg mx-auto px-4'>
                        Every successful brand is fueled by connecting the content that we produce. We are a results-oriented content writing agency working with startups, enterprises, and growing companies to create content rich with narrative to engage their customers.</p>
                    </div>
                  </div>
    
                   <div className=" grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 md:mt-16 mt-12 text-left">
                            {services.slice(0, 3).map((service, index) => (
                              <div key={index} className='flex items-center'>
                                <div className={`h-auto p-4 hover:bg-gray-50 rounded-lg cursor-pointer transition duration-200 group mr-8`}>
                                  <Image src={service.icon} alt={service.title} className='group-hover:translate-x-1.5 transition-all ease-in-out duration-300' />
                                  <p className='text-md font-semibold text-[#1B223C] mt-2'>{service.title}</p>
                                  <p className={`text-sm font-regular text-[#6a6a6a] mt-2 ${
                                  expandedIndex === index ? "" : "line-clamp-4"
                                }`} >{service.description}</p>
                                </div>
                                <div className='lg:bg-[#e0e0e0] h-1/2 w-1'></div>
                              </div>
                            ))}
                          </div>
                  
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: showAll ? "auto" : 0, opacity: showAll ? 1 : 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className={`grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 overflow-hidden  text-left ${showAll ? 'mt-8' : ''}`}
                          >
                            {services.slice(3, services.length).map((service, index) => (
                              <div key={index} className='flex items-center'>
                                <div className={`h-auto p-4 hover:bg-gray-50 rounded-lg cursor-pointer transition duration-200 group mr-8`}>
                                  <Image src={service.icon} alt={service.title} className='group-hover:translate-x-1.5 transition-all ease-in-out duration-300' />
                                  <p className='text-md font-semibold text-[#1B223C] mt-2'>{service.title}</p>
                                  <p className={`text-sm font-regular text-[#6a6a6a] mt-2 ${
                                  expandedIndex === index ? "" : "line-clamp-4"
                                }`} >{service.description}</p>
                                </div>
                                <div className='lg:bg-[#e0e0e0] h-1/2 w-1'></div>
                              </div>
                            ))}
                          </motion.div>
                  
                          <div className='flex justify-center mt-8'>
                            <button onClick={() => setShowAll(!showAll)}>
                              <a className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-[0_0_50px_#CCE3DE] hover:shadow-[0_0_100px_#A8D5BA] font-medium text-base transition-shadow duration-300 bg-[#326B3F] text-white">
                                {showAll ? "Show Less" : "Explore All"}
                              </a>
                            </button>
                          </div>
                </section>
                <section>
                    {/* Content Writing Services Section */}
                    <div className="md:mt-22 mt-12">
                        <div className="max-w-screen-xl mx-auto px-4">
                            {/* Section Header */}
                            <div className='flex justify-center  items-center'>     
                    <div className='text-center flex-row'>
                        <p className='md:text-3xl text-xl text-black font-medium mt-4'>
                        Content Writing<span className='text-[#326B3F]'> That Drives Results</span>
                        </p>
                        <p className='text-sm text-[#6a6a6a] mt-4 leading-[25px] max-w-screen-lg mx-auto px-4'>
                        Engage, Inform, and Convert with SEO-Optimized Content for Your Business We provide an extensive range of content writing services that are geared to enhance visibility, generate leads, and make your brand.</p>
                    </div>
                  </div>

                            {/* Services Filter & Display */}
                            <div className="mb-10 md:mt-22 mt-12">
                                {/* Removed filter buttons */}

                                {/* Services Grid - Initial 4 Cards */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {[
                                    {
                                        title: "Newsletter Writing",
                                        description: "Develop compelling email newsletters that inform your readers well, keep them engaged, and make them loyal through regular updates, promotions, and company stories.",
                                        category: "Marketing"
                                    },
                                    {
                                        title: "Magazine Writing",
                                        description: "Deliver feature-rich, editorial-grade copy for print or online magazines that educates, entertains, and builds credibility.",
                                        category: "Branding"
                                    },
                                    {
                                        title: "E-book",
                                        description: "Create in-depth, value-packed eBooks that establish thought leadership and serve as powerful lead magnets for your brand.",
                                        category: "Marketing"
                                    },
                                    {
                                        title: "Hindi Content Writing",
                                        description: "Engage regional audiences with culturally pertinent, high-quality content written easily in Hindi to induce engagement and trust.",
                                        category: "Website"
                                    },
                                    {
                                        title: "Article Writing",
                                        description: "Develop research-driven, SEO-friendly articles that reflect expertise and boost organic visibility on all search engines.",
                                        category: "Website"
                                    },
                                    {
                                        title: "Blog Writing",
                                        description: "Engage, enlighten, and convert with keyword-filled blog articles that resolve problems, boost search rankings, and drive traffic.",
                                        category: "Website"
                                    },
                                    {
                                        title: "Product Description",
                                        description: "Highlight benefits and features with compelling, conversion-driven product copy carefully crafted for ecommerce and online stores.",
                                        category: "Branding"
                                    },
                                    {
                                        title: "Website Content",
                                        description: "Develop high-quality, search-engine-optimised web copy that speaks to your brand voice and converts web visitors into devoted customers.",
                                        category: "Website"
                                    },
                                    {
                                        title: "Editing & Proofreading",
                                        description: "Ensure your content is impeccable, polished, and professionally edited to maintain the highest quality standards.",
                                        category: "Technical"
                                    },
                                    {
                                        title: "SEO Writing",
                                        description: "Develop optimised content to drive rankings, traffic, and fulfilment of search intent without compromising reader engagement.",
                                        category: "Marketing"
                                    },
                                    {
                                        title: "White Paper",
                                        description: "Create high-content, authoritative white papers that build credibility, generate sales and guide decision-making by B2B readers.",
                                        category: "Technical"
                                    },
                                    {
                                        title: "Press Release",
                                        description: "Emphasise launches, partnerships, or milestones with engaging, media-friendly press releases that generate media coverage and press.",
                                        category: "Branding"
                                    },
                                    {
                                        title: "Article Rewriting",
                                        description: "Reconstruct current content with a fresh, SEO-focused vision that delivers maximum clarity, interest, and relevance without sacrificing the original intent.",
                                        category: "Technical"
                                    },
                                    {
                                        title: "Technical Content Writing",
                                        description: "Deconstruct complex concepts into proper, readable, and structured content that educates and assists in making informed decisions.",
                                        category: "Technical"
                                    },
                                    {
                                        title: "Copy Writing",
                                        description: "Create snappy, compelling, action-oriented copy that drives conversions on landing pages, ads, and marketing campaigns.",
                                        category: "Branding"
                                    },
                                    {
                                        title: "Emailers",
                                        description: "Power clicks opens, and conversions through branded email copy designed for the greatest effect and highest audience engagement.",
                                        category: "Marketing"
                                    }
                                ].slice(0, 4).map((service, index) => {
                                    // Custom pattern: white-green-white-green-green-white-green-white
                                    // Using modulo 8 to repeat the pattern
                                    const pattern = index % 8;
                                    const isGreen = pattern === 1 || pattern === 3 || pattern === 4 || pattern === 6;
                                    
                                    return (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4, delay: (index % 4) * 0.1 }}
                                            viewport={{ once: true, margin: "-50px" }}
                                            className={`rounded-xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group 
                                                bg-white hover:bg-[#326B3F] hover:text-white
                                            `}
                                        >
                                            <div className="p-6">
                                                <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 
                                                    text-[#1B223C] group-hover:text-white
                                                `}>
                                                    {service.title}
                                                </h3>
                                                
                                                <p className={`text-sm transition-colors duration-300 
                                                    text-[#6a6a6a] group-hover:text-gray-200
                                                `}>
                                                    {service.description}
                                                </p>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                                </div>
                                
                                {/* Conditionally rendered additional cards */}
                                <motion.div 
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: showAllServices ? "auto" : 0, opacity: showAllServices ? 1 : 0 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    className={`overflow-hidden ${showAllServices ? 'mt-6' : ''}`}
                                >
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                    {[
                                        {
                                            title: "Newsletter Writing",
                                            description: "Develop compelling email newsletters that inform your readers well, keep them engaged, and make them loyal through regular updates, promotions, and company stories.",
                                            category: "Marketing"
                                        },
                                        {
                                            title: "Magazine Writing",
                                            description: "Deliver feature-rich, editorial-grade copy for print or online magazines that educates, entertains, and builds credibility.",
                                            category: "Branding"
                                        },
                                        {
                                            title: "E-book",
                                            description: "Create in-depth, value-packed eBooks that establish thought leadership and serve as powerful lead magnets for your brand.",
                                            category: "Marketing"
                                        },
                                        {
                                            title: "Hindi Content Writing",
                                            description: "Engage regional audiences with culturally pertinent, high-quality content written easily in Hindi to induce engagement and trust.",
                                            category: "Website"
                                        },
                                        {
                                            title: "Article Writing",
                                            description: "Develop research-driven, SEO-friendly articles that reflect expertise and boost organic visibility on all search engines.",
                                            category: "Website"
                                        },
                                        {
                                            title: "Blog Writing",
                                            description: "Engage, enlighten, and convert with keyword-filled blog articles that resolve problems, boost search rankings, and drive traffic.",
                                            category: "Website"
                                        },
                                        {
                                            title: "Product Description",
                                            description: "Highlight benefits and features with compelling, conversion-driven product copy carefully crafted for ecommerce and online stores.",
                                            category: "Branding"
                                        },
                                        {
                                            title: "Website Content",
                                            description: "Develop high-quality, search-engine-optimised web copy that speaks to your brand voice and converts web visitors into devoted customers.",
                                            category: "Website"
                                        },
                                        {
                                            title: "Editing & Proofreading",
                                            description: "Ensure your content is impeccable, polished, and professionally edited to maintain the highest quality standards.",
                                            category: "Technical"
                                        },
                                        {
                                            title: "SEO Writing",
                                            description: "Develop optimised content to drive rankings, traffic, and fulfilment of search intent without compromising reader engagement.",
                                            category: "Marketing"
                                        },
                                        {
                                            title: "White Paper",
                                            description: "Create high-content, authoritative white papers that build credibility, generate sales and guide decision-making by B2B readers.",
                                            category: "Technical"
                                        },
                                        {
                                            title: "Press Release",
                                            description: "Emphasise launches, partnerships, or milestones with engaging, media-friendly press releases that generate media coverage and press.",
                                            category: "Branding"
                                        },
                                        {
                                            title: "Article Rewriting",
                                            description: "Reconstruct current content with a fresh, SEO-focused vision that delivers maximum clarity, interest, and relevance without sacrificing the original intent.",
                                            category: "Technical"
                                        },
                                        {
                                            title: "Technical Content Writing",
                                            description: "Deconstruct complex concepts into proper, readable, and structured content that educates and assists in making informed decisions.",
                                            category: "Technical"
                                        },
                                        {
                                            title: "Copy Writing",
                                            description: "Create snappy, compelling, action-oriented copy that drives conversions on landing pages, ads, and marketing campaigns.",
                                            category: "Branding"
                                        },
                                        {
                                            title: "Emailers",
                                            description: "Power clicks opens, and conversions through branded email copy designed for the greatest effect and highest audience engagement.",
                                            category: "Marketing"
                                        }
                                    ].slice(4).map((service, index) => {
                                        // Adjust index to continue the pattern
                                        index += 4;
                                        const pattern = index % 8;
                                        const isGreen = pattern === 1 || pattern === 3 || pattern === 4 || pattern === 6;
                                        
                                        return (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.4, delay: (index % 4) * 0.1 }}
                                                viewport={{ once: true, margin: "-50px" }}
                                                className={`rounded-xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group 
                                                    bg-white hover:bg-[#326B3F] hover:text-white
                                                `}
                                            >
                                                <div className="p-6">
                                                    <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 
                                                        text-[#1B223C] group-hover:text-white
                                                    `}>
                                                        {service.title}
                                                    </h3>
                                                    
                                                    <p className={`text-sm transition-colors duration-300 
                                                        text-[#6a6a6a] group-hover:text-gray-200
                                                    `}>
                                                        {service.description}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                    </div>
                                </motion.div>
                                
                                {/* Show/Hide Button */}
                                <div className='flex justify-center mt-8'>
                                    <button onClick={() => setShowAllServices(!showAllServices)}>
                                        <a className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-[0_0_50px_#CCE3DE] hover:shadow-[0_0_100px_#A8D5BA] font-medium text-base transition-shadow duration-300 bg-[#326B3F] text-white">
                                            {showAllServices ? "Show Less" : "Explore All"}
                                        </a>
                                    </button>
                                </div>
                            </div>
                            </div>
                        </div>
                    </section>
                
                
            <section>
              {/* industry section */}
              <div className='relative bg-[#429054]/20 py-16 mt-12 h-auto md:mt-22'>
                <div className='max-w-screen-xl mx-auto px-4'>
                  <div className='text-center mb-12'>
                    <h2 className='md:text-3xl text-xl font-semibold text-[#326B3F]'>
                      Content Solutions That Speak
                      <span className='md:text-3xl text-xl font-semibold text-black'> Your Brand's Language</span>
                    </h2>
                    <p className='text-sm font-regular mt-6 text-[#6a6a6a] max-w-2xl mx-auto'>
                      Each industry requires a unique voice — and we customize our content writing services to suit your industry, objectives, and audience. Our writers blend technical expertise with strategic storytelling to create content that educates, engages, and converts across various industries.
                    </p>
                  </div>

                  <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                    {[
                      {
                        icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                        name: "Healthcare",
                     
                      },
                      {
                        icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9",
                        name: "Technology & SaaS",
                      
                      },
                      {
                        icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z",
                        name: "E-commerce",
                      
                      },
                      {
                        icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
                        name: "Education & EdTech",
                        
                      },
                      {
                        icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                        name: "Finance & Fintech",
                        
                      },
                      {
                        icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                        name: "Travel & Hospitality",
                       
                      },
                      {
                        icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
                        name: "Real Estate",
                   
                      },
                      {
                        icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3",
                        name: "Legal & Compliance",
                       
                      }
                    ].map((industry, index) => (
                      <div key={index} className='bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group'>
                        <div className='w-12 h-12 bg-[#326B3F]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#326B3F] transition-colors duration-300'>
                          <svg
                            className="w-6 h-6 text-[#326B3F] group-hover:text-white transition-colors duration-300"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={industry.icon} />
                          </svg>
                        </div>
                        <h3 className='text-lg font-semibold text-gray-900 mb-2'>{industry.name}</h3>
                        
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
            
      <div className="text-center mb-8 space-y-4 mt-12 md:mt-22 max-w-screen-xl mx-auto">
                <h2 className="md:text-3xl text-xl font-semibold">
                    Our Process:<br/> <span className="text-[#326B3F]">Seamless, Strategic, and Scalable</span>{' '}<br />
                </h2>
                <p className="text-[#6a6a6a] text-sm">
                Our tested process guarantees that each piece of content we produce is tailored to your brand objectives and SEO goals — from discovery to delivery.
                </p>
            </div>
            <section className="max-w-screen-xl mx-auto text-left py-8">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 px-4 md:px-0">
    {seoHQ.map((benefit) => (
      <div key={benefit.number} className="p-4 md:p-6 bg-white">
        <span className="text-[#326B3F] text-xl md:text-2xl font-semibold">{benefit.number}</span>
        <p className="mt-2 text-base md:text-md font-semibold text-[#1b223c] line-clamp-2">{benefit.title}</p>
        <p className="mt-2 text-sm text-gray-500 line-clamp-4 md:line-clamp-none">{benefit.description}</p>
      </div>
    ))}
  </div>
  <section className="max-w-screen-xl mx-auto md:mt-22 mt-12">
    {/* testimonial section */}
    <section className="max-w-screen-xl mx-auto md:mt-22 mt-12 px-4">
  <div className="relative">
    {/* Background decorative elements */}

    <div className="relative">
      <div className="text-center mb-16">
        <h2 className="md:text-3xl text-xl mt-4 font-medium">
          What Our <span className="text-[#326B3F]">Clients Say</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Testimonial Cards */}
        <div className="relative group h-[250px]">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#326B3F] to-[#A8D5BA] rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
          <div className="relative bg-white p-6 rounded-lg shadow-sm h-full flex flex-col">
            <div className="flex items-center mb-4">
              
              <div>
                <p className="font-semibold text-[#1b223c]">Lokesh</p>
                <p className="text-xs text-[#6a6a6a]">Acko</p>
              </div>
            </div>
            <p className="text-[#6a6a6a] text-sm italic flex-grow">
              "We developed our entire health insurance and car insurance vertical through TransCurators. The quality and the speed at which we received content was superb."
            </p>
            <p className="text-xs text-[#326B3F] font-medium mt-4">Superb Quality & Speed</p>
          </div>
        </div>

        {/* Repeat the same structure for other testimonials with different initials and content */}
        <div className="relative group h-[250px]">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#326B3F] to-[#A8D5BA] rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
          <div className="relative bg-white p-6 rounded-lg shadow-sm h-full flex flex-col">
            <div className="flex items-center mb-4">
             
              <div>
                <p className="font-semibold text-[#1b223c]">Adnan</p>
                <p className="text-xs text-[#6a6a6a]">DMI Finance</p>
              </div>
            </div>
          
            <p className="text-[#6a6a6a] text-sm italic flex-grow">
              "With the help of team TC, we churned out a huge chunk of blogs on the financial sector and insurance. The understanding the team has about the financial sector is very good."
            </p>
            <p className="text-xs text-[#326B3F] font-medium mt-4">Deep Understanding of Finance</p>
          </div>
        </div>

        <div className="relative group h-[250px]">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#326B3F] to-[#A8D5BA] rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
          <div className="relative bg-white p-6 rounded-lg shadow-sm h-full flex flex-col">
            <div className="flex items-center mb-4">
             
              <div>
                <p className="font-semibold text-[#1b223c]">Vaibhavi Mehta</p>
                <p className="text-xs text-[#6a6a6a]">SMFG India Credit Co. Ltd.</p>
              </div>
            </div>
           
            <p className="text-[#6a6a6a] text-sm italic flex-grow">
              "We 'Thank you' and your team for their dedication, creativity, and hard work. It has truly made a significant impact on our success. We deeply appreciate our partnership."
            </p>
            <p className="text-xs text-[#326B3F] font-medium mt-4">A True Impact on Our Success</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </section>
            </section>
            <section class="relative bg-[#429054]/20 py-16 mt-12 md:mt-22 overflow-hidden">
                <div class="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center">
                    <div class="w-full md:w-5/12 mb-8 md:mb-0">
                    <h1 class="md:text-3xl text-xl font-medium mb-3">
                        Words that Work.
                        <span className="text-[#326B3F] block">Content that Converts.</span>
                    </h1>
                    </div>
                    <div class="w-full md:w-7/12 md:pl-8">
                    <p class="text-[#6a6a6a] ml-35 mb-6">
                    We turn ideas into compelling content that grabs attention and fuels growth.
                    </p>
                    <div class="mt-8 ml-35">
                        <button onClick={() => {
                                        document.getElementById('contact-form').scrollIntoView({ 
                                            behavior: 'smooth',
                                            block: 'start'
                                        });
                                    }}
                                    class="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-[0_0_50px_#CCE3DE] hover:shadow-[0_0_100px_#A8D5BA] font-medium text-base transition-shadow duration-300 bg-[#326B3F] text-white">
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
              <h2 className="text-2xl lg:text-3xl text-black font-medium">Got content goals?<br/><span className='text-[#326b3f]'>We've got the words to match. Let's collaborate.</span></h2>
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