"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {supabase} from '@/lib/supabaseClient';
import Link from 'next/link';

// Skeleton components for loading state
const FeaturedCaseStudySkeleton = () => (
  <div className="animate-pulse">
    <div className="rounded-lg bg-gray-200 h-[400px] w-full mb-4"></div>
    <div className="flex justify-between items-center mb-2">
      <div className="h-4 bg-gray-200 rounded w-24"></div>
      <div className="h-4 bg-gray-200 rounded w-24"></div>
    </div>
    <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
    <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-2/3 mb-4"></div>
    <div className="h-4 bg-gray-200 rounded w-16"></div>
  </div>
);

const RegularCaseStudySkeleton = () => (
  <div className="animate-pulse">
    <div className="rounded-lg bg-gray-200 aspect-square w-full mb-4"></div>
    <div className="flex justify-between items-center mb-2">
      <div className="h-3 bg-gray-200 rounded w-20"></div>
      <div className="h-3 bg-gray-200 rounded w-20"></div>
    </div>
    <div className="h-5 bg-gray-200 rounded w-3/4 mb-2"></div>
    <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
    <div className="h-3 bg-gray-200 rounded w-2/3 mb-3"></div>
    <div className="h-3 bg-gray-200 rounded w-14"></div>
  </div>
);

const CSLayout = () => {
  // State to store the fetched case studies
  const [featuredCaseStudies, setFeaturedCaseStudies] = useState([]);
  const [moreCaseStudies, setMoreCaseStudies] = useState([]);
  // State to track if all case studies should be shown
  const [showAllCaseStudies, setShowAllCaseStudies] = useState(false);
  // State for sort order
  const [sortOrder, setSortOrder] = useState('newest');
  // State for scroll position for parallax effects
  const [scrollY, setScrollY] = useState(0);
  // Loading state
  const [isLoading, setIsLoading] = useState(true);
  // State to track which cards are being touched (for mobile)
  const [touchedCardId, setTouchedCardId] = useState(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  // Track scroll position for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle function to show all/fewer case studies
  const toggleShowAllCaseStudies = () => {
    setShowAllCaseStudies(!showAllCaseStudies);
  };

  // Handle sorting change
  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortOrder(value);
    
    // Create a copy of case studies to sort
    let sortedCaseStudies = [...moreCaseStudies];
    
    switch(value) {
      case 'newest':
        sortedCaseStudies.sort((a, b) => new Date(b.date_posted) - new Date(a.date_posted));
        break;
      case 'oldest':
        sortedCaseStudies.sort((a, b) => new Date(a.date_posted) - new Date(b.date_posted));
        break;
      // Add other sorting options as needed
      default:
        sortedCaseStudies.sort((a, b) => new Date(b.date_posted) - new Date(a.date_posted));
    }
    
    setMoreCaseStudies(sortedCaseStudies);
  };

  // Fetch data from Supabase on component mount
  useEffect(() => {
    const fetchCaseStudies = async () => {
      setIsLoading(true);
      try {
        // Fetch the top featured case studies
        let { data: featuredData, error } = await supabase
          .from('casestd')
          .select('*')
          .order('date_posted', { ascending: false })
          .limit(5); // Limit to 5 for featured posts

        if (error) {
          console.error(error);
          return;
        }

        // Fetch additional case studies for the "more case studies" section
        let { data: additionalData, error: moreCaseStudiesError } = await supabase
          .from('casestd')
          .select('*')
          .order('date_posted', { ascending: false })
          .range(5, 20); // Fetch case studies after the first 5

        if (moreCaseStudiesError) {
          console.error(moreCaseStudiesError);
          return;
        }

        setFeaturedCaseStudies(featuredData || []); // Use empty array as fallback
        setMoreCaseStudies(additionalData || []); // Use empty array as fallback
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        // Add a slight delay to prevent flashing of skeletons
        setTimeout(() => setIsLoading(false), 500);
      }
    };

    fetchCaseStudies();
  }, []);

  // Function to truncate the description
  const truncateDescription = (text, length = 150) => {
    if (text && text.length > length) {
      return `${text.substring(0, length)}...`;
    }
    return text || '';
  };

  // Function to format date
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  // Function to handle touch on cards for mobile
  const handleCardTouch = (id) => {
    // If the same card is touched again, navigate to it
    if (touchedCardId === id) {
      return;
    }
    // Otherwise, mark this card as touched
    setTouchedCardId(id);
  };

  // Clear touched card state when touch ends without clicking a link
  const handleTouchEnd = (e) => {
    // Only clear if the target is not a link
    if (!e.target.closest('a')) {
      setTimeout(() => setTouchedCardId(null), 300);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto mt-12 md:mt-22"
    >
      {/* Header Section */}
      <div className="text-center mb-12">
        <p className="text-[#326B3F] text-sm mb-2">Case Studies</p>
        <h1 className="md:text-3xl text-xl font-semibold mb-2">A Heading will come in about 5-6 words</h1>
        <p className="text-[#6a6a6a] text-sm">A sub heading will come in about 10-15 words</p>
      </div>

      {/* Featured Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-medium mb-6">
          Top Featured
        </h2>

        <div className="flex flex-col md:flex-row gap-7">
          {isLoading ? (
            <>
              <div className="md:w-1/2">
                <FeaturedCaseStudySkeleton />
              </div>
              <div className="md:w-1/2">
                <FeaturedCaseStudySkeleton />
              </div>
            </>
          ) : featuredCaseStudies.length > 0 ? (
            <>
              {/* Main Featured Post - Left Side */}
              <div className="md:w-1/2">
                <motion.div 
                  className={`group relative overflow-hidden rounded-lg shadow-md ${
                    touchedCardId === featuredCaseStudies[0]?.id ? 'touched-card' : ''
                  }`}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  onTouchStart={() => handleCardTouch(featuredCaseStudies[0]?.id)}
                  onTouchEnd={handleTouchEnd}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={featuredCaseStudies[0]?.image || '/Images/placeholder.jpg'} 
                      alt="Featured case study" 
                      className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent 
                      ${(touchedCardId === featuredCaseStudies[0]?.id) ? 'opacity-70' : 'opacity-80 group-hover:opacity-70'} 
                      transition-opacity duration-500`}>
                    </div>
                    
                    {/* Content overlay */}
                    <div className={`absolute bottom-0 left-0 right-0 p-7 transform transition-transform duration-500 
                      ${(touchedCardId === featuredCaseStudies[0]?.id) ? 'translate-y-[-10px]' : 'group-hover:translate-y-[-10px]'}`}>
                      <div className="flex justify-between items-center mb-2">
                        <p className="text-white/90 text-sm">{featuredCaseStudies[0]?.company}</p>
                        <p className="text-white/90 text-sm">{formatDate(featuredCaseStudies[0]?.date_posted)}</p>
                      </div>
                      <h3 className="text-white text-xl font-medium mb-4">{featuredCaseStudies[0]?.title}</h3>
                      
                      {/* Description that becomes more visible on hover/touch */}
                      <div className={`overflow-hidden transition-all duration-500 ease-in-out 
                        ${(touchedCardId === featuredCaseStudies[0]?.id) ? 'max-h-32' : 'max-h-0 group-hover:max-h-32'}`}>
                        <p className="text-white/90 text-sm mb-4">
                          {truncateDescription(featuredCaseStudies[0]?.content, 150)}
                        </p>
                        <Link 
                          href={`/case-study/${featuredCaseStudies[0]?.id}`} 
                          className="inline-flex items-center text-white gap-3 relative group"
                        >
                          Read more
                          <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5 transition-all duration-300 group-hover:translate-x-1"
                          >
                            <path d="M12 4L10.6 5.4L16.2 11H4V13H16.2L10.6 18.6L12 20L20 12L12 4Z"></path>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Main Featured Post - Right Side */}
              <div className="md:w-1/2 mt-7 md:mt-0">
                <motion.div
                  className={`group relative overflow-hidden rounded-lg shadow-md ${
                    touchedCardId === featuredCaseStudies[1]?.id ? 'touched-card' : ''
                  }`}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  onTouchStart={() => handleCardTouch(featuredCaseStudies[1]?.id)}
                  onTouchEnd={handleTouchEnd}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={featuredCaseStudies[1]?.image || '/Images/placeholder.jpg'} 
                      alt="Featured case study"
                      className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent 
                      ${(touchedCardId === featuredCaseStudies[1]?.id) ? 'opacity-70' : 'opacity-80 group-hover:opacity-70'} 
                      transition-opacity duration-500`}>
                    </div>
                    
                    {/* Content overlay */}
                    <div className={`absolute bottom-0 left-0 right-0 p-7 transform transition-transform duration-500 
                      ${(touchedCardId === featuredCaseStudies[1]?.id) ? 'translate-y-[-10px]' : 'group-hover:translate-y-[-10px]'}`}>
                      <div className="flex justify-between items-center mb-2">
                        <p className="text-white/90 text-sm">{featuredCaseStudies[1]?.company}</p>
                        <p className="text-white/90 text-sm">{formatDate(featuredCaseStudies[1]?.date_posted)}</p>
                      </div>
                      <h3 className="text-white text-xl font-medium mb-4">{featuredCaseStudies[1]?.title}</h3>
                      
                      {/* Description that becomes more visible on hover/touch */}
                      <div className={`overflow-hidden transition-all duration-500 ease-in-out 
                        ${(touchedCardId === featuredCaseStudies[1]?.id) ? 'max-h-32' : 'max-h-0 group-hover:max-h-32'}`}>
                        <p className="text-white/90 text-sm mb-4">
                          {truncateDescription(featuredCaseStudies[1]?.content, 150)}
                        </p>
                        <Link 
                          href={`/case-study/${featuredCaseStudies[1]?.id}`} 
                          className="inline-flex items-center text-white gap-3 relative group"
                        >
                          Read more
                          <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5 transition-all duration-300 group-hover:translate-x-1"
                          >
                            <path d="M12 4L10.6 5.4L16.2 11H4V13H16.2L10.6 18.6L12 20L20 12L12 4Z"></path>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </>
          ) : (
            <div className="w-full text-center p-8 bg-white rounded-lg shadow-sm">
              No featured case studies available
            </div>
          )}
        </div>
      </section>

      {/* More Case Studies Section */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-medium">
            More Case Studies
          </h2>
          {!isLoading && (
            <select 
              className="border rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-[#326B3F]"
              onChange={handleSortChange}
              value={sortOrder}
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="last-week">Last Week</option>
              <option value="last-month">Last Month</option>
              <option value="this-year">This Year</option>
            </select>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {isLoading ? (
            // Show skeletons while loading
            Array(4).fill(0).map((_, index) => (
              <div key={`skeleton-${index}`}>
                <RegularCaseStudySkeleton />
              </div>
            ))
          ) : (
            <>
              {/* Always show first 4 case studies */}
              {moreCaseStudies.slice(0, 4).map((caseStudy) => (
                <motion.div
                  key={caseStudy.id}
                  className={`group bg-white rounded-xl overflow-hidden shadow-md h-full ${
                    touchedCardId === caseStudy.id ? 'touched-card' : ''
                  }`}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  onTouchStart={() => handleCardTouch(caseStudy.id)}
                  onTouchEnd={handleTouchEnd}
                >
                  <div className="relative overflow-hidden h-full">
                    {/* Image */}
                    <img 
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      className="w-full aspect-square object-cover"
                    />
                    
                    {/* Initial overlay - visible before hover/touch */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent 
                      ${(touchedCardId === caseStudy.id) ? 'opacity-0' : 'group-hover:opacity-0'} transition-opacity duration-300`}>
                      <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                        <div className="flex justify-between items-center mb-2">
                          <p className="text-white/80 text-xs">{caseStudy.company}</p>
                          <p className="text-white/80 text-xs">{formatDate(caseStudy.date_posted)}</p>
                        </div>
                        <h3 className="font-medium">{caseStudy.title}</h3>
                      </div>
                    </div>
                    
                    {/* Full white overlay with content - appears on hover/touch */}
                    <div className={`absolute inset-0 bg-white 
                      ${(touchedCardId === caseStudy.id) ? 'opacity-95' : 'opacity-0 group-hover:opacity-95'} 
                      transition-opacity duration-300 z-10 flex flex-col justify-center`}
                    >
                      <div className={`p-5 transform ${
                        (touchedCardId === caseStudy.id) ? 'translate-y-0' : 'translate-y-4 group-hover:translate-y-0'
                      } transition-transform duration-300`}>
                        <h3 className="text-gray-900 font-semibold mb-3">{caseStudy.title}</h3>
                        <div className="flex justify-between items-center mb-3 text-sm text-gray-500">
                          <p>{caseStudy.company}</p>
                          <p>{formatDate(caseStudy.date_posted)}</p>
                        </div>
                        <p className="text-gray-700 mb-4 text-sm line-clamp-3">
                          {truncateDescription(caseStudy.content, 120)}
                        </p>
                        <Link 
                          href={`/case-study/${caseStudy.id}`} 
                          className="text-[#326B3F] font-medium inline-flex items-center hover:underline"
                        >
                          Read More
                          <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="ml-1 w-4 h-4 transition-all duration-300 group-hover:translate-x-1"
                          >
                            <path d="M12 4L10.6 5.4L16.2 11H4V13H16.2L10.6 18.6L12 20L20 12L12 4Z"></path>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {/* Additional case studies with animation */}
              <AnimatePresence>
                {showAllCaseStudies && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ 
                      opacity: 1, 
                      height: 'auto',
                      transition: { duration: 0.5, ease: "easeInOut" }
                    }}
                    exit={{ 
                      opacity: 0, 
                      height: 0,
                      transition: { duration: 0.5, ease: "easeInOut" } 
                    }}
                    className="contents" // This makes the div behave like its children in grid layout
                  >
                    {moreCaseStudies.slice(4).map((caseStudy) => (
                      <motion.div 
                        key={caseStudy.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className={`group bg-white rounded-xl overflow-hidden shadow-md h-full ${
                          touchedCardId === caseStudy.id ? 'touched-card' : ''
                        }`}
                        whileHover={{ y: -5 }}
                        onTouchStart={() => handleCardTouch(caseStudy.id)}
                        onTouchEnd={handleTouchEnd}
                      >
                        <div className="relative overflow-hidden h-full">
                          {/* Image */}
                          <img 
                            src={caseStudy.image}
                            alt={caseStudy.title}
                            className="w-full aspect-square object-cover"
                          />
                          
                          {/* Initial overlay - visible before hover/touch */}
                          <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent 
                            ${(touchedCardId === caseStudy.id) ? 'opacity-0' : 'group-hover:opacity-0'} transition-opacity duration-300`}>
                            <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                              <div className="flex justify-between items-center mb-2">
                                <p className="text-white/80 text-xs">{caseStudy.company}</p>
                                <p className="text-white/80 text-xs">{formatDate(caseStudy.date_posted)}</p>
                              </div>
                              <h3 className="font-medium">{caseStudy.title}</h3>
                            </div>
                          </div>
                          
                          {/* Full white overlay with content - appears on hover/touch */}
                          <div className={`absolute inset-0 bg-white 
                            ${(touchedCardId === caseStudy.id) ? 'opacity-95' : 'opacity-0 group-hover:opacity-95'} 
                            transition-opacity duration-300 z-10 flex flex-col justify-center`}
                          >
                            <div className={`p-5 transform ${
                              (touchedCardId === caseStudy.id) ? 'translate-y-0' : 'translate-y-4 group-hover:translate-y-0'
                            } transition-transform duration-300`}>
                              <h3 className="text-gray-900 font-semibold mb-3">{caseStudy.title}</h3>
                              <div className="flex justify-between items-center mb-3 text-sm text-gray-500">
                                <p>{caseStudy.company}</p>
                                <p>{formatDate(caseStudy.date_posted)}</p>
                              </div>
                              <p className="text-gray-700 mb-4 text-sm line-clamp-3">
                                {truncateDescription(caseStudy.content, 120)}
                              </p>
                              <Link 
                                href={`/case-study/${caseStudy.id}`} 
                                className="text-[#326B3F] font-medium inline-flex items-center hover:underline"
                              >
                                Read More
                                <svg
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                  className="ml-1 w-4 h-4 transition-all duration-300 group-hover:translate-x-1"
                                >
                                  <path d="M12 4L10.6 5.4L16.2 11H4V13H16.2L10.6 18.6L12 20L20 12L12 4Z"></path>
                                </svg>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          )}
        </div>

        {/* Show More/Less Button with animations */}
        {!isLoading && moreCaseStudies.length > 4 && (
          <div className="flex justify-center mt-12 md:mt-22 md:mb-22 mb-12">
            <motion.button 
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-[0_0_10px_#CCE3DE] hover:shadow-[0_0_15px_#A8D5BA] font-medium text-base text-gray-500 transition-shadow duration-300"
              onClick={toggleShowAllCaseStudies}
              whileHover={{ y: -2, boxShadow: '0 0 15px #A8D5BA' }}
              whileTap={{ y: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {showAllCaseStudies ? 'Show Less' : 'Read More'}
            </motion.button>
          </div>
        )}
      </section>
      
      {/* Add CSS for touch states */}
      <style jsx>{`
        @media (hover: none) {
          .touched-card {
            transform: translateY(-5px);
            transition: transform 0.3s;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default CSLayout;