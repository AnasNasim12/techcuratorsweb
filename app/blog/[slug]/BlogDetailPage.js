'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { createClient } from '@supabase/supabase-js';
import Link from 'next/link';
import Image from 'next/image';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const BlogDetailPage = ({ blog }) => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState({ submitted: false, error: null });
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [isLoadingBlogs, setIsLoadingBlogs] = useState(true);
  const [blogError, setBlogError] = useState(null);
  const [activeHeading, setActiveHeading] = useState('');

  const contentRef = useRef(null);

  // Fetch recent blogs from Supabase
  useEffect(() => {
    const fetchRecentBlogs = async () => {
      try {
        setIsLoadingBlogs(true);
        const { data, error } = await supabase
          .from('blogs')
          .select('id, title, slug')
          .neq('id', blog.id)
          .order('date_posted', { ascending: false })
          .limit(3);

        if (error) throw error;
        setRecentBlogs(data || []);
      } catch (err) {
        console.error('Error fetching recent blogs:', err);
        setBlogError('Failed to load related blogs.');
      } finally {
        setIsLoadingBlogs(false);
      }
    };

    fetchRecentBlogs();
  }, [blog.id]);

  // Function to generate FAQ JSON-LD
  const generateFaqJsonLd = (faqs) => {
    if (!faqs || !faqs.length) return '';
    const faqEntities = faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    }));
    return JSON.stringify(
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqEntities,
      },
      null,
      2
    );
  };

  // Parse FAQs with improved error handling
  let faqs = [];
  if (Array.isArray(blog.faqs)) {
    faqs = blog.faqs.filter((f) => f.question && f.answer);
  } else if (typeof blog.faqs === 'string' && blog.faqs.trim()) {
    try {
      const parsed = JSON.parse(blog.faqs);
      if (Array.isArray(parsed)) {
        faqs = parsed.filter((f) => f.question && f.answer);
      }
    } catch (err) {
      console.error('Error parsing FAQs:', err);
    }
  }

  // Extract h2 headings from markdown with better ID generation
  const headings = useMemo(() => {
    const lines = (blog.description || '').split('\n');
    const headingsList = [];
    let headingCounter = 0;

    lines.forEach((line, idx) => {
      const match = line.match(/^(#{2})\s+(.*)/);
      if (match) {
        headingCounter++;
        const level = match[1].length;
        const text = match[2].trim();
        const id = `heading-${headingCounter}-${text
          .toLowerCase()
          .replace(/[^a-z0-9\s-]/g, '')
          .replace(/\s+/g, '-')
          .replace(/-+/g, '-')
          .replace(/^-|-$/g, '')}`;

        headingsList.push({
          id,
          level,
          text,
          line: idx,
        });
      }
    });

    return headingsList;
  }, [blog.description]);

  // Map of heading id to ref
  const headingRefs = useRef({});

  // Custom heading renderer that properly maps IDs
  const createHeadingRenderer = (level) => {
    const HeadingRenderer = ({ children, ...props }) => {
      const text = String(children);
      const heading = headings.find((h) => h.text === text && h.level === level);
      const id = heading ? heading.id : `fallback-${text.toLowerCase().replace(/\s+/g, '-')}`;

      const HeadingTag = level === 1 ? 'h1' : level === 2 ? 'h2' : level === 3 ? 'h3' : 'h4';

      return React.createElement(
        HeadingTag,
        {
          id,
          ref: (el) => {
            if (el && id) {
              headingRefs.current[id] = el;
            }
          },
          className: `${level === 1 ? 'text-3xl' : level === 2 ? 'text-2xl' : 'text-xl'} font-bold my-4 scroll-mt-32 text-gray-900`,
          ...props,
        },
        children
      );
    };

    HeadingRenderer.displayName = `HeadingRenderer${level}`;
    return HeadingRenderer;
  };

  // Scroll to heading with better positioning
  const scrollToHeading = (id) => {
    const element = headingRefs.current[id] || document.getElementById(id);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
      setActiveHeading(id);
    }
  };

  // Intersection Observer to track active heading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setActiveHeading(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-100px 0px -80% 0px',
        threshold: 0,
      }
    );

    const headingElements = headings.map((h) => document.getElementById(h.id)).filter(Boolean);
    headingElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [headings]);

  // Scroll and progress handling
  useEffect(() => {
    setTimeout(() => setFadeIn(true), 100);
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setShowScrollButton(scrollTop > 300);

      if (contentRef.current) {
        const totalHeight = document.body.scrollHeight - window.innerHeight;
        const progress = (scrollTop / totalHeight) * 100;
        setReadingProgress(Math.min(progress, 100));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitted: false, error: null });

    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        });

      if (error) throw error;

      setFormStatus({ submitted: true, error: null });
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus({ submitted: false, error: null }), 3000);
    } catch (err) {
      console.error('Error submitting form:', err);
      setFormStatus({ submitted: false, error: 'Failed to send message. Please try again.' });
    }
  };

  const readTime = blog.read_time || Math.ceil((blog.description?.split(' ').length || 200) / 200);

  return (
    <div className="bg-gray-50 min-h-screen relative">
      {/* Reading progress bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-[#326B3F] z-50 transition-all duration-300 ease-out"
        style={{ width: `${readingProgress}%` }}
      />

      {/* Header Color Block with Breadcrumbs and Metadata */}
      <div className="relative h-96 bg-[#326B3F] mb-16 flex items-end">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#326B3F] opacity-70"></div>
        <div className="relative z-10 bottom-0 left-0 right-0 p-8 text-white w-full">
          <div className="max-w-7xl mx-auto">
            {/* Breadcrumbs */}
            <nav className="mb-4 text-sm flex items-center gap-2">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <span className="text-gray-300">/</span>
              <Link href="/blog" className="hover:underline">
                Blog
              </Link>
              <span className="text-gray-300">/</span>
              <span className="text-gray-300">{blog.title}</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">{blog.title}</h1>
            <div className="flex flex-col gap-2 text-gray-200">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center mr-3">
                  <span className="text-gray-600 font-medium">{blog.author?.charAt(0).toUpperCase()}</span>
                </div>
                <span className="font-medium">Author: {blog.author || 'Tushar Pol'}</span>
              </div>
              {blog.contributor && <span>Contributor: {blog.contributor || 'Alex Lindley'}</span>}
              <div className="flex items-center gap-3">
                <span>{readTime} min read</span>
                <span>•</span>
                <span>{formatDate(blog.date_posted || '2025-06-06')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="w-full px-2 lg:px-4 transition-opacity duration-1000 ease-out grid grid-cols-1 lg:grid-cols-12 gap-4"
        style={{ opacity: fadeIn ? 1 : 0 }}
      >
        {/* Left: Table of Contents */}
        <aside className="lg:col-span-2 lg:pl-2">
          <div className="sticky top-28">
            {headings.length > 0 && (
              <>
                <h2 className="text-xl font-bold my-3 text-gray-900">Table of Contents</h2>
                <div className="flex flex-col gap-1 bg-white rounded-lg shadow p-3">
                  {headings.map((heading) => (
                    <button
                      key={heading.id}
                      onClick={() => scrollToHeading(heading.id)}
                      className={`text-left px-2 py-1 rounded text-sm font-medium transition-all duration-200 ${
                        activeHeading === heading.id
                          ? 'bg-[#326B3F] text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-[#e6f2ea] hover:text-[#326B3F]'
                      }`}
                      style={{ marginLeft: `${(heading.level - 2) * 8}px` }}
                    >
                      {heading.text}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </aside>

        {/* Middle: Blog Content */}
        <div className="lg:col-span-8 px-4">
          <div ref={contentRef}>
            <div className="prose prose-xl max-w-none text-gray-700">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: createHeadingRenderer(1),
                  h2: createHeadingRenderer(2),
                  h3: createHeadingRenderer(3),
                  h4: createHeadingRenderer(4),
                  h5: createHeadingRenderer(5),
                  h6: createHeadingRenderer(6),
                  p: ({ node, children, ...props }) => {
                    // Check if children include a <figure> element
                    const hasFigure = React.Children.toArray(children).some(
                      (child) => React.isValidElement(child) && child.type === 'figure'
                    );
                    // If there's a <figure>, render children without <p> wrapper
                    return hasFigure ? (
                      <>{children}</>
                    ) : (
                      <p className="my-4 text-lg leading-relaxed" {...props}>
                        {children}
                      </p>
                    );
                  },
                  a: ({ node, ...props }) => (
                    <a
                      className="text-blue-500 hover:underline"
                      {...props}
                      target="_blank"
                      rel={props.title === 'nofollow' ? 'nofollow' : 'noopener noreferrer'}
                    />
                  ),
                  blockquote: ({ node, ...props }) => (
                    <blockquote className="border-l-4 border-gray-300 pl-4 italic my-5 text-lg" {...props} />
                  ),
                  code: ({ node, ...props }) => <code className="bg-gray-50 p-1 rounded" {...props} />,
                  pre: ({ node, children, ...props }) => (
                    <pre className="bg-gray-50 p-4 rounded-lg my-5 overflow-auto" {...props}>
                      {children}
                    </pre>
                  ),
                  table: ({ node, ...props }) => (
                    <table className="border-collapse border border-gray-300 my-6 w-full" {...props} />
                  ),
                  thead: ({ node, ...props }) => <thead className="bg-gray-100" {...props} />,
                  tbody: ({ node, ...props }) => <tbody {...props} />,
                  tr: ({ node, ...props }) => <tr className="border border-gray-300" {...props} />,
                  th: ({ node, ...props }) => (
                    <th className="border border-gray-300 px-4 py-2 bg-gray-100 font-semibold text-left" {...props} />
                  ),
                  td: ({ node, ...props }) => <td className="border border-gray-300 px-4 py-2" {...props} />,
                  del: ({ node, ...props }) => <del className="text-gray-500" {...props} />,
                  ul: ({ node, ...props }) => <ul className="list-disc ml-6 my-4" {...props} />,
                  ol: ({ node, ...props }) => <ol className="list-decimal ml-6 my-4" {...props} />,
                  li: ({ node, ...props }) => <li className="my-1" {...props} />,
                  img: ({ node, src, alt, ...props }) => (
                    <figure className="flex justify-center my-6">
                      <Image
                        src={src || ''}
                        alt={alt || ''}
                        width={800}
                        height={400}
                        className="max-w-full h-auto rounded-lg shadow-md"
                        style={{ maxWidth: '100%', height: 'auto' }}
                        loading="lazy"
                        {...props}
                      />
                    </figure>
                  ),
                }}
              >
                {blog.description?.replace(/\n/g, '\n') || ''}
              </ReactMarkdown>
            </div>

            {/* Tags */}
            {blog.tags?.length > 0 && (
              <div className="mt-10 pt-6 border-t border-gray-200">
                <h2 className="text-2xl font-bold my-4 text-gray-900">Topics</h2>
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold cursor-pointer hover:bg-blue-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Footer */}
            <div className="mt-12 mb-12 flex justify-center">
              <div className="flex items-center text-gray-500 text-sm">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Published on {formatDate(blog.date_posted || '2025-06-06')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <aside className="lg:col-span-2 lg:pr-2">
          <div className="sticky top-28 space-y-6 w-full">
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold my-3 text-gray-900">Get in Touch</h2>
              {formStatus.submitted ? (
                <p className="text-green-600 text-sm">Thank you for your submission!</p>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  {formStatus.error && <p className="text-red-600 text-sm">{formStatus.error}</p>}
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#326B3F] focus:ring-[#326B3F] text-sm"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#326B3F] focus:ring-[#326B3F] text-sm"
                      placeholder="Your email"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleFormChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#326B3F] focus:ring-[#326B3F] text-sm"
                      placeholder="Your message"
                      rows="4"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#326B3F] text-white px-3 py-2 rounded-md hover:bg-[#2a5a33] transition text-sm"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </aside>
      </div>

      {/* FAQ Section */}
      {faqs.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 mt-12 mb-10">
          <h2 className="text-xl font-bold my-3 text-[#326B3F]">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-sm p-4">
                <h2 className="text-lg font-semibold my-2 text-gray-900">
                  Q{idx + 1}. {faq.question}
                </h2>
                <p className="text-gray-700 text-base">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Related Blogs Section */}
      <div className="max-w-7xl mx-auto px-4 mt-12 mb-10">
        <h2 className="text-xl font-bold my-3 text-[#326B3F]">Related Blogs</h2>
        {isLoadingBlogs ? (
          <div className="flex flex-col gap-4">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="p-4 bg-gray-100 rounded-lg animate-pulse">
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        ) : blogError ? (
          <p className="text-red-600 text-sm">{blogError}</p>
        ) : recentBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recentBlogs.map((recentBlog) => (
              <Link
                key={recentBlog.id}
                href={`/blog/${recentBlog.slug}`}
                className="block p-4 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition"
              >
                <h2 className="text-lg font-semibold my-2 text-gray-900">{recentBlog.title}</h2>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-gray-600 text-base">No related blogs available.</p>
        )}
      </div>

      {/* FAQ JSON-LD Script for SEO */}
      {faqs.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: generateFaqJsonLd(faqs) }} />
      )}

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 p-3 rounded-full bg-[#326B3F] text-white shadow-lg transition-all duration-300 hover:bg-[#2a5a33] hover:scale-110 ${
          showScrollButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
};

export default BlogDetailPage;