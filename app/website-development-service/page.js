"use client";
import Carousel from '../components/carousel/page';
import { motion } from 'framer-motion';
import { CarouselTwo } from '../components/caruseltwo/page';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

import Link from 'next/link'

const WebDesService = () => {
    
    const [showAll, setShowAll] = useState(false);
    const [showAllServices, setShowAllServices] = useState(false);
    // Add state for mobile menu
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Toggle mobile menu
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
   const services = [
  {
    title: "Custom Website Design",
    img: "/man-designing-websites-high-angle.jpg",
    alt: "Custom Website Design",
    description: "We build engaging, responsive websites based on your brand, offering user-friendly and efficient design and development.",
  },
  {
    title: "E-commerce Development",
    img: "/medium-shot-woman-with-laptop.jpg",
    alt: "E-commerce Development",
    description: "Our team develops custom, scalable ecommerce platforms with secure payments, product and content management, and user-friendly shopping experiences.",
  },
  {
    title: "Content Management Systems",
    img: "/project-manager-using-computer-gantt-chart-planning-smartphone-tablet-scheduling.jpg",
    alt: "Content Management Systems (CMS)",
    description: "We offer flexible content management systems that are easy for businesses to manage their website content, and this ease of use can carry into a scalable content management system.",
  },
  {
    title: "Mobile App Development",
    img: "/empowered-business-woman-working-city.jpg",
    alt: "Mobile App Development",
    description: "We design and develop complete mobile applications across Android and IOS, along with tailored user experiences.",
  },
  {
    title: "UI/UX Design",
    img: "/unrecognizable-colleagues-standing-table-looking-design-projects.jpg",
    alt: "UI/UX Design",
    description: "Our UI and UX design services are built for intuitive, engaging user interfaces, as we keep the users engaged throughout their experience.",
  },
];

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
    icon: "/i1.png",
    number: "01",
    title: "Discovery & Planning",
    description: "We begin by understanding your business needs and goals. We gather all the necessary information through thoughtful discussions and research to build a solid project roadmap.",
    bullets: [
      "Key Actions: Gathering requirements, analyzing audiences, and determining project scope.",
      "Outcome: Clear vision of the project with milestones."
    ]
  },
  {
    icon: "/i2.png",
    number: "02",
    title: "Design & Prototyping",
    description: "We are now working on wireframes and prototypes so that you can visualize your website's layout and how the interface will work. This is done collaboratively, ensuring the design aligns with your brand identity.",
    bullets: [
      "Key Actions: UI/UX design, creating mockups, feedback loops.",
      "Outcome: A prototype design that is functional, aesthetically pleasing, and fully ready for development."
    ]
  },
  {
    icon: "/i3.png",
    number: "03",
    title: "Development",
    description: "Our developers then start to build out the design utilizing the latest technologies, while ensuring it is responsive, scalable, and provides the greatest user experience.",
    bullets: [
      "Key Actions: Development (front-end/back-end), integrating databases, setting up content management systems.",
      "Outcome: A fully functional website specific to your business needs."
    ]
  },
  {
    icon: "/i4.png",
    number: "04",
    title: "Testing & QA",
    description: "During this phase, we will conduct testing at various levels to ensure your website is free from bugs, secure, and performs as intended on all devices and browsers.",
    bullets: [
      "Key Actions: Functional testing, security testing, performance testing.",
      "Outcome: A stable, high-performance website with minimal errors."
    ]
  },
  {
    icon: "/i5.png",
    number: "05",
    title: "Deployment",
    description: "When your website's testing phase is signed off, we fully deploy the site into a live environment, ensuring the launch is smooth and all features function as expected.",
    bullets: [
      "Key Actions: Hosting setup, domain configuration, site launch.",
      "Outcome: A successful website launch for public access."
    ]
  },
  {
    icon: "/i6.png",
    number: "06",
    title: "Maintenance & Support",
    description: "Our work does not stop when we deploy your site. We also provide maintenance and support to ensure your website remains up-to-date, secure, fast, and performing as expected.",
    bullets: [
      "Key Actions: Regular updates, security monitoring, performance optimization.",
      "Outcome: A website that remains functional and up-to-date, providing long-term value."
    ]
  },
];

