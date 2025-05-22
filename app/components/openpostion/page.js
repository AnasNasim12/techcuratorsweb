"use client";
import React, { useState, useEffect } from 'react';
import { Search, MapPin, Clock, Tag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
// Replace with your actual Supabase URL and anon key
const supabaseUrl = 'https://prbadeuavftimzjiiybf.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InByYmFkZXVhdmZ0aW16amlpeWJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0MjcxNTgsImV4cCI6MjA2MjAwMzE1OH0.e9jGyFAy7yic2pRoOCAcK-b-IlkMi2YcyTZSkdNFewY';
const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: false
  }
});

const JobApplicationForm = ({ job, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    resume: null,
    coverLetter: '',
    portfolioLink: '',
    linkedInProfile: '',
    availability: '',
    salaryExpectations: '',
    additionalInfo: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYouPopup, setShowThankYouPopup] = useState(false);
 

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateStep = () => {
    const newErrors = {};
    if (step === 1) {
      if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Invalid email address';
      }
      if (!formData.phone.trim()) {
        newErrors.phone = 'Phone is required';
      } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
        newErrors.phone = 'Invalid phone number (10 digits required)';
      }
    } else if (step === 2) {
      if (!formData.resume) newErrors.resume = 'Resume is required';
      if (!formData.coverLetter.trim()) newErrors.coverLetter = 'Cover Letter is required';
    } else if (step === 3) {
      if (!formData.linkedInProfile.trim()) {
        newErrors.linkedInProfile = 'LinkedIn Profile is required';
      } else if (!/^(https?:\/\/)?(www\.)?linkedin\.com\/.+$/.test(formData.linkedInProfile)) {
        newErrors.linkedInProfile = 'Invalid LinkedIn URL';
      }
      if (!formData.availability.trim()) newErrors.availability = 'Availability is required';
      if (!formData.salaryExpectations.trim()) newErrors.salaryExpectations = 'Salary Expectations are required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  const handlePrev = () => setStep(step - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateStep()) {
      // Check file size before submitting
      if (formData.resume && formData.resume.size > 10 * 1024 * 1024) {
        alert('Resume file size exceeds 10MB limit. Please upload a smaller file.');
        return;
      }
      
      setIsSubmitting(true);
      try {
        // 1. Upload resume to Supabase Storage
        let resumeUrl = null;
        if (formData.resume) {
          // Create a safe filename
          const fileExt = formData.resume.name.split('.').pop().toLowerCase();
          // Validate file extension - only allow pdf and jpg as per RLS policy
          if (!['pdf', 'jpg'].includes(fileExt)) {
            throw new Error('Invalid file format. Please upload PDF or JPG files only.');
          }
          
          // Ensure file is uploaded to the public folder
          const resumeFileName = `public/${Date.now()}-${formData.fullName.replace(/\s+/g, '-').toLowerCase()}.${fileExt}`;
          console.log('Uploading file:', resumeFileName);
          
          // Upload the file
          const { data: uploadData, error: uploadError } = await supabase.storage
            .from('resumes')
            .upload(resumeFileName, formData.resume, {
              cacheControl: '3600',
              upsert: false,
              contentType: formData.resume.type
            });
            
          if (uploadError) {
            console.error('Resume upload error:', uploadError);
            throw new Error('Failed to upload resume: ' + uploadError.message);
          }
          
          console.log('File uploaded successfully:', uploadData);
          
          // Get the public URL for the uploaded file
          const { data: publicUrlData } = supabase.storage
            .from('resumes')
            .getPublicUrl(resumeFileName);
            
          resumeUrl = publicUrlData.publicUrl;
          console.log('Resume URL:', resumeUrl);
        }
        
        // 2. Format data for insertion
        const applicationData = {
          job_id: job.id,
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          resume_url: resumeUrl,
          cover_letter: formData.coverLetter,
          linkedin_profile: formData.linkedInProfile,
          availability: formData.availability,
          salary_expectations: formData.salaryExpectations,
          applied_at: new Date().toISOString()
        };
        
        // Add optional fields only if they exist
        if (formData.portfolioLink && formData.portfolioLink.trim() !== '') {
          applicationData.portfolio_link = formData.portfolioLink;
        }
        
        if (formData.additionalInfo && formData.additionalInfo.trim() !== '') {
          applicationData.additional_info = formData.additionalInfo;
        }
        
        // Insert job application data to Supabase
        const { data: insertData, error: applicationError } = await supabase
          .from('job_applications')
          .insert([applicationData]);
        
        if (applicationError) {
          console.error('Application submission error:', applicationError);
          throw new Error('Failed to submit application: ' + applicationError.message);
        }
        
        console.log('Application submitted successfully!');
        setShowThankYouPopup(true);
      } catch (error) {
        console.error('Error submitting application:', error);
        alert(`Error: ${error.message || 'There was an error submitting your application. Please try again.'}`);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleThankYouClose = () => {
    setShowThankYouPopup(false);
    onClose();
    navigate('/');
  };

  return (
    <motion.div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 overflow-y-auto">
      <motion.div className="bg-white rounded-lg w-full max-w-lg my-8">
        <div className="p-4 sm:p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-medium">Apply for {job.title}</h2>
            <button onClick={onClose} className='cursor-pointer'>✖</button>
          </div>

          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                  {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Resume</label>
                  <input
                    type="file"
                    name="resume"
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    accept=".pdf,.jpg"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">Accepted formats: PDF, JPG (max 10MB)</p>
                  {errors.resume && <p className="text-red-500 text-sm mt-1">{errors.resume}</p>}
                  {formData.resume && formData.resume.size > 10 * 1024 * 1024 && 
                    <p className="text-red-500 text-sm mt-1">File size exceeds 10MB limit</p>
                  }
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Cover Letter</label>
                  <textarea
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    rows="4"
                    required
                  />
                  {errors.coverLetter && <p className="text-red-500 text-sm mt-1">{errors.coverLetter}</p>}
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Portfolio Link</label>
                  <input
                    type="url"
                    name="portfolioLink"
                    value={formData.portfolioLink}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">LinkedIn Profile</label>
                  <input
                    type="url"
                    name="linkedInProfile"
                    value={formData.linkedInProfile}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                  {errors.linkedInProfile && <p className="text-red-500 text-sm mt-1">{errors.linkedInProfile}</p>}
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Availability</label>
                  <input
                    type="text"
                    name="availability"
                    value={formData.availability}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    placeholder="When can you start? Any notice period?"
                    required
                  />
                  {errors.availability && <p className="text-red-500 text-sm mt-1">{errors.availability}</p>}
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Salary Expectations</label>
                  <input
                    type="text"
                    name="salaryExpectations"
                    value={formData.salaryExpectations}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Expected annual salary"
                    required
                  />
                  {errors.salaryExpectations && <p className="text-red-500 text-sm mt-1">{errors.salaryExpectations}</p>}
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Additional Information</label>
                  <textarea
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    rows="4"
                    placeholder="Any other information you'd like to share"
                  />
                </div>
              </div>
            )}

            <div className="flex justify-between mt-6">
              {step > 1 && (
                <button 
                  type="button" 
                  onClick={handlePrev} 
                  className="px-4 py-2 text-gray-700 border border-gray-200 rounded-md"
                  disabled={isSubmitting}
                >
                  Previous
                </button>
              )}
              {step < 3 ? (
                <button 
                  type="button" 
                  onClick={handleNext} 
                  className="px-4 py-2 bg-[#429054]/30 text-black rounded disabled:opacity-50"
                  disabled={isSubmitting}
                >
                  Next
                </button>
              ) : (
                <button 
                  type="submit" 
                  className="px-4 py-2 bg-[#429054]/30 text-black rounded disabled:opacity-50 flex items-center gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                  {isSubmitting && (
                    <svg className="animate-spin h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  )}
                </button>
              )}
            </div>
          </form>
        </div>
      </motion.div>

      {/* Thank You Popup */}
      <AnimatePresence>
        {showThankYouPopup && (
          <motion.div className="fixed inset-0 flex items-center justify-center bg-black/50 bg-opacity-50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <motion.div className="bg-white p-6 rounded-lg w-full max-w-lg"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-medium">Thank You!</h2>
                <button onClick={handleThankYouClose} className='cursor-pointer'>✖</button>
              </div>
              <p className="text-gray-600">Your application for <strong>{job.title}</strong> has been successfully submitted. Our team will review your application and contact you shortly.</p>
              <div className="mt-4 flex justify-end">
                <button 
                  onClick={handleThankYouClose} 
                  className="px-4 py-2 bg-[#429054]/30 text-black rounded"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// OpenPositions component remains unchanged
const OpenPositions = () => {
  const [jobListings, setJobListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [selectedJob, setSelectedJob] = useState(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    experience: "",
    location: "",
    category: ""
  });

  // Fetch job postings from Supabase
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('job_postings')
          .select('*');
        
        if (error) throw error;
        
        setJobListings(data);
      } catch (err) {
        console.error('Error fetching job postings:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  // Filter jobs based on search term and filters
  const filteredJobs = jobListings.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filters.experience ? job.experience === filters.experience : true) &&
    (filters.location ? job.location === filters.location : true) &&
    (filters.category ? job.category === filters.category : true)
  );

  // Get unique values for filter dropdowns
  const getUniqueFilterValues = (key) => {
    return [...new Set(jobListings.map(job => job[key]))];
  };

  useEffect(() => {
    if (selectedJob || showApplicationForm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedJob, showApplicationForm]);

  return (
    <div className="relative">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-12 md:mt-22 relative">
        <div className="text-center mb-8 sm:mb-12 mt-12 md:mt-22 space-y-2 sm:space-y-4">
          <h2 className="text-2xl md:text-3xl font-medium text-gray-900">Open Positions</h2>
          <p className="text-sm sm:text-base text-gray-600">Find your next career opportunity with us.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mb-8 max-w-3xl mx-auto">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
            <input
              type="text"
              placeholder="Search jobs..."
              className="w-full pl-10 pr-4 py-2 text-sm sm:text-base border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {Object.keys(filters).map((filterKey) => (
              <select
                key={filterKey}
                className="w-full sm:w-[150px] px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 bg-white"
                value={filters[filterKey]}
                onChange={(e) => setFilters({ ...filters, [filterKey]: e.target.value })}
              >
                <option value="">{filterKey.charAt(0).toUpperCase() + filterKey.slice(1)}</option>
                {getUniqueFilterValues(filterKey).map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="text-center py-8">
            <p className="text-gray-600">Loading job postings...</p>
          </div>
        ) : error ? (
          <div className="text-center py-8">
            <p className="text-red-500">Error loading jobs: {error}</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <div key={job.id} className="p-4 sm:p-6 border border-gray-100 rounded-lg group shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                    <div className="space-y-2 sm:space-y-4">
                      <div className="flex items-center gap-2">
                        <Tag className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                        <p className="text-xs sm:text-sm text-green-600">{job.category}</p>
                      </div>
                      <h3 className="text-lg sm:text-xl font-medium text-gray-900">{job.title}</h3>
                      <div className="flex flex-wrap gap-3 sm:gap-4">
                        <div className="flex items-center gap-1 sm:gap-2 text-gray-600">
                          <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span className="text-xs sm:text-sm">{job.location}</span>
                        </div>
                        <div className="flex items-center gap-1 sm:gap-2 text-gray-600">
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span className="text-xs sm:text-sm">{job.experience}</span>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        setSelectedJob(job);
                        setShowApplicationForm(true);
                      }}
                      className="w-full sm:w-auto px-4 py-2 bg-[#429054]/30 text-black rounded-md hover:bg-[#429054]/40 transition-colors text-sm sm:text-base"
                    >
                      Apply Now
                    </button>
                  </div>
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-gray-700">Requirements:</h4>
                    <ul className="list-disc list-inside text-gray-600">
                      {job.requirements && job.requirements.map((requirement, i) => (
                        <li key={i}>{requirement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-sm sm:text-base text-gray-600">No jobs found matching your criteria.</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Job Application Form Modal */}
      <AnimatePresence>
        {showApplicationForm && (
          <JobApplicationForm
            job={selectedJob}
            onClose={() => {
              setSelectedJob(null);
              setShowApplicationForm(false);
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default OpenPositions;