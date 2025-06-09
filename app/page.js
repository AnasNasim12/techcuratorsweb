import Landing_Page from "./landingpage";
import Head from "next/head";

export const metadata = {
  title: 'Quality Content Writing Services | Content Writing Agency | TransCurators',
  description: 'TransCurators is a top content writing services agency in India offering SEO-friendly blogs, articles & web content. Get high-quality content for Brands. Request a quote today!',
  // Injecting custom meta tag (Google Site Verification)
  other: {
    'google-site-verification': '0IvUSzCK_JefzDYiMri8LYBU1ie-Wu65B7sAS-ls4Hg',
  },
};



export default function LandingPage() {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "TransCurators",
              "url": "https://www.transcurators.com/",
              "logo": "https://www.transcurators.com/Trans_logo.svg",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91 7678144482",
                "contactType": "sales",
                "areaServed": "IN",
                "availableLanguage": ["en", "Hindi"],
              },
              "sameAs": [
                "https://www.instagram.com/transcurators/?hl=en",
                "https://www.linkedin.com/company/transcurators/",
                "https://www.facebook.com/share/19TpYuxS1i/?mibextid=wwXIfr",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "TransCurators",
              "image": "https://www.transcurators.com/Trans_logo.svg",
              "@id": "",
              "url": "https://www.transcurators.com/",
              "telephone": "+91 7678144482",
              "priceRange": "₹",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "2nd Floor, C-5, Pocket C1",
                "addressLocality": "New Krishna Park, Janakpuri",
                "postalCode": "110018",
                "addressCountry": "IN",
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 28.6295355,
                "longitude": 77.0728921,
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                "opens": "10:30",
                "closes": "19:00",
              },
              "sameAs": [
                "https://www.instagram.com/transcurators/?hl=en",
                "https://www.facebook.com/share/19TpYuxS1i/?mibextid=wwXIfr",
                "https://www.linkedin.com/company/transcurators/",
              ],
            }),
          }}
        />
      </Head>
      <main>
      
        <Landing_Page /> {/* Client component for interactive parts */}
        
      </main>
    </>
  );
}
  