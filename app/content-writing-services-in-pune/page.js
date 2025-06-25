import ContentPune from "./contentwritingpune";

export const metadata = {
  title: 'Content Writing Services in Pune - TransCurators',
  description: 'Looking for top content writing services in Pune? TransCurators delivers SEO-optimized, engaging content that boosts traffic and conversions. Contact us now!',
  // Injecting custom meta tag (Google Site Verification)
  alternates: {
    canonical: "https://www.transcurators.com/content-writing-services-in-pune",
  },
};

export default function Page() {
  return (
    <ContentPune />
  );
}

