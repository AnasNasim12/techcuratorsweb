"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '@/lib/supabaseClient';

// Skeleton components for loading state
const FeaturedPostSkeleton = () => (
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

const SmallPostSkeleton = () => (
  <div className="animate-pulse">
    <div className="rounded-lg bg-gray-200 h-32 w-full mb-3"></div>
    <div className="flex justify-between items-center mb-2">
      <div className="h-3 bg-gray-200 rounded w-16"></div>
      <div className="h-3 bg-gray-200 rounded w-16"></div>
    </div>
    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
    <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
    <div className="h-3 bg-gray-200 rounded w-1/2 mb-3"></div>
    <div className="h-3 bg-gray-200 rounded w-12"></div>
  </div>
);

const RegularPostSkeleton = () => (
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

const BlogLayout = () => {
  // State to store the fetched blogs
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [moreBlogs, setMoreBlogs] = useState([]);
  // Add state to track if all blogs should be shown
  const [showAllBlogs, setShowAllBlogs] = useState(false);
  // Add state for sort order
  const [sortOrder, setSortOrder] = useState('newest');
  // Add state for scroll position for parallax effects
  const [scrollY, setScrollY] = useState(0);
  // Add loading state
  const [isLoading, setIsLoading] = useState(true);
  // Add state to track which cards are being touched (for mobile)
  const [touchedCardId, setTouchedCardId] = useState(null);

  // Simplified animation variants
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

  // Track scroll position for parallax effects - simplified
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle function to show all/fewer blogs
  const toggleShowAllBlogs = () => {
    setShowAllBlogs(!showAllBlogs);
  };

  // Handle sorting change
  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortOrder(value);
    
    // Create a copy of blogs to sort
    let sortedBlogs = [...moreBlogs];
    
    switch(value) {
      case 'newest':
        sortedBlogs.sort((a, b) => new Date(b.date_posted) - new Date(a.date_posted));
        break;
      case 'oldest':
        sortedBlogs.sort((a, b) => new Date(a.date_posted) - new Date(b.date_posted));
        break;
      // Add other sorting options as needed
      default:
        // Default is newest first
        sortedBlogs.sort((a, b) => new Date(b.date_posted) - new Date(a.date_posted));
    }
    
    setMoreBlogs(sortedBlogs);
  };

  // Fetch data from Supabase on component mount
  useEffect(() => {
    const fetchBlogs = async () => {
      setIsLoading(true);
      try {
        // Fetch the top featured blogs (we'll assume you sort by date or relevance)
        let { data: featuredBlogs, error } = await supabase
          .from('blogs')
          .select('*')
          .order('date_posted', { ascending: false })
          .limit(5); // Limit to 5 for featured posts

        if (error) {
          console.error(error);
          return;
        }

        // Fetch additional blogs for the "more blogs" section
        let { data: additionalBlogs, error: moreBlogsError } = await supabase
          .from('blogs')
          .select('*')
          .order('date_posted', { ascending: false })
          .range(5, 20); // Fetch blogs after the first 5 for "more blogs"

        if (moreBlogsError) {
          console.error(moreBlogsError);
          return;
        }

        setFeaturedPosts(featuredBlogs);
        setMoreBlogs(additionalBlogs);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        // Add a slight delay to prevent flashing of skeletons
        setTimeout(() => setIsLoading(false), 500);
      }
    };

    fetchBlogs();
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
      // We'll let the Link handle navigation
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
      className="max-w-7xl md:mt-20 mt-12 mx-auto px-4 md:px-6 relative"
    >
      {/* Subtle decorative element - reduced to just one */}
      <motion.div 
        className="absolute top-20 right-10 w-24 h-24 rounded-full bg-[#326B3F]/10 blur-xl -z-10"
        style={{ 
          x: Math.sin(scrollY * 0.01) * 5,
          y: Math.cos(scrollY * 0.01) * 5
        }}
      ></motion.div>
      
      {/* Header Section - simplified */}
      <div className="text-center mb-16">
        <p className="text-[#326B3F] text-md mb-2">Blogs</p>
        <h1 className="text-2xl md:text-4xl font-medium mt-2">A Heading will come in about 5-6 words</h1>
        <p className="text-[#6a6a6a] mt-4 max-w-2xl mx-auto">A sub heading will come in about 10-15 words</p>
      </div>

      {/* Featured Section with image-focused card structure */}
      <section className="mb-20">
        <h2 className="text-2xl font-medium mb-6">Top Featured</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Main Featured Post - Image-focused card structure */}
          <div className="h-full">
            {isLoading ? (
              <FeaturedPostSkeleton />
            ) : featuredPosts[0] ? (
              <motion.div
                className={`group bg-white rounded-xl overflow-hidden shadow-lg h-full relative ${
                  touchedCardId === featuredPosts[0].id ? 'touched-card' : ''
                }`}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                onTouchStart={() => handleCardTouch(featuredPosts[0].id)}
                onTouchEnd={handleTouchEnd}
              >
                <div className="relative overflow-hidden h-full"> {/* Changed from fixed height to h-full */}
                  {/* Image with proper coverage to eliminate white bars */}
                  <Image
                    src={featuredPosts[0].image}
                    alt="Featured post"
                    width={800}
                    height={400}
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Elegant featured badge */}
                  <div className="absolute top-5 left-5 z-20">
                    <span className="bg-white/90 text-[#326B3F] text-xs tracking-wider uppercase font-semibold px-3 py-1 rounded">
                      Featured
                    </span>
                  </div>
                  
                  {/* Set a minimum height to ensure proper card proportions */}
                  <div className="w-full h-[400px]"></div> {/* This ensures minimum height while allowing full coverage */}
                  
                  {/* Refined gradient overlay with better fade - adjusted for touch */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent 
                    ${(touchedCardId === featuredPosts[0].id) ? 'opacity-70' : 'opacity-80 group-hover:opacity-70'} 
                    transition-opacity duration-500`}>
                  </div>
                  
                  {/* Content overlay with improved positioning and typography */}
                  <div className={`absolute bottom-0 left-0 right-0 p-7 transform transition-transform duration-500 
                    ${(touchedCardId === featuredPosts[0].id) ? 'translate-y-[-10px]' : 'group-hover:translate-y-[-10px]'}`}>
                    <div className="flex justify-between items-center mb-3 text-white/90">
                      <p className="text-sm font-light">{featuredPosts[0].author}</p>
                      <p className="text-sm font-light">{formatDate(featuredPosts[0].date_posted)}</p>
                    </div>
                    <h3 className="text-2xl font-medium text-white mb-3 leading-tight">{featuredPosts[0].title}</h3>
                    
                    {/* Description that becomes visible on hover/touch with elegant transition */}
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out 
                      ${(touchedCardId === featuredPosts[0].id) ? 'max-h-32' : 'max-h-0 group-hover:max-h-32'}`}>
                      <p className="text-white/90 text-sm mb-4 line-clamp-3">
                        {truncateDescription(featuredPosts[0].content, 150)}
                      </p>
                      <Link 
                        href={`/blog/${featuredPosts[0].slug}`} 
                        className="inline-flex items-center bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm transition-all duration-300 mt-2"
                      >
                        Read Article
                        <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  
                  {/* Elegant decorative element that appears on hover/touch */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#326B3F]/80 to-transparent transform 
                    ${(touchedCardId === featuredPosts[0].id) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'} 
                    transition-transform duration-500 ease-out`}>
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="text-center p-8 bg-white rounded-xl shadow-sm">No featured posts available</div>
            )}
          </div>

          {/* Right Side Grid - 2x2 Smaller Posts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
            {isLoading ? (
              // Show skeletons while loading
              Array(4).fill(0).map((_, index) => (
                <div key={`skeleton-${index}`}>
                  <SmallPostSkeleton />
                </div>
              ))
            ) : (
              // Show actual posts when loaded
              featuredPosts.slice(1, 5).map((post) => (
                <motion.div 
                  key={post.id}
                  className={`group bg-white rounded-xl overflow-hidden shadow-md h-full ${
                    touchedCardId === post.id ? 'touched-card' : ''
                  }`}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  onTouchStart={() => handleCardTouch(post.id)}
                  onTouchEnd={handleTouchEnd}
                >
                  <div className="relative overflow-hidden h-[200px]">
                    {/* Image */}
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={400}
                      height={200}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {/* Overlay gradient - visible before hover/touch */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent 
                      ${(touchedCardId === post.id) ? 'opacity-0' : 'group-hover:opacity-0'} 
                      transition-opacity duration-300`}>
                    </div>
                    
                    {/* Title and meta overlay at bottom - visible before hover/touch */}
                    <div className={`absolute bottom-0 left-0 right-0 p-4 text-white 
                      ${(touchedCardId === post.id) ? 'opacity-0' : 'group-hover:opacity-0'} 
                      transition-opacity duration-300`}>
                      <div className="flex justify-between items-center mb-1">
                        <p className="text-white/80 text-xs">{post.author}</p>
                        <p className="text-white/80 text-xs">{formatDate(post.date_posted)}</p>
                      </div>
                      <h3 className="text-sm font-medium">{post.title}</h3>
                    </div>
                    
                    {/* Full white overlay with black text - appears on hover/touch */}
                    <div className={`absolute inset-0 bg-white 
                      ${(touchedCardId === post.id) ? 'opacity-95' : 'opacity-0 group-hover:opacity-95'} 
                      transition-opacity duration-300 z-10 flex flex-col justify-center`}>
                      <div className={`p-4 transform 
                        ${(touchedCardId === post.id) ? 'translate-y-0' : 'translate-y-4 group-hover:translate-y-0'} 
                        transition-transform duration-300`}>
                        <h3 className="text-gray-900 font-semibold text-sm mb-2">{post.title}</h3>
                        <div className="flex justify-between items-center mb-2 text-xs text-gray-500">
                          <p>{post.author}</p>
                          <p>{formatDate(post.date_posted)}</p>
                        </div>
                        <p className="text-gray-700 mb-3 text-xs line-clamp-2">
                          {truncateDescription(post.content, 60)}
                        </p>
                        <Link 
                          href={`/blog/${post.slug}`} 
                          className="text-[#326B3F] text-xs font-medium inline-flex items-center hover:underline"
                        >
                          Read More
                          <svg className="ml-1 w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* More Blogs Section with image-focused card structure */}
      <section className="mb-20">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-medium">More Blogs</h2>
          
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {isLoading ? (
            // Show skeletons while loading
            Array(4).fill(0).map((_, index) => (
              <div key={`skeleton-more-${index}`}>
                <RegularPostSkeleton />
              </div>
            ))
          ) : (
            <>
              {/* Always show the first 4 blogs */}
              {moreBlogs.slice(0, 4).map((blog) => (
                <motion.div 
                  key={blog.id}
                  className={`group bg-white rounded-xl overflow-hidden shadow-md h-full ${
                    touchedCardId === blog.id ? 'touched-card' : ''
                  }`}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  onTouchStart={() => handleCardTouch(blog.id)}
                  onTouchEnd={handleTouchEnd}
                >
                  <div className="relative overflow-hidden h-full">
                    {/* Image */}
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      width={400}
                      height={250}
                      className="w-full h-[250px] object-cover"
                    />
                    
                    {/* Category tag if available */}
                    {blog.category && (
                      <div className="absolute top-3 right-3 z-20">
                        <span className="bg-white/80 text-[#326B3F] text-xs px-2 py-1 rounded-full">
                          {blog.category}
                        </span>
                      </div>
                    )}
                    
                    {/* Initial overlay with title - visible before hover */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent 
                      ${(touchedCardId === blog.id) ? 'opacity-0' : 'group-hover:opacity-0'} transition-opacity duration-300`}>
                      <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                        <div className="flex justify-between items-center mb-1">
                          <p className="text-white/80 text-xs">{blog.author}</p>
                          <p className="text-white/80 text-xs">{formatDate(blog.date_posted)}</p>
                        </div>
                        <h3 className="font-medium">{blog.title}</h3>
                      </div>
                    </div>
                    
                    {/* Full white overlay with black text - appears on hover */}
                    <div className={`absolute inset-0 bg-white 
                      ${(touchedCardId === blog.id) ? 'opacity-95' : 'opacity-0 group-hover:opacity-95'} 
                      transition-opacity duration-300 z-10 flex flex-col justify-center`}
                    >
                      <div className={`p-5 transform ${
                        (touchedCardId === blog.id) ? 'translate-y-0' : 'translate-y-4 group-hover:translate-y-0'
                      } transition-transform duration-300`}>
                        <h3 className="text-gray-900 font-semibold mb-3">{blog.title}</h3>
                        <div className="flex justify-between items-center mb-3 text-sm text-gray-500">
                          <p>{blog.author}</p>
                          <p>{formatDate(blog.date_posted)}</p>
                        </div>
                        <p className="text-gray-700 mb-4 text-sm line-clamp-3">
                          {truncateDescription(blog.content, 120)}
                        </p>
                        <Link 
                          href={`/blog/${blog.slug}`} 
                          className="text-[#326B3F] font-medium inline-flex items-center hover:underline"
                        >
                          Read More
                          <svg className="ml-1 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {/* Additional blogs with smooth height animation */}
              <AnimatePresence>
                {showAllBlogs && (
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
                    {moreBlogs.slice(4).map((blog) => (
                      <motion.div 
                        key={blog.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className={`group bg-white rounded-xl overflow-hidden shadow-md h-full ${
                          touchedCardId === blog.id ? 'touched-card' : ''
                        }`}
                        whileHover={{ y: -5 }}
                        onTouchStart={() => handleCardTouch(blog.id)}
                        onTouchEnd={handleTouchEnd}
                      >
                        {/* Same content as other blog cards */}
                        <div className="relative overflow-hidden h-full">
                          {/* Image */}
                          <Image
                            src={blog.image}
                            alt={blog.title}
                            width={400}
                            height={250}
                            className="w-full h-[250px] object-cover"
                          />
                          
                          {/* Category tag if available */}
                          {blog.category && (
                            <div className="absolute top-3 right-3 z-20">
                              <span className="bg-white/80 text-[#326B3F] text-xs px-2 py-1 rounded-full">
                                {blog.category}
                              </span>
                            </div>
                          )}
                          
                          {/* Initial overlay with title - visible before hover */}
                          <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent 
                            ${(touchedCardId === blog.id) ? 'opacity-0' : 'group-hover:opacity-0'} transition-opacity duration-300`}>
                            <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                              <div className="flex justify-between items-center mb-1">
                                <p className="text-white/80 text-xs">{blog.author}</p>
                                <p className="text-white/80 text-xs">{formatDate(blog.date_posted)}</p>
                              </div>
                              <h3 className="font-medium">{blog.title}</h3>
                            </div>
                          </div>
                          
                          {/* Full white overlay with black text - appears on hover */}
                          <div className={`absolute inset-0 bg-white 
                            ${(touchedCardId === blog.id) ? 'opacity-95' : 'opacity-0 group-hover:opacity-95'} 
                            transition-opacity duration-300 z-10 flex flex-col justify-center`}
                          >
                            <div className={`p-5 transform ${
                              (touchedCardId === blog.id) ? 'translate-y-0' : 'translate-y-4 group-hover:translate-y-0'
                            } transition-transform duration-300`}>
                              <h3 className="text-gray-900 font-semibold mb-3">{blog.title}</h3>
                              <div className="flex justify-between items-center mb-3 text-sm text-gray-500">
                                <p>{blog.author}</p>
                                <p>{formatDate(blog.date_posted)}</p>
                              </div>
                              <p className="text-gray-700 mb-4 text-sm line-clamp-3">
                                {truncateDescription(blog.content, 120)}
                              </p>
                              <Link 
                                href={`/blog/${blog.slug}`} 
                                className="text-[#326B3F] font-medium inline-flex items-center hover:underline"
                              >
                                Read More
                                <svg className="ml-1 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <path d="M5 12h14M12 5l7 7-7 7" />
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
        
        {/* Show More/Less Button - enhanced with smooth animations */}
        {!isLoading && moreBlogs.length > 4 && (
          <div className="flex justify-center mt-12 mb-12">
            <motion.button 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-lg hover:shadow-xl transition-all duration-500 font-medium text-base bg-[#326B3F] text-white hover:-translate-y-1"
              onClick={toggleShowAllBlogs}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {showAllBlogs ? 'Show Less' : 'Explore All'}
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

export default BlogLayout;
