import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/navbar/page";
import Footer from "./components/footer/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Quality Content Writing Services | Content Writing Agency | TransCurators",
  description: "TransCurators is a top content writing services agency in India offering SEO-friendly blogs, articles & web content. Get high-quality content for Brands. Request a quote today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
