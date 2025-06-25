"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '@/lib/supabaseClient';

// Fallback image URL (ensure this exists in /public)
const FALLBACK_IMAGE = '/fallback-image.jpg';

// Skeleton components for loading state
const FeaturedPostSkeleton = () => (
  <div className="animate-pulse">
    <div className="rounded-lg bg-gray-200 w-full h-[225px] sm:h-[300px] lg:h-[360px] mb-4"></div>
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
    <div className="rounded-lg bg-gray-200 w-full h-[112.5px] sm:h-[150px] mb-3"></div>
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
    <div className="rounded-lg bg-gray-200 w-full h-[112.5px] sm:h-[150px] mb-4"></div>
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
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [moreBlogs, setMoreBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState('newest');
  const [scrollY, setScrollY] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [touchedCardId, setTouchedCardId] = useState(null);
  const postsPerPage = 12;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  // Track scroll position for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Filter blogs based on date
  const filterBlogsByDate = (blogs, filter) => {
    const now = new Date();
    let filtered = [...blogs];

    switch (filter) {
      case 'last-week':
        const lastWeek = new Date(now);
        lastWeek.setDate(now.getDate() - 7);
        filtered = blogs.filter(blog => new Date(blog.date_posted) >= lastWeek);
        break;
      case 'last-month':
        const lastMonth = new Date(now);
        lastMonth.setMonth(now.getMonth() - 1);
        filtered = blogs.filter(blog => new Date(blog.date_posted) >= lastMonth);
        break;
      case 'this-year':
        const thisYear = new Date(now.getFullYear(), 0, 1);
        filtered = blogs.filter(blog => new Date(blog.date_posted) >= thisYear);
        break;
      case 'newest':
        filtered.sort((a, b) => new Date(b.date_posted) - new Date(a.date_posted));
        break;
      case 'oldest':
        filtered.sort((a, b) => new Date(a.date_posted) - new Date(b.date_posted));
        break;
      default:
        filtered.sort((a, b) => new Date(b.date_posted) - new Date(a.date_posted));
    }

    return filtered;
  };

  // Handle sorting/filtering change
  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortOrder(value);
    setCurrentPage(1);
    const filtered = filterBlogsByDate(moreBlogs, value);
    setFilteredBlogs(filtered);
  };

  // Fetch data from Supabase
  useEffect(() => {
    const fetchBlogs = async () => {
      setIsLoading(true);
      try {
        // Fetch featured blogs
        let { data: featuredBlogs, error } = await supabase
          .from('blogs')
          .select('*')
          .order('date_posted', { ascending: false })
          .limit(5);

        if (error) {
          console.error('Error fetching featured blogs:', error);
          return;
        }

        // Fetch additional blogs
        let { data: additionalBlogs, error: moreBlogsError } = await supabase
          .from('blogs')
          .select('*')
          .order('date_posted', { ascending: false });

        if (moreBlogsError) {
          console.error('Error fetching additional blogs:', moreBlogsError);
          return;
        }

        // Sanitize image fields
        const sanitizedFeaturedBlogs = featuredBlogs.map(blog => ({
          ...blog,
          image: blog.image && blog.image.trim() !== '' && blog.image !== 'undefined' ? blog.image : FALLBACK_IMAGE,
        }));
        const sanitizedAdditionalBlogs = additionalBlogs.map(blog => ({
          ...blog,
          image: blog.image && blog.image.trim() !== '' && blog.image !== 'undefined' ? blog.image : FALLBACK_IMAGE,
        }));

        setFeaturedPosts(sanitizedFeaturedBlogs);
        setMoreBlogs(sanitizedAdditionalBlogs);
        setFilteredBlogs(sanitizedAdditionalBlogs);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setTimeout(() => setIsLoading(false), 500);
      }
    };

    fetchBlogs();
  }, []);

  // Update filtered blogs when sortOrder changes
  useEffect(() => {
    const filtered = filterBlogsByDate(moreBlogs, sortOrder);
    setFilteredBlogs(filtered);
    setCurrentPage(1);
  }, [moreBlogs, sortOrder]);

  // Truncate description
  const truncateDescription = (text, length = 150) => {
    if (text && text.length > length) {
      return `${text.substring(0, length)}...`;
    }
    return text || '';
  };

  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  // Handle touch on cards for mobile
  const handleCardTouch = (id) => {
    if (touchedCardId === id) {
      return;
    }
    setTouchedCardId(id);
  };

  const handleTouchEnd = (e) => {
    if (!e.target.closest('a')) {
      setTimeout(() => setTouchedCardId(null), 300);
    }
  };

  // Slugify function
  function slugify(text) {
    return text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/[\s\W-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  // Pagination logic
  const totalPages = Math.ceil(filteredBlogs.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentBlogs = filteredBlogs.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 md:mt-20 relative"
    >
      {/* Decorative element */}
      <motion.div
        className="absolute top-20 right-10 w-24 h-24 rounded-full bg-[#326B3F]/10 blur-xl -z-10 hidden md:block"
        style={{
          x: Math.sin(scrollY * 0.01) * 5,
          y: Math.cos(scrollY * 0.01) * 5,
        }}
      ></motion.div>

      {/* Header Section */}
      <div className="text-center mb-12 sm:mb-16">
        <p className="text-[#326B3F] text-sm sm:text-md mb-2">Blogs</p>
        <h2 className="text-xl sm:text-2xl md:text-4xl font-medium mt-2">Blog Highlights</h2>
        <p className="text-[#6a6a6a] mt-4 text-sm sm:text-base max-w-2xl mx-auto">
          Discover our latest insights and updates
        </p>
      </div>

      {/* Featured Section */}
      <section className="mb-12 sm:mb-16 md:mb-20">
        <h2 className="text-xl sm:text-2xl font-medium mb-6">Top Featured</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Main Featured Post */}
          <div className="h-full">
            {isLoading ? (
              <FeaturedPostSkeleton />
            ) : featuredPosts[0] ? (
              <Link href={`/blog/${slugify(featuredPosts[0].slug)}`} className="block">
                <motion.div
                  className={`group bg-white rounded-xl overflow-hidden shadow-lg h-full relative ${
                    touchedCardId === featuredPosts[0].id ? 'touched-card' : ''
                  }`}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  onTouchStart={() => handleCardTouch(featuredPosts[0].id)}
                  onTouchEnd={handleTouchEnd}
                >
                  <div className="relative overflow-hidden w-full aspect-video">
                    <Image
                      src={featuredPosts[0].image}
                      alt={featuredPosts[0].title || 'Featured post'}
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      priority
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                    />
                    <div className="absolute top-5 left-5 z-20">
                      <span className="bg-white/90 text-[#326B3F] text-xs tracking-wider uppercase font-semibold px-3 py-1 rounded">
                        Featured
                      </span>
                    </div>
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent
                        ${
                          touchedCardId === featuredPosts[0].id
                            ? 'opacity-70'
                            : 'opacity-80 group-hover:opacity-70'
                        }
                        transition-opacity duration-500`}
                    ></div>
                    <div
                      className={`absolute bottom-0 left-0 right-0 p-5 sm:p-7 transform transition-transform duration-500
                        ${
                          touchedCardId === featuredPosts[0].id
                            ? 'translate-y-[-10px]'
                            : 'group-hover:translate-y-[-10px]'
                        }`}
                    >
                      <div className="flex justify-between items-center mb-3 text-white/90">
                        <p className="text-xs sm:text-sm font-light">{featuredPosts[0].author}</p>
                        <p className="text-xs sm:text-sm font-light">{formatDate(featuredPosts[0].date_posted)}</p>
                      </div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-white mb-3 leading-tight">
                        {featuredPosts[0].title}
                      </h3>
                      <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out
                          ${
                            touchedCardId === featuredPosts[0].id
                              ? 'max-h-32'
                              : 'max-h-0 group-hover:max-h-32'
                          }`}
                      >
                        <p className="text-white/90 text-xs sm:text-sm mb-4 line-clamp-3">
                          {truncateDescription(featuredPosts[0].content, 150)}
                        </p>
                        <span className="inline-flex items-center bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs sm:text-sm transition-all duration-300 mt-2">
                          Read Article
                          <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M5 12h14M15 12l-7-7 7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div
                      className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#326B3F]/80 to-transparent transform
                        ${
                          touchedCardId === featuredPosts[0].id
                            ? 'scale-x-100'
                            : 'scale-x-0 group-hover:scale-x-100'
                        }
                        transition-transform duration-500 ease-out`}
                    ></div>
                  </div>
                </motion.div>
              </Link>
            ) : (
              <div className="text-center p-8 bg-white rounded-xl shadow-sm">No featured posts available</div>
            )}
          </div>

          {/* Right Side Grid - 2x2 Smaller Posts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 h-full">
            {isLoading ? (
              Array(4)
                .fill(0)
                .map((_, index) => (
                  <div key={`skeleton-${index}`}>
                    <SmallPostSkeleton />
                  </div>
                ))
            ) : (
              featuredPosts.slice(1, 5).map((post) => (
                <Link key={post.id} href={`/blog/${slugify(post.slug)}`} className="block">
                  <motion.div
                    className={`group bg-white rounded-xl overflow-hidden shadow-md h-full ${
                      touchedCardId === post.id ? 'touched-card' : ''
                    }`}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                    onTouchStart={() => handleCardTouch(post.id)}
                    onTouchEnd={handleTouchEnd}
                  >
                    <div className="relative overflow-hidden w-full aspect-video">
                      <Image
                        src={post.image}
                        alt={post.title || 'Blog post'}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent
                          ${touchedCardId === post.id ? 'opacity-0' : 'group-hover:opacity-0'}
                          transition-opacity duration-300`}
                      ></div>
                      <div
                        className={`absolute bottom-0 left-0 right-0 p-4 text-white
                          ${touchedCardId === post.id ? 'opacity-0' : 'group-hover:opacity-0'}
                          transition-opacity duration-300`}
                      >
                        <div className="flex justify-between items-center mb-1">
                          <p className="text-white/80 text-xs">{post.author}</p>
                          <p className="text-white/80 text-xs">{formatDate(post.date_posted)}</p>
                        </div>
                        <h3 className="text-sm font-medium">{post.title}</h3>
                      </div>
                      <div
                        className={`absolute inset-0 bg-white
                          ${touchedCardId === post.id ? 'opacity-95' : 'opacity-0 group-hover:opacity-95'}
                          transition-opacity duration-300 z-10 flex flex-col justify-center`}
                      >
                        <div
                          className={`p-4 transform
                            ${
                              touchedCardId === post.id
                                ? 'translate-y-0'
                                : 'translate-y-4 group-hover:translate-y-0'
                            }
                            transition-transform duration-300`}
                        >
                          <h3 className="text-gray-900 font-semibold text-sm mb-2">{post.title}</h3>
                          <div className="flex justify-between items-center mb-2 text-xs text-gray-500">
                            <p>{post.author}</p>
                            <p>{formatDate(post.date_posted)}</p>
                          </div>
                          <p className="text-gray-700 mb-3 text-xs line-clamp-2">
                            {truncateDescription(post.content, 60)}
                          </p>
                          <span className="text-[#326B3F] text-xs font-medium inline-flex items-center hover:underline">
                            Read More
                            <svg
                              className="ml-1 w-3 h-3"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))
            )}
          </div>
        </div>
      </section>

      {/* More Blogs Section */}
      <section className="mb-12 sm:mb-16 md:mb-20">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <h2 className="text-xl sm:text-2xl font-medium">More Blogs</h2>
          {!isLoading && (
            <select
              className="border rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-[#326B3F] w-full sm:w-auto"
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

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {isLoading ? (
            Array(12)
              .fill(0)
              .map((_, index) => (
                <div key={`skeleton-more-${index}`}>
                  <RegularPostSkeleton />
                </div>
              ))
            ) : (
              currentBlogs.map((blog) => (
                <Link key={blog.id} href={`/blog/${slugify(blog.slug)}`} className="block">
                  <motion.div
                    variants={itemVariants}
                    className={`group bg-white rounded-xl overflow-hidden shadow-md h-full ${
                      touchedCardId === blog.id ? 'touched-card' : ''
                    }`}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                    onTouchStart={() => handleCardTouch(blog.id)}
                    onTouchEnd={handleTouchEnd}
                  >
                    <div className="relative overflow-hidden w-full aspect-video">
                      <Image
                        src={blog.image}
                        alt={blog.title || 'Blog post'}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                      />
                      {blog.category && (
                        <div className="absolute top-3 right-3 z-20">
                          <span className="bg-white/80 text-[#326B3F] text-xs px-2 py-1 rounded-full">
                            {blog.category}
                          </span>
                        </div>
                      )}
                      <div
                        className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent
                          ${touchedCardId === blog.id ? 'opacity-0' : 'group-hover:opacity-0'}
                          transition-opacity duration-300`}
                      >
                        <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                          <div className="flex justify-between items-center mb-1">
                            <p className="text-white/80 text-xs">{blog.author}</p>
                            <p className="text-white/80 text-xs">{formatDate(blog.date_posted)}</p>
                          </div>
                          <h3 className="font-medium text-sm sm:text-base">{blog.title}</h3>
                        </div>
                      </div>
                      <div
                        className={`absolute inset-0 bg-white
                          ${touchedCardId === blog.id ? 'opacity-95' : 'opacity-0 group-hover:opacity-95'}
                          transition-opacity duration-300 z-10 flex flex-col justify-center`}
                      >
                        <div
                          className={`p-5 transform
                            ${
                              touchedCardId === blog.id
                                ? 'translate-y-0'
                                : 'translate-y-4 group-hover:translate-y-0'
                            }
                            transition-transform duration-300`}
                        >
                          <h3 className="text-gray-900 font-semibold text-sm sm:text-base mb-3">{blog.title}</h3>
                          <div className="flex justify-between items-center mb-3 text-xs text-gray-500">
                            <p>{blog.author}</p>
                            <p>{formatDate(blog.date_posted)}</p>
                          </div>
                          <p className="text-gray-700 mb-4 text-xs sm:text-sm line-clamp-3">
                            {truncateDescription(blog.content, 120)}
                          </p>
                          <span className="text-[#326B3F] font-medium inline-flex items-center hover:underline text-xs sm:text-sm">
                            Read More
                            <svg
                              className="ml-1 w-4 h-4"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))
            )}
        </motion.div>

        {/* Pagination Controls */}
        {!isLoading && filteredBlogs.length > postsPerPage && (
          <div className="flex justify-center mt-8 sm:mt-12 mb-12 space-x-2">
            <motion.button
              className={`px-3 sm:px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                currentPage === 1
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  : 'bg-[#326B3F] text-white hover:bg-[#2a5a34]'
              }`}
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              whileHover={{ scale: currentPage === 1 ? 1 : 1.05 }}
              whileTap={{ scale: currentPage === 1 ? 1 : 0.95 }}
            >
              Previous
            </motion.button>
            {Array.from({ length: totalPages }, (_, index) => (
              <motion.button
                key={index + 1}
                className={`px-3 sm:px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  currentPage === index + 1
                    ? 'bg-[#326B3F] text-white'
                    : 'bg-white text-[#326B3F] border border-[#326B3F] hover:bg-[#326B3F]/10'
                }`}
                onClick={() => handlePageChange(index + 1)}
                disabled={currentPage === index + 1}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {index + 1}
              </motion.button>
            ))}
            <motion.button
              className={`px-3 sm:px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                currentPage === totalPages
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  : 'bg-[#326B3F] text-white hover:bg-[#2a5a34]'
              }`}
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              whileHover={{ scale: currentPage === totalPages ? 1 : 1.05 }}
              whileTap={{ scale: currentPage === totalPages ? 1 : 0.95 }}
            >
              Next
            </motion.button>
          </div>
        )}
      </section>

      {/* CSS for touch states and responsiveness */}
      <style jsx global>{`
        .touched-card {
          transform: translateY(-5px);
          transition: transform 0.3s ease;
        }
        .group img {
          transform: scale(1);
          transition: transform 0.5s ease;
        }
        .group:hover img {
          transform: scale(1.05);
        }
        h3 {
          font-size: clamp(0.875rem, 2.5vw, 1rem);
        }
        @media (max-width: 640px) {
          .grid {
            gap: 1rem;
          }
          .p-5 {
            padding: 1rem;
          }
          .aspect-video {
            aspect-ratio: 16/9;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default BlogLayout;