import Blogs from "./blog";

export const metadata = {
  title: 'Blogs on Content Writing, SEO, and more - Transcurators ',
  description: ' Explore expert blogs by Transcurators on content writing, SEO, PPC, and more. Get actionable tips, trends, and strategies to grow your brand. Read more!',
  // Injecting custom meta tag (Google Site Verification)
  alternates: {
    canonical: "https://www.transcurators.com/blog",
  },
 
};

export default function Page() {
  return (
  
   
  <Blogs />

);
}
