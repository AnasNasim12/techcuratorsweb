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
  const [jobs, setJobs] = useState([])
  const [contacts, setContacts] = useState([])
  const [exportLoading, setExportLoading] = useState(false)
  const [editingItem, setEditingItem] = useState(null)
  const [showModal, setShowModal] = useState(false)

  // Authentication check on load
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        
        if (error) throw error;
        
        if (!session || !session.user) {
          setLoading(false);
          return;
        }

        setAdminUser(session.user);
        setLoading(false);
      } catch (error) {
        console.error('Authentication error:', error.message || error);
        setLoading(false);
      }
    };

    checkAuth();

    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === 'SIGNED_OUT' || !session) {
        setAdminUser(null);
      } else {
        setAdminUser(session.user);
      }
    });

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

  // Fetch applications
  useEffect(() => {
    const fetchApplications = async () => {
      if (selected === 'applications') {
        const { data, error } = await supabase
          .from('job_applications')
          .select('*')
          .order('created_at', { ascending: false })

        if (!error) setApplications(data)
        else console.error('Error fetching applications:', error.message || error)
      }
    }
    fetchApplications()
  }, [selected])

  // Fetch blogs
  useEffect(() => {
    const fetchBlogs = async () => {
      if (selected === 'blogs') {
        const { data, error } = await supabase
          .from('blogs')
          .select('*')
          .order('date_posted', { ascending: false })

        if (!error) setBlogs(data || [])
        else console.error('Error fetching blogs:', error.message || error)
      }
    }
    fetchBlogs()
  }, [selected])

  // Fetch case studies
  useEffect(() => {
    const fetchCaseStudies = async () => {
      if (selected === 'casestudies') {
        const { data, error } = await supabase
          .from('casestd')
          .select('*')
          .order('date_posted', { ascending: false })

        if (!error) setCaseStudies(data || [])
        else console.error('Error fetching case studies:', error.message || error)
      }
    }
    fetchCaseStudies()
  }, [selected])

  // Fetch jobs
  useEffect(() => {
    const fetchJobs = async () => {
      if (selected === 'jobs') {
        try {
          const { data, error } = await supabase
            .from('job_postings')
            .select('id, title, category, location, experience, description, requirements, created_at')
            .order('created_at', { ascending: false })

          if (error) {
            throw new Error(`Supabase error: ${error.message || JSON.stringify(error)}`)
          }

          setJobs(data || [])
        } catch (error) {
          console.error('Error fetching jobs:', error.message || error)
          setJobs([])
        }
      }
    }
    fetchJobs()
  }, [selected])

  // Fetch contact submissions
  useEffect(() => {
    const fetchContacts = async () => {
      if (selected === 'contacts') {
        try {
          const { data, error } = await supabase
            .from('contactdata')
            .select('id, name, email, project_details, services, created_at')
            .order('created_at', { ascending: false })

          if (error) {
            throw new Error(`Supabase error: ${error.message || JSON.stringify(error)}`)
          }

          setContacts(data || [])
        } catch (error) {
          console.error('Error fetching contact submissions:', error.message || error)
          setContacts([])
        }
      }
    }
    fetchContacts()
  }, [selected])

  // Handle deletions
  const handleDelete = async (applicationId) => {
    if (!confirm('Are you sure you want to delete this application?')) return;
    try {
      const { error } = await supabase
        .from('job_applications')
        .delete()
        .eq('id', applicationId)

      if (error) throw error;
      setApplications(applications.filter(app => app.id !== applicationId))
      alert('Application deleted successfully.')
    } catch (error) {
      console.error('Delete failed:', error.message || error)
      alert('Failed to delete application. Please try again.')
    }
  }

  const handleDeleteBlog = async (blogId) => {
    if (!confirm('Are you sure you want to delete this blog post?')) return;
    try {
      const { error } = await supabase
        .from('blogs')
        .delete()
        .eq('id', blogId)

      if (error) throw error;
      setBlogs(blogs.filter(blog => blog.id !== blogId))
      alert('Blog deleted successfully.')
    } catch (error) {
      console.error('Delete failed:', error.message || error)
      alert('Failed to delete blog. Please try again.')
    }
  }

  const handleDeleteCaseStudy = async (caseStudyId) => {
    if (!confirm('Are you sure you want to delete this case study?')) return;
    try {
      const { error } = await supabase
        .from('casestd')
        .delete()
        .eq('id', caseStudyId)

      if (error) throw error;
      setCaseStudies(caseStudies.filter(cs => cs.id !== caseStudyId))
      alert('Case study deleted successfully.')
    } catch (error) {
      console.error('Delete failed:', error.message || error)
      alert('Failed to delete case study. Please try again.')
    }
  }

  const handleDeleteJob = async (jobId) => {
    if (!confirm('Are you sure you want to delete this job posting?')) return;
    try {
      const { error } = await supabase
        .from('job_postings')
        .delete()
        .eq('id', jobId)

      if (error) throw error;
      setJobs(jobs.filter(job => job.id !== jobId))
      alert('Job posting deleted successfully.')
    } catch (error) {
      console.error('Delete failed:', error.message || error)
      alert('Failed to delete job posting. Please try again.')
    }
  }

  const handleDeleteContact = async (contactId) => {
    if (!confirm('Are you sure you want to delete this contact submission?')) return;
    try {
      const { error } = await supabase
        .from('contactdata')
        .delete()
        .eq('id', contactId)

      if (error) throw error;
      setContacts(contacts.filter(contact => contact.id !== contactId))
      alert('Contact submission deleted successfully.')
    } catch (error) {
      console.error('Delete failed:', error.message || error)
      alert('Failed to delete contact submission. Please try again.')
    }
  }

  // Handle updates
  const handleUpdateBlog = async (blog) => {
    try {
      const { error } = await supabase
        .from('blogs')
        .update({
          title: blog.title,
          author: blog.author,
          slug: blog.slug,
          meta_title: blog.meta_title,
          meta_description: blog.meta_description,
          meta_keywords: blog.meta_keywords,
          description: blog.description,
          content: blog.content,
          faqs: blog.faqs,
          date_posted: blog.date_posted,
        })
        .eq('id', blog.id);

      if (error) throw error;
      setBlogs(blogs.map(b => b.id === blog.id ? blog : b));
      setShowModal(false);
      alert('Blog updated successfully.');
    } catch (error) {
      console.error('Update failed:', error.message || error);
      alert('Failed to update blog. Please try again.');
    }
  }

  const handleUpdateCaseStudy = async (caseStudy) => {
    try {
      const { error } = await supabase
        .from('casestd')
        .update({
          title: caseStudy.title,
          author: caseStudy.author,
          description: caseStudy.description,
          date_posted: caseStudy.date_posted
        })
        .eq('id', caseStudy.id)

      if (error) throw error;
      setCaseStudies(caseStudies.map(cs => cs.id === caseStudy.id ? caseStudy : cs))
      setShowModal(false)
      alert('Case study updated successfully.')
    } catch (error) {
      console.error('Update failed:', error.message || error)
      alert('Failed to delete case study. Please try again.')
    }
  }

  const handleUpdateApplication = async (application) => {
    try {
      const { error } = await supabase
        .from('job_applications')
        .update({
          full_name: application.full_name,
          email: application.email,
          phone: application.phone,
          availability: application.availability,
          salary_expectations: application.salary_expectations,
          cover_letter: application.cover_letter,
          resume_url: application.resume_url,
          portfolio_link: application.portfolio_link,
          linkedin_profile: application.linkedin_profile,
          additional_info: application.additional_info
        })
        .eq('id', application.id)

      if (error) throw error;
      setApplications(applications.map(app => app.id === application.id ? application : app))
      setShowModal(false)
      alert('Application updated successfully.')
    } catch (error) {
      console.error('Update failed:', error.message || error)
      alert('Failed to update application. Please try again.')
    }
  }

  const handleUpdateJob = async (job) => {
    try {
      let requirements = job.requirements;
      if (typeof requirements === 'string') {
        requirements = requirements
          .split(',')
          .map(item => item.trim())
          .filter(Boolean);
      }
      const { error } = await supabase
        .from('job_postings')
        .update({
          title: job.title,
          category: job.category,
          location: job.location,
          experience: job.experience,
          description: job.description,
          requirements: requirements,
        })
        .eq('id', job.id)

      if (error) throw error;
      setJobs(jobs.map(j => j.id === job.id ? { ...job, requirements } : j))
      setShowModal(false)
      alert('Job posting updated successfully.')
    } catch (error) {
      console.error('Update failed:', error.message || error)
      alert('Failed to update job posting. Please try again.')
    }
  }

  // Export to CSV
  const exportToCSV = async () => {
    setExportLoading(true)
    try {
      const { data, error } = await supabase
        .from('job_applications')
        .select('*')
        .order('created_at', { ascending: false })
        
      if (error) throw error
      
      if (data && data.length > 0) {
        const headers = Object.keys(data[0]).filter(key => 
          !['id', 'created_at', 'updated_at'].includes(key)
        )
        headers.unshift('id')
        headers.push('created_at')
        
        let csvContent = headers.join(',') + '\n'
        
        data.forEach(app => {
          const row = headers.map(header => {
            let cell = app[header];
            if (typeof cell === 'string' && (cell.includes(',') || cell.includes('"') || cell.includes('\n'))) {
              cell = `"${cell.replace(/"/g, '""')}"`
            }
            return cell
          })
          csvContent += row.join(',') + '\n'
        })
        
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
      console.error('Export failed:', error.message || error)
      alert('Failed to export data. Please try again.')
    } finally {
      setExportLoading(false)
    }
  }

  // Truncate text for display
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
    { id: 'jobs', label: 'Manage Jobs' },
    { id: 'applications', label: 'Applications' },
    { id: 'contacts', label: 'Contact Submissions' },
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white shadow-md rounded-lg p-8">
          <p className="text-gray-700">Loading admin portal...</p>
        </div>
      </div>
    );
  }

  if (!adminUser) return <AdminLogin onLogin={setAdminUser} />

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
        
        {/* Tabs Navigation */}
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
                                onClick={() => router.push(`/blog/${blog.slug}`)}
                                className="px-3 py-1.5 bg-green-50 hover:bg-green-100 text-green-700 border border-green-200 rounded-lg text-sm mr-2"
                              >
                                Preview
                              </button>
                              <button
                                onClick={() => {
                                  setEditingItem({ type: 'blog', data: blog })
                                  setShowModal(true)
                                }}
                                className="px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 rounded-lg text-sm mr-2"
                              >
                                Update
                              </button>
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
                                onClick={() => {
                                  setEditingItem({ type: 'casestudy', data: cs })
                                  setShowModal(true)
                                }}
                                className="px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 rounded-lg text-sm mr-2"
                              >
                                Update
                              </button>
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
            
            {/* Jobs Listing */}
            {selected === 'jobs' && (
              <div>
                <div className="mb-6 flex justify-between items-center">
                  <h2 className="text-2xl font-semibold text-gray-800 pb-2">Manage Job Postings</h2>
                </div>
                
                {jobs.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-gray-400 text-2xl">0</span>
                    </div>
                    <p className="text-gray-500">No job postings found.</p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white">
                      <thead>
                        <tr className="bg-gray-50 border-b border-gray-200">
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Experience</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Requirements</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created At</th>
                          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {jobs.map((job) => (
                          <tr key={job.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{truncateText(job.title, 40)}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{job.category}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{job.location}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{job.experience}</td>
                            <td className="px-6 py-4 text-sm text-gray-500 max-w-xs">{truncateText(job.description, 60)}</td>
                            <td className="px-6 py-4 text-sm text-gray-500 max-w-xs">{truncateText(job.requirements, 60)}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {new Date(job.created_at).toLocaleDateString()}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <button
                                onClick={() => {
                                  setEditingItem({ type: 'job', data: job })
                                  setShowModal(true)
                                }}
                                className="px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 rounded-lg text-sm mr-2"
                              >
                                Update
                              </button>
                              <button
                                onClick={() => handleDeleteJob(job.id)}
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
            
            {/* Applications Listing */}
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
                      <>Export to CSV</>
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
                              onClick={() => {
                                setEditingItem({ type: 'application', data: app })
                                setShowModal(true)
                              }}
                              className="px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 rounded-lg text-sm"
                            >
                              Update
                            </button>
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
            
            {/* Contact Submissions Listing */}
            {selected === 'contacts' && (
              <div>
                <div className="mb-6 flex justify-between items-center">
                  <h2 className="text-2xl font-semibold text-gray-800 pb-2">Contact Submissions</h2>
                </div>
                
                {contacts.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-gray-400 text-2xl">0</span>
                    </div>
                    <p className="text-gray-500">No contact submissions found.</p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white">
                      <thead>
                        <tr className="bg-gray-50 border-b border-gray-200">
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Services</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project Details</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Submitted At</th>
                          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {contacts.map((contact) => (
                          <tr key={contact.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{truncateText(contact.name, 40)}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              <a href={`mailto:${contact.email}`} className="text-blue-600 hover:underline">{truncateText(contact.email, 40)}</a>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500 max-w-xs">{truncateText(contact.services, 60)}</td>
                            <td className="px-6 py-4 text-sm text-gray-500 max-w-xs">{truncateText(contact.project_details, 60)}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {new Date(contact.created_at).toLocaleDateString()}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <button
                                onClick={() => handleDeleteContact(contact.id)}
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
          </div>
        </div>

        {/* Modal for Editing */}
        {showModal && editingItem && editingItem.type === 'blog' && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-3xl w-full max-h-[90vh] overflow-y-auto relative">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                title="Close"
              >✕</button>
              <BlogForm
                initialData={editingItem.data}
                onSuccess={updatedBlog => {
                  setBlogs(blogs.map(b => b.id === updatedBlog.id ? updatedBlog : b));
                  setShowModal(false);
                }}
                onCancel={() => setShowModal(false)}
                isEdit={true}
              />
            </div>
          </div>
        )}
      </div>
      
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