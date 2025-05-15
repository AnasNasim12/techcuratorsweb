"use client";
import { Fragment, useState, useEffect, useRef } from 'react'
import { Popover, Transition } from '@headlessui/react'
import Image from 'next/image';
import {
  BookmarkAltIcon,
  BriefcaseIcon,
  ChartBarIcon,
  CheckCircleIcon,
  CursorClickIcon,
  DesktopComputerIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  MenuIcon,
  NewspaperIcon,
  OfficeBuildingIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ViewGridIcon,
  XIcon,
  FilmIcon,
  SpeakerphoneIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/solid'
import Link from 'next/link';

// Define all services and their subservices exactly as requested
const servicesList = [
  {
    name: 'Content Writing',
    icon: NewspaperIcon,
    description: 'Professional content writing services tailored for your business needs.',
    subServices: [
      'Article Writing',
      'Copywriting',
      'SOP Writing',
      'SEO Content',
      'Technical Writing',
      'Finance Writing',
      'Product Descriptions',
      'Website Content',
      'Blog Writing',
      'Editing & Proofreading',
      'Newsletter Writing',
      'White Papers',
      'Emailers',
      'Press Release'
    ]
  },
  {
    name: 'Design & Development',
    icon: DesktopComputerIcon,
    description: 'Custom web and app design and development solutions.',
    subServices: [
      'Website Design',
      'App Development',
      'E-commerce Design',
      'UI/UX Design',
      'Graphic Designing'
    ]
  },
  { 
    name: 'Video Animation',
    icon: FilmIcon,
    description: "Engage your audience with captivating video animations.",
    subServices: [
      'Video Animation',
      '2D Animation',
      '3D Animation',
      'Explainer Videos',
      'Motion Graphics',
      'Logo Animation'
    ]
  },
  {
    name: 'Social Media',
    icon: SpeakerphoneIcon,
    description: "Comprehensive social media marketing strategies for all platforms.",
    subServices: [
      'SMO',
      'SMM',
      'LinkedIn Marketing',
      'Twitter Marketing',
      'Facebook Marketing',
      'Quora Marketing',
      'Reddit Marketing'
    ]
  },
  {
    name: 'Digital Marketing',
    icon: ChartBarIcon,
    description: 'Full-spectrum digital marketing solutions for business growth.',
    subServices: [
      'Digital Marketing Services',
      'Video Marketing',
      'Ecommerce Solutions',
      'Affiliate Marketing',
      'Email Marketing',
      'Conversion Rate Optimization',
      'Paid Marketing (PPC)'
    ]
  },
  {
    name: 'SEO Services',
    icon: CursorClickIcon,
    description: 'Boost your website visibility with our expert SEO solutions.',
    subServices: [
      'Local SEO',
      'E-commerce SEO',
      'AI SEO',
      'ORM Services',
      'Mobile SEO',
      'YouTube SEO'
    ]
  },
  { 
    name: 'Content Marketing', 
    icon: ShieldCheckIcon,
    description: "Strategically distribute content to attract and engage your audience.",
    subServices: [
      'Content Marketing',
      'Digital PR',
      'App Marketing',
      'Paid App Marketing'
    ]
  },
  {
    name: 'Translation & Voiceover',
    icon: ViewGridIcon,
    description: "Professional translation and voiceover services in multiple languages.",
    subServices: [
      'Article Translation',
      'Document Translation',
      'Website Translation',
      'App Localization',
      'Transcription',
      'Voiceover'
    ]
  }
]

const industries = [
  { name: 'BFSI & Fintech', href: '#', icon: UserGroupIcon },
  { name: 'Fashion & Lifestyle', href: '#', icon: GlobeAltIcon },
  { name: 'Education & Edtech', href: '#', icon: BookmarkAltIcon },
  { name: 'Healthcare & Sports', href: '#', icon: DesktopComputerIcon },
  { name: 'Automotive', href: '#', icon: DesktopComputerIcon },
]
const blogPosts = [
  {
    id: 1,
    name: 'Boost your conversion rate',
    href: '#',
    preview: 'Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.',
    imageUrl:
      'https://images.unsplash.com/photo-1558478551-1a378f63328e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2849&q=80',
  },
  {
    id: 2,
    name: 'How to use search engine optimization to drive traffic to your site',
    href: '#',
    preview: 'Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.',
    imageUrl:
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2300&q=80',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  // State for menu interaction - click-based approach
  const [activeService, setActiveService] = useState(null);
  const menuTimeoutRef = useRef(null);
  
  // Mobile menu navigation state
  const [mobileView, setMobileView] = useState('main');
  const [selectedService, setSelectedService] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [expandedMobileSubservice, setExpandedMobileSubservice] = useState(null);
  const [activeMobileService, setActiveMobileService] = useState(null);
  
  // Track scroll position to apply shadow conditionally
  const [hasScrolled, setHasScrolled] = useState(false);

  // Simplified handlers for click-based navigation
  const handleMenuMouseLeave = () => {
    clearTimeout(menuTimeoutRef.current);
    menuTimeoutRef.current = setTimeout(() => {
      setActiveService(null);
    }, 150); // Reduced from 300ms for snappier response
  };

  const handleMenuMouseEnter = () => {
    clearTimeout(menuTimeoutRef.current);
  };

  const handleServiceClick = (serviceName) => {
    clearTimeout(menuTimeoutRef.current);
    if (activeService === serviceName) {
      // Toggle service if clicked on the same one
      setActiveService(null);
    } else {
      setActiveService(serviceName);
    }
  };

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (menuTimeoutRef.current) {
        clearTimeout(menuTimeoutRef.current);
      }
    };
  }, []);

  // Mobile navigation handlers
  const goToServicePage = (service) => {
    setSelectedService(service);
    setMobileView('service');
  };

  const goToCategoryPage = (category) => {
    setSelectedCategory(category);
    setMobileView('category');
  };

  const goBack = () => {
    if (mobileView === 'category') {
      setMobileView('service');
    } else if (mobileView === 'service') {
      setMobileView('main');
      setSelectedService(null);
    }
  };

  // Toggle expanded subservice group
  const toggleSubserviceExpand = (groupName) => {
    setExpandedMobileSubservice(expandedMobileSubservice === groupName ? null : groupName);
  };

  // Toggle mobile service expansion
  const toggleMobileService = (serviceId) => {
    setActiveMobileService(activeMobileService === serviceId ? null : serviceId);
  };

  // Handle mobile service click to go directly to service page
  const handleMobileServiceClick = (service) => {
    goToServicePage(service);
  };

  // Add useEffect to add padding to body to account for fixed navbar
  // and track scroll position for conditional shadow
  useEffect(() => {
    // Get the navbar height and add padding to the document body
    const updateBodyPadding = () => {
      const navbarHeight = document.querySelector('.navbar-container')?.offsetHeight || 0;
      document.body.style.paddingTop = `${navbarHeight}px`;
    };
    
    // Track scroll position for shadow effect
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setHasScrolled(scrollPosition > 10);
    };

    // Initial update and add listeners
    updateBodyPadding();
    handleScroll(); // Check initial position
    window.addEventListener('resize', updateBodyPadding);
    window.addEventListener('scroll', handleScroll);

    // Clean up
    return () => {
      window.removeEventListener('resize', updateBodyPadding);
      window.removeEventListener('scroll', handleScroll);
      if (menuTimeoutRef.current) {
        clearTimeout(menuTimeoutRef.current);
      }
    };
  }, []);

  return (
    <Popover className={`fixed top-0 left-0 right-0 bg-white z-50 navbar-container ${hasScrolled ? 'shadow-md' : ''} transition-shadow duration-200`}>
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true" />
      <div className="relative z-100">
        <div className="max-w-9xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 ">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
            <Link href="/">
              <Image 
                src="/Trans_logo.svg" 
                alt="Logo" 
                width={192} // 48 * 4 (w-48)
                height={32} // 8 * 4 (h-8)
                className="h-8 w-48"
              />
            </Link>
            <Popover.Group as="nav" className="flex space-x-10">
              <Popover>
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-[#326B3F] font-medium' : 'text-gray-500',
                        'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-[#326B3F] focus:outline-none cursor-pointer transition-colors duration-150' // Faster transition
                      )}
                    >
                      <span>Services</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-[#326B3F] rotate-180' : 'text-gray-400',
                          'ml-2 h-5 w-5 group-hover:text-[#326B3F] transition-all duration-200' // Faster rotation
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-150" // Faster enter
                      enterFrom="opacity-0 -translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-100" // Faster leave
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 -translate-y-1"
                    >
                      <Popover.Panel 
                        className="hidden md:block absolute z-100 top-full inset-x-0 transform shadow-lg bg-white" // Removed border-t border-[#E0F3E8]
                        onMouseEnter={handleMenuMouseEnter}
                        onMouseLeave={handleMenuMouseLeave}
                      >
                        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10 xl:py-12">
                          <div className="transition-all duration-200 ease-in-out"> {/* Faster transition */}
                            {!activeService ? (
                              // Initial 2x4 grid layout with click interaction
                              <div className="grid grid-cols-4 gap-6 sm:gap-8 sm:grid-cols-4">
                                {servicesList.map((service) => (
                                  <div 
                                    key={service.name}
                                    className="group p-4 rounded-lg hover:bg-[#F0FAF5] cursor-pointer transition-all duration-150 border border-transparent hover:border-[#D0EFDC]" // Faster transition
                                    onClick={() => handleServiceClick(service.name)}
                                  >
                                    <div className="flex items-center mb-3">
                                      <div className="flex-shrink-0 h-10 w-10 rounded-md bg-[rgba(50,107,63,0.15)] text-[#326B3F] flex items-center justify-center group-hover:bg-[rgba(50,107,63,0.25)] transition-colors duration-150"> {/* Simpler transition */}
                                        <service.icon className="h-6 w-6" aria-hidden="true" /> {/* Removed unnecessary animation */}
                                      </div>
                                      <h3 className="ml-3 text-base font-medium text-gray-800 group-hover:text-[#326B3F] transition-colors duration-150"> {/* Faster transition */}
                                        {service.name}
                                      </h3>
                                    </div>
                                    <p className="text-sm text-gray-500 line-clamp-2 group-hover:text-gray-600 transition-colors duration-150"> {/* Faster transition */}
                                      {service.description}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              // Expanded sidebar layout with optimized transitions
                              <div className="grid grid-cols-4 gap-8"> {/* Removed opacity transition */}
                                {/* Left side: Service icons and names */}
                                <div className="col-span-1 bg-[#F5FAF7] rounded-lg py-4 px-2">
                                  <div className="border-b border-[#E0F3E8] pb-3 mb-3">
                                    <h3 className="text-sm font-medium text-[#326B3F] uppercase tracking-wide px-3">Our Services</h3>
                                  </div>
                                  <ul className="space-y-1">
                                    {servicesList.map((service) => (
                                      <li key={service.name}>
                                        <button
                                          type="button"
                                          className={classNames(
                                            activeService === service.name ? 
                                              "bg-white text-[#326B3F] border-l-4 border-[#326B3F]" : 
                                              "text-gray-600 hover:bg-white hover:text-[#326B3F] border-l-4 border-transparent",
                                            "w-full flex items-center p-3 rounded-md text-sm font-medium transition-all duration-150 ease-in-out" // Faster transition
                                          )}
                                          onClick={() => handleServiceClick(service.name)}
                                        >
 görül

System: <service.icon className={classNames(
                                            activeService === service.name ? 
                                              "text-[#326B3F]" : "text-gray-400",
                                            "flex-shrink-0 h-5 w-5 mr-3 transition-colors duration-150" // Faster transition
                                          )} aria-hidden="true" />
                                          <span className="truncate">{service.name}</span>
                                          <ChevronRightIcon 
                                            className={classNames(
                                              "ml-auto h-4 w-4", 
                                              activeService === service.name ? 
                                                "text-[#326B3F]" : "text-gray-400",
                                              "transition-colors duration-150" // Faster transition
                                            )} 
                                            aria-hidden="true" 
                                          />
                                        </button>
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                {/* Right side: Selected service details - optimized */}
                                <div className="col-span-3">
                                  {servicesList.map((service) => (
                                    activeService === service.name && (
                                      <div key={service.name} className="px-6 h-full">
                                        <div className="mb-6 pb-4 border-b border-[#E0F3E8]">
                                          <div className="flex items-center">
                                            <div className="mr-4 h-12 w-12 rounded-md bg-[rgba(50,107,63,0.15)] text-[#326B3F] flex items-center justify-center">
                                              <service.icon className="h-7 w-7" aria-hidden="true" />
                                            </div>
                                            <div>
                                              <h3 className="text-lg font-medium text-[#326B3F]">{service.name}</h3>
                                              <p className="mt-1 text-sm text-gray-500">{service.description}</p>
                                            </div>
                                          </div>
                                        </div>
                                        
                                        <div className="grid grid-cols-3 gap-3">
                                          {service.subServices.map((subService, index) => (
                                            <a
                                              key={`${service.name}-${index}`}
                                              href="#"
                                              className="py-3 px-4 text-sm text-gray-700 hover:text-[#326B3F] hover:bg-[#F0FAF5] rounded-md transition-all duration-150 hover:border-[#D0EFDC] border border-transparent" // Streamlined hover effect
                                            >
                                              {subService}
                                            </a>
                                          ))}
                                        </div>
                                      </div>
                                    )
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              <Link href="/aboutus" className="text-base font-medium text-gray-500 hover:text-gray-900">
                About Us
              </Link>
              <Popover>
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none cursor-pointer transition-colors duration-150'
                      )}
                    >
                      <span>Resources</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-gray-600 rotate-180' : 'text-gray-400',
                          'ml-2 h-5 w-5 group-hover:text-gray-500 transition-all duration-200'
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 -translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 -translate-y-1"
                    >
                      <Popover.Panel className="hidden md:block absolute z-100 top-full inset-x-0 transform shadow-lg">
                        <div className="absolute inset-0 flex">
                          <div className="bg-white w-1/2" />
                          <div className="bg-white w-1/2" />
                        </div>
                        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3">
                          <nav className="grid gap-y-10 px-4 py-8 bg-white sm:grid-cols-1 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-0">
                            
                            <div>
                              <h3 className="text-sm font-medium tracking-wide text-black uppercase">Industries</h3>
                              <ul role="list" className="mt-5 space-y-6">
                                {industries.map((item) => (
                                  <li key={item.name} className="flow-root">
                                    <a
                                      href={item.href}
                                      className="-m-3 p-3 flex group items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                                    >
                                      <item.icon className="flex-shrink-0 h-6 w-6 text-[rgba(50,107,63,0.5)]" aria-hidden="true" />
                                      <span className="ml-4 text-base font-normal text-gray-500 group-hover:translate-x-1.5 duration-300 ease-in-out transition-all">{item.name}</span>
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                          </nav>
                          <div className=" px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
                            <div>
                              <h3 className="text-sm font-medium tracking-wide text-black uppercase">
                                From the blog
                              </h3>
                              <ul role="list" className="mt-6 space-y-6">
                                {blogPosts.map((post) => (
                                  <li key={post.id} className="flow-root">
                                    <a href={post.href} className="-m-3 p-3 flex rounded-lg hover:bg-gray-100 group">
                                      <div className="hidden sm:block flex-shrink-0">
                                        <Image
                                          src={post.imageUrl}
                                          alt={post.name}
                                          width={128} // w-32
                                          height={80} // h-20
                                          className="w-32 h-20 object-cover rounded-md group-hover:scale-105 ease-in-out transition-all duration-300"
                                        />
                                      </div>
                                      <div className="w-0 flex-1 sm:ml-8">
                                        <h4 className="text-base font-medium text-gray-900 truncate">{post.name}</h4>
                                        <p className="mt-1 text-sm text-gray-500">{post.preview}</p>
                                      </div>
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="mt-6 text-sm font-medium">
                              <a href="#" className="text-[rgba(50,107,63,0.6)] hover:text-[rgba(50,107,63,0.8)] transition-smooth duration-300 group ">
                                {' '}
                                View all posts <span aria-hidden="true">→</span>
                              </a>
                            </div>
                          </div>
                          
                          <div className=" px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
                            <div>
                              <h3 className="text-sm font-medium tracking-wide text-black uppercase">
                                Case Studies
                              </h3>
                              <ul role="list" className="mt-6 space-y-6">
                                {blogPosts.map((post) => (
                                  <li key={post.id} className="flow-root">
                                    <a href={post.href} className="-m-3 p-3 flex rounded-lg hover:bg-gray-100 group">
                                      <div className="hidden sm:block flex-shrink-0">
                                        <Image
                                          src={post.imageUrl}
                                          alt={post.name}
                                          width={128} // w-32
                                          height={80} // h-20
                                          className="w-32 h-20 object-cover rounded-md group-hover:scale-105 ease-in-out transition-all duration-300"
                                        />
                                      </div>
                                      <div className="w-0 flex-1 sm:ml-8">
                                        <h4 className="text-base font-medium text-gray-900 truncate">{post.name}</h4>
                                        <p className="mt-1 text-sm text-gray-500">{post.preview}</p>
                                      </div>
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="mt-6 text-sm font-medium">
                              <a href="#" className="text-[rgba(50,107,63,0.6)] hover:text-[rgba(50,107,63,0.8)] transition-smooth duration-300 ">
                                {' '}
                                View all posts <span aria-hidden="true">→</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </Popover.Group>
            <div className="flex items-center md:ml-12">
              <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                For Writers
              </a>
              <Link 
                href="/contact" 
                className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-[0_0_10px_#CCE3DE] hover:shadow-[0_0_15px_#A8D5BA] font-medium text-base text-gray-500 transition-shadow duration-300"
              >
                Talk to Sales
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-100 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5 sm:pb-8">
              <div className="flex items-center justify-between">
                <div>
                  <Image
                    src="/Trans_logo.svg"
                    alt="Workflow"
                    width={128} // w-32
                    height={32} // h-8
                    className="h-8 w-32"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#326B3F]">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              
              {/* Main Menu - Simplified with direct navigation */}
              {mobileView === 'main' && (
                <div className="mt-6">
                  <nav>
                    <div className="space-y-2">
                      {servicesList.map((service) => (
                        <div 
                          key={service.name}
                          onClick={() => handleMobileServiceClick(service)}
                          className="rounded-md overflow-hidden border border-gray-100 hover:border-[#326B3F]/40 cursor-pointer"
                        >
                          <div className="flex items-center justify-between p-3 text-left bg-white hover:bg-gray-50">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-8 w-8 rounded-md bg-[rgba(50,107,63,0.15)] text-[#326B3F] flex items-center justify-center">
                                <service.icon className="h-5 w-5" aria-hidden="true" />
                              </div>
                              <span className="ml-3 text-base font-medium text-gray-900">
                                {service.name}
                              </span>
                            </div>
                            <ChevronRightIcon 
                              className="h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 space-y-4">
                      <Link href="/aboutus" className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-md">
                        About Us
                      </Link>
                      <div className="px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-md cursor-pointer">
                        Resources
                      </div>
                    </div>
                  </nav>
                </div>
              )}
              
              {/* Service Page - Redesigned for better space usage */}
              {mobileView === 'service' && selectedService && (
                <div className="mt-6 sm:mt-8">
                  {/* Service header with back button */}
                  <div className="flex items-center mb-6">
                    <button 
                      onClick={goBack}
                      className="flex items-center text-gray-500 hover:text-gray-700"
                    >
                      <ChevronDownIcon className="rotate-90 h-5 w-5 mr-1" />
                      <span>Back</span>
                    </button>
                    <h2 className="text-lg font-medium text-center flex-1 pr-8">{selectedService.name}</h2>
                  </div>
                  
                  {/* Service description */}
                  <p className="text-sm text-gray-500 mb-6">{selectedService.description}</p>
                  
                  {/* Subservices as tag chips */}
                  <h3 className="text-sm font-medium text-gray-700 mb-3">Our Services</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedService.subServices && selectedService.subServices.map((subService, idx) => (
                      <a 
                        key={idx} 
                        href="#" 
                        className="px-3 py-1.5 text-xs sm:text-sm bg-white border border-gray-200 rounded-full text-gray-600 hover:border-[#326B3F]/40 hover:text-[#326B3F] hover:bg-[#F0FAF5]/50 transition-colors duration-150"
                      >
                        {subService}
                      </a>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Category Page */}
              {mobileView === 'category' && selectedCategory && (
                <div className="mt-6 sm:mt-8">
                  <div className="flex items-center mb-6">
                    <button 
                      onClick={goBack}
                      className="flex items-center text-gray-500 hover:text-gray-700"
                    >
                      <ChevronDownIcon className="rotate-90 h-5 w-5 mr-1" />
                      <span>Back</span>
                    </button>
                    <h2 className="text-lg font-medium text-center flex-1 pr-8">{selectedCategory.name}</h2>
                  </div>
                  
                  <div className="grid gap-3 sm:grid-cols-2">
                    {selectedCategory.items.map((item, idx) => (
                      <a 
                        key={idx} 
                        href="#" 
                        className="py-3 px-4 text-sm text-gray-700 hover:bg-gray-50 rounded-md border border-gray-100"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <div className='w-[80%] mx-auto h-[2px] bg-gray-500/20'></div>
            
            <div className="py-6 px-5">
              <div className="grid grid-cols-2 gap-4">
                <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                  For Writers
                </a>
                <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                  Talk to Sales
                </a>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}