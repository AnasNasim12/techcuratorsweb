import { supabase } from '@/lib/supabaseClient';
import CaseStudyDetailPage from './CaseStudyDetailPage';

// Define dynamic metadata
export async function generateMetadata(props) {
  const params = await props.params;
  const { slug } = params;

  try {
    const { data, error } = await supabase
      .from('casestd')
      .select('seo_title, seo_description, seo_keywords, title, author, image')
      .eq('slug', slug)
      .single();

    if (error || !data) {
      console.error('Error fetching metadata:', error);
      return {
        title: 'Blog Not Found',
        description: 'The blog post could not be found.',
      };
    }

    return {
      title: data.seo_title || data.title || 'Default Blog Title',
      description: data.seo_description || '',
      keywords: data.seo_keywords || '',
      authors: [{ name: data.author || '' }],
      openGraph: {
        title: data.seo_title || data.title || 'Default Blog Title',
        description: data.seo_description || '',
        images: data.image ? [{ url: data.image, alt: data.title }] : [],
        type: 'article',
        url: `https://yourdomain.com/blog/${slug}`, // Replace with your domain
      },
      twitter: {
        card: 'summary_large_image',
        title: data.seo_title || data.title || 'Default Blog Title',
        description: data.seo_description || '',
        images: data.image ? [data.image] : [],
      },
    };
  } catch (err) {
    console.error('Error in generateMetadata:', err);
    return {
      title: 'Error',
      description: 'An error occurred while loading the blog post.',
    };
  }
}

// Server component to pass data to client component
export default async function BlogPage(props) {
  const params = await props.params;
  const { slug } = params;

  // Fetch case study data for rendering
  const { data: caseStudy, error } = await supabase
    .from('casestd')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error || !caseStudy) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center max-w-md p-6 bg-white rounded-lg shadow-md">
          <svg
            className="w-16 h-16 text-gray-400 mx-auto mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Case Study Not Found</h2>
          <p className="text-gray-600">The case study you're looking for doesn't exist or has been removed.</p>
        </div>
      </div>
    );
  }

  // Pass case study data to the client component
  return <CaseStudyDetailPage caseStudy={caseStudy} />;
}