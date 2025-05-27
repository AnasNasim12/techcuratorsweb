import Landing_Page from "./landingpage";


export const metadata = {
  title: 'TransCurators - Curate Your Digital Experience',
  description: 'This is online platform for curating and sharing digital content, including articles, videos, and more.',
  // Injecting custom meta tag (Google Site Verification)
  other: {
    'google-site-verification': '0IvUSzCK_JefzDYiMri8LYBU1ie-Wu65B7sAS-ls4Hg',
  },
};

export default function Page() {
  return <Landing_Page />;
}
