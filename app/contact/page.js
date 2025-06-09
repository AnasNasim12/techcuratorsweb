    // This is now a Server Component by default
import Contact from "./conatcus";
import Head from "next/head";
export const metadata = {
  title: 'Read, Learn, and Stay One Step Ahead!',
  description: "Bring Ideas, We Bring Skills. Let's Create!",
  keywords: ['Contact ', 'Contact Us', 'Transcurators'],
};

export default function AboutPage() {
  return (
    <>
     <Head>
      
        <link rel="canonical" href="https://www.transcurators.com/contact" />
    </Head>
  
  <Contact />
</>
  );
}
