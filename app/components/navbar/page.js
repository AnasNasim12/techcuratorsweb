"use client";
import { Fragment, useState, useEffect, useRef } from 'react'
import { Popover, Transition } from '@headlessui/react'
import Image from 'next/image';
import {
  BookmarkAltIcon,
  BriefcaseIcon,
  ChartBarIcon,
  CursorClickIcon,
  DesktopComputerIcon,
  GlobeAltIcon,
  MenuIcon,
  NewspaperIcon,
  OfficeBuildingIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ViewGridIcon,
  XIcon,
  FilmIcon,
  SpeakerphoneIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/solid'
import Link from 'next/link';

// Routes configuration for easy maintenance
const routes = {
  home: '/',
  about: '/about-us',
  careers: '/careers',
  contact: '/contact',
  blog: '/blog',
  caseStudy: '/case-study',
  services: {
    contentWriting: '/services/content-writing',
    designDevelopment: '/services/design-development',
    videoAnimation: '/services/video-animation',
    socialMedia: '/services/social-media',
    digitalMarketing: '/services/digital-marketing',
    seoServices: '/services/seo-services',
    contentMarketing: '/services/content-marketing',
    translationVoiceover: '/services/translation-voiceover',
    subServices: {
      // Content Writing sub-services
      articleWriting: '/services/content-writing/article-writing',
      copywriting: '/services/content-writing/copywriting',
      sopWriting: '/services/content-writing/sop-writing',
      seoContent: '/services/content-writing/seo-content',
      technicalWriting: '/services/content-writing/technical-writing',
      financeWriting: '/services/content-writing/finance-writing',
      productDescriptions: '/services/content-writing/product-descriptions',
      websiteContent: '/services/content-writing/website-content',
      blogWriting: '/services/content-writing/blog-writing',
      editingProofreading: '/services/content-writing/editing-proofreading',
      newsletterWriting: '/services/content-writing/newsletter-writing',
      whitePapers: '/services/content-writing/white-papers',
      emailers: '/services/content-writing/emailers',
      pressRelease: '/services/content-writing/press-release',
      // Design & Development sub-services
      websiteDesign: '/web-development-company',
      appDevelopment: '/services/design-development/app-development',
      ecommerceDesign: '/services/design-development/ecommerce-design',
      uiUxDesign: '/services/design-development/ui-ux-design',
      graphicDesigning: '/graphic-designing-services',
      // Video Animation sub-services
      videoAnimation: '/video-animation-services',
      twoDAnimation: '/services/video-animation/2d-animation',
      threeDAnimation: '/services/video-animation/3d-animation',
      explainerVideos: '/services/video-animation/explainer-videos',
      motionGraphics: '/services/video-animation/motion-graphics',
      logoAnimation: '/services/video-animation/logo-animation',
      // Social Media sub-services
      smo: '/services/social-media/smo',
      smm: '/services/social-media/smm',
      linkedinMarketing: '/services/social-media/linkedin-marketing',
      twitterMarketing: '/services/social-media/twitter-marketing',
      facebookMarketing: '/services/social-media/facebook-marketing',
      quoraMarketing: '/services/social-media/quora-marketing',
      redditMarketing: '/services/social-media/reddit-marketing',
      // Digital Marketing sub-services
      digitalMarketingServices: '/digital-marketing-agency',
      videoMarketing: '/services/digital-marketing/video-marketing',
      ecommerceSolutions: '/services/digital-marketing/ecommerce-solutions',
      affiliateMarketing: '/services/digital-marketing/affiliate-marketing',
      emailMarketing: '/services/digital-marketing/email-marketing',
      conversionRateOptimization: '/services/digital-marketing/conversion-rate-optimization',
      paidMarketing: '/services/digital-marketing/paid-marketing',
      // SEO Services sub-services
      localSeo: '/services/seo-services/local-seo',
      ecommerceSeo: '/services/seo-services/ecommerce-seo',
      aiSeo: '/services/seo-services/ai-seo',
      ormServices: '/services/seo-services/orm-services',
      mobileSeo: '/services/seo-services/mobile-seo',
      youtubeSeo: '/services/seo-services/youtube-seo',
      // Content Marketing sub-services
      contentMarketing: '/services/content-marketing/content-marketing',
      digitalPr: '/services/content-marketing/digital-pr',
      appMarketing: '/services/content-marketing/app-marketing',
      paidAppMarketing: '/services/content-marketing/paid-app-marketing',
      // Translation & Voiceover sub-services
      articleTranslation: '/services/translation-voiceover/article-translation',
      documentTranslation: '/services/translation-voiceover/document-translation',
      websiteTranslation: '/services/translation-voiceover/website-translation',
      appLocalization: '/services/translation-voiceover/app-localization',
      transcription: '/services/translation-voiceover/transcription',
      voiceover: '/services/translation-voiceover/voiceover',
    },
  },
  industries: {
    bfsiFintech: '/industries/bfsi-fintech',
    fashionLifestyle: '/industries/fashion-lifestyle',
    educationEdtech: '/industries/education-edtech',
    sportsFitness: '/industries/sports-fitness',
    automotive: '/industries/automotive',
    entertainmentGaming: '/industries/entertainment-gaming',
    marketingAdvertising: '/industries/marketing-advertising',
    healthBeauty: '/industries/health-beauty',
  },
  blogPosts: {
    post1: '/blog/boost-conversion-rate',
    post2: '/blog/seo-traffic-guide',
  },
  caseStudies: {
    study1: '/case-study/boost-conversion-rate',
    study2: '/case-study/seo-traffic-guide',
  },
};

// Define all services and their subservices
const servicesList = [
  {
    name: 'Content Writing',
    icon: NewspaperIcon,
    description: 'Professional content writing services tailored for your business needs.',
    href: routes.services.contentWriting,
    subServices: [
      { name: 'Article Writing', href: routes.services.subServices.articleWriting },
      { name: 'Copywriting', href: routes.services.subServices.copywriting },
      { name: 'SOP Writing', href: routes.services.subServices.sopWriting },
      { name: 'SEO Content', href: routes.services.subServices.seoContent },
      { name: 'Technical Writing', href: routes.services.subServices.technicalWriting },
      { name: 'Finance Writing', href: routes.services.subServices.financeWriting },
      { name: 'Product Descriptions', href: routes.services.subServices.productDescriptions },
      { name: 'Website Content', href: routes.services.subServices.websiteContent },
      { name: 'Blog Writing', href: routes.services.subServices.blogWriting },
      { name: 'Editing & Proofreading', href: routes.services.subServices.editingProofreading },
      { name: 'Newsletter Writing', href: routes.services.subServices.newsletterWriting },
      { name: 'White Papers', href: routes.services.subServices.whitePapers },
      { name: 'Emailers', href: routes.services.subServices.emailers },
      { name: 'Press Release', href: routes.services.subServices.pressRelease },
    ],
  },
  {
    name: 'Design & Development',
    icon: DesktopComputerIcon,
    description: 'Custom web and app design and development solutions.',
    href: routes.services.designDevelopment,
    subServices: [
      { name: 'Website Design', href: routes.services.subServices.websiteDesign },
      { name: 'App Development', href: routes.services.subServices.appDevelopment },
      { name: 'E-commerce Design', href: routes.services.subServices.ecommerceDesign },
      { name: 'UI/UX Design', href: routes.services.subServices.uiUxDesign },
      { name: 'Graphic Designing', href: routes.services.subServices.graphicDesigning },
    ],
  },
  {
    name: 'Video Animation',
    icon: FilmIcon,
    description: "Engage your audience with captivating video animations.",
    href: routes.services.videoAnimation,
    subServices: [
      { name: 'Video Animation', href: routes.services.subServices.videoAnimation },
      { name: '2D Animation', href: routes.services.subServices.twoDAnimation },
      { name: '3D Animation', href: routes.services.subServices.threeDAnimation },
      { name: 'Explainer Videos', href: routes.services.subServices.explainerVideos },
      { name: 'Motion Graphics', href: routes.services.subServices.motionGraphics },
      { name: 'Logo Animation', href: routes.services.subServices.logoAnimation },
    ],
  },
  {
    name: 'Social Media',
    icon: SpeakerphoneIcon,
    description: "Comprehensive social media marketing strategies for all platforms.",
    href: routes.services.socialMedia,
    subServices: [
      { name: 'SMO', href: routes.services.subServices.smo },
      { name: 'SMM', href: routes.services.subServices.smm },
      { name: 'LinkedIn Marketing', href: routes.services.subServices.linkedinMarketing },
      { name: 'Twitter Marketing', href: routes.services.subServices.twitterMarketing },
      { name: 'Facebook Marketing', href: routes.services.subServices.facebookMarketing },
      { name: 'Quora Marketing', href: routes.services.subServices.quoraMarketing },
      { name: 'Reddit Marketing', href: routes.services.subServices.redditMarketing },
    ],
  },
  {
    name: 'Digital Marketing',
    icon: ChartBarIcon,
    description: 'Full-spectrum digital marketing solutions for business growth.',
    href: routes.services.digitalMarketing,
    subServices: [
      { name: 'Digital Marketing Services', href: routes.services.subServices.digitalMarketingServices },
      { name: 'Video Marketing', href: routes.services.subServices.videoMarketing },
      { name: 'Ecommerce Solutions', href: routes.services.subServices.ecommerceSolutions },
      { name: 'Affiliate Marketing', href: routes.services.subServices.affiliateMarketing },
      { name: 'Email Marketing', href: routes.services.subServices.emailMarketing },
      { name: 'Conversion Rate Optimization', href: routes.services.subServices.conversionRateOptimization },
      { name: 'Paid Marketing (PPC)', href: routes.services.subServices.paidMarketing },
    ],
  },
  {
    name: 'SEO Services',
    icon: CursorClickIcon,
    description: 'Boost your website visibility with our expert SEO solutions.',
    href: routes.services.seoServices,
    subServices: [
      { name: 'Local SEO', href: routes.services.subServices.localSeo },
      { name: 'E-commerce SEO', href: routes.services.subServices.ecommerceSeo },
      { name: 'AI SEO', href: routes.services.subServices.aiSeo },
      { name: 'ORM Services', href: routes.services.subServices.ormServices },
      { name: 'Mobile SEO', href: routes.services.subServices.mobileSeo },
      { name: 'YouTube SEO', href: routes.services.subServices.youtubeSeo },
    ],
  },
  {
    name: 'Content Marketing',
    icon: ShieldCheckIcon,
    description: "Strategically distribute content to attract and engage your audience.",
    href: routes.services.contentMarketing,
    subServices: [
      { name: 'Content Marketing', href: routes.services.subServices.contentMarketing },
      { name: 'Digital PR', href: routes.services.subServices.digitalPr },
      { name: 'App Marketing', href: routes.services.subServices.appMarketing },
      { name: 'Paid App Marketing', href: routes.services.subServices.paidAppMarketing },
    ],
  },
  {
    name: 'Translation & Voiceover',
    icon: ViewGridIcon,
    description: "Professional translation and voiceover services in multiple languages.",
    href: routes.services.translationVoiceover,
    subServices: [
      { name: 'Article Translation', href: routes.services.subServices.articleTranslation },
      { name: 'Document Translation', href: routes.services.subServices.documentTranslation },
      { name: 'Website Translation', href: routes.services.subServices.websiteTranslation },
      { name: 'App Localization', href: routes.services.subServices.appLocalization },
      { name: 'Transcription', href: routes.services.subServices.transcription },
      { name: 'Voiceover', href: routes.services.subServices.voiceover },
    ],
  },
];

const industries = [
  { name: 'BFSI & Fintech', href: routes.industries.bfsiFintech, icon: UserGroupIcon },
  { name: 'Fashion & Lifestyle', href: routes.industries.fashionLifestyle, icon: GlobeAltIcon },
  { name: 'Education & Edtech', href: routes.industries.educationEdtech, icon: BookmarkAltIcon },
  { name: 'Sports & Fitness', href: routes.industries.sportsFitness, icon: DesktopComputerIcon },
  { name: 'Automotive', href: routes.industries.automotive, icon: DesktopComputerIcon },
  { name: 'Entertainment & Gaming', href: routes.industries.entertainmentGaming, icon: BriefcaseIcon },
  { name: 'Marketing & Advertising', href: routes.industries.marketingAdvertising, icon: FilmIcon },
  { name: 'Health & Beauty', href: routes.industries.healthBeauty, icon: OfficeBuildingIcon },
];

const blogPosts = [
  {
    id: 1,
    name: 'Boost your conversion rate',
    href: routes.blogPosts.post1,
    preview: 'Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.',
    imageUrl:
      'https://images.unsplash.com/photo-1558478551-1a378f63328e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2849&q=80',
  },
  {
    id: 2,
    name: 'How to use search engine optimization to drive traffic to your site',
    href: routes.blogPosts.post2,
    preview: 'Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum.',
    imageUrl:
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2300&q=80',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  // State for menu interaction
  const [activeService, setActiveService] = useState(null);
  const menuTimeoutRef = useRef(null);
  
  // Mobile menu navigation state
  const [mobileView, setMobileView] = useState('main');
  const [selectedService, setSelectedService] = useState(null);
  const [activeMobileService, setActiveMobileService] = useState(null);
  
  // Track scroll position
  const [hasScrolled, setHasScrolled] = useState(false);

  // Handlers for mouse-based navigation
  const handleMenuMouseLeave = () => {
    clearTimeout(menuTimeoutRef.current);
    menuTimeoutRef.current = setTimeout(() => {
      setActiveService(null);
    }, 100);
  };

  const handleMenuMouseEnter = () => {
    clearTimeout(menuTimeoutRef.current);
  };

  const handleServiceClick = (serviceName) => {
    clearTimeout(menuTimeoutRef.current);
    setActiveService(activeService === serviceName ? null : serviceName);
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

  const goBack = () => {
    if (mobileView === 'service') {
      setMobileView('main');
      setSelectedService(null);
    }
  };

  // Toggle mobile service
  const toggleMobileService = (serviceId) => {
    setActiveMobileService(activeMobileService === serviceId ? null : serviceId);
  };

  // Handle mobile service click
  const handleMobileServiceClick = (service) => {
    goToServicePage(service);
  };

  // Handle scroll and body padding
  useEffect(() => {
    const updateBodyPadding = () => {
      setTimeout(() => {
        const navbar = document.querySelector('.navbar-container');
        const navbarHeight = navbar?.offsetHeight || 0;
        document.body.style.paddingTop = `${navbarHeight}px`;
      }, 0);
    };
    
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };

    updateBodyPadding();
    handleScroll();
    window.addEventListener('resize', updateBodyPadding);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', updateBodyPadding);
      window.removeEventListener('scroll', handleScroll);
      if (menuTimeoutRef.current) {
        clearTimeout(menuTimeoutRef.current);
      }
      document.body.style.paddingTop = '0px';
    };
  }, []);

  return (
    <Popover className={`fixed top-0 left-0 right-0 bg-white z-50 navbar-container ${hasScrolled ? 'shadow-md' : ''} transition-shadow duration-200`}>
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true" />
      <div className="relative z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
          {/* Mobile menu button */}
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          
          {/* Logo for mobile */}
          <div className="flex justify-center items-center md:hidden flex-1">
            <Link href={routes.home} className="flex items-center justify-center">
              <Image 
                src="/Trans_logo.svg" 
                alt="Logo" 
                width={150}
                height={28}
                className="h-7 w-auto"
              />
            </Link>
          </div>
          
          {/* Empty div for layout balance */}
          <div className="w-10 md:hidden"></div>
          
          <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
            <Link href={routes.home}>
              <Image 
                src="/Trans_logo.svg" 
                alt="Logo" 
                width={192}
                height={32}
                className="h-8 w-48"
              />
            </Link>
            
            <Popover.Group as="nav" className="flex space-x-10">
              <Popover>
                {({ open, close }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-[#326B3F] font-bold' : 'text-gray-900 font-bold',
                        'group bg-white rounded-md inline-flex items-center text-base hover:text-[#326B3F] focus:outline-none cursor-pointer transition-colors duration-150'
                      )}
                      onMouseEnter={handleMenuMouseEnter}
                    >
                      <span>Services</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-[#326B3F] rotate-180' : 'text-gray-400',
                          'ml-2 h-5 w-5 group-hover:text-[#326B3F] transition-all duration-200'
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-150"
                      enterFrom="opacity-0 -translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 -translate-y-1"
                      afterLeave={() => setActiveService(null)}
                    >
                      <Popover.Panel 
                        className="hidden md:block absolute z-50 top-full inset-x-0 transform shadow-lg bg-white"
                        onMouseEnter={handleMenuMouseEnter}
                        onMouseLeave={() => {
                          handleMenuMouseLeave();
                          setTimeout(() => close(), 100);
                        }}
                      >
                        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
                          <div className="transition-all duration-200 ease-in-out">
                            {!activeService ? (
                              <div className="grid grid-cols-4 gap-6 sm:gap-8 sm:grid-cols-4">
                                {servicesList.map((service) => (
                                  <div 
                                    key={service.name}
                                    className="group p-4 rounded-lg hover:bg-[#F0FAF5] cursor-pointer transition-all duration-150 border border-transparent hover:border-[#D0EFDC]"
                                    onClick={() => handleServiceClick(service.name)}
                                  >
                                    <div className="flex items-center mb-3">
                                      <div className="flex-shrink-0 h-10 w-10 rounded-md bg-[rgba(50,107,63,0.15)] text-[#326B3F] flex items-center justify-center group-hover:bg-[rgba(50,107,63,0.25)] transition-colors duration-150">
                                        <service.icon className="h-6 w-6" aria-hidden="true" />
                                      </div>
                                      <h3 className="ml-3 text-base font-medium text-gray-800 group-hover:text-[#326B3F] transition-colors duration-150">
                                        {service.name}
                                      </h3>
                                    </div>
                                    <p className="text-sm text-gray-500 line-clamp-2 group-hover:text-gray-600 transition-colors duration-150">
                                      {service.description}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <div className="grid grid-cols-4 gap-8">
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
                                            "w-full flex items-center p-3 rounded-md text-sm font-medium transition-all duration-150 ease-in-out"
                                          )}
                                          onClick={() => handleServiceClick(service.name)}
                                        >
                                          <service.icon className={classNames(
                                            activeService === service.name ? 
                                              "text-[#326B3F]" : "text-gray-400",
                                            "flex-shrink-0 h-5 w-5 mr-3"
                                          )} aria-hidden="true" />
                                          <span className="truncate">{service.name}</span>
                                          <ChevronRightIcon 
                                            className={classNames(
                                              "ml-auto h-4 w-4",
                                              activeService === service.name ? 
                                                "text-[#326B3F]" : "text-gray-400"
                                            )} 
                                            aria-hidden="true" 
                                          />
                                        </button>
                                      </li>
                                    ))}
                                  </ul>
                                </div>

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
                                          {service.subServices.map((subService) => (
                                            <Link
                                              key={subService.name}
                                              href={subService.href}
                                              className="py-3 px-4 text-sm text-gray-700 hover:text-[#326B3F] hover:bg-[#F0FAF5] rounded-md transition-all duration-150 hover:border-[#D0EFDC] border border-transparent"
                                            >
                                              {subService.name}
                                            </Link>
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
              <Link href={routes.about} className="text-base font-bold text-gray-900 hover:text-[#326B3F] transition-colors duration-150">
                About Us
              </Link>
              <Popover>
                {({ open, close }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-[#326B3F] font-bold' : 'text-gray-900 font-bold',
                        'group bg-white rounded-md inline-flex items-center text-base hover:text-[#326B3F] focus:outline-none cursor-pointer transition-colors duration-150'
                      )}
                      onMouseEnter={handleMenuMouseEnter}
                    >
                      <span>Resources</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-[#326B3F] rotate-180' : 'text-gray-400',
                          'ml-2 h-5 w-5 group-hover:text-[#326B3F] transition-all duration-200'
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
                      <Popover.Panel 
                        className="hidden md:block absolute z-50 top-full inset-x-0 transform shadow-lg"
                        onMouseEnter={handleMenuMouseEnter}
                        onMouseLeave={() => {
                          handleMenuMouseLeave();
                          setTimeout(() => close(), 100);
                        }}
                      >
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
                                    <Link
                                      href={item.href}
                                      className="-m-3 p-3 flex group items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                                    >
                                      <item.icon className="flex-shrink-0 h-6 w-6 text-[rgba(50,107,63,0.5)]" aria-hidden="true" />
                                      <span className="ml-4 text-base font-normal text-gray-500 group-hover:translate-x-1.5 duration-300 ease-in-out transition-all">{item.name}</span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </nav>
                          <div className="px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
                            <div>
                              <h3 className="text-sm font-medium tracking-wide text-black uppercase">
                                From the blog
                              </h3>
                              <ul role="list" className="mt-6 space-y-6">
                                {blogPosts.map((post) => (
                                  <li key={post.id} className="flow-root">
                                    <Link href={post.href} className="-m-3 p-3 flex rounded-lg hover:bg-gray-100 group">
                                      <div className="hidden sm:block flex-shrink-0">
                                        <Image
                                          src={post.imageUrl}
                                          alt={post.name}
                                          width={128}
                                          height={80}
                                          className="w-32 h-20 object-cover rounded-md group-hover:scale-105 ease-in-out transition-all duration-300"
                                        />
                                      </div>
                                      <div className="w-0 flex-1 sm:ml-8">
                                        <h4 className="text-base font-medium text-gray-900 truncate">{post.name}</h4>
                                        <p className="mt-1 text-sm text-gray-500">{post.preview}</p>
                                      </div>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="mt-6 text-sm font-medium">
                              <Link href={routes.blog} className="text-[rgba(50,107,63,0.6)] hover:text-[rgba(50,107,63,0.8)] transition-smooth duration-300 group" onClick={() => close()}>
                                View all posts <span aria-hidden="true">→</span>
                              </Link>
                            </div>
                          </div>
                          <div className="px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
                            <div>
                              <h3 className="text-sm font-medium tracking-wide text-black uppercase">
                                Case Studies
                              </h3>
                              <ul role="list" className="mt-6 space-y-6">
                                {blogPosts.map((post) => (
                                  <li key={post.id} className="flow-root">
                                    <Link href={routes.caseStudies[`study${post.id}`]} className="-m-3 p-3 flex rounded-lg hover:bg-gray-100 group">
                                      <div className="hidden sm:block flex-shrink-0">
                                        <Image
                                          src={post.imageUrl}
                                          alt={post.name}
                                          width={128}
                                          height={80}
                                          className="w-32 h-20 object-cover rounded-md group-hover:scale-105 ease-in-out transition-all duration-300"
                                        />
                                      </div>
                                      <div className="w-0 flex-1 sm:ml-8">
                                        <h4 className="text-base font-medium text-gray-900 truncate">{post.name}</h4>
                                        <p className="mt-1 text-sm text-gray-500">{post.preview}</p>
                                      </div>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="mt-6 text-sm font-medium">
                              <Link href={routes.caseStudy} className="text-[rgba(50,107,63,0.6)] hover:text-[rgba(50,107,63,0.8)] transition-smooth duration-300" onClick={() => close()}>
                                View all posts <span aria-hidden="true">→</span>
                              </Link>
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
              <Link href={routes.careers} className="text-base font-bold text-gray-900 hover:text-[#326B3F] transition-colors duration-150">
                Careers
              </Link>
              <Link 
                href={routes.contact} 
                className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-[0_0_10px_#CCE3DE] hover:shadow-[0_0_15px_#A8D5BA] font-bold text-base text-gray-900 hover:text-[#326B3F] transition-shadow duration-300"
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
          className="absolute z-50 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5 sm:pb-8">
              <div className="flex items-center justify-between">
                <div>
                  <Image
                    src="/Trans_logo.svg"
                    alt="Workflow"
                    width={128}
                    height={32}
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
              
              {/* Main Menu */}
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
                      <Link href={routes.about} className="block px-3 py-2 text-base font-bold text-gray-900 hover:text-[#326B3F] rounded-md transition-colors duration-150">
                        About Us
                      </Link>
                      <div className="px-3 py-2 text-base font-bold text-gray-900 hover:text-[#326B3F] rounded-md cursor-pointer transition-colors duration-150">
                        Resources
                      </div>
                    </div>
                  </nav>
                </div>
              )}
              
              {/* Service Page */}
              {mobileView === 'service' && selectedService && (
                <div className="mt-6 sm:mt-8">
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
                  
                  <p className="text-sm text-gray-500 mb-6">{selectedService.description}</p>
                  
                  <h3 className="text-sm font-medium text-gray-700 mb-3">Our Services</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedService.subServices && selectedService.subServices.map((subService) => (
                      <Link
                        key={subService.name}
                        href={subService.href}
                        className="px-3 py-1.5 text-xs sm:text-sm bg-white border border-gray-200 rounded-full text-gray-600 hover:border-[#326B3F]/40 hover:text-[#326B3F] hover:bg-[#F0FAF5]/50 transition-colors duration-150"
                      >
                        {subService.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <div className='w-[80%] mx-auto h-[2px] bg-gray-500/20'></div>
            
            <div className="py-6 px-5">
              <div className="grid grid-cols-2 gap-4">
                <Link href={routes.careers} className="rounded-md text-base font-bold text-gray-900 hover:text-[#326B3F] transition-colors duration-150">
                  Careers
                </Link>
                <Link href={routes.contact} className="rounded-md text-base font-bold text-gray-900 hover:text-[#326B3F] transition-colors duration-150">
                  Talk to Sales
                </Link>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}