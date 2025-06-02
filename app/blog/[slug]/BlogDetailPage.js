// /app/blog/[slug]/BlogDetailPage.js
'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const BlogDetailPage = ({ blog }) => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);

  const contentRef = useRef(null);

  // Extract headings and their line numbers from the markdown description
  const headings = useMemo(() => {
    const lines = (blog.description || '').split('\n');
    let count = {};
    return lines
      .map((line, idx) => {
        const match = line.match(/^(#{1,3})\s+(.*)/);
        if (match) {
          // Ensure unique IDs for duplicate headings
          const base = match[2].replace(/\s+/g, '-').toLowerCase();
          count[base] = (count[base] || 0) + 1;
          const id = `${base}-${count[base]}`;
          return {
            id,
            level: match[1].length,
            text: match[2],
            line: idx,
          };
        }
        return null;
      })
      .filter(Boolean);
  }, [blog.description]);

  // Map of heading id to ref
  const headingRefs = useRef({});

  // Custom heading renderer to add ids and refs
  const HeadingRenderer = (level) => {
    const Component = (props) => {
      const heading = headings.find(
        (h) => h.text === String(props.children) && h.level === level
      );
      const id = heading ? heading.id : undefined;
      return React.createElement(
        `h${level}`,
        {
          id,
          ref: (el) => {
            if (id) headingRefs.current[id] = el;
          },
          className:
            level === 1
              ? 'text-3xl font-bold my-4 scroll-mt-32'
              : level === 2
              ? 'text-2xl font-bold my-3 scroll-mt-32'
              : 'text-xl font-bold my-2 scroll-mt-32',
          ...props,
        },
        props.children
      );
    };
    Component.displayName = `HeadingRenderer${level}`;
    return Component;
  };

  // Scroll to heading when TOC button is clicked
  const scrollToHeading = (id) => {
    const el = headingRefs.current[id];
    if (el) {
      // Adjust scroll offset if you have a fixed header (change 80 if needed)
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

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
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="bg-gray-50 min-h-screen relative">
      {/* Reading progress bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-[#326B3F] z-50 transition-all duration-300 ease-out"
        style={{ width: `${readingProgress}%` }}
      />

      {/* Header Color Block (replaces image) */}
      <div className="relative h-96 bg-[#326B3F] mb-16 flex items-end">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#326B3F] opacity-70"></div>
        <div className="relative z-10 bottom-0 left-0 right-0 p-8 text-white w-full">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">{blog.title}</h1>
            <div className="flex items-center text-gray-200 mb-6">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center mr-3">
                  <span className="text-gray-600 font-medium">{blog.author?.charAt(0).toUpperCase()}</span>
                </div>
                <span className="font-medium">{blog.author}</span>
              </div>
              <span className="mx-3">•</span>
              <span>{formatDate(blog.date_posted)}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 transition-opacity duration-1000 ease-out flex flex-col md:flex-row gap-8"
           style={{ opacity: fadeIn ? 1 : 0 }}>
        {/* TOC Sidebar */}
        {headings.length > 0 && (
          <aside className="hidden md:block md:w-1/4">
            <div className="sticky top-28">
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3 text-gray-700">Contents</h3>
                <div className="flex flex-col gap-2">
                  {headings.map((heading) => (
                    <button
                      key={heading.id}
                      onClick={() => scrollToHeading(heading.id)}
                      className="text-left px-2 py-1 rounded text-sm font-medium transition-colors bg-gray-100 text-gray-700 hover:bg-[#e6f2ea]"
                      style={{ marginLeft: `${(heading.level - 1) * 12}px` }}
                    >
                      {heading.text}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        )}

        {/* Blog Content */}
        <div ref={contentRef} className="flex-1">
          <div className="prose prose-lg max-w-none text-gray-700">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: HeadingRenderer(1),
                h2: HeadingRenderer(2),
                h3: HeadingRenderer(3),
                p: ({ node, ...props }) => <p className="my-4" {...props} />,
                a: ({ node, ...props }) => <a className="text-blue-600 hover:underline" {...props} />,
                blockquote: ({ node, ...props }) => (
                  <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4" {...props} />
                ),
                code: ({ node, ...props }) => <code className="bg-gray-100 p-1 rounded" {...props} />,
                pre: ({ node, ...props }) => (
                  <pre className="bg-gray-100 p-4 rounded my-4 overflow-auto" {...props} />
                ),
                table: ({ node, ...props }) => <table className="table-auto my-6 w-full" {...props} />,
                thead: ({ node, ...props }) => <thead className="bg-gray-100" {...props} />,
                tbody: ({ node, ...props }) => <tbody {...props} />,
                tr: ({ node, ...props }) => <tr className="border-b" {...props} />,
                th: ({ node, ...props }) => <th className="px-4 py-2 text-left" {...props} />,
                td: ({ node, ...props }) => <td className="px-4 py-2" {...props} />,
                del: ({ node, ...props }) => <del className="line-through" {...props} />,
              }}
            >
              {blog.description?.replace(/\\n/g, '\n') || ''}
            </ReactMarkdown>
          </div>

          {/* Tags */}
          {blog.tags?.length > 0 && (
            <div className="mt-10 pt-6 border-t border-gray-100">
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3">Topics</h3>
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-100 cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="mt-12 md:mt-22 md:mb-22 mb-12 flex justify-center">
            <div className="flex items-center text-gray-500 text-sm">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>Published on {formatDate(blog.date_posted)}</span>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        {Array.isArray(blog.faqs) && blog.faqs.length > 0 && (
          <div className="max-w-4xl mx-auto px-4 mt-16 mb-12">
            <h2 className="text-2xl font-bold mb-6 text-[#326B3F]">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {blog.faqs.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow p-5">
                  <h4 className="font-semibold text-lg mb-2 text-gray-900">
                    Q{idx + 1}. {faq.question}
                  </h4>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className={`fixed bottom-6 right-6 p-3 rounded-full bg-[#326B3F] text-white shadow-lg transition-all duration-300 hover:bg-blue-600 hover:scale-110 ${
            showScrollButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
          }`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BlogDetailPage;