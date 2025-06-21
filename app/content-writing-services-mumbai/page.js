"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const ContentMumbai = () => {
  const faqs = [
    {
      id: 1,
      question: "What types of content writing services do you offer?",
      answer:
        "We provide various content writing services to meet your business needs. We create attention-grabbing blog posts, informative articles, engaging website content, and social media captions that provide 'scroll-stopping' engagement. We also have a team that specializes in technical writing, product descriptions, press releases, newsletters, and more. We focus on producing clear, concise, and high-quality content that aligns with your brand voice and provides you a connection with your audience.",
    },
    {
      id: 2,
      question: "How do you ensure the quality of your content?",
      answer:
        "Our group of skilled writers creates content that is both educational and engaging while also being aligned with your needs. Each piece receives a thorough editing and proofreading stage to make sure it is polished, correct, and void of errors. We are dedicated to maintaining the highest standards of quality, clarity, and consistency, so you receive content with professionalism that builds trust with your audience.",
    },
    {
      id: 3,
      question: "Can you handle industry-specific content?",
      answer:
        "Our team of talented writers specialize in various industries, making it easier to generate content that is informative, topical, and audience-relevant. We have writers with experience in various industries, such as tech, finance, health, lifestyle, and more, to ensure pieces are custom tailored to your brand voice and target market while well researched. We focus on value of the content not only for engaging readers, but aligning with business goals and producing real results.",
    },
    {
      id: 4,
      question: "Do you offer SEO-friendly content?",
      answer:
        "Absolutely! Our writers know SEO practices, meaning your writing will be optimised for search engines. We look at keyword integration, meta descriptions, overall readability, and structure to improve online exposure and help get the right audience to you. Whether it’s blogs, web pages or product descriptions, we make sure your content ranks and connects with others.",
    },
    {
      id: 5,
      question: "How do you determine the tone and style of my content?",
      answer:
        "We work together with you to get a complete understanding of your brand voice and values and your audience so we can customise the tone, language, and style of the content to fit your needs and goals. However, you best want to express it (professional, casual, informative, persuasive, etc.) so that it all resonates with your audience. We strive to provide you with content that feels authentic to your brand and connects with readers on all platforms.",
    },
    {
      id: 6,
      question: "What is your turnaround time for content delivery?",
      answer:
        "When we talk about timelines, it usually depends on the size, scope, and complexity of the project. However, we prioritise both a quick turnaround and timeliness. We will always be forthcoming about what is realistic and will always try to meet your deadlines without sacrificing quality. Whether it is one blog post or a whole batch of web content, our team is accustomed to working efficiently for prompt completion.",
    },
    {
      id: 7,
      question: "Do you offer revisions if I need more than the content?",
      answer:
        "We offer revisions as part of our commitment to delivering content that aligns perfectly with your expectations and goals. Your satisfaction is our priority, and we work closely with you to understand your feedback and make necessary adjustments. Whether refining the tone, adding details, or reworking sections, we’re here to fine-tune the content until you’re completely happy with the final product. We aim to ensure the content meets and exceeds your standards every time.",
    },
    {
      id: 8,
      question: "How can I get started with TransCurators?",
      answer:
        "You can easily reach out to us through our website or by giving us a call. We’ll take the time to understand your content requirements, brand voice, and target audience. Once we’ve discussed your goals, our team will start creating high-quality, tailored content that aligns with your vision. Whether you need blog posts, website copy, or social media content, we’re here to provide professional writing solutions that make an impact. Let’s collaborate and bring your ideas to life.",
    },
    {
      id: 9,
      question: "Do you offer bulk content packages or long-term content plans?",
      answer:
        "Yes, we do! We offer flexible bulk content packages and long-term content plans tailored to your business needs. Whether you need daily social media posts, weekly blogs, or monthly newsletters, we can create a consistent content strategy that keeps your audience engaged. Our plans are designed to save you time, maintain quality, and ensure a steady flow of content that supports your marketing goals. Reach out to discuss a custom plan that fits your workflow and budget.",
    },
    {
      id: 10,
      question: "Can you help with content strategy and topic suggestions?",
      answer:
        "Absolutely. We don’t just write. We think with you. Our team can help brainstorm content ideas, plan editorial calendars, and suggest topics based on your industry trends, target audience, and SEO goals. Whether starting from scratch or looking to refresh your existing strategy, we’ll provide insight-driven content plans that position your brand as a thought leader and keep your readers coming back for more.",
    },
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
  const contentWritingProcess = [
    {
      number: 1,
      title: "Expertise Across Industries",
      description:
        "Our team of skilled writers has extensive experience in diverse fields, delivering content that resonates with your target audience, whether it's tech, healthcare, finance, or more.",
    },
    {
      number: 2,
      title: "Custom Content Strategies",
      description:
        "We develop personalized content strategies that align with your business goals, ensuring your message is clear, engaging, and effective.",
    },
    {
      number: 3,
      title: "SEO Optimization",
      description:
        "Our content is produced with SEO in mind, helping your organization rank higher on search engines and gain more organic traffic for your website.",
    },
    {
      number: 4,
      title: "High-Quality Writing",
      description:
        "We deliver thoroughly researched, error-free, and persuasive content that captures your brand's voice and engages readers.",
    },
    {
      number: 5,
      title: "Timely Delivery",
      description:
        "We understand the importance of sticking to schedules and guarantee timely delivery without compromising on quality.",
    },
    {
      number: 6,
      title: "Dedicated Help",
      description:
        "Our team provides continuous assistance and adjustments to ensure the final result meets your expectations and needs.",
    },
  ];

  const [showAllAnimations, setShowAllAnimations] = useState(false);
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
      title: "Understanding Your Needs",
      description:
        "We start by thoroughly analyzing your requirements and goals, ensuring our material is consistent with your brand's voice and objectives.",
    },
    {
      number: 2,
      title: "Research and Planning",
      description:
        "Our team conducts extensive research and develops a thorough content plan to ensure correctness and relevancy.",
    },
    {
      number: 3,
      title: "Content Creation",
      description:
        "Our experienced writers create engaging and original material that is targeted to your specific needs while maintaining high quality and clarity.",
    },
    {
      number: 4,
      title: "Review and Revisions",
      description:
        "We thoroughly evaluate the material and make any required adjustments based on your feedback to ensure your satisfaction.",
    },
    {
      number: 5,
      title: "Delivery and Support",
      description:
        "We provide the completed content on schedule and offer continuous assistance with further changes or suggestions.",
    },
  ];

  const contentWriting = [
    {
      title: "",
      description:
        "Our skilled writers craft compelling, original content tailored to your needs. They excel in clear, engaging writing that captures attention. Trust our experts to deliver top-quality work, helping your message stand out and resonate.",
      icon: "/messageIcon.png",
    },
    {
      title: "",
      description:
        "Boost your website's presence with SEO visibility. Improve search rankings, attract more visitors, and grow your business online. Optimize your content, use relevant keywords, and track progress for better results.",
      icon: "/messageIcon.png",
    },
    {
      title: "",
      description:
        "Create a unique and consistent brand voice to connect with your audience. Speak directly to them, reflect your values, and ensure every message aligns with your identity. Build trust and stand out in the market.",
      icon: "/messageIcon.png",
    },
    {
      title: "",
      description:
        "Discover top-notch content that captivates and informs. Our expertly crafted articles, blogs, and web pages ensure clarity, engagement, and value. Enhance your brand with high-quality writing that stands out and resonates with your audience.",
      icon: "/messageIcon.png",
    },
    {
      title: "",
      description:
        "Boost your website's traffic with engaging, well-crafted writing. Discover the secrets to creating content that attracts and retains readers, enhances your online presence, and drives meaningful results.",
      icon: "/messageIcon.png",
    },
  ];

  const services = [
    {
      icon: "/messageIcon.png",
      title: "Expertise Across Industries",
      description:
        "Our content writers in Mumbai have significant sector experience, ensuring that your material connects with your intended audience and fulfills industry standards.",
    },
    {
      icon: "/messageIcon.png",
      title: "Tailored Content Solutions",
      description:
        "We create custom content consistent with your brand's voice and goals, crafting unique and engaging material for each project.",
    },
    {
      icon: "/messageIcon.png",
      title: "SEO Optimisation",
      description:
        "Our writers utilize tried-and-true SEO tactics to increase the exposure of your content, bring more organic traffic to your website, and boost search engine rankings.",
    },
    {
      icon: "/messageIcon.png",
      title: "Timely Delivery",
      description:
        "We prioritize efficiency and dependability, ensuring that high-quality material is delivered on time to meet your project deadlines and specifications.",
    },
    {
      icon: "/messageIcon.png",
      title: "Exceptional Quality",
      description:
        "Our team guarantees that every content piece is thoroughly researched and expertly produced, meeting the highest quality standards.",
    },
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
              Content Writing Agency in Mumbai
            </span>
          </motion.h1>

          <div className="text-[#6a6a6a] mt-6 text-lg leading-relaxed max-w-2xl">
            Hire a leading content writing agency in Mumbai
            for exceptional content that drives results.
            Our team delivers customized solutions for all your writing needs.
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
      <div className="text-center mb-16 mt-22 md:mt-12 space-y-4">
        <h2 className="md:text-3xl text-xl mt-4 font-medium">
          Your Go-To Content Writing
          <br />
          <span className="text-[#326B3F]">Agency in Mumbai</span>
        </h2>
        <p className="text-[#6a6a6a] text-sm mt-4">
          At our content writing agency in Mumbai, we offer tailored solutions to
          elevate your brand. Here's why we are your best choice:
        </p>
      </div>

      <section className="max-w-screen-xl mx-auto text-left py-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {contentWritingProcess
            .slice(0, 3)
            .map((benefit) => (
              <motion.div
                key={benefit.number}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: benefit.number * 0.1 }}
              >
                <span className="text-[#326B3F] text-2xl">{benefit.number}</span>
                <p className="mt-2 text-sm font-semibold text-gray-500">
                  {benefit.title}
                </p>
                <p className="mt-2 text-sm text-gray-500">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
        </div>

        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: showAllAnimations ? "auto" : 0,
            opacity: showAllAnimations ? 1 : 0,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
            {contentWritingProcess
              .slice(3)
              .map((benefit) => (
                <motion.div
                  key={benefit.number}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (benefit.number - 4) * 0.1 }}
                >
                  <span className="text-[#326B3F] text-2xl">{benefit.number}</span>
                  <p className="mt-2 text-sm font-semibold text-gray-500">
                    {benefit.title}
                  </p>
                  <p className="mt-2 text-sm text-gray-500">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
          </div>
        </motion.div>

        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAllAnimations(!showAllAnimations)}
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-lg hover:shadow-xl transition-all duration-500 font-medium text-base bg-[#326B3F] text-white hover:-translate-y-1"
          >
            {showAllAnimations ? "Show Less" : "Show All"}
          </button>
        </div>
      </section>
      <section>
        <div className="text-center mb-16 mt-22 md:mt-12 space-y-4">
          <h2 className="md:text-3xl text-xl mt-4 font-medium">
            Benefits Assured From Our Experienced
            <br />
            <span className="text-[#326B3F]">Content Writers in Mumbai</span>
          </h2>
        </div>

        <div className="max-w-screen-xl mx-auto grid grid-cols-1 gap-4 lg:grid-cols-5 lg:gap-5 md:mt-16 mt-12 text-left">
          {services.slice(0, 5).map((service, index) => (
            <div key={index} className="flex items-start justify-start">
              <div
                className={`h-auto p-4 hover:bg-gray-50 rounded-lg cursor-pointer transition duration-200 group `}
              >
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={24}
                  height={24}
                  className="group-hover:translate-x-1.5 transition-all ease-in-out duration-300"
                />
                <p className="text-md font-semibold text-[#1B223C] mt-2">
                  {service.title}
                </p>
                <p className="text-sm font-regular text-[#6a6a6a] mt-2 ">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="relative bg-[#429054]/20 mt-12 h-auto md:mt-22 flex justify-center items-center mx-auto">
        <div className="max-w-screen-xl flex justify-center items-center mx-auto">
          <div className="flex justify-center items-center mx-auto scale-70">
            <Image
              src="/section3.png"
              alt="Icon1"
              width={500}
              height={500}
              className="md:block hidden"
            />
          </div>
          <div className="flex-row justify-center items-center px-6 py-6 md:py-0 ">
            <h2 className="md:text-3xl text-xl font-semibold text-[#326B3F]">
              What Makes Us the Best Content Writing
              <br />
              <span className="md:text-3xl text-xl font-semibold text-black">
                Service Provider in Mumbai?
                <br />
              </span>
            </h2>
            <p className="text-sm font-regular mt-6 text-[#6a6a6a]">
              Our content writing service in Mumbai radiates because of an amalgam
              of expertise, creativity, and dedication. At TransCurators, We create
              engaging SEO-friendly content that caters to your needs, resulting in
              greater natural traffic and higher search ranks. Our expert writers
              always provide unique, plagiarism-free content on schedule. Entrust
              us to deliver professional quality and excellent results that drive
              your organization forward.
            </p>
            <ul className="mt-6 space-y-4">
              {[
                "Expert Writers",
                "Customized Content",
                "Timely Delivery",
                "Affordable Pricing",
                "Proven Results",
              ].map((item, index) => (
                <li
                  key={index}
                  className="text-sm font-normal text-[#6a6a6a] flex items-center gap-2"
                >
                  <span className="w-5 h-5 flex items-center justify-center rounded-full bg-[#326B3F] text-white">
                    <svg
                      className="h-full p-0.5"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
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
      <div className="text-center mb-16 mt-22 md:mt-12 space-y-4">
        <p className="text-[#326B3F] text-md">Our Services</p>
        <h2 className="md:text-3xl text-xl mt-4 font-medium">
          Check out our
          <br />
          <span className="text-[#326B3F]">Content Writing Services</span>
        </h2>
        <p className="text-[#6a6a6a] text-sm mt-4">
          Explore our top-tier content creation, SEO optimization, and social media
          management services—work with Mumbai's
          <br /> premier content writing firm to create persuasive and engaging
          content solutions.
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
                  <p className="text-gray-600 text-sm">
                    {benefit.description}
                  </p>
                </div>
              ))}
          </div>
        ))}
      </div>
      <section>
        <div className="text-center mb-16 mt-22 md:mt-12 space-y-4">
          <p className="text-[#326B3F] text-md">Our Process</p>
          <h2 className="md:text-3xl text-xl mt-4 font-medium">
            How Do We Deliver Content Writing Services?
            <br />
            <span className="text-[#326B3F]">Our Process</span>
          </h2>
        </div>
      </section>
      <section className="max-w-screen-xl mx-auto text-left py-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-6">
          {Process.map((benefit) => (
            <div key={benefit.number}>
              <span className="text-[#326B3F] text-2xl">{benefit.number}</span>
              <p className="mt-2 text-md font-semibold text-[#1b223c]">
                {benefit.title}
              </p>
              <p className="mt-2 text-sm text-[#6a6a6a]">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="relative bg-[#429054]/20 py-16 mt-12 md:mt-22 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-5/12 mb-8 md:mb-0">
            <h2 className="md:text-3xl text-xl font-semibold mb-3">
              Businesses We Support -
              <br />
              <span className="text-[#326B3F] block">
                Mumbai's Leading Content Writing Agency
              </span>
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
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-lg hover:shadow-xl transition-all duration-500 font-medium text-base bg-[#326B3F] text-white hover:-translate-y-1"
              >
                Start Your Journey
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full py-8 mb-20 md:mt-22 mt-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="md:text-3xl text-xl font-medium text-black">
            Looking for Content Writing Jobs?
          </h2>
          <p className="md:text-3xl ml-2 text-xl font-medium justify-center text-[#326B3F]">
            Head over to the careers section.
          </p>
          <div className="mt-8">
            <a
              href="/careers"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-lg hover:shadow-xl transition-all duration-500 font-medium text-base bg-[#326B3F] text-white hover:-translate-y-1"
            >
              Apply Today
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl flex justify-center md:mt-20 mt-12 mb-10 mx-auto items-center">
        <div className="text-center flex-row">
          <p className="text-md text-[#326B3F] font-regular">FAQ&apos;s</p>
          <p className="md:text-3xl text-xl text-black font-medium mt-4">
            Frequently Asked
            <span className="text-[#326B3F]"> Questions</span>
          </p>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto p-6 mb-12 md:mb-22">
        <div className="grid grid-cols-1 md:grid-cols-2 cursor-pointer gap-8">
          {faqs
            .slice(0, showMore ? faqs.length : 10)
            .map((faq) => (
              <div
                key={faq.id}
                className="bg-white hover:shadow-lg duration-300 transition-all ease-in-out shadow-md p-5 rounded-md"
              >
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
                    maxHeight: openFAQ === faq.id ? "200px" : "0",
                    opacity: openFAQ === faq.id ? "1" : "0",
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
};

export default ContentMumbai;