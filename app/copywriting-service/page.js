"use client";

import { useState, useRef } from 'react';
import Image from 'next/image';


const CopyWriting = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const onChange = (currentSlide) => {
        setCurrentSlide(currentSlide);
    };

    const faqs = [
        { question: "What are copywriting services?", answer: "Copywriting services involve crafting compelling and persuasive content to help businesses communicate effectively with their target audience. It includes writing website content, ad copies, email marketing, product descriptions, blog posts, and more. A well-written copy ensures brand consistency, builds trust, and drives customer engagement. Professional copywriting services focus on delivering high-quality content tailored to different industries, ensuring that the brand message resonates with the audience while driving conversions and business growth.", id: 1 },
        { question: "How can copywriting help my business?", answer: "Copywriting plays a crucial role in improving brand awareness, credibility, and conversions. It helps businesses engage customers, enhance their online presence, and boost sales through well-crafted messaging. A strong copy captures attention, tells a brand's story effectively, and persuades potential customers to take action. Whether it's website content, social media posts, or advertising campaigns, great copywriting ensures your message stands out in a crowded market, making your business more visible and appealing to the right audience.", id: 2 },
        { question: "What industries benefit from copywriting services?", answer: "Almost every industry benefits from professional copywriting. Sectors like e-commerce, healthcare, finance, technology, real estate, education, and SaaS rely on effective content to engage audiences, explain services, and drive conversions. From an IT company showcasing its innovative solutions to a healthcare provider simplifying medical information for patients, well-crafted copy helps businesses establish credibility and connect with their target audience. white label copywriting services enable agencies and businesses to deliver high-quality content under their brand, ensuring consistency and expertise without in-house efforts. Copywriting is essential for any business looking to communicate persuasively and build long-term customer relationships.", id: 3 },
        { question: "What is SEO copywriting?", answer: "SEO copywriting involves creating high-quality, engaging, and keyword-optimized content to rank higher on search engines while maintaining readability and audience interest. Unlike regular writing, SEO copy focuses on organic search visibility by strategically incorporating relevant keywords, structuring content properly, and improving user experience. Copywriting for service businesses attracts the right audience, increases website traffic, and improves conversion rates. The goal is to balance search engine optimisation with compelling storytelling, ensuring content appeals to both Google algorithms and human readers.", id: 4 },
        { question: "How much do copywriting services cost?", answer: "The cost of copywriting services varies depending on factors like word count, industry complexity, research needs, and turnaround time. Some copywriters charge per word, per hour, or on a project basis. While budget-friendly options exist, premium copywriting services ensure high-quality, research-driven, and persuasive content that maximises ROI. Many agencies offer flexible pricing to suit different business needs. Investing in professional copywriting helps in delivering impactful content that boosts engagement and drives long-term business growth.", id: 5 },
        { question: "How long does it take to complete a copywriting project?", answer: "Turnaround time depends on the complexity, scope, and type of content required. A simple blog post or website copy may take a few days, whereas larger projects like whitepapers, eBooks, or content marketing campaigns can take weeks. Urgent projects can often be expedited with express services. The best approach is to define clear deadlines while allowing enough time for research, writing, editing, and revisions to ensure top-quality content that aligns with business goals.", id: 6 },
        { question: "How do I get started with copywriting services?", answer: "Address changes are possible within 24 hours of order placement.Getting started with TransCurators is easy. Simply define your content needs, including tone, style, objectives, and target audience. We assess your requirements, assign the right writer, and craft compelling content tailored to your brand. Our collaborative approach allows you to provide feedback and request revisions to refine the final output. Whether you need website content, blog posts, product descriptions, or ad copies, we ensure high-quality content that aligns with your business vision. Partnering with TransCurators gives you access to experienced writers who bring your ideas to life. That aligns with your business vision.", id: 7 },
        { question: "What is converting copy?", answer: "Converting copy is highly persuasive content designed to drive immediate action, such as making a purchase, signing up for a service, or downloading an eBook. It is typically concise, engaging, and emotionally compelling, crafted with strong CTAs (Calls to Action) that encourage the reader to take a desired step. Effective converting copy relies on psychology, persuasive language, and strategic placement of information to guide potential customers toward making a decision, ultimately boosting conversions and revenue.", id: 8 },
        { question: "Can I request additional changes in my copy?", answer: "At Transcurators, we realise that revisions are completely built into the profession of copywriting services. Our Inhouse expert writers provide error-free polished work we understand the client's perspective and allow revisions. There is a limited number of revisions that we allow at no cost so that all content meets your expectations. As a result, our transparent policy on revisions guarantees a smooth process toward making everything original, powerful, and perfectly trimmed for the needs of your content.", id: 9 },
        { question: "How are your copywriting services different?", answer: "Our International copywriting service distinguishes itself through quality, expertise, and results-oriented solutions tailored specifically to your business. We excel because of our writers' deep industry-specific domain knowledge, our strategic SEO and conversion optimization that balances keywords with compelling storytelling, and our commitment to brand-aligned content that preserves your unique tone and objectives. With TransCurators, you receive error-free, impactful content delivered reliably on tight deadlines through our rigorous quality assurance process, ultimately strengthening your brand voice, captivating your audience, and achieving measurable results.", id: 10 },
      ];

        const [openFAQ, setOpenFAQ] = useState(null);
        const [showMore, setShowMore] = useState(false);
        const [expandedIndex, setExpandedIndex] = useState(null);
        const toggleExpanded = (index) => {
          setExpandedIndex(expandedIndex === index ? null : index);
        };
      
        const toggleFAQ = (id) => {
          setOpenFAQ(openFAQ === id ? null : id);}

    const services = [
        {
            title: "B2B Copywriting Services",
            points: [
                "B2B copywriting services focus on creating clear, persuasive content for businesses selling to other businesses.",
                "It helps communicate complex ideas, build trust, and drive decision-making.",
                "B2B copywriting services include white papers, case studies, and email campaigns.",
                "It plays a key role in educating potential clients and guiding them toward informed choices."
            ],
        },
        {
            title: "E-commerce Copywriting Services",
            points: [
                "E-commerce copywriting services involve creating product descriptions, website content, and marketing copy for online stores.",
                "It helps businesses clearly present their products, attract customers, and increase sales.",
                "Well-written content improves SEO, builds trust, and enhances the shopping experience.",
                "Strong e-commerce copy ensures that customers understand product benefits and feel confident in their purchases."
            ],
        },
        {
            title: "Email Copywriting Services",
            points: [
                "Email copywriting is the process of writing clear, engaging, and persuasive content for emails.",
                "It helps businesses connect with customers, promote products, and build relationships.",
                "Well-crafted emails improve open rates, encourage action, and enhance brand trust.",
                "From newsletters to sales emails, effective copy ensures messages are clear, compelling, and impactful. A strong email strategy can drive long-term customer engagement."
            ]
        },
        {
            title: "Financial Services Copywriting",
            points: [
                "Financial copywriting services help businesses explain financial products in simple terms. Clear and engaging content builds trust and attracts clients.",
                "Whether for banks, investment firms, or insurance companies, the right words improve communication.",
                "Well-crafted copy ensures customers understand their options and make informed choices, leading to better engagement and conversions.",
                "Strong messaging also enhances brand credibility."

            ],
        },
        {
            title: "Technical Copywriting Services",
            points: [
                "Technical copywriting services help businesses explain complex ideas in a clear and engaging way.",
                "Whether it's software, AI, or engineering, well-crafted content makes products easy to understand.",
                "From website copy to whitepapers, expert technical writers ensure accuracy and clarity.",
                "Boost trust, attract customers, and simplify communication with professional technical copywriting tailored to your industry needs."
            ],
        },
        {
            title: "Website Copywriting Services",
            points: [
                "Website copywriting services focus on creating clear, engaging, and professional content for websites.",
                "Well-written copy helps businesses communicate their message, improve user experience, and enhance SEO performance.",
                "It ensures consistency in tone and branding, making information easy to understand.",
                "Effective website content builds trust, attracts the right audience, and supports business growth through clear messaging."
            ],
        },
        {
            title: "SEO Copywriting Services",
            points: [
                "SEO copywriting services focus on creating content that is optimised for search engines while remaining engaging for readers.",
                "This helps your brand rank higher on search results, attract relevant traffic, and improve online visibility.",
                "Well-written SEO content ensures clarity, relevance, and keyword integration, making it easier for potential customers to find and trust your brand.",
                "From blogs to product descriptions, SEO copywriting services help businesses reach their target audience and drive conversions."
            ],
        },
        {
            title: "Ad Copywriting Services",
            points: [
                "Ad copywriting services create compelling messages that capture attention and drive action.",
                "Strong ad copy helps brands connect with their audience and improve engagement. A great example is Apple’s “Think Different”, which resonated with innovators and creators.",
                "Well-crafted ads ensure your message is clear, memorable, and aligned with your marketing goals.",
                "Effective copy can shape brand identity and influence consumer perception."
            ],
        },
        {
            title: "Sales Copywriting Services",
            points: [
                "Sales copywriting services help businesses create persuasive content that drives customer action.",
                "Effective copy builds trust, highlights key benefits, and increases conversions.",
                "A great example is Coca-Cola’s “Share a Coke” campaign, which personalised bottles with names, encouraging engagement and emotional connection.",
                "Strong messaging ensures your brand stands out, resonates with your audience, and delivers results."
            ],
        },
        {
            title: "Retail Copywriting Services",
            points: [
                "Retail Copywriting Services focuses on creating clear and engaging content for retail businesses.",
                "It helps brands communicate effectively through product descriptions, ads, emails, and social media posts.",
                "Well-written copy enhances customer engagement, builds trust, and improves sales.",
                "A strong retail message ensures consistency across platforms, making your brand more recognisable and appealing to shoppers."
            ],
        },
    ];

    // Group services into chunks of 4
    const chunkedServices = [];
    for (let i = 0; i < services.length; i += 4) {
        chunkedServices.push(services.slice(i, i + 4));
    }

    // Navigation functions
    const goToSlide = (slideIndex) => {
        setCurrentSlide(slideIndex);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % chunkedServices.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + chunkedServices.length) % chunkedServices.length);
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
                
                <div className="w-full md:w-[55%] lg:w-[50%] xl:w-[60%] flex flex-col justify-center space-y-4 md:space-y-4 lg:space-y-6 px-5 md:px-8 lg:px-12 overflow-hidden z-10">
                    
                    
                    <h1 className="text-white font-medium text-[28px] sm:text-[34px] md:text-[50px] lg:text-[50px] xl:text-[60px] text-left leading-none md:leading-none tracking-tight mb-1 sm:mb-2 md:mb-2">
                        Hire a copywriter
                        <span className="text-[#326B3F] block mt-2">
                            Professional Copywriting Service in India
                        </span>
                    </h1>
                    
                    <p className="text-[#6a6a6a] mt-6 text-lg leading-relaxed max-w-2xl">
                        Let us help you become even greater at what you do.
                        Fill out the following form and we will get back to you in the next 24 hours.
                    </p>
                    
                    <div className="mt-10 flex flex-col sm:flex-row items-start justify-start gap-4">
                        <button className="gap-2 md:gap-3 flex justify-center items-center self-start text-[#6a6a6a] text-xs sm:text-sm bg-gray-50 backdrop-blur-md lg:font-medium isolation-auto 
                        border-gray-50 before:absolute before:inset-0 before:w-0 before:h-full before:transition-all before:duration-500 before:bg-[#326B3F]
                        hover:text-gray-50 hover:before:w-full before:rounded-full before:-z-10 relative z-10 px-3 md:px-4 py-1.5 md:py-2 overflow-hidden border-2 rounded-full group tracking-wide w-fit">
                            Get Started Now
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
                        </button>
                    </div>
                </div>
                <div className="hidden md:block md:w-[45%] lg:w-[50%] xl:w-[55%]"></div>
            </section>
            
            <div className="text-center mb-8 space-y-4 md:mt-22 mt-12 max-w-screen-xl mx-auto">
                <p className="text-[#326B3F] text-sm">Why Copywriting?</p>
                <h2 className="md:text-3xl text-xl text-black font-medium">
                    Why Copywriting Is <span className="text-[#326B3F]">Important for Business</span>{' '}<br />
                </h2>
                <p className="text-[#6a6a6a] mt-4 text-sm">
                    Copywriting is important for business because this is the means by which ideas are communicated clearly and correctly. Good copy attracts customers and builds trust. It makes products and services seem useful. Clear and compelling content can lead to more sales and engagement. Businesses should use copy in ads, websites, emails, and social media. Strong copywriting enhances brand identity and differentiates a company from its competitors. It also acts as a friendly hand to explain more complicated ideas. The content must be written well to keep customers interested so that they will take action. If the business does not have good copywriting, it will struggle to find its audience and grow from there.
                </p>
            </div>
            <section className="max-w-5xl mx-auto text-left py-8">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    <div>
                        <span className="text-[#326B3F] text-2xl">1</span>
                        <p className="mt-2 text-sm text-[#6a6a6a]">Sets up a unique and recognised brand voice.</p>
                    </div>
                    <div>
                        <span className="text-[#326B3F] text-2xl">2</span>
                        <p className="mt-2 text-sm text-[#6a6a6a]">Grabs attention and persuades.</p>
                    </div>
                    <div>
                        <span className="text-[#326B3F] text-2xl">3</span>
                        <p className="mt-2 text-sm text-[#6a6a6a]">Encourages action and raises revenue.</p>
                    </div>
                    <div>
                        <span className="text-[#326B3F] text-2xl">4</span>
                        <p className="mt-2 text-sm text-[#6a6a6a]">Improves search rankings and online visibility.</p>
                    </div>
                    <div>
                        <span className="text-[#326B3F] text-2xl">5</span>
                        <p className="mt-2 text-sm text-[#6a6a6a]">Creates trust and loyalty among customers.</p>
                    </div>
                    <div>
                        <span className="text-[#326B3F] text-2xl">6</span>
                        <p className="mt-2 text-sm text-[#6a6a6a]">Distinguish your brand from the competition.</p>
                    </div>
                    <div>
                        <span className="text-[#326B3F] text-2xl">7</span>
                        <p className="mt-2 text-sm text-[#6a6a6a]">Guarantees that your campaigns resonate and deliver results.</p>
                    </div>
                    <div>
                        <span className="text-[#326B3F] text-2xl">8</span>
                        <p className="mt-2 text-sm text-[#6a6a6a]">Communicates ideas clearly and effectively.</p>
                    </div>
                </div>
            </section>

            <section className=" mx-auto px-4 py-16 relative">

                <div className="absolute top-0 left-0 right-0 h-24 overflow-hidden">
                    <div className="w-full h-48 border-t border-gray-200 rounded-[100%] relative -top-32"></div>
                </div>
                <div className="absolute top-0 left-0 right-0  overflow-hidden">
                    <svg 
                    className="w-full" 
                    height="150" 
                    viewBox="0 0 1440 150" 
                    preserveAspectRatio="none"
                    style={{ transform: 'scale(1.5)', transformOrigin: 'center top' }}
                    >
                    <path d="M 0,150 C 480,0 960,0 1440,150" fill="none" stroke="#e5e7eb" strokeWidth="1" />
                    </svg>
                </div>
                <div className="text-center mb-8 space-y-4 md:mt-22 mt-12 max-w-screen-xl mx-auto">
                    <p className="text-[#326B3F] text-sm">Our Services</p>
                    <h2 className="md:text-3xl text-xl font-medium">
                        How Copywriting Works to <span className="text-[#326B3F]">Build a Brand</span>{' '}<br />
                    </h2>
                    <p className="text-gray-500 text-sm">
                        Content copywriting services help build a brand by crafting clear, engaging, and persuasive messaging. It determines perception and earns trust. Good copy talks about what is special about a brand while connecting with the right audience. It also maintains consistency throughout websites, advertising, and social media.
                        Consider Nike's tagline, "Just Do It." It is a simple yet powerful instance of motivation and depicts the very soul of the brand. Such effective copywriting renders brands unforgettable and affects customers' buying decisions. Hence, through the right words, businesses can garner a strong audience and be differentiated in the market.
                    </p>
                </div>

                {/* Custom Carousel Implementation */}
                <div className='max-w-screen-xl mx-auto relative'>
                    <div className="overflow-hidden">
                        <div 
                            className="flex transition-transform duration-300 ease-in-out"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {chunkedServices.map((chunk, chunkIndex) => (
                                <div key={chunkIndex} className="w-full flex-shrink-0">
                                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 mb-10">
                                        {chunk.map((service, index) => (
                                            <div key={index} className="bg-white rounded-lg shadow-md p-6">
                                                <h3 className="text-md font-semibold text-[#1b223c] mb-4">{service.title}</h3>
                                                <ul className="space-y-4">
                                                    {service.points.map((point, idx) => (
                                                        <li key={idx} className="flex items-start">
                                                            <Image 
                                                                src="/Arrow 31.png" 
                                                                alt="Arrow" 
                                                                width={16}
                                                                height={12}
                                                                className="mt-1.5 mr-2.25 flex-shrink-0" 
                                                            />
                                                            <span className="text-[#6a6a6a]">{point}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <button 
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow duration-300"
                        aria-label="Previous slide"
                    >
                        <svg className="w-6 h-6 text-[#326B3F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button 
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow duration-300"
                        aria-label="Next slide"
                    >
                        <svg className="w-6 h-6 text-[#326B3F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Dynamic navigation buttons */}
                <div className="flex justify-center space-x-1 mt-8">
                    {chunkedServices.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer hover:opacity-80 ${
                                currentSlide === index
                                    ? "w-10 bg-[#429054]/40"
                                    : "w-4 bg-gray-400 hover:bg-gray-600"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </section>
            
            <section class="relative bg-[#429054]/40 py-16 overflow-hidden">
                <div class="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center">
                    <div class="w-full md:w-5/12 mb-8 md:mb-0">
                    <h1 class="md:text-3xl text-xl font-semibold mb-3">
                        Why Choose a Professional
                        <span class="text-[#326B3F] block">Copywriting Agency in India?</span>
                    </h1>
                    </div>
                    <div class="w-full md:w-7/12 md:pl-8">
                    <p class="text-[#6a6a6a] mb-6">
                        <ul className="space-y-2 ml-35">
                            <li className="flex items-start">
                                <div className="w-2 h-2 bg-[#326B3F] rounded-full mt-2 mr-3"></div>
                                <span>High-quality content that connects with your audience.</span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-2 h-2 bg-[#326B3F] rounded-full mt-2 mr-3"></div>
                                <span>SEO-friendly and engaging content for websites, blogs, and ads.</span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-2 h-2 bg-[#326B3F] rounded-full mt-2 mr-3"></div>
                                <span>Tailored messaging to boost brand visibility.</span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-2 h-2 bg-[#326B3F] rounded-full mt-2 mr-3"></div>
                                <span>Industry-specific content that enhances engagement.</span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-2 h-2 bg-[#326B3F] rounded-full mt-2 mr-3"></div>
                                <span>Well-researched approach for credibility and trust.</span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-2 h-2 bg-[#326B3F] rounded-full mt-2 mr-3"></div>
                                <span>Expertise across industries to drive conversions.</span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-2 h-2 bg-[#326B3F] rounded-full mt-2 mr-3"></div>
                                <span>Consistent and professional communication.</span>
                            </li>
                        </ul>
                    </p>
                    <div class="mt-8 ml-35">
                        <a href="#" class="inline-block bg-white text-[#326B3F] px-8 py-3 rounded-xs font-medium shadow-sm hover:shadow-md transition-shadow duration-300">
                        Start Your Journey
                        </a>
                    </div>
                    </div>
                </div>
            </section>
            <section>
            <div className="text-center mb-8 md:mt-22 mt-12 max-w-screen-xl mx-auto">
                <p className="text-[#326B3F] text-sm mb-4">Why Copywriting?</p>
                <h2 className="md:text-3xl text-xl font-semibold mb-4">
                    How Copywriting Services Agencies<span className="text-[#326B3F]"> Benefit your Business</span>{' '}<br />
                </h2>
                <p className="text-[#6a6a6a] text-sm">
                Agency copywriting services help your business by creating clear, engaging, and persuasive content. It improves branding, boosts sales, and attracts customers with well-written ads, blogs, and website copy. Professional writers ensure your message is strong, SEO-friendly, and tailored to your audience, saving time and enhancing business growth.
                </p>
            </div>
            </section>
            <section className="max-w-[calc(100%-10rem)] mx-auto  py-8">
                <div className="grid grid-cols-2 sm:grid-cols-2 text-left md:grid-cols-4 gap-10">
                    <div>
                        <span className="text-[#326B3F] text-2xl">1</span>
                        <p className="mt-2 text-sm font-semibold text-[#1b223c]">We’ll Guide You to Get Started</p>
                        <p className="mt-2 text-sm text-[#6a6a6a]">Not sure where to start? Our expert copywriters analyse your business needs and craft customised content to enhance your brand message. We create engaging, audience-focused solutions that boost visibility and impact. Let’s create content that connects with your audience and delivers results. Partner with us for content that truly works.</p>
                    </div>
                    <div>
                        <span className="text-[#326B3F] text-2xl">2</span>
                        <p className="mt-2 font-semibold text-sm text-[#1b223c]">Industries We Serve</p>
                        <p className="mt-2 text-sm text-[#6a6a6a]">At TransCurators, we provide expert copywriting services tailored to diverse industries. Whether you need compelling content for Tech & SaaS, engaging healthcare narratives, persuasive Finance & FinTech copy, or high-converting E-commerce descriptions, we’ve got you covered. Our expertise also extends to Real Estate and both B2B & B2C businesses, ensuring impactful messaging that drives results.</p>
                    </div>
                    <div>
                        <span className="text-[#326B3F] text-2xl">3</span>
                        <p className="mt-2 text-sm font-semibold text-[#1b223c]">Your Success Is Our Primary Focus</p>
                        <p className="mt-2 text-sm text-[#6a6a6a]">Our copywriting agency is committed to delivering high-quality content that meets your business goals. We prioritise customer satisfaction and ensure every piece of content is tailored for success. With a team of expert writers, we craft compelling narratives that engage your audience and drive results. Our strategic approach ensures that your brand voice remains consistent across all platforms.</p>
                    </div>
                    <div>
                        <span className="text-[#326B3F] text-2xl">4</span>
                        <p className="mt-2 text-sm font-semibold text-[#1b223c]">Interested in Learning More About Copywriting?</p>
                        <p className="mt-2 text-sm text-[#6a6a6a]">Copywriting is an essential part of any marketing strategy. If you want to explore more about how copy can transform your business, get in touch with our experts today.
                            From compelling brand messaging to high-converting sales copy, the right words can make all the difference. Let us help you craft persuasive content that drives engagement and boosts your business growth.
                        </p>
                    </div>
                    
                </div>
                <div class="mt-12 md:mt-22 flex justify-center">
                        <a href="#" class="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-[0_0_10px_#CCE3DE] hover:shadow-[0_0_15px_#A8D5BA] font-medium text-base text-gray-500 transition-shadow duration-300">
                        Talk to an Expert
                        </a>
                    </div>
            </section>

            <div className='max-w-screen-xl flex justify-center md:mt-20 mb-10 mx-auto items-center'>     
        <div className='text-center flex-row'>
            <p className='text-md text-[#326B3F] font-regular'>FAQ's</p>
            <p className='md:text-3xl text-xl text-black font-medium mt-4'>
            Frequently Asked<span className='text-[#326B3F]'> Questions</span>
            </p>
            <p className='text-sm text-[#6a6a6a] mt-4 leading-[25px] max-w-screen-lg'>
            Sub heading in about 15-20 words            
            </p>
        </div>
      </div>

    <div className="max-w-screen-xl mx-auto p-6">
    
      <div
      onClick={() => toggleFAQ(faq.id)}
      className="grid grid-cols-1 md:grid-cols-2 cursor-pointer gap-8">
        {faqs.slice(0, showMore ? faqs.length : 6).map((faq) => (
          <div key={faq.id} className="bg-white hover:shadow-lg duration-300 transition-all ease-in-out shadow-md p-5 rounded-md">
            <button
              className="flex justify-between items-center w-full text-md font-normal cursor-pointer text-left text-[#6a6a6a]"
              onClick={() => toggleFAQ(faq.id)}
            >
              {faq.question}
              <span className="text-xl transition-transform duration-300">
                {openFAQ === faq.id ? "−" : "+"}
              </span>
            </button>
            <div
              className={`transition-all duration-500 overflow-hidden ${
                openFAQ === faq.id ? "max-h-fit-content mt-3 text-[#326B3F] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {faq.answer}
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
export default CopyWriting;