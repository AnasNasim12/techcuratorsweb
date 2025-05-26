import Image from "next/image"
import { Linkedin, Instagram, Twitter, Mail, Phone, ArrowRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full mb-5 bg-[#333333] py-10 md:py-16 flex items-center justify-center relative overflow-hidden rounded-[30px] mx-auto mt-6 max-w-[95%]">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 w-full">
        {/* Top section with logo and social icons */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-b border-white pb-4 mb-8 sm:mb-12 gap-4">
          <div className="flex items-center">
            <Image
              src="/Trans_logo.svg"
              alt="TransCurators Logo"
              width={200}
              height={200}
              className="h-8 sm:h-10"
              style={{ filter: "invert(100%)" }}
            />          </div>          <div className="flex space-x-3">
            <a href="https://www.linkedin.com/company/transcurators/" className="bg-[#326B3F] hover:bg-green-800 rounded-full p-2 transition-colors">
              <Linkedin size={20} className="text-white" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="https://www.instagram.com/transcurators/?hl=en" className="bg-[#326B3F] hover:bg-green-800 rounded-full p-2 transition-colors">
              <Instagram size={20} className="text-white" />
              <span className="sr-only">Instagram</span>
            </a>
         
          </div>
        </div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 text-white sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Important Links */}
          <div className="mb-6 sm:mb-0">
            <h3 className="text-lg font-medium mb-3 sm:mb-4">Important Links</h3>
            <ul className="space-y-1.5 text-sm">
              <li>
                <a href="/aboutus" className="flex items-center hover:text-[#326B3F] transition-colors">
                  <ArrowRight size={14} className="mr-2 flex-shrink-0" />
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <a href="/contact" className="flex items-center hover:text-[#326B3F] transition-colors">
                  <ArrowRight size={14} className="mr-2 flex-shrink-0" />
                  <span>Contact Us</span>
                </a>
              </li>
              <li>
                <a href="/careers" className="flex items-center hover:text-[#326B3F] transition-colors">
                  <ArrowRight size={14} className="mr-2 flex-shrink-0" />
                  <span>Careers</span>
                </a>
              </li>
              <li>
                <a href="/blogs" className="flex items-center hover:text-[#326B3F] transition-colors">
                  <ArrowRight size={14} className="mr-2 flex-shrink-0" />
                  <span>Blogs</span>
                </a>
              </li>
              <li>
                <a href="/case-studies" className="flex items-center hover:text-[#326B3F] transition-colors">
                  <ArrowRight size={14} className="mr-2 flex-shrink-0" />
                  <span>Case Study</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="mb-6 sm:mb-0">
            <h3 className="text-lg font-medium mb-3 sm:mb-4">Services</h3>
            <ul className="space-y-1.5 text-sm">
              <li>
                <a href="#" className="flex items-center hover:text-[#326B3F] transition-colors">
                  <ArrowRight size={14} className="mr-2 flex-shrink-0" />
                  <span>Content Writing Services</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center hover:text-[#326B3F] transition-colors">
                  <ArrowRight size={14} className="mr-2 flex-shrink-0" />
                  <span>Designing Services</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center hover:text-[#326B3F] transition-colors">
                  <ArrowRight size={14} className="mr-2 flex-shrink-0" />
                  <span>Video Animation Services</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center hover:text-[#326B3F] transition-colors">
                  <ArrowRight size={14} className="mr-2 flex-shrink-0" />
                  <span>SOP Writing Services</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center hover:text-[#326B3F] transition-colors">
                  <ArrowRight size={14} className="mr-2 flex-shrink-0" />
                  <span>Translation & Localization</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center hover:text-[#326B3F] transition-colors">
                  <ArrowRight size={14} className="mr-2 flex-shrink-0" />
                  <span>Voiceover Services</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Our Locations */}
          <div className="mb-6 sm:mb-0">
            <h3 className="text-lg font-medium mb-3 sm:mb-4">Our Locations</h3>
            <ul className="space-y-1.5 text-sm">
              <li>
                <a href="#" className="flex items-center hover:text-[#326B3F] transition-colors">
                  <ArrowRight size={14} className="mr-2 flex-shrink-0" />
                  <span>Delhi</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center hover:text-[#326B3F] transition-colors">
                  <ArrowRight size={14} className="mr-2 flex-shrink-0" />
                  <span>Mumbai</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center hover:text-[#326B3F] transition-colors">
                  <ArrowRight size={14} className="mr-2 flex-shrink-0" />
                  <span>Bangalore</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center hover:text-[#326B3F] transition-colors">
                  <ArrowRight size={14} className="mr-2 flex-shrink-0" />
                  <span>Pune</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Tagline and Contact */}
          <div className="flex flex-col ml-0 sm:ml-0 md:ml-0 lg:ml-4 justify-between">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold">
                Engaging <span className="text-[#326B3F]">Content</span>
              </h2>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
                Crafted for <span className="text-[#326B3F]">Impact</span>
              </h2>
            </div>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <a
                  href="mailto:contact@transcurators.com"
                  className="hover:text-[#326B3F] transition-colors text-sm sm:text-base break-all"
                >
                  contact@transcurators.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <a href="tel:+917678144482" className="hover:text-[#326B3F] transition-colors text-sm sm:text-base">
                  +91 7678144482
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright section */}
        <div className="border-t border-white mt-8 sm:mt-10 pt-4 sm:pt-6 flex flex-col md:flex-row justify-between text-xs text-white">
          <div className="text-center md:text-left">
            <span className="block sm:inline">
              Copyright @2025 TransCurators-Quality Content Writing Company | Powered by TransCurators-Quality Content Writing Company
            </span>
          </div>
          <div className="mt-2 md:mt-0 text-center md:text-right">
            <a href="/PrivacyPolicy" className="hover:text-[#326B3F] transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}


