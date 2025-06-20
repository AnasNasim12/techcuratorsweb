"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2
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

const ContentPune = () => {
    const faqs = [
        { question: "What services do TransCurators offer?", answer: "TransCurators provides a wide range of content writing services, including website content, blogs, articles, social media content, SEO copywriting, and more, tailored to meet diverse business needs.", id: 1 },
        { question: "How experienced is the team at TransCurators?", answer: "Our team consists of seasoned content writers with extensive experience in various industries. We ensure high-quality, engaging, and well-researched content for all our clients.", id: 2 },
        { question: "Do you offer SEO content writing services in Pune?", answer: "Yes, we specialise in SEO content writing to help your website rank higher in search engine results. Our content is optimised with relevant keywords and crafted to attract your target audience.", id: 3 },
        { question: "Can TransCurators handle large content projects?", answer: "Absolutely! Whether you need content for a single project or ongoing content creation, we have the capacity and expertise to handle projects of any size.", id: 4 },
        { question: "How do you ensure content originality?", answer: "We guarantee 100% plagiarism-free content. Our writers create unique content for every client, and we use advanced plagiarism detection tools to ensure originality.", id: 5 },
        { question: "What industries do you specialise in?", answer: "TransCurators caters to a wide range of industries, including healthcare, technology, finance, education, and more. We tailor our content to meet the specific needs of your industry.", id: 6 },
        { question: "How do you manage deadlines?", answer: "We are committed to delivering high-quality content within agreed timelines. Our structured workflow and dedicated team ensure that your projects are completed on time, every time.", id: 7 },
        { question: "Can I request revisions to the content?", answer: "Yes, we offer revisions to ensure that the content meets your expectations. We work closely with you to refine the content until you are completely satisfied.", id: 8 }
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
          title: "Initial Consultation",
          description:
            "We start by discussing your needs and goals. This helps us understand what you want and tailor our approach to meet your specific requirements.",
        },
        {
          number: 2,
          title: "Planning and Strategy",
          description:
            "Our team will develop a detailed plan and strategy based on your input. We outline the steps, set milestones, and create a roadmap to ensure a clear path forward.",
        },
        {
          number: 3,
          title: "Implementation",
          description:
            "We execute the plan, taking action on the agreed steps. Our team works efficiently to put the strategy into practice, keeping you updated on progress and making adjustments as needed.",
        },
        {
          number: 4,
          title: "Monitoring and Adjustments",
          description:
            "As we implement, we continuously monitor the results. If we spot areas needing improvement, we make necessary adjustments to stay on track and achieve the best outcomes.",
        },
        {
          number: 5,
          title: "Final Review and Feedback",
          description:
            "Once we complete the project, we review the results together. We gather your feedback to ensure satisfaction and identify any areas for further improvement, ensuring the outcome meets your expectations.",
        },
      ];
    
    const contentWriting = [
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
          title: "Customised Solutions",
          description:
            "Receive personalised content strategies that align with your business goals. We create content that fits your brand's voice and resonates with your audience.",
        },
        {
          icon: "/messageIcon.png",
          title: "Timely Delivery",
          description:
            "Enjoy prompt service with content delivered on schedule. Our efficient process ensures that you meet deadlines without compromising on quality.",
        },
        {
          icon: "/messageIcon.png",
          title: "Diverse Content Types",
          description:
            "Whether you need blog posts, articles, social media updates, or website copy, we offer a wide range of content types to meet your specific requirements.",
        },
        {
          icon: "/messageIcon.png",
          title: "SEO Optimization",
          description:
            "Enhance your online presence with content that is optimised for search engines. Our writers use effective SEO techniques to help your website rank higher and attract more traffic.",
        }
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
                            Content Writing Agency in Pune
                        </span>
                    </motion.h1>
                    
                    <div className="text-[#6a6a6a] mt-6 text-lg leading-relaxed max-w-2xl">
                        Hire a leading content writing agency in Pune
                        for exceptional content that drives results.
                        Our team delivers customized solutions for all your writing needs.
                    </div>

                    <Link href="/contact">
                        <motion.button
                            variants={itemVariants}
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
                    </Link>
                </motion.div>
                <div className="hidden md:block md:w-[45%] lg:w-[50%] xl:w-[55%]"></div>
            </section>
            
            <section>
            <div className="text-center mb-16 mt-22 md:mt-12space-y-4">
                <h2 className="md:text-3xl text-xl mt-4 font-medium">
                What Does Pune's Top Content Writing Agency{' '}<br />
                <span className="text-[#326B3F]">Have to Offer?</span>
                </h2>
                <p className="text-[#6a6a6a] text-sm mt-4">
                  Discover Pune's leading content writing agency, offering expert services tailored to your needs. From engaging blogs to compelling web content,<br/>
                we deliver high-quality, unique writing that drives results. Partner with us for clear impactful communication and elevate your brand's presence.
                </p>
            </div>

            <div className=" max-w-screen-xl mx-auto grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-5 md:mt-16 mt-12 text-left">
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
            <div className="text-center mb-8 space-y-4 mt-10 md:mt-20 max-w-screen-xl mx-auto">
                <h2 className="md:text-3xl text-xl font-semibold">
                    How Does The <span className="text-[#326B3F]">Process Work?</span>{' '}<br />
                </h2>
            </div>
            <section className="max-w-screen-xl mx-auto text-left py-8">
  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-6">
    {Process.map((benefit) => (
      <div key={benefit.number}>
        <span className="text-[#326B3F] text-2xl">{benefit.number}</span>
        <p className="mt-2 text-md font-semibold text-[#1b223c]">{benefit.title}</p>
        <p className="mt-2 text-sm text-[#6a6a6a]">{benefit.description}</p>
      </div>
    ))}
  </div>
            </section>
            <div className='relative bg-[#429054]/20 mt-12 h-auto  flex justify-center items-center mx-auto'>
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
          <h3 className='md:text-3xl text-xl font-semibold text-[#326B3F]'>
          Why Choose Our Content Writing<br/>
          <span className='md:text-3xl text-xl font-semibold text-black'>
            Services in Pune?<br/>
          </span>
          </h3>
          <p className='text-sm font-regular mt-6 text-[#6a6a6a]'>
          Our Pune-based content writing services deliver clear, engaging, and tailored content to
