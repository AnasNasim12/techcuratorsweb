    // This is now a Server Component by default
import Contact from "./conatcus";

export const metadata = {
  title: 'Read, Learn, and Stay One Step Ahead!',
  description: "Bring Ideas, We Bring Skills. Let's Create!",
  keywords: ['Contact ', 'Contact Us', 'Transcurators'],
   alternates: {
    canonical: 'https://www.transcurators.com/contact',
  },
};

export default function AboutPage() {
  return (
    <>
    
  
  <Contact />
</>
  );
}