const founders = [
  {
    name: "Harneet Singh",
    position: "Co-Founder",
    img: "/hsn.png", // Add leading slash for local images
    alt: "Founder 1",
    width: 400,
    height: 400,
  },
  {
    name: "Kshitij Goel",
    position: "Co-Founder",
    img: "/kg.png",
    alt: "Founder 2",
    width: 400,
    height: 400,
  },
  {
    name: "Nandini Marwah",
    position: "Co-Founder",
    img: "/nand.png",
    alt: "Founder 3",
    width: 400,
    height: 400,
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
            value: '1000+',
            description: 'Websites Developed'
        },
        {
            value: '200+',
            description: 'Clients Served Worldwide'
        },
        {
            value: '4.8/5',
            description: 'Client Satisfaction Score'
        },
        {
            value: '150+',
            description: 'Skilled Developers & UI/UX Designers'
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
        "1000+": "0+",
        "200+": "0+",
        "4.8/5": "0.0/5",
        "150+": "0+"
    });
    
    const projects = [
  {
    client: "Fashion Forward",
    scope: "Developed a responsive e-commerce website with integrated payment gateways, product catalog, and user-friendly interface.",
    technologies: "WordPress, WooCommerce, Stripe API",
    outcome: "Enhanced online sales and customer engagement through a seamless shopping experience.",
    image: "/p1.png", // Replace with actual image paths
  },
  {
    client: "Healthy Life Clinic",
    scope: "Created a secure patient portal featuring appointment scheduling, medical records access, and telemedicine capabilities.",
    technologies: "PHP, MySQL, React.js",
    outcome: "Improved patient satisfaction and streamlined clinic operations.",
    image: "/p2.png",
  },
  {
    client: "Learnify",
    scope: "Designed an interactive platform with course catalogs, video tutorials, and student dashboards.",
    technologies: "WordPress, LearnDash, BuddyPress",
    outcome: "Increased user enrollment and engagement through an intuitive learning environment.",
    image: "/p3.png",
  },
  {
    client: "Prime Properties",
    scope: "Developed a dynamic real estate website with advanced search filters, property listings, and agent profiles.",
    technologies: "Webflow, JavaScript, Google Maps API",
    outcome: "Enhanced property visibility and lead generation for real estate agents.",
    image: "/p4.png",
  },
  {
    client: "Innovatech",
    scope: "Built a modern corporate website showcasing services, team, and client testimonials.",
    technologies: "HTML5, CSS3, JavaScript",
    outcome: "Strengthened brand presence and attracted potential clients.",
    image: "/p5.png",
  },
];

    // Animation timing ref
    const animationRef = useRef(null);    // Counter effect function
    useEffect(() => {
        let startTimestamp;
        const duration = 1500; // Animation duration in milliseconds
        
        // Animation function
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            
            // Update each counter based on progress
            const updatedCounters = {};
            
            // For "1000+"
            const websites = Math.floor(progress * 1000);
            updatedCounters["1000+"] = `${websites}+`;
            
            // For "200+"
            const clients = Math.floor(progress * 200);
            updatedCounters["200+"] = `${clients}+`;
            
            // For "4.8/5"
            const rating = (progress * 4.8).toFixed(1);
            updatedCounters["4.8/5"] = `${rating}/5`;
            
            // For "150+"
            const developers = Math.floor(progress * 150);
            updatedCounters["150+"] = `${developers}+`;
            
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
        
        // Target the metrics section - needs a slight delay to ensure the DOM is ready
        setTimeout(() => {
            const metricsSection = document.querySelector('#landing-metrics-section');
            if (metricsSection) {
                observer.observe(metricsSection);
            } else {
                // If we can't find the section, just start the animation
                animationRef.current = requestAnimationFrame(step);
            }
        }, 100);
        
        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
            observer.disconnect();
        };
    }, []);

    // Add state for project pagination
    const [currentProjectPage, setCurrentProjectPage] = useState(1);
    const projectsPerPage = 2;
    const totalProjectPages = Math.ceil(projects.length / projectsPerPage);
    
    // Functions to handle pagination
    const nextProjectPage = () => {
        setCurrentProjectPage(prev => prev < totalProjectPages ? prev + 1 : prev);
    };
    
    const prevProjectPage = () => {
        setCurrentProjectPage(prev => prev > 1 ? prev - 1 : prev);
    };
    
    const goToProjectPage = (pageNum) => {
        setCurrentProjectPage(pageNum);
    };
    
    // Get current projects based on pagination
    const getCurrentProjects = () => {
        const startIndex = (currentProjectPage - 1) * projectsPerPage;
        return projects.slice(startIndex, startIndex + projectsPerPage);
    };

    return (
        <>
    
                 <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-md">
          <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
            {/* Logo */}
            <Link href="/">
              <Image
                src="/Trans_logo.svg"
                alt="Logo"
                width={150}
                height={40}
                className="cursor-pointer"
              />
            </Link>
    
            {/* Talk to Sales Button */}
            <Link
              href="/contact"
              className="inline-block bg-black text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-900"
            >
              Talk to Sales
            </Link>
          </div>
        </header>
                
            
            {/* Hero Section - Ad Landing Version */}
           <section className="w-full mb-5 bg-[#B3D3BB] h-[90vh] flex items-center justify-center relative overflow-hidden rounded-[30px] mx-auto mt-6 max-w-[95%]">
      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 flex items-center mt-140 justify-center pointer-events-none">
        {/* Red - outermost ring */}
        <div className="absolute w-[800px] h-[800px] rounded-full bg-[#abcfb4]"></div>
        <div className="absolute w-[745px] h-[745px] rounded-full bg-[#a3cbad]"></div>
        {/* Orange */}
        <div className="absolute w-[690px] h-[690px] rounded-full bg-[#9cc7a6]"></div>
        {/* Yellow */}
        <div className="absolute w-[635px] h-[635px] rounded-full bg-[#95c4a0]"></div>
        {/* Green */}
        <div className="absolute w-[580px] h-[580px] rounded-full bg-[#8ec19a]"></div>
        {/* Blue */}
        <div className="absolute w-[525px] h-[525px] rounded-full bg-[#88be95]"></div>
        {/* Indigo */}
        <div className="absolute w-[470px] h-[470px] rounded-full bg-[#82bb90]"></div>
        {/* Violet - innermost circle */}
        <div className="absolute w-[415px] h-[415px] rounded-full bg-[#7db88b]"></div>
      </div>

       <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="w-full md:w-[55%] lg:w-[50%] xl:w-[45%] flex flex-col justify-center space-y-4 md:space-y-4 lg:space-y-6 px-5 md:px-8 lg:px-12 overflow-hidden z-10"
            >
              <motion.h1 
                variants={itemVariants}
                className='text-white font-medium text-[28px] sm:text-[34px] md:text-[50px] lg:text-[50px] xl:text-[60px] text-left leading-none md:leading-none tracking-tight max-w-[95%] md:max-w-[95%] mb-0'
              >
                Custom web development 
              </motion.h1>
              <motion.h1 
                variants={itemVariants}
                className='text-[#4B7D57] font-medium text-[28px] sm:text-[34px] md:text-[50px] lg:text-[50px] xl:text-[60px] text-left leading-none md:leading-none tracking-tight max-w-[95%] md:max-w-[95%] mt-[-10px] md:mt-[-5px]'
              >
                services that drive 10x business growth
              </motion.h1>
              <div
                className="text-black text-sm sm:text-base md:text-lg lg:text-lg font-normal mt-4 md:mt-6 lg:mt-8 xl:mt-10 leading-[1.5] max-w-[95%] md:max-w-[95%]">
                  From Idea to Launch- Fast, Flexible and Focused on Results
                </div>


              <motion.button
                variants={itemVariants}
                onClick={() => window.location.href = "/contact"}
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
                className='max-w-[100%] md:max-w-[90%] lg:max-w-[95%] xl:max-w-[90%] h-auto object-contain mt-14 ml-10'
                src="/HeroImage.png"
                alt="Landing Page Hero"
                width={700}
                height={500}
                priority
              />
            </motion.div>
</section>   
 {/* <motion.div 
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
      </motion.div> */}

            {/* Metrics Section - with animated counter */}
            <section id="landing-metrics-section" className="md:mt-22 mt-12 bg-white">
                <div className="max-w-screen-xl mx-auto px-4">
                    <div className="text-center mb-8 sm:mb-12 md:mb-16">
                        <h2 className="text-2xl md:text-3xl font-medium">
                            <span className="text-[#326B3F]">Metrics</span> That Speak For Themselves
                        </h2>
                        <p className="text-[#6a6a6a] mt-2 md:mt-4 text-sm">See the impact we've made for our clients</p>
                    </div>
                    
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                        {metrics.map((metric, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-[0_0_15px_#CCE3DE] hover:shadow-[0_0_25px_#A8D5BA] transition-all duration-300 text-center"
                            >
                                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#326B3F] min-h-[60px] sm:min-h-[70px] md:min-h-[80px] flex items-center justify-center">
                                    {counters[metric.value]}
                                </div>
                                <p className="mt-2 md:mt-4 text-[#6a6a6a] text-xs sm:text-sm md:text-base lg:text-lg">{metric.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="max-w-screen-2xl text-center mx-auto md:mt-22 mt-12 px-4">
    <div className="max-w-screen-xl mx-auto">
      <h2 className="text-2xl md:text-3xl mb-4">About Us</h2>
      <p className="text-[#6a6a6a] text-sm font-light mb-6 leading-relaxed">
        We at TransCurators believe in delivering quality, original, and well-researched content across various niches. Founded in 2018 with our head office in New Delhi, India, we believe in empowering brands by crafting compelling stories that resonate with their target audience.
      </p>
      <p className="text-[#6a6a6a] text-sm font-light leading-relaxed">
        With over 500 experts, ranging from gifted wordsmiths to field experts from first-rate institutions, including DTU and IIT Delhi, we have successfully dispensed over 1 million creatives to over 600 clients globally.
      </p>
    </div>
  </section>
  <section className="w-full py-16 px-4 bg-white">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl md:text-3xl text-center mb-2">Our services</h2>
      <p className="text-[#6a6a6a] text-center mb-12 text-sm md:text-base max-w-2xl mx-auto">
        Transcurators offers expansive web development services to help your business build a successful and effective online presence.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
  {services.slice(0, 3).map((service, idx) => (
    <div key={idx} className="flex flex-col items-center">
      <div className="relative w-72 h-60 rounded-2xl overflow-hidden shadow-sm group">
        {/* Image: visible by default, hidden on hover */}
        <Image
          src={service.img}
          alt={service.alt}
          width={400}
          height={300}
          className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
        />
        {/* Overlay: hidden by default, visible on hover */}
        <div className="absolute inset-0 bg-[#d9e9dd] flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-lg font-semibold text-black mb-2">{service.title}</span>
          <p className="text-gray-700 text-center px-4">
            {/* Add your extra description here */}
            {service.description || "More details about this service can go here."}
          </p>
        </div>
        {/* Title: visible below image when not hovered */}
        <div className="absolute bottom-0 left-0 w-full bg-[#d9e9dd] py-4 px-2 text-center group-hover:opacity-0 transition-opacity duration-300">
          <span className="text-lg font-semibold text-black">{service.title}</span>
        </div>
      </div>
    </div>
  ))}
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center md:w-2/3 mx-auto">
  {services.slice(3).map((service, idx) => (
    <div key={idx} className="flex flex-col items-center">
      <div className="relative w-72 h-60 rounded-2xl overflow-hidden shadow-sm group">
        <Image
          src={service.img}
          alt={service.alt}
          width={400}
          height={300}
          className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
        />
        <div className="absolute inset-0 bg-[#d9e9dd] flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-lg font-semibold text-black mb-2">{service.title}</span>
          <p className="text-gray-700 text-center px-4">
            {service.description || "More details about this service can go here."}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full bg-[#d9e9dd] py-4 px-2 text-center group-hover:opacity-0 transition-opacity duration-300">
          <span className="text-lg font-semibold text-black">{service.title}</span>
        </div>
      </div>
    </div>
  ))}
</div>
    </div>
  </section>
            <section>
              {/* industry section */}
              <div className='relative mt-12 h-auto md:mt-22'>
                <div className='max-w-screen-xl mx-auto px-4'>
                  <div className='text-center mb-12'>
                    <h2 className='text-2xl md:text-3xl text-center mb-2'>
                      Industries We Serve
                    </h2>
                  </div>
                  <section className="md:mt-22 mt-12">
  <div className="max-w-screen-lg mx-auto px-4 sm:px-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
      {/* Row 2 */}
<div className="relative rounded-lg shadow-sm overflow-hidden bg-cover bg-center h-36 sm:h-40 md:h-56" style={{ backgroundImage: 'url(/Industry1.jpg)' }}>
  <div className="absolute bottom-0 left-0 w-full bg-[#D9E9DD] py-1 sm:py-2 text-center px-2">
    <span className="text-[#3c6446] font-bold sm:text-base block">Automotive</span>
    <p className="text-[#6a6a6a] text-xs sm:text-sm mt-1 leading-snug">
      Creating dynamic websites and apps with vehicle specifications, dealer networks, and consumer engagement tools.
    </p>
  </div>
</div>

<div className="relative rounded-lg shadow-sm overflow-hidden bg-cover bg-center h-36 sm:h-40 md:h-56" style={{ backgroundImage: 'url(/Industry2.jpg)' }}>
  <div className="absolute bottom-0 left-0 w-full bg-[#D9E9DD] py-1 sm:py-2 text-center px-2">
    <span className="text-[#3c6446] font-bold sm:text-base block">Healthcare</span>
    <p className="text-[#6a6a6a] text-xs sm:text-sm mt-1 leading-snug">
      Creating secure sites for patient portals, appointment scheduling, and telehealth, while focusing on privacy and accessibility for users.
    </p>
  </div>
</div>

<div className="relative col-span-1 sm:col-span-2 rounded-lg shadow-sm overflow-hidden bg-cover bg-center h-36 sm:h-40 md:h-56" style={{ backgroundImage: 'url(/Industry3.jpg)' }}>
  <div className="absolute bottom-0 left-0 w-full bg-[#D9E9DD] py-1 sm:py-2 text-center px-2">
    <span className="text-[#3c6446] font-bold sm:text-base block">Fintech</span>
    <p className="text-[#6a6a6a] text-xs sm:text-sm mt-1 leading-snug">
      Developing safe platforms for lending, payment processing, account management, or real-time analytics, including compliance with industry regulations.
    </p>
  </div>
</div>

<div className="relative col-span-1 sm:col-span-1 md:col-span-2 rounded-lg shadow-sm overflow-hidden bg-cover bg-center h-36 sm:h-40 md:h-56" style={{ backgroundImage: 'url(/Industry4.jpg)' }}>
  <div className="absolute bottom-0 left-0 w-full bg-[#D9E9DD] py-1 sm:py-2 text-center px-2">
    <span className="text-[#3c6446] font-bold sm:text-base block">EdTech</span>
    <p className="text-[#6a6a6a] text-xs sm:text-sm mt-1 leading-snug">
      Designing learning management systems, virtual classrooms, and student (learner) portals for education or training stakeholders.
    </p>
  </div>
</div>

<div className="relative col-span-1 sm:col-span-1 md:col-span-2 rounded-lg shadow-sm overflow-hidden bg-cover bg-center h-36 sm:h-40 md:h-56" style={{ backgroundImage: 'url(/Industry5.jpg)' }}>
  <div className="absolute bottom-0 left-0 w-full bg-[#D9E9DD] py-1 sm:py-2 text-center px-2">
    <span className="text-[#3c6446] font-bold sm:text-base block">Real Estate</span>
    <p className="text-[#6a6a6a] text-xs sm:text-sm mt-1 leading-snug">
      Developing listing platforms, virtual tours, and agent-client communication for better purchasing.
    </p>
  </div>
</div>
  </div>
  </div>
</section>
                </div>
              </div>
              <div className="w-full bg-[#e5efe5] py-12 mb-20 md:mt-22 mt-12">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <h2 className="md:text-2xl text-xl font-medium text-black">
          Your Industry, <span className="text-[#326B3F]">Our Expertise</span>
        </h2>
      <div href="/careers"
            className="cursor-pointer md:text-lg text-lg inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-[0_0_10px_#CCE3DE] hover:shadow-[0_0_15px_#A8D5BA] font-medium bg-[#487040] text-white transition-shadow duration-300">Tell Us About Your Project</div>
        </div>
    </div>
            </section>
     <section className="w-screen bg-[#D9E9DD] py-12 sm:py-16 md:py-20 md:mt-22 mt-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 px-4 sm:px-6">
          <div className="w-full md:flex-1 text-center md:text-left mb-8 md:mb-0">
            <p className="text-[#326B3F] text-base md:text-lg mb-3 md:mb-4 font-medium">Our Founding Team</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-5 leading-tight">
              <span className="text-[#326B3F]">High-octane<br className="hidden sm:block" /> Storytellers</span> that fuel<br className="hidden sm:block" />
              <span className="text-black"> Brand Loyalty</span>
            </h2>
            <p className="text-[#6a6a6a] text-sm md:text-base mx-auto md:mx-0 max-w-md mt-3 md:mt-4">
              Meet the minds behind the magic-visionaries who don't just think outside the box, they crush it.
            </p>
          </div>
          
          {/* Mobile grid layout - new design */}
          <div className="w-full md:hidden grid grid-cols-2 gap-4 sm:gap-6">
            {/* Featured founder - larger card spanning full width */}
            <div className="col-span-2 bg-white rounded-xl shadow-md overflow-hidden">
              <div className="relative h-56 sm:h-64">
                <Image
                  src={founders[0].img}
                  alt={founders[0].alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 0"
                  className="rounded-t-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#326B3F]/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="font-bold text-xl">{founders[0].name}</h3>
                  <p className="text-white/90 text-sm">{founders[0].position}</p>
                </div>
              </div>
            </div>
            
            {/* Second founder - smaller card */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="relative h-40">
                <Image
                  src={founders[1].img}
                  alt={founders[1].alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 50vw, 0"
                  className="rounded-t-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#326B3F]/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-3 text-white">
                  <h3 className="font-bold text-base">{founders[1].name}</h3>
                  <p className="text-white/90 text-xs">{founders[1].position}</p>
                </div>
              </div>
            </div>
            
            {/* Third founder - smaller card */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="relative h-40">
                <Image
                  src={founders[2].img}
                  alt={founders[2].alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 50vw, 0"
                  className="rounded-t-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#326B3F]/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-3 text-white">
                  <h3 className="font-bold text-base">{founders[2].name}</h3>
                  <p className="text-white/90 text-xs">{founders[2].position}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Desktop layout - unchanged */}
          <div className="hidden md:flex md:flex-1 gap-4 lg:gap-6 justify-center">
            {founders.map((founder, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md overflow-hidden w-32 md:w-40 lg:w-54 h-72 md:h-80 lg:h-96 flex items-center justify-center relative group"
              >
                <Image
                  src={founder.img}
                  alt={founder.alt}
                  width={founder.width}
                  height={founder.height}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#326B3F]/80 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white transition-opacity duration-300 p-4">
                  <h3 className="font-bold text-xl text-center mb-2">{founder.name}</h3>
                  <p className="text-center text-white/90">{founder.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  <section className="bg-[#D9E9DD] py-10 px-2 md:px-8 rounded-2xl max-w-7xl mx-auto mt-12 md:mt-22">
    <h2 className="text-2xl md:text-3xl text-center mb-2">Portfolio / Case Studies</h2>
    <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8 text-base">
      At TransCurators, we are proud to provide exceptional web development solutions for our clients' particular needs. Below are some standout projects that exemplify our capabilities and desire to provide great work.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
      {getCurrentProjects().map((proj, idx) => (
        <div key={proj.client} className="bg-white rounded-xl shadow p-6 flex flex-col h-full border border-[#d9e9dd]">
          <div className="flex justify-between items-start mb-2">
            <div>
              <span className="block font-semibold text-gray-800">Client: {proj.client}</span>
            </div>
            <span className="text-3xl font-semibold text-[#3c6446] opacity-70">{`0${(currentProjectPage - 1) * projectsPerPage + idx + 1}`}</span>
          </div>
          <div className="mb-2">
            <span className="font-semibold">Scope: </span>
            <span className="text-gray-700">{proj.scope}</span>
          </div>
          <div className="mb-2">
            <span className="font-semibold">Technologies Used: </span>
            <span className="text-gray-700">{proj.technologies}</span>
          </div>
          <div className="mb-4">
            <span className="font-semibold">Outcome: </span>
            <span className="text-gray-700">{proj.outcome}</span>
          </div>
          <div className="relative w-full rounded-lg overflow-hidden mb-4">
            <Image
              src={proj.image}
              alt={proj.client}
              width={400}
              height={300}
              className="w-full h-40 object-cover"
            />
            <button className="absolute bottom-3 right-3 bg-[#3c6446] text-white text-xs px-4 py-1 rounded-full shadow hover:bg-[#2a4833] transition">
              Learn More &rarr;
            </button>
          </div>
        </div>
      ))}
    </div>
    <div className="flex justify-center items-center gap-4 mt-10">
      {/* Previous page button */}
      
      
      {/* Page indicators */}
      {Array.from({ length: totalProjectPages }).map((_, idx) => (
        <button
          key={idx}
          onClick={() => goToProjectPage(idx + 1)}
          className={`w-20 h-2 rounded ${
            currentProjectPage === idx + 1
              ? 'bg-[#326B3F] opacity-60'
              : 'bg-[#9BCDA8] opacity-90 hover:opacity-80'
          } transition`}
          aria-label={`Go to page ${idx + 1}`}
        />
      ))}
      
      {/* Next page button */}
      
    </div>
  </section>
    <section className="px-4 md:px-6">
            <div className="max-w-screen-2xl mx-auto md:mt-22 mt-12">
              <motion.div 
                className="text-center mb-4 md:mb-8" // Changed from mb-10 md:mb-16 to mb-4 md:mb-8
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl font-medium">
                  Testimonials
                </h2>
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
      <div className="text-center mb-8 space-y-4 mt-12 md:mt-22 max-w-screen-xl mx-auto">
                <h2 className="text-2xl md:text-3xl text-center mb-2">
                    Process/Workflow
                </h2>
                <p className="text-[#6a6a6a] text-sm">
At TransCurators, we have a well-established and thorough procedure that guarantees every web development project is of the highest quality. Our proven process guarantees that we deliver custom solutions on time, every time.                </p>
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
   <div className="w-full bg-[#e5efe5] py-12 mb-20 md:mt-22 mt-12">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <h2 className="md:text-2xl text-xl font-medium text-black">
          Let's Build Something <span className="text-[#326B3F]">Great Together</span>
        </h2>
      <div href="/careers"
            className="cursor-pointer md:text-sm text-sm inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-[0_0_10px_#CCE3DE] hover:shadow-[0_0_15px_#A8D5BA] font-medium bg-[#487040] text-white transition-shadow duration-300">Fill Out The Form Below</div>
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
              <h2 className="text-2xl lg:text-3xl text-black font-medium">Got digital goals?<br/><span className='text-[#326b3f]'>We’ve got the tools to build them. Let’s collaborate</span></h2>
              <p className="text-sm text-[#6a6a6a] md:text-sm mb-6 lg:mb-8 mt-4">From Idea to Launch — We Bring Your Website to Life</p>
              
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
            { id: 'custom-website-design', label: 'Custom Website Design' },
            { id: 'e-commerce-development', label: 'E-Commerce Development' },
            { id: 'content-management-system', label: 'Content Management Systems (CMS)' },
            { id: 'mobile-app-development', label: 'Mobile App Development' },
            { id: 'ui-ux-design', label: 'UI/UX Design' }
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

export default WebDesService;