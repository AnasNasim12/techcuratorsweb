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

export default function Page() {
  return (
    <>
    <Head>
      
        <link rel="canonical" href="https://www.transcurators.com/" />
    </Head>
  <Landing_Page />
  </>
);
}
