// This is now a Server Component by default

import AboutUs from "./AboutClient.";
import dynamic from 'next/dynamic';

// Dynamically import the client component
const AboutUs = dynamic(() => import('./AboutClient'), { ssr: false });

export const metadata = {
  title: 'Simplifying complexity, Amplifying brand impact',
  description:
    'We don’t just build brands—we craft legacies. It’s not about logos or taglines; it’s about making people feel something real. Every word, every visual, every campaign—it all adds up to something bigger than just business. We turn ideas into impact, and stories into movements. Forget cookie-cutter marketing. We bring an edge, an attitude, and an approach that gets results. Your brand deserves better—and we make it happen.',
  keywords: ['Automotive', 'Healthcare', 'FinTech', 'EdTech', 'Real Estate'],
  alternates: {
    canonical: 'https://www.transcurators.com/about-us',
  },
};

export default function AboutPage() {
  return <AboutUs />;
}
