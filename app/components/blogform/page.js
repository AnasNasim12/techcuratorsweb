"use client";
import React, { useState, useRef, useEffect } from 'react'
import { supabase } from '@/lib/supabaseClient';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Image from 'next/image';

const BlogForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    date_posted: '',
    description: '',
    content: '',
    slug: '',
    meta_title: '',
    meta_description: '',
    meta_keywords: '',
    faqs: [] // <-- Add this line
  })
  const [imageFile, setImageFile] = useState(null)
  const [previewUrl, setPreviewUrl] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [successMsg, setSuccessMsg] = useState(null)
  const [activeTab, setActiveTab] = useState('edit') // 'edit' or 'preview' for mobile view
  const [isFullScreen, setIsFullScreen] = useState(false) // Track full screen mode
  const descriptionTextareaRef = useRef(null)
  const fullScreenTextareaRef = useRef(null)

  // Effect to handle escape key press to exit full screen mode
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && isFullScreen) {
        setIsFullScreen(false);
      }
    };
    
    document.addEventListener('keydown', handleEscKey);
    
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isFullScreen]);

  // Effect to disable body scroll when fullscreen is active
  useEffect(() => {
    if (isFullScreen) {
      document.body.style.overflow = 'hidden';
      // Focus the full screen textarea after opening
      if (fullScreenTextareaRef.current) {
        fullScreenTextareaRef.current.focus();
        // Place cursor at the same position as in the original textarea
        if (descriptionTextareaRef.current) {
          const cursorPos = descriptionTextareaRef.current.selectionStart;
          fullScreenTextareaRef.current.setSelectionRange(cursorPos, cursorPos);
        }
      }
    } else {
      document.body.style.overflow = '';
      // Sync the cursor position back when exiting
      if (descriptionTextareaRef.current && fullScreenTextareaRef.current) {
        const cursorPos = fullScreenTextareaRef.current.selectionStart;
        setTimeout(() => {
          descriptionTextareaRef.current.focus();
          descriptionTextareaRef.current.setSelectionRange(cursorPos, cursorPos);
        }, 0);
      }
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isFullScreen]);

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Handle changes in full screen mode
  const handleFullScreenChange = (e) => {
    setFormData((prev) => ({ ...prev, description: e.target.value }));
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setImageFile(file)
      setPreviewUrl(URL.createObjectURL(file))
    }
  }

  // Enhanced helper function to insert markdown syntax
  const insertMarkdown = (syntax, placeholder = '', isFullScreenMode = false) => {
    const textarea = isFullScreenMode ? fullScreenTextareaRef.current : descriptionTextareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    const selectedText = text.substring(start, end) || placeholder;

    const beforeText = text.substring(0, start);
    const afterText = text.substring(end);
    
    let newText;
    
    switch(syntax) {
      case 'h1':
        newText = `${beforeText}# ${selectedText}${afterText}`
        break
      case 'h2':
        newText = `${beforeText}## ${selectedText}${afterText}`
        break
      case 'h3':
        newText = `${beforeText}### ${selectedText}${afterText}`
        break
      case 'bold':
        newText = `${beforeText}**${selectedText}**${afterText}`
        break
      case 'italic':
        newText = `${beforeText}_${selectedText}_${afterText}`
        break
      case 'strikethrough':
        newText = `${beforeText}~~${selectedText}~~${afterText}`
        break
      case 'link':
        newText = `${beforeText}[${selectedText}](url)${afterText}`
        break
      case 'image':
        newText = `${beforeText}![${selectedText}](image-url)${afterText}`
        break
      case 'code':
        newText = `${beforeText}\`${selectedText}\`${afterText}`
        break
      case 'codeblock':
        newText = `${beforeText}\n\`\`\`\n${selectedText}\n\`\`\`\n${afterText}`
        break
      case 'quote':
        newText = `${beforeText}> ${selectedText}${afterText}`
        break
      case 'list':
        newText = `${beforeText}\n- ${selectedText}\n- Item 2\n- Item 3${afterText}`
        break
      case 'numbered':
        newText = `${beforeText}\n1. ${selectedText}\n2. Item 2\n3. Item 3${afterText}`
        break
      case 'checkbox':
        newText = `${beforeText}\n- [ ] ${selectedText}\n- [ ] Task 2\n- [x] Completed task${afterText}`
        break
      case 'hr':
        newText = `${beforeText}\n\n---\n\n${selectedText}${afterText}`
        break
      case 'table':
        newText = `${beforeText}\n| Header 1 | Header 2 |\n| -------- | -------- |\n| Cell 1   | Cell 2   |\n| Cell 3   | Cell 4   |\n${afterText}`
        break
      default:
        newText = text
    }
    
    setFormData({ ...formData, description: newText });
    
    // Focus and set cursor position after update
    setTimeout(() => {
      textarea.focus();
      const newCursorPos = start + newText.length - text.length;
      textarea.setSelectionRange(newCursorPos, newCursorPos);
    }, 0);
  };

  // Function to toggle full screen mode
  const toggleFullScreen = () => {
    setIsFullScreen(prev => !prev);
  };

  const uploadImage = async (file) => {
    const ext = file.name.split('.').pop().toLowerCase()
    const allowed = ['jpg', 'jpeg', 'png', 'webp', 'gif']
    if (!allowed.includes(ext)) {
      throw new Error('Invalid image format.')
    }

    const fileName = `${Date.now()}.${ext}`
    const filePath = `public/${fileName}`

    const { error: uploadError } = await supabase.storage
      .from('blog-images')
      .upload(filePath, file)

    if (uploadError) throw uploadError

    const { data: urlData } = supabase
      .storage
      .from('blog-images')
      .getPublicUrl(filePath)

    return urlData.publicUrl
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setSuccessMsg(null)
    setLoading(true)

    try {
      let imageUrl = null

      if (imageFile) {
        imageUrl = await uploadImage(imageFile)
      }

      const { error: insertError } = await supabase
        .from('blogs')
        .insert([
          {
            ...formData,
            image: imageUrl,
            date_posted: formData.date_posted || new Date().toISOString().split('T')[0],
          },
        ])

      if (insertError) throw insertError

      setSuccessMsg('Blog post created successfully!')
      setFormData({
        title: '',
        author: '',
        date_posted: '',
        description: '',
        content: '',
        slug: '',
        meta_title: '',
        meta_description: '',
        meta_keywords: '',
        faqs: [] // <-- Reset FAQs
      })
      setImageFile(null)
      setPreviewUrl(null)
    } catch (err) {
      setError(err.message || 'Something went wrong.')
    } finally {
      setLoading(false)
    }
  }

  // Define custom components for markdown rendering
  const markdownComponents = {
    h1: ({node, ...props}) => <h1 className="text-2xl font-bold my-3" {...props} />,
    h2: ({node, ...props}) => <h2 className="text-xl font-bold my-2" {...props} />,
    h3: ({node, ...props}) => <h3 className="text-lg font-bold my-2" {...props} />,
    p: ({node, ...props}) => <p className="my-2 text-gray-800" {...props} />,
    ul: ({node, ...props}) => <ul className="list-disc ml-5 my-2" {...props} />,
    ol: ({node, ...props}) => <ol className="list-decimal ml-5 my-2" {...props} />,
    li: ({node, ...props}) => <li className="my-1" {...props} />,
    a: ({node, ...props}) => <a className="text-blue-600 hover:underline" {...props} target="_blank" rel="noopener noreferrer" />,
    blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-gray-300 pl-4 italic my-3 text-gray-700" {...props} />,
    code: ({node, inline, ...props}) => inline 
      ? <code className="bg-gray-100 px-1 py-0.5 rounded text-pink-600 font-mono text-sm" {...props} />
      : <code className="block bg-gray-100 p-3 rounded-md font-mono text-sm my-3 overflow-auto" {...props} />
  };

  // Shared Markdown Toolbar component
  const MarkdownToolbar = ({ isFullScreen = false }) => (
    <div className={`bg-gray-50 rounded-t-md border border-gray-300 border-b-0 ${isFullScreen ? 'border-0 shadow-lg' : ''}`}>
      {/* Heading Group */}
      <div className="flex flex-wrap border-b border-gray-200">
        <div className="flex border-r border-gray-200 p-1">
          <button 
            type="button" 
            onClick={() => insertMarkdown('h1', 'Heading 1', isFullScreen)} 
            className="p-1.5 hover:bg-blue-50 rounded text-gray-700 hover:text-blue-600 transition-colors" 
            title="Heading 1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8.637 13V3.669H7.379V7.62H2.758V3.67H1.5V13h1.258V8.728h4.62V13h1.259zm5.329 0V3.669h-1.244L10.5 5.316v1.265l2.16-1.565h.062V13h1.244z"/>
            </svg>
          </button>
          <button 
            type="button" 
            onClick={() => insertMarkdown('h2', 'Heading 2', isFullScreen)} 
            className="p-1.5 hover:bg-blue-50 rounded text-gray-700 hover:text-blue-600 transition-colors" 
            title="Heading 2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
              <path d="M7.638 13V3.669H6.38V7.62H1.759V3.67H.5V13h1.258V8.728h4.62V13h1.259zm3.022-6.733v-.048c0-.889.63-1.668 1.716-1.668.957 0 1.675.608 1.675 1.572 0 .855-.554 1.504-1.067 2.085l-3.513 3.999V13H15.5v-1.094h-4.245v-.075l2.481-2.844c.875-.998 1.586-1.784 1.586-2.953 0-1.463-1.155-2.556-2.919-2.556-1.941 0-2.966 1.326-2.966 2.74v.049h1.223z"/>
            </svg>
          </button>
          <button 
            type="button" 
            onClick={() => insertMarkdown('h3', 'Heading 3', isFullScreen)} 
            className="p-1.5 hover:bg-blue-50 rounded text-gray-700 hover:text-blue-600 transition-colors" 
            title="Heading 3"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
              <path d="M7.637 13V3.669H6.379V7.62H1.758V3.67H.5V13h1.258V8.728h4.62V13h1.259zm3.625-4.272h1.018c1.142 0 1.935.67 1.949 1.674.013 1.005-.78 1.737-2.01 1.73-1.08-.007-1.853-.588-1.935-1.32H9.108c.069 1.327 1.224 2.386 3.083 2.386 1.935 0 3.343-1.155 3.309-2.789-.027-1.51-1.251-2.16-2.037-2.249v-.068c.704-.123 1.764-.91 1.723-2.229-.035-1.353-1.176-2.4-2.954-2.385-1.873.006-2.857 1.162-2.898 2.358h1.196c.062-.69.711-1.299 1.696-1.299.998 0 1.695.622 1.695 1.525.007.922-.718 1.592-1.695 1.592h-.964v1.074z"/>
            </svg>
          </button>
        </div>
        
        {/* Text Formatting Group */}
        <div className="flex border-r border-gray-200 p-1">
          <button 
            type="button" 
            onClick={() => insertMarkdown('bold', 'Bold text', isFullScreen)} 
            className="p-1.5 hover:bg-blue-50 rounded text-gray-700 hover:text-blue-600 transition-colors" 
            title="Bold"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8.21 13c2.106 0 3.412-1.087 3.412-2.823 0-1.306-.984-2.283-2.324-2.386v-.055a2.176 2.176 0 0 0 1.852-2.14c0-1.51-1.162-2.46-3.014-2.46H3.843V13H8.21zM5.908 4.674h1.696c.963 0 1.517.451 1.517 1.244 0 .834-.629 1.32-1.73 1.32H5.908V4.673zm0 6.788V8.598h1.73c1.217 0 1.88.492 1.88 1.415 0 .943-.643 1.449-1.832 1.449H5.907z"/>
            </svg>
          </button>
          <button 
            type="button" 
            onClick={() => insertMarkdown('italic', 'Italic text', isFullScreen)} 
            className="p-1.5 hover:bg-blue-50 rounded text-gray-700 hover:text-blue-600 transition-colors" 
            title="Italic"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
              <path d="M7.991 11.674 9.53 4.455c.123-.595.246-.71 1.347-.807l.11-.52H7.211l-.11.52c1.06.096 1.128.212 1.005.807L6.57 11.674c-.123.595-.246.71-1.346.806l-.11.52h3.774l.11-.52c-1.06-.095-1.129-.211-1.006-.806z"/>
            </svg>
          </button>
          <button 
            type="button" 
            onClick={() => insertMarkdown('strikethrough', 'Strikethrough text', isFullScreen)} 
            className="p-1.5 hover:bg-blue-50 rounded text-gray-700 hover:text-blue-600 transition-colors" 
            title="Strikethrough"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
              <path d="M6.333 5.686c0 .31.083.581.27.814H5.166a2.776 2.776 0 0 1-.099-.76c0-1.627 1.436-2.768 3.48-2.768 1.969 0 3.39 1.175 3.445 2.85h-1.23c-.11-1.08-.964-1.743-2.25-1.743-1.23 0-2.18.602-2.18 1.607zm2.194 7.478c-2.153 0-3.589-1.107-3.705-2.81h1.23c.144 1.06 1.129 1.703 2.544 1.703 1.34 0 2.31-.705 2.31-1.675 0-.827-.547-1.374-1.914-1.675L8.046 8.5H1v-1h14v1h-3.504c.468.437.675.994.675 1.697 0 1.826-1.436 2.967-3.644 2.967z"/>
            </svg>
          </button>
        </div>
        
        {/* Lists Group */}
        <div className="flex border-r border-gray-200 p-1">
          <button 
            type="button" 
            onClick={() => insertMarkdown('list', '', isFullScreen)} 
            className="p-1.5 hover:bg-blue-50 rounded text-gray-700 hover:text-blue-600 transition-colors" 
            title="Bullet List"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
            </svg>
          </button>
          <button 
            type="button" 
            onClick={() => insertMarkdown('numbered', '', isFullScreen)} 
            className="p-1.5 hover:bg-blue-50 rounded text-gray-700 hover:text-blue-600 transition-colors" 
            title="Numbered List"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z"/>
              <path d="M1.713 11.865v-.474H2c.217 0 .363-.137.363-.317 0-.185-.158-.31-.361-.31-.223 0-.367.152-.373.31h-.59c.016-.467.373-.787.986-.787.588-.002.954.291.957.703a.595.595 0 0 1-.492.594v.033a.615.615 0 0 1 .569.631c.003.533-.502.8-1.051.8-.656 0-1-.37-1.008-.794h.582c.008.178.186.306.422.309.254 0 .424-.145.422-.35-.002-.195-.155-.348-.414-.348h-.3zm-.004-4.699h-.604v-.035c0-.408.295-.844.958-.844.583 0 .96.326.96.756 0 .389-.257.617-.476.848l-.537.572v.03h1.054V9H1.143v-.395l.957-.99c.138-.142.293-.304.293-.508 0-.18-.147-.32-.342-.32a.33.33 0 0 0-.342.338v.041zM2.564 5h-.635V2.924h-.031l-.598.42v-.567l.629-.443h.635V5z"/>
            </svg>
          </button>
          <button 
            type="button" 
            onClick={() => insertMarkdown('checkbox', '', isFullScreen)} 
            className="p-1.5 hover:bg-blue-50 rounded text-gray-700 hover:text-blue-600 transition-colors" 
            title="Task List"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
              <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z"/>
            </svg>
          </button>
        </div>
      </div>
      
      {/* Additional Elements Row */}
      <div className="flex flex-wrap p-1 justify-between">
        <div className="flex flex-1 flex-wrap">
          <div className="flex border-r border-gray-200 pr-1">
            <button 
              type="button" 
              onClick={() => insertMarkdown('link', 'link text', isFullScreen)} 
              className="p-1.5 hover:bg-blue-50 rounded text-gray-700 hover:text-blue-600 transition-colors" 
              title="Link"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
              </svg>
            </button>
            <button 
              type="button" 
              onClick={() => insertMarkdown('image', 'image alt', isFullScreen)} 
              className="p-1.5 hover:bg-blue-50 rounded text-gray-700 hover:text-blue-600 transition-colors" 
              title="Image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z"/>
              </svg>
            </button>
          </div>
          
          <div className="flex border-r border-gray-200 px-1">
            <button 
              type="button" 
              onClick={() => insertMarkdown('quote', 'blockquote', isFullScreen)} 
              className="p-1.5 hover:bg-blue-50 rounded text-gray-700 hover:text-blue-600 transition-colors" 
              title="Blockquote"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M2.5 3a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1h-11zm5 3a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6zm0 3a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6zm-5 3a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1h-11zm.79-5.373c.112-.078.26-.17.444-.275L3.524 6c-.122.074-.272.17-.452.287-.18.117-.35.26-.51.428a2.425 2.425 0 0 0-.398.562c-.11.207-.164.438-.164.692 0 .36.072.65.217.873.144.219.385.328.72.328.215 0 .383-.07.504-.211a.697.697 0 0 0 .188-.463c0-.23-.07-.404-.211-.521-.137-.121-.326-.182-.568-.182h-.282c.024-.203.065-.37.123-.498a1.38 1.38 0 0 1 .252-.37 1.94 1.94 0 0 1 .346-.298zm2.167 0c.113-.078.262-.17.445-.275L5.692 6c-.122.074-.272.17-.452.287-.18.117-.35.26-.51.428a2.425 2.425 0 0 0-.398.562c-.11.207-.164.438-.164.692 0 .36.072.65.217.873.144.219.385.328.72.328.215 0 .383-.07.504-.211a.697.697 0 0 0 .188-.463c0-.23-.07-.404-.211-.521-.137-.121-.326-.182-.568-.182h-.282a1.75 1.75 0 0 1 .118-.492c.058-.13.144-.254.257-.375a1.94 1.94 0 0 1 .346-.3z"/>
              </svg>
            </button>
          </div>
          
          <div className="flex border-r border-gray-200 px-1">
            <button 
              type="button" 
              onClick={() => insertMarkdown('code', 'code', isFullScreen)} 
              className="p-1.5 hover:bg-blue-50 rounded text-gray-700 hover:text-blue-600 transition-colors" 
              title="Inline Code"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z"/>
              </svg>
            </button>
            <button 
              type="button" 
              onClick={() => insertMarkdown('codeblock', 'code block', isFullScreen)} 
              className="p-1.5 hover:bg-blue-50 rounded text-gray-700 hover:text-blue-600 transition-colors" 
              title="Code Block"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                <path d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0zm2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0z"/>
              </svg>
            </button>
          </div>
          
          <div className="flex pl-1">
            <button 
              type="button" 
              onClick={() => insertMarkdown('hr', '', isFullScreen)} 
              className="p-1.5 hover:bg-blue-50 rounded text-gray-700 hover:text-blue-600 transition-colors" 
              title="Horizontal Rule"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 8a1 1 0 0 1 1-1h14a1 1 0 0 1 0 2H1a1 1 0 0 1-1-1z"/>
              </svg>
            </button>
            <button 
              type="button" 
              onClick={() => insertMarkdown('table', '', isFullScreen)} 
              className="p-1.5 hover:bg-blue-50 rounded text-gray-700 hover:text-blue-600 transition-colors" 
              title="Table"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm0 4h-4v3h3a1 1 0 0 0 1-1v-2zm-5 3v-3H6v3h4zm-5 0v-3H1v2a1 1 0 0 0 1 1h3zm-4-4h4V8H1v3zm0-4h4V4H1v3zm5-3v3h4V4H6zm4 4H6v3h4V8z"/>
              </svg>
            </button>
          </div>
        </div>
        
        {/* Full Screen Toggle Button */}
        <div className="flex items-center pr-1">
          <button
            type="button"
            onClick={toggleFullScreen}
            className="p-1.5 bg-gray-200 hover:bg-blue-100 rounded text-gray-700 hover:text-blue-700 transition-colors flex items-center"
            title={isFullScreen ? "Exit Full Screen" : "Full Screen Editor"}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
              {isFullScreen ? (
                // Exit full screen icon
                <path d="M5.5 0a.5.5 0 0 1 .5.5v4A1.5 1.5 0 0 1 4.5 6h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5zm5 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 10 4.5v-4a.5.5 0 0 1 .5-.5zM0 10.5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 6 11.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zm10 1a1.5 1.5 0 0 1 1.5-1.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4z"/>
              ) : (
                // Enter full screen icon
                <path d="M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1h-4zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zM.5 10a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5z"/>
              )}
            </svg>
            <span className="ml-1 text-sm font-medium hidden sm:inline">
              {isFullScreen ? "Exit" : "Full Screen"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white my-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 pb-4">Create Blog Post</h2>
      
      {(successMsg || error) && (
        <div className={`mb-4 p-3 rounded-md ${successMsg ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
          {successMsg || error}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input
              type="text"
              name="title"
              placeholder="Enter blog title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full p-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Author</label>
            <input
              type="text"
              name="author"
              placeholder="Enter author name"
              value={formData.author}
              onChange={handleChange}
              required
              className="w-full p-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Date Posted</label>
          <input
            type="date"
            name="date_posted"
            value={formData.date_posted}
            onChange={handleChange}
            className="w-full p-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Slug</label>
            <input
              type="text"
              name="slug"
              placeholder="Enter URL-friendly slug"
              value={formData.slug}
              onChange={handleChange}
              required
              className="w-full p-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Meta Title</label>
            <input
              type="text"
              name="meta_title"
              placeholder="Enter meta title for SEO"
              value={formData.meta_title}
              onChange={handleChange}
              className="w-full p-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Meta Description</label>
          <textarea
            name="meta_description"
            placeholder="Enter meta description for SEO"
            value={formData.meta_description}
            onChange={handleChange}
            rows="3"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Meta Keywords</label>
          <input
            type="text"
            name="meta_keywords"
            placeholder="Enter meta keywords (comma-separated)"
            value={formData.meta_keywords}
            onChange={handleChange}
            className="w-full p-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        {/* Mobile view tabs */}
        <div className="flex md:hidden mb-2 border-b">
          <button 
            type="button"
            onClick={() => setActiveTab('edit')}
            className={`px-4 py-2 ${activeTab === 'edit' 
              ? 'border-b-2 border-blue-500 text-blue-600' 
              : 'text-gray-500'}`}
          >
            Edit
          </button>
          <button 
            type="button"
            onClick={() => setActiveTab('preview')}
            className={`px-4 py-2 ${activeTab === 'preview' 
              ? 'border-b-2 border-blue-500 text-blue-600' 
              : 'text-gray-500'}`}
          >
            Preview
          </button>
        </div>
        
        {/* Markdown editor with live preview */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className={`${activeTab === 'edit' ? 'block' : 'hidden'} md:block md:w-1/2`}>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description (Markdown)
            </label>
            
            {/* Modern Markdown Toolbar */}
            <MarkdownToolbar isFullScreen={false} />
            
            <textarea
              ref={descriptionTextareaRef}
              name="description"
              placeholder="Write markdown content here..."
              value={formData.description}
              onChange={handleChange}
              rows="12"
              className="w-full p-3 border border-gray-300 rounded-b-md font-mono focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-inner"
            />
          </div>
          
          <div className={`${activeTab === 'preview' ? 'block' : 'hidden'} md:block md:w-1/2`}>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Preview
            </label>
            <div className="border border-gray-300 rounded-md p-4 h-[422px] overflow-auto bg-white prose prose-sm max-w-none shadow-inner">
              {formData.description ? (
                <ReactMarkdown 
                  remarkPlugins={[remarkGfm]} 
                  components={markdownComponents}
                >
                  {formData.description}
                </ReactMarkdown>
              ) : (
                <p className="text-gray-400 italic">Preview will appear here...</p>
              )}
            </div>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Additional Content</label>
          <textarea
            name="content"
            placeholder="Additional content or notes"
            value={formData.content}
            onChange={handleChange}
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Featured Image</label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleImageChange}
              className="hidden" 
              id="image-upload" 
            />
            <label 
              htmlFor="image-upload" 
              className="cursor-pointer inline-block px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md"
            >
              Choose Image
            </label>
            <span className="block mt-1 text-sm text-gray-500">
              Supported formats: JPG, PNG, GIF, WEBP
            </span>
          </div>
          {previewUrl && (
            <div className="mt-3">
              <p className="text-sm font-medium text-gray-700 mb-1">Image Preview</p>
              <div className="border rounded-md p-2 bg-gray-50">
                <Image
                  src={previewUrl}
                  alt="Preview"
                  width={400}
                  height={256}
                  className="max-h-64 mx-auto rounded object-contain"
                />
                <button
                  type="button"
                  onClick={() => {
                    setImageFile(null);
                    setPreviewUrl(null);
                  }}
                  className="mt-2 px-3 py-1 text-sm text-red-600 hover:bg-red-50 rounded"
                >
                  Remove
                </button>
              </div>
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">FAQs</label>
          {/* Upload JSON file for FAQs */}
          <div className="flex items-center gap-3 mb-2">
            <input
              type="file"
              accept="application/json"
              id="faq-json-upload"
              className="hidden"
              onChange={e => {
                const file = e.target.files[0];
                if (!file) return;
                const reader = new FileReader();
                reader.onload = evt => {
                  try {
                    const json = JSON.parse(evt.target.result);
                    // Accept array of {question, answer}
                    if (Array.isArray(json) && json.every(f => f.question && f.answer)) {
                      setFormData(f => ({ ...f, faqs: json }));
                      setError(null);
                    } else {
                      setError('Invalid FAQ JSON format. Must be an array of {question, answer}.');
                    }
                  } catch {
                    setError('Invalid JSON file.');
                  }
                };
                reader.readAsText(file);
              }}
            />
            <label
              htmlFor="faq-json-upload"
              className="px-3 py-1 bg-blue-100 text-blue-700 rounded cursor-pointer hover:bg-blue-200"
            >
              Upload FAQs JSON
            </label>
            <span className="text-xs text-gray-500">Upload a JSON file: <code>[{"{question, answer}"}]</code></span>
          </div>
          {formData.faqs.map((faq, idx) => (
            <div key={idx} className="mb-2 flex gap-2">
              <input
                type="text"
                placeholder="Question"
                value={faq.question}
                onChange={e => {
                  const newFaqs = [...formData.faqs];
                  newFaqs[idx].question = e.target.value;
                  setFormData(f => ({ ...f, faqs: newFaqs }));
                }}
                className="flex-1 p-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                placeholder="Answer"
                value={faq.answer}
                onChange={e => {
                  const newFaqs = [...formData.faqs];
                  newFaqs[idx].answer = e.target.value;
                  setFormData(f => ({ ...f, faqs: newFaqs }));
                }}
                className="flex-1 p-2 border border-gray-300 rounded"
              />
              <button
                type="button"
                onClick={() => {
                  setFormData(f => ({
                    ...f,
                    faqs: f.faqs.filter((_, i) => i !== idx)
                  }));
                }}
                className="px-2 text-red-600"
                title="Remove FAQ"
              >✕</button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => setFormData(f => ({
              ...f,
              faqs: [...f.faqs, { question: '', answer: '' }]
            }))}
            className="mt-2 px-3 py-1 bg-blue-100 text-blue-700 rounded"
          >
            Add FAQ
          </button>
        </div>
        
        <div className="flex justify-center pt-4">
          <button
            type="submit"
            disabled={loading}
            className="px-8 py-3 font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:opacity-50"
          >
            {loading ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
              </span>
            ) : 'Submit Post'}
          </button>
        </div>
      </form>

      {/* Full Screen Editor Modal */}
      {isFullScreen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col">
          <div className="bg-white p-4 shadow-xl flex items-center justify-between">
            <h3 className="text-lg font-medium">Markdown Editor</h3>
            <button
              onClick={toggleFullScreen}
              className="p-2 rounded-md hover:bg-gray-200 focus:outline-none"
              title="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
              </svg>
            </button>
          </div>
          
          <div className="flex-1 flex flex-col md:flex-row p-4 gap-4 overflow-auto">
            <div className="flex-1 flex flex-col">
              <MarkdownToolbar isFullScreen={true} />
              <textarea
                ref={fullScreenTextareaRef}
                value={formData.description}
                onChange={handleFullScreenChange}
                className="flex-1 p-4 border border-gray-300 font-mono focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-inner"
                placeholder="Write markdown content here..."
              />
            </div>
            <div className="hidden md:block md:w-1/2 bg-white border border-gray-300 rounded-md overflow-auto p-4 prose prose-sm max-w-none">
              <ReactMarkdown 
                remarkPlugins={[remarkGfm]} 
                components={markdownComponents}
              >
                {formData.description || 'Preview will appear here...'}
              </ReactMarkdown>
            </div>
          </div>
          
          <div className="bg-gray-100 p-4 flex justify-end">
            <button
              onClick={toggleFullScreen}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium"
            >
              Apply & Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default BlogForm