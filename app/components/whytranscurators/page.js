"use client";
import { CarouselTwo } from "../caruseltwo/page";
import Carousel from "../carousel/page";

export default function WhyTransCurators() {
  const benefits = [
    { title: "High-Quality Content", Content: "As a trusted content writing company, we deliver well-researched, engaging, and plagiarism-free content that captivates audiences and enhances brand credibility. Every piece undergoes strict quality checks to ensure excellence." },
    { title: "Timely and Reliable Delivery", Content: "Our content writing agency ensures prompt, efficient delivery and meeting deadlines without compromising quality so your brand stays ahead in today's competitive market. We value your time and guarantee a smooth workflow." },
    { title: "Customised Solutions", Content: "We offer tailor-made content writing services to align with your brand's unique needs, ensuring content that resonates with your audience and drives results. Our strategies are designed for maximum impact and engagement." },
    { title: "Expert Writers for Compelling Content", Content: "Our skilled writers craft SEO-optimized, compelling content that reflects your brand's voice, making us a preferred content writing service in India. With expertise across various industries, we deliver content that speaks to your audience." },
    { title: "Transparent and Hassle-Free Process", Content: "As a reliable content writing firm, we keep you informed at every stage, ensuring a smooth, hassle-free experience from ideation to final delivery. Our open communication fosters trust and long-term collaboration." },
    { title: "Industry Knowledge", Content: "Our content writing company delivers well-researched, industry-specific content that engages and informs. With deep expertise, our team ensures relevant and impactful content for your niche" },
    { title: "Affordable Pricing", Content: "Our content writing services provide high-quality content at competitive rates. We offer flexible, cost-effective solutions, making premium content accessible to businesses of all sizes." },
    { title: "SEO Optimization", Content: "As a top content writing firm, we create SEO-optimized content that boosts rankings and organic traffic. Our strategies ensure better visibility with strategic keyword placement." },
    { title: "Client Satisfaction", Content: "At our website content writing service, client satisfaction is our priority. We ensure seamless execution, quality content, and open communication for long-term success." },
  ];

  return (
    <>
    <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto gap-6 my-14 md:my-24">
      <div className="text-center flex">
          <div className="w-full overflow-hidden text-center md:text-left flex flex-col gap-2 justify-center">
            <h2 className=" text-[30px] mx-5 md:mx-0 md:text-[60px]  font-bold text-black md:leading-16">
              Why Choose <span className="text-[#326B3F]">TransCurators?</span>
            </h2>
          </div>
      </div>

      <div className="relative flex flex-col overflow-hidden gap-9 justify-center items-center mx-auto">
          <div className="max-w-screen-xl flex justify-center items-center mx-auto">
            <Carousel gap={40} className="h-fit">
              {benefits.map((benefits, index) => (
                <div key={index} className="w-[400px] p-6 bg-white shadow-lg flex flex-col items-center justify-center text-center">
                  <h4 className="text-md font-semibold pointer-events-none">{benefits.title}</h4>
                  <p className="mt-3 text-sm text-[#444] italic pointer-events-none">"{benefits.Content}"</p>
                </div>
              ))}
            </Carousel>
          </div>

          <div className="max-w-screen-xl flex justify-center items-center mx-auto">
            <CarouselTwo gap={40} className="h-fit">
              {benefits.map((benefits, index) => (
                <div key={index} className="w-[400px] p-6 bg-white shadow-lg flex flex-col items-center justify-center text-center">
                  <h4 className="text-md font-semibold pointer-events-none">{benefits.title}</h4>
                  <p className="mt-3 text-sm text-[#444] italic pointer-events-none">"{benefits.Content}"</p>
                </div>
              ))}
            </CarouselTwo>
          </div>
        </div>
    </div>
      
    </>
  );
}