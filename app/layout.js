// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ClientLayoutWrapper from "./components/ClientLayoutWrapper";

export const metadata = {
  title: "TransCurators - Curate Your Digital Experience",
  description: "This is an online platform for curating and sharing digital content, including articles, videos, and more.",
  icons: {
    icon: "/Trans-icon.ico",
  },
  other: {
    "google-site-verification": "0IvUSzCK_JefzDYiMri8LYBU1ie-Wu65B7sAS-ls4Hg",
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "TransCurators",
              "url": "https://www.transcurators.com/",
              "logo": "  https://www.transcurators.com/Trans_logo.svg",
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
        <Script id="clarity" strategy="beforeInteractive">
          {`(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "n7q03mty84");`}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KR79DX3H');`}
        </Script>

       

        {/* Google Tag Manager noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KR79DX3H"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
