"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import { Images } from 'lucide-react';

const ThankYou = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-[60vh] px-4 sm:px-6 lg:px-8 mt-12 md:mt-16 bg-gradient-to-b from-white via-[#f5f9f6] to-white py-16">
        <div className="max-w-4xl mx-auto text-center animate-fadeIn">
          
          <h1 className="text-black font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-8 text-center">
            Thank You for Choosing TransCurators!
          </h1>
          <p className="text-xl md:text-2xl text-[#326B3F] leading-relaxed max-w-3xl mx-auto mt-6 font-medium">
            Our team will reach out soon to discuss your content writing needs and get started on your project.
          </p>
        </div>
      </div>
    </>
  );
}

export default ThankYou;
