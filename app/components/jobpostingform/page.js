"use client";
import React, { useState } from 'react'
import { supabase } from '@/lib/supabaseClient';

const JobPostingForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    location: '',
    experience: '',
    description: '',
    requirements: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [successMsg, setSuccessMsg] = useState(null)

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccessMsg(null)

    // Convert requirements text into an array (split by commas)
    const requirementsArray = formData.requirements.split(',').map(req => req.trim())

    try {
      const { error } = await supabase
        .from('job_postings')
        .insert([
          {
            title: formData.title,
            category: formData.category,
            location: formData.location,
            experience: formData.experience,
            description: formData.description,
            requirements: requirementsArray,
          },
        ])

      if (error) throw error

      setSuccessMsg('Job posting created successfully!')
      // Reset form after successful submission
      setFormData({
        title: '',
        category: '',
        location: '',
        experience: '',
        description: '',
        requirements: '',
      })
    } catch (err) {
      setError(err.message || 'Something went wrong.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-6 text-white">
        <h2 className="text-black text-2xl font-bold">Create Job Posting</h2>
        <p className="text-black mt-1">Fill in the details to post a new job opportunity</p>
      </div>

      <form onSubmit={handleSubmit} className="p-6">
        {/* Basic Information Section */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-800 mb-3 pb-2 border-b">Basic Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
              <input
                id="title"
                type="text"
                name="title"
                placeholder="e.g. Senior Developer"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              />
            </div>
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <input
                id="category"
                type="text"
                name="category"
                placeholder="e.g. Development, Design"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              />
            </div>
          </div>
        </div>
        
        {/* Job Details Section */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-800 mb-3 pb-2 border-b">Job Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              <input
                id="location"
                type="text"
                name="location"
                placeholder="e.g. Remote, New York"
                value={formData.location}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              />
            </div>
            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">Experience Required</label>
              <input
                id="experience"
                type="text"
                name="experience"
                placeholder="e.g. 2+ years"
                value={formData.experience}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Job Description</label>
            <textarea
              id="description"
              name="description"
              placeholder="Provide details about the role, responsibilities, and expectations"
              value={formData.description}
              onChange={handleChange}
              required
              rows="5"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            />
          </div>

          <div>
            <label htmlFor="requirements" className="block text-sm font-medium text-gray-700 mb-1">
              Job Requirements <span className="text-sm text-gray-500">(comma separated)</span>
            </label>
            <textarea
              id="requirements"
              name="requirements"
              placeholder="e.g. Bachelor's degree, 3+ years experience, JavaScript proficiency"
              value={formData.requirements}
              onChange={handleChange}
              required
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            />
            <p className="mt-1 text-xs text-gray-500">Each requirement will be displayed as a separate bullet point</p>
          </div>
        </div>

        {/* Submit Section */}
        <div className="border-t pt-6 mt-6 flex flex-col items-center">
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed w-full md:w-auto"
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Creating Job Posting...
              </span>
            ) : (
              'Post Job Opportunity'
            )}
          </button>
          
          {/* Feedback Messages */}
          {error && (
            <div className="mt-4 bg-red-50 text-red-700 p-3 rounded-lg border border-red-200 w-full">
              <p className="font-medium">Error:</p>
              <p>{error}</p>
            </div>
          )}
          
          {successMsg && (
            <div className="mt-4 bg-green-50 text-green-700 p-3 rounded-lg border border-green-200 w-full flex items-center">
              <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              {successMsg}
            </div>
          )}
        </div>
      </form>
    </div>
  )
}

export default JobPostingForm
