"use client";
import ContactForm from '../components/contactform/page';
import { useRef } from 'react';

const Contact = () => {

    const contactFormRef = useRef(null); 

    const scrollToContactForm = () => {
        if (contactFormRef.current) {
            contactFormRef.current.scrollIntoView({ behavior: 'smooth' }); 
        }
    };
    return (
        <>
            
            {/* This is the contact section header */}
           <section className="w-full mb-5 bg-[#B3D3BB] h-[70vh] flex items-center justify-center relative overflow-hidden rounded-[30px] mx-auto mt-6 max-w-[95%]">
      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 flex items-center mt-130 justify-center pointer-events-none">
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

      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-900">
          Hire a <span className="text-black">Copywriter</span>
        </h1>
        <p className="text-4xl md:text-5xl text-white font-bold mt-4">
          Professional Copywriting Service in India
        </p>
        <button className="mt-8 bg-white text-[#326B3F] px-6 py-3 rounded-md shadow hover:bg-gray-100 transition">
          Get Started Now
        </button>
      </div>    
</section>   
<h2 className="md:text-3xl text-xl font-medium text-black text-center mt-12 md:mt-22">
  Contact Section
</h2>
            
<div ref={contactFormRef}>
            <ContactForm/>
            </div>
             <div className="w-full bg-[#e5efe5] py-20 mb-20 md:mt-22 mt-12">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <h2 className="md:text-3xl text-xl font-medium text-black">
          Want to work with us?
        </h2>
        <div className="md:text-3xl ml-2 text-xl justify-center text-[#326B3F]">
        Head over to the <div href="/careers"
            className="cursor-pointer md:text-2xl text-lg inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-[0_0_10px_#CCE3DE] hover:shadow-[0_0_15px_#A8D5BA] font-medium bg-white text-[#487040] transition-shadow duration-300">careers</div> section.
        </div>
      </div>
    </div>
            
        </>
    );
}

export default Contact;