meet your needs. We combine local expertise with creative flair, ensuring your message
stands out. With attention to detail and timely delivery, we help your business make a lasting
impact. Choose us for quality and reliability.
          </p>
          <ul className='mt-6 space-y-4'>
            {[
  "A solid content writing strategy boosts your brand. Craft clear, engaging messages, target your audience effectively, and use a consistent voice. These steps ensure your content stands out and achieves your business goals.",
  "Attract and engage with expertly crafted content. Our team produces unique, high-quality writing tailored to your needs, whether personal or professional. We ensure each piece captivates readers and delivers results, providing consistent reliability and excellence.",
  "With our mass writing services, you can quickly produce large volumes of original, engaging content. We prioritize clarity and relevance, making us perfect for blogs, articles, and website pages that attract and retain readers. Meet your deadlines effortlessly, boost your content output, and simplify your content creation process!",
  "Embrace the versatility of writing to meet any reader's needs or objectives. This method allows you to adjust language, tone, and structure, enhancing your content's impact and engagement. Mastering flexible writing boosts your ability to connect with readers, communicate clearly, and write more effectively."
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
            <div className="text-center mb-16 mt-22 md:mt-12space-y-4">
        <p className="text-[#326B3F] text-md">Our Services</p>
        <h2 className="md:text-3xl text-xl mt-4 font-medium">
          Check out our{' '}<br />
          <span className="text-[#326B3F]">Services</span>
        </h2>
        <p className="text-[#6a6a6a] text-sm mt-4">
        Explore our diverse services designed to meet your needs. From personalised support to
innovative solutions, we offer expertise and reliability.<br/> Discover how our services can help
you achieve your goals. Check us out today!
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
    <section>
            <div className="text-center mb-16 mt-22 md:mt-12space-y-4">
        <p className="text-[#326B3F] text-md">Our Team</p>
        <h2 className="md:text-3xl text-xl mt-4 font-medium">
          How can the skilled content writers at{' '}<br />
          <span className="text-[#326B3F]">Transcurators assist you in growing your company?</span>
        </h2>
        <p className="text-[#6a6a6a] text-sm mt-4">
        Transcurator's writing specialist supports you in growing your firm, i.e.
        </p>
      </div>

            <div className=" max-w-screen-xl mx-auto grid grid-cols-1 gap-4 lg:grid-cols-5 lg:gap-5 md:mt-16 mt-12 text-left">
                                    {contentWriting.slice(0, 5).map((service, index) => (
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
            <section className="relative bg-[#429054]/40 py-16 mt-12 md:mt-22 overflow-hidden">
                <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-5/12 mb-8 md:mb-0">
                    <h2 className="md:text-3xl text-xl font-semibold mb-3">
                        Businesses We Support -<br/>
                        <span className="text-[#326B3F] block">Pune's Leading Content Writing Agency</span>
                    </h2>
                    </div>
                    <div className="w-full md:w-7/12 md:pl-8">
                    <p className="text-[#6a6a6a] mb-6">
                        <ul className="space-y-2 ml-35 grid grid-cols-1 md:grid-cols-2">
    <li className="flex items-start">
      <div className="w-2 h-2 bg-[#326B3F] rounded-full mt-2 mr-3"></div>
      <span>SaaS</span>
    </li>
    <li className="flex items-start">
      <div className="w-2 h-2 bg-[#326B3F] rounded-full mt-2 mr-3"></div>
      <span>Travel, Food & Lifestyle</span>
    </li>
    <li className="flex items-start">
      <div className="w-2 h-2 bg-[#326B3F] rounded-full mt-2 mr-3"></div>
      <span>IT & Software</span>
    </li>
    <li className="flex items-start">
      <div className="w-2 h-2 bg-[#326B3F] rounded-full mt-2 mr-3"></div>
      <span>Content Marketing</span>
    </li>
    <li className="flex items-start">
      <div className="w-2 h-2 bg-[#326B3F] rounded-full mt-2 mr-3"></div>
      <span>E-commerce</span>
    </li>
    <li className="flex items-start">
      <div className="w-2 h-2 bg-[#326B3F] rounded-full mt-2 mr-3"></div>
      <span>Publishing & Journalism</span>
    </li>
    <li className="flex items-start">
      <div className="w-2 h-2 bg-[#326B3F] rounded-full mt-2 mr-3"></div>
      <span>Healthcare</span>
    </li>
    <li className="flex items-start">
      <div className="w-2 h-2 bg-[#326B3F] rounded-full mt-2 mr-3"></div>
      <span>Education</span>
    </li>
    <li className="flex items-start">
      <div className="w-2 h-2 bg-[#326B3F] rounded-full mt-2 mr-3"></div>
      <span>Human Resource & Talent</span>
    </li>
    <li className="flex items-start">
      <div className="w-2 h-2 bg-[#326B3F] rounded-full mt-2 mr-3"></div>
      <span>Gaming</span>
    </li>
    <li className="flex items-start">
      <div className="w-2 h-2 bg-[#326B3F] rounded-full mt-2 mr-3"></div>
      <span>Real Estate</span>
    </li>
    <li className="flex items-start">
      <div className="w-2 h-2 bg-[#326B3F] rounded-full mt-2 mr-3"></div>
      <span>Automotive</span>
    </li>
    <li className="flex items-start">
      <div className="w-2 h-2 bg-[#326B3F] rounded-full mt-2 mr-3"></div>
      <span>Fashion & Apparel</span>
    </li>
    <li className="flex items-start">
      <div className="w-2 h-2 bg-[#326B3F] rounded-full mt-2 mr-3"></div>
      <span>Transportation & Logistics</span>
    </li>
    <li className="flex items-start">
      <div className="w-2 h-2 bg-[#326B3F] rounded-full mt-2 mr-3"></div>
      <span>Blockchain & Cryptocurrency</span>
    </li>
  </ul>
                    </p>

                    <div className="mt-8 ml-35">
                        <a href="#" className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-lg hover:shadow-xl transition-all duration-500 font-medium text-base bg-[#326B3F] text-white hover:-translate-y-1">
                        Start Your Journey
                        </a>
                    </div>
                    </div>
                </div>
            </section>
    <section>
                <div className="max-w-screen-xl mx-auto px-4 mt-12 md:mt-22 py-16">
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
                            Best Content Writing<br/><span className='text-[#326b3F]'> Agency in Pune</span>
                            </h1>
                            <p className="text-[#6a6a6a] text-sm">
                            Are you looking for top-notch content writing services in Pune?<br/> Our expert team delivers
clear, engaging, and tailored content to meet your needs. We focus on quality and originality
to help your business stand out. Choose us for exceptional results.
                            </p>
                            <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-lg hover:shadow-xl transition-all duration-500 font-medium text-base bg-[#326B3F] text-white hover:-translate-y-1">
                                Get Started Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <div className='max-w-screen-xl flex justify-center md:mt-20 mt-12 mb-10 mx-auto items-center'>     
        <div className='text-center flex-row'>
            <p className='text-md text-[#326B3F] font-regular'>FAQ&apos;s</p>
            <p className='md:text-3xl text-xl text-black font-medium mt-4'>
            Frequently Asked<span className='text-[#326B3F]'> Questions</span>
            </p>
        </div>
      </div>

    <div className="max-w-screen-xl mx-auto p-6 mb-12 md:mb-22">
    
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

export default ContentPune;