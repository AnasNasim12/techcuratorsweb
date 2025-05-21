"use client";
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import AdminLogin from '../admin/page';
import BlogForm from '../components/blogform/page';
import CaseStdForm from '../components/casestudyform/page';
import { supabase } from '@/lib/supabaseClient';
import JobPostingForm from '../components/jobpostingform/page';

const AdminPortal = () => {
  const router = useRouter();
  const [adminUser, setAdminUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState('')
  const [applications, setApplications] = useState([])
  const [blogs, setBlogs] = useState([])
  const [caseStudies, setCaseStudies] = useState([])
  const [exportLoading, setExportLoading] = useState(false)

  // Authentication check on load
  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Check current authentication state
        const { data: { session }, error } = await supabase.auth.getSession();
        
        if (error) {
          throw error;
        }

        // If no session or user, keep adminUser as null which will show login page
        if (!session || !session.user) {
          setLoading(false);
          return;
        }

        // User is authenticated through Supabase
        setAdminUser(session.user);
        setLoading(false);
      } catch (error) {
        console.error('Authentication error:', error);
        setLoading(false);
      }
    };

    checkAuth();

    // Set up auth state listener
    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === 'SIGNED_OUT' || !session) {
        setAdminUser(null);
      } else {
        setAdminUser(session.user);
      }
    });

    // Cleanup listener on unmount
    return () => {
      if (authListener && authListener.subscription) {
        authListener.subscription.unsubscribe();
      }
    };
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut()
    setAdminUser(null)
  }

  // Fetch applications only when selected
  useEffect(() => {
    const fetchApplications = async () => {
      if (selected === 'applications') {
        const { data, error } = await supabase
          .from('job_applications')
          .select('*')
          .order('created_at', { ascending: false })

        if (!error) setApplications(data)
      }
    }
    fetchApplications()
  }, [selected])

  // Fetch blogs when the blogs tab is selected
  useEffect(() => {
    const fetchBlogs = async () => {
      if (selected === 'blogs') {
        const { data, error } = await supabase
          .from('blogs')
          .select('*')
          .order('date_posted', { ascending: false })

        if (!error) setBlogs(data || [])
        else console.error('Error fetching blogs:', error)
      }
    }
    fetchBlogs()
  }, [selected])

  // Fetch case studies when the case studies tab is selected
  useEffect(() => {
    const fetchCaseStudies = async () => {
      if (selected === 'casestudies') {
        const { data, error } = await supabase
          .from('casestd')
          .select('*')
          .order('date_posted', { ascending: false })

        if (!error) setCaseStudies(data || [])
        else console.error('Error fetching case studies:', error)
      }
    }
    fetchCaseStudies()
  }, [selected])

  // Function to handle application deletion
  const handleDelete = async (applicationId) => {
    if (!confirm('Are you sure you want to delete this application?')) return;

    try {
      const { error } = await supabase
        .from('job_applications')
        .delete()
        .eq('id', applicationId)

      if (error) throw error;

      // Update the applications state by removing the deleted application
      setApplications(applications.filter(app => app.id !== applicationId))
      alert('Application deleted successfully.')
    } catch (error) {
      console.error('Delete failed:', error)
      alert('Failed to delete application. Please try again.')
    }
  }

  // Function to handle blog deletion
  const handleDeleteBlog = async (blogId) => {
    if (!confirm('Are you sure you want to delete this blog post?')) return;

    try {
      const { error } = await supabase
        .from('blogs')
        .delete()
        .eq('id', blogId)

      if (error) throw error;

      // Update the blogs state by removing the deleted blog
      setBlogs(blogs.filter(blog => blog.id !== blogId))
      alert('Blog deleted successfully.')
    } catch (error) {
      console.error('Delete failed:', error)
      alert('Failed to delete blog. Please try again.')
    }
  }

  // Function to handle case study deletion
  const handleDeleteCaseStudy = async (caseStudyId) => {
    if (!confirm('Are you sure you want to delete this case study?')) return;

    try {
      const { error } = await supabase
        .from('casestd')
        .delete()
        .eq('id', caseStudyId)

      if (error) throw error;

      // Update the case studies state by removing the deleted case study
      setCaseStudies(caseStudies.filter(cs => cs.id !== caseStudyId))
      alert('Case study deleted successfully.')
    } catch (error) {
      console.error('Delete failed:', error)
      alert('Failed to delete case study. Please try again.')
    }
  }

  // Function to convert applications data to CSV
  const exportToCSV = async () => {
    setExportLoading(true)
    try {
      // Get all applications data, even if not all loaded in state
      const { data, error } = await supabase
        .from('job_applications')
        .select('*')
        .order('created_at', { ascending: false })
        
      if (error) throw error
      
      if (data && data.length > 0) {
        // Get headers from first object keys
        const headers = Object.keys(data[0]).filter(key => 
          // Optional: exclude fields you don't want to export
          !['id', 'created_at', 'updated_at'].includes(key)
        )
        
        // Add removed fields back if you want them in the export
        headers.unshift('id') 
        headers.push('created_at')
        
        // Create CSV rows
        let csvContent = headers.join(',') + '\n'
        
        data.forEach(app => {
          const row = headers.map(header => {
            let cell = app[header] || ''
            // Handle cells with commas, quotes, or newlines
            if (typeof cell === 'string' && (cell.includes(',') || cell.includes('"') || cell.includes('\n'))) {
              cell = `"${cell.replace(/"/g, '""')}"`
            }
            return cell
          })
          csvContent += row.join(',') + '\n'
        })
        
        // Create and download the file
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
        const url = URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.setAttribute('href', url)
        link.setAttribute('download', `job_applications_${new Date().toISOString().slice(0, 10)}.csv`)
        link.style.display = 'none'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      }
    } catch (error) {
      console.error('Export failed:', error)
      alert('Failed to export data. Please try again.')
    } finally {
      setExportLoading(false)
    }
  }

  // Function to truncate long text for display
  const truncateText = (text, maxLength = 100) => {
    if (!text) return '';
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  }

  const tabs = [
    { id: 'blog', label: 'Add Blog' },
    { id: 'blogs', label: 'Manage Blogs' },
    { id: 'casestd', label: 'Add Case Study' },
    { id: 'casestudies', label: 'Manage Case Studies' },
    { id: 'job', label: 'Upload Job' },
    { id: 'applications', label: 'Applications' },
  ];

  // Show loading state while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white shadow-md rounded-lg p-8">
          <p className="text-gray-700">Loading admin portal...</p>
        </div>
      </div>
    );
  }

  // If not authenticated, show login page
  if (!adminUser) return <AdminLogin onLogin={setAdminUser} />

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with shadow card */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Admin Portal</h1>
              <p className="text-gray-500 mt-1">Welcome, {adminUser.email}</p>
            </div>
            <button 
              onClick={handleLogout} 
              className="px-4 py-2 text-red-600 border border-red-200 rounded-lg hover:bg-red-50 transition-colors duration-200"
            >
              Logout
            </button>
          </div>
        </div>
        
        {/* Tabs Navigation - simplified without icons */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex flex-wrap -mb-px">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelected(tab.id)}
                  className={`
                    relative min-w-0 flex-1 overflow-hidden py-4 px-4 text-center text-sm font-medium focus:outline-none
                    transition-all duration-200 ease-in-out
                    ${selected === tab.id 
                      ? 'text-blue-600 border-b-2 border-blue-500' 
                      : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }
                  `}
                >
                  {tab.label}
                  
                  {/* Blue gradient indicator */}
                  {selected === tab.id && (
                    <span className="absolute bottom-0 inset-x-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600"></span>
                  )}
                </button>
              ))}
            </nav>
          </div>
        </div>
        
        {/* Content Area */}
        <div className="bg-white rounded-xl shadow-md p-6 min-h-[500px]">
          <div className="animate-fadeIn">
            {selected === 'blog' && <BlogForm />}
            {selected === 'job' && <JobPostingForm />}
            {selected === 'casestd' && <CaseStdForm />}
            
            {/* Blogs Listing */}
            {selected === 'blogs' && (
              <div>
                <div className="mb-6 flex justify-between items-center">
                  <h2 className="text-2xl font-semibold text-gray-800 pb-2">Manage Blog Posts</h2>
                </div>
                
                {blogs.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-gray-400 text-2xl">0</span>
                    </div>
                    <p className="text-gray-500">No blog posts found.</p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white">
                      <thead>
                        <tr className="bg-gray-50 border-b border-gray-200">
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Posted</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {blogs.map((blog) => (
                          <tr key={blog.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{truncateText(blog.title, 40)}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{blog.author}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {new Date(blog.date_posted).toLocaleDateString()}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500 max-w-xs">
                              {truncateText(blog.description, 60)}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <button
                                onClick={() => handleDeleteBlog(blog.id)}
                                className="px-3 py-1.5 bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 rounded-lg text-sm"
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}
            
            {/* Case Studies Listing */}
            {selected === 'casestudies' && (
              <div>
                <div className="mb-6 flex justify-between items-center">
                  <h2 className="text-2xl font-semibold text-gray-800 pb-2">Manage Case Studies</h2>
                </div>
                
                {caseStudies.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-gray-400 text-2xl">0</span>
                    </div>
                    <p className="text-gray-500">No case studies found.</p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white">
                      <thead>
                        <tr className="bg-gray-50 border-b border-gray-200">
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Posted</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {caseStudies.map((cs) => (
                          <tr key={cs.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{truncateText(cs.title, 40)}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cs.author}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {new Date(cs.date_posted).toLocaleDateString()}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500 max-w-xs">
                              {truncateText(cs.description, 60)}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <button
                                onClick={() => handleDeleteCaseStudy(cs.id)}
                                className="px-3 py-1.5 bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 rounded-lg text-sm"
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}
            
            {/* Applications Listing (Existing) */}
            {selected === 'applications' && (
              <div>
                <div className="mb-6 flex justify-between items-center">
                  <h2 className="text-2xl font-semibold text-gray-800 pb-2">Job Applications</h2>
                  <button
                    onClick={exportToCSV}
                    disabled={exportLoading || applications.length === 0}
                    className={`px-4 py-2 text-sm rounded-lg flex items-center gap-2 transition-colors duration-200
                      ${applications.length === 0 
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                        : 'bg-green-50 hover:bg-green-100 text-green-700 border border-green-200'
                      }
                    `}
                  >
                    {exportLoading ? (
                      <>
                        <span className="animate-spin inline-block h-4 w-4 border-2 border-green-600 border-t-transparent rounded-full mr-1"></span>
                        Exporting...
                      </>
                    ) : (
                      <>
                        Export to CSV
                      </>
                    )}
                  </button>
                </div>
                
                {applications.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-gray-400 text-2xl">0</span>
                    </div>
                    <p className="text-gray-500">No applications found.</p>
                  </div>
                ) : (
                  <div className="space-y-6 mt-4">
                    {applications.map((app) => (
                      <div key={app.id} className="bg-gray-50 border border-gray-100 rounded-lg p-5 hover:shadow-md transition-shadow duration-200">
                        <div className="flex justify-between border-b border-gray-200 pb-3 mb-3">
                          <h3 className="text-lg font-semibold text-gray-800">{app.full_name}</h3>
                          <div className="flex items-center gap-2">
                            <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
                              Applied: {new Date(app.applied_at || app.created_at).toLocaleDateString()}
                            </span>
                            <button
                              onClick={() => handleDelete(app.id)}
                              className="px-3 py-1.5 bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 rounded-lg text-sm"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-gray-500 mb-1">Contact Details</p>
                            <p className="flex items-center gap-2 mb-2">
                              <span className="font-medium">Email:</span> 
                              <a href={`mailto:${app.email}`} className="text-blue-600 hover:underline">{app.email}</a>
                            </p>
                            <p className="flex items-center gap-2">
                              <span className="font-medium">Phone:</span> {app.phone}
                            </p>
                          </div>
                          
                          <div>
                            <p className="text-sm text-gray-500 mb-1">Details</p>
                            <p className="flex items-center gap-2 mb-2">
                              <span className="font-medium">Availability:</span> {app.availability}
                            </p>
                            <p className="flex items-center gap-2">
                              <span className="font-medium">Salary:</span> {app.salary_expectations}
                            </p>
                          </div>
                        </div>
                        
                        <div className="mt-4">
                          <p className="text-sm text-gray-500 mb-1">Cover Letter</p>
                          <p className="text-gray-700 bg-white p-3 border border-gray-100 rounded-md text-sm max-h-24 overflow-y-auto">
                            {app.cover_letter}
                          </p>
                        </div>
                        
                        <div className="flex flex-wrap gap-3 mt-4">
                          <a 
                            href={app.resume_url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-3 py-1.5 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 text-sm"
                          >
                            Resume
                          </a>
                          
                          {app.portfolio_link && (
                            <a 
                              href={app.portfolio_link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center px-3 py-1.5 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 text-sm"
                            >
                              Portfolio
                            </a>
                          )}
                          
                          {app.linkedin_profile && (
                            <a 
                              href={app.linkedin_profile} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center px-3 py-1.5 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 text-sm"
                            >
                              LinkedIn
                            </a>
                          )}
                        </div>
                        
                        {app.additional_info && (
                          <div className="mt-4 border-t border-gray-200 pt-3">
                            <p className="text-sm text-gray-500 mb-1">Additional Information</p>
                            <p className="text-gray-600 text-sm">{app.additional_info}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Add animation CSS */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}

export default AdminPortal