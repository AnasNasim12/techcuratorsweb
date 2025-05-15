"use client";
import { useState } from 'react';
import Link from 'next/link';

const ThankYou = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };


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
                    <img className="h-8 w-48" src="/Trans_logo.svg" alt="TransCurators Logo" />
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
                  <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                    For Writers
                  </a>
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
                    <img
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
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    <a
                      href="#"
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="ml-3 text-base font-medium text-gray-900">For Writers</span>
                    </a>
                  </nav>
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